const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost:27017/IAmBoss', {useNewUrlParser: true,     useUnifiedTopology: true,
family: 4,}, (err) => {
if (!err) {
console.log('Successfully Established Connection with MongoDB')
}
else {
console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
}
});
 
//Connecting Node and MongoDB
require('./course.model');