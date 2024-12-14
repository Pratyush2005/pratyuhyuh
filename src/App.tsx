import { useState } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { ProjectCard } from './components/ProjectCard';
import { ContactForm } from './components/ContactForm';

const projects = [
  {
    title: 'Votrix',
    description: 'A secure and transparent voting mechanism using blockchain technology',
    tech: ['Blockchain', 'Smart Contracts', 'Web3.js'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Dawaai',
    description: 'Healthcare platform for convenient doctor appointments',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Lunchly',
    description: 'User-friendly app launcher for enhanced productivity, the icon changes its place every time you open it',
    tech: ['ReactNative', 'Android', 'OS'],
    image: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'ChatonScreen',
    description: 'Extension for displaying YouTube live chats in fullscreen mode',
    tech: ['JavaScript', 'Browser API', 'CSS'],
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=800&q=80'
  }
];

const skills = [
  'Python', 'C/C++', 'JavaScript', 'TypeScript', 'React', 'Next.js', 
  'Node.js', 'Flask', 'Tailwind CSS', 'Docker', 'GCP', 'MongoDB', 
  'PostgreSQL', 'MySQL'
];

function App() {
  const [activeChannel, setActiveChannel] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeChannel) {
      case 'home':
        return (
          <div className="space-y-6 animate-fadeIn">
            <div className="relative h-48 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&w=1600&q=80" 
                alt="Banner" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#202225] via-transparent to-transparent">
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[#5865f2] text-2xl">#</span>
                    <h1 className="text-3xl font-bold text-white">welcome</h1>
                  </div>
                  <p className="text-[#b9bbbe] mt-2">Building innovative solutions through code</p>
                </div>
              </div>
            </div>
            <div className="bg-[#2f3136] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#5865f2] text-xl">#</span>
                <h2 className="text-xl font-semibold text-white">about-me</h2>
              </div>
              <p className="text-[#b9bbbe] leading-relaxed">
              I am a dedicated 19-year-old computer science student in my second year of college in India, passionate about coding and technology. I am proficient in languages like Python, C/C++, and web development technologies such as HTML, CSS and Type/JavaScript, I also have a good knowledge of Docker, AWS, GitHub. I have developed proficiency in frameworks like React and Node.js, along with SQL and database management, enhancing my capability to build robust applications. Currently, I am working on several ambitious projects, including a Doctor Appointment Booking Website inspired by popular food delivery apps, a Blockchain-Based Voting System to enhance electoral integrity, a Launcher Application for streamlined user experience, an Alarm App for customizable alarms, a Firefox Extension to display YouTube livestream chats in full-screen mode, and a Discord-inspired portfolio website. Beyond technology, I enjoy fitness and maintain a structured workout routine. I also have a keen interest in chess and gaming, which keeps me engaged and motivated. My portfolio website will showcase my projects and skills with a modern design, reflecting my creativity and ambition in the tech industry.
<br />
<br />
TL;DR: I am a 19-year-old computer science student at SRM, KTR. My tech stack include Python, C/C++, HTML, CSS, JavaScript, React, Node.js, Docker, AWS, GitHub, SQL, MongoDB, and more. 
              </p>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#5865f2] text-2xl">#</span>
              <h2 className="text-2xl font-semibold text-white">about-me</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#2f3136] rounded-lg p-4 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#5865f2] text-lg">#</span>
                  <h3 className="text-lg font-medium text-white">skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-[#393c43] text-white rounded-full text-sm transform hover:scale-105 transition-transform duration-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-[#2f3136] rounded-lg p-4 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#5865f2] text-lg">#</span>
                  <h3 className="text-lg font-medium text-white">interests</h3>
                </div>
                <div className="space-y-3 text-[#b9bbbe]">
                  <p>• Data Structures & Algorithms</p>
                  <p>• Full-stack Development</p>
                  <p>• Blockchain Technology</p>
                  <p>• Fitness & Health</p>
                </div>
              </div>
            </div>
            <div className="bg-[#2f3136] rounded-lg p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[#5865f2] text-lg">#</span>
                  <h3 className="text-lg font-medium text-white">resume</h3>
                </div>
                <a 
                  href="../drive/" 
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-[#5865f2] text-white rounded-md hover:bg-[#4752c4] transition-colors duration-200"
                >
                  <FileDown size={18} />
                  <span>Download CV</span>
                </a>
              </div>
              <div className="bg-[#202225] rounded-lg p-4">
                <iframe 
                  src="/path-to-your-resume.pdf#view=FitH" 
                  className="w-full h-[400px] rounded-lg"
                  title="Resume Preview"
                />
              </div>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#5865f2] text-2xl">#</span>
              <h2 className="text-2xl font-semibold text-white">projects</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#5865f2] text-2xl">#</span>
              <h2 className="text-2xl font-semibold text-white">contact-me</h2>
            </div>
            <ContactForm />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#36393f] text-[#dcddde]">
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-[#202225] rounded-lg hover:bg-[#2f3136] transition-colors duration-200"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <Sidebar 
        activeChannel={activeChannel}
        setActiveChannel={setActiveChannel}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <div className="md:ml-64 p-6">
        <div className="max-w-4xl mx-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;