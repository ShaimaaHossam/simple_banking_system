const custRouter = require('express').Router();
let Customer = require('../models/customers.model');

custRouter.route('/').get((req, res) => {
    Customer.find()
        .then(customers => res.json(customers))
        .catch(err => res.status(400).json('Error:  '+err));
});
custRouter.route('/:id').get((req,res)=>{
    Customer.find({_id:req.params.id})
        .then(customer => res.json(customer))
        .catch(err => res.status(400).json('Error:  '+err));
})
custRouter.route('/add').post((req,res)=>{
    const name = req.body.name;
    const address = req.body.address;
    const email = req.body.email;
    const phone = req.body.phone;
    const balance = req.body.balance;

    const newCust = new Customer({
        name,
        address,
        email,
        phone,
        balance
    });
    
    newCust.save()
        .then(()=>res.json('Customer Added'))
        .catch(err => res.status(400).json('Error: '+err));
})
custRouter.route('/update/:id').post((req, res) => {
    Customer.findById(req.params.id)
      .then(customer => {
        customer.balance = req.body.balance;
  
        customer.save()
          .then(() => res.json('Customer updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = custRouter;