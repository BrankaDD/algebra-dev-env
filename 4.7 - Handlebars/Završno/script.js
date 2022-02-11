fetch("https://api.covid19api.com/summary")
	.then(response => response.json())
	.then(data => getData(data));

function getData(data) {
	const source = document.getElementById("covid-list").innerHTML;
	const template = Handlebars.compile(source); //Compiles a template so it can be executed
	const context = {
		country: data.Countries
	};
	const html = template(context);
	document.getElementById("result").innerHTML = html;
}