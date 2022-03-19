import React, {useEffect, useState} from "react";
import { useParams} from "react-router-dom";
import axios from 'axios'
const Info = ()=>{
    const {id} = useParams()
    const [customer, setCustomer] = useState({})
    useEffect(()=>{
        axios.get('http://localhost:3001/customers/'+id)
          .then(response =>{
            if(response.data.length > 0){
                setCustomer({...response.data[0]})            }
      })
    }, [])
  
    return(
        <>
            <h1 className="mt-20 mb-12 text-3xl font-bold text-center text-gray-600">Customer's info</h1>
            <div className="w-1/2 px-12 py-12 mx-auto mb-12 border-2 text-start">
                <p className="text-xl font-bold text-gray-700">Name:</p>
                <p className="mb-6 text-lg text-gray-700">{customer.name}</p>

                <p className="text-xl font-bold text-gray-700">Address:</p>
                <p className="mb-6 text-lg text-gray-700">{customer.address}</p>

                <p className="text-xl font-bold text-gray-700">Email:</p>
                <p className="mb-6 text-lg text-gray-700">{customer.email}</p>

                <p className="text-xl font-bold text-gray-700">Phone Number:</p>
                <p className="mb-6 text-lg text-gray-700">{customer.phone}</p>

                <p className="text-xl font-bold text-gray-700">Balance:</p>
                <p className="mb-6 text-lg text-gray-700">${customer.balance}</p>
            </div>
        </>
    );
}
export default Info;