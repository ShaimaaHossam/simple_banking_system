import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
export default class Customers extends React.Component{
    constructor(props){
        super(props);

        this.state={
            customers:[],
        }
    }
    render(){
        return (
           <>
           <h1 className="text-center font-bold text-gray-600 text-3xl mt-20 mb-12">All Customers</h1>
              <ul className="mx-auto text-center mt-12 lg:px-12 mb-12">
              {this.props.customers.map((customer)=>{
                    return (
                    <Link key={customer._id} to={"/ViewCustomers/"+customer._id}>
                        <li  className="bg-gray-100 hover:cursor-pointer hover:bg-slate-50 transitioning py-6 border-b-2">
                            <p className="font-bold">{customer.name}</p>
                            <p>{customer.address}</p>
                            
                        </li>
                    </Link>
                    );
                })}
              </ul>
           </>
        ); 
    }
}
