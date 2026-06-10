'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BrowseJobs() {
  const [browseJobs, setBrowseJobs] = useState([]);

  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    fetch(`${baseUrl}/api/browsejobs`)
      .then((res) => res.json())
      .then((data) => setBrowseJobs(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="bg-slate-900">
    <div className="grid grid-cols-1  md:grid-cols-3 gap-6 py-9 min-h-screen max-w-[1320px] mx-auto">
      {browseJobs.map((job) => (
        <div key={job._id} className=" p-4 rounded-xl bg-black text-white">
          <img src={job.companyLogo} alt={job.companyName} className="w-12 h-12 rounded" />
          <h3 className="text-xl font-bold mt-2">{job.title}</h3>
          <p className="text-sm text-gray-400">{job.shortDescription}</p>
          <div className="flex justify-between items-center">
          <div className="mt-4 flex gap-2">
            <span className="bg-purple-600 px-3 py-1 rounded-full text-xs">{job.jobType}</span>
            <span className="bg-gray-700 px-3 py-1 rounded-full text-xs">{job.location}</span>
          </div>
          <div className="">
            <Link className="text-[12px] bg-white text-black py-1 px-3 rounded-full" href={`/browse/browsejobs/${job._id}`}>
            See Details
            </Link>
          </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}