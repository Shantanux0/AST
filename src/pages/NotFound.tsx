import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center pt-36 pb-20 bg-[#FAF8F4] text-[#0E0E0C]">
      <div className="max-w-md mx-auto px-6 text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-[#FF5B1F] block mb-4">
          Error 404
        </span>
        <h1 className="font-serif text-5xl sm:text-6xl mb-4">
          Page not found.
        </h1>
        <p className="text-sm text-[#6B6B66] mb-8">
          The requested route does not exist or has been relocated.
        </p>
        <Link to="/" className="btn-editorial-solid text-xs py-3 px-6">
          Return to Homepage →
        </Link>
      </div>
    </div>
  );
};
