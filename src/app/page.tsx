import Image from "next/image";
import CommentSection from "./components/commentSection";
import Header from "./components/header";
import Cards from "./HeroSection/page";
import image from "./images/gettyimages-1316145932-612x612.jpg";
export default function Home(){
  return(
    <div>
      <div className="mt-[3%] w-[98vw]">
        <Image src={image} alt="food blog" className="w-[94%] lg:h-[550px] mr-[3%] ml-[3%]"/>
        <p className="absolute z-[100] lg:top-[55%] top-[37%] lg:left-[33%] md:left-[32%] md:top-[40%] left-[20%] bg-gray-400 pl-[8px] 
        pr-[8px] lg:px-[15px] text-white font-bold lg:text-[60px] md:text-[45px] text-[25px] mainName">
          Gourmet Diaries
        </p>
      </div>
      <Cards/>
      <CommentSection/>
    </div>
  )
}
