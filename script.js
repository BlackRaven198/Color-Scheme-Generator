// Global Variables
//coloHex api global variable
let colorSelected = document.getElementById('color-selected')
let color = colorSelected.value
let colorHex = color.slice(1)
// color scheme global variable 
let select = document.getElementById('color-scheme-selector')
let colorScheme = select.options[select.selectedIndex].value





//Grab Color selected by user

colorSelected.addEventListener("input", function() {
    console.log(colorSelected.value)
    //send the colorHex to the api
    fetch(`https://www.thecolorapi.com/id?hex=${colorHex}`)
    .then((response) => response.json())
    .then((data) => console.log(data))
})
// grab the color scheme options selected 
//listen for the select to change
select.addEventListener('change', function() {
    console.log(this.value)
    let schemeValue = this.value
    console.log(schemeValue)
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorHex}&&mode=${schemeValue}`)
        .then((response) => response.json())
        .then((data) => console.log(data))
})



//run api call for color and scheme when btn is clicked 
let submitBtn = document.getElementById('submit-btn')
submitBtn.addEventListener('click', function () {
    
    apiFetch()
})

// grab the colors returned by the api and print to page 
function printColors(data) {
    let footer = document.getElementById('footer')
    console.log(data.colors[0].hex.value)
    let colors = data.colors
    colors.forEach(function(data) {
        console.log(data)
        footer.innerHTML +=`<p> ${data.hex.value} <p>`
    })
 
    // return footer.innerHTML = `
    // <h1> Hello </h1>  <br> 
    // <p> ${data}
    // `
    // for(let i = 0; i< colors.length; i++){
    //     return footer.innerHTML += `
    //     <p> ${colors.value} hello </p>`
    // }

    //for loop through colors array returned by API
   
}


//api call function 
function apiFetch() {
    console.log('api function ')
    let select = document.getElementById('color-scheme-selector')
    let colorScheme = select.options[select.selectedIndex].value
    schemeSelection = this.value

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorHex}&&mode=${colorScheme}`)
        .then((response) => response.json())
        .then((data) => console.log(data) & printColors(data))

}




// colorSelected.addEventListener("input", function () {
//     let code = colorSelected.value;
//     console.log(code)
// })
//color api practice fetch
// fetch('https://www.thecolorapi.com/id?hex=0047AB')
//     .then((response) => response.json())
//     .then((data) => console.log(data))