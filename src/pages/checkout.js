import React from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectItems, selectTotal } from '../slices/basketSlice';
import CheckoutProduct from '../components/CheckoutProduct';
import Currency from 'react-currency-formatter';
import { useSession } from 'next-auth/react';

const Checkout = () => {

    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const { data: session, status } = useSession()

  return (<>
    <div className='bg-gray-200'>
        <Header/>
        <main className='lg:flex max-w-screen-xl my-auto'>
            {/* left */}
            <div className='flex-grow m-5 shadow-sm mx-auto'>
                <Image
                src="https://links.papareact.com/ikj"
                width={1020}
                height={250}
                objectFit="contain"
                />

                <div className='flex flex-col mx-5 p-5 bg-white space-y-10  rounded-xl'>
                    <h1 className='text-2xl border-b pb-4'>
                        {items.length === 0 ? 'Your Amazon Basket is empty.' :
                        'Your Shopping Basket'}
                    </h1>

                    {items.map((item, i) => (
                        <CheckoutProduct
                        key={i}
                        id={item.id}
                        title={item.title}
                        rating={item.rating}
                        price={item.price}
                        description={item.description}
                        category={item.category}
                        image={item.image}
                        hasPrime={item.hasPrime}
                        />
                    ))}
                </div>
            </div>

            {/* right */}
            <div className='flex flex-col m-5 lg:ml-0 py-6 bg-white rounded-xl'>
                {items.length > 0 && (
                    <>
                        <h2 className='ml-5 whitespace-nowrap p-4'>Subtotal ({items.length} items):{" "}
                        <span className='font-bold'>
                            <Currency
                            quantity={total}
                            currency='GBP'
                            />
                        </span>
                        </h2>

                        <button 
                        className={`button py-2 mx-4  ${!session && 'from-gray-200 to-gray-300 cursor-not-allowed'}`}>
                            {!session ? "Sign in to Proceed" : "Proceed to Checkout"}
                        </button>
                    </>
                )}
            </div>

        </main>
    </div>
  </>)};

export default Checkout;
