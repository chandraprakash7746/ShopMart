import React from 'react';
import { User } from 'lucide-react';

const ProfileIcon = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Profile"
      className="p-2 text-gray-600 hover:text-[#D13B53] transition-colors rounded-full hover:bg-gray-100"
    >
      <User className="w-5 h-5 stroke-[1.8]" />
    </button>
  );
};

export default ProfileIcon;