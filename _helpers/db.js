
const mongoose = require('mongoose');
require('dotenv').config()
// const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(process.env.MONGO_DB_URL )
.then(()=>console.log("Connected to DB."))
.catch(err => console.log(err));
mongoose.Promise = global.Promise;


// module.exports = {
//     Account: require('accounts/account.model'),
//     isValidId
// };

// function isValidId(id) {
//     return mongoose.Types.ObjectId.isValid(id);
// }