///<reference path="jquery-3.2.1-min.js">
/*
document.write('<script src="jquery-3.2.1-min.js"><\/script>')
$(function () {
    $("#btn").click
    $("#btn").click(function(){
        alert("kk");
    });

});*/
//使用协议数组可以提高灵活性
/*var echoScket=new WebSocket("ws://echo.websocket.org",["com.kaazing.echo","example.imaginary.protocol"]);
var ws=new WebSocket("ws://echo.websocket.org");

echoScket.onopen=function (e) {
    alert(echoScket.protocol);
}
ws.binaryType="blob";

ws.onmessage=function(e){
    if(typeof e.data==='string'){
        alert(e.data);
    }else{
        alert("没有数据");
        alert(e.data);
    }
}*/

var ws=new WebSocket("ws://localhost:8080/WebSocketTest");
ws.onopen=function(){
    var num=Math.ceil(Math.random()*10);
    ws.send(num)
    console.log("messagei is"+num);

}

ws.onmessage=function(message){
    console.log("receive message is"+message);
}
ws.onclose=function(){
    console.log("connection is close");
}


