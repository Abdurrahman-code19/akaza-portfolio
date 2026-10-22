'use client';

import Image from 'next/image';
import { useState } from 'react';

const skills = {
  "Frontend Development": ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Tailwind CSS", "Bootstrap", "Responsive Web Design"],
  "Backend & APIs": ["Node.js", "Express.js", "REST APIs", "Supabase"],
  "Tools & Version Control": ["Git", "GitHub", "VS Code", "npm", "Browser DevTools"],
  "Design & CMS": ["WordPress", "UI Implementation", "Web Design"],
  "Professional Skills": ["Teaching", "Technical Mentoring", "Problem Solving", "Communication", "Collaboration"]
};

const projects = [
  {
    id: 1,
    title: "AJO.ng - Digital Contribution Savings",
    description: "A digital savings-group concept for coordinating private contribution groups, payment schedules, reminders, and rotating payouts.",
    tech: ["React", "Node.js", "TypeScript"],
    status: "Concept/Planned",
    category: "Fintech"
  },
  {
    id: 2,
    title: "Agritech Smart Farming Dashboard",
    description: "Agricultural technology application exploring digital tools for farmers and agricultural businesses with responsive interface design.",
    tech: ["React", "Supabase", "Tailwind CSS", "REST API"],
    status: "Completed",
    category: "Agritech",
    github: "https://github.com/Abdurrahman-code19/Agritech-app-"
  },
  {
    id: 3,
    title: "Zero Limit - E-commerce Store",
    description: "Premium clothing and accessories brand with minimal dark identity, product presentation and responsive storefront design.",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "In Progress",
    category: "E-commerce"
  },
  {
    id: 4,
    title: "AKAZA Portfolio",
    description: "Personal developer portfolio showcasing professional identity, skills, experience, and projects with premium dark theme.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "In Development",
    category: "Portfolio"
  }
];

export default function Home() {
  const [mobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#030508] via-[#07111F] to-[#030508] text-[#E2E8F0]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#030508]/90 backdrop-blur-lg border-b border-[#12263F] z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <Image 
                src="/assets/logos/AKAZA-header-logo.png" 
                alt="AKAZA Logo" 
                width={120} 
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="hover:text-[#4AA3FF] transition-colors duration-300">Home</a>
                <a href="#about" className="hover:text-[#4AA3FF] transition-colors duration-300">About</a>
                <a href="#skills" className="hover:text-[#4AA3FF] transition-colors duration-300">Skills</a>
                <a href="#projects" className="hover:text-[#4AA3FF] transition-colors duration-300">Projects</a>
                <a href="#experience" className="hover:text-[#4AA3FF] transition-colors duration-300">Experience</a>
                <a href="#certifications" className="hover:text-[#4AA3FF] transition-colors duration-300">Certifications</a>
                <a href="#contact" className="hover:text-[#4AA3FF] transition-colors duration-300">Contact</a>
              </div>
            </div>
            <div className="hidden md:block">
              <a href="/cv.pdf" download className="px-6 py-2.5 bg-gradient-to-r from-[#3082C5] to-[#4AA3FF] hover:shadow-[0_0_20px_rgba(74,163,255,0.4)] rounded-lg transition-all duration-300 font-medium">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="px-4 py-2 bg-[#12263F]/60 border border-[#3082C5]/30 rounded-full text-[#4AA3FF] text-sm">
                  AKAZA
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{fontFamily: 'var(--font-sora)'}}>
                <span className="text-[#E2E8F0]">Abdurrahman</span>{' '}
                <span className="bg-gradient-to-r from-[#4AA3FF] to-[#22D3EE] bg-clip-text text-transparent">
                  Oriolowo
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-[#94A3B8] mb-4">
                Frontend Developer · Software Development Enthusiast · Frontend Development Tutor
              </p>
              <p className="text-lg sm:text-xl mb-8 text-[#D6B77A] font-medium">
                Code with purpose. Build with impact.
              </p>
              <p className="text-lg text-[#94A3B8] mb-10 leading-relaxed max-w-xl">
                Turning ideas into meaningful digital experiences through development, creativity, and continuous learning.
                Building responsive, intuitive, and visually engaging web interfaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-[#3082C5] to-[#4AA3FF] hover:shadow-[0_0_30px_rgba(74,163,255,0.5)] rounded-lg transition-all duration-300 font-medium text-center">
                  View My Work
                </a>
                <a href="#contact" className="px-8 py-3 glass-card hover:border-[#4AA3FF]/50 rounded-lg transition-all duration-300 font-medium text-center">
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4AA3FF]/20 to-[#22D3EE]/20 rounded-2xl blur-3xl"></div>
                <div className="relative glass-card p-2 rounded-2xl glow-blue">
                  <div className="w-80 h-96 bg-gradient-to-br from-[#12263F] to-[#0A192F] rounded-xl flex items-center justify-center">
                    <Image 
                      src="/assets/logos/AKAZA-primary-logo.png" 
                      alt="AKAZA Logo" 
                      width={200} 
                      height={200}
                      className="opacity-90"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{fontFamily: 'var(--font-sora)'}}>
              About <span className="bg-gradient-to-r from-[#4AA3FF] to-[#22D3EE] bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-[#94A3B8] text-lg">Get to know who I am and what I do</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-[#E2E8F0]">About AKAZA</h3>
              <p className="text-[#94A3B8] mb-6 leading-relaxed">
                I&apos;m Abdurrahman Oriolowo, professionally known by my nickname and personal brand, AKAZA. 
                I&apos;m a Frontend Developer, Software Development enthusiast, Frontend Development Tutor at RIIT GLOBAL TECH, 
                and Computer Science undergraduate at Miva Open University.
              </p>
              <p className="text-[#94A3B8] mb-6 leading-relaxed">
                I focus on building responsive, intuitive, and visually engaging web interfaces using modern web technologies. 
                Beyond coding, I&apos;m passionate about teaching, mentoring aspiring developers, and helping others develop practical technology skills.
              </p>
              <p className="text-[#94A3B8] leading-relaxed">
                My long-term goal is to become a skilled Full-Stack Developer, build innovative digital products, and contribute 
                to technology solutions that solve real-world problems.
              </p>
            </div>
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-3 text-[#4AA3FF]">Mission</h4>
                <p className="text-[#94A3B8]">To build useful, accessible, and intuitive digital solutions that solve real problems while sharing knowledge and helping aspiring developers grow.</p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-3 text-[#4AA3FF]">Vision</h4>
                <p className="text-[#94A3B8]">To become a well-rounded software engineer and technology innovator, contributing to impactful products and helping shape the future of digital technology.</p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-3 text-[#4AA3FF]">Values</h4>
                <div className="flex flex-wrap gap-2">
                  {["Continuous Learning", "Creativity", "Quality & Detail", "Collaboration", "Problem Solving"].map((value) => (
                    <span key={value} className="px-3 py-1 bg-[#12263F] rounded-full text-sm text-[#E2E8F0] border border-[#3082C5]/30">
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#030508] to-[#07111F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{fontFamily: 'var(--font-sora)'}}>
              Technical <span className="bg-gradient-to-r from-[#4AA3FF] to-[#22D3EE] bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-[#94A3B8] text-lg">Technologies and skills I work with</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="glass-card p-6 rounded-xl hover:border-[#4AA3FF]/50 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-[#4AA3FF]">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-[#0A192F] rounded-lg text-sm text-[#E2E8F0] border border-[#1B365D] hover:border-[#3082C5] transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{fontFamily: 'var(--font-sora)'}}>
              Featured <span className="bg-gradient-to-r from-[#4AA3FF] to-[#22D3EE] bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-[#94A3B8] text-lg">Some of my recent work and concepts</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="glass-card p-6 rounded-xl hover:border-[#4AA3FF]/50 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-[#4AA3FF] transition-colors">{project.title}</h3>
                    <span className="px-2 py-1 bg-[#12263F] text-[#22D3EE] rounded text-xs">{project.category}</span>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${
                    project.status === 'Completed' ? 'bg-green-900/30 text-green-400' :
                    project.status === 'In Progress' ? 'bg-yellow-900/30 text-yellow-400' :
                    project.status === 'In Development' ? 'bg-blue-900/30 text-blue-400' :
                    'bg-gray-900/30 text-gray-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-[#94A3B8] mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-[#0A192F] text-[#4AA3FF] rounded text-xs border border-[#1B365D]">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#4AA3FF] hover:text-[#22D3EE] transition-colors"
                  >
                    View on GitHub
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://github.com/Abdurrahman-code19"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 glass-card hover:border-[#4AA3FF]/50 rounded-lg transition-all duration-300 font-medium inline-block"
            >
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#030508] to-[#07111F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{fontFamily: 'var(--font-sora)'}}>
              Work <span className="bg-gradient-to-r from-[#4AA3FF] to-[#22D3EE] bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-[#94A3B8] text-lg">My professional journey</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="glass-card p-6 rounded-xl">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#E2E8F0] mb-1">Frontend Development Tutor</h3>
                  <p className="text-[#4AA3FF] font-medium">RIIT GLOBAL TECH</p>
                </div>
                <span className="text-[#94A3B8] mt-2 md:mt-0">2026 - Present</span>
              </div>
              <ul className="space-y-2 text-[#94A3B8]">
                <li className="flex items-start"><span className="text-[#4AA3FF] mr-2">▸</span>Teach students frontend development fundamentals and practical coding techniques</li>
                <li className="flex items-start"><span className="text-[#4AA3FF] mr-2">▸</span>Guide learners through HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React</li>
                <li className="flex items-start"><span className="text-[#4AA3FF] mr-2">▸</span>Introduce Git and GitHub for source control</li>
                <li className="flex items-start"><span className="text-[#4AA3FF] mr-2">▸</span>Support practical assignments, debugging, and web development projects</li>
              </ul>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#E2E8F0] mb-1">Frontend Developer</h3>
                  <p className="text-[#4AA3FF] font-medium">Independent Projects</p>
                </div>
                <span className="text-[#94A3B8] mt-2 md:mt-0">Ongoing</span>
              </div>
              <ul className="space-y-2 text-[#94A3B8]">
                <li className="flex items-start"><span className="text-[#4AA3FF] mr-2">▸</span>Develop responsive and user-friendly web interfaces</li>
                <li className="flex items-start"><span className="text-[#4AA3FF] mr-2">▸</span>Translate design ideas into functional web pages</li>
                <li className="flex items-start"><span className="text-[#4AA3FF] mr-2">▸</span>Explore backend integration and full-stack application development</li>
                <li className="flex items-start"><span className="text-[#4AA3FF] mr-2">▸</span>Build personal and practical projects to improve technical skills</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{fontFamily: 'var(--font-sora)'}}>
              Education & <span className="bg-gradient-to-r from-[#4AA3FF] to-[#22D3EE] bg-clip-text text-transparent">Certifications</span>
            </h2>
            <p className="text-[#94A3B8] text-lg">Academic background and professional certifications</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#E2E8F0] mb-2">Miva Open University</h3>
              <p className="text-[#4AA3FF] mb-2">B.Sc. in Computer Science</p>
              <p className="text-[#94A3B8]">Undergraduate • 100 Level • 2026 - Present</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#E2E8F0] mb-2">Muslim Kids and Teens College (MTC)</h3>
              <p className="text-[#4AA3FF] mb-2">Secondary Education</p>
              <p className="text-[#94A3B8]">Graduated 2024</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Image src="/assets/certs/plp cert.png" alt="PLP Academy Certificate" width={60} height={60} className="rounded-lg mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-[#E2E8F0]">Software Development Certificate</h3>
                  <p className="text-[#4AA3FF]">PLP Academy</p>
                </div>
              </div>
              <p className="text-[#94A3B8] text-sm">Software development training and certification</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Image src="/assets/certs/freeCodeCamp Responsive Web Design Certificate.png" alt="freeCodeCamp Certificate" width={60} height={60} className="rounded-lg mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-[#E2E8F0]">Responsive Web Design Certification</h3>
                  <p className="text-[#4AA3FF]">freeCodeCamp</p>
                </div>
              </div>
              <p className="text-[#94A3B8] text-sm">Responsive web design and frontend fundamentals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#030508] to-[#07111F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{fontFamily: 'var(--font-sora)'}}>
              Get In <span className="bg-gradient-to-r from-[#4AA3FF] to-[#22D3EE] bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-[#94A3B8] text-lg">Let's discuss your next project or opportunity</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="mailto:abefeori@gmail.com" className="glass-card p-6 rounded-xl hover:border-[#4AA3FF]/50 transition-all duration-300 group text-center">
              <div className="text-[#4AA3FF] mb-3 group-hover:scale-110 transition-transform text-2xl">✉️</div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-[#94A3B8] text-sm break-all">abefeori@gmail.com</p>
            </a>
            <a href="tel:+2349161734798" className="glass-card p-6 rounded-xl hover:border-[#4AA3FF]/50 transition-all duration-300 group text-center">
              <div className="text-[#4AA3FF] mb-3 group-hover:scale-110 transition-transform text-2xl">📱</div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-[#94A3B8] text-sm">+234 916 173 4798</p>
            </a>
            <a href="https://wa.me/2348120211441" target="_blank" rel="noopener noreferrer" className="glass-card p-6 rounded-xl hover:border-[#4AA3FF]/50 transition-all duration-300 group text-center">
              <div className="text-[#4AA3FF] mb-3 group-hover:scale-110 transition-transform text-2xl">💬</div>
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-[#94A3B8] text-sm">0812 021 1441</p>
            </a>
            <a href="https://linkedin.com/in/abdurrahman-oriolowo-aba188352" target="_blank" rel="noopener noreferrer" className="glass-card p-6 rounded-xl hover:border-[#4AA3FF]/50 transition-all duration-300 group text-center">
              <div className="text-[#4AA3FF] mb-3 group-hover:scale-110 transition-transform text-2xl">💼</div>
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-[#94A3B8] text-sm">Connect with me</p>
            </a>
          </div>
          <div className="text-center mt-8">
            <a href="https://github.com/Abdurrahman-code19" target="_blank" rel="noopener noreferrer" className="glass-card px-6 py-3 rounded-lg hover:border-[#4AA3FF]/50 transition-all duration-300 inline-flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              github.com/Abdurrahman-code19
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[#12263F]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image 
                src="/assets/logos/AKAZA-footer-logo.png" 
                alt="AKAZA Logo" 
                width={100} 
                height={35}
                className="h-8 w-auto"
              />
              <div>
                <p className="font-semibold" style={{fontFamily: 'var(--font-sora)'}}>AKAZA</p>
                <p className="text-sm text-[#94A3B8]">Code with purpose. Build with impact.</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-[#94A3B8] text-sm">
                © 2025 Abdurrahman Oriolowo. All rights reserved.
              </p>
              <p className="text-[#94A3B8] text-sm mt-1">
                Frontend Developer • Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
