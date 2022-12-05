import React,{useState} from 'react'

export default function TextForm(props) {
const handleUpClick = ()=>{
  let newText= text.toUpperCase();
  setText(newText);
  props.showAlert("Converted to Upper Case","success");
}
const handleLoClick = ()=>{
  let newText= text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to Lower Case","success");
}
const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}


const clearText = ()=>{
  let newText= " ";
  setText(newText);
}

const handleOnChange = (event)=>{
  console.log("On Change");
  setText(event.target.value);
}
const handleCopy = () => {
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied","success");
}

  const [text,setText]=useState('');
  return (
    <>
    <div className='container'>
      <h1 style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h1>
  <div className="mb-3">
   <textarea className='form-control' value={text} style={{backgroundColor: props.mode==='light'?'white':'rgb(33,37,41)',color: props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-warning mx-1 my-1" onClick={handleUpClick} >convert to upper case</button>
  <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick} >convert to lower case</button>
  <button className="btn btn-danger mx-1 my-1" onClick={clearText} >clear text</button>
  <button type="submit" onClick={speak} className="btn btn-dark mx-1 my-1">Speak</button>
  <button type="submit" onClick={handleCopy} className="btn btn-secondary mx-1 my-1">Copy</button>
    </div>
    <div className="container my-3">
      <h2 style={{color: props.mode==='light'?'black':'white'}}>Text Summary</h2>
      <p style={{color: props.mode==='light'?'black':'white'}}>{text.split(" ").length -1} words and {text.length} characters</p>
      <p style={{color: props.mode==='light'?'black':'white'}}>{0.48*(text.split(" ").length-1)} - Seconds Read</p>
       <h2 style={{color: props.mode==='light'?'black':'white'}}>Preview</h2>
       <p style={{color: props.mode==='light'?'black':'white'}}>{text}</p>
    </div>
    </>
  )
}
