// Sample data for employees
const employees = [
    {
        name: "John Doe",
        position: "Software Engineer",
        email: "john.doe@example.com",
        phone: "+1 234 567 890",
        isFavorite: false
    },
    {
        name: "Jane Smith",
        position: "Project Manager",
        email: "jane.smith@example.com",
        phone: "+1 234 567 891",
        isFavorite: false
    },
    {
        name: "Alice Johnson",
        position: "UX/UI Designer",
        email: "alice.johnson@example.com",
        phone: "+1 234 567 892",
        isFavorite: false
    },
    // Add more employees here
];

// Function to create employee cards
function displayEmployees(employeeList) {
    const employeeContainer = document.getElementById("employee-list");
    employeeContainer.innerHTML = ""; // Clear existing content

    employeeList.forEach(employee => {
        const employeeCard = document.createElement("div");
        employeeCard.classList.add("employee-card");

        const favoriteBtnText = employee.isFavorite ? "Unfavorite" : "Favorite";

        employeeCard.innerHTML = `
            <h3>${employee.name}</h3>
            <p>${employee.position}</p>
            <p>${employee.email}</p>
            <p>${employee.phone}</p>
            <button class="favorite-btn" onclick="toggleFavorite('${employee.name}')">${favoriteBtnText}</button>
        `;

        employeeContainer.appendChild(employeeCard);
    });
}

// Toggle favorite status for an employee
function toggleFavorite(employeeName) {
    const employee = employees.find(emp => emp.name === employeeName);
    if (employee) {
        employee.isFavorite = !employee.isFavorite;
        displayEmployees(employees); // Re-render employee cards
    }
}

// Search employees based on input
function searchEmployees() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const filteredEmployees = employees.filter(employee =>
        employee.name.toLowerCase().includes(searchInput) ||
        employee.position.toLowerCase().includes(searchInput)
    );
    displayEmployees(filteredEmployees);
}

// Initial display of all employees
displayEmployees(employees);
