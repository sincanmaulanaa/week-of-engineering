import { motion } from 'framer-motion';
import futsal from '../assets/images/competitions/futsal.png';
import keteknikkan from '../assets/images/competitions/keteknikkan.png';
import mlbb from '../assets/images/competitions/mlbb.png';

export const FeaturesDiagonal = () => {
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
        <div className=' 2xl:w-[1150px] xl:w-[1050px]  md:w-4/5 flex flex-col justify-center bg-customDarkBg1 pt-12 lg:pt-6 pb-8 lg:pb-20 mx-auto'>
          <div className='w-3/4 lg:w-full flex flex-col lg:mx-unset mx-auto'>
            <h2 className='mt-0 !mb-0 md:mb-5 text-xl lg:text-center lg:text-6xl custom-block-big-title lg:max-w-3xl lg:mx-auto lg:!leading-normal'>
              Ikuti dan Tantang Kemampuanmu di WOE 2024
            </h2>
          </div>
          <div className='w-4/5 lg:w-full flex justify-center flex-col lg:flex-row lg:flex-wrap space-y-8 lg:space-y-0 lg:space-x-8 mx-auto pt-16 lg:pt-14'>
            <div className='shadow-lg rounded-xl p-5 bg-white lg:w-1/4'>
              <img src={futsal} alt='futsal' className='rounded-xl' />
              <p className='mb-10 text-customGrayText leading-loose line-clamp-3 mt-4'>
                Ayo tunjukkan keterampilanmu di lapangan futsal! Lomba ini akan
                menguji kemampuanmu dalam mengontrol bola, strategi tim, dan
                kecepatan bermain. Siapkan dirimu untuk aksi seru di lapangan!
              </p>
              <a
                href='/futsal'
                className='w-full h-12 custom-button-colored mr-10'
              >
                Daftar
              </a>
            </div>
            <div className='shadow-lg rounded-xl p-5 bg-white lg:w-1/4'>
              <img src={mlbb} alt='mlbb' className='rounded-xl' />
              <p className='mb-10 text-customGrayText leading-loose line-clamp-3 mt-4'>
                Ayo tunjukkan kehebatanmu dalam dunia Mobile Legends! Lomba
                E-sport ini akan menguji strategi, kecepatan, dan kerjasama
                timmu. Siapakah yang akan menjadi juara dalam pertarungan ini?
              </p>
              <a
                href='/mlbb'
                className='w-full h-12 custom-button-colored mr-10'
              >
                Daftar
              </a>
            </div>
            <div className='shadow-lg rounded-xl p-5 mt-8 lg:mt-0 bg-white lg:w-1/4'>
              <img src={keteknikkan} alt='keteknikkan' className='rounded-xl' />
              <p className='mb-10 text-customGrayText leading-loose line-clamp-3 mt-4'>
                Lomba keteknikan Fakultas Teknik ini untuk mengenalkan
                siswa/siswi SMA sederajat kepada Fakultas Teknik Universitas
                Muhammadiyah Ponorogo. Tidak hanya seminar, kami juga
                memperkenalkan sarana dan prasarana berupa bengkel maupun lab
                prakikum yang dimiliki oleh Fakultas Teknik universitas
                Muhammadiyah Ponorogo.
              </p>
              <a
                href='/keteknikkan'
                className='w-full h-12 custom-button-colored mr-10'
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
