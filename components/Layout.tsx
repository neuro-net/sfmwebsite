import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Menu, X, Microscope, CircuitBoard, Terminal, Globe } from 'lucide-react';

const NavItem = ({ to, children }: { to: string; children?: React.ReactNode }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `relative px-4 py-2 font-mono text-sm font-bold uppercase tracking-wide border-2 transition-all
      ${
        isActive
          ? 'bg-lab-black text-white border-black shadow-none translate-y-[2px] translate-x-[2px]'
          : 'bg-lab-paper text-lab-black border-black shadow-retro hover:shadow-retro-hover hover:translate-y-[1px] hover:translate-x-[1px]'
      }`
    }
  >
    {children}
  </NavLink>
);

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#e0e0e0] border-b-4 border-black p-2">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-14 bg-white border-2 border-black px-4 shadow-retro">
          {/* Brand */}
          <div className="flex-shrink-0 flex items-center gap-4">
            <div className="bg-lab-accent p-1 border-2 border-black shadow-[2px_2px_0_0_#000]">
              <CircuitBoard className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-mono font-black text-xl leading-none tracking-tighter text-black">
                SFM_GROUP<span className="animate-pulse">_</span>
              </h1>
              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
                Ver 2.5.1
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-4">
            <NavItem to="/">Main</NavItem>
            <NavItem to="/research">Research</NavItem>
            <NavItem to="/people">Personnel</NavItem>
            <NavItem to="/gallery">Visuals</NavItem>
            <NavItem to="/resources">Data</NavItem>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1 border-2 border-black bg-lab-warm shadow-retro active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden mt-2 border-2 border-black bg-white shadow-retro p-4 animate-in slide-in-from-top-2 mx-auto max-w-7xl">
          <div className="flex flex-col gap-2">
            <NavItem to="/">Main</NavItem>
            <NavItem to="/research">Research</NavItem>
            <NavItem to="/people">Personnel</NavItem>
            <NavItem to="/gallery">Visuals</NavItem>
            <NavItem to="/resources">Data</NavItem>
          </div>
        </div>
      )}
    </header>
  );
};

export const Footer = () => (
  <footer className="bg-lab-black text-white py-12 mt-auto border-t-8 border-lab-accent">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 font-mono text-sm">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 mb-4">
           <Terminal className="h-5 w-5 text-lab-warm" />
           <span className="font-bold text-lg text-lab-warm">SYSTEM STATUS: ONLINE</span>
        </div>
        <p className="font-sans text-gray-400 max-w-md mb-4">
          Sensors & Functional Materials Laboratory.
          Advancing the frontier of functional materials for a connected world through rigorous synthesis and analysis.
        </p>
        <div className="inline-block border border-gray-600 px-2 py-1 text-xs text-gray-500">
          LAST_UPDATE: {new Date().toLocaleDateString()}
        </div>
      </div>
      
      <div>
        <h3 className="font-bold text-lab-accent mb-4 uppercase decoration-2 underline underline-offset-4">Connect</h3>
        <ul className="space-y-2">
           <li className="flex items-center gap-2"><div className="w-2 h-2 bg-lab-warm"></div> Building 4, Room 202</li>
           <li className="flex items-center gap-2"><div className="w-2 h-2 bg-lab-warm"></div> 123 Science Drive</li>
           <li className="flex items-center gap-2"><div className="w-2 h-2 bg-lab-warm"></div> contact@sfmlab.edu</li>
        </ul>
      </div>

      <div className="flex flex-col justify-end">
         <div className="bg-gray-800 p-4 border border-gray-700 font-mono text-xs">
           <div className="flex justify-between mb-1">
             <span>CPU</span>
             <span>12%</span>
           </div>
           <div className="w-full bg-gray-900 h-2">
             <div className="bg-lab-accent h-full w-[12%]"></div>
           </div>
           
           <div className="flex justify-between mt-2 mb-1">
             <span>MEM</span>
             <span>45%</span>
           </div>
           <div className="w-full bg-gray-900 h-2">
             <div className="bg-lab-warm h-full w-[45%]"></div>
           </div>
         </div>
         <div className="mt-4 text-xs text-gray-500 text-right">
           © 2015-{new Date().getFullYear()} SFM Group.
         </div>
      </div>
    </div>
  </footer>
);

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-lab-black selection:bg-lab-accent selection:text-white">
      <Header />
      <main className="flex-grow p-4 md:p-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};