
import { TbGridDots } from 'react-icons/tb';
// here /tb is a folder name from TbGridDots
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
     
    const url:string="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxhcHRvcCUyMHVybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60";
    return (
        <div className='flex justify-end pr-4 pt-3 space-x-4 items-center'>
            <Link href="https://mail.google.com" className="text-sm hover:underline cursor-pointer">Gmail</Link>
            <Link href="https://images.google.com" className="text-sm hover:underline cursor-pointer">Images</Link>
            <TbGridDots className='text-4xl hover:bg-gray-200 p-2 rounded-full' />
            <Image 
               src={url} 
               alt="dp" 
               width={30} 
               height={100} 
               className='rounded-full object-cover'
               style={{ height: 30 }} 
            />  
        </div>
    )
}

export default Header;