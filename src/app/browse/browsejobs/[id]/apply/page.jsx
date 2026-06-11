import { userinfo } from "@/lib/core/userinfo";



const ApplyPage = async () => {

    const user = await userinfo()

    if(!user){
        
    }

    return (
        <div>
            Apply now
        </div>
    );
};

export default ApplyPage;