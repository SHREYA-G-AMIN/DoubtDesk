"use client";

import React, { useState, useEffect } from "react";
import { Award, BookOpen, Shield, HelpCircle, MessageSquare } from "lucide-react";

interface MetricCard {
  label: string;
  value: number;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export default function ProfilePage() {
  // Hardcoded profile states so Clerk never gets called on the client side
  const profileData = {
    name: "Shreya Amin",
    email: "shreyagamin@gmail.com",
    role: "Student",
    university: "Academic Computer Science Lab",
    year: "2028",
    karmaScore: 45, // Test value to see your beautiful rendering styling!
  };

  const metrics: MetricCard[] = [
    { label: "Doubts Logged", value: 14, icon: HelpCircle, color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
    { label: "Community Solutions", value: 22, icon: MessageSquare, color: "text-green-400 bg-green-500/10 border-green-500/20" },
    { label: "Virtual Rooms", value: 5, icon: BookOpen, color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
    { label: "Karma Points", value: profileData.karmaScore, icon: Award, color: "text-violet-400 bg-violet-500/10 border-violet-500/20" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 pb-12 pt-12 text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Visual Ambience Enhancements */}
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-blue-600/5 blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cyan-600/5 blur-[128px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        
        {/* User Card */}
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-6 p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-xl">
          <div className="h-24 w-24 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-3xl font-black shadow-[0_0_30px_rgba(59,130,246,0.15)] uppercase">
            {profileData.name.charAt(0)}
          </div>
          
          <div className="flex-1 space-y-2">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <h1 className="text-2xl font-bold tracking-tight text-slate-100">{profileData.name}</h1>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Shield className="w-2.5 h-2.5" /> {profileData.role}
              </span>
            </div>
            <p className="text-sm text-slate-400 font-medium">{profileData.email}</p>
            <p className="text-xs text-slate-500">{profileData.university} • Year {profileData.year}</p>
          </div>
        </div>

        {/* Dashboard Analytical Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, idx) => (
            <div key={idx} className="p-5 rounded-xl border border-white/5 bg-white/[0.01] flex flex-row sm:flex-col justify-between items-center sm:items-start gap-4 sm:gap-6">
              <div className="flex items-center sm:justify-between sm:w-full gap-3">
                <div className={`p-2 rounded-xl border ${metric.color}`}>
                  <metric.icon className="h-4 w-4" />
                </div>
                <span className="text-xs font-medium text-slate-400 tracking-wide sm:hidden">{metric.label}</span>
              </div>
              <div className="flex flex-col text-right sm:text-left">
                <span className="text-xs font-medium text-slate-400 tracking-wide hidden sm:block mb-1">{metric.label}</span>
                <span className="text-2xl font-bold tracking-tight text-slate-100">{metric.value}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}