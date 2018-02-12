module.exports = (req, res, next) => {
    res.header('Acess-Control-Allow-Origin', '*')
    res.header('Acess-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}