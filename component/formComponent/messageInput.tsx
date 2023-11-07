'use client'
import AppBar from '@material-ui/core/AppBar';
import React, { useState, useEffect } from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export function mainContent() {


  const [inputText, setinputText] = useState<string>('');
  const [texts, setTexts] = useState<string[]>([]); 

  const wsconnect = useWsconnect();// テキストデータの配列を管理するためのstateを追加
  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setinputText(event.target.value)
  }

  const addtext = () => {
    setTexts(prevTexts => [...prevTexts, inputText]);
    setinputText('');//入力フィーるどのクリア
  }
  return (
    <div className='app flex flex-col'>
      <header>

      </header>
      <div className='print'>
        {texts.map((text, index) => <p key={index}>{text}</p>)} {/* テキストデータの配列をマップして表示 */}
      </div>
      <div className=''>
      </div>
          <Button color="inherit" onClick={useWsconnect}>送信</Button>
      <AppBar position="static" color="primary"  className='mt-auto'>
        <Toolbar>
          <TextField value={inputText} onChange={changeInput} type="text" placeholder="入力してボタンを押してください。" style={{ flexGrow: 1 }} />
          <Button color="inherit" onClick={addtext}>送信</Button>
        </Toolbar>
      </AppBar>
    </div>

  )
}


import  {usemock2} from "./client"
function useWsconnect() {
// #0.WebSocket関連の処理は副作用なので、useEffect内で実装
    const socketRef = React.useRef<WebSocket>();
    // #1.WebSocketオブジェクトを生成しサーバとの接続を開始
    useEffect(() => {
    // ここにwsconnectのロジックを書く
    const websocket = new WebSocket('ws://localhost:1880/mockserver')
    socketRef.current = websocket

    // #2.メッセージ受信時のイベントハンドラを設定
    /*const onMessage = (event: MessageEvent<string>) => {
    }
    websocket.addEventListener('message', onMessage)*/

    // #3.useEffectのクリーンアップの中で、WebSocketのクローズ処理を実行
    return () => {
      websocket.close()
      //websocket.removeEventListener('message', onMessage)
    }
  }, []);}


function sendtext() {
  console.log("sendtext")

}

export default mainContent;