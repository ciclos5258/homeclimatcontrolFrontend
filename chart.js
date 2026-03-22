async function loadDataAndDrawChart() {
    try {
        const response = await fetch('/data');
        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }
        const data = await response.json();

        const ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Температура',
                    data: data.values,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    } catch (error) {
        console.error('Ошибка:', error);
        document.body.innerHTML += '<p style="color:red">Не удалось загрузить данные для графика.</p>';
    }
}

window.addEventListener('load', loadDataAndDrawChart);