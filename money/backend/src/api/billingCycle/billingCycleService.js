
const BillingCycle = require('./billingCycle')
const errorHandler = require('../commons/errorHandler')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})
BillingCycle.after('post', errorHandler).after('put', errorHandler)

BillingCycle.route('count', (req, resp, next) => {
    BillingCycle.count((error, value) => {
        if(error){
            resp.status(500).json({error: [error]})
        }else{
            resp.json({value})
        }
    })
})

BillingCycle.route('summary', (req, res, next) => {
    //res.send('ok');
    BillingCycle.aggregate({
        $project: {credit: {$sum: "$credits.value"}, deb: {$sum: "debts.value"}}
    },{
        $group:{_id: null, credit:{$sum: "$credit"}, debt: {$sum: "$deb"}}
    },{
        $project: {_id:0, credit: 1, debt: 1}
    },(error, result) =>{
        if(error){
            res.status(500).json({error: [error]})
        }else{
            res.json(result[0] || {credit: 0, debt: 0})
        }
    })
})

module.exports = BillingCycle