import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Zap, Atom, Database, Radio } from 'lucide-react';
import { NEWS_ITEMS, RESEARCH_INTERESTS } from '../data';
import { Button, Card, SectionTitle } from '../components/Shared';

const IconMap: Record<string, React.ReactNode> = {
  atom: <Atom className="w-8 h-8" />,
  activity: <Activity className="w-8 h-8" />,
  zap: <Zap className="w-8 h-8" />
};

export const Home = () => {
  // Get latest 3 news items
  const recentNews = NEWS_ITEMS.slice(0, 3);

  return (
    <div className="w-full max-w-7xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="relative border-4 border-black bg-black p-2 shadow-retro-deep">
        <div className="relative h-[400px] md:h-[500px] overflow-hidden border-2 border-white/20 group">
          <img 
            src="https://picsum.photos/1920/1080?blur=2" 
            alt="Lab Equipment" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000 scale-105"
          />
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 background-size-[100%_2px,3px_100%] pointer-events-none"></div>
          
          <div className="relative z-20 h-full flex flex-col justify-center p-8 md:p-16">
            <div className="bg-black/80 backdrop-blur-sm border-l-8 border-lab-accent p-6 max-w-3xl transform hover:translate-x-2 transition-transform">
              <h1 className="text-4xl md:text-6xl font-black font-mono text-white mb-2 leading-none tracking-tighter">
                SENSORS_&<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lab-accent to-lab-warm">FUNCTIONAL_MATERIALS</span>
              </h1>
              <p className="font-mono text-lab-accent mb-4 text-sm uppercase tracking-[0.2em]">
                /// Research Group 404 ///
              </p>
              <p className="text-lg md:text-xl font-sans text-gray-300 max-w-xl leading-relaxed">
                Bridging the gap between nanoscale synthesis and real-world sensing applications through advanced engineering.
              </p>
              
              <div className="mt-8 flex gap-4">
                 <Link to="/research">
                   <Button variant="primary">Init_Research</Button>
                 </Link>
                 <Link to="/people">
                   <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">Personnel_DB</Button>
                 </Link>
              </div>
            </div>
          </div>

          {/* Decorative Corner Text */}
          <div className="absolute top-4 right-4 text-xs font-mono text-white/50 writing-vertical-rl hidden md:block">
            LAT: 34.0522 N / LONG: 118.2437 W
          </div>
        </div>
      </section>

      {/* Main Content Area: 70/30 Split */}
      <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Column (70%) */}
          <div className="lg:w-[70%] space-y-12">
            
            <section>
              <SectionTitle title="Mission_Protocol" subtitle="Defining core objectives and operational parameters." />
              <div className="bg-white border-2 border-black p-6 shadow-retro relative">
                {/* Decorative circuit lines */}
                <div className="absolute -left-3 top-10 w-3 h-[2px] bg-black"></div>
                <div className="absolute -right-3 bottom-10 w-3 h-[2px] bg-black"></div>
                
                <div className="prose prose-lg max-w-none font-sans text-gray-800">
                  <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-lab-black first-letter:mr-3 first-letter:float-left">
                    The Sensors & Functional Materials (SFM) Group is dedicated to exploring the intersection of material science and electronic engineering. We focus on understanding the fundamental properties of low-dimensional materials and translating these discoveries into robust, scalable technologies.
                  </p>
                  <p>
                    Our vision is a world where intelligent materials seamlessly integrate with biological systems and environmental infrastructure. From self-powered nanosensors to flexible bio-electronics, our work aims to solve critical challenges in healthcare monitoring, energy efficiency, and industrial automation.
                  </p>
                  <div className="bg-lab-paper border-l-4 border-lab-warm p-4 font-mono text-sm my-4">
                    <span className="font-bold text-black">>> DIRECTIVE:</span> Combine rigorous experimental synthesis with advanced characterization and theoretical modeling.
                  </div>
                </div>
              </div>
            </section>

            {/* Research Interests Cards */}
            <section>
              <SectionTitle title="Core_Systems" subtitle="Primary research vectors." />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {RESEARCH_INTERESTS.map((interest, idx) => (
                  <Link key={interest.id} to="/research" className="group block h-full">
                    <Card title={`SYS.0${idx + 1}`} className="h-full hover:bg-lab-black hover:text-white transition-colors duration-200 group-hover:border-lab-accent">
                      <div className="mb-4 text-lab-black group-hover:text-lab-accent border-2 border-dashed border-gray-300 p-4 inline-block bg-lab-paper group-hover:bg-black group-hover:border-lab-accent">
                        {IconMap[interest.iconName] || <Atom />}
                      </div>
                      <h3 className="font-mono font-bold text-lg mb-2 uppercase group-hover:text-lab-warm">
                        {interest.title}
                      </h3>
                      <p className="text-sm opacity-80 font-mono leading-tight">
                        {interest.description}
                      </p>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar (30%) */}
          <div className="lg:w-[30%]">
            <Card title="Term_Log" className="sticky top-24">
              <div className="flex items-center gap-2 mb-4 border-b-2 border-black pb-2">
                <Radio className="w-4 h-4 animate-pulse text-lab-alert" />
                <span className="font-mono text-xs font-bold uppercase">Incoming Transmissions</span>
              </div>
              
              <div className="space-y-6">
                {recentNews.map((item) => (
                  <div key={item.id} className="group border-l-2 border-gray-300 pl-3 hover:border-lab-accent transition-colors">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-[10px] font-mono text-gray-500">{item.date}</span>
                      <span className="text-[10px] font-mono text-white bg-lab-black px-1 uppercase">{item.category.slice(0,4)}</span>
                    </div>
                    <Link to="/news" className="block">
                      <h4 className="font-bold font-sans text-md leading-tight group-hover:text-lab-accent transition-colors">
                        {item.title}
                      </h4>
                    </Link>
                    <p className="text-xs font-mono text-gray-600 mt-1 line-clamp-2">
                      {item.excerpt}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t-2 border-dashed border-gray-300">
                <Link to="/news" className="w-full block">
                  <Button variant="secondary" className="w-full text-xs">
                    Access Full Archives
                  </Button>
                </Link>
              </div>
            </Card>
            
            {/* Decoration */}
            <div className="mt-8 border-2 border-black bg-lab-accent p-2 shadow-retro">
              <div className="border border-white p-4 text-white text-center">
                 <Database className="w-8 h-8 mx-auto mb-2" />
                 <div className="font-mono font-bold text-xl">OPEN DATA</div>
                 <div className="text-xs font-mono mt-1 opacity-80">REPO_ACCESS_GRANTED</div>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
};