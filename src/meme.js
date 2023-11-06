import Datameme from "./memesData.js"
import React from "react"

function Meme() {
    // let url

    const[meme,setMeme] = React.useState({
      topText:"",
      bottomText:"",
      randomImage:"https://i.imgflip.com/30b1gx.jpg"
    })
    const[allMemeImage,setAllMemeImage] = React.useState (Datameme)

    function getMemeImage() {
        const memesArray = allMemeImage.data.memes
        const randomNumber = Math.floor(Math.random() *memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme =>({
          ...prevMeme,
          randomImage:url
        }))
        // url = memesArray[randomNumber].url
        // console.log(url)
    }
    return (
      <main>
        
        <div className="form">
            <input 
                    type="text"
                    placeholder=" Top text"
                    className="form-input" 
                />
            <input 
                type="text"
                placeholder="Bottom text"
                className="form-input"
            />
            <button className="form-button"
             onClick={getMemeImage}>Get a new meme image 🖼</button>
             
        </div>
        <div className="rathore"><img src={meme.randomImage} className="meme-image" alt=""></img></div>
        
      </main>
    );
  }
  
export default Meme;
  