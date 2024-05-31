import { motion } from 'framer-motion';
import WoeWhite from '../assets/images/woe-white.png';

export const Hero = () => {
  return (
    <section
      className='w-screen  flex justify-center items-center bg-customDarkBg1 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0'
      id='home'
    >
      <div className='w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-24 md:pt-16 lg:pt-20 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='text-slate-800 text-lg md:text-4xl mb-6 sm:mt-16 mt-16 font-medium'>
            BEM FAKULTAS TEKNIK UMPO <br />{' '}
            <span className='!font-normal text-xl italic'>Mempersembahkan</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className='text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-wide  text-slate-800  px-8 sm:px-8 md:px-20 lg:px-4'>
            <span className='inline md:hidden'>👉 WEEK OF 👈</span>
            <span className='hidden md:inline'>👉 WEEK OF 👈</span>
          </div>
          <div className='mt-2 sm:mt-2 text-4xl sm:text-7xl lg:text-8xl xl:text-8xl font-bold tracking-wide  text-slate-800 px-8 sm:px-20 md:px-24 lg:px-0'>
            ENGINEERING
            <br />
            <span className='mt-10'>2024</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className='text-customGrayText text-xs lg:text-xl xl:text-2xl mt-10 px-12 sm:px-48 flex space-x-2 font-semibold'>
            <span className='text-yellow-500'>~ Beranjak</span>
            <span className='text-red-500'>Bergerak</span>
            <span className='text-indigo-800'>Beraksi</span>
            <span className='text-pink-700'>dan Buktikan ~</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className='flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center'>
            <a
              href='#features'
              className='custom-button-colored w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0'
            >
              Jelajahi
            </a>
            <a
              href='https://www.instagram.com/bemft_umpo'
              target='_blank'
              className='w-64 sm:w-52 h-12 rounded-xl font-bold text-orange-500 border border-solid  flex justify-center items-center cursor-pointer bg-white hover:bg-orange-500 hover:text-white border-orange-500 transition'
            >
              Kontak Kami
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className='relative w-screen flex justify-center mt-16 lg:mt-10'>
            <img
              src={WoeWhite}
              alt='WOE LOGO'
              className='w-1/2 md:w-1/3 mx-auto absolute z-10 -top-28 lg:-top-36'
            />
          </div>
        </motion.div>
        <div className='relative w-screen flex justify-center'>
          <div className='custom-shape-divider-bottom-1665343298 mt-4 sm:mt-16 md:mt-8 hidden lg:block'>
            <svg
              data-name='Layer 1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1200 120'
              preserveAspectRatio='none'
              className=' bg-customDarkBg2'
            >
              <path
                d='M1200 0L0 0 598.97 114.72 1200 0z'
                className='shape-fill custom-bg-dark1'
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
