document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll(".product");
    const cartItems = document.getElementById("cartItems");
    let total = 0;
  
    products.forEach(product => {
      product.addEventListener("click", function() {
        const name = product.dataset.name;
        const price = parseFloat(product.dataset.price);
        
        // Agregar producto al carrito
        const li = document.createElement("li");
        li.textContent = `${name} - $${price}`;
        cartItems.appendChild(li);
        
        // Actualizar total
        total += price;
        document.getElementById("total").textContent = `Total: $${total.toFixed(2)}`;
      });
    });
  
    // Pagar
    document.getElementById("checkout").addEventListener("click", function() {
      alert(`Total a pagar: $${total.toFixed(2)}`);
      // Aquí puedes agregar la lógica para realizar el pago
      // Por ejemplo, podrías enviar la información del carrito al servidor para procesar el pago
      // Luego, limpiar el carrito y reiniciar el total
      cartItems.innerHTML = "";
      total = 0;
      document.getElementById("total").textContent = `Total: $${total.toFixed(2)}`;
    });
  });
  