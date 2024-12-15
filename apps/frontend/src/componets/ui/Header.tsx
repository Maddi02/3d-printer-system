import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  hideHeadingText?: boolean;
}

const Header: React.FC<HeaderProps> = () => {
  const getHeadingText = () => {
    return (
      <h2
        className="ml-4 items-center text-2xl font-bold text-white"
      >
      </h2>
    );
  };

  return (
    <div
      className="ml-2 flex items-center pb-1 md:mb-3 md:ml-7"
    >
      <div className={`rounded-b-[8px]`}>
        <Link to="/">
        </Link>
      </div>
      {getHeadingText()}
    </div>
  );
};

export default Header;
