import React from 'react';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaAws, FaMicrosoft } from 'react-icons/fa';

// 1. O Copilot criou o Navbar aqui
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 border-b border-gray-700 px-8 py-4 flex justify-between items-center z-50">
      <div className="text-2xl font-bold">
        <span className="text-orange-500">Enzo</span>
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

// 2. Nossa tela principal principal
function App() {
  return (
    // O Fragment (<>) agrupa o Navbar e o resto do site sem quebrar o layout
    <>
      {/* 3. Chamamos o Navbar para aparecer na tela! */}
      <Navbar />
      
      {/* Adicionei um pt-24 (padding-top) aqui para o texto não ficar escondido atrás do menu */}
      <div className="min-h-screen flex flex-col items-center justify-center p-8 pt-24">
        
        {/* Seção Principal */}
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">
            Olá! Eu sou <span className="text-blue-500">Enzo</span>
          </h1>
          
          {/* Efeito de Digitação */}
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

          {/* Resumo */}
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Tenho 19 anos, sou de São Paulo, SP, e atualmente atuo como Estagiário de TI na Blendon. 
            Estudo Engenharia de Software na FIAP (com previsão de formação para o final de 2027) e tenho um forte interesse em infraestrutura, automação e arquitetura em nuvem, com o grande objetivo de atuar no setor bancário. 
            Estou em constante evolução e atualmente focando nas certificações AWS Cloud Practitioner e AZ-900.
          </p>

          {/* Redes Sociais */}
          <div className="flex justify-center gap-6 text-3xl mb-12">
            <a href="#" className="hover:text-blue-500 transition-colors"><FaGithub /></a>
            <a href="#" className="hover:text-blue-500 transition-colors"><FaLinkedin /></a>
          </div>
        </div>

        {/* Seção de Tecnologias/Certificações */}
        <div className="w-full max-w-4xl mt-12 border-t border-gray-700 pt-12">
          <h2 className="text-3xl font-bold text-center mb-8">Tecnologias & Foco</h2>
          <div className="flex justify-center gap-12 text-5xl text-gray-400">
            <div className="flex flex-col items-center hover:text-orange-500 transition-colors">
              <FaAws />
              <span className="text-sm mt-2">AWS</span>
            </div>
            <div className="flex flex-col items-center hover:text-blue-400 transition-colors">
              <FaMicrosoft />
              <span className="text-sm mt-2">Azure</span>
            </div>
          </div>
        </div>

      </div>
      {/* Seção de Projetos */}
      <section id="projetos" className="w-full bg-[#0f172a] py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Meus Projetos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Blendon Automation',
                description: 'Developed Python scripts for cloud resource orchestration and infrastructure automation.',
                techs: [FaAws, FaMicrosoft],
                github: '#',
                demo: '#'
              },
              {
                title: 'AWS Infrastructure as Code',
                description: 'Terraform templates for automated AWS environment provisioning and management.',
                techs: [FaAws],
                github: '#',
                demo: '#'
              },
              {
                title: 'DevOps Pipeline',
                description: 'CI/CD pipeline implementation using GitHub Actions and Docker containerization.',
                techs: [FaGithub],
                github: '#',
                demo: '#'
              }
            ].map((project, idx) => (
              <div key={idx} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-orange-500 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                
                <div className="flex gap-3 mb-4 text-gray-400 text-lg">
                  {project.techs.map((Icon, i) => <Icon key={i} />)}
                </div>
                
                <div className="flex gap-3">
                  <a href={project.github} className="flex items-center gap-2 bg-gray-700 hover:bg-orange-500 px-4 py-2 rounded text-sm transition-colors">
                    <FaGithub /> Ver Código
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-sm transition-colors">
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;