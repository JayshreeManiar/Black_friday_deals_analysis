/*A very popular open-source library with more than 40k stars on GitHub.
 It’s lightweight and lets you build responsive chart using HTML5 Canvas elements. 
 You can easily mix and match line and bar charts to combine different datasets, 
 which is quite the awesome feature.
 ChartJS has great documentation and a list of hooks in their plugin API.
  Basically, a plugin for Chart.js is just an object, 
 and they look for keys which are the hooks in the plugin API.*/

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        //labels: ['0-17','18-25','26-35','36-45','46-50','51-55','55+'],
        labels: ['0','1','2','3','4','5'],
       // ,'6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'],
        datasets: [{
            label: 'Purchase based on Occupation',
            data: [213384825,
                134362252,
                74993407,
                51870196,
                230642215,
                40980298,
                60996124],
               /* 187550876,
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
                90832607],*/
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'],
                /*'rgba(255, 99, 132, 0.2)',
                'rgba(238,105,189, 0.2)',
                'rgba(243, 115,79, 0.2)',
                'rgba(99,255,222, 0.2)',
                'rgba(0, 168, 255, 0.2)',
                'rgba(255, 150, 170, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(99,255,222, 0.2)',
                'rgba(221, 99, 255, 0.2)',
                'rgba(97, 171, 64, 0.2)',
                'rgba(0, 172, 252, 0.2)'
            ],*/
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'],
                /*'rgba(255, 99, 132, 1)',
                'rgba(238,105,189, 1)',
                'rgba(243, 115,79, 1)',
                'rgba(99,255,222, 1)',
                'rgba(0, 168, 255, 1)',
                'rgba(255, 150, 170, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(0, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(99,255,222, 1)',
                'rgba(221, 99, 255, 1)',
                'rgba(97, 171, 64, 1)',
                'rgba(0, 172, 252, 1)'
            ],*/
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