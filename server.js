const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
  
 const stripe = require('stripe')(`${process.env.REACT_APP_Stripe_Live}`);
 const invoice = await stripe.invoices.retrieve(
   ''
 );

  console.log(JSON.stringify(invoice));

});
app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.listen(process.env.PORT || 8080);