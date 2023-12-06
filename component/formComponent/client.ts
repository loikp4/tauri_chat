'use client'
// Import
import { ApiPromise, WsProvider } from '@polkadot/api';
import { Abi, ContractPromise } from '@polkadot/api-contract';
import * as path from 'path';
import { text } from 'stream/consumers';
import React from 'react';
import { useEffect } from 'react';

const host = "wss://192.168.3.9:9944"
const host2 = "wss://rpc.polkadot.io"
const sibuya = "wss://rpc.shibuya.astar.network"
const mockserverhost ="ws/mockserver"

export async function initial() {
    // Construct
    const wsProvider = new WsProvider(sibuya);
    const api = await ApiPromise.create({ provider: wsProvider });
    // Do something
    console.log(api.genesisHash.toHex());
// Retrieve the chain & node information information via rpc calls
  const [chain, nodeName, nodeVersion] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version()
  ]);

  console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);
    
}

export const mock  = () => {
  const socketRef = React.useRef<WebSocket>();
// #0.WebSocket関連の処理は副作用なので、useEffect内で実装
  React.useEffect(() => {
    // #1.WebSocketオブジェクトを生成しサーバとの接続を開始
    const websocket = new WebSocket('ws://localhost:1880/mockserver')
    socketRef.current = websocket

    // #2.メッセージ受信時のイベントハンドラを設定
    const onMessage = (event: MessageEvent<string>) => {
    }
    websocket.addEventListener('message', onMessage)

    // #3.useEffectのクリーンアップの中で、WebSocketのクローズ処理を実行
    return () => {
      websocket.close()
      websocket.removeEventListener('message', onMessage)
    }
  }, [])
};
export const usemock2  = () => {
  // WebSocket接続を開く
  let socket = new WebSocket("ws://localhost:9980");
// 接続が開かれたときのイベントハンドラ
socket.onopen = function(event) {
  console.log("WebSocket is open now.");
};
// 接続が開かれたときのイベントハンドラ
socket.onopen = function(event) {
  console.log("WebSocket is open now.");
};

// メッセージが受信されたときのイベントハンドラ
socket.onmessage = function(event) {
  console.log("WebSocket message received:", event.data);
};

// 接続が閉じられたときのイベントハンドラ
socket.onclose = function(event) {
  console.log("WebSocket is closed now.");
};

// エラーが発生したときのイベントハンドラ
socket.onerror = function(error) {
  console.log("WebSocket Error: ", error);
};

  return socket;

};