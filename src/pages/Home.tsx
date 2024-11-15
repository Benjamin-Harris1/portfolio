import { Link } from 'react-router-dom';
import { Terminal } from '../components/Terminal';

export const Home = () => {
  return (
    <section className="h-full flex bg-gray-900 text-white">
      <div className="container mx-auto px-6 mt-40"> {/* Changed from padding to margin-top */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Benjamin Harris <span className="text-blue-400">Computer Science Student</span>
            </h1>
            <p className="text-xl text-gray-300">
              Currently studying Computer Science at KEA. While I work across the full stack, 
              I'm particularly passionate about backend development and exploring DevOps practices.
            </p>
            <div className="space-y-4 text-gray-300">
              <p className="flex items-center">
                <span className="mr-2">▹</span>
                Frontend: TypeScript, JavaScript, React
              </p>
              <p className="flex items-center">
                <span className="mr-2">▹</span>
                Backend: Java, C#, .NET (my favorite part!)
              </p>
              <p className="flex items-center">
                <span className="mr-2">▹</span>
                Learning: DevOps, Cloud Infrastructure
              </p>
            </div>
            <div className="flex space-x-4">
              <Link to="/projects" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-colors duration-300">
                View Projects
              </Link>
              <a 
                href="https://github.com/Benjamin-Harris1" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white hover:bg-white hover:text-gray-900 rounded-lg font-medium transition-colors duration-300"
              >
                GitHub Profile
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
}