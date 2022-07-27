


const calculatePricesBtn = document.querySelector("#calculate");
calculatePricesBtn.addEventListener('click', calculateAll);

const removeButtons = document.querySelectorAll(".btn-remove");
  for (var i=0; i<removeButtons.length; i++) { 
    removeButtons[i].onclick= function(){ 
      this.parentElement.parentElement.remove();
    }
  }




function calculateAll() {

  let productRows = document.querySelectorAll(".product");

  let theTotal = 0;

  for(row of productRows){
    const thePrice = row.querySelector(".price span").innerText;
    const theQuantity = row.querySelector(".quantity input").value;
    const resultBox = row.querySelector(".subtotal span");
    const result = Number(thePrice) * Number(theQuantity);
    theTotal += result;
    resultBox.innerHTML = result;
  }
  
  document.getElementById("total-value").innerText = "$"+theTotal;
  // for(let i = 0; i < productRows.length; i++){
  //   const thePrice = document.querySelectorAll(".price span")[i].innerText;
  //   const quantity = document.querySelectorAll(".quantity input")[i].value;
  //   const resultBox = document.querySelectorAll(".subtotal span")[i];
  //   const result = Number(thePrice) * Number(quantity);
  //   resultBox.innerHTML = result;
  // }
}


document.getElementById("create").onclick = createProduct;


function createProduct() {

  const name = document.querySelectorAll(".create-product input")[0].value;
  let price = document.querySelectorAll(".create-product input")[1].value;
  price = Number(price).toFixed(2);

  const htmlString = `
  <td class="name">
    <span>${name}</span>
  </td>
  <td class="price">$<span>${price}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`

const newRow = document.createElement("tr");
newRow.classList.add("product");
newRow.innerHTML = htmlString;
document.querySelector("tbody").appendChild(newRow);

newRow.querySelector(".btn-remove").onclick= function(){ 
  this.parentElement.parentElement.remove();
}
}


 

