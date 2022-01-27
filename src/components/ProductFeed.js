import React from 'react';
import ProductCard from './ProductCard';

const ProductFeed = ({products}) => {
  return (<>
  <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
  lg:-mt-52'>
    {products.slice(0,4).map((product) => (
        <ProductCard
        key={product.id}
        title={product.title}
        price={product.price}
        description={product.description}
        category={product.category}
        image={product.image}
        />
    ))}
  

  <img
  src="https://links.papareact.com/dyz"
  className='md:col-span-full'
  alt=''
  />

  <div className='
  md:col-span-2'>
  {products.slice(4,5).map((product) => (
        <ProductCard 
        key={product.id}
        title={product.title}
        price={product.price}
        description={product.description}
        category={product.category}
        image={product.image}
        />
    ))}
  </div>
  {products.slice(5,products.length).map((product) => (
        <ProductCard
        key={product.id}
        title={product.title}
        price={product.price}
        description={product.description}
        category={product.category}
        image={product.image}
        />
    ))}
  
  </div>
  </>)};

export default ProductFeed;
