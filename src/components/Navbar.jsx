import React from 'react';
import Logo from '../Icons/Logo';
import SearchBar from './SearchBar';
import WishlistIcon from '../Icons/WishlistIcon';
import CartIcon from '../Icons/CartIcon';
import ProfileIcon from '../Icons/ProfileIcon';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* SearchBar Desktop */}
          <div className="hidden sm:flex flex-1 justify-center px-4">
            <SearchBar />
          </div>

          {/* Icons Right Side */}
          <div className="flex items-center gap-1 sm:gap-2">
            <WishlistIcon count={0} onClick={() => {}} />
            <CartIcon count={0} onClick={() => {}} />
            <ProfileIcon onClick={() => {}} />
          </div>

        </div>

        {/* SearchBar Mobile */}
        <div className="sm:hidden pb-3 pt-1">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Navbar;