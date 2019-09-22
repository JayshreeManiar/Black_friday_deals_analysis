var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['0-17','18-25','26-35','36-45','46-50','51-55','55+'],
        datasets: [{
            label: 'Purchase based on Age group',
            data: [213384825,
                134362252,
                74993407,
                51870196,
                230642215,
                40980298,
                60996124,
                187550876,
                5816512,
                18388543,
                43166614,
                33660030,
                112705223,
                21428037,
                88969298,
                42144742,
                76906735,
                151563365,
                21144033,
                23752448,
                90832607],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});