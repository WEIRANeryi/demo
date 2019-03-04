const mongoose = require('mongoose');

console.log(process.env.NODE_ENV);
const connectAddress = 'mongodb://localhost:27017/note';
mongoose.connect(
    connectAddress,
    { useNewUrlParser: true}
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('success');
});
module.exports = db;
