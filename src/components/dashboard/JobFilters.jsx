"use client";
import { useState } from "react";

const jobTypes = ["All", "Full-time", "Part-time", "Contract", "Freelance", "Internship"];

export default function JobFilters({ jobs }) {
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState("All");

  const filtered = jobs?.filter((job) => {
    const matchSearch = job.jobTitle?.toLowerCase().includes(search.toLowerCase());
    const matchType = activeType === "All" || job.jobType === activeType;
    return matchSearch && matchType;
  }) ?? [];

  return (
    <div>
      {/* Search Bar */}
      <div className="flex gap-3 mb-6">
        <div className="flex-1 flex items-center gap-3 bg-[#1a1a1c] border border-zinc-800 rounded-xl px-4 h-11">
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="text-zinc-500 flex-shrink-0">
            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by job title, keywords..."
            className="bg-transparent outline-none text-sm text-white placeholder-zinc-600 w-full"
          />
        </div>
        <button className="bg-white text-black text-sm font-semibold px-5 rounded-xl hover:bg-zinc-200 transition-colors">
          Search Jobs
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        <span className="text-zinc-500 text-sm">Job Type:</span>
        {jobTypes.map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
              activeType === type
                ? "border-white text-white bg-zinc-800"
                : "border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200 bg-[#1a1a1c]"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Result Count */}
      <div className="flex items-center justify-between mb-5">
        <p className="text-base font-semibold text-white">
          Found <span className="text-zinc-400">{filtered.length}</span> Jobs
        </p>
        <select className="bg-[#1a1a1c] border border-zinc-700 text-zinc-300 text-sm rounded-lg px-3 py-2 outline-none cursor-pointer">
          <option>Most Recent</option>
          <option>Highest Salary</option>
          <option>Most Relevant</option>
        </select>
      </div>

      {/* Job Cards */}
      <div className="flex flex-col gap-3">
        {filtered.map((job, i) => (
          <div key={i} className="bg-[#1a1a1c] border border-zinc-800 rounded-2xl px-6 py-5 flex items-center gap-5 hover:border-zinc-600 transition-colors cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0 text-xl">💼</div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-white mb-1 truncate">{job.jobTitle}</h3>
              <p className="text-sm text-zinc-500 mb-3">{job.location || "Remote"}{job.isRemote ? " • Remote" : ""}</p>
              <div className="flex flex-wrap gap-2">
                {job.salaryMin && job.salaryMax && (
                  <span className="text-xs px-3 py-1 rounded-md bg-zinc-900 border border-zinc-700 text-zinc-300">💰 ${job.salaryMin} – ${job.salaryMax}</span>
                )}
                {job.jobType && (
                  <span className="text-xs px-3 py-1 rounded-md bg-zinc-900 border border-zinc-700 text-zinc-300">🕐 {job.jobType}</span>
                )}
                {job.jobCategory && (
                  <span className="text-xs px-3 py-1 rounded-md bg-zinc-900 border border-zinc-700 text-zinc-300">{job.jobCategory}</span>
                )}
                {job.status === "active" && (
                  <span className="text-xs px-3 py-1 rounded-md bg-emerald-950/40 border border-emerald-800/50 text-emerald-400">⚡ Active</span>
                )}
              </div>
            </div>
            <button className="text-zinc-600 hover:text-zinc-300 transition-colors flex-shrink-0 self-start p-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 2h10v13l-5-3-5 3V2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-zinc-600">
            <p className="text-lg font-medium mb-1">No jobs found</p>
            <p className="text-sm">Try a different search or filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}