import { DeleteDashboard } from "@/components/delete/DeleteDashbord";

const TwoLayoutPage = ({children}) => {
    return (
        <div className="flex min-h-screen">
           <DeleteDashboard/>
            {children}
        </div>
    );
};

export default TwoLayoutPage;