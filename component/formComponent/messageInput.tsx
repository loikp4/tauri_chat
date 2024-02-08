'use client'
import AppBar from '@material-ui/core/AppBar';
import React, { useState, useEffect } from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { initial } from './client';
import PaperBalloon from '../testComponent/paperballon';
//import WebSocket, { Message } from 'tauri-plugin-websocket-api';

// カスタムイベントを作成します
const messageEvent = new Event('messageReceived');

export function mainContent() {
  const [texts, setTexts] = useState<string[]>([]);
  const [inputText, setinputText] = useState<string>('');

  // #0.WebSocket関連の処理は副作用なので、useEffect内で実装
  const socketRef = React.useRef<WebSocket>();
  React.useEffect(() => {
  // #1.WebSocketオブジェクトを生成しサーバとの接続を開始
    // ここにwsconnectのロジックを書く
    const websocket = new WebSocket('ws://localhost:1880/ws')
    socketRef.current = websocket

    // #2.メッセージ受信時のイベントハンドラを設定
    const onMessage = (event: MessageEvent<string>) => {
      console.log("get:", event.data)
      const receivedText = event.data;
      setTexts(prevTexts => [...prevTexts, receivedText])
    }
    websocket.addEventListener('message', onMessage)

    // #3.useEffectのクリーンアップの中で、WebSocketのクローズ処理を実行
    return () => {
      websocket.close()
      websocket.removeEventListener('message', onMessage)
    }
  },[]);

  // テキストデータの配列を管理するためのstateを追加
  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setinputText(event.target.value)
  }
 
  // 送信用関数
  const sendtext = () => {
    setTexts(prevTexts => [...prevTexts, inputText]);
    socketRef.current?.send(inputText);
    setinputText('');//入力フィールドのクリア
  }
  const functest = () => {
    initial();
  }
  return (
    <div className='app flex flex-col'>
      <header>
      </header>
      <div className='app flex flex-col'>
        {texts.map((text, index) => 
          <PaperBalloon key={index} alignRight={true} >
          {text}
          </PaperBalloon>
        )} {/* テキストデータの配列をマップして表示 */}
      </div>
      <AppBar position="static" color="primary" className='mt-auto'>
        <Toolbar>
          <TextField value={inputText} onChange={changeInput} type="text" placeholder="入力してボタンを押してください。" 
          style={{ flexGrow: 1 }} />
          <Button color="inherit" onClick={sendtext}>送信</Button>
          <Button color="inherit" onClick={functest}>functest</Button>
        </Toolbar>
      </AppBar>
    </div>

  )
}


async function useWsconnect2() {
  const ws = await WebSocket.connect('ws://localhost:1880/ws').then(r => {
    r.addListener(listener1)
    return r;
  }
  ).catch(
    (e) => {
      console.log("error");
    }
  );
  console.log(ws);

  await ws?.send("test");
  return ws;

}


function listener1(arg: Message) {
  let text = arg.data?.toLocaleString();
  // メッセージを受信したときにカスタムイベントを発火します
  window.dispatchEvent(messageEvent);
}

function useWsconnect() {
  }

export default mainContent;