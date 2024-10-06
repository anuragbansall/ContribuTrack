import React from 'react';

function Button({ type = 'submit', label, handleFunc, className = '', ...props }) {
  return (
    <button
      type={type}
      onClick={handleFunc} // Correctly use handleFunc
      {...props}
      className={`bg-[#5a35de] hover:bg-[#5838c9] duration-200 font-semibold px-4 py-2 rounded-md ${className}`}
    >
      {label}
    </button>
  );
}

export default Button;
