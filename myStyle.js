document.addEventListener('DOMContentLoaded', function() {
    const algorithmSelect = document.getElementById('Algorithum');
    const timeQuantumFieldset = document.getElementById('four4');

    function toggleTimeQuantumFieldset() {
        if (algorithmSelect.value.includes('ROUND-ROBIN')) {
            timeQuantumFieldset.style.display = 'block'; // Show the fieldset
        } else {
            timeQuantumFieldset.style.display = 'none'; // Hide the fieldset
        }
    }

    // Initially hide the time quantum fieldset
    timeQuantumFieldset.style.display = 'none';

    // Add event listener to the dropdown
    algorithmSelect.addEventListener('change', toggleTimeQuantumFieldset);
});




document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.buut');
    const table = document.getElementById('table');
    const paragraph = document.getElementById('par');

    // Initially hide the table
    table.style.display = 'none';

    button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission

        // Toggle table visibility
        if (table.style.display === 'none') {
            table.style.display = 'block';
            paragraph.style.display = 'none'; // Hide paragraph
        } else {
            table.style.display = 'none';
            paragraph.style.display = 'block'; // Show paragraph
        }
    });
});





document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.buut');
    const table = document.getElementById('table');
    const paragraph = document.getElementById('par');

    // Initially hide the table
    table.style.display = 'none';

    button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission

        // Get input values
        const arrivalInput = document.getElementById('second').value;
        const burstInput = document.getElementById('thrid').value;

        const arrivalTimes = arrivalInput.split(' ').map(Number);
        const burstTimes = burstInput.split(' ').map(Number);
        const n = arrivalTimes.length;

        // Arrays to hold results
        const finishTimes = new Array(n);
        const turnaroundTimes = new Array(n);
        const waitingTimes = new Array(n);

        let totalTurnaroundTime = 0;
        let totalWaitingTime = 0;

        // FCFS Algorithm
        let currentTime = 0;
        for (let i = 0; i < n; i++) {
            if (currentTime < arrivalTimes[i]) {
                currentTime = arrivalTimes[i]; // Wait for the next job to arrive
            }
            finishTimes[i] = currentTime + burstTimes[i];
            turnaroundTimes[i] = finishTimes[i] - arrivalTimes[i];
            waitingTimes[i] = turnaroundTimes[i] - burstTimes[i];

            totalTurnaroundTime += turnaroundTimes[i];
            totalWaitingTime += waitingTimes[i];

            currentTime = finishTimes[i]; // Move current time to finish time of current job
        }

        // Calculate averages
        const averageTurnaroundTime = totalTurnaroundTime / n;
        const averageWaitingTime = totalWaitingTime / n;

        // Update the table
        const tbody = document.getElementById('table body');
        tbody.innerHTML = ''; // Clear previous results

        for (let i = 0; i < n; i++) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${i + 1}</td>
                <td>${arrivalTimes[i]}</td>
                <td>${burstTimes[i]}</td>
                <td>${finishTimes[i]}</td>
                <td>${turnaroundTimes[i]}</td>
                <td>${waitingTimes[i]}</td>
            `;
            tbody.appendChild(row);
        }

        // Update the footer with averages
        const footer = document.getElementById('footer');
        footer.innerHTML = `
            <tr>
                <th colspan="4">Average</th>
                <th>${averageTurnaroundTime.toFixed(2)}</th>
                <th>${averageWaitingTime.toFixed(2)}</th>
            </tr>
        `;

        // Show the table and hide the paragraph
        table.style.display = 'block';
        paragraph.style.display = 'none'; // Hide paragraph
    });
});










// document.addEventListener('DOMContentLoaded', () => {
//     const button = document.querySelector('.buut');
//     const table = document.getElementById('table');
//     const paragraph = document.getElementById('par');
//     const outputDiv = document.getElementById('two');

//     // Set the width of the output div
//     outputDiv.style.width = '500px';

//     // Initially hide the table
//     table.style.display = 'none';

//     button.addEventListener('click', (event) => {
//         event.preventDefault(); // Prevent form submission

//         // Get input values
//         const arrivalInput = document.getElementById('second').value;
//         const burstInput = document.getElementById('thrid').value;

//         const arrivalTimes = arrivalInput.split(' ').map(Number);
//         const burstTimes = burstInput.split(' ').map(Number);
//         const n = arrivalTimes.length;

//         // Arrays to hold results
//         const finishTimes = new Array(n);
//         const turnaroundTimes = new Array(n);
//         const waitingTimes = new Array(n);

//         let totalTurnaroundTime = 0;
//         let totalWaitingTime = 0;

//         // FCFS Algorithm
//         let currentTime = 0;
//         for (let i = 0; i < n; i++) {
//             if (currentTime < arrivalTimes[i]) {
//                 currentTime = arrivalTimes[i]; // Wait for the next job to arrive
//             }
//             finishTimes[i] = currentTime + burstTimes[i];
//             turnaroundTimes[i] = finishTimes[i] - arrivalTimes[i];
//             waitingTimes[i] = turnaroundTimes[i] - burstTimes[i];

//             totalTurnaroundTime += turnaroundTimes[i];
//             totalWaitingTime += waitingTimes[i];

//             currentTime = finishTimes[i]; // Move current time to finish time of current job
//         }

//         // Calculate averages
//         const averageTurnaroundTime = totalTurnaroundTime / n;
//         const averageWaitingTime = totalWaitingTime / n;

//         // Update the table
//         const tbody = document.getElementById('table body');
//         tbody.innerHTML = ''; // Clear previous results

//         for (let i = 0; i < n; i++) {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <td>${i + 1}</td>
//                 <td>${arrivalTimes[i]}</td>
//                 <td>${burstTimes[i]}</td>
//                 <td>${finishTimes[i]}</td>
//                 <td>${turnaroundTimes[i]}</td>
//                 <td>${waitingTimes[i]}</td>
//             `;
//             tbody.appendChild(row);
//         }

//         // Update the footer with averages
//         const footer = document.getElementById('footer');
//         footer.innerHTML = `
//             <tr>
//                 <th colspan="4">Average</th>
//                 <th>${averageTurnaroundTime.toFixed(2)}</th>
//                 <th>${averageWaitingTime.toFixed(2)}</th>
//             </tr>
//         `;

//         // Show the table and hide the paragraph
//         table.style.display = 'block';
//         paragraph.style.display = 'none'; // Hide paragraph
//     });
// });
