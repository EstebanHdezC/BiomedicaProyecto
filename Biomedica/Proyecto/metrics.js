// metrics.js

document.addEventListener("DOMContentLoaded", function () {
    // Obtener las métricas del almacenamiento local
    const metrics = JSON.parse(localStorage.getItem('selectedMetrics'));

    if (metrics) {
        // Actualizar los elementos del HTML con los datos de métricas
        document.getElementById("bpmReposo").textContent = metrics.bpmReposo;
        document.getElementById("bpmActividad").textContent = metrics.bpmActividad;
        document.getElementById("spo2").textContent = metrics.spo2;
        document.getElementById("temperatura").textContent = metrics.temperatura;
        document.getElementById("peso").textContent = metrics.peso;
        document.getElementById("altura").textContent = metrics.altura;
        document.getElementById("vam").textContent = metrics.vam;

        // Valores recomendados
        const recommendedValues = {
            bpmReposo: 60,         // Frecuencia cardíaca en reposo (recomendado entre 60-80 BPM)
            bpmActividad: 120,     // Frecuencia cardíaca durante actividad (recomendado alrededor de 120-140 BPM para ejercicio moderado)
            spo2: 95,              // Nivel de oxígeno en la sangre (SpO2 recomendado > 95%)
            temperatura: 36.5,     // Temperatura corporal (recomendado 36.5-37.5 °C)
            pesoIdeal: 70,         // Peso ideal (esto depende del IMC y la altura del usuario)
            altura: metrics.altura, // Altura no tiene un valor recomendado específico
            vam: 40                // VAM (Velocidad Aeróbica Máxima) recomendado (> 30)
        };

        // Crear gráficos comparativos para cada métrica con Chart.js

        // Gráfico para BPM en reposo y BPM en actividad
        const ctxBpm = document.getElementById('bpmChart').getContext('2d');
        new Chart(ctxBpm, {
            type: 'bar',
            data: {
                labels: ['BPM en reposo', 'BPM en actividad'],
                datasets: [
                    {
                        label: 'Frecuencia Cardíaca Actual (BPM)',
                        data: [metrics.bpmReposo, metrics.bpmActividad],
                        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
                        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
                        borderWidth: 1
                    },
                    {
                        label: 'Valor Recomendado (BPM)',
                        data: [recommendedValues.bpmReposo, recommendedValues.bpmActividad],
                        backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)'],
                        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)'],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Gráfico para SpO2
        const ctxSpo2 = document.getElementById('spo2Chart').getContext('2d');
        new Chart(ctxSpo2, {
            type: 'bar',
            data: {
                labels: ['SpO2 (%)'],
                datasets: [
                    {
                        label: 'Nivel Actual de SpO2',
                        data: [metrics.spo2],
                        backgroundColor: ['rgba(54, 162, 235, 0.6)'],
                        borderColor: ['rgba(54, 162, 235, 1)'],
                        borderWidth: 1
                    },
                    {
                        label: 'Valor Recomendado de SpO2 (%)',
                        data: [recommendedValues.spo2],
                        backgroundColor: ['rgba(75, 192, 192, 0.2)'],
                        borderColor: ['rgba(75, 192, 192, 1)'],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });

        // Gráfico para Temperatura
        const ctxTemperatura = document.getElementById('temperaturaChart').getContext('2d');
        new Chart(ctxTemperatura, {
            type: 'bar',
            data: {
                labels: ['Temperatura (°C)'],
                datasets: [
                    {
                        label: 'Temperatura Actual',
                        data: [metrics.temperatura],
                        backgroundColor: ['rgba(255, 206, 86, 0.6)'],
                        borderColor: ['rgba(255, 206, 86, 1)'],
                        borderWidth: 1
                    },
                    {
                        label: 'Temperatura Recomendada (°C)',
                        data: [recommendedValues.temperatura],
                        backgroundColor: ['rgba(153, 102, 255, 0.2)'],
                        borderColor: ['rgba(153, 102, 255, 1)'],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 40
                    }
                }
            }
        });

        // Gráfico para Peso
        const ctxPeso = document.getElementById('pesoChart').getContext('2d');
        new Chart(ctxPeso, {
            type: 'bar',
            data: {
                labels: ['Peso (kg)'],
                datasets: [
                    {
                        label: 'Peso Actual',
                        data: [metrics.peso],
                        backgroundColor: ['rgba(153, 102, 255, 0.6)'],
                        borderColor: ['rgba(153, 102, 255, 1)'],
                        borderWidth: 1
                    },
                    {
                        label: 'Peso Ideal (kg)',
                        data: [recommendedValues.pesoIdeal],
                        backgroundColor: ['rgba(255, 159, 64, 0.2)'],
                        borderColor: ['rgba(255, 159, 64, 1)'],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Gráfico para VAM
        const ctxVam = document.getElementById('vamChart').getContext('2d');
        new Chart(ctxVam, {
            type: 'line',
            data: {
                labels: ['VAM'],
                datasets: [
                    {
                        label: 'VAM Actual',
                        data: [metrics.vam],
                        backgroundColor: ['rgba(75, 192, 192, 0.2)'],
                        borderColor: ['rgba(75, 192, 192, 1)'],
                        borderWidth: 2,
                        fill: false
                    },
                    {
                        label: 'VAM Recomendado',
                        data: [recommendedValues.vam],
                        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                        borderColor: ['rgba(255, 99, 132, 1)'],
                        borderWidth: 2,
                        fill: false
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

    } else {
        // Si no hay datos de métricas, redirigir a la página de registros médicos
        window.location.href = 'medical_records.html';
    }
});
