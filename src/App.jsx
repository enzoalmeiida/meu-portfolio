import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaAws, FaMicrosoft, FaCode, FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaPython, FaJava, FaDatabase, FaReact, FaHtml5, FaCss3Alt, FaJs, FaDocker, FaLinux, FaGit, FaWindows, FaFirefox, FaTerminal } from 'react-icons/fa';
import { SiDocker, SiKubernetes, SiGitlab, SiTerraform, SiAnsible, SiPrometheus, SiGrafana, SiNewrelic } from 'react-icons/si';
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
          <div className="text-sm mb-8">
            <span className="text-glow-green">$</span> habilidades --sre
          </div>
          
          <h2 className="text-2xl font-bold mb-8 text-glow">Minhas Habilidades</h2>

          {/* Plataformas Cloud */}
          <div className="mb-8">
            <div className="text-sm text-glow-orange font-mono mb-3">[ Plataformas Cloud ]</div>
            <div className="border border-gray-800 p-6 bg-gray-950/40 shadow-inner">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center">
                  <FaAws size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">AWS</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <FaMicrosoft size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">Azure</span>
                </div>
              </div>
            </div>
          </div>

          {/* DevOps & CI/CD */}
          <div className="mb-8">
            <div className="text-sm text-glow-orange font-mono mb-3">[ DevOps & CI/CD ]</div>
            <div className="border border-gray-800 p-6 bg-gray-950/40 shadow-inner">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center">
                  <SiDocker size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">Docker</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <SiKubernetes size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">Kubernetes</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <FaGithub size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">GitHub Actions</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <SiGitlab size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">GitLab CI/CD</span>
                </div>
              </div>
            </div>
          </div>

          {/* Infra as Code (IaC) */}
          <div className="mb-8">
            <div className="text-sm text-glow-orange font-mono mb-3">[ Infra as Code ]</div>
            <div className="border border-gray-800 p-6 bg-gray-950/40 shadow-inner">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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

          {/* Linguagens & Scripting */}
          <div className="mb-8">
            <div className="text-sm text-glow-orange font-mono mb-3">[ Linguagens & Scripting ]</div>
            <div className="border border-gray-800 p-6 bg-gray-950/40 shadow-inner">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center">
                  <FaPython size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">Python</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <SiGnubash size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">Bash</span>
                </div>
              </div>
            </div>
          </div>

          {/* Monitoramento (SRE) */}
          <div>
            <div className="text-sm text-glow-orange font-mono mb-3">[ Monitoramento & SRE ]</div>
            <div className="border border-gray-800 p-6 bg-gray-950/40 shadow-inner">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center">
                  <SiPrometheus size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">Prometheus</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <SiGrafana size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">Grafana</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <SiNewrelic size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">New Relic</span>
                </div>
              </div>
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

          {/* Back-end Section */}
          <div className="mb-8">
            <div className="text-sm text-glow-orange font-bold mb-4">Back-End</div>
            <div className="border border-cyan-600 p-6 bg-blue-900/20 rounded">
              <div className="flex items-center gap-8 flex-wrap">
                <div className="flex flex-col items-center">
                  <FaPython size={32} className="mb-2 text-glow-orange" />
                  <span className="text-xs">Python</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaJava size={32} className="mb-2 text-glow-orange" />
                  <span className="text-xs">Java</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaDatabase size={32} className="mb-2 text-glow-orange" />
                  <span className="text-xs">MySQL</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaTerminal size={32} className="mb-2 text-glow-orange" />
                  <span className="text-xs">Bash</span>
                </div>
              </div>
            </div>
          </div>

          {/* Front-end Section */}
          <div className="mb-8">
            <div className="text-sm text-glow-orange font-bold mb-4">Front-End</div>
            <div className="border border-cyan-600 p-6 bg-blue-900/20 rounded">
              <div className="flex items-center gap-8 flex-wrap">
                <div className="flex flex-col items-center">
                  <FaReact size={32} className="mb-2 text-glow-orange" />
                  <span className="text-xs">React.js</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaHtml5 size={32} className="mb-2 text-glow-orange" />
                  <span className="text-xs">HTML5</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaCss3Alt size={32} className="mb-2 text-glow-orange" />
                  <span className="text-xs">CSS3</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaJs size={32} className="mb-2 text-glow-orange" />
                  <span className="text-xs">JavaScript</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl mb-2 text-glow-orange">🌬️</span>
                  <span className="text-xs">Tailwind</span>
                </div>
              </div>
            </div>
          </div>

          {/* DevOps & Cloud Section */}
          <div className="mb-8">
            <div className="text-sm text-glow-orange font-bold mb-4">DevOps & Cloud</div>
            <div className="border border-cyan-600 p-6 bg-blue-900/20 rounded">
              <div className="flex items-center gap-8 flex-wrap">
                <div className="flex flex-col items-center">
                  <FaAws size={32} className="mb-2 text-glow-orange" />
                  <span className="text-xs">AWS</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaMicrosoft size={32} className="mb-2 text-glow-orange" />
                  <span className="text-xs">Azure</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaDocker size={32} className="mb-2 text-glow-orange" />
                  <span className="text-xs">Docker</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaGit size={32} className="mb-2 text-glow-orange" />
                  <span className="text-xs">Terraform</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaLinux size={32} className="mb-2 text-glow-orange" />
                  <span className="text-xs">Linux</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ferramentas & Outros Section */}
          <div>
            <div className="text-sm text-glow-orange font-bold mb-4">Ferramentas & Outros</div>
            <div className="border border-cyan-600 p-6 bg-blue-900/20 rounded">
              <div className="flex items-center gap-8 flex-wrap">
                <div className="flex flex-col items-center">
                  <FaGit size={32} className="mb-2 text-glow-orange" />
                  <span className="text-xs">Git</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaGithub size={32} className="mb-2 text-glow-orange" />
                  <span className="text-xs">GitHub</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaWindows size={32} className="mb-2 text-glow-orange" />
                  <span className="text-xs">Windows 10</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaFirefox size={32} className="mb-2 text-glow-orange" />
                  <span className="text-xs">Firefox</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaCode size={32} className="mb-2 text-glow-orange" />
                  <span className="text-xs">VS Code</span>
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
          <div className="text-sm mb-8">
            Sempre aberto a novas oportunidades, projetos interessantes e conversas sobre tecnologia.
          </div>
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
              href="mailto:contact@example.com"
              className="terminal-btn"
            >
              [ EMAIL ]
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