const ctx = document.getElementById('myChart');
var graphData = {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor:[
            'rgba(73, 198, 230, 0.5)',
        ],
        borderWidth: 1
      }]
    },
    options: {}
  }

var myChart = new Chart(ctx, graphData);


var socket = new WebSocket('ws://localhost:8000/ws/chart/');

socket.onmessage = function(e){
    var djData = JSON.parse(e.data);
    console.log(djData.num);

    var newGraphData = graphData.data.datasets[0].data;
    newGraphData.shift();
    newGraphData.push(djData.num);

    graphData.data.datasets[0].data = newGraphData;
    myChart.update();

    document.getElementById('myText').innerText = djData.num;
}

