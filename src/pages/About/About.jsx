export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Full Stack Developer, E-commerce Specialist, Production Owner
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            {/* Animated Code/Tech Illustration */}
            <div className="relative mb-6 sm:mb-0 group">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-teal-900/20 border border-blue-500/30 shadow-2xl shadow-blue-500/10">
                {/* Animated background grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse" />
                
                {/* Floating code snippets */}
                <div className="relative p-8 space-y-4">
                  {/* Code line 1 */}
                  <div className="flex items-center gap-2 animate-slideInLeft" style={{ animationDelay: '0.1s' }}>
                    <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" />
                    <div className="h-2 bg-gradient-to-r from-blue-400 to-transparent rounded w-3/4" />
                  </div>
                  
                  {/* Code line 2 */}
                  <div className="flex items-center gap-2 animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
                    <div className="w-3 h-3 rounded-full bg-teal-400 animate-pulse" />
                    <div className="h-2 bg-gradient-to-r from-teal-400 to-transparent rounded w-1/2" />
                  </div>
                  
                  {/* Code line 3 */}
                  <div className="flex items-center gap-2 animate-slideInLeft" style={{ animationDelay: '0.3s' }}>
                    <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse" />
                    <div className="h-2 bg-gradient-to-r from-purple-400 to-transparent rounded w-2/3" />
                  </div>

                  {/* Tech stack badges */}
                  <div className="pt-6 space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'PHP', 'Shopify'].map((tech, i) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 animate-fadeIn"
                          style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Symfony', 'MySQL', 'APIs', 'Git'].map((tech, i) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 animate-fadeIn"
                          style={{ animationDelay: `${0.8 + i * 0.1}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Floating geometric shapes */}
                  <div className="absolute top-4 right-4 w-16 h-16 border-2 border-blue-400/30 rounded-lg rotate-12 animate-float" />
                  <div className="absolute bottom-8 left-8 w-12 h-12 border-2 border-teal-400/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
                  <div className="absolute top-1/2 right-8 w-8 h-8 bg-purple-400/10 rounded-lg animate-float" style={{ animationDelay: '1.5s' }} />
                  
                  {/* Terminal-like header */}
                  <div className="absolute top-0 left-0 right-0 bg-gray-900/50 backdrop-blur-sm px-4 py-2 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="ml-4 text-xs text-gray-400 font-mono">developer.js</span>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-teal-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-teal-500/10 transition-all duration-500" />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Hamish Elliot, a Full Stack Developer with hands-on experience owning and maintaining production e-commerce platforms used in live sales environments.{" "}
                <span className="font-bold text-white">
                  I'm the sole developer for multiple Shopify stores
                </span>
                , responsible for custom architecture, performance optimisation, B2B pricing logic, and deployment.
              </p>
              <p className="text-white">
                I have a strong foundation in React, PHP/Symfony, and modern JavaScript, and I'm comfortable shipping features independently, troubleshooting critical issues, and supporting business-critical systems. I focus on delivering end-to-end solutions that power real businesses.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    "I'm driven by production ownership and independent delivery. I take pride in building systems from scratch that solve complex business problems, improving performance, and ensuring site stability during high-traffic sales events."
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Hamish Elliot
                    </cite>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 font-semibold">Full Stack / E-commerce Developer</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>Auckland, New Zealand</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
