var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {

    type: 'bar',
    data: {
        labels: ['Html5', 'CSS3', 'Javascript','Bootstrap','Angular.js','Foundation'],
        
        
        datasets: [{
            label: 'Gráfico',
            backgroundColor: ['skyblue', 'red', 'yellow','blueviolet','orange','grey'],
            borderColor: 'rgb(255, 99, 132)',
            data: [70,50,3,2,2,2,2]
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