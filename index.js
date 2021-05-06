
let parrafo = ""
let imprimir = ""
fetch("https://api.spacexdata.com/v4/rockets").then(function respuesta(respuesta) {
	return respuesta.json()
}).then(function datos(datos) {

	for (let i = 0; i < datos.length; i++) {
		parrafo += `<option value="${datos[i].name}">${datos[i].name}</option>`

	}
	document.getElementById("naves").innerHTML = parrafo
})

function buscanaves() {
	let select = document.getElementById("naves").value

	fetch("https://api.spacexdata.com/v4/rockets").then(function respuesta(respuesta) {
		return respuesta.json()
	}).then(function datos(datos) {
		imprimir = ""
		for (let i = 0; i < datos.length; i++) {
			if (datos[i].name === select) {
				imprimir += `
				<p>El nombre de la nace es: ${datos[i].name}</p>
				<p>El tipo de nave es: ${datos[i].type}</p>
				<p>El coste de lanzamiento es de  ${datos[i].cost_per_launch}$</p>
				<p>Su primer vuelo se realizo en ${datos[i].first_flight}</p>
				<p>El tamaño de la nave es: ${datos[i].height.meters} metros de alto</p>
				<p>La masa de la nave es: ${datos[i].mass.kg} KG</p>
				<p>El diametro de la nave es: ${datos[i].diameter.meters} metros</p>`
			}
			document.getElementById("imprimir").innerHTML = imprimir

		}
	})
}