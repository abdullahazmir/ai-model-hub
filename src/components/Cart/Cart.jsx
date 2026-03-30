import React from 'react';

const Cart = ({ carts }) => {
    console.log(carts)
    return (
        <div className='p-10'>
            <h1 className='text-5xl font-bold mb-6 text-center'> Your Cart</h1>
            {
                carts.map(item =>
                    <div className='border rounded-lg p-8 mb-4'>

                        <div className='flex items-center justify-between' key={item.id}>
                            <div className='flex gap-10 items-center'>

                                <div>
                                    <img className='h-20 w-20 object-contain' src={item.image} alt="" />
                                </div>

                                <div>
                                    <h1 className='text-3xl font-bold'>{item.title}</h1>
                                    <p>{item.description}</p>
                                </div>

                            </div>

                            <div className='text-3xl font-bold'>
                               $ {item.price}/month

                            </div>
                        </div>
                    </div>
                )
            }

            <div className='bg-black text-white p-8 text-3xl font-bold flex justify-between rounded-lg'>
                <div>Total</div>
                <div>0</div>
            </div>

        </div>
    );
};

export default Cart;