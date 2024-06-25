
let btn = document.getElementById('getdata');

btn.addEventListener('click',async()=>{
	let lat = document.getElementById("input1").value;
	let lon = document.getElementById("input2").value;
	const url = `https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=${lon}&lat=${lat}&units=imperial&lang=en`;
	const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'de10bf4c5cmshddb41febd3926a1p17197ajsn74b10d66fe45',
		'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
	};

	const response = await fetch(url, options);
	const data = await response.json();
	let result=data.data[0];
	console.log(result);
	let output=document.getElementById("output");
	output.innerHTML="";

	let cityname=document.createElement('h1');
	cityname.textContent=`Weather in ${result.city_name}`;
	output.appendChild(cityname);

	let temp=document.createElement('h3');
	temp.textContent=`Temperature: ${result.temp} °C`;
	output.appendChild(temp);

	let desc=document.createElement('h3');
	desc.textContent=`Description: ${result.weather.description} `;
	output.appendChild(desc);

	let humidity=document.createElement('h3');
	humidity.textContent=`Humidity: ${result.rh} %`;
	output.appendChild(humidity);

	let wind_spd=document.createElement('h3');
	wind_spd.textContent=`Wind Speed: ${result.wind_spd} m/s`;
	output.appendChild(wind_spd);
});


