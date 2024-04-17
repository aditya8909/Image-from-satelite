var req = new XMLHttpRequest();



var button = document.getElementById("button");
var img = document.getElementById("img");

function imgg() {
  var lat = document.getElementById("lat").value;
  var long = document.getElementById("long").value;
  var image = "https://api.nasa.gov/planetary/earth/imagery?lon=" + parseFloat(long) + "&lat=" + parseFloat(lat) + "&date=2018-01-01&dim=0.15&api_key=AxMgLvWu7NazchSLgzEtR90p22nDI7GlhilUoLcQ"



  img.setAttribute("src", image)
  console.log(image)

}