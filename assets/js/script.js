function appBudget() {
    const budget = document.getElementById('budget');
    const depenses = document.getElementById('depenses');
    const budget_total = document.getElementById('budget_total');
    const depenses_total = document.getElementById('depenses_total');
    const total = document.getElementById('total');
    const calculer = document.getElementById('calculer');

    budget.addEventListener('input', updateTotalRemaining);
    depenses.addEventListener('input', updateDepenseDisplay);
    calculer.addEventListener('click', calculateTotal);

    function updateTotalRemaining() {
        const budgetValue = parseFloat(budget.value) || 0;
        const totalDepense = depensesArray.reduce((acc, curr) => acc + curr, 0);
        const remaining = budgetValue - totalDepense;

        total.textContent = `Total : ${remaining.toFixed(2)} €`;
    }


    function updateDepenseDisplay(event) {
        const depensesValue = event.target.value;
        depenses_total.textContent = `Depenses : ${depensesValue} €`;
        calculateTotal();
    }

    function calculateTotal() {
        const budgetValue = parseFloat(budget.value) || 0;
        const depensesValue = parseFloat(depenses.value) || 0;
        const totalResult = budgetValue - depensesValue;
        total.textContent = `Total Restants: ${totalResult} €`;
    }
    const addDepenseButton = document.getElementById("addDepense");


    addDepenseButton.addEventListener('click', addDepenseToHistory);

    function addDepenseToHistory() {
        const depenseValue = parseFloat(depenses.value) || 0;

        if (depenseValue <= 0) {
            alert("Veuillez entrer une dépense valide.");
            return;
        }

        const depenseElement = document.createElement("div");
        depenseElement.className = "depense-item"; // Pour le style
        depenseElement.textContent = `- ${depenseValue} €`;

        const operationDiv = document.querySelector(".operation");
        operationDiv.appendChild(depenseElement);

        // Réinitialisez la valeur de la dépense pour de futurs ajouts.
        depenses.value = "";
    }

    let depensesArray = [];

    function addDepenseToHistory() {
        const depenseValue = parseFloat(depenses.value) || 0;

        if (depenseValue <= 0) {
            alert("Veuillez entrer une dépense valide.");
            return;
        }

        depensesArray.push(depenseValue);
        updateDepensesTotal();

        const depenseElement = document.createElement("div");
        depenseElement.className = "depense-item";
        depenseElement.textContent = `- ${depenseValue} €`;

        const operationDiv = document.querySelector(".operation");
        operationDiv.appendChild(depenseElement);

        depenses.value = "";
    }

    function updateDepensesTotal() {
        const totalDepense = depensesArray.reduce((acc, curr) => acc + curr, 0);
        depenses_total.textContent = `Depense: ${totalDepense.toFixed(2)} €`;
        updateTotalRemaining();
    }



}

window.addEventListener("DOMContentLoaded", appBudget);
