
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