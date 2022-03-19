import React from 'react';
import image from '../landing.png'
import {Link} from 'react-router-dom'
export default class Homepage extends React.Component{
    render(){
        return (
           <>
              <div className="justify-center mt-12 text-center lg:flex">
                <div className="my-auto text-center par lg:w-1/2">
                    <h1 className="text-3xl font-bold text-gray-800">The Best Payments Experience</h1>
                    <p className="mt-5 text-center">Simple and secure way to transfer money</p>
                    <div className="mt-8">
                        <Link to="/transfer" className="px-12 py-3 text-white bg-purple-900 rounded-md hover:bg-purple-800 transitioning">Make a payment</Link>
                    </div>
                </div>
                <div className="hidden w-1/2 lg:block">
                    <img className="w-1/2" src={image} />
                </div>
              </div>
           </>
        ); 
    }
}
