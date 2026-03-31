/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Monitor, 
  Bot, 
  Eye, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail,
  Menu,
  X
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    {
      title: 'Web & Mobile Apps',
      description: 'Architecture-first approach to building high-performance cross-platform applications using React, Node.js, and Flutter.',
      icon: <Monitor className="w-8 h-8 text-secondary" />,
    },
    {
      title: 'AI & Automation',
      description: 'Integrating LLMs and custom machine learning pipelines to automate complex business workflows and enhance decision-making.',
      icon: <Bot className="w-8 h-8 text-secondary" />,
    },
    {
      title: 'Computer Vision',
      description: 'Developing advanced vision systems for object detection, spatial tracking, and automated surveillance monitoring.',
      icon: <Eye className="w-8 h-8 text-secondary" />,
    },
  ];

  const projects = [
    {
      title: 'FinTech Dashboard',
      description: 'Real-time assets management platform with institutional-grade security and advanced visualization.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2U1LTK6pX1v1uA1NtlZpPyVkk86PKZNeOLDmG33a355qVez3DdjlMkERoCv9QJ-GecDR6_77dE24zFwIPV3ejqAgEOyOrB1arMuAvlfUmwMgoqn4LOsY4t4GYbEqdKF5cmBN0uj13fyz_Flz9YMB8m5EwusfFab2NGOp3ETpmgbqqgtaZT_c6ehmEbQEs0iDQ-95e2GJkPoXcCGUDR78hvd9NJQUfTnBv588uQWBL9lP86xlXhGjRPkMNX960RwStVGgyBrtYMIsT',
      tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    },
    {
      title: 'E-commerce Platform',
      description: 'Headless commerce engine for luxury brands featuring high-conversion checkout flows and AR previews.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNJcX-1HjaPixxoIYmnto0uR8zNcyGrEmQW-pzcllSSXuWlqW4GD-symgXiEkBRU7G0FfdBFZkpnTxOCWTiYnX7SSAxM-TD0lwcUqhz65IKxNPPwtrj3GPLTPx6Wzs8J42z8_Qixyjs937iD_w6OCTw-3q2AToxGlDfXEef1x_t1VfsLNgGbZeFZunLkEA6xO9jZMxrgvrw-pflwQVnP30y9xvEPCMiOh5g0mF5-xiMnR83wFIiY9KlLMxxUzsUdOrDHHsZfq2PE7f',
      tags: ['Shopify', 'React', 'Node.js'],
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Enterprise intelligence suite integrating LLMs for predictive market analysis and automated reporting.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLXriJarVvr4cr2kRUTXm4kdHNlLg8L42AegwDFq0TJGwA8DHrymnm69aDzKE4fuU5rilNNRvHqPgug6CiwqWq66FCif19c-nSM6aFY2Nmtv4WUvBfXuIRmUq3KIXd4n4Uso_PILs-R6Wkpg9EUil6pq17ZyB9wVMN9yfTYxcuhPnrRKXqaobiwD0ab0rKtJvWl2YYAERVUy7nHYljYMPFN4VVzHYPIPsOHstiYzX4Ecz2027W0ptlm89nW0umTVgDdcNXvV-DGLaq',
      tags: ['OpenAI', 'Python', 'Vercel'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-surface/80 glass-nav py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <a href="#" className="text-xl font-extrabold tracking-tighter text-primary font-headline">
            The Digital Architect
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-primary/70 hover:text-primary transition-colors font-headline font-bold tracking-tight text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-secondary text-white px-6 py-3 rounded-lg font-headline font-bold tracking-tight hover:opacity-90 transition-all active:scale-95">
              Hire Me
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-primary p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-gray-100 p-8 flex flex-col gap-6 shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-primary font-headline font-bold text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-secondary text-white px-6 py-4 rounded-lg font-headline font-bold text-center">
              Hire Me
            </button>
          </motion.div>
        )}
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-40 pb-32 px-8 max-w-7xl mx-auto overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-3/5"
            >
              <span className="inline-block text-secondary font-headline font-bold tracking-widest text-xs uppercase mb-4">
                Full-Stack & AI Engineering
              </span>
              <h1 className="text-5xl lg:text-7xl font-headline font-extrabold text-primary leading-[1.1] tracking-tight mb-8">
                I build web and mobile applications that help your business scale.
              </h1>
              <div className="flex flex-wrap gap-4">
                <button className="bg-secondary text-white px-8 py-4 rounded-xl font-headline font-bold text-lg hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-secondary/20">
                  Let's Talk
                </button>
                <button className="bg-gray-100 text-primary px-8 py-4 rounded-xl font-headline font-bold text-lg hover:bg-gray-200 transition-all">
                  View Portfolio
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="lg:w-2/5 relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-2xl transition-transform duration-500 hover:rotate-0">
                <img 
                  alt="Professional Developer" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLXriJarVvr4cr2kRUTXm4kdHNlLg8L42AegwDFq0TJGwA8DHrymnm69aDzKE4fuU5rilNNRvHqPgug6CiwqWq66FCif19c-nSM6aFY2Nmtv4WUvBfXuIRmUq3KIXd4n4Uso_PILs-R6Wkpg9EUil6pq17ZyB9wVMN9yfTYxcuhPnrRKXqaobiwD0ab0rKtJvWl2YYAERVUy7nHYljYMPFN4VVzHYPIPsOHstiYzX4Ecz2027W0ptlm89nW0umTVgDdcNXvV-DGLaq"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 px-8 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl lg:text-5xl font-headline font-extrabold text-primary tracking-tight">
                Specialized Solutions for the Modern Enterprise
              </h2>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:w-1/3"
            >
              <p className="text-on-surface-variant leading-relaxed">
                Leveraging cutting-edge stacks to build robust, scalable, and intelligent systems that solve real-world problems.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-xl shadow-[0px_12px_32px_-4px_rgba(26,28,28,0.06)] hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-8">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-headline font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-on-surface-variant font-body">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured Work Section */}
        <section id="work" className="py-32 bg-primary-container text-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-16">
              <span className="text-secondary font-headline font-bold tracking-widest text-xs uppercase mb-4 inline-block">
                Case Studies
              </span>
              <h2 className="text-4xl lg:text-6xl font-headline font-extrabold mb-6 tracking-tight">
                Featured Work
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div 
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-secondary/50 transition-all duration-300"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      src={project.image}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-headline font-bold mb-3">{project.title}</h3>
                    <p className="text-white/70 mb-6 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map(tag => (
                        <span key={tag} className="bg-white/10 px-3 py-1 rounded-full text-xs font-label">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center gap-2 font-headline font-bold text-sm text-secondary hover:translate-x-2 transition-transform">
                      VIEW PROJECT <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-32 px-8 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 order-2 lg:order-1"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 grayscale hover:grayscale-0 transition-all duration-1000">
                <img 
                  alt="Developer Working" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNJcX-1HjaPixxoIYmnto0uR8zNcyGrEmQW-pzcllSSXuWlqW4GD-symgXiEkBRU7G0FfdBFZkpnTxOCWTiYnX7SSAxM-TD0lwcUqhz65IKxNPPwtrj3GPLTPx6Wzs8J42z8_Qixyjs937iD_w6OCTw-3q2AToxGlDfXEef1x_t1VfsLNgGbZeFZunLkEA6xO9jZMxrgvrw-pflwQVnP30y9xvEPCMiOh5g0mF5-xiMnR83wFIiY9KlLMxxUzsUdOrDHHsZfq2PE7f"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 order-1 lg:order-2"
            >
              <h2 className="text-4xl lg:text-5xl font-headline font-extrabold text-primary tracking-tight mb-8">
                Architecting Scalable Digital Ecosystems
              </h2>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                <p>
                  I am a developer who thinks like an architect. My approach combines the rigor of structural engineering with the agility of modern full-stack development. 
                </p>
                <p>
                  With a background spanning high-concurrency web systems and complex AI implementations, I help startups and established enterprises turn architectural blueprints into high-performance digital realities.
                </p>
                <div className="pt-6 grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-primary font-headline font-extrabold text-4xl mb-1">50+</p>
                    <p className="text-sm uppercase tracking-widest font-label font-bold text-primary/60">Projects Shipped</p>
                  </div>
                  <div>
                    <p className="text-primary font-headline font-extrabold text-4xl mb-1">99.9%</p>
                    <p className="text-sm uppercase tracking-widest font-label font-bold text-primary/60">Uptime Guarantees</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-32 bg-surface">
          <div className="max-w-5xl mx-auto px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl lg:text-7xl font-headline font-extrabold text-primary mb-10 tracking-tight">
                Ready to build the future?
              </h2>
              <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">
                Currently accepting new projects for Q4 2024. Let's discuss how we can scale your product.
              </p>
              <button className="bg-secondary text-white px-12 py-6 rounded-xl font-headline font-bold text-xl hover:shadow-2xl hover:shadow-secondary/30 transition-all active:scale-95">
                Start a Project
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary-container text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div>
              <div className="text-xl font-bold font-headline mb-4">The Digital Architect</div>
              <p className="text-white/60 max-w-xs leading-relaxed">
                High-end full-stack and AI development for visionaries and industry leaders.
              </p>
            </div>
            
            <div className="flex flex-col items-start md:items-end gap-6">
              <div className="flex flex-wrap gap-8">
                <a href="#" className="text-white/60 hover:text-secondary transition-colors flex items-center gap-2">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a href="#" className="text-white/60 hover:text-secondary transition-colors flex items-center gap-2">
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a href="#" className="text-white/60 hover:text-secondary transition-colors flex items-center gap-2">
                  <Twitter className="w-4 h-4" /> Twitter
                </a>
                <a href="#" className="text-white/60 hover:text-secondary transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email
                </a>
              </div>
              <div className="text-white/40 text-xs">
                © 2024 The Digital Architect. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
