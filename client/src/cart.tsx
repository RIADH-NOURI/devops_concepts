import React from 'react';
import { X, Trash2 } from 'lucide-react';

function Cart({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
      <div className={`fixed right-0 top-0 h-full w-1/3 bg-white shadow-lg border-l border-gray-200 flex flex-col ${open ? 'translate-x-0' : 'translate-x-full'}`}   data-testid="cart-panel"
>
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button className={  `text-gray-600 hover:text-red-500 transition `} onClick={onClose}>
            <span className="sr-only">Close</span>
            <X size={24} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-4 py-2">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between py-3 border-b border-gray-100"
            >
              <div>
                <h3 className="font-medium text-sm">Product #{item}</h3>
                <p className="text-gray-500 text-xs">Qty: 1</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">$12.99</span>
                <button className="text-gray-500 hover:text-red-500 transition">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-4 py-3">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-700">Total:</span>
            <span className="font-bold">$38.97</span>
          </div>
          <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
            Checkout
          </button>
        </div>
      </div>
  );
}

export default Cart;
