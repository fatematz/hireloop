import Image from "next/image";

import Banner from "@/components/Banner";
import FeaturesJob from "@/components/FeaturesJob";
import Pricing from "@/components/Pricing";
import NextRole from "@/components/NextRole";

export default function Home() {
  return (
    <div className="">
         
        <Banner/>
        <FeaturesJob/>
        <Pricing/>
        <NextRole/>
        
    </div>
  );
}
