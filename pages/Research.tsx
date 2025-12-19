import React from 'react';
import { RESEARCH_INTERESTS } from '../data';
import { SectionTitle, Card } from '../components/Shared';
import { Atom, Activity, Zap, Cpu, Settings } from 'lucide-react';

const IconMap: Record<string, React.ReactNode> = {
  atom: <Atom className="w-12 h-12" />,
  activity: <Activity className="w-12 h-12" />,
  zap: <Zap className="w-12 h-12" />
};

export const Research = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <SectionTitle title="Research_Modules" subtitle="Active investigations and project specs." />
      
      <div className="space-y-24">
        {RESEARCH_INTERESTS.map((interest, index) => (
          <div key={interest.id} className="relative">
            {/* Connecting Line */}
            {index !== RESEARCH_INTERESTS.length - 1 && (
               <div className="absolute left-1/2 bottom-[-96px] w-[2px] h-24 bg-black border-r border-dashed border-gray-500 hidden md:block"></div>
            )}

            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-stretch`}>
              
              {/* Visual/Icon Area */}
              <div className="w-full md:w-1/3 flex flex-col">
                <div className="bg-lab-paper border-2 border-black p-8 flex items-center justify-center text-black shadow-retro h-64 relative overflow-hidden group">
                  {/* Background Grid in box */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:10px_10px]"></div>
                  
                  <div className="relative z-10 group-hover:scale-110 transition-transform duration-500">
                     {IconMap[interest.iconName]}
                  </div>

                  <div className="absolute bottom-2 right-2 font-mono text-[10px] font-bold">FIG.{index + 1}</div>
                </div>
                {/* Caption box */}
                <div className="mt-2 border border-black bg-white p-2 font-mono text-xs text-center uppercase shadow-[2px_2px_0_0_#ccc]">
                  Schematic Representation
                </div>
              </div>

              {/* Text Area */}
              <div className="w-full md:w-2/3 bg-white border-2 border-black p-8 shadow-retro flex flex-col">
                <div className="flex justify-between items-start border-b-4 border-lab-black pb-4 mb-6">
                  <h2 className="text-3xl font-mono font-bold uppercase leading-none">
                    {interest.title}
                  </h2>
                  <span className="bg-lab-accent text-white px-2 py-1 text-xs font-mono font-bold shadow-[2px_2px_0_0_#000]">
                    PRJ_ID: {interest.id.toUpperCase()}
                  </span>
                </div>

                <div className="prose prose-lg font-sans text-gray-800 flex-grow">
                  <p className="font-bold text-xl mb-4">{interest.description}</p>
                  <p>
                    Extended description of this research area would go here. Discussing methodology, recent breakthroughs, and future directions.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>

                <div className="mt-8 bg-gray-100 border border-gray-400 p-4 font-mono text-sm grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="flex items-center gap-2">
                     <Settings className="w-4 h-4 text-lab-accent" />
                     <span>Status: <span className="font-bold text-green-600">ACTIVE</span></span>
                   </div>
                   <div className="flex items-center gap-2">
                     <Cpu className="w-4 h-4 text-lab-accent" />
                     <span>Tech Level: <span className="font-bold">NANO_SCALE</span></span>
                   </div>
                   <div className="col-span-1 md:col-span-2 border-t border-gray-300 pt-2 text-xs text-gray-500">
                     REF_GRANT: NSF-MAT-2023-44X
                   </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
      
      {/* Facilities Section */}
      <div className="mt-32">
        <div className="flex items-center gap-4 mb-8">
           <div className="h-[2px] flex-grow bg-black"></div>
           <h2 className="text-3xl font-mono font-bold uppercase bg-lab-warm px-4 py-1 border-2 border-black shadow-retro">Lab Infrastructure</h2>
           <div className="h-[2px] flex-grow bg-black"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           <Card title="ZONE_A :: FABRICATION" className="bg-white">
             <div className="flex items-start gap-4">
                <div className="bg-gray-200 p-2 border border-black"><Settings className="w-6 h-6"/></div>
                <div>
                   <h3 className="font-mono font-bold mb-1">Cleanroom Class 100</h3>
                   <p className="text-sm font-mono text-gray-600">Lithography, Wet Processing, Spin Coating.</p>
                </div>
             </div>
           </Card>
           
           <Card title="ZONE_B :: ANALYSIS" className="bg-white">
             <div className="flex items-start gap-4">
                <div className="bg-gray-200 p-2 border border-black"><Activity className="w-6 h-6"/></div>
                <div>
                   <h3 className="font-mono font-bold mb-1">Characterization</h3>
                   <p className="text-sm font-mono text-gray-600">SEM, TEM, AFM, XRD, Raman Spectroscopy.</p>
                </div>
             </div>
           </Card>

           <Card title="ZONE_C :: SYNTHESIS" className="bg-white">
             <div className="flex items-start gap-4">
                <div className="bg-gray-200 p-2 border border-black"><Zap className="w-6 h-6"/></div>
                <div>
                   <h3 className="font-mono font-bold mb-1">Material Growth</h3>
                   <p className="text-sm font-mono text-gray-600">3-Zone CVD Furnaces, PVD Sputtering.</p>
                </div>
             </div>
           </Card>
        </div>
      </div>
    </div>
  );
};