const router = require('express').Router();
let Transfer = require('../models/transfers.model');

router.route('/').get((req, res) => {
    Transfer.find()
        .then(transfers => res.json(transfers))
        .catch(err => res.status(400).json('Error:  '+err));
});
router.route('/add').post((req,res)=>{
    const from = req.body.from;
    const to = req.body.to;
    const amount = req.body.amount;
    
    const newTrans = new Transfer({
        from,
        to,
        amount
    });
    
    newTrans.save()
        .then(()=>res.json('Transaction done'))
        .catch(err => res.status(400).json('Error: '+err));
})

module.exports = router;