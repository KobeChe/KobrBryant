/**
 * Created by Administrator on 2017/7/7.
 */
var MAX=1024;
var ws=new WebSocket("ws://echo.websocket.org/updates");
ws.onopen=function(){
    setInterval(function(){
        if(ws.bufferedAmount<MAX){
            ws.send(ws.bufferedAmount);
        }
    },1000);
}




