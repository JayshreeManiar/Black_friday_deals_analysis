var ctx = document.getElementById("polarChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: ["0-17", "18-25", "26-35", "36-45", "46-50", "51-55", "55+"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#e74c3c",
        "#9b59b6",
        "#34495e",
        "#95a5a6",
        "#f1c40f"
      ],
      data: [10, 12, 4, 9, 1, 0, 7]
    }]
  }
});
