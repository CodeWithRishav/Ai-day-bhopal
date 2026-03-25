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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Sponsor', href: '#sponsor' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <span className="text-brand-orange">AI</span> Day
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-text-secondary hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#register" className="bg-brand-orange text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-all hover:scale-105">
            Register Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-nav border-t border-brand-light-gray py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-base font-medium text-text-secondary hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#register" className="bg-brand-orange text-white px-5 py-3 rounded-lg text-center font-medium mt-2" onClick={() => setIsOpen(false)}>
            Register Now
          </a>
        </div>
      )}
    </nav>
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
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
            Build with <span className="text-brand-orange">AI</span>
          </h1>
          
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
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#register" className="bg-brand-orange text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-all hover:scale-[1.03] flex items-center justify-center gap-2">
              Register Now <ArrowRight size={18} />
            </a>
            <a href="#sponsor" className="border border-brand-orange text-brand-orange px-8 py-4 rounded-xl font-semibold hover:bg-brand-orange/10 transition-all flex items-center justify-center">
              Become a Sponsor
            </a>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2} className="hidden lg:flex justify-center relative">
          <div className="relative w-full aspect-square max-w-md">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute inset-8 border border-brand-light-gray rounded-full animate-[spin_60s_linear_infinite]"></div>
            <div className="absolute inset-16 border border-brand-light-gray border-dashed rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-brand-dark-gray border border-brand-orange/30 rounded-2xl rotate-12 flex items-center justify-center shadow-[0_0_50px_rgba(249,115,22,0.2)] backdrop-blur-sm">
                <Code size={48} className="text-brand-orange" />
              </div>
            </div>
          </div>
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
                  <div className="text-3xl font-bold text-white">1000+</div>
                  <div className="text-sm text-text-secondary">Learners impacted</div>
                </div>
                <div className="h-px w-full bg-brand-light-gray"></div>
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold text-white">10+</div>
                  <div className="text-sm text-text-secondary">Workshops, hackathons & meetups</div>
                </div>
                <div className="h-px w-full bg-brand-light-gray"></div>
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold text-white">5+</div>
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
    { name: "TensorFlow Workshop", location: "Bhopal", image: "https://picsum.photos/seed/tf/600/400" },
    { name: "ML Olympiad (Kaggle)", location: "Online + Bhopal", image: "https://picsum.photos/seed/kaggle/600/400" },
    { name: "ML & Cybersecurity 101", location: "Bhopal", image: "https://picsum.photos/seed/cyber/600/400" },
    { name: "ML Huddle", location: "Bhopal", image: "https://picsum.photos/seed/huddle/600/400" },
    { name: "ML Nexus with CTF", location: "Bhopal", image: "https://picsum.photos/seed/ctf/600/400" },
    { name: "Customizing LLMs Workshop", location: "Bhopal", image: "https://picsum.photos/seed/llm/600/400" },
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
    { name: "Jay Thakkar", role: "Google Developer Expert (GDE)", image: "https://picsum.photos/seed/jay/200/200" },
    { name: "Vinayak Gavariya", role: "ML Engineer", image: "https://picsum.photos/seed/vinayak/200/200" },
    { name: "Dr. Aditya Chandere", role: "IIT Indore", image: "https://picsum.photos/seed/aditya/200/200" },
    { name: "Shubham Sharma", role: "Security Engineer @ We45", image: "https://picsum.photos/seed/shubham/200/200" },
    { name: "Ankur Gupta", role: "SDE @ Internshala", image: "https://picsum.photos/seed/ankur/200/200" },
    { name: "Aditya Rai", role: "Security Blue Team", image: "https://picsum.photos/seed/rai/200/200" },
    { name: "Gaurav Nema", role: "Full Stack Engineer", image: "https://picsum.photos/seed/gaurav/200/200" },
    { name: "More Experts", role: "To be announced", image: "https://picsum.photos/seed/more/200/200" },
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
              <a href="#contact" className="inline-flex items-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-all hover:scale-[1.03]">
                Become a Sponsor <ArrowRight size={18} />
              </a>
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
    { name: "Rishav Kumar", role: "Community Lead", image: "https://picsum.photos/seed/rishav/300/300" },
    { name: "Rishabh Gupta", role: "Community Lead", image: "https://picsum.photos/seed/rishabh/300/300" },
    { name: "Anurag Mishra", role: "Community Lead", image: "https://picsum.photos/seed/anurag/300/300" },
    { name: "Abhishek Malviya", role: "Community Lead", image: "https://picsum.photos/seed/abhishek/300/300" },
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
        <div className="bg-gradient-to-br from-brand-dark-gray to-brand-dark border border-brand-light-gray rounded-3xl p-8 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 blur-3xl rounded-full"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
              <p className="text-lg text-text-secondary mb-8">
                Have questions or want to collaborate? Let's build the future of AI together.
              </p>
              
              <div className="space-y-6 mb-8">
                <a href="mailto:bhopal@mlcommunity.dev" className="flex items-center gap-4 text-text-secondary hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-brand-dark border border-brand-light-gray flex items-center justify-center group-hover:border-brand-orange transition-colors">
                    <Mail size={20} className="text-brand-orange" />
                  </div>
                  <span className="text-lg">bhopal@mlcommunity.dev</span>
                </a>
                <div className="flex items-center gap-4 text-text-secondary">
                  <div className="w-12 h-12 rounded-xl bg-brand-dark border border-brand-light-gray flex items-center justify-center">
                    <Phone size={20} className="text-brand-orange" />
                  </div>
                  <span className="text-lg">+91 (Add numbers)</span>
                </div>
              </div>
              
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-brand-dark border border-brand-light-gray flex items-center justify-center text-text-secondary hover:text-brand-orange hover:border-brand-orange transition-all">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-brand-dark border border-brand-light-gray flex items-center justify-center text-text-secondary hover:text-brand-orange hover:border-brand-orange transition-all">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-brand-dark border border-brand-light-gray flex items-center justify-center text-text-secondary hover:text-brand-orange hover:border-brand-orange transition-all">
                  <Instagram size={18} />
                </a>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} className="flex flex-col items-center md:items-end justify-center">
              <div className="bg-brand-dark border border-brand-light-gray rounded-2xl p-8 w-full max-w-md text-center">
                <h3 className="text-2xl font-bold mb-2">Sponsor With Us</h3>
                <p className="text-text-secondary mb-6">Partner with Central India's biggest AI event.</p>
                <a href="mailto:bhopal@mlcommunity.dev?subject=Sponsorship Inquiry" className="block w-full bg-brand-orange text-white px-6 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-all hover:scale-[1.02]">
                  Become a Sponsor
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

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approx 600px)
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50 }}
      transition={{ duration: 0.3 }}
      className={`fixed bottom-8 right-8 z-50 ${visible ? 'pointer-events-auto' : 'pointer-events-none'}`}
    >
      <a href="#register" className="bg-brand-orange text-white px-6 py-3 rounded-full font-semibold shadow-[0_10px_30px_rgba(249,115,22,0.3)] hover:bg-orange-600 hover:scale-105 transition-all flex items-center gap-2">
        Register Now <ArrowRight size={16} />
      </a>
    </motion.div>
  );
};

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
      <Navbar />
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
      <FloatingCTA />
    </div>
  );
}
