/* // easy way
document.getElementById('btn').addEventListener('click',()=>{
    let stringOfPrice= document.getElementById('price').innerText;
    let price=parseFloat(stringOfPrice);
    let discount=price-(30/100)*price;
    document.getElementById('payELement').innerText=discount;
    document.getElementById('payTag').style.display='block';

 }) */

// complex way
document.getElementById("btn").addEventListener("click", () => {
  let inputValue = document.getElementById("inputField").value;
  let stringOfPrice = document.getElementById("price").innerText;
  let price = parseFloat(stringOfPrice);

  if (inputValue === "DISC30") {
    document.getElementById("payELement").innerText = price - (30 / 100) * 1000;
    document.getElementById("payTag").style.display = "block";
    document.getElementById("inputField").value = "";
  } else {
    document.getElementById("payELement").innerText = price;
    document.getElementById("payTag").style.display = "block";
    document.getElementById("inputField").value = "";

    setTimeout(() => {
      document.getElementById("payTag").style.display = "none";
    }, 2000);
  }
});
