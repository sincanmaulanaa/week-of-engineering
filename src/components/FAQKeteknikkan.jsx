import { useState } from 'react';
import { motion } from 'framer-motion';

const FAQData = [
  {
    question: 'Lomba Keteknikkan ini untuk siapa aja sih?',
    answer:
      'Lomba Keteknikkan ini diperuntukkan untuk siswa dan siswi SMA/SMK sederajat.',
  },
  {
    question: 'Syarat pendaftarannya apa aja?',
    answer: [
      [
        '1. Peserta adalah siswa/siswi aktif SMA/SMK sederajat dibuktikan dengan KTP (Kartu Tanda Pelajar) atau Surat Keterangan Aktif sebagai Siswa/Siswi.',
      ],
      [<br />],
      ['2. Peserta wajib mengisi form pendaftaran.'],
      [<br />],
      [<br />],
      ['Persyaratan lainnya bisa dilihat di guidebook ya.'],
    ],
  },
  {
    question: 'Biaya pendaftarannya berapa?',
    answer: [
      [
        <ul>
          <li>UI/UX Design &gt; Rp50.000/Tim.</li>
          <li>Gambar Teknik &gt; Rp35.000/Poster.</li>
          <li>Desain Poster &gt; Rp35.000/Tim.</li>
        </ul>,
      ],
    ],
  },
];

export const FAQKeteknikkan = () => (
  <section className='relative pt-16 pb-16 bg-blueGray-50 overflow-hidden'>
    <div className='absolute -top-10' id='FAQ' />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className='relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full'>
        <div className='md:max-w-4xl mx-auto'>
          <p className='mb-7 custom-block-subtitle text-center !text-lg'>
            Ada pertanyaan?
          </p>
          <h2 className='mb-16 custom-block-big-title text-center'>
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className='mb-11 flex flex-wrap -m-1'>
            {FAQData.map((item, index) => (
              <div className='w-full p-1'>
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
          <div className='flex flex-col space-y-4'>
            <div>
              <h3 className='text-white font-medium'>
                Contact Person UI/UX Design
              </h3>
              <p className='custom-block-big-title !text-xl'>
                Zakia : 081334851551
              </p>
            </div>
            <div>
              <h3 className='text-white font-medium'>
                Contact Person Gambar Teknik
              </h3>
              <p className='custom-block-big-title !text-xl'>
                Bahar : 081229093485
              </p>
            </div>
            <div>
              <h3 className='text-white font-medium'>
                Contact Person Desain Poster
              </h3>
              <p className='custom-block-big-title !text-xl'>
                Bahar : 081229093485
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className='pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-customDarkBg3 custom-border-gray-darker mb-4 relative hover:bg-customDarkBg3Hover cursor-pointer'
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className='flex flex-col p-2 justify-center items-start'>
        <h3 className=' custom-content-title pt-0 sm:pt-0 pr-8 sm:pr-0'>
          {title}
        </h3>
        <p
          className={`text-customGrayText t-4 transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          {content}
        </p>
      </div>
      <div className='absolute top-3.5 right-4 sm:top-8 sm:right-8'>
        <svg
          width='28px'
          height='30px'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={`transition-all duration-500  ${
            isOpen ? 'rotate-[180deg]' : 'rotate-[270deg]'
          }`}
        >
          <path
            d='M4.16732 12.5L10.0007 6.66667L15.834 12.5'
            stroke='#4F46E5'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></path>
        </svg>
      </div>
    </div>
  );
};
