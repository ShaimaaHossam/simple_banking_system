import React from 'react'
import axios from 'axios'

export default class History extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            transactions: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3001/transfer')
      .then(response =>{
        if(response.data.length > 0){
            this.setState({transactions: response.data})
        }
  })
    }
    render(){
        return(
            <>
                <h1 className="text-center font-bold text-gray-600 text-3xl mt-20 mb-12">All Transactions</h1>
              {this.state.transactions.map((transaction)=>{
                    return (
                        <div className="w-1/2 px-8 py-8 mx-auto mb-12 border-2 text-start">
                        <p className="text-lg font-bold text-gray-700">From:</p>
                        <p className="mb-2 text-mg text-gray-700">{transaction.from}</p>
        
                        <p className="text-lg font-bold text-gray-700">To:</p>
                        <p className="mb-2 text-md text-gray-700">{transaction.to}</p>
        
                        <p className="text-lg font-bold text-gray-700">Amount:</p>
                        <p className="mb-2 text-md text-gray-700">{transaction.amount}</p>
        
                        
                    </div>
                    );
                })}
           
            </>
        );
    }
}