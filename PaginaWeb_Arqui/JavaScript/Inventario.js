document.addEventListener("DOMContentLoaded", function() {
    const addProductForm = document.getElementById("add-product-form");
    const inventoryTableBody = document.getElementById("inventory-table-body");

    addProductForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const productName = addProductForm.elements["product-name"].value;
        const productQuantity = addProductForm.elements["product-quantity"].value;

        if (productName && productQuantity) {
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${productName}</td>
                <td>${productQuantity}</td>
                <td><button class="delete-btn">Eliminar</button></td>
            `;
            inventoryTableBody.appendChild(newRow);

            addProductForm.reset();
        }
    });

    inventoryTableBody.addEventListener("click", function(event) {
        if (event.target.classList.contains("delete-btn")) {
            const row = event.target.closest("tr");
            row.remove();
        }
    });
});
