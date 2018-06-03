// let: declara variables

let d = document.getElementById("dibujito")
let lienzo = d.getContext("2d")
let lineas = 30, l = 0, lados = 4
let xi, yi, xf, yf, borde
let _color = "#04edd1"

for(l = 0; l < lineas; l++) {
ascendente = 10 * l
descendente = 300 - (l * 10)
	dibujarLinea("red",	0, ascendente, ascendente, 300)
	dibujarLinea("blue", ascendente, 300, 300, descendente)
	dibujarLinea("purple", ascendente, 0, 300, ascendente)
	dibujarLinea("yellow", descendente, 0, 0, ascendente)
	dibujarLinea("green", ascendente, 0, descendente, 300)
}

dibujarLinea(_color, 1, 1, 1, 299)
dibujarLinea(_color, 1, 299, 299, 299)
dibujarLinea(_color, 299, 1, 299, 299)
dibujarLinea(_color, 299, 1, 1, 1)

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
	lienzo.beginPath()
	lienzo.strokeStyle = color
	lienzo.moveTo(xinicial,yinicial)
	lienzo.lineTo(xfinal,yfinal)
	lienzo.stroke()
	lienzo.closePath()
}