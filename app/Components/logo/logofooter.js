import Image from 'next/image';
import Link from 'next/link';

export default function logoFooter () {
  return (
    <div className="logoFooter">
      <Link href='/'>
        <img 
        src="/images/logo.png" 
        width="176px"
        height="85px"
        alt="logo" />
      </Link>
      
    </div>
  );
}
