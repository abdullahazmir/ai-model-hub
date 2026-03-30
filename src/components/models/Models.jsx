
import { use } from 'react';
import ModelCard from '../ModelCard/ModelCard';

const Models = ({ modelPromise, carts, setCarts }) => {
  

    const models = use(modelPromise);
   

    return (
        <div className='py-10 max-w-7xl mx-auto'>
            <div className='text-center my-10'>
                <h2 className='text-5xl'>Choose your AI Model</h2>
                <p>AI practice is very important for us. You will find best features from our platform</p>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 '>
                {
                    models.map((model, index) => <ModelCard key={index} model={model}  carts={carts} setCarts={setCarts}  ></ModelCard>)
                }
            </div>
        </div>
    );
};

export default Models;