
var token = localStorage.getItem('ACCESS_TOKEN');
var ws = new WebSocket("ws://127.0.0.1:7272/?token=" + token);

ws.onopen = function(evt) {
    console.log('已经连接')
}


function getWsInstance() {
    return ws
}