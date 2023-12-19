var nameiput = document.getElementById("nameinput");
var urlinput = document.getElementById("urlinput");
var productlist = [];
if (localStorage.getItem("date") == null) {
  productlist = [];
} else {
  productlist = JSON.parse(localStorage.getItem("date"));
  showdate();
}

function addproduct() {
  var product = {
    name: nameiput.value,
    url: urlinput,
  };
  productlist.push(product);
  showdate();
  localStorage.setItem("date", JSON.stringify(productlist));
}

function showdate() {
  temp = "";

  for (var x = 0; x < productlist.length; x++) {
    temp +=
      `
    <tr>
        <td  class="bg-dark text-white">` +
      x +
      `</td>
        <td>` +
      productlist[x].name +
      `</td>
      <td class="bg-dark">
      <button class="btn btn-warning text-uppercase ms-auto"
    onclick="location.href='https://fontawesome.com/'"
      >
        visit
      </button>
    </td>

        <td><button class="btn btn-danger text-uppercase " onclick="deletedate(` +
      x +
      `)" )">delete </button></td>

        </tr>
        `;
  }
  document.getElementById("demo").innerHTML = temp;
}
function deletedate(i) {
  productlist.splice(i, 1);
  showdate();
  localStorage.setItem("date", JSON.stringify(productlist));
}
