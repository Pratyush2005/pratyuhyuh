interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
}

export function ProjectCard({ title, description, tech, image }: ProjectCardProps) {
  return (
    <div className="bg-[#2f3136] rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300" />
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 bg-[#5865f2] text-white text-xs rounded-full font-medium">
            On Production
          </span>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-[#5865f2] text-lg">#</span>
          <h3 className="text-xl font-medium text-white">{title}</h3>
        </div>
        <p className="text-[#b9bbbe] text-sm">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-[#393c43] text-[#b9bbbe] rounded text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>
        <button className="w-full mt-2 px-4 py-2 bg-[#393c43] text-white rounded hover:bg-[#454950] transition-colors duration-200 text-sm font-medium">
          View Project
        </button>
      </div>
    </div>
  );
}