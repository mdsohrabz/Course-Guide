import React from 'react';
import { SectionTitle, TiltCard } from '../components/UI';
import { 
  Lightbulb, 
  DollarSign, 
  Heart, 
  CheckCircle, 
  Wrench, 
  Wallet, 
  Database, 
  Globe, 
  FileText, 
  Share2,
  Server,
  Cloud,
  Bot,
  Image as ImageIcon,
  Code,
  Zap,
  CreditCard,
  Rocket
} from 'lucide-react';
import { motion } from 'framer-motion';

export const Section1: React.FC = () => (
  <section className="py-24 md:py-32 relative z-10">
    <div className="container mx-auto px-6">
      <SectionTitle 
        number="01" 
        title="Finding Your Idea" 
        subtitle="The foundation of every great AI startup begins with asking the right questions."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <TiltCard title="What to Create?" icon={Lightbulb} delay={0.1} className="h-full">
          Define the core problem you are solving. Is it a tool, a platform, or a service?
        </TiltCard>
        <TiltCard title="Pricing Strategy" icon={DollarSign} delay={0.2} className="h-full">
          Freemium, subscription, or pay-per-use? How will you sustain the business?
        </TiltCard>
        <TiltCard title="Value Proposition" icon={Heart} delay={0.3} className="h-full">
          How does it genuinely help people? Save time, money, or effort?
        </TiltCard>
        <TiltCard title="Service Selection" icon={CheckCircle} delay={0.4} className="h-full">
          Finalize your features based on the answers above.
        </TiltCard>
      </div>

      <div className="rounded-2xl border border-brand-accent/30 bg-brand-accent/5 p-8 backdrop-blur-sm">
        <h3 className="text-2xl font-display font-bold text-brand-accent mb-4">Case Study: My AI Tool</h3>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-black/40 p-6 rounded-xl border border-brand-accent/20">
            <div className="flex items-center gap-3 mb-3 text-white">
              <ImageIcon className="text-pink-500" />
              <span className="font-bold">Image Generator</span>
              <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded">Paid Feature</span>
            </div>
            <p className="text-slate-400 text-sm">High-quality image generation for professional users.</p>
          </div>
          <div className="flex-1 bg-black/40 p-6 rounded-xl border border-brand-accent/20">
             <div className="flex items-center gap-3 mb-3 text-white">
              <Bot className="text-green-500" />
              <span className="font-bold">AI Chatbot</span>
              <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Free Feature</span>
            </div>
            <p className="text-slate-400 text-sm">Accessible chat interface similar to ChatGPT to drive traffic.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const Section2: React.FC = () => (
  <section className="py-24 md:py-32 relative z-10">
    <div className="container mx-auto px-6">
      <SectionTitle number="02" title="Choosing Prerequisites" subtitle="Selecting the right stack and understanding requirements." />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <TiltCard title="Tools" icon={Wrench} className="h-full">
          Select tools that allow rapid development and scaling. No-code/Low-code is great for MVPs.
        </TiltCard>
        <TiltCard title="Budget" icon={Wallet} className="h-full">
          Determine initial costs: Domain, Hosting, API credits. Keep it lean.
        </TiltCard>
        <TiltCard title="Data Storage" icon={Database} className="h-full">
          Where will user profiles and history live? Ensure security and compliance.
        </TiltCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-8 rounded-2xl bg-[#FF4F59]/10 border border-[#FF4F59]/30 flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 rounded-full bg-[#FF4F59] flex items-center justify-center text-white font-bold text-2xl mb-4">n8n</div>
          <h3 className="text-2xl font-bold text-white mb-2">Backend Logic</h3>
          <p className="text-slate-400">Powerful workflow automation to handle API requests and business logic.</p>
        </motion.div>

        <motion.div 
           whileHover={{ scale: 1.02 }}
           className="p-8 rounded-2xl bg-[#6E44FF]/10 border border-[#6E44FF]/30 flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 rounded-full bg-[#6E44FF] flex items-center justify-center text-white font-bold text-2xl mb-4">F</div>
          <h3 className="text-2xl font-bold text-white mb-2">Floot.com</h3>
          <h4 className="text-sm font-semibold text-brand-secondary mb-2">(Frontend)</h4>
          <p className="text-slate-400">Rapid UI deployment to connect with your N8n backend effortlessly.</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export const Section3: React.FC = () => (
  <section className="py-24 md:py-32 relative z-10">
    <div className="container mx-auto px-6">
      <SectionTitle number="03" title="Creating Your Identity" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <TiltCard title="Website & Domain" icon={Globe}>
            Choose a memorable name. Secure the .com or .ai TLD to establish credibility immediately.
          </TiltCard>
        </div>
        <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center min-h-[300px] lg:h-auto self-stretch">
          {/* Visual representation of a brand identity */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-secondary/20 to-transparent"></div>
          <div className="text-center z-10 p-8">
            <div className="text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-secondary mb-4">
              AI BRAND
            </div>
            <div className="flex gap-2 justify-center">
               <div className="w-3 h-3 rounded-full bg-brand-primary"></div>
               <div className="w-3 h-3 rounded-full bg-brand-secondary"></div>
               <div className="w-3 h-3 rounded-full bg-brand-accent"></div>
            </div>
            <p className="mt-6 text-slate-500 font-mono text-sm">est. 2024</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const Section4: React.FC = () => (
  <section className="py-24 md:py-32 relative z-10">
    <div className="container mx-auto px-6">
      <SectionTitle number="04" title="Setting Foundations" />
      
      <div className="flex flex-col gap-12">
        {/* N8n Hosting */}
        <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800">
           <div className="flex items-center gap-4 mb-6">
             <Server className="text-brand-primary" size={32}/>
             <h3 className="text-2xl font-bold">Hosting N8n Publicly</h3>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-slate-700 bg-slate-800/50 hover:border-brand-primary/50 transition-colors">
                <h4 className="font-bold text-lg mb-2">Self-Hosted (Free)</h4>
                <ul className="space-y-2 text-slate-400 text-sm list-disc pl-4">
                  <li>Requires technical setup (Docker)</li>
                  <li>Run on local tunnel or free tier VPS</li>
                  <li>Good for testing</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border border-brand-primary/50 bg-brand-primary/5">
                <div className="flex justify-between items-start">
                   <h4 className="font-bold text-lg mb-2 text-brand-primary">Hostinger VPS</h4>
                   <span className="bg-brand-primary text-white text-xs px-2 py-1 rounded">Recommended</span>
                </div>
                <ul className="space-y-2 text-slate-400 text-sm list-disc pl-4">
                  <li>One-click templates often available</li>
                  <li>Stable IP address</li>
                  <li>Scalable resources</li>
                </ul>
              </div>
           </div>
        </div>

        {/* Floot Setup */}
        <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800">
           <div className="flex items-center gap-4 mb-6">
             <Cloud className="text-brand-secondary" size={32}/>
             <h3 className="text-2xl font-bold">Setting Up Floot.com</h3>
           </div>
           <div className="flex items-center justify-between p-6 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700">
              <p className="text-slate-300">Create your account and initialize a new frontend project linked to your domain.</p>
              <div className="h-2 w-24 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

export const Section5: React.FC = () => (
  <section className="py-24 md:py-32 relative z-10">
    <div className="container mx-auto px-6">
      <SectionTitle number="05" title="Creating Backend Server" subtitle="The brain of your operation in N8n." />

      <div className="space-y-12">
        {/* Chatbot Workflow Visualization */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl opacity-20 blur"></div>
          <div className="relative bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Bot className="text-green-500" />
              AI Chatbot Workflow
            </h3>
            {/* Mock Node Graph */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-mono overflow-x-auto pb-4">
              <Node label="Webhook (POST)" color="bg-yellow-500" />
              <Arrow />
              <Node label="Gemini API (Chat)" color="bg-blue-500" />
              <Arrow />
              <Node label="Format JSON" color="bg-purple-500" />
              <Arrow />
              <Node label="Respond to Webhook" color="bg-green-500" />
            </div>
          </div>
        </div>

         {/* Image Gen Workflow Visualization */}
         <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl opacity-20 blur"></div>
          <div className="relative bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <ImageIcon className="text-pink-500" />
              AI Image Generator Workflow
            </h3>
            {/* Mock Node Graph */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-mono overflow-x-auto pb-4">
              <Node label="Webhook (POST)" color="bg-yellow-500" />
              <Arrow />
              <Node label="Payment Check" color="bg-red-500" />
              <Arrow />
              <Node label="Gemini/Imagen API" color="bg-pink-500" />
              <Arrow />
              <Node label="Upload to Cloud" color="bg-orange-500" />
              <Arrow />
              <Node label="Return URL" color="bg-green-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Node = ({ label, color }: { label: string; color: string }) => (
  <div className={`flex-shrink-0 px-4 py-2 rounded-lg text-white font-bold shadow-lg ${color} whitespace-nowrap`}>
    {label}
  </div>
);

const Arrow = () => (
  <div className="hidden md:block w-8 h-0.5 bg-slate-600 relative">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-slate-600 rotate-45"></div>
  </div>
);

export const Section6: React.FC = () => (
  <section className="py-24 md:py-32 relative z-10">
    <div className="container mx-auto px-6">
      <SectionTitle number="06" title="Creating Frontend" subtitle="Bringing it to life with Floot.com." />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="p-6 bg-slate-800/50 rounded-xl border-l-4 border-brand-secondary">
            <h4 className="flex items-center gap-2 font-bold mb-2">
              <Code size={18} />
              Step 1: Best Prompting
            </h4>
            <p className="text-slate-400 text-sm">
              Use natural language in Floot to describe your UI. "Dark mode chat interface with a sidebar for history and a floating input area."
            </p>
          </div>
          
           <div className="p-6 bg-slate-800/50 rounded-xl border-l-4 border-brand-accent">
            <h4 className="flex items-center gap-2 font-bold mb-2">
              <Zap size={18} />
              Step 2: Paste & Refine
            </h4>
            <p className="text-slate-400 text-sm">
              Paste the generated code or use the builder. Tweak colors to match your brand identity.
            </p>
          </div>

           <div className="p-6 bg-slate-800/50 rounded-xl border-l-4 border-green-500">
            <h4 className="flex items-center gap-2 font-bold mb-2">
              <Share2 size={18} />
              Step 3: Connect Backend
            </h4>
            <p className="text-slate-400 text-sm">
              Use `fetch()` to call your N8n Webhook URLs from the frontend components.
            </p>
          </div>
        </div>

        {/* Mock Code Editor */}
        <div className="mockup-code bg-[#1e1e1e] p-6 rounded-xl shadow-2xl border border-slate-700 font-mono text-sm overflow-hidden relative group">
           <div className="flex gap-2 mb-4">
             <div className="w-3 h-3 rounded-full bg-red-500"></div>
             <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
             <div className="w-3 h-3 rounded-full bg-green-500"></div>
           </div>
           <div className="text-blue-400">const <span className="text-yellow-300">sendMessage</span> = <span className="text-purple-400">async</span> (<span className="text-orange-300">msg</span>) =&gt; {'{'}</div>
           <div className="pl-4 text-white">
             <span className="text-purple-400">const</span> res = <span className="text-purple-400">await</span> fetch(<span className="text-green-300">'https://n8n.yoursite.com/webhook/chat'</span>, {'{'}
           </div>
           <div className="pl-8 text-white">method: <span className="text-green-300">'POST'</span>,</div>
           <div className="pl-8 text-white">body: JSON.stringify({'{'} msg {'}'})</div>
           <div className="pl-4 text-white">{'}'});</div>
           <div className="pl-4 text-white"><span className="text-purple-400">return</span> <span className="text-purple-400">await</span> res.json();</div>
           <div className="text-blue-400">{'}'};</div>
           
           <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center">
             <span className="bg-brand-primary text-white px-4 py-2 rounded-full font-bold">Connecting...</span>
           </div>
        </div>
      </div>
    </div>
  </section>
);

export const Section7: React.FC = () => (
  <section className="py-24 md:py-32 relative z-10">
    <div className="container mx-auto px-6">
      <SectionTitle number="07" title="Finalizing & Publishing" />
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         <div className="aspect-square bg-slate-900 rounded-2xl border border-slate-800 flex flex-col items-center justify-center p-4 text-center hover:border-brand-primary transition-colors cursor-default">
            <div className="w-12 h-12 bg-blue-500/20 text-blue-500 rounded-full flex items-center justify-center mb-4"><Zap/></div>
            <span className="font-bold">More Features</span>
            <span className="text-xs text-slate-500 mt-2">Export, History, Dark Mode</span>
         </div>
         <div className="aspect-square bg-slate-900 rounded-2xl border border-slate-800 flex flex-col items-center justify-center p-4 text-center hover:border-brand-primary transition-colors cursor-default">
            <div className="w-12 h-12 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4"><CreditCard/></div>
            <span className="font-bold">Payments</span>
            <span className="text-xs text-slate-500 mt-2">Stripe / LemonSqueezy</span>
         </div>
         <div className="aspect-square bg-slate-900 rounded-2xl border border-slate-800 flex flex-col items-center justify-center p-4 text-center hover:border-brand-primary transition-colors cursor-default">
            <div className="w-12 h-12 bg-orange-500/20 text-orange-500 rounded-full flex items-center justify-center mb-4"><Database/></div>
            <span className="font-bold">Database</span>
            <span className="text-xs text-slate-500 mt-2">Supabase / Firebase</span>
         </div>
         <div className="aspect-square bg-slate-900 rounded-2xl border border-slate-800 flex flex-col items-center justify-center p-4 text-center hover:border-brand-primary transition-colors cursor-default">
            <div className="w-12 h-12 bg-purple-500/20 text-purple-500 rounded-full flex items-center justify-center mb-4"><Rocket/></div>
            <span className="font-bold">Publish</span>
            <span className="text-xs text-slate-500 mt-2">Go Live!</span>
         </div>
      </div>
    </div>
  </section>
);

export const Section8: React.FC = () => (
  <section className="min-h-[80vh] flex flex-col items-center justify-center py-32 relative z-10 text-center">
    <div className="container mx-auto px-6">
      <div className="relative inline-block mb-10">
         <div className="absolute inset-0 bg-brand-primary blur-[80px] opacity-50"></div>
         <h2 className="relative text-6xl md:text-9xl font-display font-bold text-white tracking-tighter">
           READY
         </h2>
      </div>
      <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12">
        You have the idea, the stack, and the plan. The only thing left is to build it.
      </p>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
          Start Building with N8n
        </button>
        <button className="px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold rounded-full hover:bg-white/10 transition-colors">
          Watch Full Tutorial
        </button>
      </div>

      <div className="mt-24 text-slate-600 text-sm">
        Video Guide Structure Preview • Created for YouTube
      </div>
    </div>
  </section>
);