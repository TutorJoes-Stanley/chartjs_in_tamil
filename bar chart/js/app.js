new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["MS Dhoni", "Virat Kohli", "Rohit Sharma", "Ravindra Jadeja", "K. L. Rahul"],
      datasets: [
        {
          label: "Score Board",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [98,75,85,23,55]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Cricket Score Board 2020'
      }
    }
});