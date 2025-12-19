import React, { useState } from 'react';
import { MEMBERS } from '../data';
import { Member } from '../types';
import { SectionTitle, Card, Button } from '../components/Shared';
import { X, Mail, BookOpen, Fingerprint, Award } from 'lucide-react';

export const People = () => {
  const [filterRole, setFilterRole] = useState<string>('All');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const roles = ['All', 'PI', 'Postdoc', 'PhD Candidate', 'MSc Student', 'Alumni'];

  // Filter and Sort Logic
  const filteredMembers = MEMBERS.filter(m => 
    filterRole === 'All' ? true : m.currentRole === filterRole
  ).sort((a, b) => {
    const dateA = new Date(a.joinDate).getTime();
    const dateB = new Date(b.joinDate).getTime();
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="max-w-7xl mx-auto">
      <SectionTitle title="Personnel_DB" subtitle="Authorized laboratory staff." />

      {/* Controls */}
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 bg-lab-paper border-2 border-black p-4 shadow-retro">
        <div className="w-full">
           <label className="block font-mono text-xs font-bold uppercase mb-2">Filter By Rank:</label>
           <div className="flex flex-wrap gap-2">
            {roles.map(role => (
              <button
                key={role}
                onClick={() => setFilterRole(role)}
                className={`px-3 py-1 text-xs font-mono uppercase border-2 transition-all ${
                  filterRole === role 
                    ? 'bg-lab-accent text-white border-black shadow-[2px_2px_0_0_#000]' 
                    : 'bg-white text-gray-600 border-gray-400 hover:border-black'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="font-mono text-xs font-bold uppercase">Sort:</span>
          <select 
            className="font-mono text-xs border-2 border-black p-1 bg-white shadow-[2px_2px_0_0_#ccc]"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as 'newest' | 'oldest')}
          >
            <option value="newest">Newest_Entry</option>
            <option value="oldest">Chronological</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredMembers.map((member, idx) => (
          <div 
            key={member.id} 
            onClick={() => setSelectedMember(member)}
            className="cursor-pointer group"
          >
            <Card title={`ID: 00${idx+1}`} className="h-full relative transition-transform hover:-translate-y-1 hover:shadow-retro-deep">
              <div className="aspect-square bg-gray-200 mb-4 overflow-hidden border-2 border-black relative">
                <img src={member.photoUrl} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-[10px] font-mono p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  ACCESS GRANTED
                </div>
              </div>
              
              <div className="mb-2 flex items-center gap-2">
                 <div className={`w-2 h-2 rounded-full ${member.currentRole === 'PI' ? 'bg-lab-warm' : 'bg-lab-accent'}`}></div>
                 <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-gray-500">
                  {member.currentRole}
                 </span>
              </div>
              
              <h3 className="font-bold font-sans text-xl leading-none mb-2 border-b-2 border-gray-200 pb-2 group-hover:border-black group-hover:text-lab-accent">
                {member.name}
              </h3>
              
              <p className="text-xs font-mono text-gray-600 leading-tight mb-4">
                Research_Focus:<br/>
                <span className="text-black font-bold">{member.researchTheme}</span>
              </p>

              <div className="mt-auto flex justify-end">
                <Fingerprint className="w-6 h-6 text-gray-300 group-hover:text-black" />
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Member Detail Modal (Lightbox Style) */}
      {selectedMember && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-black/90 backdrop-blur-sm">
          <div className="bg-lab-paper w-full max-w-4xl max-h-[90vh] overflow-y-auto border-4 border-black shadow-retro-deep relative flex flex-col md:flex-row">
            
            {/* Window Header for Modal */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-black flex justify-between items-center px-2 z-20">
              <span className="text-white font-mono text-xs uppercase font-bold">Personnel_File_Viewer_v1.0</span>
              <button onClick={() => setSelectedMember(null)} className="text-white hover:text-lab-alert">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Left Col: Photo & Info */}
            <div className="w-full md:w-1/3 bg-gray-200 p-8 pt-16 border-r-4 border-black flex flex-col">
              <div className="border-4 border-black bg-white p-1 shadow-retro mb-6 rotate-1">
                 <img 
                  src={selectedMember.photoUrl} 
                  alt={selectedMember.name} 
                  className="w-full aspect-square object-cover border border-gray-400 grayscale contrast-125" 
                />
              </div>
              
              <h2 className="text-3xl font-bold font-mono mb-1 leading-none uppercase">{selectedMember.name}</h2>
              <div className="text-lab-accent font-mono font-bold mb-6 text-sm border-b-2 border-black pb-4 inline-block">
                {selectedMember.currentRole}
              </div>
              
              <div className="space-y-4 font-mono text-xs mt-auto">
                 <a href={`mailto:${selectedMember.email}`} className="flex items-center gap-2 p-2 border border-black bg-white hover:bg-lab-accent hover:text-white transition-colors">
                   <Mail className="w-4 h-4" /> {selectedMember.email}
                 </a>
                 {selectedMember.scholarLink && (
                   <a href={selectedMember.scholarLink} className="flex items-center gap-2 p-2 border border-black bg-white hover:bg-lab-accent hover:text-white transition-colors">
                     <BookOpen className="w-4 h-4" /> Google Scholar
                   </a>
                 )}
              </div>
            </div>

            {/* Right Col: Bio & Timeline */}
            <div className="w-full md:w-2/3 p-8 pt-16 bg-white">
              <div className="flex items-center gap-2 mb-6 text-lab-black">
                 <Award className="w-6 h-6" />
                 <h3 className="font-mono text-lg font-bold uppercase underline decoration-4 decoration-lab-warm underline-offset-4">
                  Academic Trajectory
                 </h3>
              </div>
              
              <div className="mb-12 space-y-0 relative">
                {/* Vertical Line */}
                <div className="absolute left-[88px] top-2 bottom-2 w-[2px] bg-gray-300"></div>

                {selectedMember.tenureHistory.map((tenure, idx) => (
                  <div key={idx} className="flex gap-4 relative mb-6 last:mb-0 group">
                    <div className="font-mono text-xs font-bold text-gray-500 w-20 flex-shrink-0 text-right pt-1">
                      {tenure.period}
                    </div>
                    <div className="relative pl-6">
                      <div className="absolute -left-[5px] top-1.5 w-3 h-3 bg-white border-2 border-black rounded-sm group-hover:bg-lab-accent transition-colors"></div>
                      <div className="font-bold font-sans text-lg leading-tight">{tenure.role}</div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="font-mono text-lg font-bold uppercase mb-4 flex items-center gap-2">
                <span className="bg-black text-white px-1">></span> Biography_Data
              </h3>
              <p className="font-sans text-lg text-gray-800 leading-relaxed whitespace-pre-line border-l-4 border-gray-200 pl-4">
                {selectedMember.fullBio}
              </p>

              <div className="mt-8 pt-8 border-t-2 border-dashed border-gray-300">
                <span className="font-mono text-xs bg-lab-paper border border-black px-2 py-1 shadow-[2px_2px_0_0_#ccc]">
                  THEME :: {selectedMember.researchTheme.toUpperCase()}
                </span>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};