import React from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component{
    render(){
        return (
           <>
               <ul className = "flex justify-around bg-purple-800">
                   <div className="flex left">
                        <li className="px-4 py-2 text-white  transitioning hover:bg-slate-50 hover:text-purple-900 hover:cursor-pointer">
                            <Link to="/">Homepage</Link>
                        </li> 
                        <li className="px-4 py-2 text-white transitioning hover:bg-slate-50 hover:text-purple-900 hover:cursor-pointer">
                            <Link to="/ViewCustomers">View Customers</Link>
                        </li>
                   </div>
                   
                  <li className="px-6 py-1 mx-4 my-2 text-white bg-pink-500 rounded-md hover:cursor-pointer hover:bg-pink-400 transitioning">
                      <Link to="/Transfer">Transfer</Link>
                  </li> 
               </ul>
           </>
        ); 
    }
}
