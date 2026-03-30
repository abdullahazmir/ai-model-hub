import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, item) => sum +item.price, 0)

    const handlePayment =()=>{
        setCarts([])
          toast.success('item cart complete')
    }
    const handleDelete=(item)=>{
        const filteredArray = carts.filter(c=> c.id != item.id)
       setCarts(filteredArray)
         toast.success('item deleted from cart')
    }

    // console.log(totalPrice)
    return (
        <div className='p-10'>
            <h1 className='text-5xl font-bold mb-6 text-center'> Your Cart</h1>
            {
                carts.length===0 ? <p className='text-3xl text-center bg-amber-700 py-10 rounded-lg max-q
                w-80 mx-auto'>Your Cart is empty</p> : <>   {
               
                    carts.map(item =>
                    <div key={item.id} className='border rounded-lg p-8 mb-4'>

                        <div className='flex md:flex-row flex-col items-center justify-between' key={item.id}>
                            <div className='flex gap-10 items-center'>

                                <div>
                                    <img className='h-20 w-20 object-contain' src={item.image} alt="" />
                                </div>

                                <div>
                                    <h1 className='text-3xl font-bold'>{item.title}</h1>
                                    <p>{item.description}</p>
                                </div>

                            </div>

                          <div className='flex gap-8'>
                              <div className='text-3xl font-bold'>
                               $ {item.price}/month

                            </div>

                            <button onClick={()=> handleDelete(item)} className='btn btn-error rounded-full'>X</button>
                          </div>
                        </div>
                    </div>
                )
            }

            <div className='bg-black text-white p-8 text-3xl font-bold flex justify-between rounded-lg'>
                <div>Total</div>
                <div>$ {totalPrice}</div>
            </div>

            <button onClick={handlePayment} className='btn w-70 text-center  md:w-full bg-red-700 pt-4 pb-4 mt-5 text-2xl font-bold text-white rounded-lg'>Proceed to CheckOut</button>
                </>
            }

         

        </div>
    );
};

export default Cart;