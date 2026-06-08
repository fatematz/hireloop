import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { ToastContainer } from "react-toastify";

const DashboardLayout = ({children}) => {
    return (
        <div className="flex min-h-screen">
            <DashboardSidebar/>
            <div className="flex-1">{children}</div>
            <ToastContainer 
          position="top-right"
          autoClose={3000}
          theme="dark"
        />
        </div>
    );
};

export default DashboardLayout;