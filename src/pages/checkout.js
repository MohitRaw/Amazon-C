import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutProduct from '../components/CheckoutProduct';
import Header from "../components/Header";
import { selectItems, selectTotal } from '../slices/basketSlice';

const Checkout = () => {

    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);

    return (
        <div className="bg-gray-100">
            <Header />

            <main className="lg:flex flex flex-col max-w-screen-2xl mx-auto">
                <div className=" flex flex-grow m-5 shadow-sm">
                    <img src="images/backgr.jpg" alt="backgroundimg" />
                </div>
                
                <div className="flex-grow">
                    <div className="flex flex-col p-5 space-y-10 bg-white">
                        <h1 className="text-3xl border-b pb-4">
                            {items.length === 0 ? "Your Amazon Basket is empty." : "Shopping Basket"}
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

                <div className="flex flex-col bg-white p-10 shadow-md">{items.length > 0 &&(
                    <>
                        <h2 className="whitespace-nowrap">
                            Subtotal ({items.length} items) : <span className="font-bold"><p>₹ {total}</p></span>
                        </h2>

                        <button className="button">
                            Proceed to Checkout
                        </button>
                    </>
                    )}
                </div>
            </main>           
        </div>
    )
}

export default Checkout;
