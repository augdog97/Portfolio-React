const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const { PDFNet } = require('@pdftron/pdfnet-node');


app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));


app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.get('/api', async (req, res) => {


  const stripe = require('stripe')(`${process.env.REACT_APP_Stripe_Live}`);
  const invoice = await stripe.invoices.retrieve(
   `${process.env.REACT_APP_Invoice}`
  );
  res.json(invoice);
  
 console.log(invoice.invoice_pdf);

});




app.listen(process.env.PORT || 8080, () => {
  console.log(`Server listening on 8080`);
});