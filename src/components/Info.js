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
            <div className="mx-auto text-center">
                <p className="text-lg text-gray-700">{customer.name}</p>
            </div>
        </>
    );
}
export default Info;