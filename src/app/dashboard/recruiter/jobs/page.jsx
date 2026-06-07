// import { getCompanyJobs } from "@/lib/api/jobs";
// import { auth } from "@/lib/auth";
// import { headers } from "next/headers";

// const jobTypes = ["Full-time", "Part-time", "Contract", "Freelance", "Internship"];

// const RecruiterJobs = async () => {
//   const session = await auth.api.getSession({ headers: await headers() });
//   const companyId = session?.user?.id;
//   const jobs = await getCompanyJobs(companyId);

//   return (
//     <div className="min-h-screen bg-[#0d0d0e] text-white p-6">

//       {/* Filter Bar */}
//       <div className="flex items-center gap-3 mb-6 flex-wrap">
//         <span className="text-zinc-400 text-sm font-medium">Job Type:</span>
//         {jobTypes.map((type) => (
//           <button
//             key={type}
//             className="px-4 py-1.5 rounded-full text-sm border border-zinc-700 text-zinc-300 hover:border-zinc-400 hover:text-white transition-colors bg-[#1a1a1c]"
//           >
//             {type}
//           </button>
//         ))}
//       </div>

//       {/* Result Count */}
//       <div className="flex items-center justify-between mb-5">
//         <p className="text-base font-semibold text-white">
//           Found <span className="text-zinc-400">{jobs?.length ?? 0}</span> Jobs
//         </p>
//         <select className="bg-[#1a1a1c] border border-zinc-700 text-zinc-300 text-sm rounded-lg px-3 py-2 outline-none cursor-pointer">
//           <option>Most Recent</option>
//           <option>Highest Salary</option>
//           <option>Most Relevant</option>
//         </select>
//       </div>

//       {/* Job Cards */}
//       <div className="flex flex-col gap-3">
//         {jobs?.map((job, i) => (
//           <div
//             key={i}
//             className="bg-[#1a1a1c] border border-zinc-800 rounded-2xl px-6 py-5 flex items-center gap-5 hover:border-zinc-600 transition-colors cursor-pointer"
//           >
//             {/* Logo */}
//             <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0 text-xl">
//               💼
//             </div>

//             {/* Info */}
//             <div className="flex-1 min-w-0">
//               <h3 className="text-base font-semibold text-white mb-1 truncate">{job.jobTitle}</h3>
//               <p className="text-sm text-zinc-500 mb-3">
//                 {job.location || "Remote"} {job.isRemote && "• Remote"}
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {job.salaryMin && job.salaryMax && (
//                   <span className="text-xs px-3 py-1 rounded-md bg-zinc-900 border border-zinc-700 text-zinc-300">
//                     💰 ${job.salaryMin} – ${job.salaryMax}
//                   </span>
//                 )}
//                 {job.jobType && (
//                   <span className="text-xs px-3 py-1 rounded-md bg-zinc-900 border border-zinc-700 text-zinc-300">
//                     🕐 {job.jobType}
//                   </span>
//                 )}
//                 {job.jobCategory && (
//                   <span className="text-xs px-3 py-1 rounded-md bg-zinc-900 border border-zinc-700 text-zinc-300">
//                     {job.jobCategory}
//                   </span>
//                 )}
//                 {job.status === "active" && (
//                   <span className="text-xs px-3 py-1 rounded-md bg-emerald-950/40 border border-emerald-800/50 text-emerald-400">
//                     ⚡ Active
//                   </span>
//                 )}
//               </div>
//             </div>

//             {/* Bookmark */}
//             <button className="text-zinc-600 hover:text-zinc-300 transition-colors flex-shrink-0 self-start p-1">
//               <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                 <path d="M3 2h10v13l-5-3-5 3V2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
//               </svg>
//             </button>
//           </div>
//         ))}

//         {/* Empty State */}
//         {(!jobs || jobs.length === 0) && (
//           <div className="text-center py-20 text-zinc-600">
//             <p className="text-lg font-medium mb-1">No jobs posted yet</p>
//             <p className="text-sm">Post your first job to see it here.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RecruiterJobs;



import { getCompanyJobs } from "@/lib/api/jobs";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import JobFilters from "@/components/dashboard/JobFilters";

const RecruiterJobs = async () => {
  const session = await auth.api.getSession({ headers: await headers() });
  const companyId = session?.user?.id;
  const jobs = await getCompanyJobs(companyId);

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <JobFilters jobs={jobs} />
    </div>
  );
};

export default RecruiterJobs;