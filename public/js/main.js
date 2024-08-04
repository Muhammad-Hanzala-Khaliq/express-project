const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName')
const city_name = document.getElementById('city_name')
const temp_real_val = document.getElementById('temp_real_val')
const temp_status = document.getElementById('temp_status')
const datahide = document.querySelector('.middle_layer')



const getInfo = async(event)=>{
    event.preventDefault()
    let cityValue = cityName.value
 if (cityValue === "") {
    city_name.innerText= `Plz Write Name Before Search`
    datahide.classList.add('data_hide')
 }else{
   try{
    let url = `https:api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=42c97f71f446a233f7a6d78a74efaab4`
    const response = await fetch(url)
    const data = await response.json()
    const arrData = [data];
   
  city_name.innerText= `${arrData[0].name},${arrData[0].sys.country}`
  temp_real_val.innerText= arrData[0].main.temp
    const tempMood = arrData[0].weather[0].main;
    if(tempMood === "sunny") {
        temp_status.innerHTML = "<i class='fa-regular fa-sun' style='color: yellow;'></i>";
    } else if(tempMood === 'clouds') {
        temp_status.innerHTML = "<i class='fa-solid fa-cloud' style='color: lightgray;'></i>";
    } else if(tempMood === 'rainy') {
        temp_status.innerHTML = "<i class='fa-solid fa-cloud-showers-heavy' style='color: lightblue;'></i>";
    } else {
        temp_status.innerHTML = "<i class='fa-solid fa-cloud-showers-heavy' style='color: lightblue;'></i>";
    }
    
    
    datahide.classList.remove('data_hide')

   }catch{
    city_name.innerHTML= `Plz Enter City Name Properly`
    datahide.classList.add('data_hide')
   }
 }
}
submitBtn.addEventListener('click',getInfo)