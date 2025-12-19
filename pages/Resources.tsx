import React, { useState } from 'react';
import { PUBLICATIONS } from '../data';
import { SectionTitle, Button, Card } from '../components/Shared';
import { ChevronDown, ChevronUp, ExternalLink, FileText, Star, Book, Link as LinkIcon, Download, Globe, Database } from 'lucide-react';

export const Resources = () => {
  const [activeTab, setActiveTab] = useState<'pubs' | 'reading' | 'links'>('pubs');
  const [expandedAbstract, setExpandedAbstract] = useState<string | null>(null);
  
  // Publication Filters
  const [yearFilter, setYearFilter] = useState<string>('All');
  const years = ['All', ...Array.from(new Set(PUBLICATIONS.map(p => p.year.toString()))).sort().reverse()];

  const filteredPubs = PUBLICATIONS.filter(p => yearFilter === 'All' || p.year.toString() === yearFilter);

  return (
    <div className="max-w-7xl mx-auto">
      <SectionTitle title="Data_Library" subtitle="Publications, datasets, and external protocols." />

      {/* Tab Interface */}
      <div className="flex items-end gap-2 px-2 overflow-x-auto">
        {[
          { id: 'pubs', label: 'Publications.db', icon: FileText },
          { id: 'reading', label: 'Reading_List.txt', icon: Book },
          { id: 'links', label: 'Ext_Links.url', icon: LinkIcon }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-6 py-3 font-mono text-xs uppercase font-bold tracking-wider transition-all border-t-2 border-l-2 border-r-2 flex items-center gap-2
              ${activeTab === tab.id 
                ? 'bg-white border-black text-black -mb-[2px] z-10 py-4 shadow-[0_-2px_0_0_rgba(0,0,0,0.1)]' 
                : 'bg-gray-300 border-gray-400 text-gray-600 hover:bg-gray-200'
              }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Container (Folder Body) */}
      <div className="bg-white border-2 border-black p-8 min-h-[500px] shadow-retro relative z-0">
        
        {/* Top Bar Decoration */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-lab-accent"></div>

        {/* PUBLICATIONS TAB */}
        {activeTab === 'pubs' && (
          <div className="animate-in fade-in duration-300">
             <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b-2 border-dashed border-gray-300">
                <div className="font-mono text-sm bg-lab-paper px-3 py-1 border border-black inline-block shadow-[2px_2px_0_0_#ccc]">
                  TOTAL_RECORDS: {filteredPubs.length}
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-bold">QUERY_YEAR:</span>
                  <select 
                    className="font-mono border-2 border-black p-1 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lab-accent"
                    value={yearFilter}
                    onChange={(e) => setYearFilter(e.target.value)}
                  >
                    {years.map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>
             </div>

             <div className="space-y-4">
               {filteredPubs.map(pub => (
                 <div key={pub.id} className={`group border-2 p-4 transition-all ${pub.isSelected ? 'border-lab-accent bg-teal-50/50' : 'border-gray-200 hover:border-black'}`}>
                    <div className="flex flex-col md:flex-row gap-4">
                      {/* Left Meta */}
                      <div className="md:w-32 flex-shrink-0 flex flex-col items-center justify-center border-r-2 border-dotted border-gray-300 pr-4">
                         <div className="text-3xl font-mono font-bold text-gray-300 group-hover:text-black">{pub.year}</div>
                         <div className="text-[10px] font-mono uppercase bg-black text-white px-1 mt-1">{pub.type}</div>
                      </div>

                      {/* Main Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                           <span className="font-mono text-xs text-lab-accent font-bold uppercase tracking-wide border border-lab-accent px-1">
                            {pub.venue}
                           </span>
                           {pub.isSelected && <Star className="w-4 h-4 text-lab-warm fill-current" />}
                        </div>
                        
                        <h3 className="text-xl font-bold font-sans text-black mb-2 leading-tight group-hover:text-lab-accent transition-colors">
                          {pub.title}
                        </h3>
                        
                        <p className="font-mono text-xs text-gray-600 mb-4">
                          AUTHORS:: {pub.authors.join(', ')}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-4">
                          <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer" className="flex items-center px-3 py-1 bg-black text-white text-xs font-mono hover:bg-lab-accent transition-colors shadow-[2px_2px_0_0_#ccc]">
                            <ExternalLink className="w-3 h-3 mr-2" /> DOI_LINK
                          </a>
                          <button 
                            onClick={() => setExpandedAbstract(expandedAbstract === pub.id ? null : pub.id)}
                            className="flex items-center px-3 py-1 border border-black bg-white text-black text-xs font-mono hover:bg-gray-100 transition-colors shadow-[2px_2px_0_0_#ccc]"
                          >
                            {expandedAbstract === pub.id ? <ChevronUp className="w-3 h-3 mr-2"/> : <ChevronDown className="w-3 h-3 mr-2"/>}
                            {expandedAbstract === pub.id ? 'CLOSE_ABSTRACT' : 'VIEW_ABSTRACT'}
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {expandedAbstract === pub.id && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="bg-gray-100 p-4 font-mono text-sm text-gray-700 leading-relaxed border-l-4 border-black relative">
                          <span className="absolute -left-1 top-0 bg-black text-white text-[10px] px-1 font-bold">ABS</span>
                          {pub.abstract}
                        </div>
                      </div>
                    )}
                 </div>
               ))}
             </div>
          </div>
        )}

        {/* READING TAB */}
        {activeTab === 'reading' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            <div className="grid md:grid-cols-2 gap-8">
              <Card title="LEVEL_1 :: ACADEMIC" className="h-full bg-white">
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="bg-gray-200 h-12 w-12 flex items-center justify-center border border-black flex-shrink-0 font-bold font-mono">01</div>
                    <div>
                      <div className="font-bold font-sans text-lg">Introduction to Solid State Physics</div>
                      <div className="font-mono text-xs text-gray-500 mb-1">AUTHOR: Kittel</div>
                      <p className="text-sm italic bg-lab-paper p-2 border-l-2 border-lab-warm">"The bible of the field. Chapters 1-4 are essential."</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-gray-200 h-12 w-12 flex items-center justify-center border border-black flex-shrink-0 font-bold font-mono">02</div>
                    <div>
                      <div className="font-bold font-sans text-lg">Review: 2D Materials beyond Graphene</div>
                      <div className="font-mono text-xs text-gray-500 mb-1">SOURCE: Nature Nanotech, 2015</div>
                      <p className="text-sm italic bg-lab-paper p-2 border-l-2 border-lab-warm">"Comprehensive overview of TMDs."</p>
                    </div>
                  </li>
                </ul>
              </Card>
              
              <Card title="LEVEL_0 :: PUBLIC" className="h-full bg-white">
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="block p-4 border border-gray-300 hover:border-black hover:bg-gray-50 transition-colors group">
                      <div className="font-bold font-mono text-lab-accent group-hover:underline">>> Why Nanotechnology Matters</div>
                      <div className="text-xs text-gray-500 mt-1">FORMAT: Video Stream (YouTube)</div>
                    </a>
                  </li>
                   <li>
                    <a href="#" className="block p-4 border border-gray-300 hover:border-black hover:bg-gray-50 transition-colors group">
                      <div className="font-bold font-mono text-lab-accent group-hover:underline">>> The Future of Wearable Tech</div>
                      <div className="text-xs text-gray-500 mt-1">FORMAT: Web Article</div>
                    </a>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        )}

        {/* LINKS TAB */}
        {activeTab === 'links' && (
          <div className="animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="border-2 border-black p-6 bg-lab-paper shadow-retro">
                 <h3 className="font-mono font-bold border-b-2 border-black pb-2 mb-4 uppercase flex items-center gap-2">
                   <Globe className="w-4 h-4" /> Societies
                 </h3>
                 <ul className="space-y-3 font-mono text-sm">
                   <li><a href="#" className="hover:bg-lab-accent hover:text-white px-2 py-1 block transition-colors">-> Materials Research Society (MRS)</a></li>
                   <li><a href="#" className="hover:bg-lab-accent hover:text-white px-2 py-1 block transition-colors">-> American Physical Society (APS)</a></li>
                   <li><a href="#" className="hover:bg-lab-accent hover:text-white px-2 py-1 block transition-colors">-> IEEE Sensors Council</a></li>
                 </ul>
               </div>
               <div className="border-2 border-black p-6 bg-lab-paper shadow-retro">
                 <h3 className="font-mono font-bold border-b-2 border-black pb-2 mb-4 uppercase flex items-center gap-2">
                   <Database className="w-4 h-4" /> Databases
                 </h3>
                 <ul className="space-y-3 font-mono text-sm">
                   <li><a href="#" className="hover:bg-lab-accent hover:text-white px-2 py-1 block transition-colors">-> Materials Project</a></li>
                   <li><a href="#" className="hover:bg-lab-accent hover:text-white px-2 py-1 block transition-colors">-> NIST XPS Database</a></li>
                 </ul>
               </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};