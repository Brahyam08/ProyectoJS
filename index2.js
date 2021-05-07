let url = "https://api.spacexdata.com/v4/"
let opciones = ""
let parrafo = ""
fetch(url + "launches")
	.then(function (respuesta) {
		return respuesta.json();
	})
	.then(function (datos) {
		for (let i = 0; i < datos.length; i++) {
			opciones += `<option value="${datos[i].id}">${datos[i].name}</option>`;
		}
		document.getElementById("div").innerHTML = `
    <select onchange="seleccion()" name="id" id="sets">
    ${opciones}
    </select>`;
	});

function seleccion() {
	parrafo = ""
	fetch(url + "launches" + "/" + document.getElementById("sets").value)

		.then(function (respuesta) {
			console.log(respuesta)
			return respuesta.json();
		})
		.then(function (datos) {
			parrafo += `
			<div id="carta${0}" class="carta">
			<img src="${datos.links.patch.small}" alt="${datos.name}" />
			<h3>${datos.name}</h3>
			</div>`;
			document.getElementById("div2").innerHTML = parrafo
		})
}

function recoger() {
	let respuesta = parrafo
	localStorage.setItem("guardado", JSON.stringify(respuesta));
}


