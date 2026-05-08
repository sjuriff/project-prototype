'use client'
import {Calendar} from "lucide-react";

type Props = {
  value?: { from?: Date; to?: Date };
  onChange?: (range: { from?: Date; to?: Date }) => void;
  className?: string;
};

import {useState, useEffect, useRef} from "react";

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function startOfDay(d: Date) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}
function sameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function formatDate(d: Date) {
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}
function diffDays(a: Date, b: Date) {
  return Math.round((startOfDay(b).getTime() - startOfDay(a).getTime()) / 86400000);
}

function buildMonth(year: number, month: number) {
  const first = new Date(year, month, 1);
  // Monday-first offset
  const offset = (first.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (Date | null)[] = [];
  for (let i = 0; i < offset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export default function DatePicker({ value, onChange, className }: Props) {
  const today = startOfDay(new Date());
  const [internal, setInternal] = useState<{ from?: Date; to?: Date }>(value ?? {});
  const range = value ?? internal;
  const [view, setView] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const update = (next: { from?: Date; to?: Date }) => {
    setInternal(next);
    onChange?.(next);
  };

  const handlePick = (d: Date) => {
    if (d < today) return;
    const { from, to } = range;
    if (!from || (from && to)) {
      update({ from: d, to: undefined });
    } else if (d < from) {
      update({ from: d, to: undefined });
    } else if (sameDay(d, from)) {
      update({});
    } else {
      update({ from, to: d });
    }
  };

  const nights = range.from && range.to ? diffDays(range.from, range.to) : 0;

  const renderMonth = (base: Date) => {
    const cells = buildMonth(base.getFullYear(), base.getMonth());
    return (
      <div style={{ flex: 1, minWidth: 240 }}>
        <div style={{ textAlign: "center", fontWeight: 600, marginBottom: 8 }}>
          {MONTHS[base.getMonth()]} {base.getFullYear()}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2 }}>
          {WEEKDAYS.map((w) => (
            <div key={w} style={{ textAlign: "center", fontSize: 12, color: "#6b7280", padding: "4px 0" }}>
              {w}
            </div>
          ))}
          {cells.map((d, i) => {
            if (!d) return <div key={i} />;
            const disabled = d < today;
            const isFrom = range.from && sameDay(d, range.from);
            const isTo = range.to && sameDay(d, range.to);
            const inRange = range.from && range.to && d > range.from && d < range.to;
            const selected = isFrom || isTo;
            const bg = selected ? "#111827" : inRange ? "#e5e7eb" : "transparent";
            const color = selected ? "#fff" : disabled ? "#cbd5e1" : "#111827";
            return (
              <button
                key={i}
                type="button"
                disabled={disabled}
                onClick={() => handlePick(d)}
                style={{
                  padding: "8px 0",
                  fontSize: 14,
                  border: "none",
                  borderRadius: 6,
                  background: bg,
                  color,
                  cursor: disabled ? "not-allowed" : "pointer",
                }}
              >
                {d.getDate()}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const nextMonth = new Date(view.getFullYear(), view.getMonth() + 1, 1);
  const label = range.from
    ? range.to
      ? `${formatDate(range.from)} – ${formatDate(range.to)}`
      : `${formatDate(range.from)} – velg sluttdato`
    : "Velg dagene du reiser";

  return (
    <div ref={rootRef} className={className} style={{ position: "relative", display: "inline-block", fontFamily: "system-ui, sans-serif" }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-center"
        style={{
          padding: "10px 14px",
          border: "1px solid #d1d5db",
          borderRadius: 8,
          background: "#fff",
          cursor: "pointer",
          minWidth: 280,
          textAlign: "left",
          fontSize: 14,
          color: range.from ? "#111827" : "#6b7280",
        }}
      >
        <Calendar className="text-tertiary"/> &nbsp; {label}
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            left: 0,
            background: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: 10,
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            padding: 16,
            zIndex: 50,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <button
              type="button"
              onClick={() => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))}
              style={{ border: "none", background: "transparent", cursor: "pointer", fontSize: 18, padding: "4px 10px" }}
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))}
              style={{ border: "none", background: "transparent", cursor: "pointer", fontSize: 18, padding: "4px 10px" }}
            >
              ›
            </button>
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            {renderMonth(view)}
            {renderMonth(nextMonth)}
          </div>
          {nights > 0 && (
            <div className="text-primary-text mt-4 font-body" style={{  textAlign: "center" }}>
              {nights} {nights === 1 ? "dag" : "dager"} 
            </div>
          )}
        </div>
      )}
    </div>
  );
}