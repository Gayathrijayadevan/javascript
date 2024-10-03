try {
    alert("welcome")
} catch (error) {
    console.log('error');
}


fetch('https://dummyjson.com/products')
          .then(response => response.json())
          .then(data => {
            data.products.forEach(product => {
              const col = document.createElement("div"); // Create column
              col.classList.add('col-lg-4'); // Add responsive class

              const card = document.createElement("div"); // Create card
              card.classList.add('card'); // Apply card styling

              const cardImage = document.createElement("img"); // Create image
              cardImage.classList.add('card-img-top'); // Set image class
              cardImage.src = product.images; // Set image source
              cardImage.alt = product.title || "Product Image"; // Set alt text

              const cardBody = document.createElement("div"); // Create card body
              cardBody.classList.add('card-body'); // Apply body styling

              const cardTitle = document.createElement("h3"); // Create title
              cardTitle.classList.add('card-title'); // Apply title styling
              cardTitle.textContent = product.title;

              const cardPrice = document.createElement("h6"); // Create price
              cardPrice.classList.add('card-text'); // Apply price styling
              cardPrice.textContent = product.price;

              cardBody.appendChild(cardTitle); // Append title to body
              cardBody.appendChild(cardPrice); // Append price to body

              card.appendChild(cardImage); // Append image to card
              card.appendChild(cardBody); // Append body to card

              col.appendChild(card); // Append card to column
              document.querySelector(".row").appendChild(col); // Append column to row
            });
          });