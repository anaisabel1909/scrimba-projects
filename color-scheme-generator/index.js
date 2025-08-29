document.getElementById("get-scheme").addEventListener('click', function() {
    
    const colorSelected = document.getElementById("color-selected").value
    const schemeSelected = document.getElementById("schemes").value
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorSelected.slice(1)}&mode=${schemeSelected}&count=6`)
        .then(res => res.json())
        .then(data => {
            let schemeHTML = ''
            /* creating seed color div */
            schemeHTML +=  `<div class="color-box">
                                <div id="seed-color" class="color"></div>
                                <p class="hex-value" data-color-hex="${colorSelected}">${colorSelected}</p>
                            </div>`
             
            /* creating other colors divs from the api response */
            data.colors.forEach( (color, index) => {
                if (index === 0) return
            
                schemeHTML +=  `<div class="color-box">
                                    <div id="color-${index}" class="color"></div>
                                    <p class="hex-value" data-color-hex="${color.hex.value}">${color.hex.value}</p>
                                 </div>`
            })
            
            /* putting the html on DOM */
            document.getElementById("scheme-colors").innerHTML = schemeHTML
            
            /* rendering colors */
            document.getElementById("seed-color").style.backgroundColor = colorSelected

            data.colors.forEach((color, index) => {
                if (index === 0) return;
                document.getElementById(`color-${index}`).style.backgroundColor = color.hex.value;
            })
            
        })
})

document.getElementById("scheme-colors").addEventListener("click", function(e) {
    if(e.target.dataset.colorHex) {
        const hex = e.target.dataset.colorHex;
        
        /* jeito defasado e que pode parar de funcionar */
        const textarea = document.createElement("textarea");
        textarea.value = hex;
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand("copy")
        document.body.removeChild(textarea)
        
        
        /* jeito moderno e indicado, porém no servidor scrimba por algum motivo não roda 
        navigator.clipboard.writeText(hex)
            .then(() => console.log(`Copiado: ${hex}`))
            .catch(err => console.error("Erro ao copiar", err))
        */

        alert(`Copiado: ${hex}`)
    }
})