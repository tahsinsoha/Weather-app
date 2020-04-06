var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=a296fc8aa057f8a545c212ed4375981f')

    .then(Response => Response.json())
    .then( data => {
        var namevalue = data['name'];
        var tempvalue = data['main']['temp'];
        var descvalue = data['weather'][0]['description'];

        name.innerHTML = namevalue;
        temp.innerHTML = tempvalue;
        desc.innerHTML = descvalue;
    })
    // .then (data => console.log(data))
    
    .catch(err => alert("Wrong city name"))

})