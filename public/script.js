// api url
const api_url = 
      "https://nodejs-apptest-itworx.herokuapp.com/V1/products?page=1&size=5";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
  
    let tab = 
        `<tr>
          <th>Name</th>
          <th>price</th>
          <th>quantity</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data.results.docs) {
        tab += `<tr> 
    <td>${r.name} </td>
    <td>${r.price.$numberDecimal}</td>
    <td>${r.quantity}</td>        
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("data").innerHTML = tab;
}