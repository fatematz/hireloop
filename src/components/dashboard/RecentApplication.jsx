const applications = [
  {
    id: 1,
    name: "Julianne Moore",
    role: "Senior Product Designer",
    dateApplied: "Oct 24, 2023",
    experience: "6 years",
    status: "Interviewing",
  },
  {
    id: 2,
    name: "Robert Downey",
    role: "Backend Engineer",
    dateApplied: "Oct 23, 2023",
    experience: "4 years",
    status: "New",
  },
  {
    id: 3,
    name: "Emma Stone",
    role: "Marketing Lead",
    dateApplied: "Oct 22, 2023",
    experience: "8 years",
    status: "Reviewing",
  },
  {
    id: 4,
    name: "Chris Pratt",
    role: "Product Manager",
    dateApplied: "Oct 21, 2023",
    experience: "5 years",
    status: "Rejected",
  },
];

const companies = [
  {
    id: 1,
    name: "Google Inc.",
    category: "Technology",
    location: "Mountain View",
    activeJobs: 24,
  },
  {
    id: 2,
    name: "Meta Platforms",
    category: "Social Media",
    location: "Menlo Park",
    activeJobs: 18,
  },
  {
    id: 3,
    name: "Stripe",
    category: "Fintech",
    location: "San Francisco",
    activeJobs: 12,
  },
  {
    id: 4,
    name: "Tesla",
    category: "Automotive",
    location: "Austin",
    activeJobs: 31,
  },
];

const statusConfig = {
  Interviewing: "bg-green-500/20 text-green-400 border border-green-500/30",
  Reviewing: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
  New: "bg-zinc-600/40 text-zinc-300 border border-zinc-500/40",
  Rejected: "bg-red-500/20 text-red-400 border border-red-500/30",
};

const RecentApplication = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-4 my-[30px]">

      {/* Left — Recent Applications */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-lg font-medium">Recent Applications</h2>
          <button className="text-zinc-400 text-sm hover:text-white transition-colors">
            View all
          </button>
        </div>

        <div className="bg-[#121212] rounded-xl border border-zinc-800 overflow-hidden">
          {/* Table header — hidden on mobile, shown on md+ */}
          <div className="hidden md:grid md:grid-cols-[2fr_2fr_1.5fr_1.2fr_1.2fr] px-5 py-3 border-b border-zinc-800">
            {["Candidate Name", "Role", "Date Applied", "Experience", "Status"].map((h) => (
              <span key={h} className="text-zinc-500 text-xs font-normal">
                {h}
              </span>
            ))}
          </div>

          {applications.map((app, i) => (
            <div
              key={app.id}
              className={`${
                i !== applications.length - 1 ? "border-b border-zinc-800/60" : ""
              } hover:bg-white/[0.02] transition-colors`}
            >
              {/* Desktop row */}
              <div className="hidden md:grid md:grid-cols-[2fr_2fr_1.5fr_1.2fr_1.2fr] items-center px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-700 flex-shrink-0" />
                  <span className="text-zinc-200 text-sm font-medium">{app.name}</span>
                </div>
                <span className="text-zinc-400 text-sm">{app.role}</span>
                <span className="text-zinc-400 text-sm">{app.dateApplied}</span>
                <span className="text-zinc-400 text-sm">{app.experience}</span>
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusConfig[app.status]}`}>
                    {app.status}
                  </span>
                </div>
              </div>

              {/* Mobile card */}
              <div className="flex md:hidden items-start gap-3 px-4 py-4">
                <div className="w-9 h-9 rounded-full bg-zinc-700 flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-zinc-200 text-sm font-medium">{app.name}</span>
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${statusConfig[app.status]}`}>
                      {app.status}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-xs mt-1">{app.role}</p>
                  <div className="flex gap-3 mt-1.5 flex-wrap">
                    <span className="text-zinc-500 text-xs">{app.dateApplied}</span>
                    <span className="text-zinc-500 text-xs">•</span>
                    <span className="text-zinc-500 text-xs">{app.experience} exp</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — My Top Companies */}
      <div className="w-full xl:w-[300px] xl:flex-shrink-0">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-lg font-medium">My Top Companies</h2>
          <button className="text-zinc-400 text-sm hover:text-white transition-colors">
            View all
          </button>
        </div>

        <div className="bg-[#121212] rounded-xl border border-zinc-800 overflow-hidden">
          {/* On mobile/tablet: 2-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1">
            {companies.map((company, i) => (
              <div
                key={company.id}
                className={`flex items-center gap-3 px-4 py-3.5 hover:bg-white/[0.02] transition-colors border-zinc-800/60
                  ${i % 2 === 0 && i + 1 < companies.length ? "sm:border-r xl:border-r-0" : ""}
                  ${i < companies.length - 2 ? "sm:border-b xl:border-b" : ""}
                  ${i < companies.length - 1 ? "border-b sm:border-b-0 xl:border-b" : ""}
                `}
              >
                <div className="w-9 h-9 rounded-lg bg-zinc-700/60 flex items-center justify-center flex-shrink-0 border border-zinc-700">
                  <span className="text-zinc-400 text-xs font-semibold">
                    {company.name[0]}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-zinc-200 text-sm font-medium leading-tight truncate">
                    {company.name}
                  </p>
                  <p className="text-zinc-500 text-xs mt-0.5 truncate">
                    {company.category} • {company.location}
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-white text-base font-semibold leading-tight">
                    {company.activeJobs}
                  </p>
                  <p className="text-zinc-600 text-[10px] uppercase tracking-wide mt-0.5">
                    Active Jobs
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 pt-2 border-t border-zinc-800/60">
            <button className="w-full py-2.5 rounded-lg border border-zinc-700 text-zinc-300 text-sm hover:bg-zinc-700/30 transition-colors">
              View All Companies
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default RecentApplication;