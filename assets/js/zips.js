// Get the input field
function enableEnter(){
var input = document.getElementById("zip");
// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("checkZipButton").click();
  }
  }); 
  }

function checkZip(){
var zipCode = document.getElementById('zip').value; 
var zipLength = zipCode.length;

if (zipLength === 5) {
	if (zipCode){
	if (zipCode === "08028" || zipCode === "08071") {
		document.getElementById("zone").innerHTML = "Within service area.";
		document.getElementById("notZone").innerHTML = "";
		document.getElementById("notZip").innerHTML = "";
	} else {
		document.getElementById("notZone").innerHTML = "Outside of service area.";
		document.getElementById("zone").innerHTML = "";
		document.getElementById("notZip").innerHTML = "";
	}
	}
	} else {
		document.getElementById("notZip").innerHTML = "Incorrect format.";
		document.getElementById("zone").innerHTML = "";
		document.getElementById("notZone").innerHTML = "";
	}
}; 
