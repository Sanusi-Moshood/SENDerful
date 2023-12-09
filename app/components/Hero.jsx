import Image from "next/image"
import Navbar from "./Navbar"

const Hero = () => {
  return (
    <div className=" bg-cyan min-h-screen">
        <Navbar  />


        <div className="relative z-10 flex h-screen w-full px-20 items-end  max-w-screen-2xl mx-auto">
          <div className="w-full py-[100px] flex flex-col gap-12">
          <div >
            <h1  className=" text-[68px]  font-medium text-white tracking-[-2.04px] leading-[72px]">Empowering futures: </h1>
            <h1  className=" text-[68px]  font-medium text-white tracking-[-2.04px] leading-[72px]">Specialized support for children</h1>
          </div>
          <div>
            
        <button className=" bg-white py-3 px-4 rounded-[100px] text-base font-semibold text-black">Learn more</button>
          </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full">
          <Image 
          src={'/hero.png'}
           
          alt="hero"
          fill  
          className=" object-cover object-center"
          />

        </div>
    </div>
  )
}
export default Hero