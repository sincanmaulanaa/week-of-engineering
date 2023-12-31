import { motion } from 'framer-motion';
import futsal from '../assets/images/competitions/futsal.jpg';
import keteknikkan from '../assets/images/competitions/keteknikkan.jpg';
import essay from '../assets/images/competitions/essay.jpg';
import mlbb from '../assets/images/competitions/mlbb.jpg';
import videoProfil from '../assets/images/competitions/video-profil.jpg';

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
        <div className=' 2xl:w-[1150px] xl:w-[1050px]  md:w-4/5 flex flex-col justify-center bg-customDarkBg1 pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto'>
          <div className='w-3/4 lg:w-full flex flex-col lg:mx-unset mx-auto'>
            <h2 className='mt-10 !mb-0 md:mb-5 !text-4xl lg:text-center lg:text-5xl custom-block-big-title lg:max-w-md lg:mx-auto lg:!leading-normal'>
              Daftar &amp; Uji Skill Kamu di WOE 2023!
            </h2>
          </div>
          <div className='w-4/5 lg:w-full flex justify-center flex-col lg:flex-row lg:flex-wrap space-y-8 lg:space-y-0 lg:space-x-8 mx-auto pt-16 lg:pt-14'>
            <div className='border-2 border-gray-400 rounded-xl p-5 bg-gray-900 lg:w-1/4'>
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
            <div className='border-2 border-gray-400 rounded-xl p-5 bg-gray-900 lg:w-1/4'>
              <img src={essay} alt='essay' className='rounded-xl' />
              <p className='mb-10 text-customGrayText leading-loose line-clamp-3 mt-4'>
                Lomba Essay ini memberikanmu kesempatan untuk mengekspresikan
                gagasan dan pemikiranmu secara tertulis. Tuliskan pendapat, ide,
                atau pandanganmu terkait topik terkait bidang teknik. Buktikan
                kepiawaianmu dalam merangkai kata dan menginspirasi pembaca.
              </p>
              <a
                href='/essay'
                className='w-full h-12 custom-button-colored mr-10'
              >
                Daftar
              </a>
            </div>
            <div className='border-2 border-gray-400 rounded-xl p-5 bg-gray-900 lg:w-1/4'>
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
            <div className='lg:pt-10 lg:flex lg:space-x-8 lg:justify-center'>
              <div className='border-2 border-gray-400 rounded-xl p-5 bg-gray-900 lg:w-1/4'>
                <img
                  src={videoProfil}
                  alt='videoProfil'
                  className='rounded-xl'
                />
                <p className='mb-10 text-customGrayText leading-loose line-clamp-3 mt-4'>
                  Lomba Profiling Video ini adalah platform untukmu
                  mengekspresikan kreativitasmu melalui pembuatan video.
                  Tunjukkan keunikan, keistimewaan, dan semangat Fakultas Teknik
                  melalui karya video yang mengesankan.
                </p>
                <a
                  href='/videoProfile'
                  className='w-full h-12 custom-button-colored mr-10'
                >
                  Daftar
                </a>
              </div>
              <div className='border-2 border-gray-400 rounded-xl p-5 mt-8 lg:mt-0 bg-gray-900 lg:w-1/4'>
                <img
                  src={keteknikkan}
                  alt='keteknikkan'
                  className='rounded-xl'
                />
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
