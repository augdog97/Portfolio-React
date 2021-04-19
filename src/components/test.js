import React, {useState, useEffect, useRef} from 'react';
import WebViewer from '@pdftron/webviewer'


const Test = () => {
  // Saving Invoice data to State
  const [data, setData] = useState(null);
  const viewer = useRef(null);

  
  useEffect( async () => {
    // Making a call to external api
    await fetch("http://localhost:8080/api")
    .then(async (res) => {
      // converting response to a json object
       const ress = await res.json();
       // Saving converted response to state as an object to be accessed
        setData({
         id: ress.id,
         payment: ress.hosted_invoice_url,
         pdf: ress.invoice_pdf
       });
      console.log(ress)
      console.log(data.id)
    })
    .catch(err => err);

   
  }, [])

  const urlClick = () => {
    window.location.assign(data.payment)
    .then(() => {
      window.location.assign(data.pdf)
    })
    .catch((err) => {console.log(err)});
  }
    
      return (
    <div>
       <p>{!data ? 'Loading...' : data.id}</p>
        <button onClick={urlClick}>Pay Now</button>
        </div>
  )
  }


export default Test;