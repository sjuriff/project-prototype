import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function usePortal() {
  const [body, setBody] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setBody(document.getElementById('header-wrapper'));
  }, []); // You were missing this dependency array

  return (element: React.ReactNode) => {
    if (!body) return null; // Don't render until body is available
    return createPortal(element, body);
  };
}