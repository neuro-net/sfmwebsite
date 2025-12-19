import React from 'react';

export const Button = ({ 
  children, 
  onClick, 
  variant = 'primary',
  className = ''
}: { 
  children?: React.ReactNode, 
  onClick?: () => void, 
  variant?: 'primary' | 'secondary' | 'outline',
  className?: string
}) => {
  // Win95-ish button style but cleaner
  const baseStyle = "font-mono text-sm uppercase px-4 py-2 border-2 transition-all active:translate-y-1 active:shadow-none duration-75 flex items-center justify-center gap-2 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-lab-accent text-white border-black shadow-retro hover:bg-lab-accentHOVER hover:shadow-retro-hover",
    secondary: "bg-lab-warm text-black border-black shadow-retro hover:bg-yellow-400 hover:shadow-retro-hover",
    outline: "bg-transparent text-black border-black hover:bg-black hover:text-white"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {/* Glitch hover effect overlay */}
      <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-100 ease-steps-2" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

export const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12 relative">
    <div className="flex items-center gap-4 mb-2">
      <div className="h-4 w-4 bg-lab-accent shadow-retro"></div>
      <h2 className="text-4xl font-mono font-bold tracking-tighter uppercase text-lab-black">
        {title}
      </h2>
      <div className="h-[2px] bg-black flex-grow"></div>
    </div>
    {subtitle && <p className="ml-8 font-mono text-gray-600 bg-white inline-block px-2 border border-black shadow-[2px_2px_0_0_#000]">{subtitle}</p>}
  </div>
);

// Changed Card to look like a software window
export const Card = ({ children, className = "", title }: { children?: React.ReactNode, className?: string, title?: string }) => (
  <div className={`bg-white border-2 border-black shadow-retro flex flex-col ${className}`}>
    {title && (
      <div className="bg-lab-accent text-white px-2 py-1 font-mono text-xs font-bold uppercase border-b-2 border-black flex justify-between items-center">
        <span>{title}</span>
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-white border border-black"></div>
          <div className="w-2 h-2 bg-white border border-black"></div>
        </div>
      </div>
    )}
    <div className="p-4 flex-grow relative">
       {/* Corner decorations for tech feel */}
       {!title && (
         <>
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-black"></div>
          <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-black"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-black"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-black"></div>
         </>
       )}
       {children}
    </div>
  </div>
);