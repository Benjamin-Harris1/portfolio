import { motion } from "framer-motion";
import {
    titleVariants,
    columnVariants,
    skillsVariants,
    skillItemVariants
} from "../animations/variants";

export const About = () => {
  return (
    <section className="h-full bg-gray-900 pt-32">
      <div className="container mx-auto px-6">
        <motion.h2 
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl font-bold text-white mb-8"
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div 
            variants={columnVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 text-gray-300"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-lg bg-gray-800/50 p-6 rounded-xl shadow-lg">
                Hi! I'm Benjamin Harris, a Computer Science student at KEA with a passion for backend development 
                and system architecture. I love solving complex problems and building robust, scalable solutions.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-800/50 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
              <div>
                <h4 className="text-blue-400 font-medium">Computer Science AP</h4>
                <p>KEA - Københavns Erhvervsakademi</p>
                <p className="text-sm">2023 - Present</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-800/50 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Approach</h3>
              <p>
                As a student developer, I'm focused on learning and implementing best practices 
                in my projects. I enjoy backend development and DevOps, particularly interested in 
                building efficient, secure, and scalable applications. Each project is an opportunity to learn something new 
                and improve my skills across the full development lifecycle.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            variants={columnVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 text-gray-300"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-800/50 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Technical Skills</h3>
              <motion.div 
                variants={skillsVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-3 gap-6"
              >
                {/* Frontend */}
                <div>
                  <h4 className="text-blue-400 font-medium mb-2">Frontend</h4>
                  <motion.ul className="space-y-1">
                    {["JavaScript", "TypeScript", "React", "HTML", "CSS"].map((skill, index) => (
                      <motion.li
                        key={index}
                        variants={skillItemVariants}
                        className="flex items-center space-x-2"
                      >
                        <span className="text-blue-400">▹</span>
                        <span>{skill}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                {/* Backend */}
                <div>
                  <h4 className="text-blue-400 font-medium mb-2">Backend & Database</h4>
                  <motion.ul className="space-y-1">
                    {["Node.js", "Express", "Java / Spring Boot", "Maven / JPA", "MySQL", "Prisma / Hibernate"].map((skill, index) => (
                      <motion.li
                        key={index}
                        variants={skillItemVariants}
                        className="flex items-center space-x-2"
                      >
                        <span className="text-blue-400">▹</span>
                        <span>{skill}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                {/* DevOps & Tools */}
                <div>
                  <h4 className="text-blue-400 font-medium mb-2">DevOps & Tools</h4>
                  <motion.ul className="space-y-1">
                    {["Docker", "Azure CI/CD", "GitHub Actions", "Git", "Swagger / Postman", "Bash / PowerShell"].map((skill, index) => (
                      <motion.li
                        key={index}
                        variants={skillItemVariants}
                        className="flex items-center space-x-2"
                      >
                        <span className="text-blue-400">▹</span>
                        <span>{skill}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};