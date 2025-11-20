import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  className = ''
}) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300';
  
  const variantStyles = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 active:scale-95',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
