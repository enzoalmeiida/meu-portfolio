import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaAws, FaMicrosoft, FaCode, FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaPython, FaJava, FaDatabase, FaReact, FaHtml5, FaCss3Alt, FaJs, FaDocker, FaLinux, FaGit, FaWindows, FaFirefox, FaTerminal, FaWhatsapp, FaServer, FaWordpress, FaLayerGroup, FaUsers } from 'react-icons/fa';
import { SiDocker, SiKubernetes, SiGitlab, SiTerraform, SiAnsible, SiPrometheus, SiGrafana, SiNewrelic, SiTailwindcss, SiElementor, SiZoho } from 'react-icons/si';
import { VscTerminalBash } from "react-icons/vsc";
import { SiGnubash } from "react-icons/si";
/* ===== PAGE COMPONENTS ===== */

function HomePage() {
  return (
    <section className="pb-20 px-8 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full">
        <div className="terminal-box mb-12 text-center">
          <div className="text-sm mb-2 text-glow-green">[ SYSTEM INITIALIZED ]</div>
          <h1 className="text-5xl font-bold mb-4 text-glow">
            &gt;&gt;&gt; Hello World &lt;&lt;&lt;
          </h1>
          <div className="text-lg text-glow-orange mb-4">
            I'm Enzo Almeida
          </div>

          <div className="text-lg text-cyan-400 h-8 mb-4">
            <span className="text-glow-orange">&gt; </span>
            <Typewriter
              options={{
                strings: [
                  'Software Engineering Student',
                  'Foco em DevOps & SRE',
                  'Entusiasta de Cloud Computing'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
              }}
            />
          </div>

          <div className="text-sm">[ 19 years old | São Paulo, SP ]</div>
        </div>

        <div className="terminal-box mb-12">
          <div className="text-sm mb-4">
            <span className="text-glow-green">$</span> whoami
          </div>
          <div className="text-sm leading-relaxed mb-4">
            Sou estudante de Engenharia de Software na FIAP com foco em DevOps/SRE.
          </div>
          <div className="text-sm leading-relaxed mb-4">
            Atualmente estagiário de TI na Blendon, trabalhando com automação de infraestrutura
            e Cloud Computing. Meu objetivo é me tornar especialista em DevOps/SRE para o setor bancário.
          </div>
          <div className="text-sm leading-relaxed">
            Focado nas certificações: AWS Cloud Practitioner e Microsoft AZ-900.
          </div>
        </div>

        <div className="terminal-box mb-12 text-center">
          <div className="text-sm mb-4">
            <span className="text-glow-green">$</span> connect
          </div>
          <div className="flex justify-center gap-8 text-2xl">
            <a 
              href="https://github.com/enzoalmeiida" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-glow-orange transition-all"
            >
              <FaGithub />
            </a>
            <a 
              href="#" 
              className="hover:text-glow-orange transition-all"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="terminal-box">
          <div className="text-sm mb-6">
            <span className="text-glow-green">$</span> cat destaques.txt
          </div>

          <h2 className="text-2xl font-bold mb-8 text-glow">Destaques & Metas</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Certificações (AWS Certified Cloud Practitioner) */}
            <div className="border border-cyan-600 p-6 bg-blue-900/20 hover:bg-blue-900/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <FaAws size={32} className="text-glow-orange" />
                <h3 className="text-glow-orange font-mono">[ AWS Certified Cloud Practitioner ]</h3>
              </div>
              <div className="mb-3">
                <span className="text-xs font-mono text-emerald-400 animate-pulse">● Status: Preparação Reta Final</span>
              </div>
              <p className="text-sm font-mono text-gray-300">
                Estudando arquitetura, segurança e serviços core da nuvem AWS.
              </p>
            </div>

            {/* Card 2: Projeto Relevante (Infra as Code - Blendon) */}
            <div className="border border-cyan-600 p-6 bg-blue-900/20 hover:bg-blue-900/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <SiTerraform size={32} className="text-glow-orange" />
                <h3 className="text-glow-orange font-mono">[ Infra as Code - Blendon ]</h3>
              </div>
              <div className="mb-3">
                <span className="text-xs font-mono text-emerald-400">● Status: Em Produção</span>
              </div>
              <p className="text-sm font-mono text-gray-300">
                Automação de infraestrutura e orquestração de recursos utilizando Python e Terraform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="pb-20 px-8 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-12 text-center text-glow">
          &gt;&gt;&gt; Sobre Mim &lt;&lt;&lt;
        </h1>

        <div className="terminal-box mb-8">
          <div className="text-sm mb-4">
            <span className="text-glow-green">$</span> cat bio.txt
          </div>
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              Meu nome é Enzo Almeida, tenho 19 anos e sou de São Paulo, SP. Sou estudante de 
              Engenharia de Software na FIAP, uma das principais instituições de educação superior private aqui do Brasil.
            </p>
            <p>
              Atualmente trabalho como Estagiário de TI na Blendon, onde tenho a oportunidade de trabalhar 
              com automação de infraestrutura, Cloud Computing e DevOps. É um ambiente desafiador que me 
              proporcionou grande crescimento profissional.
            </p>
            <p>
              Minha paixão é DevOps/SRE e Cloud Computing, especialmente na nuvem AWS e Microsoft Azure. 
              Estou focado em obter as certificações AWS Cloud Practitioner e Microsoft Azure (AZ-900).
            </p>
            <p>
              Sou alguém que gosta de aprender constantemente, trabalhar em equipe e contribuir para 
              projetos que façam diferença no mundo da tecnologia.
            </p>
          </div>
        </div>

        <div className="terminal-box">
          <div className="text-sm mb-8">
            <span className="text-glow-green">$</span> skills --all
          </div>

          {/* Back-end & Scripting Section */}
          <div className="mb-8">
            <div className="text-sm text-glow-orange font-mono mb-3">[ Back-end & Scripting ]</div>
            <div className="border border-gray-800 p-6 bg-gray-950/40 shadow-inner">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center">
                  <FaPython size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">Python<br />(Automação)</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <VscTerminalBash size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">Bash/Shell</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <FaJava size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">Java</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <FaDatabase size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">MySQL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Front-end Section */}
          <div className="mb-8">
            <div className="text-sm text-glow-orange font-mono mb-3">[ Front-end ]</div>
            <div className="border border-gray-800 p-6 bg-gray-950/40 shadow-inner">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center">
                  <FaReact size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">React.js</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <SiTailwindcss size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">Tailwind CSS</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <FaJs size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">JavaScript</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <FaHtml5 size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">HTML5</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <FaWordpress size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">WordPress</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <SiElementor size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">Elementor</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <FaLayerGroup size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">Oxygen Builder</span>
                </div>
              </div>
            </div>
          </div>

          {/* DevOps & Cloud Section */}
          <div className="mb-8">
            <div className="text-sm text-glow-orange font-mono mb-3">[ DevOps & Cloud ]</div>
            <div className="border border-gray-800 p-6 bg-gray-950/40 shadow-inner">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center">
                  <FaAws size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">AWS</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <FaMicrosoft size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">Azure</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <SiDocker size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">Docker</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <SiKubernetes size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">Kubernetes</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <SiTerraform size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">Terraform</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <SiAnsible size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">Ansible</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ferramentas & Infra Corporativa Section */}
          <div>
            <div className="text-sm text-glow-orange font-mono mb-3">[ Ferramentas & Infra Corporativa ]</div>
            <div className="border border-gray-800 p-6 bg-gray-950/40 shadow-inner">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center">
                  <FaWindows size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">Windows Server</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <FaServer size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">Redes</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <FaGit size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">Git</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <FaGithub size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">GitHub</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <SiPrometheus size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">Prometheus</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <SiGrafana size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">Grafana</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <SiZoho size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">Zoho</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <FaUsers size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">MS Teams</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsPage() {
  const projects = [
    {
      title: 'Portfolio CRT Terminal',
      description: 'Website pessoal desenvolvido com React.js e Tailwind CSS, simulando a interface de um monitor CRT antigo. Focado em performance, design responsivo e estética retrô-futurista.',
      tech: 'React | Tailwind CSS | Vite | React-Icons',
      github: 'https://github.com/enzoalmeiida/meu-portfolio',
    },
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
  ];

  return (
    <section className="py-20 px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-glow">
          &gt;&gt;&gt; Meus Projetos &lt;&lt;&lt;
        </h1>

        <div className="terminal-box mb-8">
          <div className="text-sm mb-6">
            <span className="text-glow-green">$</span> ls -la /projects
          </div>

          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div key={idx} className="border border-cyan-600 p-6 bg-blue-900/20 hover:bg-blue-900/40 transition-all">
                <div className="text-sm mb-2">
                  <span className="text-glow-orange">[{idx + 1}]</span>
                </div>
                <div className="text-lg font-bold mb-3 text-glow">
                  &gt;&gt; {project.title}
                </div>
                <div className="text-sm mb-4 leading-relaxed">
                  {project.description}
                </div>
                <div className="text-xs mb-4 text-glow-green">
                  {project.tech}
                </div>
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
  );
}

function ContactPage() {
  return (
    <section className="pb-20 px-8 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full text-center">
        <div className="terminal-box">
          <div className="text-sm mb-6">
            <span className="text-glow-green">$</span> send_message
          </div>
          <div className="text-lg mb-8 text-glow">
            &gt;&gt;&gt; Get in Touch &lt;&lt;&lt;
          </div>
          
          {/* Professional Bio - Monospaced Terminal Style */}
          <div className="text-sm mb-8 font-mono text-cyan-300 leading-relaxed">
            <p>
              Engenheiro de Software em formação pela FIAP, focado em DevOps,
            </p>
            <p>
              SRE e Cloud Computing. Atuando com automação e infraestrutura
            </p>
            <p>
              na Blendon.
            </p>
          </div>
          
          {/* Contact Buttons - Terminal Style Grid */}
          <div className="flex justify-center gap-6 flex-wrap">
            {/* GitHub Button */}
            <a 
              href="https://github.com/enzoalmeiida"
              target="_blank"
              rel="noreferrer"
              className="terminal-btn inline-flex items-center gap-2 hover:text-glow-orange transition-all"
            >
              <FaGithub size={18} />
              [ GITHUB ]
            </a>
            
            {/* LinkedIn Button */}
            <a 
              href="https://www.linkedin.com/in/enzo-almeida-19a2522a5/"
              target="_blank"
              rel="noreferrer"
              className="terminal-btn inline-flex items-center gap-2 hover:text-glow-orange transition-all"
            >
              <FaLinkedin size={18} />
              [ LINKEDIN ]
            </a>
            
            {/* Email Button */}
            <a 
              href="mailto:enzoalmeida.ramos@gmail.com"
              className="terminal-btn inline-flex items-center gap-2 hover:text-glow-orange transition-all"
            >
              <FaEnvelope size={18} />
              [ EMAIL ]
            </a>
            
            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/5511976269340"
              target="_blank"
              rel="noreferrer"
              className="terminal-btn inline-flex items-center gap-2 hover:text-glow-orange transition-all"
            >
              <FaWhatsapp size={18} />
              [ WHATSAPP ]
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== NAVIGATION COMPONENT ===== */

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full border-b border-cyan-600 px-8 py-6 flex justify-between items-center z-40 bg-blue-950/80 backdrop-blur-md">
      {/* Left: Navigation Links */}
      <div className="flex gap-0">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `flex flex-col items-center justify-center px-6 py-3 transition-all ${
              isActive 
                ? 'text-glow-orange' 
                : 'text-cyan-400 hover:text-glow-orange'
            }`
          }
        >
          <FaHome size={24} className="mb-2" />
          <span className="text-xs font-semibold">Home</span>
        </NavLink>

        <NavLink 
          to="/sobre" 
          className={({ isActive }) => 
            `flex flex-col items-center justify-center px-6 py-3 transition-all ${
              isActive 
                ? 'text-glow-orange' 
                : 'text-cyan-400 hover:text-glow-orange'
            }`
          }
        >
          <FaUser size={24} className="mb-2" />
          <span className="text-xs font-semibold">Sobre</span>
        </NavLink>

        <NavLink 
          to="/projetos" 
          className={({ isActive }) => 
            `flex flex-col items-center justify-center px-6 py-3 transition-all ${
              isActive 
                ? 'text-glow-orange' 
                : 'text-cyan-400 hover:text-glow-orange'
            }`
          }
        >
          <FaProjectDiagram size={24} className="mb-2" />
          <span className="text-xs font-semibold">Projetos</span>
        </NavLink>

        <NavLink 
          to="/contato" 
          className={({ isActive }) => 
            `flex flex-col items-center justify-center px-6 py-3 transition-all ${
              isActive 
                ? 'text-glow-orange' 
                : 'text-cyan-400 hover:text-glow-orange'
            }`
          }
        >
          <FaEnvelope size={24} className="mb-2" />
          <span className="text-xs font-semibold">Contato</span>
        </NavLink>
      </div>

      {/* Right: Code Button */}
      <a 
        href="https://github.com/enzoalmeiida" 
        target="_blank" 
        rel="noreferrer"
        className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition-all font-semibold text-sm"
      >
        <FaCode size={16} />
        Código
      </a>
    </nav>
  );
}

/* ===== MAIN APP ===== */

function App() {
  return (
    <BrowserRouter>
      {/* CRT Background Effects */}
      <div className="crt-screen"></div>
      <div className="scanlines"></div>
      <div className="noise"></div>
      <div className="vignette"></div>

      <div className="crt-content min-h-screen w-full pt-32">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/projetos" element={<ProjectsPage />} />
          <Route path="/contato" element={<ContactPage />} />
        </Routes>
      </div>

      <Navbar />
    </BrowserRouter>
  );
}

export default App;