import React, { useState } from 'react';
import { GALLERY } from '../data';
import { GalleryItem } from '../types';
import { SectionTitle, Card } from '../components/Shared';
import { X, ChevronLeft, ChevronRight, Tag, Folder } from 'lucide-react';

export const Gallery = () => {
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const openLightbox = (item: GalleryItem) => setLightboxItem(item);
  const closeLightbox = () => setLightboxItem(null);
  
  const navigateLightbox = (direction: 'next' | 'prev') => {
    if (!lightboxItem) return;
    const currentIndex = GALLERY.findIndex(g => g.id === lightboxItem.id);
    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % GALLERY.length;
      setLightboxItem(GALLERY[nextIndex]);
    } else {
      const prevIndex = (currentIndex - 1 + GALLERY.length) % GALLERY.length;
      setLightboxItem(GALLERY[prevIndex]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <SectionTitle title="Visual_Records" subtitle="Photographic evidence of lab operations." />

      <div className="bg-lab-paper border-2 border-black p-2 mb-8 inline-block shadow-retro">
        <div className="flex items-center gap-2 font-mono text-xs px-2">
           <Folder className="w-4 h-4 text-lab-warm fill-current" />
           <span>/root/images/public/events</span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {GALLERY.map((item, idx) => (
          <div 
            key={item.id} 
            className="group cursor-pointer"
            onClick={() => openLightbox(item)}
          >
            <div className="bg-white border-2 border-black p-2 pb-6 shadow-retro group-hover:shadow-retro-deep group-hover:-translate-y-1 transition-all relative">
               {/* Tape effect */}
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/50 border border-gray-300 rotate-2 backdrop-blur-sm z-10"></div>
               
               <div className="overflow-hidden border border-gray-200 aspect-[4/3]">
                 <img 
                   src={item.thumbnailUrl} 
                   alt={item.title} 
                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 contrast-125"
                 />
               </div>
               
               <div className="mt-3 px-1">
                 <h4 className="font-mono font-bold text-xs uppercase truncate">{item.title}</h4>
                 <div className="flex justify-between items-center mt-1 border-t border-gray-300 pt-1">
                    <span className="text-[10px] font-mono text-gray-500">{item.date}</span>
                    <span className="text-[10px] font-mono bg-black text-white px-1">IMG_00{idx+1}</span>
                 </div>
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-black/95 flex flex-col items-center justify-center p-4">
          
          <button onClick={closeLightbox} className="absolute top-4 right-4 bg-white border-2 border-black p-1 hover:bg-lab-alert hover:text-white z-50 shadow-white">
            <X className="w-6 h-6" />
          </button>

          <button onClick={() => navigateLightbox('prev')} className="absolute left-4 bg-white border-2 border-black p-2 hover:bg-lab-accent hover:text-white z-50 hidden md:block shadow-white">
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button onClick={() => navigateLightbox('next')} className="absolute right-4 bg-white border-2 border-black p-2 hover:bg-lab-accent hover:text-white z-50 hidden md:block shadow-white">
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="max-w-6xl w-full max-h-[90vh] flex flex-col md:flex-row border-4 border-white shadow-[0_0_50px_rgba(255,255,255,0.1)]">
             <div className="flex-1 bg-black flex items-center justify-center overflow-hidden relative border-r-4 border-white">
               <div className="absolute inset-0 pointer-events-none border border-white/20 m-4"></div>
               <div className="absolute top-6 left-6 text-white/50 font-mono text-xs">SOURCE: RAW</div>
               <img 
                 src={lightboxItem.fullUrl} 
                 alt={lightboxItem.title} 
                 className="max-h-[60vh] md:max-h-[85vh] max-w-full object-contain" 
               />
             </div>
             
             {/* Caption Sidebar */}
             <div className="w-full md:w-80 bg-[#e0e0e0] p-6 flex flex-col justify-between shrink-0 border-t-4 md:border-t-0 md:border-l-0 border-white">
               <div>
                 <div className="bg-black text-white p-2 font-mono text-xs font-bold text-center mb-6 shadow-[4px_4px_0_0_#fff]">
                   METADATA_VIEWER
                 </div>
                 
                 <h3 className="font-mono text-lg font-bold mb-2 uppercase leading-tight">{lightboxItem.title}</h3>
                 <div className="text-xs font-mono text-gray-600 mb-6 border-b-2 border-gray-400 pb-2 flex justify-between">
                    <span>DATE: {lightboxItem.date}</span>
                    <span>ID: #{lightboxItem.id}</span>
                 </div>
                 
                 <p className="font-sans text-sm leading-relaxed border-l-2 border-lab-accent pl-3 mb-6">
                   {lightboxItem.description}
                 </p>
               </div>
               
               <div className="bg-white border-2 border-black p-4 shadow-[2px_2px_0_0_#000]">
                 <div className="flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase text-lab-accent border-b border-gray-200 pb-1">
                   <Tag className="w-3 h-3" /> Tagged_Entities
                 </div>
                 <div className="flex flex-wrap gap-2">
                   {lightboxItem.peopleTagged.map(person => (
                     <span key={person} className="px-2 py-1 bg-gray-100 text-[10px] font-mono uppercase text-black border border-gray-400 hover:bg-black hover:text-white transition-colors cursor-help">
                       {person}
                     </span>
                   ))}
                 </div>
               </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};