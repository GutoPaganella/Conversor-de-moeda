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


convertButton.addEventListener("click", convertValues)