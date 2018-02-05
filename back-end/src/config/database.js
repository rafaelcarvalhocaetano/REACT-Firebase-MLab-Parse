const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://<rafaelcarvalho>:<rafael>@ds046367.mlab.com:46367/react')