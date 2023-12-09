import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='absolute top-0 left-0 w-full z-50'>
      <div className='flex px-20 justify-between items-center pt-5'>
        
      <div className='flex items-center justify-center gap-1 text-xl font-bold tracking-[-0.6px]'>
            <Image 
            src='/logo.svg'
            width={36}
            height={36}
            alt='Logo'
            />
            <h1 className=' text-white'>SENDerful</h1>
        </div>

        <button className=" bg-white py-3 px-4 rounded-[100px] text-base font-semibold text-black">Learn more</button>
      </div>
    </nav>
  )
}
export default Navbar