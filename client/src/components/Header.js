'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import { MenuIcon, SearchIcon, ShoppingCartIcon, LocationMarkerIcon, } from '@heroicons/react/outline'
import Cookies from 'js-cookie';
import useFetchUser from './useFetchUser';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { selectItems } from '@/redux/slices/cartSlice';

function Header() {

    const [showDd, setShowDd] = useState(false)

    function showDropDown() {
        setShowDd(true)
    }

    const userId = Cookies.get('userId')
    const userInfo = useFetchUser(userId)

    const router = useRouter()

    const items = useSelector(selectItems)

    return (
        <header className=''>

            <div>
                <div className='flex items-center bg-amazon_blue flex-grow py-1 '>
                    <div style={{ minWidth: '35px' }} className='mt-2 flex items-center flex-grow sm:flex-grow-0 mx-4'>
                        <Image
                            className=' link'
                            alt='logo'
                            src='http://links.papareact.com/f90'
                            width={110}
                            height={30}
                            onClick={() => router.push('/')}

                        />
                    </div>

                    <div className='text-white mx-2 link '>
                        <p className='text-sm'>deliver to</p>
                        <div className='flex'>
                            <LocationMarkerIcon className='h-5 cursor-pointer' />
                            <p className='flex font-extrabold md:text-sm'>location</p>
                        </div>
                    </div>

                    <div className='
                    hidden: 
                    sm:flex 
                    items-center
                    rounded-md
                    flex-grow'
                    >
                        <div className='
                    flex
                    p-2
                    bg-gray-500 
                    hover:bg-gray-600 
                    cursor-pointer
                    h-9 rounded-l-md
                    hidden sm:inline'>
                            <label className='cursor-pointer' htmlFor="dd" onClick={showDropDown}>all</label>
                            <select hidden={!showDd} id="dd" name="dd">
                                <option value="section" disabled>Select</option>
                                <option value="section">Section 1</option>
                                <option value="section">Section 2</option>
                                <option value="section">Section 3</option>
                                <option value="section">Section 4</option>
                            </select>
                        </div>

                        <input
                            className='
                        p-2
                        h-full
                        w-6
                        flex-grow
                        flex-shrink
                        focus:outline-none
                        px-4
                        w-100% sm:inline'
                            type='text'
                        />
                        <div className='
                        hidden sm:inline
                    bg-yellow-500 
                    hover:bg-yellow-600 
                    cursor-pointer
                    h-9 rounded-r'>

                            <SearchIcon className='h-9 p-1 ' />
                        </div>
                    </div>

                    <div className='text-white flex text-xs space-x-4 mx-6 items-center'>

                        <div className=' link'>
                            <p className='font-extrabold md:text-sm'>flag</p>
                        </div>

                        <div className='link'>
                            {userInfo !== null ? (
                                <p>Hello, {userInfo.name}</p>
                            ) : (
                                <p>Hello, User</p>
                            )}

                            {/* {Object.entries(userInfo).map(([key, value]) => (
                                <p key={key}>{value.name}</p>
                            ))} */}
                            <p className='font-extrabold md:text-sm'>account & list</p>
                        </div>

                        <div className='link'>
                            <p className='font-extrabold md:text-sm'>orders</p>
                        </div>
                        <div className='relative flex link items-center'
                            onClick={()=> router.push('/checkout')}
                        >
                            {/* <p className='absolute bottom-8 right-10 text-orange'>{items.length}</p> */}
                            <ShoppingCartIcon 
                            className='h-8'
                            />
                            <p className='flex hidden md:inline'>cart {items?.length}</p>
                            
                        </div>

                    </div>

                </div>

                <div className='flex items-center p-1 bg-amazon_blue-light text-white text-sm space-x-3'>
                    <p className='link items-center flex'>
                        <MenuIcon className='h-6' />
                        All
                    </p>
                    <p className='link'>sell</p>
                    <p onClick={()=>router.push('/signin')}>sign in</p>
                    <p onClick={()=>router.push('/signup')}>sign up</p>


                </div>
            </div>
        </header>
    )
}

export default Header