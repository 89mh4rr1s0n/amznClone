import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React from 'react';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

const CheckoutProduct = ({
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime
}) => {

    const dispatch = useDispatch()

    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            rating,
            description,
            category,
            image,
            hasPrime
        }
        dispatch(addToBasket(product))
    }

    const removeItemFromBasket = () => {
        
        dispatch(removeFromBasket({id}))
    }

  return (<>
  <div className='grid grid-cols-5'>
    <Image
    src={image}
    height={200}
    width={200}
    objectFit='contain'
    />

    {/* middle */}
    <div className='col-span-3 mx-5 p-4'>
        <p>{title}</p>
        <div>
            {Array(rating).fill().map((_, i) => (
                <StarIcon
                key={i}
                className='h-5 text-yellow-500'
                />
            ))}
        </div>
        <p className='my-2 line-clamp-3 text-sm'>{description}</p>
        <Currency
        quantity={price}
        currency='GBP'
        />
        {hasPrime && (
            <div className='flex items-center'>
                <img
                src="https://links.papareact.com/fdw"
                loading='lazy'
                className='w-12'
                alt=''
                />
                <p className='text-sm pl-2'>FREE Next-day Delivery</p>
            </div>
        )}
    </div>

    {/* right */}
    <div className='flex flex-col space-y-2 my-auto justify-self-end'>
        <button className='button' onClick={addItemToBasket}>Add to Basket</button>
        <button className='button px-2' onClick={removeItemFromBasket}>Remove from Basket</button>
    </div>
  </div>
  </>)
};

export default CheckoutProduct;
