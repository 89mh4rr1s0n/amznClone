import React from 'react';
import Image from 'next/image';
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from  "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';

const Header = () => {

    const { data: session, status } = useSession()
    const router = useRouter()
    const items = useSelector(selectItems)

  return (
  <>
    <header>
        {/* top nav */}
        <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
            <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                <Image
                onClick={() => router.push("/")}
                src="https://links.papareact.com/f90"
                width={150}
                height={40}
                objectFit='contain'
                className='cursor-pointer'
                />
            </div>
            {/* search */}
            <div className='hidden items-center sm:flex h-8 rounded-md flex-grow cursor-pointer'>
                <input 
                className='h-full flex-grow flex-shrink rounded-l-md focus:outline-none px-2'
                type="text"
                />
                <SearchIcon
                className='h-8 bg-yellow-500 hover:bg-yellow-600 p-1.5 rounded-r-md'
                />
            </div>

            {/* right */}
            <div className='text-white flex items-center text-xs space-x-4 mx-5 whitespace-nowrap'>
                <div className='link' onClick={!session ? signIn : signOut}>
                    <p>
                        {session ? `Hello, ${session.user.name}` : `Sign In`}
                    </p>
                    <p className='font-bold md:text-sm'>Account & Lists</p>
                </div>

                <div className='link'>
                    <p>Returns</p>
                    <p className='font-bold md:text-sm'>& Orders</p>
                </div>

                <div className='relative link flex items-center' onClick={() => router.push("checkout")}>
                    <span 
                    className='absolute top-0 right-0 sm:right-9 bg-yellow-500 
                    rounded-full h-4 w-4 text-center text-black font-bold'>
                        {items.length}
                    </span>
                    <ShoppingCartIcon className='h-7'/>
                    <p className='hidden sm:inline font-bold md:text-sm mt-3'>Basket</p>
                </div>
            </div>
        </div>

        {/* bottom nav */}
        <div 
        className='flex items-center bg-amazon_blue-light 
        text-sm text-white space-x-3 p-1 pl-5'>
            <p className='link flex items-center'>
                <MenuIcon className='h-6 mr-2'/>
                All
            </p>
            <p className='link'>Prime Video</p>
            <p className='link'>Amazon Business</p>
            <p className='link'>Today's Deals</p>
            <p className='hidden sm:inline-flex link'>Electronics</p>
            <p className='hidden sm:inline-flex link'>Food & Grocery</p>
            <p className='hidden sm:inline-flex link'>Prime</p>
            <p className='hidden md:inline-flex link'>Buy Again</p>
            <p className='hidden lg:inline-flex link'>Shopper Toolkit</p>
            <p className='hidden lg:inline-flex link'>Health & Personal Care</p>
        </div>
    </header>
  </>)};

export default Header;
