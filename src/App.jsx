import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaAws, FaMicrosoft, FaCode, FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaPython, FaJava, FaDatabase, FaReact, FaHtml5, FaCss3Alt, FaJs, FaDocker, FaLinux, FaGit, FaWindows, FaFirefox, FaTerminal, FaWhatsapp, FaServer, FaWordpress, FaLayerGroup, FaUsers, FaBuilding, FaCheck, FaShieldAlt, FaTachometerAlt } from 'react-icons/fa';
import { SiDocker, SiKubernetes, SiGitlab, SiTerraform, SiAnsible, SiNewrelic, SiTailwindcss, SiElementor, SiZoho } from 'react-icons/si';
import { VscTerminalBash } from "react-icons/vsc";
import { SiGnubash } from "react-icons/si";

/* ===== INTERNATIONALIZATION (i18n) ===== */
const translations = {
  pt: {
    // Navigation & General
    nav: {
      home: 'Home',
      about: 'Sobre',
      projects: 'Projetos',
      contact: 'Contato',
      code: 'Código'
    },
    // HomePage
    home: {
      systemInitialized: '[ SYSTEM INITIALIZED ]',
      helloWorld: 'Hello World',
      myName: "I'm Enzo Almeida",
      roles: [
        'Estudante de Engenharia de Software',
        'Foco em DevOps & SRE',
        'Entusiasta de Cloud Computing'
      ],
      age: '[ 19 anos | São Paulo, SP ]',
      whoami: 'whoami',
      bio1: 'Sou estudante de Engenharia de Software na FIAP com foco em DevOps/SRE.',
      bio2: 'Atualmente estagiário de TI na Blendon, trabalhando com automação de infraestrutura e Cloud Computing. Meu objetivo é me tornar especialista em DevOps/SRE para o setor bancário.',
      bio3: 'Focado nas certificações: AWS Cloud Practitioner e Microsoft AZ-900.',
      connect: 'connect',
      highlights: 'Destaques & Metas',
      highlightsCmd: 'cat destaques.txt',
      awsCertTitle: '[ AWS Certified Cloud Practitioner ]',
      awsStatus: 'Status: Preparação Reta Final',
      awsDesc: 'Estudando arquitetura, segurança e serviços core da nuvem AWS.',
      blendonTitle: '[ Infra as Code - Blendon ]',
      blendonStatus: 'Status: Em Produção',
      blendonDesc: 'Automação de infraestrutura e orquestração de recursos utilizando Python e Terraform.'
    },
    // AboutPage
    about: {
      title: 'Sobre Mim',
      bioCmd: 'cat bio.txt',
      bio1: 'Meu nome é Enzo Almeida, tenho 19 anos e sou de São Paulo, SP. Sou estudante de Engenharia de Software na FIAP, uma das principais instituições de educação superior private aqui do Brasil.',
      bio2: 'Atualmente trabalho como Estagiário de TI na Blendon, onde tenho a oportunidade de trabalhar com automação de infraestrutura, Cloud Computing e DevOps. É um ambiente desafiador que me proporcionou grande crescimento profissional.',
      bio3: 'Minha paixão é DevOps/SRE e Cloud Computing, especialmente na nuvem AWS e Microsoft Azure. Estou focado em obter as certificações AWS Cloud Practitioner e Microsoft Azure (AZ-900).',
      bio4: 'Sou alguém que gosta de aprender constantemente, trabalhar em equipe e contribuir para projetos que façam diferença no mundo da tecnologia.',
      skillsCmd: 'skills --all',
      backend: '[ Back-end & Scripting ]',
      frontend: '[ Front-end ]',
      devops: '[ DevOps & Cloud ]',
      tools: '[ Ferramentas & Infra Corporativa ]',
      experienceCmd: 'cat nambbu_job_description.log',
      experienceTitle: 'Experiência Profissional',
      nambbPeriod: 'Maio/2025 – Presente',
      nambbRole: 'Estagiário de TI / Infraestrutura',
      nambbAct1: 'Desenvolvimento Front-end: Manutenção de sites em WordPress utilizando Oxygen Builder e Elementor.',
      nambbAct2: 'Gestão de Infraestrutura: Administração de servidores e recursos em nuvem da empresa.',
      nambbAct3: 'Redes e Conectividade: Monitoramento e manutenção da internet e rede interna.',
      nambbAct4: 'Segurança e Domínios: Configuração de certificados SSL, zonas de DNS, rotinas de backup e protocolos de segurança.',
      nambbAct5: 'Otimização: Suporte técnico especializado e otimização de performance (Web Vitals) de websites.'
    },
    // ProjectsPage
    projects: {
      title: 'Meus Projetos',
      cmd: 'ls -la /projects',
      viewCode: '[ VIEW CODE ]',
      portfolioTitle: 'Portfolio CRT Terminal',
      portfolioDesc: 'Website pessoal desenvolvido com React.js e Tailwind CSS, simulando a interface de um monitor CRT antigo. Focado em performance, design responsivo e estética retrô-futurista.',
      portfolioTech: 'React | Tailwind CSS | Vite | React-Icons',
      blendonTitle: 'Blendon Automation',
      blendonDesc: 'Scripts em Python para orquestração de recursos em nuvem e automação de infraestrutura na plataforma Blendon.',
      blendonTech: 'Python | AWS | Terraform',
      awsTitle: 'AWS Infrastructure as Code',
      awsDesc: 'Templates Terraform para provisionamento automatizado de ambientes AWS com best practices de segurança e escalabilidade.',
      awsTech: 'Terraform | AWS | CI/CD',
      cicdTitle: 'DevOps Pipeline CI/CD',
      cicdDesc: 'Implementação completa de pipeline CI/CD utilizando GitHub Actions e containerização com Docker para deploy automatizado.',
      cicdTech: 'GitHub Actions | Docker | Linux'
    },
    // ContactPage
    contact: {
      title: 'Get in Touch',
      cmd: 'send_message',
      bio1: 'Engenheiro de Software em formação pela FIAP, focado em DevOps,',
      bio2: 'SRE e Cloud Computing. Atuando com automação e infraestrutura',
      bio3: 'na Blendon.',
      github: '[ GITHUB ]',
      linkedin: '[ LINKEDIN ]',
      email: '[ EMAIL ]',
      whatsapp: '[ WHATSAPP ]'
    }
  },
  en: {
    // Navigation & General
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
      code: 'Code'
    },
    // HomePage
    home: {
      systemInitialized: '[ SYSTEM INITIALIZED ]',
      helloWorld: 'Hello World',
      myName: "I'm Enzo Almeida",
      roles: [
        'Software Engineering Undergraduate',
        'Focus on DevOps & SRE',
        'Cloud Computing Enthusiast'
      ],
      age: '[ 19 years old | São Paulo, Brazil ]',
      whoami: 'whoami',
      bio1: 'Software Engineering undergraduate at FIAP with focus on DevOps/SRE.',
      bio2: 'Currently IT Intern at Blendon, working with infrastructure automation and Cloud Computing. My goal is to become a DevOps/SRE specialist for the banking sector.',
      bio3: 'Focused on certifications: AWS Cloud Practitioner and Microsoft AZ-900.',
      connect: 'connect',
      highlights: 'Highlights & Goals',
      highlightsCmd: 'cat highlights.txt',
      awsCertTitle: '[ AWS Certified Cloud Practitioner ]',
      awsStatus: 'Status: Final Stretch Preparation',
      awsDesc: 'Studying AWS cloud architecture, security, and core services.',
      blendonTitle: '[ Infra as Code - Blendon ]',
      blendonStatus: 'Status: In Production',
      blendonDesc: 'Infrastructure automation and resource orchestration using Python and Terraform.'
    },
    // AboutPage
    about: {
      title: 'About Me',
      bioCmd: 'cat bio.txt',
      bio1: 'My name is Enzo Almeida, I\'m 19 years old from São Paulo, Brazil. I am a Software Engineering undergraduate at FIAP, one of the leading private higher education institutions in Brazil.',
      bio2: 'Currently I work as an IT Intern at Blendon, where I have the opportunity to work with infrastructure automation, Cloud Computing, and DevOps. It is a challenging environment that has provided me with great professional growth.',
      bio3: 'My passion is DevOps/SRE and Cloud Computing, especially on AWS and Microsoft Azure clouds. I am focused on obtaining AWS Cloud Practitioner and Microsoft Azure (AZ-900) certifications.',
      bio4: 'I\'m someone who enjoys continuous learning, teamwork, and contributing to projects that make a difference in the world of technology.',
      skillsCmd: 'skills --all',
      backend: '[ Back-end & Scripting ]',
      frontend: '[ Front-end ]',
      devops: '[ DevOps & Cloud ]',
      tools: '[ Corporate Tools & Infrastructure ]',
      experienceCmd: 'cat nambbu_job_description.log',
      experienceTitle: 'Professional Experience',
      nambbPeriod: 'May/2023 – Present',
      nambbRole: 'IT / Infrastructure Intern',
      nambbAct1: 'Front-end Development: Website maintenance on WordPress using Oxygen Builder and Elementor.',
      nambbAct2: 'Infrastructure Management: Administration of company servers and cloud resources.',
      nambbAct3: 'Networks & Connectivity: Internet and internal network monitoring and maintenance.',
      nambbAct4: 'Security & Domains: SSL certificates, DNS zones, backup routines, and security protocols configuration.',
      nambbAct5: 'Optimization: Specialized technical support and website performance optimization (Web Vitals).'
    },
    // ProjectsPage
    projects: {
      title: 'My Projects',
      cmd: 'ls -la /projects',
      viewCode: '[ VIEW CODE ]',
      portfolioTitle: 'Portfolio CRT Terminal',
      portfolioDesc: 'Personal website developed with React.js and Tailwind CSS, simulating the interface of an old CRT monitor. Focused on performance, responsive design, and retro-futuristic aesthetics.',
      portfolioTech: 'React | Tailwind CSS | Vite | React-Icons',
      blendonTitle: 'Blendon Automation',
      blendonDesc: 'Python scripts for cloud resource orchestration and infrastructure automation on the Blendon platform.',
      blendonTech: 'Python | AWS | Terraform',
      awsTitle: 'AWS Infrastructure as Code',
      awsDesc: 'Terraform templates for automated AWS environment provisioning with security and scalability best practices.',
      awsTech: 'Terraform | AWS | CI/CD',
      cicdTitle: 'DevOps Pipeline CI/CD',
      cicdDesc: 'Complete CI/CD pipeline implementation using GitHub Actions and Docker containerization for automated deployment.',
      cicdTech: 'GitHub Actions | Docker | Linux'
    },
    // ContactPage
    contact: {
      title: 'Get in Touch',
      cmd: 'send_message',
      bio1: 'Software Engineering undergraduate from FIAP, focused on DevOps,',
      bio2: 'SRE and Cloud Computing. Working with automation and infrastructure',
      bio3: 'at Blendon.',
      github: '[ GITHUB ]',
      linkedin: '[ LINKEDIN ]',
      email: '[ EMAIL ]',
      whatsapp: '[ WHATSAPP ]'
    }
  }
};

/* ===== PAGE COMPONENTS ===== */

function HomePage({ language, setLanguage }) {
  const t = translations[language];
  return (
    <section className="pb-20 px-8 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full">
        <div className="terminal-box mb-12 text-center">
          <div className="text-sm mb-2 text-glow-green">[ SYSTEM INITIALIZED ]</div>
          <h1 className="text-5xl font-bold mb-4 text-glow">
            &gt;&gt;&gt; Hello World &lt;&lt;&lt;
          </h1>
          <div className="text-lg text-glow-orange mb-4">
            {t.home.myName}
          </div>

          <div className="text-lg text-cyan-400 h-8 mb-4">
            <span className="text-glow-orange">&gt; </span>
            <Typewriter
              options={{
                strings: t.home.roles,
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
              }}
            />
          </div>

          <div className="text-sm">{t.home.age}</div>
        </div>

        <div className="terminal-box mb-12">
          <div className="text-sm mb-4">
            <span className="text-glow-green">$</span> {t.home.whoami}
          </div>
          <div className="text-sm leading-relaxed mb-4">
            {t.home.bio1}
          </div>
          <div className="text-sm leading-relaxed mb-4">
            {t.home.bio2}
          </div>
          <div className="text-sm leading-relaxed">
            {t.home.bio3}
          </div>
        </div>

        <div className="terminal-box">
          <div className="text-sm mb-6">
            <span className="text-glow-green">$</span> {t.home.highlightsCmd}
          </div>

          <h2 className="text-2xl font-bold mb-8 text-glow">{t.home.highlights}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Certificações (AWS Certified Cloud Practitioner) */}
            <div className="border border-cyan-600 p-6 bg-blue-900/20 hover:bg-blue-900/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <FaAws size={32} className="text-glow-orange" />
                <h3 className="text-glow-orange font-mono">{t.home.awsCertTitle}</h3>
              </div>
              <div className="mb-3">
                <span className="text-xs font-mono text-emerald-400 animate-pulse">● {t.home.awsStatus}</span>
              </div>
              <p className="text-sm font-mono text-gray-300">
                {t.home.awsDesc}
              </p>
            </div>

            {/* Card 2: Projeto Relevante (Infra as Code - Blendon) */}
            <div className="border border-cyan-600 p-6 bg-blue-900/20 hover:bg-blue-900/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <SiTerraform size={32} className="text-glow-orange" />
                <h3 className="text-glow-orange font-mono">{t.home.blendonTitle}</h3>
              </div>
              <div className="mb-3">
                <span className="text-xs font-mono text-emerald-400">● {t.home.blendonStatus}</span>
              </div>
              <p className="text-sm font-mono text-gray-300">
                {t.home.blendonDesc}
              </p>
            </div>
          </div>
        </div>

        <div className="terminal-box mt-12 text-center">
          <div className="text-sm mb-4">
            <span className="text-glow-green">$</span> {t.home.connect}
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
              href="https://www.linkedin.com/in/enzo-almeida-19a2522a5/" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-glow-orange transition-all"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPage({ language, setLanguage }) {
  const t = translations[language];
  return (
    <section className="pb-20 px-8 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-12 text-center text-glow">
          &gt;&gt;&gt; {t.about.title} &lt;&lt;&lt;
        </h1>

        <div className="terminal-box mb-8">
          <div className="text-sm mb-4">
            <span className="text-glow-green">$</span> {t.about.bioCmd}
          </div>
          <div className="space-y-4 text-sm leading-relaxed">
            <p>{t.about.bio1}</p>
            <p>{t.about.bio2}</p>
            <p>{t.about.bio3}</p>
            <p>{t.about.bio4}</p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="terminal-box mb-12">
          <div className="text-sm mb-6">
            <span className="text-glow-green">$</span> {t.about.experienceCmd}
          </div>

          <h2 className="text-2xl font-bold mb-8 text-glow">{t.about.experienceTitle}</h2>

          <div className="border border-cyan-600 p-6 bg-blue-900/20">
            <div className="flex items-center gap-3 mb-4">
              <FaBuilding size={32} className="text-glow-orange" />
              <h3 className="text-lg font-bold text-glow-orange font-mono">Nambbu</h3>
            </div>
            
            <div className="mb-6">
              <span className="text-sm text-glow-orange font-mono">{t.about.nambbPeriod}</span>
              <div className="text-sm text-gray-400 mt-1">{t.about.nambbRole}</div>
            </div>

            {/* Responsibilities with Icons */}
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex gap-3 items-start">
                <FaCode size={18} className="text-glow-orange mt-1 flex-shrink-0" />
                <span>{t.about.nambbAct1}</span>
              </div>
              <div className="flex gap-3 items-start">
                <FaServer size={18} className="text-glow-orange mt-1 flex-shrink-0" />
                <span>{t.about.nambbAct2}</span>
              </div>
              <div className="flex gap-3 items-start">
                <FaGit size={18} className="text-glow-orange mt-1 flex-shrink-0" />
                <span>{t.about.nambbAct3}</span>
              </div>
              <div className="flex gap-3 items-start">
                <FaShieldAlt size={18} className="text-glow-orange mt-1 flex-shrink-0" />
                <span>{t.about.nambbAct4}</span>
              </div>
              <div className="flex gap-3 items-start">
                <FaTachometerAlt size={18} className="text-glow-orange mt-1 flex-shrink-0" />
                <span>{t.about.nambbAct5}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="terminal-box">
          <div className="text-sm mb-8">
            <span className="text-glow-green">$</span> {t.about.skillsCmd}
          </div>

          {/* Back-end & Scripting Section */}
          <div className="mb-8">
            <div className="text-sm text-glow-orange font-mono mb-3">{t.about.backend}</div>
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
            <div className="text-sm text-glow-orange font-mono mb-3">{t.about.frontend}</div>
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
                  <FaCss3Alt size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">CSS3</span>
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
            <div className="text-sm text-glow-orange font-mono mb-3">{t.about.devops}</div>
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
            <div className="text-sm text-glow-orange font-mono mb-3">{t.about.tools}</div>
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
                  <FaLinux size={40} className="mb-3 text-glow-orange" />
                  <span className="text-xs font-mono">Linux</span>
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

function ProjectsPage({ language, setLanguage }) {
  const t = translations[language];
  const projects = [
    {
      titleKey: 'portfolioTitle',
      descKey: 'portfolioDesc',
      techKey: 'portfolioTech',
      github: 'https://github.com/enzoalmeiida/meu-portfolio',
    },
    {
      titleKey: 'blendonTitle',
      descKey: 'blendonDesc',
      techKey: 'blendonTech',
      github: 'https://github.com/enzoalmeiida',
    },
    {
      titleKey: 'awsTitle',
      descKey: 'awsDesc',
      techKey: 'awsTech',
      github: 'https://github.com/enzoalmeiida',
    },
    {
      titleKey: 'cicdTitle',
      descKey: 'cicdDesc',
      techKey: 'cicdTech',
      github: 'https://github.com/enzoalmeiida',
    }
  ];

  return (
    <section className="py-20 px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-glow">
          &gt;&gt;&gt; {t.projects.title} &lt;&lt;&lt;
        </h1>

        <div className="terminal-box mb-8">
          <div className="text-sm mb-6">
            <span className="text-glow-green">$</span> {t.projects.cmd}
          </div>

          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div key={idx} className="border border-cyan-600 p-6 bg-blue-900/20 hover:bg-blue-900/40 transition-all">
                <div className="text-sm mb-2">
                  <span className="text-glow-orange">[{idx + 1}]</span>
                </div>
                <div className="text-lg font-bold mb-3 text-glow">
                  &gt;&gt; {t.projects[project.titleKey]}
                </div>
                <div className="text-sm mb-4 leading-relaxed">
                  {t.projects[project.descKey]}
                </div>
                <div className="text-xs mb-4 text-glow-green">
                  {t.projects[project.techKey]}
                </div>
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="terminal-btn inline-block text-sm"
                >
                  {t.projects.viewCode}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactPage({ language, setLanguage }) {
  const t = translations[language];
  return (
    <section className="pb-20 px-8 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full text-center">
        <div className="terminal-box">
          <div className="text-sm mb-6">
            <span className="text-glow-green">$</span> {t.contact.cmd}
          </div>
          <div className="text-lg mb-8 text-glow">
            &gt;&gt;&gt; {t.contact.title} &lt;&lt;&lt;
          </div>
          
          {/* Professional Bio - Monospaced Terminal Style */}
          <div className="text-sm mb-8 font-mono text-cyan-300 leading-relaxed">
            <p>{t.contact.bio1}</p>
            <p>{t.contact.bio2}</p>
            <p>{t.contact.bio3}</p>
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
              {t.contact.github}
            </a>
            
            {/* LinkedIn Button */}
            <a 
              href="https://www.linkedin.com/in/enzo-almeida-19a2522a5/"
              target="_blank"
              rel="noreferrer"
              className="terminal-btn inline-flex items-center gap-2 hover:text-glow-orange transition-all"
            >
              <FaLinkedin size={18} />
              {t.contact.linkedin}
            </a>
            
            {/* Email Button */}
            <a 
              href="mailto:enzoalmeida.ramos@gmail.com"
              className="terminal-btn inline-flex items-center gap-2 hover:text-glow-orange transition-all"
            >
              <FaEnvelope size={18} />
              {t.contact.email}
            </a>
            
            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/5511976269340"
              target="_blank"
              rel="noreferrer"
              className="terminal-btn inline-flex items-center gap-2 hover:text-glow-orange transition-all"
            >
              <FaWhatsapp size={18} />
              {t.contact.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== NAVIGATION COMPONENT ===== */

function Navbar({ language, setLanguage }) {
  const t = translations[language];
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
          <span className="text-xs font-semibold">{t.nav.home}</span>
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
          <span className="text-xs font-semibold">{t.nav.about}</span>
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
          <span className="text-xs font-semibold">{t.nav.projects}</span>
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
          <span className="text-xs font-semibold">{t.nav.contact}</span>
        </NavLink>
      </div>

      {/* Right: Language Toggle & Code Button */}
      <div className="flex gap-4 items-center">
        {/* Language Selector */}
        <div className="terminal-btn flex items-center gap-2 px-3 py-2 text-xs font-mono">
          <span>[</span>
          <span 
            onClick={() => setLanguage('pt')}
            className={language === 'pt' ? 'text-glow-orange text-orange-400 font-bold cursor-default' : 'text-gray-500 hover:text-cyan-400 cursor-pointer transition-colors'}
          >
            PT
          </span>
          <span className="text-gray-700">|</span>
          <span 
            onClick={() => setLanguage('en')}
            className={language === 'en' ? 'text-glow-orange text-orange-400 font-bold cursor-default' : 'text-gray-500 hover:text-cyan-400 cursor-pointer transition-colors'}
          >
            EN
          </span>
          <span>]</span>
        </div>

        {/* Code Button */}
        <a 
          href="https://github.com/enzoalmeiida/meu-portfolio" 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition-all font-semibold text-sm"
        >
          <FaCode size={16} />
          {t.nav.code}
        </a>
      </div>
    </nav>
  );
}

/* ===== MAIN APP ===== */

function App() {
  const [language, setLanguage] = React.useState('pt');

  return (
    <BrowserRouter>
      {/* CRT Background Effects */}
      <div className="crt-screen"></div>
      <div className="scanlines"></div>
      <div className="noise"></div>
      <div className="vignette"></div>

      <div className="crt-content min-h-screen w-full pt-32">
        <Routes>
          <Route path="/" element={<HomePage language={language} setLanguage={setLanguage} />} />
          <Route path="/sobre" element={<AboutPage language={language} setLanguage={setLanguage} />} />
          <Route path="/projetos" element={<ProjectsPage language={language} setLanguage={setLanguage} />} />
          <Route path="/contato" element={<ContactPage language={language} setLanguage={setLanguage} />} />
        </Routes>
      </div>

      <Navbar language={language} setLanguage={setLanguage} />
    </BrowserRouter>
  );
}

export default App;