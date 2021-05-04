var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {

    type: 'bar',
    data: {
        labels: ['Python', 'Java', 'PHP','C#','C++','Kotlin'],
        
        
        datasets: [{
            label: 'Gráfico',
            backgroundColor: ['skyblue', 'red', 'yellow','blueviolet','orange','grey'],
            borderColor: 'rgb(255, 99, 132)',
            data: [70,1,1,1,1,1,1]
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