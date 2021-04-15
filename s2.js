Chart.plugins.register(ChartDataSource);
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            type: 'line',
            yAxisID: 'y',
            backgroundColor: 'transparent',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            tension: 0,
            fill: false
        }]
    },
    plugins: [ChartDataSource],
    options: {
        plugins: {
            datasource: {
                type: 'csv',
				url: 'out.csv',
				delimiter: ',',
				rowMapping: 'dataset',
				datasetLabels: true,
				indexLabels: true
            }
        }
    }
});