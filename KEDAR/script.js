// setTimeout(()=>{
//  location.reload();
// },2000);
var fruitArray = [];
var count = 0;
var a = document.getElementById("fruit-name");
if (count == 0) {
  a.innerHTML = "ZERO INDEX";
}
function ChangeBTN() {
  count++;
  if (count == 1) {
    a.innerHTML = "1st index";
  }
}
