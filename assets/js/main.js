document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('notaForm');
    const resultadoDiv = document.getElementById('resultado');
    const notaMinimaP = document.getElementById('notaMinima');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener valores del formulario
        const nota1 = parseFloat(document.getElementById('nota1').value);
        const peso1 = parseFloat(document.getElementById('peso1').value) / 100.0;
        const nota2 = parseFloat(document.getElementById('nota2').value);
        const peso2 = parseFloat(document.getElementById('peso2').value) / 100.0;
        const nota3 = parseFloat(document.getElementById('nota3').value);
        const peso3 = parseFloat(document.getElementById('peso3').value) / 100.0;
        const nota4 = parseFloat(document.getElementById('nota4').value);
        const peso4 = parseFloat(document.getElementById('peso4').value) / 100.0;
        const peso5 = parseFloat(document.getElementById('peso5').value) / 100.0;

        // Calcular la nota mínima necesaria
        const sumaProductos = nota1 * peso1 + nota2 * peso2 + nota3 * peso3 + nota4 * peso4;
        const sumaPesos = peso1 + peso2 + peso3 + peso4 + peso5;
        const notaMinima = (4 - sumaProductos) / peso5;

        // Mostrar el resultado
        notaMinimaP.textContent = notaMinima.toFixed(2);
        resultadoDiv.style.display = 'block';
    });
});
