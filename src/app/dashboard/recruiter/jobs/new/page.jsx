"use client";

import { toast } from "react-toastify";
import { createJob } from "@/lib/actions/jobs";
import { useState } from "react";
import { useSession } from "@/lib/auth-client";

const jobCategories = [
  "Technology",
  "Healthcare",
  "Finance",
  "Education",
  "Marketing",
  "Design",
  "Engineering",
  "Sales",
  "Other",
];

const jobTypes = ["Full-time", "Part-time", "Remote", "Contract", "Internship"];

const currencies = ["USD", "BDT", "EUR", "GBP", "INR", "AED"];

// 1. এখানে প্রপস (Props) হিসেবে companyId রিসিভ করুন
const AddNewJobs = ({ onClose}) => {

   const { data: session } = useSession();
  const companyId = session?.user?.id;

  const [form, setForm] = useState({
    jobTitle: "",
    jobCategory: "Technology",
    jobType: "Full-time",
    salaryMin: "",
    salaryMax: "",
    currency: "USD",
    location: "",
    isRemote: false,
    deadline: "",
    responsibilities: "",
    requirements: "",
    benefits: "",
    status: "active",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // সেফটি চেক: যদি কোনো কারণে companyId না পাওয়া যায়
    if (!companyId) {
      toast.error("Company ID missing! Please login again.");
      return;
    }

    try {
      // 2. এখানে বর্তমান ফর্ম ডাটার সাথে companyId অবজেক্ট আকারে ঢুকিয়ে দেওয়া হচ্ছে
      const jobData = { ...form, companyId };
      
      const result = await createJob(jobData);
      console.log("Job posted:", result);

      toast.success("Job posted successfully!");

      if (typeof onClose === "function") {
        onClose();
      }
    } catch (err) {
      console.error("Failed to post job:", err);
      toast.error("Something went wrong while posting the job.");
    }
  };

  return (
    <div className="flex items-center justify-center bg-slate-900 min-h-screen px-4 py-8 overflow-y-auto">
      <div className="w-full max-w-[95vw] sm:max-w-[560px] md:max-w-[680px] lg:max-w-[780px] bg-[#1c1c1e] rounded-2xl border border-zinc-800 shadow-xl my-auto">

        {/* Header */}
        <div className="flex items-start justify-between px-8 pt-8 pb-5 border-b border-zinc-800">
          <div>
            <h2 className="text-white text-xl font-semibold">Create New Job</h2>
            <p className="text-zinc-500 text-sm mt-1">Fill in the details to post a new job on HireLoop.</p>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-zinc-300 transition-colors mt-0.5 ml-4 flex-shrink-0"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 py-6 space-y-5">

          {/* Section label */}
          <p className="text-zinc-400 text-xs uppercase tracking-widest font-medium">Job Info</p>

          {/* Row 1: Job Title + Job Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-zinc-400 text-sm mb-2 block">Job Title</label>
              <input
                type="text"
                name="jobTitle"
                value={form.jobTitle}
                onChange={handleChange}
                placeholder="e.g. Senior Product Designer"
                className="w-full bg-[#2a2a2c] border border-zinc-700 rounded-lg px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
              />
            </div>
            <div>
              <label className="text-zinc-400 text-sm mb-2 block">Job Category</label>
              <div className="relative">
                <select
                  name="jobCategory"
                  value={form.jobCategory}
                  onChange={handleChange}
                  className="w-full appearance-none bg-[#2a2a2c] border border-zinc-700 rounded-lg px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-zinc-500 transition-colors cursor-pointer"
                >
                  {jobCategories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Row 2: Job Type + Application Deadline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-zinc-400 text-sm mb-2 block">Job Type</label>
              <div className="relative">
                <select
                  name="jobType"
                  value={form.jobType}
                  onChange={handleChange}
                  className="w-full appearance-none bg-[#2a2a2c] border border-zinc-700 rounded-lg px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-zinc-500 transition-colors cursor-pointer"
                >
                  {jobTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div>
              <label className="text-zinc-400 text-sm mb-2 block">Application Deadline</label>
              <input
                type="date"
                name="deadline"
                value={form.deadline}
                onChange={handleChange}
                className="w-full bg-[#2a2a2c] border border-zinc-700 rounded-lg px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-zinc-500 transition-colors [color-scheme:dark]"
              />
            </div>
          </div>

          {/* Row 3: Salary Min + Max + Currency */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-zinc-400 text-sm mb-2 block">Min Salary</label>
              <input
                type="number"
                name="salaryMin"
                value={form.salaryMin}
                onChange={handleChange}
                placeholder="e.g. 50000"
                className="w-full bg-[#2a2a2c] border border-zinc-700 rounded-lg px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
              />
            </div>
            <div>
              <label className="text-zinc-400 text-sm mb-2 block">Max Salary</label>
              <input
                type="number"
                name="salaryMax"
                value={form.salaryMax}
                onChange={handleChange}
                placeholder="e.g. 80000"
                className="w-full bg-[#2a2a2c] border border-zinc-700 rounded-lg px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
              />
            </div>
            <div>
              <label className="text-zinc-400 text-sm mb-2 block">Currency</label>
              <div className="relative">
                <select
                  name="currency"
                  value={form.currency}
                  onChange={handleChange}
                  className="w-full appearance-none bg-[#2a2a2c] border border-zinc-700 rounded-lg px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-zinc-500 transition-colors cursor-pointer"
                >
                  {currencies.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Row 4: Location + Remote toggle */}
          <div>
            <label className="text-zinc-400 text-sm mb-2 block">Location</label>
            <div className="flex gap-3 items-center">
              <div className="relative flex-1">
                <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1C4.79 1 3 2.79 3 5c0 3.25 4 8 4 8s4-4.75 4-8c0-2.21-1.79-4-4-4zm0 5.5A1.5 1.5 0 1 1 7 3a1.5 1.5 0 0 1 0 3z" fill="currentColor"/>
                </svg>
                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="City, Country"
                  disabled={form.isRemote}
                  className="w-full bg-[#2a2a2c] border border-zinc-700 rounded-lg pl-9 pr-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                />
              </div>
              <label className="flex items-center gap-2 cursor-pointer flex-shrink-0 bg-[#2a2a2c] border border-zinc-700 rounded-lg px-4 py-3 hover:border-zinc-500 transition-colors">
                <div className={`w-9 h-5 rounded-full transition-colors relative ${form.isRemote ? "bg-white" : "bg-zinc-700"}`}>
                  <div className={`absolute top-0.5 w-4 h-4 rounded-full transition-all ${form.isRemote ? "left-[18px] bg-black" : "left-0.5 bg-zinc-400"}`} />
                </div>
                <span className="text-sm text-zinc-300">Remote</span>
                <input type="checkbox" name="isRemote" checked={form.isRemote} onChange={handleChange} className="hidden" />
              </label>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-800 pt-1">
            <p className="text-zinc-400 text-xs uppercase tracking-widest font-medium">Job Description</p>
          </div>

          {/* Responsibilities */}
          <div>
            <label className="text-zinc-400 text-sm mb-2 block">Responsibilities</label>
            <textarea
              name="responsibilities"
              value={form.responsibilities}
              onChange={handleChange}
              rows={4}
              placeholder="Describe the key responsibilities of this role..."
              className="w-full bg-[#2a2a2c] border border-zinc-700 rounded-lg px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
            />
          </div>

          {/* Requirements */}
          <div>
            <label className="text-zinc-400 text-sm mb-2 block">Requirements</label>
            <textarea
              name="requirements"
              value={form.requirements}
              onChange={handleChange}
              rows={4}
              placeholder="List the skills, experience, and qualifications required..."
              className="w-full bg-[#2a2a2c] border border-zinc-700 rounded-lg px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
            />
          </div>

          {/* Benefits (optional) */}
          <div>
            <label className="text-zinc-400 text-sm mb-2 block">
              Benefits <span className="text-zinc-600 text-xs font-normal">(optional)</span>
            </label>
            <textarea
              name="benefits"
              value={form.benefits}
              onChange={handleChange}
              rows={3}
              placeholder="e.g. Health insurance, flexible hours, stock options..."
              className="w-full bg-[#2a2a2c] border border-zinc-700 rounded-lg px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
            />
          </div>

        </form>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-8 py-5 border-t border-zinc-800">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg text-sm text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2.5 rounded-lg bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors"
          >
            Post Job
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddNewJobs;