var socket = new WebSocket('ws://localhost:8000/ws/chart/');

socket.onmessage = function(e){
    var djData = JSON.parse(e.data);
    console.log(djData);

    document.querySelector('#app').innerText = djData.num;
}