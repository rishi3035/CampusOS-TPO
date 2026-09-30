"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  Zap,
  Folder,
  Mic,
  ShieldCheck,
  CreditCard,
  UserCog,
  Settings,
  Search,
  Bell,
  ChevronLeft,
  ChevronRight,
  Send,
  GraduationCap,
  Download,
  Upload,
  Plus,
  Eye,
  Check,
  X,
  Sparkles,
  Radio,
  FileSpreadsheet,
  AlertTriangle,
  PhoneOff,
  Cpu,
  UserCheck,
  UserPlus,
  Star,
  BarChart3,
  Clock,
  Calendar,
} from "lucide-react";

// ==================== TYPES & INTERFACES ====================
export interface StudentRecord {
  id: string;
  name: string;
  avatar: string;
  enrollment: string;
  branch: "CSE" | "IT" | "ECE" | "Mechanical";
  batch: string;
  aes: number;
  readiness: "Industry Ready" | "Proficient" | "Developing" | "At Risk";
  lastActive: string;
  placementStatus: "Interview Ready" | "Placed" | "In Progress" | "Not Started" | "Needs Attention";
  cgpa?: number;
  outcome?: "Offered" | "Selected" | "Pending" | "Rejected";
  packageLpa?: string;
  resumeStatus?: "Submitted" | "Verified & Sealed";
  resumeVersion?: string;
}

const INITIAL_STUDENTS: StudentRecord[] = [
  { id: "1", name: "Aditya Sharma", avatar: "AS", enrollment: "CSE25-1048", branch: "CSE", batch: "2026", aes: 82, readiness: "Industry Ready", lastActive: "12 min ago", placementStatus: "Interview Ready", cgpa: 8.8, outcome: "Offered", packageLpa: "₹8.5 LPA", resumeStatus: "Submitted", resumeVersion: "v1.0" },
  { id: "2", name: "Rohan Mehta", avatar: "RM", enrollment: "CSE25-1182", branch: "CSE", batch: "2026", aes: 82, readiness: "Industry Ready", lastActive: "12 min ago", placementStatus: "Interview Ready", cgpa: 9.1, outcome: "Offered", packageLpa: "₹8.5 LPA", resumeStatus: "Submitted", resumeVersion: "v1.0" },
  { id: "3", name: "Priya Verma", avatar: "PV", enrollment: "ECE25-0874", branch: "ECE", batch: "2026", aes: 68, readiness: "Proficient", lastActive: "12 min ago", placementStatus: "Interview Ready", cgpa: 8.2, outcome: "Selected", resumeStatus: "Verified & Sealed", resumeVersion: "v1.0" },
  { id: "4", name: "Neha Patel", avatar: "NP", enrollment: "IT24-0935", branch: "IT", batch: "2025", aes: 74, readiness: "Proficient", lastActive: "12 min ago", placementStatus: "Placed", cgpa: 8.6, outcome: "Selected", resumeStatus: "Verified & Sealed", resumeVersion: "v1.0" },
  { id: "5", name: "Karan Singh", avatar: "KS", enrollment: "ME25-0621", branch: "Mechanical", batch: "2025", aes: 42, readiness: "Developing", lastActive: "12 min ago", placementStatus: "Placed", cgpa: 7.4, outcome: "Pending", resumeStatus: "Submitted", resumeVersion: "v1.0" },
  { id: "6", name: "Arjun Rao", avatar: "AR", enrollment: "CSE25-1264", branch: "CSE", batch: "2026", aes: 59, readiness: "Developing", lastActive: "Yesterday", placementStatus: "In Progress", cgpa: 7.8, outcome: "Pending", resumeStatus: "Submitted", resumeVersion: "v1.0" },
  { id: "7", name: "Vivek Nair", avatar: "VN", enrollment: "ME25-0559", branch: "Mechanical", batch: "2026", aes: 36, readiness: "At Risk", lastActive: "Yesterday", placementStatus: "Not Started", cgpa: 8.0, outcome: "Rejected", resumeStatus: "Submitted", resumeVersion: "v1.0" },
  { id: "8", name: "Karan Johar", avatar: "KJ", enrollment: "SIT2026007", branch: "CSE", batch: "2026", aes: 38, readiness: "At Risk", lastActive: "12d ago", placementStatus: "Needs Attention", cgpa: 6.4, outcome: "Rejected", resumeStatus: "Submitted", resumeVersion: "v1.0" },
];

export default function TpoCommandCenter() {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [branchFilter, setBranchFilter] = useState<string>("ALL");
  const [readinessFilter, setReadinessFilter] = useState<string>("ALL");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [selectedStudent, setSelectedStudent] = useState<StudentRecord | null>(null);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [nudged, setNudged] = useState<boolean>(false);

  // Modals state
  const [importModal, setImportModal] = useState<boolean>(false);
  const [createDriveModal, setCreateDriveModal] = useState<boolean>(false);
  const [createSprintModal, setCreateSprintModal] = useState<boolean>(false);
  const [inviteModal, setInviteModal] = useState<boolean>(false);

  // Staff state
  const [staffList, setStaffList] = useState([
    { id: "1", name: "Dr. Rajesh Sharma", email: "tpo@sunrise.ac.in", role: "Placement Director", scope: "All Branches (Global)", active: true },
    { id: "2", name: "Ms. Anjali Verma", email: "anv@sunrise.ac.in", role: "Coordinator", scope: "Computer Science & IT", active: true },
    { id: "3", name: "Mr. Vikram Singh", email: "vikram.s@sunrise.ac.in", role: "Coordinator", scope: "Mechanical Engineering", active: false },
  ]);

  const toggleStaffStatus = (id: string) => {
    setStaffList(prev => prev.map(s => s.id === id ? { ...s, active: !s.active } : s));
  };

  const handleOpenStudentDrawer = (student: StudentRecord) => {
    setSelectedStudent(student);
    setDrawerOpen(true);
  };

  // Filter students
  const filteredStudents = INITIAL_STUDENTS.filter((st) => {
    const q = searchQuery.toLowerCase();
    const matchesQ = st.name.toLowerCase().includes(q) || st.enrollment.toLowerCase().includes(q);
    const matchesBranch = branchFilter === "ALL" || st.branch === branchFilter;
    const matchesReadiness = readinessFilter === "ALL" || st.readiness === readinessFilter;
    const matchesStatus = statusFilter === "ALL" || st.placementStatus === statusFilter;
    return matchesQ && matchesBranch && matchesReadiness && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#27282A] flex font-sans antialiased selection:bg-[#2176FF]/15">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.32s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95) translateY(6px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-scale-in {
          animation: scaleIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes radarPulse {
          0% { box-shadow: 0 0 0 0 rgba(222, 0, 0, 0.45); }
          70% { box-shadow: 0 0 0 8px rgba(222, 0, 0, 0); }
          100% { box-shadow: 0 0 0 0 rgba(222, 0, 0, 0); }
        }
        .animate-radar {
          animation: radarPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pillarGrow {
          0% { transform: scaleY(0.04); opacity: 0.2; }
          70% { transform: scaleY(1.02); }
          100% { transform: scaleY(1); opacity: 1; }
        }
        .funnel-cylinder {
          transform-origin: bottom;
          animation: pillarGrow 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .funnel-cylinder:hover {
          transform: scaleY(1.02) translateY(-4px) !important;
          box-shadow: 0 16px 28px -6px rgba(33, 118, 255, 0.35);
        }
        @keyframes waveBar {
          0%, 100% { height: 4px; }
          50% { height: 16px; }
        }
        .wave-bar-1 { animation: waveBar 0.75s ease-in-out infinite; }
        .wave-bar-2 { animation: waveBar 0.75s ease-in-out 0.2s infinite; }
        .wave-bar-3 { animation: waveBar 0.75s ease-in-out 0.4s infinite; }
        .wave-bar-4 { animation: waveBar 0.75s ease-in-out 0.15s infinite; }
        .interactive-card {
          transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.22s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.22s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .interactive-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px -6px rgba(15, 23, 42, 0.08), 0 4px 10px -2px rgba(15, 23, 42, 0.03);
          border-color: #CBD5E1;
        }
        .interactive-btn {
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .interactive-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 16px -2px rgba(33, 118, 255, 0.3);
        }
        .interactive-btn:active {
          transform: scale(0.97);
        }
        @keyframes rowEntry {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .stagger-row {
          animation: rowEntry 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
      {/* ==================== LEFT SIDEBAR NAVIGATION ==================== */}
      <aside className="w-[270px] bg-white border-r border-slate-200/80 flex flex-col justify-between p-6 shrink-0 min-h-screen sticky top-0 h-screen overflow-y-auto z-20">
        <div className="space-y-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5 px-2 cursor-pointer" onClick={() => setActiveTab("dashboard")}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#2176FF] via-[#5495FF] to-[#8A38F5] flex items-center justify-center shadow-sm shadow-blue-500/20 text-white font-bold text-lg">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.18.05l9.93-6.13a2 2 0 0 0 .96-1.7V8.06a2 2 0 0 0-.88-1.66z"/>
                <path d="M12 2v20"/>
                <path d="M2.5 7.5 12 13l9.5-5.5"/>
              </svg>
            </div>
            <div className="font-extrabold text-xl tracking-tight text-slate-900">
              Campus<span className="text-[#2176FF]">OS</span>
            </div>
          </div>

          {/* Institutional Badge Pill */}
          <div className="flex items-center gap-2 px-3 py-2 bg-[#EEF5FF] text-[#2176FF] rounded-xl border border-[#D9E8FF] text-xs font-semibold">
            <GraduationCap className="w-4 h-4 shrink-0" />
            <span className="truncate">Sunrise Institute Of Technology</span>
          </div>

          {/* Menu */}
          <nav className="space-y-6 text-sm">
            {/* Command */}
            <div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">Command</div>
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition text-left ${
                  activeTab === "dashboard"
                    ? "bg-[#2176FF] text-white shadow-sm shadow-blue-500/25"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Dashboard</span>
              </button>
            </div>

            {/* Readiness */}
            <div className="space-y-1">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">Readiness</div>
              {[
                { id: "student_roster", label: "Student Roaster", icon: Users },
                { id: "placement_drives", label: "Placement Drives", icon: Briefcase },
                { id: "sprints_campaigns", label: "Sprints & Campaigns", icon: Zap },
                { id: "resume_vault", label: "Resume Vault", icon: Folder },
              ].map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl font-medium transition text-left ${
                      isActive
                        ? "bg-[#2176FF] text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* AI & Insights */}
            <div className="space-y-1">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">AI & Insights</div>
              {[
                { id: "ai_lab", label: "AI Interview Lab", icon: Mic },
                { id: "naac_nirf", label: "NAAC/NIRF Evidence", icon: ShieldCheck },
              ].map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl font-medium transition text-left ${
                      isActive
                        ? "bg-[#2176FF] text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Operation */}
            <div className="space-y-1">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">Operation</div>
              {[
                { id: "billings", label: "Billings", icon: CreditCard },
                { id: "staff_roles", label: "Staff's & Roles", icon: UserCog },
              ].map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl font-medium transition text-left ${
                      isActive
                        ? "bg-[#2176FF] text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>
        </div>

        {/* Profile Card */}
        <div className="pt-4 border-t border-slate-100">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#D9E8FF] shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#2176FF] text-white flex items-center justify-center font-bold text-sm shadow-sm shadow-blue-500/30">
              S
            </div>
            <div className="min-w-0">
              <div className="font-bold text-sm text-slate-900 leading-tight">Sovan</div>
              <div className="text-[11px] font-medium text-slate-400">TPO Director</div>
            </div>
          </div>
        </div>
      </aside>

      {/* ==================== MAIN CONTENT AREA ==================== */}
      <main className="flex-1 flex flex-col min-w-0 pb-16">
        {/* Header */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200/80 px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="w-full max-w-xl relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Students, drives, resume or ask CampusOS"
              className="w-full bg-[#F1F5F9]/70 hover:bg-[#F1F5F9] focus:bg-white text-sm text-slate-800 placeholder-slate-400 pl-11 pr-4 py-2.5 rounded-full border border-transparent focus:border-[#2176FF] focus:ring-2 focus:ring-[#2176FF]/15 transition outline-none"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200/60 flex items-center justify-center text-slate-600 relative transition">
              <Bell className="w-4 h-4" />
              <span className="w-2 h-2 rounded-full bg-[#DE0000] absolute top-2.5 right-2.5 ring-2 ring-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-2 pr-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/60 hover:bg-slate-100 transition cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-[#2176FF] text-white flex items-center justify-center font-bold text-xs">S</div>
              <div className="text-left">
                <div className="text-xs font-bold text-slate-900 leading-tight">Sovan</div>
                <div className="text-[10px] text-slate-400 leading-tight">TPO Director</div>
              </div>
            </div>
          </div>
        </header>

        {/* Content Container */}
        <div className="p-8 max-w-7xl w-full mx-auto">
          {/* ======================================================== */}
          {/* TAB 1: DASHBOARD                                         */}
          {/* ======================================================== */}
          {activeTab === "dashboard" && (
            <div className="space-y-8 animate-fade-in-up">
              {/* Greeting & Score */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                  <h1 className="text-3xl font-extrabold text-[#27282A] tracking-tight">
                    Hello <span className="text-[#27282A]">Sovan!</span>
                  </h1>
                  <h2 className="text-2xl font-bold text-[#27282A] mt-1">Your Campus, Placement - Ready</h2>
                  <p className="text-sm font-medium text-[#7B7B7B] mt-1.5">Track Progress, run drives, and empower every student with AI</p>
                </div>

                <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm flex items-center gap-6 min-w-[340px] interactive-card">
                  <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" stroke="#F1F5F9" strokeWidth="10" fill="transparent" />
                      <circle cx="50" cy="50" r="40" stroke="#2176FF" strokeWidth="10" strokeDasharray="251.2" strokeDashoffset="42.7" strokeLinecap="round" fill="transparent" />
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center text-center">
                      <span className="text-xl font-extrabold text-[#27282A] leading-tight">83</span>
                      <span className="text-[10px] text-slate-400 font-medium">/100</span>
                    </div>
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="text-xs font-bold text-[#27282A]">Overall Readiness Score</div>
                    <div className="text-[11px] font-semibold text-[#01B32C] flex items-center gap-1">
                      <span>+6.2pts</span>
                      <span className="text-slate-400 font-normal">Vs last Academic Year</span>
                    </div>
                    <div className="space-y-1.5 pt-1 text-[10px] text-slate-500 font-medium">
                      <div className="flex items-center justify-between gap-2">
                        <span className="w-12">Skills</span>
                        <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-[#5495FF] rounded-full" style={{ width: "82%" }}></div>
                        </div>
                        <span className="w-6 text-right font-bold text-slate-700">82%</span>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="w-12">Resume</span>
                        <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-[#7E54E0] rounded-full" style={{ width: "96%" }}></div>
                        </div>
                        <span className="w-6 text-right font-bold text-slate-700">96%</span>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="w-12">Portfolio</span>
                        <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-[#FF9A6D] rounded-full" style={{ width: "77%" }}></div>
                        </div>
                        <span className="w-6 text-right font-bold text-slate-700">77%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between interactive-card cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-[#EEF5FF] text-[#2176FF] flex items-center justify-center"><Users className="w-5 h-5" /></div>
                    <span className="px-2.5 py-1 rounded-full bg-[#EEF5FF] text-[#2176FF] font-semibold text-xs border border-[#D9E8FF]">On track</span>
                  </div>
                  <div className="mt-4">
                    <div className="text-xs font-semibold text-[#7B7B7B]">Student Onboard</div>
                    <div className="text-3xl font-extrabold text-[#27282A] tracking-tight mt-1">2,400</div>
                    <div className="text-[11px] font-medium text-slate-400 mt-1">Out Of 2,400 enrolled</div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between interactive-card cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-[#EEF5FF] text-[#2176FF] flex items-center justify-center"><Folder className="w-5 h-5 text-[#2176FF]" /></div>
                    <span className="px-2.5 py-1 rounded-full bg-[#EEF5FF] text-[#2176FF] font-semibold text-xs border border-[#D9E8FF]">75% analyzed</span>
                  </div>
                  <div className="mt-4">
                    <div className="text-xs font-semibold text-[#7B7B7B]">Resumes Analyzed</div>
                    <div className="text-3xl font-extrabold text-[#27282A] tracking-tight mt-1">75%</div>
                    <div className="text-[11px] font-medium text-slate-400 mt-1">6 ATS & JD-fit complete · 3 verified</div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between interactive-card cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-[#FFF6E9] text-[#EFB930] flex items-center justify-center"><Briefcase className="w-5 h-5 text-[#EFB930]" /></div>
                    <span className="px-2.5 py-1 rounded-full bg-[#FFF6E9] text-[#E08A00] font-semibold text-xs border border-[#FFE8C2]">3 live</span>
                  </div>
                  <div className="mt-4">
                    <div className="text-xs font-semibold text-[#7B7B7B]">Active drives</div>
                    <div className="text-3xl font-extrabold text-[#27282A] tracking-tight mt-1">3</div>
                    <div className="text-[11px] font-medium text-slate-400 mt-1">Corporate pipelines live</div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between interactive-card cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-[#FFF0F0] text-[#DE0000] flex items-center justify-center"><AlertTriangle className="w-5 h-5 text-[#DE0000]" /></div>
                    <span className="px-2.5 py-1 rounded-full bg-[#FFF0F0] text-[#DE0000] font-semibold text-xs border border-[#FFD6D6]">2 at risk</span>
                  </div>
                  <div className="mt-4">
                    <div className="text-xs font-semibold text-[#7B7B7B]">At-risk students</div>
                    <div className="text-3xl font-extrabold text-[#27282A] tracking-tight mt-1">2</div>
                    <div className="text-[11px] font-medium text-slate-400 mt-1">At-risk students</div>
                  </div>
                </div>
              </div>

              {/* Mid-Row: AES Distribution & Rescue Queue */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between interactive-card">
                  <div>
                    <h3 className="text-lg font-bold text-[#27282A]">AES Distribution</h3>
                    <p className="text-xs text-[#7B7B7B] mt-0.5">See where your students stand and where invention is needed</p>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-800">Readiness Distribution (AES)</span>
                      <span className="text-slate-500 font-semibold">240 Students</span>
                    </div>
                    <div className="h-6 w-full rounded-xl bg-slate-100 flex overflow-hidden p-0.5 gap-1 shadow-inner">
                      <div className="h-full bg-[#01B32C] rounded-lg transition-all duration-700" style={{ width: "35%" }}></div>
                      <div className="h-full bg-[#2176FF] rounded-lg transition-all duration-700" style={{ width: "25%" }}></div>
                      <div className="h-full bg-[#EFB930] rounded-lg transition-all duration-700" style={{ width: "15%" }}></div>
                      <div className="h-full bg-[#DE0000] rounded-lg transition-all duration-700" style={{ width: "5%" }}></div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#01B32C]"></span>
                        <div><span className="font-bold text-slate-900">35%</span><div className="text-[11px] text-[#7B7B7B]">Industry Ready</div></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#2176FF]"></span>
                        <div><span className="font-bold text-slate-900">25%</span><div className="text-[11px] text-[#7B7B7B]">Proficient</div></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#EFB930]"></span>
                        <div><span className="font-bold text-slate-900">15%</span><div className="text-[11px] text-[#7B7B7B]">Developing</div></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#DE0000]"></span>
                        <div><span className="font-bold text-slate-900">5%</span><div className="text-[11px] text-[#7B7B7B]">At Risk</div></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between interactive-card">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-[#27282A]">Rescue queue</h3>
                    <button onClick={() => setActiveTab("student_roster")} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition interactive-btn">Open Full Roaster</button>
                  </div>
                  <div className="my-6">
                    <div className="flex items-center justify-between cursor-pointer p-3 rounded-2xl hover:bg-slate-50 transition" onClick={() => handleOpenStudentDrawer(INITIAL_STUDENTS[7])}>
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-[#FFA4A4] text-white flex items-center justify-center font-bold text-sm shadow-sm">KJ</div>
                        <div>
                          <div className="text-sm font-bold text-[#27282A]">Karan Johar</div>
                          <div className="text-xs text-[#7B7B7B]">SIT2026007 · CSE · 12d ago</div>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-[#FFF0F0] text-[#DE0000] font-bold text-xs border border-[#FFD6D6] animate-radar">38 AES</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setNudged(true)}
                    className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition interactive-btn ${
                      nudged ? "bg-[#E6F8EB] text-[#01B32C] border border-[#C2F2CC]" : "bg-[#EEF5FF] hover:bg-[#D9E8FF] text-[#2176FF]"
                    }`}
                  >
                    <span>{nudged ? "Nudge Sent via WhatsApp" : "Nudge"}</span>
                    {nudged ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Funnel */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm interactive-card">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#27282A]">Student Readiness Funnel</h3>
                    <p className="text-xs font-medium text-[#7B7B7B] mt-0.5">Batch 2026 · where students drop between consent and offer</p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-600 rounded-full">Interactive Pillars</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-end pt-4 pb-2">
                  {[
                    { label: "Consent collected", val: "100%", h: "h-48", gradient: "from-[#6FA6FF] to-[#5495FF]" },
                    { label: "First AI analysis", val: "92%", h: "h-44", gradient: "from-[#9470EB] to-[#7E54E0]" },
                    { label: "Resume rebuilt", val: "87%", h: "h-40", gradient: "from-[#F26BBF] to-[#E054AA]" },
                    { label: "Mock interview done", val: "70%", h: "h-32", gradient: "from-[#EB6F71] to-[#E05658]" },
                    { label: "Resume verified", val: "78%", h: "h-36", gradient: "from-[#5EE319] to-[#45CE01]" },
                    { label: "Offered", val: "78%", h: "h-36", gradient: "from-[#FFCC4D] to-[#EFB930]" },
                  ].map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center group">
                      <div
                        className={`funnel-cylinder w-full max-w-[86px] ${step.h} bg-gradient-to-b ${step.gradient} rounded-3xl relative shadow-md flex flex-col justify-start items-center pt-2 cursor-pointer transition-transform`}
                        style={{ animationDelay: `${idx * 75}ms` }}
                        title={`${step.label}: ${step.val}`}
                      >
                        <div className="w-3.5 h-3.5 rounded-full bg-white/95 shadow-sm group-hover:scale-125 transition-transform duration-200"></div>
                      </div>
                      <div className="text-center mt-3">
                        <div className="text-[11px] font-medium text-slate-500">{step.label}</div>
                        <div className="text-xs font-extrabold text-slate-900 mt-1">{step.val}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 2: STUDENT ROSTER (ONE SEARCH AWAY)                  */}
          {/* ======================================================== */}
          {activeTab === "student_roster" && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-extrabold text-[#27282A] tracking-tight">All Students, One Search away</h1>
                  <p className="text-sm font-medium text-[#7B7B7B] mt-1">Manage enrolled students, academic tracking and placement readiness</p>
                </div>
                <div className="flex items-center gap-3">
                  <select className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 outline-none">
                    <option>📅 AY 2025–26</option>
                    <option>📅 AY 2024–25</option>
                  </select>
                  <button onClick={() => alert("Exporting student roster CSV...")} className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 flex items-center gap-2 transition">
                    <Download className="w-4 h-4" />
                    <span>Export CSV</span>
                  </button>
                  <button onClick={() => setImportModal(true)} className="px-4 py-2.5 rounded-xl bg-[#2176FF] hover:bg-[#1561E6] text-white text-xs font-bold flex items-center gap-2 shadow-sm shadow-blue-500/25 transition">
                    <Upload className="w-4 h-4" />
                    <span>Import Students</span>
                  </button>
                </div>
              </div>

              {/* Filters */}
              <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-sm flex flex-wrap items-center gap-3">
                <div className="flex-1 min-w-[240px] relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Name, Enrollment Number...."
                    className="w-full bg-slate-50 text-xs text-slate-800 placeholder-slate-400 pl-9 pr-3 py-2 rounded-xl border border-slate-200/60 focus:bg-white focus:border-[#2176FF] outline-none"
                  />
                </div>
                <select value={branchFilter} onChange={(e) => setBranchFilter(e.target.value)} className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs text-slate-700 font-semibold outline-none">
                  <option value="ALL">Branch: All</option>
                  <option value="CSE">CSE</option>
                  <option value="IT">IT</option>
                  <option value="ECE">ECE</option>
                  <option value="Mechanical">Mechanical</option>
                </select>
                <select value={readinessFilter} onChange={(e) => setReadinessFilter(e.target.value)} className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs text-slate-700 font-semibold outline-none">
                  <option value="ALL">Readiness: All</option>
                  <option value="Industry Ready">Industry Ready</option>
                  <option value="Proficient">Proficient</option>
                  <option value="Developing">Developing</option>
                  <option value="At Risk">At Risk</option>
                </select>
                <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs text-slate-700 font-semibold outline-none">
                  <option value="ALL">Placement Status: All</option>
                  <option value="Interview Ready">Interview Ready</option>
                  <option value="Placed">Placed</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Not Started">Not Started</option>
                </select>
              </div>

              {/* Roster Table */}
              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#27282A]">Student Roster</h3>
                    <p className="text-xs text-[#7B7B7B]">Click any student row to slide out the detailed AI candidate profile.</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF5FF] text-[#2176FF] font-semibold text-xs border border-[#D9E8FF]">
                    <span className="w-2 h-2 rounded-full bg-[#2176FF]"></span>
                    2,400 students
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50/70 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      <tr>
                        <th className="py-4 px-6">STUDENT</th>
                        <th className="py-4 px-4">ENROLLMENT NO.</th>
                        <th className="py-4 px-4">BRANCH</th>
                        <th className="py-4 px-4">BATCH</th>
                        <th className="py-4 px-4">AES SCORE</th>
                        <th className="py-4 px-4">READINESS</th>
                        <th className="py-4 px-4">LAST ACTIVE</th>
                        <th className="py-4 px-4">PLACEMENT STATUS</th>
                        <th className="py-4 px-6 text-right">ACTION</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                      {filteredStudents.map((st, idx) => (
                        <tr
                          key={st.id}
                          onClick={() => handleOpenStudentDrawer(st)}
                          className="stagger-row hover:bg-slate-50/80 transition cursor-pointer group"
                          style={{ animationDelay: `${idx * 40}ms` }}
                        >
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-full bg-[#D9E8FF] text-[#2176FF] flex items-center justify-center font-bold text-xs group-hover:scale-105 transition-transform">{st.avatar}</div>
                              <div>
                                <div className="font-bold text-slate-900 text-sm group-hover:text-[#2176FF] transition-colors">{st.name}</div>
                                <div className="text-[11px] text-slate-400">{st.enrollment}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4 font-mono text-slate-600">{st.enrollment}</td>
                          <td className="py-4 px-4"><span className="px-2.5 py-1 rounded-lg bg-slate-100 font-semibold">{st.branch}</span></td>
                          <td className="py-4 px-4 text-slate-600">{st.batch}</td>
                          <td className="py-4 px-4">
                            <div className="inline-flex flex-col">
                              <span className="font-extrabold text-slate-900 text-sm">{st.aes}</span>
                              <span className={`w-8 h-1 rounded-full mt-0.5 ${st.aes >= 80 ? "bg-[#01B32C]" : st.aes >= 65 ? "bg-[#2176FF]" : st.aes >= 50 ? "bg-[#EFB930]" : "bg-[#DE0000]"}`}></span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-semibold text-[11px] border ${
                              st.readiness === "Industry Ready" ? "bg-[#E6F8EB] text-[#01B32C] border-[#C2F2CC]" :
                              st.readiness === "Proficient" ? "bg-[#EEF5FF] text-[#2176FF] border-[#D9E8FF]" :
                              st.readiness === "Developing" ? "bg-[#FFF6E9] text-[#E08A00] border-[#FFE8C2]" :
                              "bg-[#FFF0F0] text-[#DE0000] border-[#FFD6D6]"
                            }`}>
                              ● {st.readiness}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-slate-500">{st.lastActive}</td>
                          <td className="py-4 px-4">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-semibold text-[11px] border ${
                              st.placementStatus === "Placed" ? "bg-[#E6F8EB] text-[#01B32C] border-[#C2F2CC]" :
                              st.placementStatus === "Interview Ready" ? "bg-[#EEF5FF] text-[#2176FF] border-[#D9E8FF]" :
                              st.placementStatus === "In Progress" ? "bg-[#F5F0FF] text-[#7E54E0] border-[#E9DEFF]" :
                              "bg-slate-100 text-slate-600 border-slate-200"
                            }`}>
                              ● {st.placementStatus}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-right">
                            <button className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-700 ml-auto group-hover:translate-x-1 transition-transform">
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 3: PLACEMENT DRIVES                                  */}
          {/* ======================================================== */}
          {activeTab === "placement_drives" && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-extrabold text-[#27282A] tracking-tight">Placement Drives & AI Prep Sprints</h1>
                  <p className="text-sm font-medium text-[#7B7B7B] mt-1">Manage corporate recruitment visits, auto-shortlisting, and targeted student prep</p>
                </div>
                <button onClick={() => setCreateDriveModal(true)} className="px-5 py-2.5 rounded-xl bg-[#2176FF] hover:bg-[#1561E6] text-white text-xs font-bold flex items-center gap-2 shadow-sm shadow-blue-500/25 transition">
                  <Plus className="w-4 h-4" />
                  <span>Create a Campus Drive</span>
                </button>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                  <h3 className="text-lg font-bold text-[#27282A]">Student Roster</h3>
                  <p className="text-xs text-[#7B7B7B]">Drive eligibility verification, CTC proposals, and offer management</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50/70 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      <tr>
                        <th className="py-4 px-6">STUDENT</th>
                        <th className="py-4 px-4">ENROLLMENT NO.</th>
                        <th className="py-4 px-4">BRANCH</th>
                        <th className="py-4 px-4">CGPA</th>
                        <th className="py-4 px-4">ELIGIBILITY</th>
                        <th className="py-4 px-4">OUTCOME</th>
                        <th className="py-4 px-4">PACKAGE (LPA)</th>
                        <th className="py-4 px-6 text-right">ACTION</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                      {INITIAL_STUDENTS.map(st => (
                        <tr key={st.id} className="hover:bg-slate-50/60 transition">
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-full bg-[#D9E8FF] text-[#2176FF] flex items-center justify-center font-bold text-xs">{st.avatar}</div>
                              <div><div className="font-bold text-slate-900 text-sm">{st.name}</div><div className="text-[11px] text-slate-400">{st.enrollment}</div></div>
                            </div>
                          </td>
                          <td className="py-4 px-4 font-mono text-slate-600">{st.enrollment}</td>
                          <td className="py-4 px-4"><span className="px-2.5 py-1 rounded-lg bg-slate-100 font-semibold">{st.branch}</span></td>
                          <td className="py-4 px-4 font-bold text-slate-800">{st.cgpa || 8.0}</td>
                          <td className="py-4 px-4">
                            <span className={`px-3 py-1 rounded-full font-semibold border ${st.aes >= 50 ? "bg-[#E6F8EB] text-[#01B32C] border-[#C2F2CC]" : "bg-[#FFF0F0] text-[#DE0000] border-[#FFD6D6]"}`}>
                              {st.aes >= 50 ? "Eligible" : "Not Eligible"}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <span className={`px-3 py-1 rounded-full font-bold ${
                              st.outcome === "Offered" ? "bg-[#01B32C] text-white" :
                              st.outcome === "Selected" ? "bg-white text-[#01B32C] border border-[#01B32C]" :
                              st.outcome === "Pending" ? "bg-white text-[#EFB930] border border-[#EFB930]" :
                              "bg-white text-[#DE0000] border border-[#DE0000]"
                            }`}>
                              {st.outcome || "Pending"}
                            </span>
                          </td>
                          <td className="py-4 px-4 font-extrabold text-[#01B32C]">{st.packageLpa || " - "}</td>
                          <td className="py-4 px-6 text-right space-x-2">
                            <button onClick={() => alert(`Offer extended to ${st.name}!`)} className="px-3 py-1 rounded-lg bg-[#E6F8EB] text-[#01B32C] font-bold text-[11px] hover:bg-[#c2f2cc]">✓ Offer</button>
                            <button onClick={() => alert(`Candidate status updated.`)} className="px-3 py-1 rounded-lg bg-[#FFF0F0] text-[#DE0000] font-bold text-[11px] hover:bg-[#ffd6d6]">✕ Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 4: SPRINTS & CAMPAIGNS                               */}
          {/* ======================================================== */}
          {activeTab === "sprints_campaigns" && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-extrabold text-[#27282A] tracking-tight">Sprints & Placement Campaigns</h1>
                  <p className="text-sm font-medium text-[#7B7B7B] mt-1">7-Day intensive AI skill sprints aligned with company-specific hiring patterns.</p>
                </div>
                <button onClick={() => setCreateSprintModal(true)} className="px-5 py-2.5 rounded-xl bg-[#2176FF] hover:bg-[#1561E6] text-white text-xs font-bold flex items-center gap-2 shadow-sm shadow-blue-500/25 transition">
                  <Plus className="w-4 h-4" />
                  <span>Launch New AI Sprint</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "TCS Digital 7-Day Intensive Sprint", org: "tcs", color: "text-[#E054AA]", ctc: "₹7.5 LPA", enrolled: 142, progress: 70 },
                  { name: "Infosys HackWithInfy Coding Bootcamp", org: "Infosys", color: "text-[#007CC3]", ctc: "₹7.5 LPA", enrolled: 112, progress: 85 },
                  { name: "Amazon AWS SDE System Design Sprint", org: "aws", color: "text-[#FF9900]", ctc: "₹7.5 LPA", enrolled: 142, progress: 45 },
                ].map((camp, idx) => (
                  <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition">
                    <div>
                      <div className="h-10 flex items-center">
                        <span className={`text-2xl font-black ${camp.color}`}>{camp.org}</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mt-4">{camp.name}</h3>
                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <div className="text-[10px] font-bold text-slate-400 uppercase">PACKAGE</div>
                        <div className="text-2xl font-extrabold text-slate-900 mt-0.5">{camp.ctc}</div>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-slate-500 mt-4">
                        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-slate-400" /> Batch 2026</span>
                        <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-slate-400" /> {camp.enrolled} Enrolled</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400" /> 7 Days Left</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full mt-5 overflow-hidden">
                        <div className="h-full bg-[#2176FF] rounded-full" style={{ width: `${camp.progress}%` }}></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-5 mt-4 border-t border-slate-100 text-xs">
                      <span className="font-bold text-slate-700 flex items-center gap-1.5"><UserCheck className="w-3.5 h-3.5 text-[#01B32C]" /> 98 Students Ready</span>
                      <button onClick={() => alert(`Opening details for ${camp.name}...`)} className="font-bold text-[#2176FF] hover:underline">View Campaign →</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 5: RESUME VAULT                                      */}
          {/* ======================================================== */}
          {activeTab === "resume_vault" && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-extrabold text-[#27282A] tracking-tight">Resume Vaults</h1>
                  <p className="text-sm font-medium text-[#7B7B7B] mt-1">University-sealed, QR-verifiable student resumes & recruiter ZIP exporter</p>
                </div>
                <button onClick={() => alert("Packaging all verified student resumes into structured ZIP...")} className="px-5 py-2.5 rounded-xl bg-[#2176FF] hover:bg-[#1561E6] text-white text-xs font-bold flex items-center gap-2 shadow-sm shadow-blue-500/25 transition">
                  <Upload className="w-4 h-4" />
                  <span>Export Recruiter Package</span>
                </button>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                  <h3 className="text-lg font-bold text-[#27282A]">Verification Review Queue (7)</h3>
                  <p className="text-xs text-[#7B7B7B]">Submitted student resumes pending seal verification.</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50/70 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase">
                      <tr>
                        <th className="py-4 px-6">STUDENT</th>
                        <th className="py-4 px-4">ENROLLMENT NO.</th>
                        <th className="py-4 px-4">BRANCH</th>
                        <th className="py-4 px-4">VERSION</th>
                        <th className="py-4 px-4">STATUS</th>
                        <th className="py-4 px-6 text-right">ACTION</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                      {INITIAL_STUDENTS.slice(0, 6).map(st => (
                        <tr key={st.id} className="hover:bg-slate-50/60 transition">
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-full bg-[#D9E8FF] text-[#2176FF] flex items-center justify-center font-bold text-xs">{st.avatar}</div>
                              <div><div className="font-bold text-slate-900 text-sm">{st.name}</div><div className="text-[11px] text-slate-400">{st.enrollment}</div></div>
                            </div>
                          </td>
                          <td className="py-4 px-4 font-mono text-slate-600">{st.enrollment}</td>
                          <td className="py-4 px-4"><span className="px-2.5 py-1 rounded-lg bg-slate-100 font-semibold">{st.branch}</span></td>
                          <td className="py-4 px-4 text-slate-600">v1.0</td>
                          <td className="py-4 px-4">
                            <span className={`px-3 py-1 rounded-full font-semibold border ${st.resumeStatus === "Verified & Sealed" ? "bg-[#E6F8EB] text-[#01B32C] border-[#C2F2CC]" : "bg-[#FFF6E9] text-[#E08A00] border-[#FFE8C2]"}`}>
                              {st.resumeStatus || "Submitted"}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-right">
                            <button onClick={() => alert(`Previewing verified resume for ${st.name}`)} className="px-3 py-1.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 flex items-center gap-1.5 ml-auto">
                              <Eye className="w-3.5 h-3.5" />
                              <span>PREVIEW</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 6: AI INTERVIEW LAB                                  */}
          {/* ======================================================== */}
          {activeTab === "ai_lab" && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-extrabold text-[#27282A] tracking-tight">AI Mock Interview Oversight & Diagnostic Hub</h1>
                  <p className="text-sm font-medium text-[#7B7B7B] mt-1">Real-time audit log of student voice mock interviews, Gemini 2.0 forensic evaluations, and batch hiring readiness.</p>
                </div>
                <button onClick={() => alert("Previewing Sarvam AI Voice Studio Telemetry...")} className="px-5 py-2.5 rounded-xl bg-[#2176FF] hover:bg-[#1561E6] text-white text-xs font-bold flex items-center gap-2.5 shadow-sm shadow-blue-500/25 transition interactive-btn">
                  <span className="flex items-end gap-0.5 h-4 w-4">
                    <span className="w-1 bg-white rounded-full wave-bar-1"></span>
                    <span className="w-1 bg-white rounded-full wave-bar-2"></span>
                    <span className="w-1 bg-white rounded-full wave-bar-3"></span>
                    <span className="w-1 bg-white rounded-full wave-bar-4"></span>
                  </span>
                  <span>Preview Live Voice Studio</span>
                </button>
              </div>

              {/* 4 Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#EEF5FF] text-[#2176FF] flex items-center justify-center shrink-0"><Mic className="w-6 h-6" /></div>
                  <div>
                    <div className="text-xs font-semibold text-[#7B7B7B]">Mocks Completed</div>
                    <div className="text-2xl font-extrabold text-slate-900">240</div>
                    <div className="text-[10px] text-slate-400">Vs Last week(Active Placement Drive)</div>
                  </div>
                </div>
                <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5F0FF] text-[#7E54E0] flex items-center justify-center shrink-0"><BarChart3 className="w-6 h-6" /></div>
                  <div>
                    <div className="text-xs font-semibold text-[#7B7B7B]">Avg Technical Score</div>
                    <div className="text-2xl font-extrabold text-slate-900">78.4/100</div>
                    <div className="text-[10px] text-slate-400">CSE: 84% • ECE: 76% • ME: 72%</div>
                  </div>
                </div>
                <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#E6F8EB] text-[#01B32C] flex items-center justify-center shrink-0"><Star className="w-6 h-6" /></div>
                  <div>
                    <div className="text-xs font-semibold text-[#7B7B7B]">STAR Behavioral Avg</div>
                    <div className="text-2xl font-extrabold text-slate-900">82.1%</div>
                    <div className="text-[10px] text-slate-400">Hinglish to English transition: 91%</div>
                  </div>
                </div>
                <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF6E9] text-[#EFB930] flex items-center justify-center shrink-0"><Users className="w-6 h-6" /></div>
                  <div>
                    <div className="text-xs font-semibold text-[#7B7B7B]">Speech Fluency WPM</div>
                    <div className="text-2xl font-extrabold text-slate-900">128 WPM</div>
                    <div className="text-[10px] text-slate-400">Industry standard: 110–140 WPM</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 7: NAAC / NIRF EVIDENCE                              */}
          {/* ======================================================== */}
          {activeTab === "naac_nirf" && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-extrabold text-[#27282A] tracking-tight">NAAC / NIRF Evidence</h1>
                  <p className="text-sm font-medium text-[#7B7B7B] mt-1">Generate a structured placement & activity data pack for your institutional accreditation filing (NAAC Criterion 5 / NIRF / AICTE).</p>
                </div>
                <button onClick={() => alert("Downloading Full NAAC C5 & NIRF Evidence Bundle...")} className="px-5 py-2.5 rounded-xl bg-[#2176FF] hover:bg-[#1561E6] text-white text-xs font-bold flex items-center gap-2 shadow-sm shadow-blue-500/25 transition interactive-btn">
                  <Download className="w-4 h-4" />
                  <span>Generate Full Bundle</span>
                </button>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-4 interactive-card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                    <FileSpreadsheet className="w-4 h-4 text-[#2176FF]" />
                    <span>Key Statistics Preview  -  AY 2024–25</span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#01B32C] bg-[#E6F8EB] px-3 py-1 rounded-full border border-[#C2F2CC]">✓ Verified before submission</span>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-100">
                    <div className="text-[11px] font-bold text-slate-400">TOTAL STUDENTS</div>
                    <div className="text-2xl font-extrabold text-slate-900 mt-1">40</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-100">
                    <div className="text-[11px] font-bold text-slate-400">CAMPUS OFFERS</div>
                    <div className="text-2xl font-extrabold text-[#01B32C] mt-1">1 (2.5%)</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-100">
                    <div className="text-[11px] font-bold text-slate-400">AVG PACKAGE</div>
                    <div className="text-2xl font-extrabold text-[#2176FF] mt-1">8.4 LPA</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-100">
                    <div className="text-[11px] font-bold text-slate-400">SPRINT ENROLLED</div>
                    <div className="text-2xl font-extrabold text-[#7E54E0] mt-1">36</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 8: BILLINGS                                          */}
          {/* ======================================================== */}
          {activeTab === "billings" && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-extrabold text-[#27282A] tracking-tight">Campus Plan & Commercial Telemetry</h1>
                  <p className="text-sm font-medium text-[#7B7B7B] mt-1">Manage license seats, tax invoices, offline PO submissions & usage meters.</p>
                </div>
                <button onClick={() => alert("Generating statutory offline PO tax invoice...")} className="px-5 py-2.5 rounded-xl bg-[#2176FF] hover:bg-[#1561E6] text-white text-xs font-bold flex items-center gap-2 shadow-sm shadow-blue-500/25 transition interactive-btn">
                  <Download className="w-4 h-4" />
                  <span>Generate Offline PO Tax</span>
                </button>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-4 interactive-card">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Institutional Seat License Utilization</h3>
                    <p className="text-xs text-slate-400">742 out of 1000 student seats assigned.</p>
                  </div>
                  <span className="text-sm font-extrabold text-slate-900">748/1,000 Seats</span>
                </div>
                <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#2176FF] rounded-full" style={{ width: "74.8%" }}></div>
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 9: STAFF & ROLES                                     */}
          {/* ======================================================== */}
          {activeTab === "staff_roles" && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-extrabold text-[#27282A] tracking-tight">Staff Management</h1>
                  <p className="text-sm font-medium text-[#7B7B7B] mt-1">Manage TPO Directors, Placement Coordinators, and branch scope access control.</p>
                </div>
                <button onClick={() => setInviteModal(true)} className="px-5 py-2.5 rounded-xl bg-[#2176FF] hover:bg-[#1561E6] text-white text-xs font-bold flex items-center gap-2 shadow-sm shadow-blue-500/25 transition">
                  <UserPlus className="w-4 h-4" />
                  <span>Invite Placement Coordinator</span>
                </button>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                  <h3 className="text-lg font-bold text-[#27282A]">Institutional Staff Roster</h3>
                  <p className="text-xs text-[#7B7B7B]">Authorized staff members with access to your campus placement portal.</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50/70 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase">
                      <tr>
                        <th className="py-4 px-6">Staff Name</th>
                        <th className="py-4 px-4">Email</th>
                        <th className="py-4 px-4">Role</th>
                        <th className="py-4 px-4">Assigned Branch Scope</th>
                        <th className="py-4 px-4">Status</th>
                        <th className="py-4 px-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                      {staffList.map((st) => (
                        <tr key={st.id} className="hover:bg-slate-50/60 transition">
                          <td className="py-4 px-6 font-bold text-slate-900 text-sm">{st.name}</td>
                          <td className="py-4 px-4 text-slate-600 font-mono">{st.email}</td>
                          <td className="py-4 px-4">
                            <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${st.role === "Placement Director" ? "bg-[#01B32C] text-white" : "border border-[#01B32C] text-[#01B32C]"}`}>
                              {st.role}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-slate-700">{st.scope}</td>
                          <td className="py-4 px-4">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${st.active ? "bg-[#E6F8EB] text-[#01B32C] border border-[#C2F2CC]" : "bg-slate-100 text-slate-500 border border-slate-200"}`}>
                              {st.active ? "Active" : "Inactive"}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-right">
                            <button
                              onClick={() => toggleStaffStatus(st.id)}
                              className={`px-3 py-1 rounded-lg font-bold text-[11px] transition border ${
                                st.active ? "border-[#DE0000] text-[#DE0000] hover:bg-[#FFF0F0]" : "border-[#01B32C] text-[#01B32C] hover:bg-[#E6F8EB]"
                              }`}
                            >
                              {st.active ? "Deactivate" : "Activate"}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* ==================== SLIDE-OVER STUDENT DRAWER ==================== */}
      <div className={`fixed inset-0 z-50 overflow-hidden transition-all duration-300 ${drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setDrawerOpen(false)}></div>
        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <div className={`w-screen max-w-md bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto transform transition duration-300 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
            {selectedStudent && (
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#2176FF]">
                    <Sparkles className="w-4 h-4" />
                    <span>Student Intelligence Telemetry</span>
                  </div>
                  <button onClick={() => setDrawerOpen(false)} className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400">
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="py-6 border-b border-slate-100 flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#EEF5FF] text-[#2176FF] flex items-center justify-center font-extrabold text-xl shrink-0 shadow-sm">
                    {selectedStudent.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">{selectedStudent.name}</h3>
                    <div className="text-xs text-slate-400 font-mono mt-0.5">{selectedStudent.enrollment}</div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-bold">{selectedStudent.branch}</span>
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-bold">{selectedStudent.batch} Batch</span>
                    </div>
                  </div>
                </div>

                <div className="py-6 border-b border-slate-100 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700">Employability Score (AES)</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-2xl font-black text-slate-900">{selectedStudent.aes}</span>
                      <span className="text-xs text-slate-400">/ 100</span>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#01B32C] rounded-full" style={{ width: `${selectedStudent.aes}%` }}></div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2">
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                      <div className="text-[10px] text-slate-400 font-bold uppercase">ATS Resume</div>
                      <div className="text-base font-extrabold text-slate-900 mt-1">94%</div>
                      <div className="text-[9px] text-[#01B32C] font-semibold mt-0.5">Taleo Passed</div>
                    </div>
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                      <div className="text-[10px] text-slate-400 font-bold uppercase">Voice Mock</div>
                      <div className="text-base font-extrabold text-slate-900 mt-1">88%</div>
                      <div className="text-[9px] text-[#2176FF] font-semibold mt-0.5">124 WPM</div>
                    </div>
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                      <div className="text-[10px] text-slate-400 font-bold uppercase">Coding Fit</div>
                      <div className="text-base font-extrabold text-slate-900 mt-1">79%</div>
                      <div className="text-[9px] text-[#EFB930] font-semibold mt-0.5">Level 3</div>
                    </div>
                  </div>
                </div>

                <div className="py-6 space-y-4">
                  <div className="text-xs font-bold text-slate-700">Placement & Verification State</div>
                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                      <span className="text-slate-500">Readiness Status</span>
                      <span className="px-2.5 py-0.5 rounded-full font-bold bg-[#E6F8EB] text-[#01B32C]">{selectedStudent.readiness}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                      <span className="text-slate-500">Current Placement Status</span>
                      <span className="px-2.5 py-0.5 rounded-full font-bold bg-[#EEF5FF] text-[#2176FF]">{selectedStudent.placementStatus}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                      <span className="text-slate-500">Last Telemetry Active</span>
                      <span className="font-bold text-slate-700">{selectedStudent.lastActive}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="pt-6 border-t border-slate-100 space-y-2">
              <button onClick={() => alert("AI Interview nudge sent via WhatsApp!")} className="w-full py-3 rounded-xl bg-[#2176FF] hover:bg-[#1561E6] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm">
                <Send className="w-4 h-4" />
                <span>Send AI Interview Nudge</span>
              </button>
              <button onClick={() => setDrawerOpen(false)} className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold">
                Close Panel
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {importModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">Import Students (CSV Bulk)</h3>
              <button onClick={() => setImportModal(false)}><X className="w-5 h-5 text-slate-400" /></button>
            </div>
            <p className="text-xs text-slate-500">Upload 5k student CSV roster with Name, Enrollment No, Branch, Batch, and Mobile.</p>
            <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center hover:border-[#2176FF] cursor-pointer">
              <Upload className="w-8 h-8 text-[#2176FF] mx-auto" />
              <div className="text-xs font-bold text-slate-700 mt-2">Click or drag CSV here</div>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button onClick={() => setImportModal(false)} className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl">Cancel</button>
              <button onClick={() => { setImportModal(false); alert("Ingested successfully!"); }} className="px-4 py-2 text-xs font-bold bg-[#2176FF] text-white rounded-xl">Upload & Process</button>
            </div>
          </div>
        </div>
      )}

      {createDriveModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">Create Campus Drive</h3>
              <button onClick={() => setCreateDriveModal(false)}><X className="w-5 h-5 text-slate-400" /></button>
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Company Name</label>
                <input type="text" placeholder="e.g. Google India, Flipkart" className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 outline-none focus:border-[#2176FF]" />
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">CTC Package (LPA)</label>
                <input type="text" placeholder="e.g. ₹8.5 LPA" className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 outline-none focus:border-[#2176FF]" />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button onClick={() => setCreateDriveModal(false)} className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl">Cancel</button>
              <button onClick={() => { setCreateDriveModal(false); alert("Campus Drive created!"); }} className="px-4 py-2 text-xs font-bold bg-[#2176FF] text-white rounded-xl">Publish Drive</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
