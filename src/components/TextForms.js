import React,{useState} from 'react'

export default function TextForms(props) {
  const handleUpClick=()=>{
    // console.log("Uppercase was clicked"+text)
    const newText = text.toUpperCase()
    setText(newText)
  }
  const handleRemoveExtraSpaces=()=>{
    const newText = text.split(/[ ]+/)
    setText(newText.join(" "))
  }
  const handleLoClick=()=>{
    // console.log("Uppercase was clicked"+text)
    const newText = text.toLowerCase()
    setText(newText)
  }
  const handleInverseClick=()=>{
    // console.log("Uppercase was clicked"+text)
    const newText = text.split('').reverse().join('')
    setText(newText)

  }
  const handleClearClick=()=>{
    // console.log("Uppercase was clicked"+text)
    const newText =''
    setText(newText)

  }
  const handleOnChange=(event)=>{
    console.log("On Change")
    setText(event.target.value)
  }
  const getlength=()=>{
    if(text!==""){
      return text.split(" ").length
    }
    else{
      return 0
    }
  }
  const[text,setText]=useState("")
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleInverseClick}>Convert to Inverse </button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear </button>
<button className="btn btn-primary mx-2" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button> 

    </div>
    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>{getlength()} words {text.length} characters</p>
      <p>{0.08*text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
