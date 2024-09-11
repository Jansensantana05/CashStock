const ctx = document.getElementById('financeChart').getContext('2d');

const financeChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'],
        datasets: [
            {
                label: 'Recebimentos',
                data: [4600, 2900, 3400, 1370, 2500, 1800, 3800],
                borderColor: 'red',
                fill: false,
                tension: 0.1
            },
            {
                label: 'Despesas',
                data: [1800, 1500, 1200, 1600, 1050, 1400, 1634],
                borderColor: 'teal',
                fill: false,
                tension: 0.1
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
