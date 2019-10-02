var ctx = document.getElementById('doughnut-chart').getContext('2d');

var myChart = new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["0-17", "18-25", "26-35", "36-45", "46-50","51-55","55+"],
      datasets: [
        {
          label: "Purchase by age group",
          backgroundColor: ["#8e5ea2", "#cdbe3e","#3cba9f","#cd3e4e","#95cd3e","#cd3e95","#3e4ecd",],
          data: [10051,2138,15496,8390,5229,15628,6421]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Number of purchase records by age group.'
      }
    }
});

