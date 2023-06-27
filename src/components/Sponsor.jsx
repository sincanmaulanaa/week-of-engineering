import { motion } from 'framer-motion';
import mahameru from '../assets/logos/mahameru.png';
import dicoding from '../assets/logos/dicoding.png';
import ldp from '../assets/logos/ldp.jpg';
import mulia from '../assets/logos/mulia.png';

export const Sponsor = () => (
  <section className='py-12 sm:py-24 bg-customDarkBg2 w-full mt-16 mb-16'>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className='container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5'>
        <div className='flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center'>
          <div className='w-full lg:w-1/2 px-4 mb-12 lg:mb-0'>
            <div className='flex flex-col'>
              <h2 className='mb-2  text-2xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-white'>
                Week of Engineering 2023
              </h2>
              <h2 className='text-4xl lg:!text-3xl lg:mt-6 sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-customSecondary'>
                Sponsored by
              </h2>
            </div>
          </div>
          <div className='w-2/3 sm:w-[620px] lg:w-1/2 mx-auto lg:mx-0 lg:pl-10'>
            <div className='-m-4 grid grid-cols-3 gap-4'>
              <div className='w-full sm:w-full p-2 lg:py-5 lg:px-6 flex justify-center items-center rounded-xl bg-white'>
                <img
                  src={dicoding}
                  alt='Dicoding Academy'
                  className='w-72 lg:w-72'
                />
              </div>
              <div className='w-full sm:w-full p-2 lg:py-5 lg:px-6 flex justify-center items-center rounded-xl bg-white'>
                <img
                  src={mahameru}
                  alt='Mahameru'
                  className='w-72 lg:w-72 bg-red-600'
                />
              </div>
              <div className='w-full sm:w-full p-2 lg:py-5 lg:px-6 flex justify-center items-center rounded-xl bg-white'>
                <img src={ldp} alt='LDP' className='w-72 lg:w-72' />
              </div>
              <div className='w-full sm:w-full p-2 py-8 lg:py-16 lg:px-6 flex justify-center items-center rounded-xl bg-white'>
                <img src={mulia} alt='mulia' className='w-72 lg:w-72' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
