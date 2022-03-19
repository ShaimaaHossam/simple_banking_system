import React from 'react';
import image from '../landing.png'
import {Link} from 'react-router-dom'
export default class Homepage extends React.Component{
    render(){
        return (
           <>
              <div className="lg:flex justify-center mt-12 text-center">
                <div className="par lg:w-1/2 my-auto text-center">
                    <h1 className="text-3xl font-bold text-gray-800">The Best Payments Experience</h1>
                    <p className="text-center mt-5">Simple and secure way to transfer money</p>
                    <div className="mt-8">
                        <Link to="/" className="bg-purple-900 py-3 hover:bg-purple-800 transitioning text-white px-12 rounded-md">Make a payment</Link>
                    </div>
                </div>
                <div className="w-1/2 lg:block hidden">
                    <img className="w-1/2" src={image} />
                </div>
              </div>
           </>
        ); 
    }
}
