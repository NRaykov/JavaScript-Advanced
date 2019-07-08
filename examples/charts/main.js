window.addEventListener('load', () => {

   class ChartData {

       constructor(red, blue, yellow, green, purple, orange) {
           this.red = red;
           this.blue = blue;
           this.yellow = yellow;
           this.green = green;
           this.purple = purple;
           this.orange = orange;
       }

        getData() {
           const dataArr = [this.red, this.blue, this.yellow, this.green, this.purple, this.orange];

           dataArr.forEach((index)=> {
               if(index > 30) {
                   alert('Maximum Value Reached!');
               }
           });
           return dataArr;
        }

   }

    const chartData = new ChartData(25,14,8,10,15, 20);







    var ctx = document.getElementById('myChart');

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: chartData.getData(),

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

