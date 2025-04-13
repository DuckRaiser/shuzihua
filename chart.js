document.addEventListener('DOMContentLoaded', function() {
    // Chart for savings trend
    const ctx = document.getElementById('savingsChart');
    if (!ctx) return;
    
    // Sample data for the chart (you can replace with real data)
    const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    
    // Current savings reaching 950 by April and staying constant
    const actualSavings = [350, 650, 850, 950, null, null, null, null, null, null, null, null];
    
    // Projected savings when all projects complete - reaching 1800 by December
    const projectedSavings = [350, 650, 850, 950, 1000, 1100, 1200, 1300, 1400, 1500, 1650, 1800];
    
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [
                {
                    label: '已实现工时节省',
                    data: actualSavings,
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderColor: 'rgba(59, 130, 246, 1)',
                    tension: 0.4,
                    borderWidth: 2,
                    fill: true,
                    spanGaps: false
                },
                {
                    label: '预期工时节省',
                    data: projectedSavings,
                    backgroundColor: 'rgba(191, 219, 254, 0.1)',
                    borderColor: 'rgba(191, 219, 254, 1)',
                    tension: 0.4,
                    borderWidth: 2,
                    borderDash: [5, 5],
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            if (context.raw === null) return null;
                            return context.dataset.label + ': ' + context.raw + ' 工时/月';
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        callback: function(value) {
                            return value + ' 工时';
                        }
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            }
        }
    });
});
