import React from "react";

export function Button({ 
  children, 
  onClick, 
  className = "", 
  variant = "default", 
  size = "md", 
  disabled = false 
}) {
  const base = "rounded-lg font-medium transition-all focus:outline-none disabled:opacity-50";
  const variants = {
    default: "bg-indigo-600 hover:bg-indigo-700 text-white",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    ghost: "text-gray-600 hover:bg-gray-100",
    destructive: "bg-red-500 hover:bg-red-600 text-white",
  };
  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };
  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
