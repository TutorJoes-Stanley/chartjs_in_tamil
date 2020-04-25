$(document).ready(function(){
  $.ajax({
    url: "http://localhost/chart/data.php",
    method: "GET",
    success: function(data) {
      console.log(data);
      var player = [];
      var score = [];
      var colors = [];

      for(var i in data) {
        player.push(data[i].NAME);
        score.push(data[i].RUNS);
        colors.push(color());
      }

      var chartdata = {
        labels: player,
        datasets : [
          {
			label: "Score Board",
			backgroundColor: colors,
			data:score
          }
        ]
		
      };

      var ctx = $("#mycanvas");

      var barGraph = new Chart(ctx, {
			type: 'horizontalBar', /*horizontalBar*/
			data: chartdata,
		options: {
		  legend: { display: false },
		  title: {
			display: true,
			text: 'Cricket Score Board 2020'
		  }
		}
      });
    },
    error: function(data) {
      console.log(data);
    }
  });
  
  
  function color()
  {
		var r = Math.floor(Math.random()*256);          // Random between 0-255
		var g = Math.floor(Math.random()*256);          // Random between 0-255
		var b = Math.floor(Math.random()*256);          // Random between 0-255
		var rgba = 'rgba(' + r + ',' + g + ',' + b + ',1.0)';
		return rgba;
  }
});