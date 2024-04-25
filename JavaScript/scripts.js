const convertButton = document.querySelector(".convert-button")
const currencySelectToConvert = document.getElementById("select-to-convert")
const currencySelect = document.getElementById("select-converted")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value // input de valor digitado.        
    const currencyValueToConvert = document.querySelector(".currency-value-to-converted") // Valor a ser convertido. 
    const currencyValueConverted = document.querySelector(".currency-value") // valor Convertido.


    console.log(currencySelectToConvert.value)
    console.log(currencySelect.value)

    /*****************************************************************
    *********************  Tabela de troca    ************************
    *****************************************************************/
    const dolarTodayEuaReal = 5.13  //.................. EUA para Real
    const euroTodayReal = 5.49      //................. Euro para Real 
    const dolarTodayAusReal = 3.33  //.................. AUS para Real

    /*
    const euroEUA = 1.07            //................. Euro para EUA
    const dolarTodayAUSEUA = 0.65   //.................. EUA para AUS
    const euroTodayAUS = 1.65       //................. Euro para AUS
    */

    if (currencySelectToConvert.value == "real") {
        {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue)
        }

        if (currencySelect.value == "real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue)
        }

        if (currencySelect.value == "dolarUS$") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / dolarTodayEuaReal)
        }

        if (currencySelect.value == "dolarAU$") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-AU", {
                style: "currency",
                currency: "AUS"
            }).format(inputCurrencyValue / dolarTodayAusReal)
        }

        if (currencySelect.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / euroTodayReal)
        }
    }

}

function changeCurrency() {

    const currencyName = document.getElementById("currency-name-converted")
    const currencyImage = document.querySelector(".currency-img")
    const currencyValue = document.getElementById("currency-value");
    

    if (currencySelect.value == "dolarUS$"){
        currencyImage.src = "./assets/bandeiras/dolar.png"
        currencyName.innerHTML = "Dólar Americano"
    }

    if (currencySelect.value == "euro"){
        currencyImage.src = "./assets/bandeiras/euro.png"
        currencyName.innerHTML = "Euro"
    }

    if (currencySelect.value == "dolarAU$"){
        currencyImage.src = "./assets/bandeiras/australia.png"
        currencyName.innerHTML = "Dólar Australiano"
    }

    if (currencySelect.value == "real"){
        currencyImage.src = "./assets/bandeiras/real.png"
        currencyName.innerHTML = "Real"
    }

    convertValues() // Aqui ele irá chamar a função anterior e fará a troca  de moeda conforme o valor do select.

}



convertButton.addEventListener("click", convertValues)

// No evento a siguir, estamos mapeando o botão Enter do teclado, e com isso chamando a função de converção.
document.addEventListener("keypress", function(e){
    if(e.key === 'Enter')
    convertValues()
})

currencySelectToConvert.addEventListener("change", changeCurrency)
currencySelect.addEventListener("change",  changeCurrency)
