const getColor = document.getElementById("get-color")
const colorInput = document.getElementById("color")
const optionsSelect = document.getElementById("select-options")
let colorSection = document.getElementById("color-columns")
let hexID = document.getElementById("hex-id")
  let colorsArray = []



getColor.addEventListener("click", function(e){
    e.preventDefault()
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInput.value.slice(1)}&mode=${optionsSelect.value}&count=5`)
    
        .then(response => response.json())
        .then(json => {
            let html=""
            let footer=""
            
            mainColumns = json.colors
            mainColumns.forEach(function(color) {
                html +=`<div style="background-color:${color.hex.value}"></div>`
                footer += `<p> ${color.hex.value}</p>`
            }) 
            colorSection.innerHTML = html
            hexID = footer
            
            
})

})


// function renderColors() {
//     colorsArray = json.colors
//     colorSection.innerHTML = colorsArray.map(color =>
//                 `<div style="background-color:${color.hex.value}"></div>`
//             ).join('')
// }
// })
