import React, { useState } from 'react';
import Image from "next/image";
import { CheckIcon, StarIcon } from '@heroicons/react/solid';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, title, price, description, category, image, }) => {
    const dispatch = useDispatch();

    const[rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );

    const[hasPrime] = useState(Math.random() < 0.5);

    

    const addItemToBasket = () => {
        const product ={
            id, title, price, rating, description, category, image, hasPrime,
        }
        dispatch(addToBasket(product));
    };

    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
            <Image src={image} height={200} width={200} objectFit="contain"/>
            <h4 className="my-3">{title}</h4>
            <div className="flex">
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <StarIcon className="h-5 text-yellow-500"/>
                ))}
                
            </div>

            <p className="text-xs my-2 line-clamp-2">{description}</p>

            <div className="mb-5">
                <p>₹ {price}</p>
            </div>

            {hasPrime && (
                
                <div className="flex items-center">
                    <CheckIcon className="h-5 text-yellow-400"/>
                    <p className="font-bold text-blue-500">Prime</p>
                    <p className="ml-2 text-gray-500 text-xs"> Free next-day Delivery</p>
                </div>
            )}

            <button onClick={addItemToBasket} className="mt-auto button">Add to basket</button>
        </div>
    )
}

export default Product;
