import React from 'react';
import Image  from 'next/image';
import { CheckIcon, StarIcon } from '@heroicons/react/solid';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

function CheckoutProduct({id, title, price, rating, description, category, image, hasPrime,}) {
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product ={
            id, title, price, rating, description, category, image, hasPrime,
        }
        dispatch(addToBasket(product));
    };

    const removeItemsFromBasket = () => {
        dispatch(removeFromBasket({id}));
    };

    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit="contain" />
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))}
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <p>₹ {price}</p>

                {hasPrime && (
                    <div className="flex items-center">
                    <CheckIcon className="h-5 text-yellow-400"/>
                    <p className="font-bold text-blue-500">Prime</p>
                    <p className="ml-2 text-gray-500 text-xs"> Free next-day Delivery</p>
                </div>
                )}
            </div>
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="button mt-auto" onClick={addItemToBasket}>Add more item</button>
                <button className="button mt-auto"onClick={removeItemsFromBasket}>Remove from Cart</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct;
