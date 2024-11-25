// recommendations.js

function loadRecommendations() {
    // Obtener las métricas preestablecidas del historial médico (simulación)
    const metrics = JSON.parse(localStorage.getItem('selectedMetrics'));

    // Referencia al contenedor de recomendaciones
    const recommendationsContainer = document.getElementById("recommendationsContainer");

    if (metrics) {
        // Generar recomendaciones según las métricas del usuario
        const recommendations = [];

        // Recomendación para BPM en reposo
        if (metrics.bpmReposo > 80) {
            recommendations.push("Tu frecuencia cardíaca en reposo está elevada. Te recomendamos reducir el consumo de cafeína y realizar ejercicios de relajación como yoga o meditación para disminuir tu ritmo cardíaco.");
        } else if (metrics.bpmReposo < 60) {
            recommendations.push("Tu frecuencia cardíaca en reposo está por debajo del promedio. Podrías beneficiarte de realizar actividades cardiovasculares como caminatas o ciclismo para fortalecer el corazón.");
        }

        // Recomendación para BPM en actividad
        if (metrics.bpmActividad > 140) {
            recommendations.push("Tu frecuencia cardíaca durante la actividad física está elevada. Te sugerimos reducir la intensidad del ejercicio, hacer pausas frecuentes y escuchar a tu cuerpo para evitar sobrecargarlo.");
        }

        // Recomendación para SpO2
        if (metrics.spo2 < 95) {
            recommendations.push("Tus niveles de oxígeno en la sangre (SpO2) son bajos. Te recomendamos practicar ejercicios de respiración profunda y asegurarte de estar en un lugar bien ventilado.");
        }

        // Recomendación para la temperatura corporal
        if (metrics.temperatura > 37.5) {
            recommendations.push("Tu temperatura corporal está elevada, lo cual puede indicar fiebre. Descansa, mantente hidratado y, si es necesario, consulta a un médico.");
        } else if (metrics.temperatura < 36) {
            recommendations.push("Tu temperatura corporal está baja. Te sugerimos mantenerte abrigado, evitar cambios bruscos de temperatura y consultar a un profesional si persiste.");
        }

        // Recomendación para el peso y altura (IMC)
        const imc = metrics.peso / Math.pow(metrics.altura / 100, 2);
        if (imc < 18.5) {
            recommendations.push("Tu índice de masa corporal (IMC) indica que estás bajo de peso. Aumenta la ingesta de alimentos ricos en nutrientes y consulta a un nutricionista para diseñar una dieta adecuada.");
        } else if (imc >= 25) {
            recommendations.push("Tu índice de masa corporal (IMC) está por encima del rango saludable. Te recomendamos adoptar una dieta equilibrada y realizar actividad física regularmente para mejorar tu bienestar.");
        } else {
            recommendations.push("Tu índice de masa corporal (IMC) se encuentra en un rango saludable. Mantén un estilo de vida equilibrado con una dieta adecuada y ejercicio regular.");
        }

        // Recomendación para VAM (Velocidad Aeróbica Máxima)
        if (metrics.vam < 30) {
            recommendations.push("Tu velocidad aeróbica máxima (VAM) es baja. Realizar entrenamientos de intervalos y aumentar la actividad cardiovascular diaria te ayudará a mejorar tu capacidad aeróbica.");
        } else if (metrics.vam >= 30 && metrics.vam < 50) {
            recommendations.push("Tu velocidad aeróbica máxima (VAM) es promedio. Puedes seguir mejorándola con entrenamientos cardiovasculares como correr, nadar o andar en bicicleta.");
        } else {
            recommendations.push("Tu velocidad aeróbica máxima (VAM) es excelente. Continúa con tu rutina actual para mantener un buen estado de salud cardiovascular.");
        }

        // Mostrar las recomendaciones generadas
        recommendations.forEach(recommendation => {
            const recommendationElement = document.createElement("div");
            recommendationElement.className = "recommendation-item";
            recommendationElement.textContent = recommendation;
            recommendationsContainer.appendChild(recommendationElement);
        });
    } else {
        // Si no hay métricas disponibles, mostrar un mensaje
        const noMetricsMessage = document.createElement("div");
        noMetricsMessage.className = "recommendation-item";
        noMetricsMessage.textContent = "No se encontraron métricas disponibles. Por favor, revisa tus registros médicos.";
        recommendationsContainer.appendChild(noMetricsMessage);
    }
}

// Función para navegar de vuelta a la página de bienvenida
function navigateBack() {
    window.location.href = "welcome.html";
}
