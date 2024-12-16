import { useState } from 'react';

interface Channel {
  id: string;
  name: string;
  isUnread?: boolean;
}
interface SidebarProps {
  activeChannel: string;
  setActiveChannel: (id: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const channels: Channel[] = [
  { id: 'home', name: 'welcome', isUnread: true },
  { id: 'about', name: 'about-me' },
  { id: 'projects', name: 'projects', isUnread: true },
  { id: 'contact', name: 'contact-me' },
];

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/pratyush2005' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/pratyuhyuh/' },
  { name: 'Twitter', url: 'https://x.com/IamPratyushhhhh' },
];

export function Sidebar({ activeChannel, setActiveChannel, isMobileMenuOpen, setIsMobileMenuOpen }: SidebarProps) {
  // Initialize the profile section to be expanded by default
  const [isProfileExpanded, setIsProfileExpanded] = useState(true); // Change to true

  return (
    <div className={`
      fixed top-0 left-0 h-full w-64 bg-[#2f3136] transition-transform duration-300 ease-in-out
      ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      md:translate-x-0 border-r border-[#202225]
    `}>
      <div className="p-4 border-b border-[#202225]">
        <div className=" p-2 rounded-md">
          <h1 className="text-l font-bold text-white">Pratyush's Portfolio</h1>
        </div>
      </div>
      
      <div className="px-2 pt-4 h-[calc(100%-180px)] overflow-y-auto">
        <div className="flex items-center px-2 mb-2">
          <div className="w-1 h-4 bg-[#5865f2] rounded-r mr-2"></div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#96989d]">
            Navigation
          </span>
        </div>
        <nav className="space-y-0.5">
          {channels.map((channel) => (
            <button
              key={channel.id}
              onClick={() => {
                setActiveChannel(channel.id);
                setIsMobileMenuOpen(false);
              }}
              className={`
                w-full flex items-center px-2 py-1.5 rounded transition-all duration-200 relative
                ${activeChannel === channel.id 
                  ? 'bg-[#393c43] text-white' 
                  : 'text-[#96989d] hover:bg-[#393c43] hover:text-gray-100'}
                group
              `}
            >
              <span className="text-lg mr-2">#</span>
              <span className="font-medium text-sm">{channel.name}</span>
              {channel.isUnread && activeChannel !== channel.id && (
                <span className="absolute left-[-8px] top-1/2 transform -translate-y-1/2 w-1 h-2 bg-white rounded-full"></span>
              )}
            </button>
          ))}
        </nav>
      </div>
      
      <div 
        className={`
          absolute bottom-0 left-0 right-0 bg-[#292b2f] transition-all duration-300
          ${isProfileExpanded ? 'h-[200px]' : 'h-[68px]'}
        `}
      >
        <button 
          onClick={() => setIsProfileExpanded(!isProfileExpanded)}
          className="w-full p-4 hover:bg-[#202225] transition-colors duration-200"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#5865f2] flex items-center justify-center text-white font-medium">
              PP
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-white">Pratyush Pradhan</div>
              <div className="text-xs text-[#b9bbbe]">click me</div>
            </div>
          </div>
        </button>
        
        <div className={`
          px-4 pb-4 space-y-2 transition-all duration-300
          ${isProfileExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#b9bbbe] hover:text-white p-2 rounded hover:bg-[#393c43] transition-all duration-200"
            >
              <span className="text-[#5865f2]">#</span>
              <span className="text-sm">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}