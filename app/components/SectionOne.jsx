import Image from 'next/image';

export default function SectionOne() {
  return (
    <section className=' bg-grey'>
      <div className=' py-40 px-20 max-w-screen-2xl mx-auto'>
        <div className='flex flex-col gap-[87px]'>
          <div className=' max-w-[872px] text-black font-medium text-[42px] tracking-[-1.26px] leading-[42px]'>
            <p className='  '>
              SENDerful exists to support children and young people with Special
              Educational Needs and Disabilities including autism toward the
              route of independence.
            </p>
            <p>
              We also support those struggling in the mainstream setting and who
              are at risk of exclusion.
            </p>
          </div>
          <div className='flex justify-between items-end'>
            <div>
              <Image
                src={'/child.png'}
                width={380}
                height={480}
                alt='Child image'
                className=' rounded-[25px]'
              />
            </div>

            <div className=' max-w-[387px]  text-base font-semibold'>
              <p>
                SENDerful is a non-profit organization serving individuals with
                any intellectual, mental, or physical disability.
              </p>
              <br />
              <p>
                SENDerful aim is to establish an inclusive and accessible
                environment for individuals with disabilities and their
                families. SENDerful will assume an active role in advocating and
                educate, conducting training, and implementing programs and
                services to improve the experience within the community
                including churches, related classes, and events, as well as to
                engender a positive and welcoming community for persons with
                disabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
