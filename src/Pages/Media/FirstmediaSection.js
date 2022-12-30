import React, { useState } from 'react';





const FirstmediaSection = () => {
    const [message, setMessage] = useState('');

    function handleChange(event){
      setMessage(event.target.value);
    }
  
    function handleSubmit(event){
      event.preventDefault();
      // Send the message here
      setMessage('');
    }
    return (
        <div className='lg:col-span-3 md:col-span-2 col-span-1 flex gap-10 mt-5 align-middle justify-center'>
            
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex text-2xl'>
                        
                    </div>
                    <form onSubmit={handleSubmit}>

                        <textarea  placeholder="Comment" className="textarea textarea-info" onChange={handleChange} value={message} name="" id="" cols="40" rows="5"></textarea>
                        <button className="btn btn-primary" type="submit">Send</button>
                    </form>
                    
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex text-2xl'>
                       
                    </div>
                    <form onSubmit={handleSubmit}>

                    <textarea  placeholder="Comment" className="textarea textarea-info" onChange={handleChange} value={message} name="" id="" cols="40" rows="5"></textarea>
                        <button className="btn btn-primary" type="submit">Send</button>
                    </form>
                    
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex text-2xl'>
                      
                    </div>
                    <form onSubmit={handleSubmit}>

                    <textarea  placeholder="Comment" className="textarea textarea-info" onChange={handleChange} value={message} name="" id="" cols="40" rows="5"></textarea>
                        <button className="btn btn-primary" type="submit">Send</button>
                    </form>
                    
                </div>
            </div>
          



        </div>
    );
};

export default FirstmediaSection;