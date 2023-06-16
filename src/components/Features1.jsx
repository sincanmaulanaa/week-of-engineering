import { motion } from 'framer-motion';
import { CheckArrowIcon } from '../assets/icons/CheckArrowIcon';

export const Features1 = () => {
  return (
    <section
      className='w-full bg-customDarkBg2 mt-20 mb-8 sm:mt-16 sm:mb-16 xl:mt-0  xl:m pt-[2rem]  md:pt-[12vw] lg:pt-0'
      id='features'
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className='flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16'>
          <div className='w-full lg:w-full mb-12 lg:mb-0'>
            <div className='flex flex-col lg:flex-row mx-auto lg:space-x-14 lg:mx-auto w-11/12 sm:w-4/5 lg:w-11/12 lg:w-unset'>
              <div>
                <h2 className='mb-8 text-4xl lg:text-5xl custom-block-big-title lg:!leading-snug'>
                  Apa itu Week of Engineering?
                </h2>
                <p className='mb-10 text-customGrayText leading-loose'>
                  WEEK OF ENGINEERING 2023 merupakan kompetisi umum yang
                  diselenggarakan oleh Badan Eksekutif Mahasiswa (BEM-FT)
                  Universitas Muhammadiyah Ponorogo.
                  <br /> <br />
                  Kompetisi dan juga Seminar ini menguji kemampuan kreativitas
                  serta keaktifan pelajar dalam menghasilkan karya yang dapat
                  disesuaikan dalam masa sekarang.
                </p>
              </div>
              <div className='w-full md:mt-[100px] xl:mt-[155px] lg:flex lg:space-x-12'>
                <div id='smk' className='w-full'>
                  <span className='custom-block-subtitle lg:!text-xl'>
                    Lomba Siswa SMA/SMK sederajat
                  </span>
                  <ul className='mt-4 text-white'>
                    <li className='mb-4 flex'>
                      <CheckArrowIcon />
                      <span>Essay</span>
                    </li>
                    <li className='mb-4 flex'>
                      <CheckArrowIcon />
                      <span>Gambar Teknik</span>
                    </li>
                    <li className='mb-4 flex'>
                      <CheckArrowIcon />
                      <span>UI/UX Design</span>
                    </li>
                    <li className='mb-4 flex'>
                      <CheckArrowIcon />
                      <span>Poster</span>
                    </li>
                  </ul>
                </div>
                <div id='mahasiswa' className='mt-8 lg:mt-0 w-full'>
                  <span className='custom-block-subtitle lg:!text-xl'>
                    Lomba Mahasiswa Fakultas Teknik
                  </span>
                  <ul className='mt-4 text-white'>
                    <li className='mb-4 flex'>
                      <CheckArrowIcon />
                      <span>Futsal</span>
                    </li>
                    <li className='mb-4 flex'>
                      <CheckArrowIcon />
                      <span>Mobile Legends</span>
                    </li>
                    <li className='mb-4 flex'>
                      <CheckArrowIcon />
                      <span>Video Profiling Fakultas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
