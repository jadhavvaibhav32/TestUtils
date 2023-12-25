import React, {useState} from 'react'


export default function TextForm(props) {
const handleUpClick = () =>{
    //console.log("uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
}

const handleLoClick = () =>{
    //console.log("lowercase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
}

const handleInverseCase = () =>{
    //console.log("inversecase was clicked: " + text);
    let newText = '';
    for (let i = 0; i < text.length; i++) {
      if (text[i] === text[i].toUpperCase()) {
        newText += text[i].toLowerCase();
      } else {
        newText += text[i].toUpperCase();
      }
    }
    setText(newText);
}

const handleExtraSpcae = () =>{
  //console.log("extra space was clicked: " + text);
  let newText = text.replace(/\s+/g, ' ').trim();
  setText(newText);  
}


const handleCopyText = () =>{
    //console.log("copytext was clicked: " + text);    
    navigator.clipboard.writeText(text)
    .then(() => setCopied(true))
      .catch(() => setCopied(false));

    // Reset the indication after a short delay
    setTimeout(() => setCopied(false), 2000);
}

const handleClearText = () =>{
    //console.log("cleartext was clicked: " + text);    
    setText('');
}

const handleOnChange = (event) =>{
    //console.log("OnChange");
    //setText(event.target.value);
    setText(event.target.value)      
}

//const [text, setText] = useState('Start typing here...');
const [text, setText] = useState('');
const [copied, setCopied] = useState(false);
//text = "new test"; //wrong way to chnage the state
//setText = "new text"; //correct way to chnage the state
  return (
    <>
    <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
        
        <h1>{props.heading}</h1>  
        {/* Indicator for copy text */}
        {copied && <p style={{ color: 'green', fontWeight: 'bold', marginBottom: '10px' }}>Text Copied on Clipboard!</p>}

        <div className="mb-3">        
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'black'}} placeholder={text ? '' : 'Start typing here...'} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleInverseCase}>Inverse Case</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpcae}>Remove Extra Space</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopyText}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear Text</button>
    </div>

    <div className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
        <h3>Your Text Summery</h3>
        {/* <p>{text.split(" ").length} Words and {text.length} Character</p> */}
        <p>{text.trim().split(/\s+/).filter(Boolean).length} Words and {text.length} Character</p>
        <p>{0.008 * text.trim().split(/\s+/).filter(Boolean).length} Minute read</p>
        <h4>Preview</h4>
        <p style={{ color:text.length > 0 ? (props.mode === 'dark' ? 'white':'black') : props.mode === 'dark' ? 'darkred' : 'red' }}>{text.length>0?`${text}`:"🙁 Enter something in text area to preview it"}</p>
    </div>
    </>
  )
}
