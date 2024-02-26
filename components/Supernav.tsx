import Link from 'next/link';

import { section } from './design-system';

export default function Supernav() {
  return (
    <div className='fixed bottom-0 left-0 z-40 w-full bg-[#000000] py-2 text-center'>
      <div className={section}>
        <span className='font-header'>
          This website is under construction. Please report any bugs or
          malfunctions to{' '}
          <Link
            href={'mailto:pedro@migaczbrothers.com'}
            className='font-bold underline'
          >
            pedro@migaczbrothers.com
          </Link>
        </span>
      </div>
    </div>
  );
}
