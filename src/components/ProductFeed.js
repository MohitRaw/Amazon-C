import React from 'react';
import Product from './Product';

const ProductFeed = ({products}) => {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:-mt-20">
            {products.map(({ id, title, price, description, catagory, image }) => (
                <Product 
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    catagory={catagory}
                    image={image}
                    price={price}
                />
            ))}
            <img className=" md:col-span-full" src="" alt="" />
        </div>
    );
}

export default ProductFeed;
