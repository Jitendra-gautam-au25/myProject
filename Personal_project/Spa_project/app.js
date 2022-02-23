const express = require("express")
const path =require('path')
// const calendar = require('calendar');
// const bookingSchema=require('./bookschema')
// const Routes=require('./routes')
const app = express();
const staticPath =path.join(__dirname,"./public")

app.use(express.static(staticPath))




// const Booking = mongoose.model('Booking', bookingSchema);

app.listen(
    4000, () => {
    console.log('Server listening on port:');
});
  