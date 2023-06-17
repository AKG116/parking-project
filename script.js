// Get the form and table elements.
const form = document.querySelector('.form');
const table = document.querySelector('#table');

// When the form is submitted, prevent the default action and call the addRow() function.
form.addEventListener('submit', (e) => {
    e.preventDefault();
    addRow();
    form.reset();
});

// The addRow() function creates a new row in the table and adds the name, car model, plate number, and arrival time from the form.
function addRow() {
    // Get the values from the form.
    const name = document.getElementById('Name').value;
    const carModel = document.getElementById('car-Model').value;
    const plate = document.getElementById('Plate').value;
    const Arrival = document.getElementById('Arrival').value;

    // Create a new row element.
    const row = document.createElement('tr');

    // Create new cells for the row element and add the values from the form.
    const nameCell = document.createElement('td');
    nameCell.textContent = name;

    const carModelCell = document.createElement('td');
    carModelCell.textContent = carModel;

    const plateCell = document.createElement('td');
    plateCell.textContent = plate;

    const ArrivalCell = document.createElement('td');
    ArrivalCell.textContent = Arrival;



    // Add the cells to the row element.
    row.appendChild(nameCell);
    row.appendChild(carModelCell);
    row.appendChild(plateCell);
    row.appendChild(ArrivalCell);

    // Append the row element to the table element.
    table.appendChild(row);
}