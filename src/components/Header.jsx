import React, { useContext } from 'react';
import { WalletContext } from './WalletContext';
import { ThemeContext } from './ThemeContext';

const Header = () => {
  const { walletAddress, isConnected, connectWallet } = useContext(WalletContext);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="bg-gray-900 dark:bg-gray-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">NFT Marketplace</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-gray-400">Home</a></li>
            <li><a href="#explore" className="hover:text-gray-400">Explore</a></li>
            <li><a href="#create" className="hover:text-gray-400">Create</a></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={connectWallet}
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            {isConnected ? `Connected: ${walletAddress.slice(0, 6)}...` : 'Connect Wallet'}
          </button>
          <button
            onClick={toggleTheme}
            className="bg-gray-600 px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
