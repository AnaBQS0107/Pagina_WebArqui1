document.addEventListener("DOMContentLoaded", function() {
    const invoiceForm = document.getElementById("invoiceForm");
    const invoiceList = document.getElementById("invoices");
  
    invoiceForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const invoiceNumber = document.getElementById("invoiceNumber").value;
      const invoiceDate = document.getElementById("invoiceDate").value;
      const amount = document.getElementById("amount").value;
  
      // Crear elemento de factura
      const invoiceItem = document.createElement("li");
      invoiceItem.classList.add("invoice-item");
      invoiceItem.innerHTML = `
        <strong>Número de Factura:</strong> ${invoiceNumber} - 
        <strong>Fecha:</strong> ${invoiceDate} - 
        <strong>Monto:</strong> $${amount}
      `;
  
      // Agregar factura a la lista
      invoiceList.appendChild(invoiceItem);
  
      // Limpiar formulario
      invoiceForm.reset();
    });
  });
  