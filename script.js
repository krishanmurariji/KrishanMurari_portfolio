//mail script start
(function () {
	// https://dashboard.emailjs.com/admin/account
	emailjs.init({
		publicKey: "RkQPYXgdLvKGUiJEj",
	});
})();
//mail script ends

const container = document.querySelector('.container12')
container.addEventListener('animationend', () => {
  container.classList.remove('active');
});

document.addEventListener("DOMContentLoaded",function(){
	this.addEventListener("click",e => {
		let tar = e.target;
		if (tar.hasAttribute("data-dl")) {
			let dlClass = "dl-working";
			if (!tar.classList.contains(dlClass)) {
				let lastSpan = tar.querySelector("span:last-child"),
					lastSpanText = lastSpan.textContent,
					timeout = getMSFromProperty("--dur",":root");

				tar.classList.add(dlClass);
				lastSpan.textContent = "Downloading…";
				tar.disabled = true;

				setTimeout(() => {
					lastSpan.textContent = "Completed!";
				},timeout * 0.9);

				setTimeout(() => {
					tar.classList.remove(dlClass);
					lastSpan.textContent = lastSpanText;
					tar.disabled = false;
				},timeout + 1e3);
			}
		}
	});
});
function getMSFromProperty(property,selector) {
	let cs = window.getComputedStyle(document.querySelector(selector)),
		transDur = cs.getPropertyValue(property),
		msLabelPos = transDur.indexOf("ms"),
		sLabelPos = transDur.indexOf("s");

	if (msLabelPos > -1)
		return transDur.substr(0,msLabelPos);
	else if (sLabelPos > -1)
		return transDur.substr(0,sLabelPos) * 1e3;
}




// // darkmode button 
// document.querySelector(".containerdark").addEventListener("click", () => {
//     document.querySelector(".sun-logo").classList.toggle("animate-sun");
//     document.querySelector(".moon-logo").classList.toggle("animate-moon");
//     document.querySelector("body,nav").classList.toggle("dark");
// })

// Intro animation text effect 
var aText = new Array(
	"Hi Viewer, My self Krishan",
	"As a web developer, I thrive on turning lines of code into beautifully functional websites, infusing each project with a touch of innovation.",
	"creating something is the Best felling ever it's feels like u are a Crafter & creater of Digital world", 
	);
	var iSpeed = 100; // time delay of print out
	var iIndex = 0; // start printing array at this posision
	var iArrLength = aText[0].length; // the length of the text array
	var iScrollAt = 20; // start scrolling up at this many lines
	 
	var iTextPos = 0; // initialise text position
	var sContents = ''; // initialise contents variable
	var iRow; // initialise current row
	 
	function typewriter()
	{
	 sContents =  ' ';
	 iRow = Math.max(0, iIndex-iScrollAt);
	 var destination = document.getElementById("typedtext");
	 
	 while ( iRow < iIndex ) {
	  sContents += aText[iRow++] + '<br />';
	 }
	 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "🖋️";
	 if ( iTextPos++ == iArrLength ) {
	  iTextPos = 0;
	  iIndex++;
	  if ( iIndex != aText.length ) {
	   iArrLength = aText[iIndex].length;
	   setTimeout("typewriter()", 500);
	}
	 } else {
	  setTimeout("typewriter()", iSpeed);
	 }
	}
	typewriter();

	// Intro animation text effect ends
// form animation 




// form animation ends 
	
	