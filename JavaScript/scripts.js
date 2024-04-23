const convertButton = document.querySelector(".convert-button")

    function convertValues(){
        const inputCurrencyValue = document.querySelector(".input-currency").value // input de valor digitado.        
        const currencyValueToConvert = document.querySelector(".currency-value-to-converted") // Valor a ser convertido. 
        const currencyValueConverted = document.querySelector(".currency-value") // valor Convertido.
        


        const dolarToday = 5.2

        const convertedValue = inputCurrencyValue / dolarToday

        
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", 
        {   style: "currency", 
            currency: "BRL"
        }).format(inputCurrencyValue)
        
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { 
            style: "currency", 
            currency: "USD"
        }).format(convertedValue)


        console.log(convertedValue)
    }


convertButton.addEventListener("click", convertValues )