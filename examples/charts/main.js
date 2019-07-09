window.addEventListener('load', () => {

    class ChartData {

        constructor(arrValues) {
            this.arrValues = arrValues;
        }

        authChartData() {
            const dataArr = this.arrValues;
            if (typeof dataArr === 'object') {
                dataArr.forEach((index) => {
                    if (index > 30)
                        alert('Maximum Value Reached!');
                });
            } else {
                alert('Insert an Array');
            }
            return dataArr;
        }

    }

    const initValues = [25, 14, 8, 31, 15, 20]; // fetch data from server
    const chartData = new ChartData(initValues);


    let ctx = document.getElementById('myChart');

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: chartData.authChartData(),

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

});

