import { Minus, Plus, X, Globe } from "lucide-react";

interface CartItemProps {
  id: string;
  title: string;
  data: string;
  vadility: string;
  price: number;
  quantity: number;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export function CartItem({
  id,
  data,
  title,
  validity,
  price,
  quantity,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) {
  return (
    <div className="flex items-start gap-4 py-6 border-b border-[#e5e7eb]">
      <div className="flex items-center justify-center w-16 h-16 bg-[var(--color-secondary)] rounded-lg flex-shrink-0">
        <Globe className="w-8 h-8 text-secondary-text" />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="mb-1" style={{ color: 'var(--color-primary-text)' }}>
          {title}
        </h3>
        <div className="flex gap-3 mb-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded-md" style={{ 
            backgroundColor: 'var(--color-surface-dim)', 
            color: 'var(--color-secondary-text)',
            fontSize: '0.875rem'
          }}>
            {data}
          </span>
          <span className="inline-flex items-center px-2 py-0.5 rounded-md" style={{ 
            backgroundColor: 'var(--color-surface-dim)', 
            color: 'var(--color-secondary-text)',
            fontSize: '0.875rem'
          }}>
            {validity}
          </span>
        </div>
        <p style={{ color: 'var(--color-primary-text)', fontSize: '1.125rem' }}>
          {price.toFixed(2)}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 border rounded-lg px-1 py-1" style={{ borderColor: '#e5e7eb' }}>
          <button
            onClick={() => onUpdateQuantity(id, Math.max(1, quantity - 1))}
            className="p-1.5 hover:bg-[var(--color-surface)] rounded transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" style={{ color: 'var(--color-secondary-text)' }} />
          </button>
          <span className="w-8 text-center" style={{ color: 'var(--color-primary-text)' }}>
            {quantity}
          </span>
          <button
            onClick={() => onUpdateQuantity(id, quantity + 1)}
            className="p-1.5 hover:bg-[var(--color-surface)] rounded transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" style={{ color: 'var(--color-secondary-text)' }} />
          </button>
        </div>

        <button
          onClick={() => onRemove(id)}
          className="p-2 hover:bg-[var(--color-surface)] rounded-lg transition-colors"
          aria-label="Remove item"
        >
          <X className="w-5 h-5" style={{ color: 'var(--color-secondary-text)' }} />
        </button>
      </div>
    </div>
  );
}
