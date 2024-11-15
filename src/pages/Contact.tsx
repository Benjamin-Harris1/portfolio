import { motion } from "framer-motion";
import {
    titleVariants,
    containerVariants,
    contactItemVariants
} from "../animations/variants";

export const Contact = () => {
  return (
    <section className="h-full bg-gray-900 pt-32">
      <div className="container mx-auto px-6">
        <motion.h2 
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl font-bold text-white mb-8 text-center"
        >
          Get in Touch
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          <motion.div 
            variants={contactItemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="bg-gray-800/50 p-6 rounded-xl shadow-lg mb-8"
          >
            <p className="text-gray-300 text-lg">
              I'm always open to discussing new projects and opportunities. Feel free to reach out!
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Methods */}
            <motion.div 
              variants={contactItemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-800/50 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <motion.a 
                  whileHover={{ x: 5, color: "#60A5FA" }}
                  href="mailto:beha1503@gmail.com"
                  className="flex items-center text-gray-300 transition-colors duration-300"
                >
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  beha1503@gmail.com
                </motion.a>

                <motion.a 
                  whileHover={{ x: 5, color: "#60A5FA" }}
                  href="https://github.com/Benjamin-Harris1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 transition-colors duration-300"
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                  </svg>
                  GitHub Profile
                </motion.a>

                <motion.a 
                  whileHover={{ x: 5, color: "#60A5FA" }}
                  href="https://www.linkedin.com/in/benjamin-harris-63b2b5293/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 transition-colors duration-300"
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn Profile
                </motion.a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div 
              variants={contactItemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-800/50 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Location</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  Copenhagen, Denmark
                </div>
                <div className="flex items-center text-gray-300">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
                  </svg>
                  Available for remote work
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-800 to-transparent"></div>
    </section>
  );
};