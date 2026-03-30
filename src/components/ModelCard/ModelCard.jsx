import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ModelCard = ({model, carts, setCarts}) => {

      const [isSubscribe, setIsSubscribe]= useState(false)

    const handleSubscription =()=>{
        setIsSubscribe(true);

         const isFound = carts.find(item=> item.id ===model.id)
        //  console.log(isFound)

        if(isFound){
            toast.error('item already in cart!!')
            return;
        }

        const newCarts = ([...carts, model]);
        setCarts(newCarts)
        toast.success('item added to cart')
    }

    return (
       <div  className='shadow-lg rounded-lg border overflow-hidden'>
                            <div className='flex justify-center items-center h-56 bg-zinc-200 '>
                               
                            <img className='h-40 w-40 object-contain' src={model.image} alt="" />
                            </div>

                            <div className='mx-10 space-y-4 mb-4'>
                                <h2 className='text-2xl font-bold'>{model.title}</h2>
                                <p>{model.description}</p>
                                <div className='text-3xl font-bold'>${model.price}/month</div>

                                <button onClick={handleSubscription} className='btn w-full bg-red-600 text-white rounded-lg'>{isSubscribe ? "Subscribed" : "Subscribe Now"}</button>
                            </div>
                        </div>
    );
};

export default ModelCard;