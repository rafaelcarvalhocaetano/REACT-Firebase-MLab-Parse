const express = require('express')

module.exports = (server) => {

    //definindo a url base para as rotas
    const router = express.Router()
    server.use('/api', router)

    //rotas do cliclo de pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}