import { useState, useEffect } from 'react';
import { 
  Scissors, 
  Trees, 
  Trash2, 
  Flower2,
  Calendar,
  Phone, 
  Mail, 
  Instagram, 
  Menu, 
  X,
  Star,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';

// Import local images for correct Vite asset bundling and routing
import beforeImg from './before after/IMG_0419.jpeg';
import afterImg from './before after/IMG_0421.jpeg';
import projectImg1 from './before after/IMG_0394.jpeg';
import projectImg2 from './before after/IMG_3423.jpeg';
import projectImg3 from './before after/IMG_0432.jpeg';
import projectImg4 from './before after/IMG_0435.jpeg';
import pic3 from './before after/Pics/pics 3.jpg';
import pic4 from './before after/Pics/pics 4.jpg';
import pic5 from './before after/Pics/pics5.jpg';
import pic6 from './before after/Pics/pics 6.jpg';
import pic7 from './before after/Pics/pics7.jpg';

const TRANSFORMATION_SETS = [
  {
    title: "Front Garden Makeover",
    before: beforeImg,
    after: afterImg,
    label: "Front Garden Makeover"
  },
  {
    title: "Trimming & Edging",
    before: projectImg1,
    after: projectImg2,
    label: "Trimming & Edging"
  },
  {
    title: "Yard Transformation",
    before: projectImg3,
    after: projectImg4,
    label: "Yard Transformation"
  }
];

const SERVICES = [
  {
    title: "Mow, Edge & Trim Lawns",
    description: "Precision mowing, razor-sharp perimeter edging, and weed trimming to keep your grass healthy, level, and immaculate.",
    icon: <Scissors className="w-5 h-5" />,
    image: pic3
  },
  {
    title: "Weed Flower Beds & Landscape Areas",
    description: "Detailed hand weeding, bed clearing, and soil cultivation to keep flower beds, gardens, and shrub borders pristine and weed-free.",
    icon: <Flower2 className="w-5 h-5" />,
    image: pic5
  },
  {
    title: "Trim Bushes, Shrubs & Small Trees",
    description: "Expert pruning, shaping, and structural trimming for bushes, hedges, and small trees to encourage healthy foliage and clean symmetry.",
    icon: <Trees className="w-5 h-5" />,
    image: pic4
  },
  {
    title: "Spring & Fall Cleanups",
    description: "Comprehensive seasonal cleanups to revitalize outdoor grounds in the spring and prep turf and beds safely for winter.",
    icon: <Calendar className="w-5 h-5" />,
    image: pic7
  },
  {
    title: "Remove Leaves, Branches & Debris",
    description: "Full yard clearing and haul-away of fallen leaves, downed branches, clippings, and seasonal organic debris.",
    icon: <Trash2 className="w-5 h-5" />,
    image: pic6
  }
];

const PORTFOLIO = [
  beforeImg,
  afterImg,
  projectImg1,
  projectImg2,
  projectImg3,
  projectImg4,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7
];

const TESTIMONIALS = [
  {
    name: "Caleb Thompson",
    role: "Homeowner",
    content: "Justin and his team transformed our front and back yard. Their lawn mowing and crisp border edging are always on time, and our grass has never looked this green and healthy.",
    stars: 5,
    location: "Northeast Philadelphia, PA"
  },
  {
    name: "Sarah Jenkins",
    role: "Homeowner",
    content: "They did an incredible job clearing out our overgrown flower beds and shaping all of our shrubs. Reliable, polite, and they left our property spotless after the seasonal cleanup.",
    stars: 5,
    location: "North Philadelphia, PA"
  },
  {
    name: "Marcus Miller",
    role: "Homeowner",
    content: "As a homeowner, finding dependable lawn care is tough. J Philly Landscaping is punctual, thorough, and delivers a clean, immaculate finish every single visit.",
    stars: 5,
    location: "Philadelphia, PA"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTransformation, setActiveTransformation] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeQuote = () => {
    setIsQuoteOpen(false);
  };

  return (
    <div className="min-h-screen organic-grid selection:bg-brand-green-light selection:text-white">
      {/* Header Group */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className={`transition-all duration-500 ${scrolled ? 'glass-nav py-4 shadow-xl' : 'bg-transparent py-8'} border-b border-white/5`}>
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className={`text-2xl font-display font-bold tracking-tighter leading-none ${scrolled ? 'text-white' : 'text-brand-green-dark'}`}>J PHILLY LANDSCAPING</span>
                <span className={`text-[9px] font-medium uppercase tracking-[0.4em] leading-none mt-1 opacity-60 ${scrolled ? 'text-white' : 'text-brand-green-dark'}`}>Premium Lawn & Landscape Services</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {['Services', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all hover:text-brand-green-light ${scrolled ? 'text-white' : 'text-brand-green-dark'}`}
                >
                  {item}
                </a>
              ))}
              <button 
                className={`text-[10px] uppercase tracking-[0.2em] font-bold border-b-2 pb-1 transition-all ${scrolled ? 'border-white text-white hover:text-brand-green-light hover:border-brand-green-light' : 'border-brand-green-dark text-brand-green-dark hover:text-brand-green-light hover:border-brand-green-light'}`} 
                id="quote-btn" 
                onClick={() => setIsQuoteOpen(true)}
              >
                Inquire
              </button>
            </div>

            <button className={`${scrolled ? 'text-white' : 'text-brand-green-dark'} md:hidden`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full left-0 right-0 bg-brand-green-dark text-white p-10 flex flex-col gap-8 md:hidden border-t border-white/5"
              >
                {['Services', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-4xl font-display font-medium border-b border-white/5 pb-4">
                    {item}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
      {/* Hero Section */}
      <section className="relative min-h-[92vh] md:min-h-screen flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1590059345090-df4cc2541300?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Paving" 
            className="w-full h-full object-cover grayscale-[15%] opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/90 via-brand-cream/80 to-brand-cream"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green-dark/10 border border-brand-green-dark/15 mb-6 text-brand-green-dark">
              <span className="w-2 h-2 rounded-full bg-brand-green-leaf animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em]">Professional Lawn & Landscape Care</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-display font-bold leading-[0.95] mb-8 tracking-tight text-brand-green-dark">
              Flawless <br />
              <span className="italic font-normal text-brand-green-leaf">Lawns.</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-brand-green-dark/80 font-light max-w-2xl leading-relaxed mb-10 border-l-2 border-brand-green-light pl-6">
              We specialize in the science of vibrant green grass and beautiful landscape design. 
              From precision lawn mowing to seasonal cleanups, we cultivate outdoor spaces that flourish.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-10">
              <button className="btn-primary text-center" onClick={() => setIsQuoteOpen(true)}>
                Schedule Consultation
              </button>
              <button className="btn-secondary text-center" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                View Portfolio
              </button>
            </div>

            {/* Quick Contact & Trust Bar */}
            <div className="pt-6 border-t border-brand-green-dark/10 flex flex-wrap items-center gap-y-4 gap-x-8 text-xs font-medium text-brand-green-dark/80">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-brand-green-leaf" />
                <a href="tel:2679731605" className="hover:text-brand-green-leaf font-bold transition-colors">
                  (267) 973-1605
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-brand-green-leaf" />
                <span>North & NE Philadelphia, PA</span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-600 font-semibold">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <span className="text-brand-green-dark/70 ml-1">5.0 Star Rated</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Scroll Indicator (desktop only) */}
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-[9px] uppercase tracking-widest font-bold text-brand-green-dark">Explore</span>
          <div className="w-[1px] h-10 bg-brand-green-dark"></div>
        </motion.div>
      </section>

      <section id="services" className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-24 border-b border-brand-silver pb-16">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-green-leaf mb-4 block underline decoration-brand-green-light underline-offset-8">Our Expertise</span>
              <h2 className="text-5xl md:text-7xl">Precision Built. Artistically Focused.</h2>
            </div>
            <p className="text-brand-green-dark/60 max-w-sm mb-2 text-sm italic">
              Every project begins with deep environmental insight and ends with an uncompromising standard of finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {SERVICES.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group space-y-5 flex flex-col justify-between p-4 rounded-xl border border-brand-silver/50 hover:border-brand-green-light hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="space-y-4">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  </div>
                  <div className="space-y-2">
                    <div className="w-9 h-9 rounded-full bg-brand-cream flex items-center justify-center text-brand-green-dark group-hover:bg-brand-green-light group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-display font-semibold leading-tight">{service.title}</h3>
                    <p className="text-xs text-brand-green-dark/70 leading-relaxed font-light">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Split Section */}
      <section id="portfolio" className="bg-brand-green-dark py-24 md:py-32 text-white overflow-hidden organic-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              {/* Transformation Project Tabs */}
              <div className="flex items-center gap-3 pb-2 overflow-x-auto">
                {TRANSFORMATION_SETS.map((tSet, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTransformation(idx)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                      activeTransformation === idx
                        ? 'bg-brand-green-light text-brand-green-dark shadow-md'
                        : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {tSet.label}
                  </button>
                ))}
              </div>

              <BeforeAfterSlider 
                key={activeTransformation}
                beforeImage={TRANSFORMATION_SETS[activeTransformation].before} 
                afterImage={TRANSFORMATION_SETS[activeTransformation].after} 
              />
              <p className="text-xs text-brand-silver/60 text-center italic">
                Drag the center slider left and right to inspect the before and after transformation
              </p>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-green-light block">Case Study</span>
              <h2 className="text-5xl sm:text-6xl md:text-8xl leading-tight font-display font-bold">
                Lawn <br /><span className="italic font-normal text-brand-green-light">Rebirth.</span>
              </h2>
              <p className="text-brand-silver/70 text-base sm:text-lg font-light leading-relaxed max-w-md">
                From overgrown weeds and tired turf to a vibrant, crisp lawn with defined borders. We perform thorough hand weeding, precision mowing, structural shrub pruning, and seasonal restoration.
              </p>
              <div className="flex gap-12 pt-2 border-t border-white/10">
                <div>
                  <p className="text-3xl sm:text-4xl font-display font-bold text-brand-green-light">100+</p>
                  <p className="text-[10px] uppercase tracking-widest text-brand-silver/60 mt-1">Properties Transformed</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-display font-bold text-brand-green-light">5.0 ★</p>
                  <p className="text-[10px] uppercase tracking-widest text-brand-silver/60 mt-1">Homeowner Rated</p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Gallery */}
          <div className="mt-20 sm:mt-28">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-green-light block">Project Showcase</span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">Recent Work & Yard Transformations</h3>
              </div>
              <span className="text-xs text-brand-silver/60">{PORTFOLIO.length} Project Highlights</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11 gap-3 sm:gap-4">
              {PORTFOLIO.map((img, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="aspect-square rounded-xl bg-white/5 overflow-hidden border border-white/10 opacity-80 hover:opacity-100 transition-all duration-300 shadow-md hover:shadow-2xl cursor-pointer"
                >
                  <img 
                    src={img} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                    alt={`Portfolio Project ${i + 1}`} 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-padding bg-brand-cream relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-24">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-green-leaf mb-6 block">Client Voices</span>
            <h2 className="text-5xl md:text-8xl leading-tight">What it feels like to <br /><span className="italic">Transform.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col h-full"
              >
                <div className="flex gap-1 text-brand-green-light mb-8">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} size={12} className="fill-current" />)}
                </div>
                <p className="text-xl md:text-2xl italic font-light leading-relaxed text-brand-green-dark/80 mb-10 flex-grow">
                  "{t.content}"
                </p>
                <div className="pt-8 border-t border-brand-green-dark/5">
                  <p className="font-display font-medium text-xl text-brand-green-dark">{t.name}</p>
                  <p className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-40 mt-2">{t.role} — {t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking & Contact Section */}
      <section id="contact" className="section-padding bg-brand-green-dark text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 relative z-10 items-start">
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-green-light block">Direct Scheduling</span>
              <h2 className="text-5xl sm:text-6xl md:text-7xl leading-[1.05]">Your Space, <br /><span className="italic font-normal text-brand-green-light">Reimagined.</span></h2>
              <p className="text-brand-silver/70 text-sm sm:text-base leading-relaxed">
                Schedule your personal consultation directly with Justin. We'll evaluate your property's terrain and discuss a customized maintenance or transformation plan.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <a href="tel:2679731605" className="flex items-center gap-5 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-green-light transition-all group">
                <div className="w-12 h-12 rounded-lg bg-brand-green-leaf/30 text-brand-green-light flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green-light group-hover:text-brand-green-dark transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-brand-silver/60 font-bold font-mono">Call / Text Direct</p>
                  <p className="text-lg sm:text-xl font-display font-bold group-hover:text-brand-green-light transition-colors">(267) 973-1605</p>
                </div>
              </a>

              <a href="mailto:Ortizjustin1738@gmail.com" className="flex items-center gap-5 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-green-light transition-all group">
                <div className="w-12 h-12 rounded-lg bg-brand-green-leaf/30 text-brand-green-light flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green-light group-hover:text-brand-green-dark transition-all">
                  <Mail size={20} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] uppercase tracking-widest text-brand-silver/60 font-bold font-mono">Direct Email</p>
                  <p className="text-base sm:text-lg font-display font-bold truncate group-hover:text-brand-green-light transition-colors">Ortizjustin1738@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-5 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-lg bg-brand-green-leaf/30 text-brand-green-light flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-brand-silver/60 font-bold font-mono">Service Area</p>
                  <p className="text-base sm:text-lg font-display font-medium">North & Northeast Philadelphia, PA</p>
                </div>
              </div>

              <a 
                href="https://www.instagram.com/jgreenlandscaping/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-green-light transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-green-leaf/30 text-brand-green-light flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green-light group-hover:text-brand-green-dark transition-all">
                  <Instagram size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-brand-silver/60 font-bold font-mono">Follow On Instagram</p>
                  <p className="text-base sm:text-lg font-display font-bold group-hover:text-brand-green-light transition-colors">@jgreenlandscaping</p>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-brand-cream text-brand-green-dark p-4 sm:p-6 lg:p-8 relative rounded-2xl shadow-2xl border border-brand-green-leaf/20 flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-1.5 bg-brand-green-leaf rounded-tr-2xl"></div>
            <div className="mb-4">
              <span className="text-[10px] uppercase tracking-widest font-black text-brand-green-leaf block">Instant Calendar Appointment</span>
              <h3 className="text-2xl font-display font-bold text-brand-green-dark mt-0.5">Pick a Date & Time</h3>
              <p className="text-xs text-brand-green-dark/70 mt-1">Book your 30-minute property walkthrough or lawn evaluation directly on our live calendar.</p>
            </div>
            <div className="w-full flex-grow min-h-[660px] bg-white rounded-xl overflow-hidden border border-brand-green-dark/10 shadow-inner">
              <iframe
                src="https://calendly.com/ortizjustin1738/30min?back=1&month=2026-08"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Book with J Philly Landscaping on Calendly"
                className="w-full min-h-[660px] h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Structured Comprehensive Footer */}
      <footer className="bg-brand-cream border-t border-brand-silver pt-16 pb-12 text-brand-green-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-brand-green-dark/10">
            {/* Col 1: Brand & Overview */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold tracking-tight text-brand-green-dark">J PHILLY LANDSCAPING</span>
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-green-leaf mt-1">Premium Lawn & Landscape Services</span>
              </div>
              <p className="text-xs text-brand-green-dark/70 leading-relaxed pr-4">
                Professional residential lawn mowing, crisp border edging, shrub grooming, and seasonal property cleanups across Philadelphia.
              </p>
              <div className="pt-2">
                <a 
                  href="https://www.instagram.com/jgreenlandscaping/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-brand-green-dark text-white text-xs font-semibold hover:bg-brand-green-leaf transition-colors shadow-sm"
                >
                  <Instagram size={14} />
                  <span>@jgreenlandscaping</span>
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="lg:col-span-2 space-y-3">
              <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-brand-green-dark font-mono">Navigation</p>
              <ul className="space-y-2 text-xs font-medium text-brand-green-dark/75">
                <li><a href="#services" className="hover:text-brand-green-leaf transition-colors">Services</a></li>
                <li><a href="#portfolio" className="hover:text-brand-green-leaf transition-colors">Before & After</a></li>
                <li><a href="#portfolio" className="hover:text-brand-green-leaf transition-colors">Gallery</a></li>
                <li><a href="#testimonials" className="hover:text-brand-green-leaf transition-colors">Client Reviews</a></li>
                <li><a href="#contact" className="hover:text-brand-green-leaf transition-colors">Live Booking</a></li>
              </ul>
            </div>

            {/* Col 3: Core Services */}
            <div className="lg:col-span-3 space-y-3">
              <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-brand-green-dark font-mono">Our Services</p>
              <ul className="space-y-2 text-xs font-medium text-brand-green-dark/75">
                <li>Lawn Mowing & Border Edging</li>
                <li>Hedge & Shrub Sculpting</li>
                <li>Spring & Fall Yard Cleanups</li>
                <li>Sod Installation & Soil Care</li>
                <li>Mulch Application & Weed Control</li>
              </ul>
            </div>

            {/* Col 4: Contact & Service Area */}
            <div className="lg:col-span-3 space-y-3">
              <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-brand-green-dark font-mono">Direct Contact</p>
              <div className="space-y-2.5 text-xs text-brand-green-dark/80">
                <div className="flex items-center gap-2">
                  <Phone size={13} className="text-brand-green-leaf flex-shrink-0" />
                  <a href="tel:2679731605" className="font-bold hover:text-brand-green-leaf transition-colors">(267) 973-1605</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={13} className="text-brand-green-leaf flex-shrink-0" />
                  <a href="mailto:Ortizjustin1738@gmail.com" className="hover:text-brand-green-leaf transition-colors truncate">Ortizjustin1738@gmail.com</a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={13} className="text-brand-green-leaf flex-shrink-0 mt-0.5" />
                  <span>North & Northeast Philadelphia, PA</span>
                </div>
                <div className="pt-1 text-[11px] text-brand-green-dark/60">
                  Mon – Sat: 7:00 AM – 6:00 PM
                </div>
              </div>
            </div>
          </div>

          {/* Bottom sub-footer bar */}
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-brand-green-dark/60">
            <p>
              © {new Date().getFullYear()} J Philly Landscaping. All rights reserved. | Site by{' '}
              <a 
                href="https://www.hyzalabs.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-semibold hover:text-brand-green-leaf transition-colors underline underline-offset-2"
              >
                Hyzalabs
              </a>
            </p>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                className="hover:text-brand-green-dark font-semibold transition-colors cursor-pointer"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Quote Modal Overlay */}
      <AnimatePresence>
        {isQuoteOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-brand-green-dark/95 backdrop-blur-md"
              onClick={closeQuote}
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl bg-brand-cream p-6 sm:p-10 shadow-2xl rounded-2xl max-h-[90vh] flex flex-col border border-brand-green-leaf/20"
            >
              <button 
                onClick={closeQuote}
                className="absolute top-6 right-6 text-brand-green-dark/40 hover:text-brand-green-dark transition-colors z-10"
                id="close-quote-btn"
              >
                <X size={24} />
              </button>
              
              <div className="space-y-4 text-center mb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-green-leaf block">Direct Booking</span>
                <h3 className="text-3xl sm:text-4xl font-display">Schedule Your Consultation</h3>
                <p className="text-xs text-brand-green-dark/70 max-w-md mx-auto">Select a convenient date and time directly on our live calendar with Justin.</p>
              </div>

              <div className="w-full flex-grow min-h-[580px] bg-white rounded-xl overflow-hidden border border-brand-green-dark/10 shadow-inner">
                <iframe
                  src="https://calendly.com/ortizjustin1738/30min?back=1&month=2026-08"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Book Consultation on Calendly"
                  className="w-full min-h-[580px] h-full"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
