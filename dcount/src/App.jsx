import './App.css';
import { useState } from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';



function App() {
  //Creating state for holding the details from input box
  const [amount, setAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [saving, setSaving] = useState(0);
  const [pay, setPay] = useState(0);

  const handleCalculate = () => {
    const parsedAmount = parseInt(amount, 10);
    const parsedDiscount = parseInt(discount, 10);

    if (!isNaN(parsedAmount) && !isNaN(parsedDiscount)) {
      const output = (parsedAmount * parsedDiscount) / 100;
      setSaving(output);

      const discountedPrice = parsedAmount - output;
      setPay(discountedPrice);
    }
  };

  const reset = () => {
    setAmount(0);
    setDiscount(0);
    setSaving(0);
    setPay(0);
  };


  return (
    <div className="App">

      <MDBNavbar light bgColor='info'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://www.freeiconspng.com/thumbs/20-off-png/circle-20-off-png-1.png'
              height='29'
              alt=''
              loading='lazy'
            />
            <h3 className='fw-bold text-light text-shadow'>Discount Calculator</h3>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>



      <div className="row-wrapper">
        <MDBRow className="d-flex align-items-stretch overflow-hidden">
          <MDBCol md='1'></MDBCol>
          <MDBCol md='5'>
            <div className="container1 m-4 bg-light" style={{ border: "2px solid #ccc", borderRadius: "10px", padding: "20px" }}>
              <h3 className='text-center'>Enter the discount details:</h3>
              <div className="input text-center">
                <TextField id="outlined-basic" label="Amount" variant="outlined" className='m-2' value={amount || ""} onChange={(e) => setAmount(e.target.value)} /> <br />
                <TextField id="outlined-basic" label="Discount %" variant="outlined" className='m-2' value={discount || ""} onChange={(e) => setDiscount(e.target.value)} /> <br />
              </div>
              <div className="button text-center">
                <Button variant="contained" className='m-2' onClick={e => handleCalculate(e)}>Calculate %</Button>
              </div>
            </div>
          </MDBCol>
          <MDBCol md='5'>
            <div className="container2 m-4 bg-light" style={{ border: "2px solid #ccc", borderRadius: "10px", padding: "20px" }}>
              <h3 className='text-center'>After Discount:</h3>
              <div className="input text-center">
                <TextField id="outlined-basic" label="You're Saving" variant="outlined" className='m-2' value={saving || ""} onChange={(e) => setSaving(e.target.value)} /> <br />
                <TextField id="outlined-basic" label="You Pay" variant="outlined" className='m-2' value={pay || ""} onChange={(e) => setPay(e.target.value)} />
              </div>
              <div className="button text-center">
                <Button variant="contained" className='m-2' onClick={reset}>Reset</Button>
              </div>
            </div>
          </MDBCol>
          <MDBCol md='1'></MDBCol>
        </MDBRow>
      </div>

    </div>
  );
}

export default App;