let apiKey = "8718b770cb75d87a43835fc4a194c882";


console.log("this is main.js")


let SearchBtn = document.getElementById('search');
let errorh = document.getElementById('errorh');



SearchBtn.addEventListener('click', function () {
    errorh.innerHTML = "";
    let nameh = document.getElementById('nameh');
    // console.log(nameh)
    let temph = document.getElementById('temperatureh');
    let weatherh = document.getElementById('weatherh');
    let windh = document.getElementById('windh')
    let inputVal = document.getElementById('input')
    // console.log(inputVal.value)
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputVal.value}&appid=8718b770cb75d87a43835fc4a194c882`).then(response => response.json()).then(data => {
        // console.log(data)
        let nameValue = data['name'];
        let tempValue = Math.floor(data['main']['temp']-273.15);
        let descValue = data['weather'][0]['main'];
        let windValue = data['wind']['speed'];
        // console.log(windValue)
        // console.log(nameValue,tempValue,descValue)
        nameh.innerHTML = nameValue;
        temph.innerHTML = `The Temperature at ${nameValue} is <span><b>"${tempValue} &#8451"</b></span>`;
        weatherh.innerHTML = `the weather is <span><b>"${descValue}"</b></span>`;
        windh.innerHTML = `The Wind Speed is <span><b>"${windValue}" m/s</b></span>`

    })
        .catch(error => {
            // inputVal = document.getElementById('input')
            if (error) {
                nameh.innerHTML = "";
                temph.innerHTML = "";
                weatherh.innerHTML = "";
                windh.innerHTML = "";

                // console.log(inputVal)
                // console.log(errorh)
                errorh.innerHTML = `Error: 'There is no city named <b>"${inputVal.value}" Try Again!</b>'`
                setTimeout(() => {
                    errorh.innerHTML = "";
                }, 8000);
            }
            
        })




})



