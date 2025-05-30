import React, { useState } from 'react';

export default function LocalizedExpandable({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-lg my-4 overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 hover:bg-gray-200"
      >
        <span className="font-medium">{title}</span>
        <span className="text-sm text-gray-600">
          {open ? 'Скрыть ▲' : 'Показать ▼'}
        </span>
      </button>
      {open && <div className="p-4 bg-white">{children}</div>}
    </div>
  );
}
