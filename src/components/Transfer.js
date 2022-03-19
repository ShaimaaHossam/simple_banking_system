import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Customers from "./Customers";
export default class Transfer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { from: "", to:"", amount:"", from_balance:"", to_balance:""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    //Get sender and receiver
    let sender = this.props.customers.find(sender => sender.name===this.state.from)
    let receiver = this.props.customers.find(rec =>rec.name=== this.state.to)
    console.log(sender);
    console.log(receiver)

    if(sender.balance < this.state.amount){
        alert("Insufficient funds")
    }
    else{
          //Add transaction to table
            axios.post('http://localhost:3001/transfer/add', {
            from: this.state.from,
            to: this.state.to,
            amount: this.state.amount
            })
          .then(function (response) {
            alert("Transaction Successful!");
          })
          .catch(function (error) {
            console.log(error);
          }); 

          
        //Update sender's balance
        let sender_new_balance = parseInt(sender.balance) - parseInt(this.state.amount);
        console.log(sender_new_balance)
        axios.post('http://localhost:3001/customers/update/'+sender._id, {
            balance: sender_new_balance
            
            })
          .then(function (response) {
            console.log("user1 updated")
          })
          .catch(function (error) {
            console.log(error);
          });
          //Update receiver's balance
        let rec_new_balance = parseInt(receiver.balance) + parseInt(this.state.amount);
        axios.post('http://localhost:3001/customers/update/'+receiver._id, {
            balance: rec_new_balance
            
            })
          .then(function (response) {
            console.log("user2 updated")
          })
          .catch(function (error) {
            console.log(error);
          });
          
        

    }


     

      
  }
  handleFromChange(event){
    this.setState({from: event.target.value})
  }
  handleToChange(event){
    this.setState({to: event.target.value})
  }
  handleAmountChange(event){
    this.setState({amount: event.target.value})
  }
  render() {
    return (
      <>
        <h1 className="mt-20 mb-12 text-3xl font-bold text-center text-gray-600">
          Transfer Money
        </h1>
        <div className="w-1/2 px-12 py-12 mx-auto border-2 text-start">
          <form onSubmit={this.handleSubmit}>
            <label className="text-xl font-bold text-gray-800">
              Sender:
            </label>
            <select
              onChange={this.handleFromChange}
              value={this.state.from}
              className="block w-full px-2 py-1 m-0 mt-2 mb-6 text-sm font-normal text-gray-700 transition ease-in-out bg-white bg-no-repeat border border-gray-300 border-solid rounded appearance-none lg:w-1/2 form-select form-select-sm bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label=".form-select-sm example"
            >
                <option>Select a sender</option>
              {this.props.customers.map((customer) => {
                return <option key={customer._id} value={customer.name}>{customer.name}</option>;
              })}
            </select>

            <label  className="text-xl font-bold text-gray-800 ">
              Receiver:
            </label>
            <select
              onChange={this.handleToChange}
              value={this.state.to}
              className="block w-full px-2 py-1 m-0 mt-2 mb-6 text-sm font-normal text-gray-700 transition ease-in-out bg-white bg-no-repeat border border-gray-300 border-solid rounded appearance-none lg:w-1/2 form-select form-select-sm bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label=".form-select-sm example"
            >   
               <option>Select a receiver</option>
              {this.props.customers.map((customer) => {
                return <option key={customer._id} value={customer.name}>{customer.name}</option>;
              })}
            </select>
            <label className="text-xl font-bold text-gray-800 ">
              Amount:
            </label>
            <input
            onChange={this.handleAmountChange}
              type="text"
              className=" form-control block mt-2 w-full lg:w-1/2 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="amount"
              placeholder="Transfer amount"
            />

            <input 
              type="submit" 
              value="Confirm"
              className={this.state.amount ==="" || this.state.from==="" || this.state.to==="" || this.state.amount<1? "hidden":"hover:cursor-pointer hover:bg-gray-700 transitioning px-6 py-2 mt-6 text-white bg-gray-800"} disabled={this.state.amount===""}
            />
          </form>
        </div>
      </>
    );
  }
}
