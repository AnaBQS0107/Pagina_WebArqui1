document.addEventListener("DOMContentLoaded", function() {
    const orderForm = document.getElementById("orderForm");
  
    orderForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const customerName = document.getElementById("customerName").value;
      const orderDetails = document.getElementById("orderDetails").value;
      const deliveryAddress = document.getElementById("deliveryAddress").value;
  
      // Aquí puedes agregar más validaciones según tus necesidades
      if (customerName.trim() === '' || orderDetails.trim() === '' || deliveryAddress.trim() === '') {
        alert("Por favor completa todos los campos.");
        return;
      }
  
      // Simulación de envío de pedido (aquí deberías implementar la lógica real)
      setTimeout(function() {
        alert("Pedido enviado correctamente.");
        orderForm.reset();
      }, 1000);
    });
  });
  