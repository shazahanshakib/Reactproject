
import { useState } from 'react'
import './App.css'



const App = () => {
const [firstName, setfirstName]=useState("");
const [secondName, setsecondName]=useState("");
const [emailName, setemailName]=useState();
const [conNum, setconNum]=useState("");
const [genderName, setgenderName]=useState("Male");

  const onclickBtn=()=>{
    console.log(firstName, secondName, emailName, conNum, genderName);
  }

  return (
    <div className='mainApp'>
        <h1>Form in React</h1>
        <form action="#">
            <label htmlFor="">First Name</label>
            <input onChange={(e)=>setfirstName(e.target.value)} type="text" placeholder='Enter Your First Name' />
            <label htmlFor="">Second Name</label>
            <input onChange={(e)=>setsecondName(e.target.value)} type="text" placeholder='Enter Your Second Name' />
            <label htmlFor="">Email</label>
            <input onChange={(e)=>setemailName(e.target.value)} type="email" placeholder='Enter Your Email' />
            <label htmlFor="">Contact Number</label>
            <input onChange={(e)=>setconNum(e.target.value)} type="text" placeholder='Enter Your Contact Number' />
            <div className='radioCheck'>
            <label For="gender">Gender</label>
            <input
            
            onChange={(e)=>setgenderName(e.target.value)}
             type="radio" name='gender' value="male" id='male'/>
            Male
            <input 
            
            onChange={(e)=>setgenderName(e.target.value)} type="radio" name='gender' value="female" id='female'/>
            Female
            <label htmlFor="">Your Best Sub</label>
            <input type="radio" name='bangla'/>
            Bangla
            <input type="radio" name='english'/>
            English
            <input type="radio" name='Math'/>
            Math
            </div>
            <button onClick={()=>onclickBtn()}>Submit</button>
        </form>
        
    </div>
  )
}

export default App