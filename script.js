//Event listeners for submit and reset buttons
document.getElementById("button").addEventListener("click", shoppingCalculator);

document.getElementById("reset").addEventListener("click", reset);

//declare all variables in this function
function variables() {
  let item = document.getElementById("item").value;
  let quantity = document.getElementById("quantity").value;
  let price = document.getElementById("price").value;
  let subtotal = Number(price) * Number(quantity);
  let result = document.querySelector(".result");
  let total = document.getElementById("result").innerHTML;
  let list = document.getElementById('latestEntry');
  let entry = document.createElement('li');
  return { entry, item, quantity, price, result, subtotal, total, list };
}

//Submit button activates this function
function shoppingCalculator() {
  const { entry, item, quantity, price, result, subtotal, total, list} = variables();
  entry.appendChild(document.createTextNode(item));
  let regex = item.match(/\w/g);
    if (!item || !quantity || !price || isNaN(quantity) || isNaN(price) || typeof item !== 'string' || regex.length !== item.length) {
    alert('Please complete all fields with valid infomation');
  } else {
    if (total === '') {
      list.appendChild(entry);
      result.innerHTML = subtotal;
      //result.innerHTML = price;
      document.getElementById('item').value = '';
  document.getElementById('price').value = '';
  document.getElementById('quantity').value = '';
    } else {
      //check for items already added
      let listArray = [];
      let listItem = document.getElementById("latestEntry").getElementsByTagName("li");
        for (let i = 0; i < listItem.length; i++) {
        listArray.push(listItem[i].textContent);
        }
      if (listArray.indexOf(item) !== -1) {
        alert("Item has been added already");
      } else if ((item > 64 && item < 91) || (item > 96 && item < 123)) {
        list.appendChild(entry);
        result.innerHTML = Number(subtotal) + Number(total)
      //result.innerHTML = Number(price) + Number(total);
        document.getElementById('item').value = '';
        document.getElementById('price').value = '';
        document.getElementById('quantity').value = '';
      }
    }
      }
}

//Reset button activates this function to clear the calculator
function reset() {
  document.getElementById('latestEntry').innerHTML = '';
  document.getElementById('result').innerHTML = '';
  document.getElementById('item').value = '';
  document.getElementById('price').value = '';
  document.getElementById('quantity').value = '';
}

