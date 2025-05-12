import Image from 'next/image';
import Link from 'next/link';
import logo from '../img/logo.png';

const Navbar = () => {
  return (
    <div className='bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between items-center'>
      <Link href='/'>
        <Image src={logo} alt='SilvesterPress' width={32} height={32} />
      </Link>
    </div>
  );
};

export default Navbar;
