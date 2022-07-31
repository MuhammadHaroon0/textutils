import React, { useState } from "react";

export default function TextForm(props) {

  const [text, setText] = useState("");

  const onChangingText = (event) => {
    // console.log("Text is changed"); //for debugging
    setText(event.target.value);
  };

  const UpperCaseText = () => {
    // console.log("clicked");  //for debugging
    let newText = text.toUpperCase();
    setText(newText);
  };

  const LowerCaseText = () => {
    // console.log("clicked");  //for debugging
    let newText = text.toLowerCase();
    setText(newText);
  };

  const ClearText = () => {
    // console.log("clicked");  //for debugging
    let newText = "";
    setText(newText);
  };

  const CopyText = () => {
    // console.log("clicked");  //for debugging
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("success","Text has been copied");
  };

  const RemoveExtraSpaces = () => {
    // console.log("clicked");  //for debugging
    let newText = text.split(/[ ]+/);
    newText = newText.join(" ");
    setText(newText);
  };
  
//   const[btnText,setBtnText]=useState("Enable Dark Mode")
//   const[myStyle,setStyle]=useState({
//    color:"black",
//    backgroundColor:'white',
//  })

// const DarkMode=()=>{
//   if(myStyle.color==='white'){
//     setStyle({
//       color:"black",
//      backgroundColor:'white',
//     })
//     setBtnText("Enable dark mode")
//   }
// else{
//   setStyle({
//     color:"white",
//     backgroundColor:'black',
//     // border:"1px solid white",
//   })
//   setBtnText("Enable light mode")
// }
// };

  
  return (
    <>
      <div className="container" >
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
        <hr />
        <div className="mb-3" >
          <textarea
            value={text}
            className="form-control"
            style={{backgroundColor:props.mode==='dark'?'black':'white',
                  color:props.mode==='dark'?'white':'black'}}
            id="myBox"
            rows="10"
            onChange={onChangingText}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={UpperCaseText}>
          Uppercase Text
        </button>
        <button className="btn btn-primary mx-2" onClick={LowerCaseText}>
          LowerCase Text
        </button>
        <button className="btn btn-primary mx-2" onClick={ClearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={CopyText}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={RemoveExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        {/* <button
          className="btn btn-primary mx-2 my-2"
          onClick={DarkMode}
        >
          {btnText}
        </button> */}
      </div>
      <div className="container my-6 mx-6" style={{color:props.mode==='dark'?'white':'black'}} >
        <h2>Your text summary:</h2>
        <p>
          <b>{text.split(/[ ]+/).length-1}</b> words and <b>{text.length}</b>{" "}
          characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter text above to preview"}</p>
      </div>
    </>
  );
}
