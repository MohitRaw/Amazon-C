import React from 'react';
import {LocationMarkerIcon, MenuIcon, SearchIcon, ShoppingCartIcon} from "@heroicons/react/outline";
import {useRouter} from "next/router";
import { selectItems } from '../slices/basketSlice';
import { useSelector } from 'react-redux';

const Header = () => {

    const router = useRouter();
    const items = useSelector(selectItems);

    return (
        <header className="sticky text-white">
            {/* top nav */}
            
            <div className="flex bg-amazon_blue items-center p-1 flex-grow py-2">
                
                {/* logo & location */}
                <div className="flex items-center flex-grow sm:flex-grow-0">
                    <h1 
                        className="cursor-pointer font-sans font-bold text-3xl"
                        onClick={() => router.push("/")}
                    >
                        amazon.in
                    </h1>

                    <div className="ml-6 flex-col whitespace-nowrap hover:cursor-pointer hover:underline hidden md:inline">
                        <p className="text-xs px-5">Delivery to mohit</p>
                        <div className="flex items-center">
                            <LocationMarkerIcon className="h-5" />
                            <p className="text-sm font-bold ">New Delhi 110023</p>     
                        </div>    
                    </div>
                </div>

                {/* search */}
                <div className="ml-4  hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                    <input 
                        className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md text-black focus:outline-none"
                        type="text" 
                    />
                    <SearchIcon className="h-12 p-4 text-black"/>

                </div>

                {/* acount and order detail  */}
                <div className="flex items-center mx-4 md:mx-6 whitespace-nowrap">
                    <div className=" hover:cursor-pointer hover:underline">
                        <p className="text-xs font-bold">Hello, Mohit</p>
                        <p className="text-sm font-bold ">Account & Lists</p>
                    </div>

                    <div className="mx-4 hover:cursor-pointer hover:underline">
                        <p className="text-xs font-bold">Return</p>
                        <p className="text-sm font-bold ">& Orders</p>
                    </div>

                    <div onClick={() => router.push("/checkout")} className="flex cursor-pointer hover:underline relative items-center">
                        <span className="flex absolute top-0 right-3 md:right-10 h-4 w-4 mx-auto 
                        bg-yellow-400 item-center justify-center rounded-full text-black font-bold ">{items.length}</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="text-sm font-bold mt-4 hidden md:inline">Cart</p>
                    </div>
                </div>

            </div>

            {/* bottom nav */}

            <div className="flex items-center bg-amazon_blue-light text-white text-sm h-10 whitespace-nowrap">
                <p className="flex hover:cursor-pointer items-center hover:underline mx-2">
                    <MenuIcon className="h-6 mr-1" /> 
                    All
                </p>
                <p className="hover:cursor-pointer items-center hover:underline mx-2">
                    Kindle eBooks
                </p>
                <p className="hover:cursor-pointer items-center hover:underline mx-2">
                    Books
                </p>
                <p className="hover:cursor-pointer items-center hover:underline mx-2">
                    Gift Cards
                </p>
                <p className="hover:cursor-pointer items-center hover:underline mx-2 hidden lg:inline">
                    Best Sellers
                </p>
                <p className="hover:cursor-pointer items-center hover:underline mx-2 hidden lg:inline">
                    Baby
                </p>
                <p className="hover:cursor-pointer items-center hover:underline mx-2 hidden lg:inline">
                    Amazon Pay
                </p>
            </div>
        </header>
    );
}

export default Header;
