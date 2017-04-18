var body = document.getElementById("body"),
	contenedor = document.getElementsByClassName("contenedor")[0],
	div1= document.createElement("div"),
	div2 = document.createElement("div"),
	div3 = document.createElement("div"),
	div4 = document.createElement("div"),
	div5 = document.createElement("div"),
	div6 = document.createElement("div");

	div1.classList.add("caja","up");
	div2.classList.add("caja","down");
	div3.classList.add("middle1");
	div4.classList.add("middle2");
	div5.setAttribute("id","amarillo");
	div6.setAttribute("id","negro");

	contenedor.appendChild(div1);
	contenedor.appendChild(div2);
	div1.appendChild(div3);
	div2.appendChild(div4);
	div3.appendChild(div5);
	div4.appendChild(div6);

	var caja = document.getElementsByClassName("caja")[0],
	cajaUp = document.getElementsByClassName("up")[0],
	cajaDown = document.getElementsByClassName("down")[0],
	cajaMiddle1 = document.getElementsByClassName("middle1")[0],
	cajaMiddle2 = document.getElementsByClassName("middle2")[0],
	amarillo = document.getElementById("amarillo"),
	negro = document.getElementById("negro");

// CSS
body.style.margin = 0;
body.style.padding = 0;

contenedor.style.background = "gray";
contenedor.style.width ="600px";
contenedor.style.height ="600px";

cajaUp.style.background = "red";
cajaUp.style.width ="200px";
cajaUp.style.height ="200px";

cajaDown.style.background ="blue";
cajaDown.style.width ="200px";
cajaDown.style.height ="200px";

cajaMiddle1.style.background = "#C117CC";
cajaMiddle1.style.width ="100px";
cajaMiddle1.style.height ="100px";

cajaMiddle2.style.background = "#53CC17";
cajaMiddle2.style.width ="100px";
cajaMiddle2.style.height ="100px";

amarillo.style.background = "#F2F46D";
amarillo.style.width = "50px";
amarillo.style.height = "50px";

negro.style.background = "#000";
negro.style.width = "50px";
negro.style.height = "50px";


console.log(contenedor);
