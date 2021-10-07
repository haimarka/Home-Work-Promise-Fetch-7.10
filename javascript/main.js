// 1

// היא פונקציה שמטפלת בפעולה ועוברת כפרמטר
//a

// play = ()=>{
//     setInterval(() => {
//         console.log("hi");
//     }, 1000);
// }

// play()

//b

// פונקצית קול באק שקוראת לפונקצית קול באק שקוראת לפונקצית קול באק

// דוגמא

// setInterval(() => {
//     setInterval(() => {
//         setInterval(() => {
//             console.log("hi");
//         }, 1000);
//     }, 1000);
// }, 1000);


// דוגמא axios

// const API_KEY = "c2e3b3e4a4cc12c909993a790d17d06d";
// const url = `http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}`;
// axios.get(url)
// .then(function(response){
//     console.log("got success");
//     if(response.status === 200){
//         console.log(response.status);
//     }
// })
// .catch(function(error){
//     console.log("error");
// })

// דוגמא Promise create

// const promise = new Promise(
//     (resolve,reject)=>{
//         const random = Math.floor(Math.random() * 100);
//         console.log({random});
//         if(random >= 50){
//             resolve("got money")
//         }
//         reject("you lost")
//     }
// );

// promise
//     .then(answer =>{
//     console.log(answer);
//     })
//     .catch(negative =>{
//         console.log(negative);
//     })

//2

// פרומיס הוא מנגנון להתמודדות עם פעולה אסיכרונית בצורה של הצלחה או כישלון

//3

// כשכותבים אקסיוס נקודה גט זוהי ההתחלה של הפרומיס ,בדן זוהי הריסולב ובקאטצ' זה הריג'קט אם לא מגיעים לגט זה פנדינג


// fetch

// fetch("https://jsonplaceholder.typicode.com/todos",{methhod: "GET"})
// .then(res =>{
//     console.log("fetch");
//     console.log(res);
//     return res.json()
// })
// .then(data =>{console.log(data);})
// .catch(error =>{console.log("error");});



// axios

// axios.get("https://jsonplaceholder.typicode.com/todos")
// .then(resolve =>{
//     console.log("axios");})
// .catch(error =>{
//     console.log("error");});

//4
//a


// const userInput = document.getElementById("userInput");
// const latInput = document.getElementById("latInput");
// const lngrInput = document.getElementById("lanInput");
// const btn = document.getElementById("btn");
// const API_key = "4be58b6ef34254cc7a37af635d92c515";
//     function clickButton(city,lat,lng){
//         const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`
//         fetch(url, { methhod: "GET" })
//         .then(res => {
//             // console.log("SUCCESS");
//             // console.log(res);
//             return res.json()
//         })

//         .then(data => {
//             console.log(data);
//             if(data.cod == 404){
//                 para.innerHTML = `${data.message}`
//             }
//             para.innerHTML += `temp: ${data.main.temp}<br>`
//             para.innerHTML += `min temp: ${data.main.temp_min}<br>`
//             para.innerHTML += `max temp: ${data.main.temp_max}`
//         })

//         .catch(error => { console.log("error");
//      });

// }

// btn.onclick = () => {
//     clickButton(userInput.value,latInput.value,lngrInput.value)
// }


//4
//a




const API_key = "4be58b6ef34254cc7a37af635d92c515";
function clickButton(lat, lon) {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
    fetch(url, { methhod: "GET" })
        .then(res => { return res.json() })
        .then(data => {
            console.log(data);
            if(data.cod == 404){
                para.innerHTML = `${data.message}`
            }

            para.innerHTML = `temp: ${data.main.temp} min temp: ${data.main.temp_min} max temp: ${data.main.temp_max} location: ${data.name}<br>`
        })
        .catch(error => {
            console.log("error");
        });

}


btn.onclick = () => {
    const inputLat = document.getElementById("latInput");
const inpitLng = document.getElementById("lngInput");
const btn = document.getElementById("btn");
    clickButton(latInput.value, lngInput.value)
}


// var para2 = document.getElementById("para2");

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else { 
//     para2.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// function showPosition(position) {
//   para2.innerHTML = "Latitude: " + position.coords.latitude + 
//   "<br>Longitude: " + position.coords.longitude;
// }
// console.log(showPosition());
