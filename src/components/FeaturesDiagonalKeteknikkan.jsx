import { motion } from 'framer-motion';
import futsal from '../assets/images/competitions/futsal.jpg';
import uiux from '../assets/images/keteknikkan-lomba/uiux.jpg';
import gambarTeknik from '../assets/images/keteknikkan-lomba/gambar-teknik.jpg';
import poster from '../assets/images/keteknikkan-lomba/poster.jpg';

export const FeaturesDiagonalKeteknikkan = () => {
  return (
    <section
      className='lg:mb-16 w-full flex flex-col justify-center items-center bg-customDarkBg1'
      id='featuresDiagonal'
    >
      <div className='custom-shape-divider-bottom-1665696614'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
          className='custom-bg-dark2'
        >
          <path
            d='M1200 120L0 16.48 0 0 1200 0 1200 120z'
            className='custom-bg-dark1'
          ></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className=' 2xl:w-[1150px] xl:w-[1050px]  md:w-4/5 flex justify-center bg-customDarkBg1 pt-4 lg:pt-24 pb-8 lg:pb-20 mx-auto lg:flex-row flex-col'>
          <div className='w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto'>
            <h2 className='mt-10 !mb-0 md:mb-5 !text-4xl lg:text-5xl custom-block-big-title !leading-snug'>
              Daftar Lomba Keteknikkan.
            </h2>
          </div>
          <div className='w-4/5 lg:w-1/2 lg:pl-16 flex justify-center flex-col space-y-8 mx-auto pt-16 lg:pt-0'>
            <div className='border-2 border-gray-400 rounded-xl p-5 bg-gray-900'>
              <img src={uiux} alt='uiux design' className='rounded-xl' />
              <p className='mb-10 text-customGrayText leading-loose mt-4'>
                Kompetisi UI/UX Design tingkat SMA/SMK Sederajat adalah sebuah
                ajang kompetisi desain antar pelajar SMA/SMK untuk merancang
                sebuah antarmuka atau produk yang memiliki nilai inovasi dan
                kegunaan yang tinggi.
              </p>
              <a
                href='https://bit.ly/UIUXWOE2023'
                target='_blank'
                className='w-full md:w-[210px] h-12 custom-button-colored mr-10'
              >
                Daftar
              </a>
            </div>
            <div className='border-2 border-gray-400 rounded-xl p-5 bg-gray-900'>
              <img
                src={gambarTeknik}
                alt='gambar teknik'
                className='rounded-xl'
              />
              <p className='mb-10 text-customGrayText leading-loose mt-4'>
                Gambar teknik merupakan alat untuk menyatakan gagasan atau ide
                ahli teknik. Gambar Teknik dikenali oleh seluruh perusahaan yang
                berbeda karena memiliki standar gambar tertentu.
              </p>
              <a
                href='https://bit.ly/LombaGamtek2DWOE2023'
                target='_blank'
                className='w-full md:w-[210px] h-12 custom-button-colored mr-10'
              >
                Daftar
              </a>
            </div>
            <div className='border-2 border-gray-400 rounded-xl p-5 bg-gray-900'>
              <img src={poster} alt='poster' className='rounded-xl' />
              <p className='mb-10 text-customGrayText leading-loose mt-4'>
                Kompetisi Design Grafis tingkat SMA/SMK Sederajat adalah sebuah
                ajang kompetisi desain antar pelajar SMA/SMK untuk
                mengekspresikan ide-ide mereka secara visual dan menciptakan
                pesan yang kuat melalui desain poster.
              </p>
              <a
                href='https://bit.ly/LombaposterWOE2023'
                target='_blank'
                className='w-full md:w-[210px] h-12 custom-button-colored mr-10'
              >
                Daftar
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      <div className='custom-shape-divider-top-1665696661 w-full'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
          className='custom-bg-dark2'
        >
          <path
            d='M1200 120L0 16.48 0 0 1200 0 1200 120z'
            className='custom-bg-dark1'
          ></path>
        </svg>
      </div>
    </section>
  );
};
