import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaAws, FaMicrosoft, FaCode, FaEnvelope, FaPython, FaJava, FaDatabase, FaReact, FaHtml5, FaCss3Alt, FaJs, FaLinux, FaGit, FaWindows, FaWhatsapp, FaServer, FaWordpress, FaLayerGroup, FaUsers, FaBuilding, FaShieldAlt, FaTachometerAlt, FaFilePdf } from 'react-icons/fa';
import { SiDocker, SiKubernetes, SiTerraform, SiAnsible, SiTailwindcss, SiElementor, SiZoho, SiFigma } from 'react-icons/si';
import { VscTerminalBash } from 'react-icons/vsc';

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
        'Foco em SRE/DevOps',
        'Entusiasta de Cloud Computing'
      ],
      age: '19 anos | São Paulo, SP',
      whoami: 'whoami',
      bio1: 'Sou estudante de Engenharia de Software na FIAP com foco em DevOps/SRE.',
      bio2: 'Atualmente estagiário de TI na Nambbu, atuando com automação de infraestrutura, monitoramento e Cloud Computing. Meu objetivo é me tornar especialista em SRE/DevOps para o setor bancário.',
      bio3: 'Focado nas certificações: AWS Cloud Practitioner e Microsoft AZ-900.',
      connect: 'connect',
      highlights: 'Destaques & Metas',
      highlightsCmd: 'cat destaques.txt',
      awsCertTitle: 'AWS Certified Cloud Practitioner',
      awsStatus: 'Status: Preparação Reta Final',
      awsDesc: 'Estudando arquitetura, segurança e serviços core da nuvem AWS.',
      nambbuTitle: 'Infra as Code — Nambbu',
      nambbuStatus: 'Status: Em Produção',
      nambbuDesc: 'Automação de infraestrutura e orquestração de recursos utilizando Python e Terraform.'
    },
    // AboutPage
    about: {
      title: 'Sobre Mim',
      bioCmd: 'cat bio.txt',
      bio1: 'Meu nome é Enzo Almeida, tenho 19 anos e sou de São Paulo, SP. Sou estudante de Engenharia de Software na FIAP, uma das principais instituições de educação superior private aqui do Brasil.',
      bio2: 'Atualmente trabalho como SRE & Infrastructure Intern na Nambbu, onde atuo com automação de infraestrutura, monitoramento de ambientes cloud e cultura DevOps. É um ambiente desafiador que me proporcionou grande crescimento profissional.',
      bio3: 'Minha paixão é DevOps/SRE e Cloud Computing, especialmente na nuvem AWS e Microsoft Azure. Estou focado em obter as certificações AWS Cloud Practitioner e Microsoft Azure (AZ-900).',
      bio4: 'Sou alguém que gosta de aprender constantemente, trabalhar em equipe e contribuir para projetos que façam diferença no mundo da tecnologia.',
      skillsCmd: 'skills --all',
      skillsTitle: 'Habilidades',
      backend: 'Back-end & Scripting',
      frontend: 'Front-end',
      devops: 'DevOps & Cloud',
      tools: 'Ferramentas & Infra Corporativa',
      experienceCmd: 'cat nambbu_job_description.log',
      experienceTitle: 'Experiência Profissional',
      nambbPeriod: 'Maio/2025 – Presente',
      nambbRole: 'SRE & Infrastructure Intern',
      nambbAct1: 'Automação de infraestrutura: Rotinas e scripts para provisionamento e padronização de ambientes.',
      nambbAct2: 'Gestão de servidores críticos: Operação e manutenção de serviços essenciais com foco em disponibilidade.',
      nambbAct3: 'Monitoramento de ambientes cloud: Observabilidade, métricas e resposta a incidentes em produção.',
      nambbAct4: 'Cultura DevOps: Melhoria contínua de processos, colaboração e práticas de entrega confiável.',
      nambbAct5: 'Segurança & resiliência: Rotinas de backup, configuração de SSL/DNS e hardening básico.'
    },
    // ProjectsPage
    projects: {
      title: 'Meus Projetos',
      subtitle: 'Seleção de projetos e estudos.',
      cmd: 'ls -la /projects',
      viewCode: 'Ver código',
      viewPresentation: 'Ver apresentação (PDF)',
      personal: 'Pessoal',
      academic: 'Acadêmico',
      portfolioTitle: 'Portfolio CRT Terminal',
      portfolioDesc: 'Website pessoal desenvolvido com React.js e Tailwind CSS, simulando a interface de um monitor CRT antigo. Focado em performance, design responsivo e estética retrô-futurista.',
      portfolioTech: 'React | Tailwind CSS | Vite | React-Icons',
      nambbuTitle: 'Nambbu Automation',
      nambbuDesc: 'Scripts em Python para automação de infraestrutura, gestão de servidores críticos e monitoramento de ambientes cloud, alinhados à cultura DevOps.',
      nambbuTech: 'Python | Cloud | Terraform | Observability',
      awsTitle: 'AWS Infrastructure as Code',
      awsDesc: 'Templates Terraform para provisionamento automatizado de ambientes AWS com best practices de segurança e escalabilidade.',
      awsTech: 'Terraform | AWS | CI/CD',
      cicdTitle: 'DevOps Pipeline CI/CD',
      cicdDesc: 'Implementação completa de pipeline CI/CD utilizando GitHub Actions e containerização com Docker para deploy automatizado.',
      cicdTech: 'GitHub Actions | Docker | Linux',
      fiapCaseTitle: 'Estudo de Caso: Otimização de Infraestrutura em Nuvem',
      fiapCaseDesc: 'Pesquisa acadêmica realizada na FIAP sobre estratégias de otimização de infraestrutura em nuvem pública. Apresenta análise comparativa entre provedores e recomendações para empresas em transição digital.',
      fiapCaseTech: 'AWS | Azure | Análise Comparativa | Estudo de Caso'
    },
    // ContactPage
    contact: {
      title: 'Contato',
      subtitle: 'Aberto a oportunidades e projetos em SRE/DevOps.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'E-mail',
      whatsapp: 'WhatsApp'
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
      age: '19 years old | São Paulo, Brazil',
      whoami: 'whoami',
      bio1: 'Software Engineering undergraduate at FIAP with focus on DevOps/SRE.',
      bio2: 'Currently an SRE & Infrastructure Intern at Nambbu, working with infrastructure automation, monitoring, and Cloud Computing. My goal is to become a DevOps/SRE specialist for the banking sector.',
      bio3: 'Focused on certifications: AWS Cloud Practitioner and Microsoft AZ-900.',
      connect: 'connect',
      highlights: 'Highlights & Goals',
      highlightsCmd: 'cat highlights.txt',
      awsCertTitle: 'AWS Certified Cloud Practitioner',
      awsStatus: 'Status: Final Stretch Preparation',
      awsDesc: 'Studying AWS cloud architecture, security, and core services.',
      nambbuTitle: 'Infra as Code — Nambbu',
      nambbuStatus: 'Status: In Production',
      nambbuDesc: 'Infrastructure automation and resource orchestration using Python and Terraform.'
    },
    // AboutPage
    about: {
      title: 'About Me',
      bioCmd: 'cat bio.txt',
      bio1: 'My name is Enzo Almeida, I\'m 19 years old from São Paulo, Brazil. I am a Software Engineering undergraduate at FIAP, one of the leading private higher education institutions in Brazil.',
      bio2: 'Currently I work as an SRE & Infrastructure Intern at Nambbu, where I focus on infrastructure automation, monitoring cloud environments, and DevOps culture. It is a challenging environment that has provided me with great professional growth.',
      bio3: 'My passion is DevOps/SRE and Cloud Computing, especially on AWS and Microsoft Azure clouds. I am focused on obtaining AWS Cloud Practitioner and Microsoft Azure (AZ-900) certifications.',
      bio4: 'I\'m someone who enjoys continuous learning, teamwork, and contributing to projects that make a difference in the world of technology.',
      skillsCmd: 'skills --all',
      skillsTitle: 'Skills',
      backend: 'Back-end & Scripting',
      frontend: 'Front-end',
      devops: 'DevOps & Cloud',
      tools: 'Corporate Tools & Infrastructure',
      experienceCmd: 'cat nambbu_job_description.log',
      experienceTitle: 'Professional Experience',
      nambbPeriod: 'May/2025 – Present',
      nambbRole: 'SRE & Infrastructure Intern',
      nambbAct1: 'Infrastructure automation: Scripts and routines to provision and standardize environments.',
      nambbAct2: 'Critical server management: Operating essential services with an availability mindset.',
      nambbAct3: 'Cloud monitoring: Observability, metrics, and incident response in production.',
      nambbAct4: 'DevOps culture: Continuous improvements, collaboration, and reliable delivery practices.',
      nambbAct5: 'Security & resilience: Backups, SSL/DNS configuration, and basic hardening.'
    },
    // ProjectsPage
    projects: {
      title: 'My Projects',
      subtitle: 'Selected projects and studies.',
      cmd: 'ls -la /projects',
      viewCode: 'View code',
      viewPresentation: 'View presentation (PDF)',
      personal: 'Personal',
      academic: 'Academic',
      portfolioTitle: 'Portfolio CRT Terminal',
      portfolioDesc: 'Personal website developed with React.js and Tailwind CSS, simulating the interface of an old CRT monitor. Focused on performance, responsive design, and retro-futuristic aesthetics.',
      portfolioTech: 'React | Tailwind CSS | Vite | React-Icons',
      nambbuTitle: 'Nambbu Automation',
      nambbuDesc: 'Python automation for infrastructure, critical server operations, and cloud monitoring — aligned with DevOps culture.',
      nambbuTech: 'Python | Cloud | Terraform | Observability',
      awsTitle: 'AWS Infrastructure as Code',
      awsDesc: 'Terraform templates for automated AWS environment provisioning with security and scalability best practices.',
      awsTech: 'Terraform | AWS | CI/CD',
      cicdTitle: 'DevOps Pipeline CI/CD',
      cicdDesc: 'Complete CI/CD pipeline implementation using GitHub Actions and Docker containerization for automated deployment.',
      cicdTech: 'GitHub Actions | Docker | Linux',
      fiapCaseTitle: 'Case Study: Cloud Infrastructure Optimization',
      fiapCaseDesc: 'Academic research conducted at FIAP on cloud infrastructure optimization strategies. Presents comparative analysis between providers and recommendations for companies in digital transition.',
      fiapCaseTech: 'AWS | Azure | Comparative Analysis | Case Study'
    },
    // ContactPage
    contact: {
      title: 'Contact',
      subtitle: 'Open to opportunities and projects in SRE/DevOps.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
      whatsapp: 'WhatsApp'
    }
  }
};

/* ===== PAGE COMPONENTS ===== */

function HomePage({ language }) {
  const t = translations[language];
  return (
    <section className="px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <div className="text-sm text-muted mb-3">{t.home.helloWorld}</div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-glow">
            {t.home.myName}
          </h1>

          <div className="mt-5 text-lg text-muted">
            <Typewriter
              options={{
                strings: t.home.roles,
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
              }}
            />
          </div>

          <div className="mt-4 text-sm text-faint">{t.home.age}</div>

          <div className="mt-8 flex gap-3 flex-wrap">
            <a
              href="https://github.com/enzoalmeiida"
              target="_blank"
              rel="noreferrer"
              className="terminal-btn terminal-btn--solid inline-flex items-center gap-2"
            >
              <FaGithub size={18} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/enzo-almeida-19a2522a5/"
              target="_blank"
              rel="noreferrer"
              className="terminal-btn inline-flex items-center gap-2"
            >
              <FaLinkedin size={18} />
              LinkedIn
            </a>
          </div>

          <div className="mt-10 text-sm leading-relaxed text-muted">
            <p className="mb-3">{t.home.bio1}</p>
            <p className="mb-3">{t.home.bio2}</p>
            <p>{t.home.bio3}</p>
          </div>
        </div>

        <div className="terminal-box">
          <h2 className="text-xl font-semibold mb-6 text-glow">{t.home.highlights}</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="terminal-surface p-6">
              <div className="flex items-center gap-3 mb-3">
                <FaAws size={24} className="text-cloud" />
                <div className="font-medium">{t.home.awsCertTitle}</div>
              </div>
              <div className="text-sm text-online mb-2">{t.home.awsStatus}</div>
              <p className="text-sm text-muted">{t.home.awsDesc}</p>
            </div>

            <div className="terminal-surface p-6">
              <div className="flex items-center gap-3 mb-3">
                <SiTerraform size={24} className="text-cloud" />
                <div className="font-medium">{t.home.nambbuTitle}</div>
              </div>
              <div className="text-sm text-online mb-2">{t.home.nambbuStatus}</div>
              <p className="text-sm text-muted">{t.home.nambbuDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPage({ language }) {
  const t = translations[language];
  return (
    <section className="px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-glow">{t.about.title}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="terminal-box md:col-span-2">
            <div className="space-y-4 text-sm leading-relaxed text-muted">
              <p>{t.about.bio1}</p>
              <p>{t.about.bio2}</p>
              <p>{t.about.bio3}</p>
              <p>{t.about.bio4}</p>
            </div>
          </div>

          <div className="terminal-box">
            <div className="flex items-center gap-3 mb-4">
              <FaBuilding size={22} className="text-cloud" />
              <div>
                <div className="font-semibold">Nambbu</div>
                <div className="text-sm text-faint">{t.about.nambbRole}</div>
              </div>
            </div>

            <div className="text-sm text-faint mb-5">{t.about.nambbPeriod}</div>

            <div className="space-y-3 text-sm text-muted">
              <div className="flex gap-3 items-start">
                <FaCode size={16} className="text-cloud mt-0.5 flex-shrink-0" />
                <span>{t.about.nambbAct1}</span>
              </div>
              <div className="flex gap-3 items-start">
                <FaServer size={16} className="text-cloud mt-0.5 flex-shrink-0" />
                <span>{t.about.nambbAct2}</span>
              </div>
              <div className="flex gap-3 items-start">
                <FaTachometerAlt size={16} className="text-cloud mt-0.5 flex-shrink-0" />
                <span>{t.about.nambbAct3}</span>
              </div>
              <div className="flex gap-3 items-start">
                <FaUsers size={16} className="text-cloud mt-0.5 flex-shrink-0" />
                <span>{t.about.nambbAct4}</span>
              </div>
              <div className="flex gap-3 items-start">
                <FaShieldAlt size={16} className="text-cloud mt-0.5 flex-shrink-0" />
                <span>{t.about.nambbAct5}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 terminal-box">
          <h2 className="text-xl font-semibold mb-6 text-glow">{t.about.skillsTitle}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-muted mb-3">{t.about.backend}</div>
              <div className="terminal-surface p-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  <div className="flex flex-col items-center text-center">
                    <FaPython size={36} className="mb-3 text-cloud" />
                    <span className="text-xs">Python</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <VscTerminalBash size={36} className="mb-3 text-cloud" />
                    <span className="text-xs">Bash/Shell</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <FaJava size={36} className="mb-3 text-cloud" />
                    <span className="text-xs">Java</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <FaDatabase size={36} className="mb-3 text-cloud" />
                    <span className="text-xs">MySQL</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm text-muted mb-3">{t.about.frontend}</div>
              <div className="terminal-surface p-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  <div className="flex flex-col items-center text-center">
                    <FaReact size={36} className="mb-3 text-cloud" />
                    <span className="text-xs">React</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <SiTailwindcss size={36} className="mb-3 text-cloud" />
                    <span className="text-xs">Tailwind</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <FaJs size={36} className="mb-3 text-cloud" />
                    <span className="text-xs">JavaScript</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <SiFigma size={36} className="mb-3 text-cloud" />
                    <span className="text-xs">Figma</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm text-muted mb-3">{t.about.devops}</div>
              <div className="terminal-surface p-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  <div className="flex flex-col items-center text-center">
                    <FaAws size={36} className="mb-3 text-cloud" />
                    <span className="text-xs">AWS</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <FaMicrosoft size={36} className="mb-3 text-cloud" />
                    <span className="text-xs">Azure</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <SiDocker size={36} className="mb-3 text-cloud" />
                    <span className="text-xs">Docker</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <SiTerraform size={36} className="mb-3 text-cloud" />
                    <span className="text-xs">Terraform</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm text-muted mb-3">{t.about.tools}</div>
              <div className="terminal-surface p-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  <div className="flex flex-col items-center text-center">
                    <FaWindows size={36} className="mb-3 text-cloud" />
                    <span className="text-xs">Windows</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <FaLinux size={36} className="mb-3 text-cloud" />
                    <span className="text-xs">Linux</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <FaGit size={36} className="mb-3 text-cloud" />
                    <span className="text-xs">Git</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <FaGithub size={36} className="mb-3 text-cloud" />
                    <span className="text-xs">GitHub</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsPage({ language }) {
  const t = translations[language];
  const projects = [
    {
      titleKey: 'portfolioTitle',
      descKey: 'portfolioDesc',
      techKey: 'portfolioTech',
      github: 'https://github.com/enzoalmeiida/meu-portfolio',
      category: 'personal',
      image: 'https://via.placeholder.com/400x200/111111/4ade80?text=PORTFOLIO+CRT',
      isPdf: false,
    },
    {
      titleKey: 'nambbuTitle',
      descKey: 'nambbuDesc',
      techKey: 'nambbuTech',
      github: 'https://github.com/enzoalmeiida',
      category: 'personal',
      image: 'https://via.placeholder.com/400x200/111111/4ade80?text=NAMBBU+AUTOMATION',
      isPdf: false,
    },
    {
      titleKey: 'awsTitle',
      descKey: 'awsDesc',
      techKey: 'awsTech',
      github: 'https://github.com/enzoalmeiida',
      category: 'personal',
      image: 'https://via.placeholder.com/400x200/111111/4ade80?text=AWS+INFRASTRUCTURE',
      isPdf: false,
    },
    {
      titleKey: 'cicdTitle',
      descKey: 'cicdDesc',
      techKey: 'cicdTech',
      github: 'https://github.com/enzoalmeiida',
      category: 'personal',
      image: 'https://via.placeholder.com/400x200/111111/4ade80?text=CI%2FCD+PIPELINE',
      isPdf: false,
    },
    {
      titleKey: 'fiapCaseTitle',
      descKey: 'fiapCaseDesc',
      techKey: 'fiapCaseTech',
      github: '#',
      category: 'academic',
      image: 'https://via.placeholder.com/400x200/111111/4ade80?text=FIAP+CASE+STUDY',
      isPdf: true,
    }
  ];

  return (
    <section className="px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-glow">{t.projects.title}</h1>
          <p className="mt-3 text-muted">{t.projects.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="monitor-card p-6">
                {/* Project Cover Image */}
                <img
                  src={project.image}
                  alt={t.projects[project.titleKey]}
                  className="w-full h-48 object-cover border border-subtle grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mb-4"
                />

                <div className="text-sm mb-2">
                  <span className="text-faint">#{idx + 1}</span>
                </div>

                {/* Category Badge */}
                <div className="mb-3">
                  <span className="terminal-badge text-xs text-online px-2 py-1">
                    {project.category === 'personal' ? t.projects.personal : t.projects.academic}
                  </span>
                </div>

                <div className="text-lg font-semibold mb-2 text-glow">
                  {t.projects[project.titleKey]}
                </div>
                <div className="text-sm mb-4 leading-relaxed">
                  {t.projects[project.descKey]}
                </div>
                <div className="text-xs mb-5 text-muted">
                  {t.projects[project.techKey]}
                </div>
                <a 
                  href={project.github}
                  target={project.isPdf ? "_blank" : "_blank"}
                  rel="noreferrer"
                  className="terminal-btn inline-flex items-center gap-2 text-sm"
                >
                  {project.isPdf ? (
                    <>
                      <FaFilePdf size={16} />
                      {t.projects.viewPresentation}
                    </>
                  ) : (
                    <>
                      <FaGithub size={16} />
                      {t.projects.viewCode}
                    </>
                  )}
                </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactPage({ language }) {
  const t = translations[language];
  return (
    <section className="px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="terminal-box">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-glow">{t.contact.title}</h1>
              <p className="mt-2 text-muted">{t.contact.subtitle}</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="https://github.com/enzoalmeiida"
              target="_blank"
              rel="noreferrer"
              className="terminal-btn terminal-btn--solid inline-flex items-center justify-center gap-2"
            >
              <FaGithub size={18} />
              {t.contact.github}
            </a>

            <a
              href="https://www.linkedin.com/in/enzo-almeida-19a2522a5/"
              target="_blank"
              rel="noreferrer"
              className="terminal-btn inline-flex items-center justify-center gap-2"
            >
              <FaLinkedin size={18} />
              {t.contact.linkedin}
            </a>

            <a
              href="mailto:enzoalmeida.ramos@gmail.com"
              className="terminal-btn inline-flex items-center justify-center gap-2"
            >
              <FaEnvelope size={18} />
              {t.contact.email}
            </a>

            <a
              href="https://wa.me/5511976269340"
              target="_blank"
              rel="noreferrer"
              className="terminal-btn inline-flex items-center justify-center gap-2"
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
    <nav className="nav-shell fixed top-0 left-0 w-full z-40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between gap-6">
        <div className="flex items-center gap-6 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors ${isActive ? 'text-glow' : 'text-muted hover:text-glow'}`
            }
          >
            {t.nav.home}
          </NavLink>
          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              `transition-colors ${isActive ? 'text-glow' : 'text-muted hover:text-glow'}`
            }
          >
            {t.nav.about}
          </NavLink>
          <NavLink
            to="/projetos"
            className={({ isActive }) =>
              `transition-colors ${isActive ? 'text-glow' : 'text-muted hover:text-glow'}`
            }
          >
            {t.nav.projects}
          </NavLink>
          <NavLink
            to="/contato"
            className={({ isActive }) =>
              `transition-colors ${isActive ? 'text-glow' : 'text-muted hover:text-glow'}`
            }
          >
            {t.nav.contact}
          </NavLink>
        </div>

        <div className="flex items-center gap-3">
          <div className="terminal-btn flex items-center gap-2 px-3 py-2 text-xs mono">
            <button
              type="button"
              onClick={() => setLanguage('pt')}
              className={language === 'pt' ? 'text-cloud font-semibold' : 'text-faint hover:text-cloud transition-colors'}
            >
              PT
            </button>
            <span className="text-faint">/</span>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={language === 'en' ? 'text-cloud font-semibold' : 'text-faint hover:text-cloud transition-colors'}
            >
              EN
            </button>
          </div>

          <a
            href="https://github.com/enzoalmeiida/meu-portfolio"
            target="_blank"
            rel="noreferrer"
            className="terminal-btn terminal-btn--solid inline-flex items-center gap-2 px-4 py-2 text-sm"
          >
            <FaCode size={16} />
            {t.nav.code}
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ===== MAIN APP ===== */

function App() {
  const [language, setLanguage] = React.useState('pt');

  return (
    <BrowserRouter>
      <div className="crt-content min-h-screen w-full pt-20">
        <Routes>
          <Route path="/" element={<HomePage language={language} />} />
          <Route path="/sobre" element={<AboutPage language={language} />} />
          <Route path="/projetos" element={<ProjectsPage language={language} />} />
          <Route path="/contato" element={<ContactPage language={language} />} />
        </Routes>
      </div>

      <Navbar language={language} setLanguage={setLanguage} />
    </BrowserRouter>
  );
}

export default App;