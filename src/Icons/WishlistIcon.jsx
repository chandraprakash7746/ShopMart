import React from 'react';
import { Heart } from 'lucide-react';

const WishlistIcon = ({ count = 0, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Wishlist"
      className="relative p-2 text-gray-600 hover:text-[#D13B53] transition-colors rounded-full hover:bg-gray-100"
    >
      <Heart className="w-5 h-5 stroke-[1.8]" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[16px] h-4 px-1 text-[10px] font-bold text-white bg-[#D13B53] rounded-full">
          {count}
        </span>
      )}
    </button>
  );
};

export default WishlistIcon;