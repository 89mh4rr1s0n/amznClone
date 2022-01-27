import React, { useState } from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';

const MAX_RATING = 5
const MIN_RATING = 1

const ProductCard = (props) => {

    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    )

    const [hasPrime] = useState(Math.random() < 0.5)
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id: props.id,
            title: props.title,
            price: props.price,
            description: props.description,
            category: props.category,
            image: props.image,
            hasPrime: hasPrime
        };

        dispatch(addToBasket(product))
    }


  return (<>
  <div className='relative flex flex-col m-5 bg-white z-30 p-10 rounded-xl'>
      <p className='absolute top-1 right-3 text-xs text-gray-500'>{props.category}</p>

      <Image
      src={props.image}
      height={200}
      width={200}
      objectFit='contain'
      />

      <h4 className='my-3'>{props.title}</h4>

      <div className='flex'>
          {Array(rating).fill().map((_, i) => (
              <StarIcon key={i} className='h-5 text-yellow-500'/>
          ))}
      </div>

      <p className='text-xs my-2 line-clamp-2'>{props.description}</p>

      <div className='mb-2'>
          <Currency quantity={props.price} currency='GBP'/>
      </div>

      {hasPrime && (
          <div className='flex items-center space-x-2'>
              <img src="https://links.papareact.com/fdw" alt='' className='h-12'/>
              <p className='text-sm text-slate-600'>FREE Next-day Delivery</p>
          </div>
      )}

      <button 
      onClick={addItemToBasket}
      className='mt-auto button'>Add to Basket</button>
  </div>
  </>)
};

export default ProductCard;
