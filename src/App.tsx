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
import beforeImg from './before after/IMG_0394.jpeg';
import afterImg from './before after/IMG_3423.jpeg';
import pic3 from './before after/Pics/pics 3.jpg';
import pic4 from './before after/Pics/pics 4.jpg';
import pic5 from './before after/Pics/pics5.jpg';
import pic6 from './before after/Pics/pics 6.jpg';
import pic7 from './before after/Pics/pics7.jpg';

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
    content: "As a homeowner, finding dependable lawn care is tough. J Green Landscaping is punctual, thorough, and delivers a clean, immaculate finish every single visit.",
    stars: 5,
    location: "Philadelphia, PA"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
                <span className={`text-2xl font-display font-bold tracking-tighter leading-none ${scrolled ? 'text-white' : 'text-brand-green-dark'}`}>J GREEN LANDSCAPING</span>
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
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1590059345090-df4cc2541300?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Paving" 
            className="w-full h-full object-cover grayscale-[20%] opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-cream via-brand-cream/80 to-brand-cream"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-green-leaf mb-6 block">Dedicated Lawn & Landscape Care</span>
            <h1 className="text-7xl md:text-[10rem] font-display font-bold leading-[0.85] mb-10 tracking-tight text-brand-green-dark">
              Flawless <br />
              <span className="italic font-normal">Lawns.</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-green-dark/70 font-light max-w-2xl leading-relaxed mb-12 border-l-2 border-brand-green-light pl-8">
              We specialize in the science of vibrant green grass and beautiful landscape design. 
              From precision lawn care to expert sod installations, we cultivate estates that flourish.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="btn-primary" onClick={() => setIsQuoteOpen(true)}>Inquire for Design</button>
              <button className="btn-secondary" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>View Portfolio</button>
            </div>
          </motion.div>
        </div>

        {/* Floating Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
        >
          <span className="text-[8px] uppercase tracking-widest font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-brand-green-dark"></div>
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
      <section id="portfolio" className="bg-brand-green-dark py-32 text-white overflow-hidden organic-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10 order-2 lg:order-1">
              <BeforeAfterSlider 
                beforeImage={beforeImg} 
                afterImage={afterImg} 
              />
            </div>
            <div className="space-y-10 order-1 lg:order-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-green-light block">Case Study</span>
              <h2 className="text-6xl md:text-8xl leading-tight italic">Lawn <br />Rebirth.</h2>
              <p className="text-brand-silver/50 text-lg font-light leading-relaxed max-w-md italic">
                From patchy, weed-infested ground to a dense, vibrant green estate. We corrected the soil composition, installed premium Bermuda sod, and established an ongoing maintenance schedule that yielded spectacular results.
              </p>
              <div className="flex gap-12 pt-4">
                <div>
                  <p className="text-4xl font-display italic">100+</p>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 mt-2">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-28 sm:mt-36 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {PORTFOLIO.map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8, scale: 1.02 }}
                className="aspect-square rounded-lg bg-white/5 overflow-hidden border border-white/10 opacity-75 hover:opacity-100 transition-all duration-500 shadow-md hover:shadow-xl cursor-pointer"
              >
                <img src={img} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" alt="Portfolio" />
              </motion.div>
            ))}
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

      {/* Booking Form Overlay Redesign */}
      <section id="contact" className="section-padding bg-brand-green-dark text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 relative z-10">
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-green-light block">Begin the Dialogue</span>
              <h2 className="text-6xl md:text-8xl leading-none">Your Space, <br /><span className="italic font-normal">Reimagined.</span></h2>
              <p className="text-brand-silver/50 max-w-sm italic">
                Schedule a master design consultation. We'll walk your terrain together and discuss the latent potential of your landscape.
              </p>
            </div>

            <div className="space-y-8 pt-10">
              <a href="tel:2679731605" className="flex items-start gap-6 group">
                <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-brand-green-light transition-all">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-1 font-mono">Client Support</p>
                  <p className="text-xl font-display group-hover:text-brand-green-light transition-colors">(267) 973-1605</p>
                </div>
              </a>
              <a href="mailto:Ortizjustin1738@gmail.com" className="flex items-start gap-6 group">
                <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-brand-green-light transition-all">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-1 font-mono">Inquiries</p>
                  <p className="text-xl font-display group-hover:text-brand-green-light transition-colors">Ortizjustin1738@gmail.com</p>
                </div>
              </a>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-brand-green-light transition-all">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-1 font-mono">Service Area</p>
                  <p className="text-xl font-display">North & Northeast Philadelphia, PA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-cream text-brand-green-dark p-4 sm:p-6 lg:p-8 relative rounded-xl shadow-2xl border border-brand-green-leaf/20 flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-1 bg-brand-green-light"></div>
            <div className="mb-4">
              <span className="text-[10px] uppercase tracking-widest font-black text-brand-green-leaf block">Live Booking Calendar</span>
              <p className="text-xs text-brand-green-dark/70 mt-1">Select an available date and time below to schedule your consultation with Justin.</p>
            </div>
            <div className="w-full flex-grow min-h-[650px] bg-white rounded-lg overflow-hidden border border-brand-green-dark/10 shadow-inner">
              <iframe
                src="https://calendly.com/ortizjustin1738/30min?back=1&month=2026-08"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Book with J Green Landscaping on Calendly"
                className="w-full min-h-[650px] h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-brand-cream border-t border-brand-silver py-20 text-brand-green-dark">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-display font-bold">J GREEN LANDSCAPING</span>
            <span className="text-[8px] uppercase tracking-[0.4em] opacity-40">Premium Lawn & Landscape Services</span>
          </div>
          
          <div className="flex gap-12 text-[10px] uppercase font-bold tracking-widest opacity-40">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Careers</a>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/jgreenlandscaping/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              className="w-10 h-10 border border-brand-green-dark/10 rounded-full flex items-center justify-center hover:bg-brand-green-dark hover:text-white transition-all"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 text-center text-[9px] uppercase tracking-[0.3em] font-bold opacity-20">
          © 2026 J Green Landscaping. All visual rights reserved.
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
