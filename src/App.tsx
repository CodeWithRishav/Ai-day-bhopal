import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  MapPin, 
  ArrowRight, 
  Users, 
  Code, 
  Globe, 
  Mic, 
  Lightbulb, 
  Network, 
  Wrench, 
  TrendingUp, 
  Target, 
  Briefcase,
  Mail,
  Phone,
  Linkedin,
  Instagram,
  Twitter,
  Menu,
  X
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const NeuralNetworkGraphic = () => {
  // Generate nodes for the neural network
  const nodes = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 80 + 10, // 10% to 90%
    y: Math.random() * 80 + 10,
    size: Math.random() * 6 + 4,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2
  }));

  // Generate connections between nodes
  const connections = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (Math.random() > 0.8) { // 20% chance to connect
        connections.push({ source: nodes[i], target: nodes[j] });
      }
    }
  }

  return (
    <div className="relative w-full aspect-square max-w-[500px]">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-transparent rounded-full blur-[80px] animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px]"></div>
      
      {/* Main Container */}
      <div className="absolute inset-0 rounded-full border border-brand-light-gray/30 bg-brand-dark-gray/20 backdrop-blur-sm overflow-hidden flex items-center justify-center shadow-2xl">
        
        {/* SVG Neural Network */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Connections */}
          {connections.map((conn, i) => (
            <motion.line
              key={`conn-${i}`}
              x1={`${conn.source.x}%`}
              y1={`${conn.source.y}%`}
              x2={`${conn.target.x}%`}
              y2={`${conn.target.y}%`}
              stroke="url(#gradient-line)"
              strokeWidth="0.2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 2, delay: conn.source.delay, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
          ))}

          {/* Nodes */}
          {nodes.map((node) => (
            <motion.circle
              key={`node-${node.id}`}
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size / 4}
              fill="#F97316"
              initial={{ scale: 0.5, opacity: 0.5 }}
              animate={{ scale: [0.5, 1.2, 0.5], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: node.duration, delay: node.delay, repeat: Infinity, ease: "easeInOut" }}
              className="drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]"
            />
          ))}

          <defs>
            <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        {/* Central Glowing Orb */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="relative z-10 w-40 h-40 rounded-full flex items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full border border-brand-orange/30 border-dashed animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute inset-2 rounded-full border border-brand-orange/20 animate-[spin_15s_linear_infinite_reverse]"></div>
          <div className="w-24 h-24 bg-brand-dark border border-brand-orange/50 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(249,115,22,0.4)] backdrop-blur-md">
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-300">AI</div>
              <div className="text-[10px] font-medium tracking-widest text-text-secondary uppercase mt-1">Bhopal</div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="glow-effect top-1/2 left-3/4 -translate-y-1/2 -translate-x-1/2 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-light-gray bg-brand-dark-gray/50 text-sm text-text-secondary mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
            Central India's Biggest AI Builder Event
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 tracking-tight">
            AI Day Bhopal, <span className="text-brand-orange">2.0</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-6">
            Build With <span className="text-brand-orange">AI</span>
          </h2>
          
          <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-xl leading-relaxed">
            Bringing together AI innovators, developers, students, and industry professionals to learn, build, and showcase real-world AI solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-10">
            <div className="flex items-center gap-3 text-text-secondary">
              <div className="w-10 h-10 rounded-full bg-brand-dark-gray flex items-center justify-center border border-brand-light-gray">
                <Calendar size={20} className="text-brand-orange" />
              </div>
              <div>
                <p className="text-sm text-text-muted">Date</p>
                <p className="font-medium text-white">26th April 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-text-secondary">
              <div className="w-10 h-10 rounded-full bg-brand-dark-gray flex items-center justify-center border border-brand-light-gray">
                <MapPin size={20} className="text-brand-orange" />
              </div>
              <div>
                <p className="text-sm text-text-muted">Location</p>
                <p className="font-medium text-white">Bhopal, India</p>
              </div>
            </div>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2} className="hidden lg:flex justify-center relative">
          <NeuralNetworkGraphic />
        </FadeIn>
      </div>
    </section>
  );
};

const AboutAIDay = () => {
  return (
    <section id="about" className="py-24 bg-brand-dark-gray border-y border-brand-light-gray relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What is AI Day Bhopal?</h2>
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              AI Day Bhopal is a flagship AI-focused conference designed to bring together the growing community of builders, learners, and innovators in the field of Artificial Intelligence.
            </p>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              The event focuses on practical learning, real-world applications, and hands-on building, enabling participants to go beyond theory and actually create AI-powered solutions.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
              <Target className="text-brand-orange" size={24} /> Purpose
            </h3>
            <ul className="space-y-3 mb-8">
              {[
                "Bridge the gap between learning AI and building with AI",
                "Provide exposure to industry-level tools and workflows",
                "Create a platform for networking, collaboration, and innovation"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-text-secondary">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="bg-brand-dark border border-brand-light-gray rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 blur-3xl"></div>
              
              <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
                <Users className="text-brand-orange" size={24} /> Expected Audience
              </h3>
              
              <div className="text-4xl font-bold text-brand-orange mb-8">500+ <span className="text-lg font-medium text-text-secondary">Attendees</span></div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Students (AI/ML, Tech)",
                  "Developers & Engineers",
                  "Industry Professionals",
                  "Startup Founders"
                ].map((item, i) => (
                  <div key={i} className="bg-brand-dark-gray border border-brand-light-gray rounded-xl p-4 text-sm font-medium text-text-secondary">
                    {item}
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-brand-orange/10 border border-brand-orange/20 rounded-xl text-brand-orange font-medium text-center">
                A high-energy environment where ideas turn into real projects.
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const AboutMLBhopal = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About ML Bhopal</h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            ML Bhopal is a fast-growing AI/ML community dedicated to empowering students, developers, and professionals through practical learning and collaboration.
          </p>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: <Code size={24} />, title: "Learn", desc: "Cutting-edge technologies" },
            { icon: <Wrench size={24} />, title: "Build", desc: "Real-world projects" },
            { icon: <Network size={24} />, title: "Connect", desc: "With like-minded builders" }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-brand-dark-gray border border-brand-light-gray rounded-2xl p-8 text-center card-hover h-full">
                <div className="w-12 h-12 mx-auto bg-brand-dark border border-brand-light-gray rounded-xl flex items-center justify-center text-brand-orange mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-text-secondary">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={0.3}>
          <div className="bg-gradient-to-br from-brand-dark-gray to-brand-dark border border-brand-light-gray rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Globe className="text-brand-orange" /> Our Mission
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  To create a builder-first AI ecosystem in Central India by promoting hands-on learning, innovation, and community-driven growth.
                </p>
                <div className="mt-6 inline-block px-4 py-2 bg-brand-orange/10 border border-brand-orange/20 rounded-lg text-sm font-medium text-brand-orange">
                  AI Day Bhopal is a flagship initiative powered by ML Bhopal.
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Impact So Far</h3>
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold text-white">2500+</div>
                  <div className="text-sm text-text-secondary">Learners impacted</div>
                </div>
                <div className="h-px w-full bg-brand-light-gray"></div>
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold text-white">20+</div>
                  <div className="text-sm text-text-secondary">Workshops, hackathons & meetups</div>
                </div>
                <div className="h-px w-full bg-brand-light-gray"></div>
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold text-white">15+</div>
                  <div className="text-sm text-text-secondary">Strong community collaborations</div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

const PastEvents = () => {
  const events = [
    { name: "Build With AI: Bhopal Edition-II", location: "Hotel La Pearl", image: "https://bhopal.aicommunity.dev/Events/Build%20With%20AI%20Bhopal%20Edition-II/Gallery/IMG_1119.JPG" },
    { name: "Customizing LLMs: Google AI Studio in action with CTF", location: "RICR, Bhopal", image: "https://bhopal.aicommunity.dev/Events/Customising%20llms/Gallery/IMG_20250131_155337.jpg" },
    { name: "Machine Learning Nexus With CTF", location: "LNCT, Bhopal", image: "https://bhopal.aicommunity.dev/Events/mlnexus/gallery/IMG20241005155506.jpg" },
    { name: "GenAI Hackathon Bhopal", location: "SCA, Bhopal", image: "https://lh3.googleusercontent.com/pw/AP1GczN11RhU4g-1_I31DbIbrqAf9L8yOsIMNaZQzz4j6LEFqiPitUQfRlVQTmvyw5xlQCy6SxSm0XJ13ItuPTNL06fl_O6Ajnuvv8IGUDQdlXK2N4YJfKbTwQOSYFkph3lvd1dudX2qHjXr1xdwnUDaNq7O9A=w1379-h919-s-no-gm?authuser=0" },
    { name: "PromptZilla", location: "IIIT Bhopal", image: "https://lh3.googleusercontent.com/pw/AP1GczPx99Gy9nWRbS6ZYwqVs0DIYysMoAn2DcK-uZyaqWKtb9d1ntfzNYbkAcQRsUv_rf-XjSZ4PxosY8ekbztED3Vf-GbB1KGfv2LrMKwHORy6Is7axO9-w9Cs9fhCZrogmSZaQlZNNlbBnY5JOB9O5r9wgA=w1379-h919-s-no-gm?authuser=0" },
    { name: "ML Huddle: Cracking The Cyber Security PuzzleF", location: "Bhopal", image: "https://bhopal.aicommunity.dev/Events/mlhuddle/gallery/IMG_6724.JPG" },
  ];

  return (
    <section id="events" className="py-24 bg-brand-dark-gray border-y border-brand-light-gray">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Past Events</h2>
          <p className="text-lg text-text-secondary max-w-2xl">
            We have consistently organized high-impact events focused on practical learning and community engagement.
          </p>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-brand-dark border border-brand-light-gray rounded-2xl overflow-hidden card-hover group cursor-pointer">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={event.image} 
                    alt={event.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-brand-orange transition-colors">{event.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <MapPin size={14} /> {event.location}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={0.4} className="mt-12 text-center">
          <p className="text-brand-orange font-medium">👉 Each event focused on hands-on learning, real-world applications, and strong participation.</p>
        </FadeIn>
      </div>
    </section>
  );
};

const PastSpeakers = () => {
  const speakers = [
    { name: "Ashish Kr. Verma", role: "SDE @Microsoft", image: "https://media.licdn.com/dms/image/v2/D4D03AQER3dCW4r38yQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1701188127384?e=1776297600&v=beta&t=Qf7Lwxb59-FTTE7vhewjvd3EeaktPQaJfrRGGpGQaZw" },
    { name: "Belal Khan", role: "Senior Engineer @American Express", image: "https://media.licdn.com/dms/image/v2/D5603AQEt49Wnu_xtNQ/profile-displayphoto-scale_200_200/B56Zh6inCfH0Ac-/0/1754402551843?e=1776297600&v=beta&t=ERha12YVcxh0vyQdy3RD9kQLQSuwbyqipCeW2VIvD4M" },
    { name: "Balvinder Singh Saluja", role: "Senior Manager @KPMG", image: "https://media.licdn.com/dms/image/v2/D5603AQGMprU2ECqOkA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1679854154193?e=1776297600&v=beta&t=UD9hdc2pN0oS5sc_P8K12-a-axuvbKP_z7eJz8dJd0s" },
    { name: "Niral Verma", role: "SDE @Microsoft", image: "https://media.licdn.com/dms/image/v2/D5603AQEoHqnditqaQA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721743379027?e=1776297600&v=beta&t=4YK9l0pDTI2wdv0INKNnpT9mePMuY3G99W4HvJCjKDE" },
    { name: "Ankur Gupta", role: "SDE @ Internshala", image: "https://media.licdn.com/dms/image/v2/D5603AQEb0Dmrb0-DTQ/profile-displayphoto-scale_200_200/B56Zs2BY9WJ8AY-/0/1766137898010?e=1776297600&v=beta&t=4ZjBwanTr1lz7wbgBJjTjn0GhKNYQCTRuer2JxfZdsM" },
    { name: "Jay Thakkar", role: "AI ML Engineer @T9L Venture Builder", image: "https://media.licdn.com/dms/image/v2/D4D03AQFKVbKBmphuFQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1732427694949?e=1776297600&v=beta&t=akD7njPZ9rQtSgGLzyQTStnQ959Nkymmb7AUUzCowW0" },
    { name: "Abhishek Sharma", role: "Lead Cloud Engineer @Searce Inc", image: "https://media.licdn.com/dms/image/v2/D4D03AQEwFSEDkkGNMg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724960931308?e=1776297600&v=beta&t=nAhdAa5tqrNdOHWMoBt_FHvxIrk3lK4rfjCswtcqW_0" },
    { name: "And Many More Experts", role: "ML Bhopal", image: "https://picsum.photos/seed/more/200/200" },
  ];

  return (
    <section id="speakers" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Past Speakers</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We have hosted industry experts, researchers, and community leaders who bring real-world insights and practical knowledge.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="flex flex-col items-center text-center group">
                <div className="w-32 h-32 rounded-full p-1 border border-brand-light-gray group-hover:border-brand-orange transition-colors duration-300 mb-4 relative overflow-hidden">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(249,115,22,0)] group-hover:shadow-[inset_0_0_20px_rgba(249,115,22,0.3)] transition-shadow duration-300"></div>
                </div>
                <h3 className="text-lg font-semibold mb-1">{speaker.name}</h3>
                <p className="text-sm text-text-secondary">{speaker.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={0.4} className="mt-16 text-center">
          <p className="text-brand-orange font-medium">👉 Focused on real insights, not just theory.</p>
        </FadeIn>
      </div>
    </section>
  );
};

const EventHighlights = () => {
  const highlights = [
    { icon: <Mic size={28} />, title: "Expert Talks & Panel Discussions", desc: "Learn directly from industry experts and AI practitioners" },
    { icon: <Lightbulb size={28} />, title: "AI Project Showcase", desc: "Explore innovative projects built by students & community members" },
    { icon: <Users size={28} />, title: "Networking Opportunities", desc: "Connect with professionals, developers, and like-minded learners" },
    { icon: <Wrench size={28} />, title: "Hands-on AI Workshops", desc: "Build real-world projects you can showcase in your resume" },
  ];

  return (
    <section className="py-24 bg-brand-dark-gray border-y border-brand-light-gray">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Experience</h2>
          <p className="text-lg text-text-secondary">This is not just an event — it's a builder experience.</p>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-brand-dark border border-brand-light-gray rounded-2xl p-8 flex gap-6 card-hover h-full">
                <div className="w-14 h-14 shrink-0 rounded-xl bg-brand-dark-gray border border-brand-light-gray flex items-center justify-center text-brand-orange">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhySponsor = () => {
  const benefits = [
    { icon: <TrendingUp size={24} />, title: "Bhopal's Biggest AI Fest", desc: "Be part of one of Central India's fastest-growing AI communities" },
    { icon: <Globe size={24} />, title: "Brand Visibility", desc: "Reach 500+ live audience and 5000+ online reach" },
    { icon: <Target size={24} />, title: "Targeted Audience", desc: "Direct access to AI developers, students, and tech professionals" },
    { icon: <Briefcase size={24} />, title: "Talent Discovery", desc: "Identify and recruit skilled individuals from a highly relevant audience" },
  ];

  return (
    <section id="sponsor" className="py-24 relative">
      <div className="glow-effect top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-2">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Partner With AI Day Bhopal?</h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                A perfect platform for branding, hiring, and engagement. Connect with AI enthusiasts and build brand awareness in the tech ecosystem.
              </p>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
            {benefits.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-brand-dark-gray border border-brand-light-gray rounded-2xl p-6 h-full card-hover">
                  <div className="w-10 h-10 rounded-lg bg-brand-dark border border-brand-light-gray flex items-center justify-center text-brand-orange mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CommunityLeads = () => {
  const leads = [
    { name: "Rishabh Gupta", role: "Technical Consultant @Salesforce", image: "https://media.licdn.com/dms/image/v2/D5603AQE4ZUFcJyFveQ/profile-displayphoto-scale_200_200/B56Zve.MrjHcAY-/0/1768972407356?e=1776297600&v=beta&t=3rbACTza5PI7pU5rfmZKOzNSaKNPZdJBrSFXB9OmFTs" },
    { name: "Ankur Gupta", role: "SDE @Internshala", image: "https://media.licdn.com/dms/image/v2/D5603AQEb0Dmrb0-DTQ/profile-displayphoto-scale_200_200/B56Zs2BY9WJ8AY-/0/1766137898010?e=1776297600&v=beta&t=4ZjBwanTr1lz7wbgBJjTjn0GhKNYQCTRuer2JxfZdsM" },
    { name: "Anurag Mishra", role: "SDE @Payu Payments", image: "https://media.licdn.com/dms/image/v2/D4D03AQExDiw9YcEuZw/profile-displayphoto-scale_200_200/B4DZqSgBVQGkAY-/0/1763394460083?e=1776297600&v=beta&t=b0pI-28vGCU4K0kSXARhBVb2EZnb26cLbeEdWqMO6t4" },
    { name: "Rishav Kumar", role: "Community Lead @ML Bhopal", image: "https://media.licdn.com/dms/image/v2/D5635AQHuZP13080e6Q/profile-framedphoto-shrink_200_200/B56ZzsDQeTGkAY-/0/1773486803082?e=1775062800&v=beta&t=MQPHxkQCcONnQVtNC2jxSBH8tlG2AncTbTjsEh7YsPI" },
  ];

  return (
    <section className="py-24 bg-brand-dark-gray border-y border-brand-light-gray">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team</h2>
          <p className="text-lg text-text-secondary">The people behind AI Day Bhopal</p>
        </FadeIn>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leads.map((lead, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-brand-dark border border-brand-light-gray rounded-2xl p-6 text-center card-hover">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-2 border-brand-light-gray">
                  <img 
                    src={lead.image} 
                    alt={lead.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">{lead.name}</h3>
                <p className="text-sm text-brand-orange">{lead.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div id="register" className="absolute -top-20"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-brand-dark-gray to-brand-dark border border-brand-light-gray rounded-3xl p-8 md:p-12 overflow-hidden relative shadow-2xl">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-light-gray bg-brand-dark-gray/50 text-sm text-text-secondary mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
                Reach Out
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Let's <span className="text-brand-orange">Connect</span></h2>
              <p className="text-lg text-text-secondary mb-10 leading-relaxed max-w-md">
                Have questions, want to collaborate, or just want to say hi? We're always open to discussing new ideas and opportunities to build the future of AI together.
              </p>
              
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-brand-dark border border-brand-light-gray flex items-center justify-center text-text-secondary hover:text-brand-orange hover:border-brand-orange hover:bg-brand-orange/10 transition-all hover:-translate-y-1">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-brand-dark border border-brand-light-gray flex items-center justify-center text-text-secondary hover:text-brand-orange hover:border-brand-orange hover:bg-brand-orange/10 transition-all hover:-translate-y-1">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-brand-dark border border-brand-light-gray flex items-center justify-center text-text-secondary hover:text-brand-orange hover:border-brand-orange hover:bg-brand-orange/10 transition-all hover:-translate-y-1">
                  <Instagram size={20} />
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {/* Email Card */}
                <a href="mailto:contact@mlbhopal.tech" className="bg-brand-dark border border-brand-light-gray rounded-2xl p-6 flex items-center gap-6 hover:border-brand-orange hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] transition-all group">
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-brand-dark-gray border border-brand-light-gray flex items-center justify-center group-hover:bg-brand-orange/10 group-hover:border-brand-orange/30 transition-colors">
                    <Mail size={24} className="text-brand-orange" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-sm text-text-muted mb-1">Email Us</p>
                    <p className="text-lg font-medium text-white truncate">contact@mlbhopal.tech</p>
                  </div>
                </a>
                
                {/* Phone Card */}
                <a href="tel:+918969879979" className="bg-brand-dark border border-brand-light-gray rounded-2xl p-6 flex items-center gap-6 hover:border-brand-orange hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] transition-all group">
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-brand-dark-gray border border-brand-light-gray flex items-center justify-center group-hover:bg-brand-orange/10 group-hover:border-brand-orange/30 transition-colors">
                    <Phone size={24} className="text-brand-orange" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-sm text-text-muted mb-1">Call Us</p>
                    <p className="text-lg font-medium text-white truncate">+91 8969879979</p>
                  </div>
                </a>

                {/* Commudle Card */}
                <a href="https://www.commudle.com/communities/ml-bhopal" target="_blank" rel="noopener noreferrer" className="bg-brand-dark border border-brand-light-gray rounded-2xl p-6 flex items-center gap-6 hover:border-brand-orange hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] transition-all group sm:col-span-2 lg:col-span-1">
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-brand-dark-gray border border-brand-light-gray flex items-center justify-center group-hover:bg-brand-orange/10 group-hover:border-brand-orange/30 transition-colors">
                    <Users size={24} className="text-brand-orange" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-sm text-text-muted mb-1">Join our Community</p>
                    <p className="text-lg font-medium text-white truncate">ML Bhopal on Commudle</p>
                  </div>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-8 border-t border-brand-light-gray text-center text-text-muted text-sm">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <p>© 2026 AI Day Bhopal. All rights reserved.</p>
      <p>Powered by ML Bhopal</p>
    </div>
  </footer>
);

export default function App() {
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.origin === window.location.origin) {
        const id = anchor.hash.substring(1);
        const elem = document.getElementById(id);
        if (elem) {
          e.preventDefault();
          const yOffset = -80; // Navbar height offset
          const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark text-text-primary selection:bg-brand-orange/30 font-sans">
      <main>
        <Hero />
        <AboutAIDay />
        <AboutMLBhopal />
        <PastEvents />
        <PastSpeakers />
        <EventHighlights />
        <WhySponsor />
        <CommunityLeads />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
