import React, { useState } from 'react';
import {
  Briefcase,
  Flame,
  ShieldCheck,
  Sparkles,
  FileEdit,
  Target,
  Mic,
  Map,
  Share2,
  Settings,
  Search,
  Bell,
  GraduationCap,
  Building2,
  CheckCircle2,
  TrendingUp,
  Award,
  Zap,
  Check,
  ArrowRight,
  ScanLine,
  Cpu,
  Info,
  History,
  ChevronRight,
  RefreshCw,
  Edit3,
  UserCheck,
  Upload,
  FileText,
  Scan,
  Radio,
  ListOrdered,
  Users,
  FileCheck,
  Play,
  MapPin,
  Eye,
  Edit,
  Linkedin,
  Download,
  ArrowLeftRight
} from 'lucide-react';

// Data Types
export interface DriveItem {
  id: string;
  company: string;
  role: string;
  packageLpa: string;
  badge: string;
  description: string;
  voicePackName: string;
  tagColor: string;
}

export interface PastAuditItem {
  id: string;
  name: string;
  date: string;
  score: number;
  tier: string;
}

export interface StagedRoadmapItem {
  period: string;
  title: string;
  timeCommitment: string;
  description: string;
  colorClass: string;
}

export const StudentDashboard: React.FC = () => {
  // Navigation State
  const [activeTab, setActiveTab] = useState<
    'drives' | 'sprints' | 'vault' | 'resume-intelligence' | 'resume-studio' | 'job-fit' | 'interview-lab' | 'skill-roadmap' | 'linkedin-optimizer'
  >('drives');

  // Notifications State
  const [showNotifications, setShowNotifications] = useState(false);

  // Resume Intelligence State
  const [resumeInputMode, setResumeInputMode] = useState<'paste' | 'upload'>('paste');
  const [resumeText, setResumeText] = useState(
    'ABHISHEK MISHRA\nSoftware Engineering Student | B.Tech CSE (2026 Batch)\nCGPA: 8.8 / 10\n\nSUMMARY:\nMotivated Full Stack Developer with strong foundations in Data Structures, Algorithms, Cloud Microservices, and Modern React applications. Experienced with Next.js, Node.js, and CI/CD pipelines.\n\nCORE TECHNICAL SKILLS:\nLanguages: Python, JavaScript (ES6+), TypeScript, Java, SQL\nFrameworks: React.js, Tailwind CSS, Express, Docker, AWS (S3, EC2)'
  );

  // Resume Studio State
  const [studioMode, setStudioMode] = useState<'rebuild' | 'quick-edit' | 'jd-tailor' | 'first-resume'>('rebuild');
  const [studioInstructions, setStudioInstructions] = useState('');
  const [studioTone, setStudioTone] = useState('Impact-driven');

  // Job Fit State
  const [targetJd, setTargetJd] = useState(
    'We are seeking a Cloud Solutions & SDE Associate with strong experience in Python, AWS (EC2, S3, Lambda), Distributed Systems, REST APIs, and Docker containerization. Candidates must possess solid Computer Science fundamentals (OOP, DSA) and excellent communication skills for cross-functional collaboration.'
  );
  const [fitAnalyzed, setFitAnalyzed] = useState(true);

  // AI Interview Lab State
  const [labMode, setLabMode] = useState<'studio' | 'drill'>('studio');
  const [questionCount, setQuestionCount] = useState<number>(6);

  // LinkedIn State
  const [linkedinUrl, setLinkedinUrl] = useState('https://www.linkedin.com/in/abhishekmishra-aivi');
  const [linkedinAnalyzed, setLinkedinAnalyzed] = useState(true);

  // Corporate Drives Data
  const drivesData: DriveItem[] = [
    {
      id: 'tcs',
      company: 'TCS Digital',
      role: 'Systems Engineer & Full Stack Developer',
      packageLpa: '₹7.5 LPA',
      badge: 'Eligible',
      description: 'Seeking CSE/ECE 2026 graduates proficient in Data Structures, React, Node.js, and Cloud Fundamentals.',
      voicePackName: 'TCS Digital AI Voice Pack',
      tagColor: 'from-blue-600 to-indigo-700'
    },
    {
      id: 'aws',
      company: 'Amazon AWS India',
      role: 'Cloud Solutions & SDE Associate',
      packageLpa: '₹18.0 LPA',
      badge: 'Eligible',
      description: 'Looking for high-performing 2026 candidates with strong System Design, AWS Basics, and Python/Java skills.',
      voicePackName: 'Amazon AWS AI Voice Pack',
      tagColor: 'from-amber-500 to-orange-600'
    },
    {
      id: 'acn',
      company: 'Accenture Tech',
      role: 'Advanced App Engineering Analyst',
      packageLpa: '₹4.5 LPA',
      badge: 'Eligible',
      description: 'Hiring all 2026 branch graduates for enterprise software engineering, consulting, and AI solutions.',
      voicePackName: 'Accenture AI Voice Pack',
      tagColor: 'from-violet-600 to-purple-700'
    }
  ];

  // Past Audits
  const pastAudits: PastAuditItem[] = [
    { id: '1', name: 'Software Engineer Draft v2', date: 'Scanned Yesterday · Tech Stack Match', score: 84, tier: 'Tier A' },
    { id: '2', name: 'Frontend Dev Intern', date: 'Scanned 4 days ago · React Focus', score: 78, tier: 'Tier B+' },
    { id: '3', name: 'Product Analyst Master', date: 'Scanned Oct 12, 2025', score: 65, tier: 'Tier C' }
  ];

  // Staged Roadmap
  const roadmapStages: StagedRoadmapItem[] = [
    {
      period: '30-DAY SPRINT · FOUNDATIONS',
      title: 'Docker Containerization & AWS Core',
      timeCommitment: '15 hrs/week',
      description: 'Containerize full-stack Express/React apps, deploy to AWS ECS, master IAM roles and S3 bucket security.',
      colorClass: 'text-emerald-400'
    },
    {
      period: '60-DAY GROWTH · DISTRIBUTED SYSTEMS',
      title: 'Redis Semantic Caching & Microservice Scaling',
      timeCommitment: '12 hrs/week',
      description: 'Implement Redis cache-aside patterns, rate-limiting algorithms (Token Bucket), and message brokers (RabbitMQ).',
      colorClass: 'text-indigo-400'
    },
    {
      period: '90-DAY MASTERY · ARCHITECTURE',
      title: 'High-Throughput System Design',
      timeCommitment: '10 hrs/week',
      description: 'Design URL shortener, distributed payment gateway, and mock interviews on CAP theorem and database sharding.',
      colorClass: 'text-rose-400'
    }
  ];

  return (
    <div className="min-h-screen bg-[#080d1a] text-slate-100 flex font-sans antialiased">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 flex-shrink-0 bg-[#0a0f1d] border-r border-slate-800/80 flex flex-col justify-between fixed top-0 bottom-0 left-0 z-30 select-none">
        <div className="p-4 flex flex-col h-full overflow-y-auto">
          
          {/* Brand Header */}
          <div className="mb-5">
            <div className="flex items-center space-x-3 px-2 py-1">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-rose-500 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="font-extrabold text-base tracking-tight text-white">Campus<span className="text-rose-500">OS</span></span>
                  <span className="text-[10px] uppercase font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30 px-1.5 py-0.5 rounded">Student</span>
                </div>
                <p className="text-[11px] text-slate-400 font-medium">Placement & Career Intelligence</p>
              </div>
            </div>

            {/* Institutional Badge */}
            <div className="mt-3 px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-2 truncate">
                <Building2 className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-300 truncate">Sunrise Institute of Tech</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20"></span>
            </div>
          </div>

          {/* Quick Switch to TPO View */}
          <div className="mb-4 px-1">
            <a 
              href="index.html" 
              className="flex items-center justify-between w-full px-3 py-2 rounded-lg bg-gradient-to-r from-slate-900 to-indigo-950/60 border border-indigo-900/50 hover:border-indigo-500/60 text-slate-300 hover:text-white transition group"
            >
              <div className="flex items-center space-x-2">
                <ArrowLeftRight className="w-4 h-4 text-indigo-400 group-hover:rotate-180 transition-transform duration-300" />
                <span className="text-xs font-medium">Switch to TPO Command</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-6 flex-1 text-xs font-medium">
            
            {/* Group 1: Institutional Placement Hub */}
            <div>
              <div className="px-3 mb-2 flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Institutional Placement Hub</span>
              </div>
              <div className="space-y-1">
                <button
                  onClick={() => setActiveTab('drives')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition ${
                    activeTab === 'drives' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Briefcase className="w-4 h-4 text-rose-400" />
                  <span>My Placement Drives</span>
                  <span className="ml-auto bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[10px] px-1.5 py-0.5 rounded-full font-bold">3 Live</span>
                </button>

                <button
                  onClick={() => setActiveTab('sprints')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition ${
                    activeTab === 'sprints' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>7-Day Sprints</span>
                  <span className="ml-auto bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] px-1.5 py-0.5 rounded-full font-bold">Active</span>
                </button>

                <button
                  onClick={() => setActiveTab('vault')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition ${
                    activeTab === 'vault' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>My Verified Resume</span>
                  <span className="ml-auto text-[10px] text-emerald-400 font-bold">AES 88</span>
                </button>
              </div>
            </div>

            {/* Group 2: AI Career Intelligence Suite */}
            <div>
              <div className="px-3 mb-2 flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">AI Career Intelligence Suite</span>
              </div>
              <div className="space-y-1">
                <button
                  onClick={() => setActiveTab('resume-intelligence')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition ${
                    activeTab === 'resume-intelligence' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <span>Resume Intelligence</span>
                </button>

                <button
                  onClick={() => setActiveTab('resume-studio')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition ${
                    activeTab === 'resume-studio' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <FileEdit className="w-4 h-4 text-cyan-400" />
                  <span>Resume Studio</span>
                  <span className="ml-auto bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[9px] px-1 py-0.5 rounded uppercase font-bold">v3.4</span>
                </button>

                <button
                  onClick={() => setActiveTab('job-fit')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition ${
                    activeTab === 'job-fit' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Target className="w-4 h-4 text-pink-400" />
                  <span>Job Fit Analysis</span>
                </button>

                <button
                  onClick={() => setActiveTab('interview-lab')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition ${
                    activeTab === 'interview-lab' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Mic className="w-4 h-4 text-violet-400" />
                  <span>AI Interview Lab</span>
                  <span className="ml-auto w-2 h-2 rounded-full bg-violet-400 animate-ping"></span>
                </button>

                <button
                  onClick={() => setActiveTab('skill-roadmap')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition ${
                    activeTab === 'skill-roadmap' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Map className="w-4 h-4 text-emerald-400" />
                  <span>Skill Roadmap</span>
                </button>

                <button
                  onClick={() => setActiveTab('linkedin-optimizer')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition ${
                    activeTab === 'linkedin-optimizer' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Share2 className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn Optimizer</span>
                </button>
              </div>
            </div>

          </nav>

          {/* Account Footer */}
          <div className="pt-4 border-t border-slate-800/80 mt-auto">
            <div className="flex items-center justify-between p-2 rounded-xl bg-slate-900/60 border border-slate-800/60">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-rose-500 flex items-center justify-center font-bold text-xs text-white">
                  AM
                </div>
                <div className="truncate">
                  <p className="text-xs font-semibold text-white truncate">Abhishek Mishra</p>
                  <p className="text-[10px] text-slate-400 truncate">B.Tech CSE · Batch 2026</p>
                </div>
              </div>
              <button className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition">
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </aside>

      {/* Main Canvas Area */}
      <main className="ml-64 flex-1 flex flex-col min-w-0 bg-[#080d1a]">
        
        {/* Top Header */}
        <header className="h-16 border-b border-slate-800/80 px-8 flex items-center justify-between sticky top-0 bg-[#080d1a]/85 backdrop-blur-md z-20">
          
          {/* Search Box */}
          <div className="relative w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search corporate drives, skills, interview packs or ask CampusOS..." 
              className="w-full bg-slate-900/80 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-500 bg-slate-800/80 px-1.5 py-0.5 rounded border border-slate-700/50">⌘K</span>
          </div>

          {/* Right Header Utilities */}
          <div className="flex items-center space-x-4">
            
            <a 
              href="index.html" 
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 hover:bg-indigo-500/20 transition"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>TPO Command Center</span>
            </a>

            <div className="hidden lg:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Placement Season 2025-26 Active</span>
            </div>

            {/* Notification Dropdown Toggle */}
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)} 
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white relative transition"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-[10px] font-bold rounded-full flex items-center justify-center text-white ring-2 ring-[#080d1a]">3</span>
              </button>
            </div>

            {/* Student Profile Pill */}
            <div className="flex items-center space-x-3 pl-2 border-l border-slate-800">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-rose-500 flex items-center justify-center font-bold text-xs text-white">
                AM
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-xs font-semibold text-slate-200">Abhishek Mishra</p>
                <p className="text-[10px] text-slate-400">CGPA 8.8 · CSE</p>
              </div>
            </div>

          </div>
        </header>

        {/* Dynamic Workspace Container */}
        <div className="p-8 max-w-7xl w-full mx-auto space-y-8 flex-1">
          
          {/* TAB 1: MY PLACEMENT DRIVES */}
          {activeTab === 'drives' && (
            <section className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs uppercase font-bold tracking-widest text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2.5 py-0.5 rounded-full">
                      Active Placement Season
                    </span>
                    <span className="text-xs text-slate-400">Academic Year 2025-26</span>
                  </div>
                  <h1 className="text-3xl font-extrabold text-white tracking-tight">My Placement Drives</h1>
                  <p className="text-sm text-slate-400 mt-1 max-w-3xl leading-relaxed">
                    Live corporate campus drives posted by your T&P cell. Compare your verified resume with job descriptions, run JD match tests, and launch company-specific interview prep.
                  </p>
                </div>
                <button 
                  onClick={() => setActiveTab('sprints')}
                  className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-semibold text-xs shadow-lg shadow-rose-500/25 transition"
                >
                  <Zap className="w-4 h-4" />
                  <span>Launch New AI Sprint</span>
                </button>
              </div>

              {/* Metric Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl">
                  <div className="flex items-center justify-between text-slate-400 text-xs">
                    <span>Verified Eligibility</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-2xl font-bold text-white mt-2">18 Drives</p>
                  <p className="text-[11px] text-emerald-400 mt-1">100% criteria matched</p>
                </div>

                <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl">
                  <div className="flex items-center justify-between text-slate-400 text-xs">
                    <span>Highest Package Active</span>
                    <TrendingUp className="w-4 h-4 text-rose-400" />
                  </div>
                  <p className="text-2xl font-bold text-white mt-2">₹18.0 LPA</p>
                  <p className="text-[11px] text-slate-400 mt-1">Amazon AWS India</p>
                </div>

                <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl">
                  <div className="flex items-center justify-between text-slate-400 text-xs">
                    <span>Employability Score (AES)</span>
                    <Award className="w-4 h-4 text-indigo-400" />
                  </div>
                  <p className="text-2xl font-bold text-white mt-2">88<span className="text-sm text-slate-400">/100</span></p>
                  <p className="text-[11px] text-indigo-400 mt-1">Tier A+ Institutional Rank</p>
                </div>

                <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl">
                  <div className="flex items-center justify-between text-slate-400 text-xs">
                    <span>Interview Readiness</span>
                    <Zap className="w-4 h-4 text-amber-400" />
                  </div>
                  <p className="text-2xl font-bold text-white mt-2">92% Ready</p>
                  <p className="text-[11px] text-amber-400 mt-1">3 Voice Mocks Completed</p>
                </div>
              </div>

              {/* Drives Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                {drivesData.map(d => (
                  <div key={d.id} className="bg-slate-900/70 border border-slate-800 hover:border-indigo-500/40 p-6 rounded-2xl flex flex-col justify-between transition">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${d.tagColor} flex items-center justify-center font-bold text-white text-sm shadow`}>
                          {d.company.substring(0, 3).toUpperCase()}
                        </div>
                        <span className="flex items-center space-x-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full text-xs font-semibold">
                          <Check className="w-3 h-3" />
                          <span>{d.badge}</span>
                        </span>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white">{d.company}</h3>
                        <p className="text-xs font-medium text-slate-400 mt-0.5">{d.role}</p>
                      </div>

                      <div>
                        <span className="text-[11px] font-bold text-slate-400 tracking-wider">PACKAGE</span>
                        <p className="text-2xl font-extrabold text-white">{d.packageLpa}</p>
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed">{d.description}</p>

                      <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Mic className="w-4 h-4 text-indigo-400" />
                          <span className="text-xs font-semibold text-slate-300">{d.voicePackName}</span>
                        </div>
                        <button 
                          onClick={() => setActiveTab('interview-lab')}
                          className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center space-x-1"
                        >
                          <span>Open Pack</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <button 
                      onClick={() => {
                        setTargetJd(`Target: ${d.company} (${d.packageLpa}) - ${d.role}\nRequirements: ${d.description}`);
                        setActiveTab('job-fit');
                      }}
                      className="w-full mt-5 py-2.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 font-semibold text-xs flex items-center justify-center space-x-2 transition"
                    >
                      <ScanLine className="w-4 h-4" />
                      <span>Run Job Fit Match</span>
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* TAB 2: RESUME INTELLIGENCE */}
          {activeTab === 'resume-intelligence' && (
            <section className="space-y-6">
              <div className="pb-6 border-b border-slate-800/80">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs uppercase font-bold tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-full">
                    AI Career Intelligence Suite
                  </span>
                  <span className="text-xs text-slate-400">v3.4 Neural Architecture</span>
                </div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">Resume Intelligence & ATS Audit</h1>
                <p className="text-sm text-slate-400 mt-1 max-w-3xl leading-relaxed">
                  Upload your PDF or paste your resume text to compute your institutional Employability Score (AES), keyword density, STAR metrics, and AI rewrite recommendations.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8 space-y-6">
                  <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                          <Cpu className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-white">Resume Intelligence Engine</h3>
                          <p className="text-xs text-slate-400">Automated Forensic Diagnostic</p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                        v3.4 Neural
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      The Resume Intelligence Engine performs a comprehensive analysis of your resume across six critical dimensions: ATS compatibility, keyword optimization, technical depth, leadership signals, quantification of achievements, and overall clarity.
                    </p>

                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 flex items-start space-x-2">
                      <Info className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Inputs required:</strong> Your resume text or PDF file (up to 10MB). <strong>What you receive:</strong> A print-ready rebuilt resume draft using your existing experience and inputs.
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
                        <button
                          onClick={() => setResumeInputMode('paste')}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                            resumeInputMode === 'paste' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Paste Text
                        </button>
                        <button
                          onClick={() => setResumeInputMode('upload')}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                            resumeInputMode === 'upload' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Upload PDF
                        </button>
                      </div>
                      <span className="text-xs text-slate-500 font-mono">{resumeText.length} characters</span>
                    </div>

                    {resumeInputMode === 'paste' ? (
                      <textarea
                        rows={9}
                        value={resumeText}
                        onChange={e => setResumeText(e.target.value)}
                        placeholder="Paste your resume text here..."
                        className="w-full bg-slate-950/70 border border-slate-800 rounded-xl p-4 text-xs font-mono text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition resize-none"
                      />
                    ) : (
                      <div className="border-2 border-dashed border-slate-800 hover:border-indigo-500/60 rounded-xl p-8 text-center bg-slate-950/40 cursor-pointer">
                        <Upload className="w-10 h-10 text-indigo-400 mx-auto mb-2" />
                        <p className="text-xs font-semibold text-slate-200">Drag & drop your resume PDF here</p>
                        <p className="text-[11px] text-slate-500 mt-1">Supports PDF up to 10MB · Taleo & Workday certified</p>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                      <div className="flex items-center space-x-2 text-xs text-slate-400">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>ATS Parsers: Taleo, Workday, Greenhouse certified</span>
                      </div>
                      <button 
                        onClick={() => alert('Scanning resume with AIVI v3.4 Neural... AES Score: 88/100 (Tier A+)')}
                        className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 text-white font-semibold text-xs shadow-lg shadow-indigo-500/25 flex items-center justify-center space-x-2 transition"
                      >
                        <span>Build Resume Draft</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Past Scan History */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div className="flex items-center space-x-2">
                        <History className="w-4 h-4 text-indigo-400" />
                        <h3 className="text-sm font-bold text-white">Past Resume Analysis History</h3>
                      </div>
                      <button className="text-xs text-indigo-400 hover:underline">View all</button>
                    </div>

                    <div className="space-y-3">
                      {pastAudits.map(pa => (
                        <div key={pa.id} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="text-xs font-bold text-white">{pa.name}</h4>
                              <p className="text-[10px] text-slate-400">{pa.date}</p>
                            </div>
                            <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                              {pa.score}/100
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-[11px] pt-1 border-t border-slate-800/80">
                            <span className="text-slate-400">AES Index: <strong className="text-emerald-400">{pa.tier}</strong></span>
                            <span className="text-indigo-400 cursor-pointer hover:underline">Audit Report</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* TAB 3: RESUME STUDIO */}
          {activeTab === 'resume-studio' && (
            <section className="space-y-6">
              <div className="pb-6 border-b border-slate-800/80">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs uppercase font-bold tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-full">
                    RESUME STUDIO
                  </span>
                  <span className="text-xs text-slate-400">Interactive Career Studio</span>
                </div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">Choose the right resume workflow before you generate the draft</h1>
                <p className="text-sm text-slate-400 mt-1 max-w-3xl leading-relaxed">
                  Resume Studio now supports four Phase 1 entry paths. Users can rebuild a resume, guide small edits, tailor to a JD, or create a first resume from fresher inputs without changing the backend analysis engine.
                </p>
              </div>

              {/* 4 Paths */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div 
                  onClick={() => setStudioMode('rebuild')}
                  className={`p-5 rounded-2xl cursor-pointer border transition space-y-3 ${
                    studioMode === 'rebuild' ? 'border-2 border-cyan-500 bg-cyan-950/20' : 'bg-slate-900/60 border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/20 px-2 py-0.5 rounded">LIVE</span>
                    <RefreshCw className="w-4 h-4 text-cyan-400" />
                  </div>
                  <h3 className="text-base font-bold text-white">Full Rebuild</h3>
                  <p className="text-xs text-slate-400">Upload or paste current resume and rebuild it into a stronger draft.</p>
                </div>

                <div 
                  onClick={() => setStudioMode('quick-edit')}
                  className={`p-5 rounded-2xl cursor-pointer border transition space-y-3 ${
                    studioMode === 'quick-edit' ? 'border-2 border-cyan-500 bg-cyan-950/20' : 'bg-slate-900/60 border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">LIVE</span>
                    <Edit3 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h3 className="text-base font-bold text-white">Quick Edit</h3>
                  <p className="text-xs text-slate-400">Guide AIVI on what to change in your existing resume instead of a complete rewrite.</p>
                </div>

                <div 
                  onClick={() => setStudioMode('jd-tailor')}
                  className={`p-5 rounded-2xl cursor-pointer border transition space-y-3 ${
                    studioMode === 'jd-tailor' ? 'border-2 border-cyan-500 bg-cyan-950/20' : 'bg-slate-900/60 border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/20 px-2 py-0.5 rounded">LIVE</span>
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                  </div>
                  <h3 className="text-base font-bold text-white">JD Tailor</h3>
                  <p className="text-xs text-slate-400">Tailor your resume to a target job description and role while preserving key achievements.</p>
                </div>

                <div 
                  onClick={() => setStudioMode('first-resume')}
                  className={`p-5 rounded-2xl cursor-pointer border transition space-y-3 ${
                    studioMode === 'first-resume' ? 'border-2 border-cyan-500 bg-cyan-950/20' : 'bg-slate-900/60 border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 bg-rose-500/20 px-2 py-0.5 rounded">LIVE</span>
                    <UserCheck className="w-4 h-4 text-rose-400" />
                  </div>
                  <h3 className="text-base font-bold text-white">First Resume</h3>
                  <p className="text-xs text-slate-400">Create a first ATS-ready resume from structured fresher inputs without prior files.</p>
                </div>
              </div>

              {/* Form Box */}
              <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-6">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-300">
                    What would you like changed? (Guided Instructions)
                  </label>
                  <textarea
                    rows={3}
                    value={studioInstructions}
                    onChange={e => setStudioInstructions(e.target.value)}
                    placeholder="Example: Improve the summary, shorten weak bullets, add stronger metrics, and make the resume more ATS friendly."
                    className="w-full bg-slate-950/70 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <span className="text-xs text-slate-400">Quick chips:</span>
                  <div className="flex flex-wrap gap-2">
                    {['Make it more ATS friendly', 'Shorten to 1 page', 'Rewrite experience section', 'Add stronger metrics', 'Tailor for product roles'].map(chip => (
                      <button
                        key={chip}
                        type="button"
                        onClick={() => setStudioInstructions(prev => (prev ? `${prev}, ${chip}` : chip))}
                        className="text-xs px-3 py-1 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 transition"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300">Target Role</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Senior Frontend Engineer, Cloud Solutions Architect" 
                      className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300">Resume Tone</label>
                    <div className="grid grid-cols-5 gap-2">
                      {['Impact-driven', 'Executive', 'Concise', 'Technical', 'Creative'].map(tone => (
                        <button
                          key={tone}
                          type="button"
                          onClick={() => setStudioTone(tone)}
                          className={`py-2 text-[11px] font-semibold rounded-lg transition ${
                            studioTone === tone ? 'bg-cyan-600 text-white' : 'bg-slate-950 text-slate-400 border border-slate-800'
                          }`}
                        >
                          {tone}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-slate-800">
                  <button 
                    onClick={() => alert('Generating role-tailored resume draft...')}
                    className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 text-white font-bold text-xs shadow-lg shadow-cyan-500/25 flex items-center space-x-2 transition"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Generate Rebuilt Resume Draft</span>
                  </button>
                </div>
              </div>
            </section>
          )}

          {/* TAB 4: JOB FIT ANALYSIS */}
          {activeTab === 'job-fit' && (
            <section className="space-y-6">
              <div className="pb-6 border-b border-slate-800/80">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs uppercase font-bold tracking-widest text-pink-400 bg-pink-500/10 border border-pink-500/20 px-2.5 py-0.5 rounded-full">
                    CURRENT LIVE PATH
                  </span>
                  <span className="text-xs text-slate-400">Resume + JD Workspace</span>
                </div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">Job Fit & Skill Overlap Analyzer</h1>
                <p className="text-sm text-slate-400 mt-1 max-w-3xl leading-relaxed">
                  Directly test how your verified resume aligns against specific corporate requirements before applying.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl flex flex-col space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                        <span className="text-xs font-bold text-white flex items-center space-x-1.5">
                          <FileText className="w-4 h-4 text-indigo-400" />
                          <span>Your Resume</span>
                        </span>
                        <span className="text-[11px] text-indigo-400">Preloaded</span>
                      </div>
                      <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs font-mono text-slate-300 space-y-2 h-64 overflow-y-auto">
                        <p className="font-bold text-white">ABHISHEK MISHRA</p>
                        <p className="text-[11px] text-slate-400">Software Engineering Student | B.Tech CSE (2026 Batch)</p>
                        <p className="text-[11px] text-indigo-400">SUMMARY:</p>
                        <p className="text-[11px] text-slate-300">Motivated Full Stack Developer with strong foundations in Data Structures, Algorithms, Cloud Microservices, and Modern React applications.</p>
                      </div>
                    </div>

                    <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl flex flex-col space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                        <span className="text-xs font-bold text-white flex items-center space-x-1.5">
                          <Briefcase className="w-4 h-4 text-pink-400" />
                          <span>Target Job Description</span>
                        </span>
                        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Auto-detect</span>
                      </div>
                      <textarea
                        rows={9}
                        value={targetJd}
                        onChange={e => setTargetJd(e.target.value)}
                        className="w-full h-64 bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs font-mono text-slate-200 focus:outline-none focus:border-pink-500 resize-none"
                      />
                    </div>
                  </div>

                  <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-white">Ready to run deep semantic match?</h4>
                      <p className="text-[11px] text-slate-400">Calculates shortlist probability, keyword overlap, and missing skills severity.</p>
                    </div>
                    <button 
                      onClick={() => setFitAnalyzed(true)}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold text-xs flex items-center space-x-2 shadow"
                    >
                      <Scan className="w-4 h-4" />
                      <span>Analyze Job Fit</span>
                    </button>
                  </div>
                </div>

                {/* Fit Results Card */}
                <div className="lg:col-span-4 space-y-6">
                  {fitAnalyzed && (
                    <div className="bg-slate-900/60 border-2 border-emerald-500/40 p-5 rounded-2xl space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-emerald-400">SHORTLIST PROBABILITY</span>
                        <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">HIGH</span>
                      </div>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-4xl font-extrabold text-white">88%</span>
                        <span className="text-xs text-slate-400">Overall Match</span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between text-[11px]">
                          <span className="text-slate-400">Technical Skill Match</span>
                          <span className="text-white font-bold">92%</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-1.5">
                          <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '92%' }}></div>
                        </div>

                        <div className="flex justify-between text-[11px] pt-1">
                          <span className="text-slate-400">Experience & Projects</span>
                          <span className="text-white font-bold">85%</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-1.5">
                          <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-300">
                        <strong className="text-emerald-400">Recommendation:</strong> Add AWS Lambda and distributed systems bullet points to reach 96% match.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* TAB 5: AI INTERVIEW LAB */}
          {activeTab === 'interview-lab' && (
            <section className="space-y-6">
              <div className="pb-6 border-b border-slate-800/80">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs uppercase font-bold tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2.5 py-0.5 rounded-full">
                    Full-Duplex Bilingual Telemetry
                  </span>
                  <span className="text-xs text-slate-400">Sarvam AI Powered</span>
                </div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">AI Interview Lab</h1>
                <p className="text-sm text-slate-400 mt-1 max-w-3xl leading-relaxed">
                  Practice and master campus interviews with real-time speech telemetry. Pick an interviewer persona, talk freely through your microphone with zero turn delays, and get forensic feedback on STAR rubrics and filler words.
                </p>
              </div>

              {/* Mode Toggle */}
              <div className="flex items-center space-x-3 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800 max-w-md">
                <button
                  onClick={() => setLabMode('studio')}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center space-x-2 ${
                    labMode === 'studio' ? 'bg-violet-600 text-white shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Radio className="w-4 h-4" />
                  <span>Real-Time Voice Studio</span>
                </button>
                <button
                  onClick={() => setLabMode('drill')}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center space-x-2 ${
                    labMode === 'drill' ? 'bg-violet-600 text-white shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <ListOrdered className="w-4 h-4" />
                  <span>Question-by-Question Drill</span>
                </button>
              </div>

              {/* Studio View */}
              {labMode === 'studio' ? (
                <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30">
                        2-Way Conversational Voice Interview
                      </span>
                      <h2 className="text-2xl font-extrabold text-white">Full-Duplex Real-Time Voice Studio</h2>
                      <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
                        Talk naturally through your microphone with zero turn-delays. Pick your target company (Accenture, TCS, Amazon), choose an interviewer persona, and receive an instant forensic diagnostic scorecard.
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        <span className="px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center space-x-1.5">
                          <Zap className="w-3.5 h-3.5 text-amber-400" />
                          <span>Full-Duplex Interruption</span>
                        </span>
                        <span className="px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center space-x-1.5">
                          <Users className="w-3.5 h-3.5 text-indigo-400" />
                          <span>4 Industry Personas</span>
                        </span>
                        <span className="px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center space-x-1.5">
                          <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Forensic Scorecard</span>
                        </span>
                      </div>

                      <div className="pt-4">
                        <button 
                          onClick={() => alert('Real-Time Voice Studio connected to Sarvam AI telemetry. Speak now into your microphone!')}
                          className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 to-indigo-600 hover:from-rose-600 text-white font-bold text-sm shadow-xl flex items-center space-x-3 transition"
                        >
                          <Mic className="w-5 h-5" />
                          <span>Launch Real-Time Live Studio</span>
                        </button>
                      </div>
                    </div>

                    <div className="lg:col-span-5 flex flex-col items-center justify-center p-6">
                      <div className="relative w-56 h-56 rounded-full bg-slate-950 border-2 border-indigo-500/40 flex items-center justify-center shadow-2xl">
                        <div className="flex items-center space-x-2">
                          <div className="w-2.5 bg-rose-500 rounded-full h-8 animate-pulse"></div>
                          <div className="w-2.5 bg-indigo-400 rounded-full h-12 animate-pulse"></div>
                          <div className="w-2.5 bg-violet-400 rounded-full h-6 animate-pulse"></div>
                          <div className="w-2.5 bg-cyan-400 rounded-full h-10 animate-pulse"></div>
                        </div>
                      </div>
                      <p className="text-xs font-bold text-white mt-4 flex items-center space-x-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                        <span>Campus AI Recruiter Active</span>
                      </p>
                      <p className="text-[11px] text-slate-500">Trained on 12,000+ campus hiring rounds</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-6">
                  <div className="space-y-1">
                    <h2 className="text-lg font-bold text-white">Structured Question-by-Question Practice</h2>
                    <p className="text-xs text-slate-400">Answer questions one by one with recorded answers, live speech transcription, and turn evaluations.</p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[3, 6, 10, 15].map(cnt => (
                      <div
                        key={cnt}
                        onClick={() => setQuestionCount(cnt)}
                        className={`p-3.5 rounded-xl cursor-pointer text-center space-y-1 transition ${
                          questionCount === cnt ? 'bg-violet-950/40 border-2 border-violet-500 shadow' : 'bg-slate-950 border border-slate-800'
                        }`}
                      >
                        <span className="text-[10px] font-bold text-slate-400">~{cnt * 2.5} Mins</span>
                        <p className="text-sm font-bold text-white">{cnt} Questions</p>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => alert(`Starting ${questionCount}-Question AI Mock Interview...`)}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center space-x-2 transition"
                  >
                    <Play className="w-4 h-4" />
                    <span>Start {questionCount}-Question AI Mock Interview</span>
                  </button>
                </div>
              )}
            </section>
          )}

          {/* TAB 6: SKILL ROADMAP */}
          {activeTab === 'skill-roadmap' && (
            <section className="space-y-6">
              <div className="pb-6 border-b border-slate-800/80">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs uppercase font-bold tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                    SKILL ROADMAP
                  </span>
                  <span className="text-xs text-slate-400">Autonomous Learning Tracks</span>
                </div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">Roadmap generation workspace</h1>
                <p className="text-sm text-slate-400 mt-1 max-w-3xl leading-relaxed">
                  Build a practical 30, 60, and 90-day learning roadmap based on targeted company roles and current verified competencies.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8 space-y-4">
                  <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-4">
                    {roadmapStages.map(stage => (
                      <div key={stage.period} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-bold ${stage.colorClass}`}>{stage.period}</span>
                          <span className="text-[10px] text-slate-400 font-mono">{stage.timeCommitment}</span>
                        </div>
                        <h4 className="text-sm font-bold text-white">{stage.title}</h4>
                        <p className="text-xs text-slate-400">{stage.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 space-y-6">
                  <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">WHAT YOU RECEIVE</h3>
                    <ul className="space-y-2.5 text-xs text-slate-400">
                      <li className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>Prioritized skills with importance and learning-time estimates.</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>Three staged plans for sprint, growth, and mastery timelines.</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>Free resources, paid courses, practical exercises, and portfolio projects.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* TAB 7: LINKEDIN OPTIMIZER */}
          {activeTab === 'linkedin-optimizer' && (
            <section className="space-y-6">
              <div className="pb-6 border-b border-slate-800/80">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs uppercase font-bold tracking-widest text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2.5 py-0.5 rounded-full">
                    PUBLIC CONVERSION SURFACE
                  </span>
                  <span className="text-xs text-slate-400">Recruiter Discovery</span>
                </div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">Optimize your LinkedIn profile for maximum recruiter visibility</h1>
                <p className="text-sm text-slate-400 mt-1 max-w-3xl leading-relaxed">
                  Analyze your profile like a conversion surface, not just a social page. This workspace scores visibility, positioning, authority tone, and keyword alignment.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl space-y-2">
                  <Eye className="w-5 h-5 text-sky-400" />
                  <h3 className="text-sm font-bold text-white">Search Visibility</h3>
                  <p className="text-xs text-slate-400">Review how recruiter-friendly your profile looks before they click.</p>
                </div>
                <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl space-y-2">
                  <Award className="w-5 h-5 text-indigo-400" />
                  <h3 className="text-sm font-bold text-white">Authority Tone</h3>
                  <p className="text-xs text-slate-400">Measure headline strength, positioning, and professional credibility.</p>
                </div>
                <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl space-y-2">
                  <Edit className="w-5 h-5 text-rose-400" />
                  <h3 className="text-sm font-bold text-white">Rewrite Layer</h3>
                  <p className="text-xs text-slate-400">Generate a stronger headline, about section, and experience rewrite.</p>
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Linkedin className="w-4 h-4 text-sky-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input 
                      type="text" 
                      value={linkedinUrl}
                      onChange={e => setLinkedinUrl(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-200 font-mono"
                    />
                  </div>
                  <button 
                    onClick={() => setLinkedinAnalyzed(true)}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-xs flex items-center space-x-2"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verify & Analyze</span>
                  </button>
                </div>

                {linkedinAnalyzed && (
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                      <span className="text-xs font-bold text-white">Profile Authority Score</span>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">86 / 100</span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="text-slate-400 font-semibold">Suggested Headline Rewrite:</span>
                        <p className="text-slate-200 bg-slate-900 p-2.5 rounded-lg border border-slate-800 font-mono text-[11px] mt-1">
                          Full-Stack Software Engineer | React, Next.js, Node.js & Distributed Systems | B.Tech CSE '26 | Building Autonomous AI Routing
                        </p>
                      </div>
                      <p className="text-emerald-400 text-[11px]">Top 8% keyword density for 2026 Campus SWE roles.</p>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* TAB 8: 7-DAY SPRINTS */}
          {activeTab === 'sprints' && (
            <section className="space-y-6">
              <div className="pb-6 border-b border-slate-800/80">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs uppercase font-bold tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
                    PLACEMENT READINESS SPRINT
                  </span>
                  <span className="text-xs text-slate-400">Day 4 of 7 Active</span>
                </div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">7-Day Placement Sprints</h1>
                <p className="text-sm text-slate-400 mt-1 max-w-3xl leading-relaxed">
                  Fast-track your technical and behavioral confidence through high-intensity daily sprint drills with automated scoring.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-900/60 border border-slate-800 border-l-4 border-l-emerald-500 p-5 rounded-2xl space-y-2">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase">DAY 1 - COMPLETED</span>
                  <h3 className="text-base font-bold text-white">Resume Studio Polish</h3>
                  <p className="text-xs text-slate-400">100% ATS score achieved on Taleo parser benchmark.</p>
                </div>
                <div className="bg-slate-900/60 border border-slate-800 border-l-4 border-l-emerald-500 p-5 rounded-2xl space-y-2">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase">DAY 2 - COMPLETED</span>
                  <h3 className="text-base font-bold text-white">DSA Speed Challenge</h3>
                  <p className="text-xs text-slate-400">Solved 4 Medium LeetCode problems within 45 minutes.</p>
                </div>
                <div className="bg-slate-900/60 border border-slate-800 border-l-4 border-l-amber-500 bg-amber-950/20 p-5 rounded-2xl space-y-2">
                  <span className="text-[10px] font-bold text-amber-400 uppercase">DAY 4 - TODAY</span>
                  <h3 className="text-base font-bold text-white">Sarvam Voice Mock: TCS Special</h3>
                  <p className="text-xs text-slate-300">Complete 6 conversational questions with bilingual voice telemetry.</p>
                </div>
              </div>
            </section>
          )}

          {/* TAB 9: VERIFIED RESUME VAULT */}
          {activeTab === 'vault' && (
            <section className="space-y-6">
              <div className="pb-6 border-b border-slate-800/80">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs uppercase font-bold tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                    CRYPTOGRAPHICALLY SEALED
                  </span>
                  <span className="text-xs text-slate-400">Sunrise Institute of Technology Registry</span>
                </div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">My Verified Resume Vault</h1>
                <p className="text-sm text-slate-400 mt-1 max-w-3xl leading-relaxed">
                  Your university-authenticated resume sealed with tamper-proof QR validation and instant recruiter verification.
                </p>
              </div>

              <div className="bg-slate-900/60 border border-emerald-500/30 p-8 rounded-3xl max-w-3xl mx-auto space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div>
                    <h2 className="text-xl font-bold text-white">Abhishek Mishra - Master Placement Draft</h2>
                    <p className="text-xs text-slate-400">Verified by TPO Office on 28 Sep 2026 · AES Score 88/100</p>
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-white p-1 shadow flex items-center justify-center">
                    <div className="w-full h-full bg-slate-950 rounded flex items-center justify-center text-[8px] font-mono text-emerald-400 text-center">
                      AIVI QR SEAL
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-xs text-slate-400">Taleo Match</span>
                    <p className="text-lg font-bold text-emerald-400">98%</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-xs text-slate-400">Workday Match</span>
                    <p className="text-lg font-bold text-emerald-400">96%</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-xs text-slate-400">Action Verbs</span>
                    <p className="text-lg font-bold text-indigo-400">100%</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <span className="text-xs text-slate-400">CIN: U62099UP2026PTC249169</span>
                  <button 
                    onClick={() => alert('Downloading sealed PDF...')}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center space-x-1.5 transition"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Sealed PDF</span>
                  </button>
                </div>
              </div>
            </section>
          )}

        </div>

        {/* Footer */}
        <footer className="border-t border-slate-800/80 py-6 px-8 text-center text-xs text-slate-500">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <span>CampusOS Student Suite &copy; 2026 AIVI Intelligence Private Limited. All rights reserved.</span>
            <span>CIN: U62099UP2026PTC249169 · DPIIT: #DIPP271794</span>
          </div>
        </footer>

      </main>

    </div>
  );
};

export default StudentDashboard;
