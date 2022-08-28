// Global Variables
//coloHex api global variable
let colorSelected = document.getElementById('color-selected')
let color = colorSelected.value
let colorHex = color.slice(1)
// color scheme global variable 
let select = document.getElementById('color-scheme-selector')
let colorScheme = select.options[select.selectedIndex].value


//footer 
let footer = document.getElementById('footer')
//color container
let colorContainer = document.getElementById('color-container')

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
   footer.innerHTML = "" 
   colorContainer.innerHTML = ""
    apiFetch()
})

// grab the colors returned by the api and print to page 
function printColors(data) {
    console.log(data.colors[0].hex.value)
    let colors = data.colors
    colors.forEach(function(data) {
        console.log(data)
        colorContainer.innerHTML += `<div id="color-block" color style="background-color:${data.hex.value};"> <p> ahoy</p></div>
        `
        // colorContainer.innerHTML += `<div style="background-color:"#${data.hex.value}" ><p>'hello'${data.hex.value}</p> </div>`

        footer.innerHTML +=`<p> ${data.hex.value} <p>`

        

    })
 
    
  
   
}


//api call function 
function apiFetch() {
    console.log('api function ')
    //practice color selection from input field 
    let colorSelected = document.getElementById('color-selected')
    let color = colorSelected.value
    let colorHex = color.slice(1)
    //
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