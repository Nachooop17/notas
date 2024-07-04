document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('notaForm');
    const resultadoDiv = document.getElementById('resultado');
    const notaMinimaP = document.getElementById('notaMinima');
    const notaContainer = document.getElementById('notaContainer');
    const agregarNotaBtn = document.getElementById('agregarNota');
    
    let notaCount = 2; // Inicia con dos notas

    agregarNotaBtn.addEventListener('click', function() {
        notaCount++;

        // Crear elementos HTML para la nueva nota
        const divFormGroup = document.createElement('div');
        divFormGroup.classList.add('form-group');

        const labelNota = document.createElement('label');
        labelNota.setAttribute('for', `nota${notaCount}`);
        labelNota.textContent = `Nota ${notaCount}:`;

        const inputNota = document.createElement('input');
        inputNota.setAttribute('type', 'number');
        inputNota.setAttribute('id', `nota${notaCount}`);
        inputNota.setAttribute('name', `nota${notaCount}`);
        inputNota.setAttribute('min', '1');
        inputNota.setAttribute('max', '7');
        inputNota.setAttribute('step', '0.1');
        inputNota.setAttribute('required', '');

        const inputPeso = document.createElement('input');
        inputPeso.setAttribute('type', 'number');
        inputPeso.setAttribute('id', `peso${notaCount}`);
        inputPeso.setAttribute('name', `peso${notaCount}`);
        inputPeso.setAttribute('min', '1');
        inputPeso.setAttribute('max', '100');
        inputPeso.setAttribute('step', '1');
        inputPeso.setAttribute('required', '');
        inputPeso.setAttribute('placeholder', '%');

        // Agregar elementos al formulario
        divFormGroup.appendChild(labelNota);
        divFormGroup.appendChild(inputNota);
        divFormGroup.appendChild(inputPeso);
        notaContainer.appendChild(divFormGroup);
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener valores del formulario
        const notas = [];
        const pesos = [];
        
        // Obtener las notas y pesos existentes
        for (let i = 1; i <= notaCount; i++) {
            const nota = parseFloat(document.getElementById(`nota${i}`).value);
            const peso = parseFloat(document.getElementById(`peso${i}`).value) / 100.0;
            notas.push(nota);
            pesos.push(peso);
        }

        // Calcular la nota mínima necesaria
        let sumaProductos = 0;
        let sumaPesos = 0;
        
        for (let i = 0; i < notas.length; i++) {
            sumaProductos += notas[i] * pesos[i];
            sumaPesos += pesos[i];
        }
        
        // Verificar si la suma de pesos es igual a 1
        if (sumaPesos >= 1) {
            notaMinimaP.textContent = "Ya alcanzaste el 100% en pesos. No se puede calcular la nota mínima.";
            resultadoDiv.style.display = 'block';
        } else {
            const notaMinima = (4 - sumaProductos) / (1 - sumaPesos);

            // Mostrar el resultado
            notaMinimaP.textContent = notaMinima.toFixed(2);
            resultadoDiv.style.display = 'block';
        }
    });
});
