import Image from 'next/image';
import Link from 'next/link';

export default function logo () {
  return (
    <div className="logo">
      <Link href='/'>
        <img 
        src="/images/logo.png" 
        width="495px"
        height="81px"
        alt="logo" />
      </Link>
      
    </div>
  );
}

