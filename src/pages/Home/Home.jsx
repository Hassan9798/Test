import React, { useState } from 'react';
// import { Alert } from 'react-alert';
import axios from 'axios';
import './home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  console.log(inputValue)
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post('http://localhost:4000/api/convertCurrency', { dollars: inputValue });
      if (res.status == 200) {
        console.log(res.data.data)
        navigate('/response', { state: { ...res.data.data } });
      }
    }
    catch (err) {
      // alert("Your file is being uploaded!")
      console.log(err.response.data.message);
      navigate('/response', { state: { message: err.response.data.message } });

    }
  }
  return (
    <div style={{ width: '100%', height: '100%', 'display': 'flex', flexDirection: 'column', 'alignItems': 'center', 'justifyContent': 'center' }}>
      <h1>Please Input Dollars</h1>
      <div className='Input'>
        <input type="text" name="Input" className='InputField' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div >

  )
}

export default Home