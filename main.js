// let a = 2
// if ( a % 2 === 0){
// console.log('juft son');
// } else {
//     console.log("toq son ");
// }

// const a = (arg) => {
//     const options = ["juft", "toq"];
//     return [options[arg % 2]];
// }

// console.log(a(4));

// let even = (item) => console.log(["juft", "toq"][item % 2]);
// even(4);

// not use for loop switch case ternary operators if else ? : array.methods object.methods
// use function or object or array

// Setinterval SetTimeOut
// DateTime 

// let beautifulColors = ["#3498db", "#e74c3c", "#2ecc71", "#f39c12", "#9b59b6", "#1abc9c", "#e67e22", "#27ae60", "#d35400", "#2c3e50"];
// let body = document.querySelector("body")



// setInterval(() => {
//     body.style.background = beautifulColors[i]
//     console.log(i++)
//     if( i > 10){
//         i = 0
//     }
// }, 1000); // 1000 = 1secound

// setTimeout(() => {
//     body.style.background = beautifulColors[i]
//         console.log(i++)
//         if( i > 10){
//             i = 0
//         }
// }, 3000);

// let input = document.querySelector("input")
// let text = document.createElement("p")


// body.style.height = "100vh"
// body.style.display = "flex"
// body.style.justifyContent = "center"
// body.style.alignItems = "center"
// body.style.alignItems = "center"
// body.style.fontSize = "32px"
// body.style.fontFamily = "Cursive"
// body.style.color = "white"

// let i = 0
// body.style.background = beautifulColors[i]

// setInterval(() => {
//     let date = new Date()
//     console.log(date.setHours("16"))
//     console.log(date.setMinutes("00"))
//     console.log(date.setSeconds("00"))

    let seconds = date.getSeconds()
    let minute = date.getMinutes()
    let hours = date.getHours()
    body.append(text)

    let time = `${hours}:${minute}:${seconds}`
    text.innerHTML = time
    body.style.background = beautifulColors[i]
    i++

    // namoz vaqtlari

    if (time === "5:0:0") {
        alert("Bomdod voxti boldi")
        
    }
    if (time === "13:0:0") {
        alert("Пешин вакт болди")
    }
    if (time === "16:0:0") {                
        alert("Asr voxti boldi")
    }
    if (time === "6:0:0") {
        alert("Shom voxti boldi")
    }
    if (time === "7:0:0") {
        alert("Xufton voxti boldi")
    }


}, 1000);

let even = (item) => console.log(["juft", "toq"][item % 2]);
even(4);
const country = "UZ";
const city = "Tashkent";
const apiKey = "9c105e5fc7mshd55dff3af448967p180ea4jsn91d17423470a"; // Replace with your actual RapidAPI key

const url = `https://aladhan.p.rapidapi.com/v1/timingsByCity?country=${country}&city=${city}`;

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'aladhan.p.rapidapi.com',
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });



const country = "Uz";
const city = "Tashkent";
const apiKey = "9c105e5fc7mshd55dff3af448967p180ea4jsn91d17423470a"; // Replace with your actual RapidAPI key

const url = `https://aladhan.p.rapidapi.com/v1/timingsByCity?country=${country}&city=${city}`;

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'aladhan.p.rapidapi.com',
    },
};

curl --request GET \
  --url 'https://api.collectapi.com/pray/all?data.city=istanbul' \
  --header 'authorization: apikey your_token' \
  --header 'content-type: application/json'































// const url = `https://api.collectapi.com/pray/all?data.city=istanbul`
// const options = {
//     method: 'GET',
//     authorization: 0,
//     content-type: "content-type: application/json"
// }

// fetch(url, options)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });
