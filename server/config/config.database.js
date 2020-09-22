const mongoose = require('mongoose');

const database = "spacecrabs";
mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Boom goes the dynamite"))
    .catch(err => console.log(`Houston: we have a problem..${err}`));