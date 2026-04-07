// ===============================
// script.js - Air Quality Dashboard
// ===============================

// Wait until the page fully loads
document.addEventListener("DOMContentLoaded", () => {

    // -------------------------------
    // 1️⃣ Color city cards based on AQI
    // -------------------------------
    const cards = document.querySelectorAll('.city-card');

    // Arrays for Chart.js
    const cityNames = [];
    const aqiValues = [];
    const bgColors = [];

    cards.forEach(card => {
        const aqi = parseInt(card.dataset.aqi);
        const city = card.querySelector('h2').innerText;

        cityNames.push(city);
        aqiValues.push(aqi);

        // Assign card color classes
        if (aqi <= 50) card.classList.add('good');
        else if (aqi <= 100) card.classList.add('moderate');
        else card.classList.add('unhealthy');

        // Assign same colors for chart bars
        if (aqi <= 50) bgColors.push('rgba(40, 167, 69, 0.7)');       // Green
        else if (aqi <= 100) bgColors.push('rgba(255, 193, 7, 0.7)');  // Yellow
        else bgColors.push('rgba(220, 53, 69, 0.7)');                 // Red
    });

    // -------------------------------
    // 2️⃣ Create Chart.js Bar Chart
    // -------------------------------
    const ctx = document.getElementById('aqiChart').getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: cityNames,
            datasets: [{
                label: 'AQI Levels',
                data: aqiValues,
                backgroundColor: bgColors,
                borderColor: bgColors.map(c => c.replace('0.7', '1')),
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `AQI: ${context.raw}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'AQI Value'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Cities'
                    }
                }
            },
            elements: {
                bar: {
                    borderRadius: 8 // Rounded corners for bars
                }
            }
        }
    });
});