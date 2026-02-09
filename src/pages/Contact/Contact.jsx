import React from "react";
import { Send, MapPin, Mail, Linkedin } from "lucide-react";

export default function Contact() {

  return (
    <main
      className="pt-20 lg:pt-[0rem] bg-[#04081A]
 text-white min-h-screen"
    >
      <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <p className="text-gray-300 text-lg">
                  Have a question or interested in working together? I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a 
                      href="mailto:hamish.elliot5@gmail.com"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      hamish.elliot5@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-teal-500/10 p-3 rounded-lg">
                    <Linkedin className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/hamish-elliot-82443a2b3/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-pink-500/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-400">Auckland, New Zealand</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email CTA */}
            <div className="backdrop-blur-lg bg-white/5 p-12 rounded-2xl shadow-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-center space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                    <Mail className="w-10 h-10 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
                  <p className="text-gray-400 text-lg max-w-md mx-auto">
                    Click the button below to open your email client and send me a message. I typically respond within 24 hours.
                  </p>
                </div>

                <a
                  href="mailto:hamish.elliot5@gmail.com?subject=Hello%20Hamish!&body=Hi%20Hamish,%0D%0A%0D%0AI'd%20like%20to%20connect%20with%20you."
                  className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 px-8 rounded-xl font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                >
                  <span className="text-lg">Email Me</span>
                  <Send className="w-5 h-5" />
                </a>

                <div className="pt-6 border-t border-gray-700/50">
                  <p className="text-gray-500 text-sm">
                    Or reach out directly at:
                  </p>
                  <a 
                    href="mailto:hamish.elliot5@gmail.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium mt-2 inline-block"
                  >
                    hamish.elliot5@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/50 border-t border-gray-800 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Hamish Elliot. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Full Stack / E-commerce Developer | Auckland, New Zealand
              </p>
            </div>
            
            <div className="flex gap-4">
              <a
                href="https://github.com/h3m1sh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/hamish-elliot-82443a2b3/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a
                href="mailto:hamish.elliot5@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <i className="fas fa-envelope text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
