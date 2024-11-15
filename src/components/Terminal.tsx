import { TypeAnimation } from 'react-type-animation';

export const Terminal = () => {
  const codeSnippet = `// Student Developer Profile
const benjamin = {
  education: "Computer Science @ KEA",
  skills: {
    frontend: ["TypeScript", "React", "HTML/CSS"],
    backend: ["Java", "Spring Boot", "C#", ".NET"],
    database: ["MySQL", "PostgreSQL"],
    tools: ["Git", "Azure", "Docker", "GitHub Actions"]
  },
  interests: [
    "Backend Development",
    "DevOps",
    "System Architecture"
  ],
  status: "Open to opportunities 🚀"
};`;

return (
    <div className="w-full h-[450px] bg-[#1e1e1e] rounded-lg overflow-hidden">
      {/* Terminal Header */}
      <div className="bg-[#2d2d2d] px-4 py-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="mx-auto text-sm text-gray-400">terminal</div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-4 font-mono">
        <div className="flex items-center text-gray-200 mb-2">
          <span className="text-[#27c93f]">➜</span>
          <span className="text-[#61afef] ml-2">~/portfolio</span>
          <span className="ml-2">$</span>
        </div>
        <TypeAnimation
          sequence={[
            'cat profile.ts',
            500,
            codeSnippet,
          ]}
          wrapper="div"
          cursor={true}
          className="text-sm text-gray-200"
          speed={90}
          style={{ whiteSpace: 'pre-line' }}
        />
      </div>
    </div>
  );
};