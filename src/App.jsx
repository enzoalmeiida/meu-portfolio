import React from 'react';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaAws, FaMicrosoft } from 'react-icons/fa';

// Navigation Component
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full border-b border-[#00cccc] px-8 py-4 flex justify-between items-center z-40 bg-[#000f12]/80 backdrop-blur-sm">
      <div className="text-xl font-bold">
        <span className="text-glow">&gt; ENZO.DEV</span>
      </div>
      <div className="flex gap-8 text-[#00ffff]">
        <a href="#home" className="hover:text-[#ff8c00] transition-colors text-sm">[ HOME ]</a>
        <a href="#about" className="hover:text-[#ff8c00] transition-colors text-sm">[ ABOUT ]</a>
        <a href="#projects" className="hover:text-[#ff8c00] transition-colors text-sm">[ PROJECTS ]</a>
        <a href="#contact" className="hover:text-[#ff8c00] transition-colors text-sm">[ CONTACT ]</a>
      </div>
    </nav>
  );
}

// Terminal Line Component
function TerminalLine({ children, className = "" }) {
  return (
    <div className={`text-[#00ffff] text-shadow-cyan ${className}`}>
      {children}
    </div>
  );
}

// Main App Component
function App() {
  return (
    <>
      {/* CRT Screen Effects */}
      <div className="crt-screen"></div>
      <div className="scanlines"></div>
      <div className="noise"></div>
      <div className="vignette"></div>

      <div className="crt-content min-h-screen w-full">
        <Navbar />

        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 px-8 min-h-screen flex flex-col items-center justify-center relative z-10">
          <div className="max-w-4xl w-full">
            {/* Terminal header */}
            <div className="terminal-box mb-12 text-center">
              <TerminalLine className="text-sm mb-2">[ SYSTEM INITIALIZED ]</TerminalLine>
              <h1 className="text-4xl font-bold mb-4 text-glow">
                &gt;&gt;&gt; Hello World &lt;&lt;&lt;
              </h1>
              <TerminalLine className="text-lg text-glow-orange mb-4">
                I'm Enzo Almeida
              </TerminalLine>
              
              {/* Typewriter effect */}
              <div className="text-lg text-[#00ffff] h-8 mb-4">
                <span className="text-glow-orange">&gt; </span>
                <Typewriter
                  options={{
                    strings: [
                      'Software Engineering Student | DevOps & SRE Enthusiast | Cloud Computing Explorer',
                      'Estagiário de TI @ Blendon | FIAP Student',
                      'AWS Cloud Practitioner | AZ-900 Certification Focused'
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 30,
                  }}
                />
              </div>

              <TerminalLine className="text-sm">[ 19 years old | São Paulo, SP ]</TerminalLine>
            </div>

            {/* Bio section */}
            <div className="terminal-box mb-12">
              <TerminalLine className="text-sm mb-4">
                <span className="text-glow-green">$</span> whoami
              </TerminalLine>
              <TerminalLine className="text-sm leading-relaxed mb-4">
                Sou estudante de Engenharia de Software na FIAP com foco em DevOps/SRE.
              </TerminalLine>
              <TerminalLine className="text-sm leading-relaxed mb-4">
                Atualmente estagiário de TI na Blendon, trabalhando com automação de infraestrutura
                e Cloud Computing. Meu objetivo é me torna especialista em DevOps/SRE para o setor bancário.
              </TerminalLine>
              <TerminalLine className="text-sm leading-relaxed">
                Focado nas certificações: AWS Cloud Practitioner e Microsoft AZ-900.
              </TerminalLine>
            </div>

            {/* Social Links */}
            <div className="terminal-box mb-12 text-center">
              <TerminalLine className="text-sm mb-4">
                <span className="text-glow-green">$</span> connect
              </TerminalLine>
              <div className="flex justify-center gap-8 text-2xl">
                <a 
                  href="https://github.com/enzoalmeiida" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-[#ff8c00] transition-all hover:text-3xl"
                  title="GitHub"
                >
                  <FaGithub />
                </a>
                <a 
                  href="#" 
                  className="hover:text-[#ff8c00] transition-all hover:text-3xl"
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Stack Section */}
            <div className="terminal-box">
              <TerminalLine className="text-sm mb-6">
                <span className="text-glow-green">$</span> stack --cloud
              </TerminalLine>
              <div className="grid grid-cols-2 gap-8 text-center">
                <div className="border border-[#00cccc] p-4 bg-[#000f12]/50">
                  <div className="text-3xl mb-3 text-glow-orange">
                    <FaAws />
                  </div>
                  <TerminalLine className="text-sm font-bold">
                    AWS
                  </TerminalLine>
                  <TerminalLine className="text-xs mt-2">
                    EC2 | S3 | Lambda | RDS
                  </TerminalLine>
                </div>
                <div className="border border-[#00cccc] p-4 bg-[#000f12]/50">
                  <div className="text-3xl mb-3 text-glow-orange">
                    <FaMicrosoft />
                  </div>
                  <TerminalLine className="text-sm font-bold">
                    AZURE
                  </TerminalLine>
                  <TerminalLine className="text-xs mt-2">
                    VMs | App Service | DevOps
                  </TerminalLine>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-8 bg-[#000f12] relative z-10 border-t border-[#00cccc]">
          <div className="max-w-6xl mx-auto">
            <div className="terminal-box mb-12">
              <TerminalLine className="text-sm mb-6">
                <span className="text-glow-green">$</span> ls -la /projects
              </TerminalLine>

              <div className="space-y-8">
                {[
                  {
                    title: 'Blendon Automation',
                    description: 'Scripts em Python para orquestração de recursos em nuvem e automação de infraestrutura na plataforma Blendon.',
                    tech: 'Python | AWS | Terraform',
                    github: 'https://github.com/enzoalmeiida',
                  },
                  {
                    title: 'AWS Infrastructure as Code',
                    description: 'Templates Terraform para provisionamento automatizado de ambientes AWS com best practices de segurança e escalabilidade.',
                    tech: 'Terraform | AWS | CI/CD',
                    github: 'https://github.com/enzoalmeiida',
                  },
                  {
                    title: 'DevOps Pipeline CI/CD',
                    description: 'Implementação completa de pipeline CI/CD utilizando GitHub Actions e containerização com Docker para deploy automatizado.',
                    tech: 'GitHub Actions | Docker | Linux',
                    github: 'https://github.com/enzoalmeiida',
                  }
                ].map((project, idx) => (
                  <div key={idx} className="border border-[#00cccc] p-6 bg-[#000f12]/70 hover:bg-[#001d22] transition-all">
                    <TerminalLine className="text-sm mb-2">
                      <span className="text-glow-orange">[{idx + 1}]</span>
                    </TerminalLine>
                    <TerminalLine className="text-lg font-bold mb-3 text-glow">
                      &gt;&gt; {project.title}
                    </TerminalLine>
                    <TerminalLine className="text-sm mb-4 leading-relaxed">
                      {project.description}
                    </TerminalLine>
                    <TerminalLine className="text-xs mb-4 text-glow-green">
                      {project.tech}
                    </TerminalLine>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="terminal-btn inline-block text-sm"
                    >
                      [ VIEW CODE ]
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-8 relative z-10 border-t border-[#00cccc]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="terminal-box">
              <TerminalLine className="text-sm mb-6">
                <span className="text-glow-green">$</span> send_message
              </TerminalLine>
              <TerminalLine className="text-lg mb-8 text-glow">
                &gt;&gt;&gt; Get in Touch &lt;&lt;&lt;
              </TerminalLine>
              <TerminalLine className="text-sm mb-8">
                Sempre aberto a novas oportunidades, projetos interessantes e conversas sobre tecnologia.
              </TerminalLine>
              <div className="flex justify-center gap-6">
                <a 
                  href="https://github.com/enzoalmeiida"
                  target="_blank"
                  rel="noreferrer"
                  className="terminal-btn"
                >
                  [ GITHUB ]
                </a>
                <a 
                  href="#"
                  className="terminal-btn"
                >
                  [ EMAIL ]
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-8 text-center border-t border-[#00cccc] relative z-10 bg-[#000f12]/50">
          <TerminalLine className="text-xs">
            &gt;&gt;&gt; © 2026 Enzo Almeida | Built with React, Tailwind & CRT Terminal Vibes &lt;&lt;&lt;
          </TerminalLine>
        </footer>
      </div>
    </>
  );
}

export default App;