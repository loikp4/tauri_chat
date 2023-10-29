'use client'
import AppBar from '@material-ui/core/AppBar';
import React,{useState,useEffect} from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
  
export function mainContent(){


    const [inputText,setinputText] = useState<string>('');
    const [texts, setTexts] = useState<string[]>([]); // テキストデータの配列を管理するためのstateを追加
    const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {

        setinputText(event.target.value)
    }
    
    const addtext = () =>{ 
      setTexts(prevTexts => [...prevTexts,inputText]);
      setinputText('');//入力フィーるどのクリア
    }
    return (
        <div className='app'>
        <header>
          
        </header>
          <div className='print'>
            {texts.map((text, index) => <p key={index}>{text}</p>)} {/* テキストデータの配列をマップして表示 */}
          </div>
          <div className=''>
          <span>
          <input value={inputText} onChange={(e) => setinputText(e.target.value)} type="text" placeholder="入力してボタンを押してください。"></input>
          <button onClick={addtext}>sample</button>
          </span>
          <p>
          <button onClick={(e) => wsconnect()}>testwsbutton</button>
          </p>
          </div>
          <AppBar position="fixed" color="primary" style={{top: 'auto', bottom: 0}}>
        <Toolbar>
          <TextField value={inputText} onChange={changeInput} type="text" placeholder="入力してボタンを押してください。" style={{flexGrow: 1}} />
          <Button color="inherit" onClick={addtext}>送信</Button>
        </Toolbar>
        </AppBar>
        </div>
      
)
}


import  initial from "./client"
function wsconnect(){
        initial();
}


function sendtext(){
  console.log("sendtext")

}

export default mainContent;