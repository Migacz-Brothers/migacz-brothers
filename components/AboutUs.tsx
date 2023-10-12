////////////Images and Svgs
import AboutUsImage from '@/public/images/AboutUsImage.png';
import BeIcon from '@/public/svgs/BeIcon';
import BookOpenIcon from '@/public/svgs/BookOpenIcon';
import DribbbleIcon from '@/public/svgs/DribbbleIcon';
import InstagramIcon from '@/public/svgs/InstagramIcon';
import LinkedinIcon from '@/public/svgs/LinkedinIcon';

////////////Images and Svgs
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <section>
      <div className='max-w-[1264px] mx-auto px-4'>
        <Image src={AboutUsImage} alt={'A photo about group pro working'} />
        <div>
          <h2>About Us</h2>
          <h3>Design & Code</h3>
          <p>
            We are a small cooperative company from South Brazil with an
            international team of professionals who have joined forces to create
            unique products for the web.
          </p>
          <ul className='flex md:gap-2 gap-[6px] pt-2'>
            <li>
              <Link
                href={''}
                className='w-10 h-10 md:w-[54px] md:h-[54px] rounded-[4px] bg-[#3367CC] grid place-items-center'
              >
                <div className='scale-75 md:scale-100'>
                  <BeIcon />
                </div>
              </Link>
            </li>
            <li>
              <Link
                href={''}
                className='w-10 h-10 md:w-[54px] md:h-[54px] rounded-[4px] bg-[#2966A3] grid place-items-center'
              >
                <div className='scale-75 md:scale-100'>
                  <LinkedinIcon />
                </div>
              </Link>
            </li>
            <li>
              <Link
                href={''}
                className='w-10 h-10 md:w-[54px] md:h-[54px] rounded-[4px] bg-[#7F55B6] grid place-items-center'
              >
                <div className='scale-75 md:scale-100'>
                  <InstagramIcon />
                </div>
              </Link>
            </li>
            <li>
              <Link
                href={''}
                className='w-10 h-10 md:w-[54px] md:h-[54px] rounded-[4px] bg-[#B35598] grid place-items-center'
              >
                <div className='scale-75 md:scale-100'>
                  <DribbbleIcon />
                </div>
              </Link>
            </li>
            <li>
              <Link
                href={''}
                className='min-w-[144px] h-10 md:h-[54px] md:w rounded-[4px] bg-white block'
              >
                <div className='scale-75 md:scale-100 flex h-full items-center '>
                  <div className='pl-[10px] pr-3'>
                    <BookOpenIcon />
                  </div>
                  <p className='text-black pr-3 font-header'>Or read more</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

interface ButtonsLinkProps {
  svg: string;
}

const ButtonsLink = ({ svg }: ButtonsLinkProps) => {
  return (
    <li>
      <Link
        href={''}
        className='w-10 h-10 md:w-[54px] md:h-[54px] rounded-[4px] bg-[#3367CC] grid place-items-center'
      >
        <div className='scale-75 md:scale-100'>{svg}</div>
      </Link>
    </li>
  );
};

// const ContactLink = ({ label, linkText, link }: ContactLinkProps) => {
//   return (
//     <li className='gap-[21px] flex'>
//       <div className='text-sm lg:text-base text-grey-100 min-w-[75px]'>
//         {label}
//       </div>
//       <Link
//         href={link}
//         target='_blank'
//         rel='noopener noreferrer'
//         className='text-white text-sm lg:text-base max-w-[250px]'
//       >
//         {linkText}
//       </Link>
//     </li>
//   );
// };
