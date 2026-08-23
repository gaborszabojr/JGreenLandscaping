import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
  role: 'user' | 'model';
  content: string;
}

const SYSTEM_INSTRUCTION = `Your name is Gabe. You are a professional AI assistant for J Green Landscaping. 

Company Overview:
- Name: J Green Landscaping
- Specialty: Mowing & lawn edging, weeding flower beds & landscape areas, trimming bushes, shrubs & small trees, spring & fall cleanups, and removing leaves, branches & yard debris.
- Track Record: 100+ projects completed.
- Service Areas: North Philadelphia, Northeast Philadelphia, and surrounding Philadelphia regions.

Services Offered:
1. Mow, Edge, and Trim Lawns: Precision mowing, clean border edging, and weed trimming for pristine, healthy lawns.
2. Weed Flower Beds and Landscape Areas: Complete weeding, soil cultivation, and bed clearing to keep flower beds and garden borders neat and flourishing.
3. Trim Bushes, Shrubs, and Small Trees: Expert shaping, pruning, and foliage maintenance for hedges, shrubs, and small trees.
4. Perform Spring and Fall Cleanups: Comprehensive seasonal property revitalization for lawn and bed prep in spring and fall.
5. Remove Leaves, Branches, and Yard Debris: Full cleanup and haul-away of fallen leaves, storm branches, clippings, and outdoor debris.

Communication Style:
- Professional, direct, and helpful.
- Provide concise answers without excessive pleasantries.
- Maintain a friendly, quality-driven tone reflecting J Green Landscaping's high standards.

Key Directives:
1. For quotes or project inquiries, tell users to click the "Inquire for Design" or "Inquire" button to open the consultation form.
2. If customers need direct contact, provide: (267) 973-1605 or Ortizjustin1738@gmail.com.
3. Do not make up pricing or specific project timelines; refer those to the design team/consultation.`;

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
        // We could pass history here, but for simplicity we'll just handle it in memory
        // and send the current context if needed.
        // For a more robust app, you'd pass the full message history.
      });

      // Sending only the last message for simplicity in this implementation, 
      // but Gemini sessions handle context automatically if we use sendMessage.
      const response = await chat.sendMessage({ 
        message: userMessage 
      });

      const aiText = response.text || "I'm sorry, I couldn't generate a response.";
      setMessages(prev => [...prev, { role: 'model', content: aiText }]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages(prev => [...prev, { role: 'model', content: "Sorry, I'm having trouble connecting right now. Please try again or contact us directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-80 md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-brand-green-leaf/20 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand-green-dark p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-green-leaf rounded-full flex items-center justify-center">
                  <Bot size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-black italic">GABE</h3>
                  <p className="text-[10px] text-brand-green-light font-bold uppercase tracking-widest">Ai agent online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-brand-green-light transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 p-4 overflow-y-auto space-y-4 bg-brand-silver/10"
            >
              {messages.length === 0 && (
                <div className="text-center py-10 space-y-4">
                  <div className="w-12 h-12 bg-brand-silver/20 rounded-full flex items-center justify-center mx-auto text-brand-metal">
                    <MessageSquare size={24} />
                  </div>
                  <p className="text-xs text-brand-metal italic font-medium px-6">
                    "Hey I'm Gabe. How can I make your lawn or landscape look outstanding with Johnson's Landscaping?"
                  </p>
                </div>
              )}
              {messages.map((m, i) => (
                <div 
                  key={i} 
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${m.role === 'user' ? 'bg-brand-green-leaf text-white' : 'bg-brand-green-dark text-white'}`}>
                      {m.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-brand-green-leaf text-white rounded-tr-none' : 'bg-white shadow-sm border border-brand-silver/30 rounded-tl-none text-brand-green-dark'}`}>
                      <div className="prose prose-sm prose-green">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {m.content}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-2 max-w-[85%]">
                    <div className="w-6 h-6 rounded-full bg-brand-green-dark text-white flex items-center justify-center">
                      <Bot size={14} />
                    </div>
                    <div className="p-3 rounded-2xl bg-white shadow-sm border border-brand-silver/30 rounded-tl-none flex items-center gap-2">
                       <Loader2 size={16} className="animate-spin text-brand-green-leaf" />
                      <span className="text-xs italic text-brand-metal">Consulting turf records...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-brand-silver/30 bg-white">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full bg-brand-silver/20 border-0 p-3 pr-12 rounded-xl text-sm focus:ring-2 ring-brand-green-leaf outline-none"
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand-green-dark text-white rounded-lg hover:bg-brand-green-leaf hover:text-white transition-all disabled:opacity-50"
                >
                  <Send size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand-green-dark text-white rounded-full flex items-center justify-center shadow-2xl border-2 border-brand-green-leaf relative group"
        id="ai-chat-toggle"
      >
        <div className="absolute inset-0 bg-brand-green-leaf opacity-0 group-hover:opacity-20 rounded-full transition-opacity"></div>
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        
        {/* Pulsing notification dot */}
        {!isOpen && messages.length === 0 && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-brand-green-light rounded-full border-2 border-brand-green-dark animate-pulse"></span>
        )}
      </motion.button>
    </div>
  );
}
