import React from 'react';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaAws, FaMicrosoft } from 'react-icons/fa';

// 1. Componente de Navegação (Navbar)
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 px-8 py-4 flex justify-between items-center z-50">
      <div className="text-2xl font-bold">
        <span className="text-orange-500 text-glow">Enzo</span>
      </div>
      <div className="flex gap-8 text-gray-300">
        <a href="#home" className="hover:text-orange-500 transition-colors">Home</a>
        <a href="#sobre" className="hover:text-orange-500 transition-colors">Sobre</a>
        <a href="#projetos" className="hover:text-orange-500 transition-colors">Projetos</a>
        <a href="#contato" className="hover:text-orange-500 transition-colors">Contato</a>
      </div>
    </nav>
  );
}

// 2. Componente Principal (App)
function App() {
  return (
    <>
      {/* Efeitos CRT (Monitor Antigo) */}
      <div className="noise"></div>
      <div className="scanlines"></div>
      
      <div className="min-h-screen bg-[#050505] text-white">
        <Navbar />
        
        {/* Seção Home/Hero */}
        <section id="home" className="flex flex-col items-center justify-center p-8 pt-32 min-h-screen">
          <div className="text-center max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">
              Olá! Eu sou <span className="text-blue-500 shadow-blue-500/50">Enzo</span>
            </h1>
            
            <div className="text-2xl text-gray-300 mb-6 h-10">
              <Typewriter
                options={{
                  strings: [
                    'Estudante de Engenharia de Software',
                    'Foco em DevOps & SRE',
                    'Entusiasta de Cloud Computing'
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </div>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Tenho 19 anos, sou de São Paulo, SP, e atuo como Estagiário de TI na Blendon. 
              Estudo na FIAP e busco me tornar especialista em DevOps/SRE para o setor bancário. 
              Focado nas certificações AWS Cloud Practitioner e AZ-900.
            </p>

            <div className="flex justify-center gap-6 text-3xl mb-12">
              <a href="https://github.com/enzoalmeiida" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors"><FaGithub /></a>
              <a href="#" className="hover:text-blue-500 transition-colors"><FaLinkedin /></a>
            </div>
          </div>

          {/* Tecnologias */}
          <div className="w-full max-w-4xl mt-12 border-t border-gray-800 pt-12">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-500 uppercase tracking-widest">Stack & Cloud</h2>
            <div className="flex justify-center gap-12 text-5xl text-gray-600">
              <div className="flex flex-col items-center hover:text-orange-500 transition-all duration-300">
                <FaAws />
                <span className="text-sm mt-2">AWS</span>
              </div>
              <div className="flex flex-col items-center hover:text-blue-400 transition-all duration-300">
                <FaMicrosoft />
                <span className="text-sm mt-2">Azure</span>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Projetos */}
        <section id="projetos" className="w-full py-20 px-8 bg-[#080808]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 underline decoration-orange-500 underline-offset-8">Meus Projetos</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Blendon Automation',
                  description: 'Scripts em Python para orquestração de recursos em nuvem e automação de infraestrutura.',
                  techs: [FaAws, FaMicrosoft],
                  github: '#',
                  demo: '#'
                },
                {
                  title: 'AWS Infrastructure as Code',
                  description: 'Templates Terraform para provisionamento automatizado de ambientes AWS.',
                  techs: [FaAws],
                  github: '#',
                  demo: '#'
                },
                {
                  title: 'DevOps Pipeline',
                  description: 'Implementação de CI/CD utilizando GitHub Actions e containerização com Docker.',
                  techs: [FaGithub],
                  github: '#',
                  demo: '#'
                }
              ].map((project, idx) => (
                <div key={idx} className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all group">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex gap-4 mb-6 text-gray-500 text-xl">
                    {project.techs.map((Icon, i) => <Icon key={i} />)}
                  </div>
                  
                  <div className="flex gap-3">
                    <a href={project.github} className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-xs transition-colors border border-gray-700">
                      <FaGithub /> Código
                    </a>
                    <a href={project.demo} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-xs transition-colors font-bold">
                      Live Demo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rodapé Simples */}
        <footer className="py-10 text-center text-gray-600 text-sm border-t border-gray-900">
          <p>© 2026 Enzo Almeida | Built with React & Tailwind</p>
        </footer>
      </div>
    </>
  );
}

export default App;