const formField = document.getElementById("unit_conversion");

const numInput = document.getElementById("numInput");
// console.log(numInput)

formField.addEventListener("submit", (e) => {
    const input = document.getElementById("input").value;
    const kiloPound = document.getElementById("kilo-pound");
    const poundKilo = document.getElementById("pound-kilo");
    const literGallon  = document.getElementById("liter-gallon");
    const gallonLiter = document.getElementById("gallon-liter");
    const meterFeet  = document.getElementById("meter-feet");
    const feetMeter = document.getElementById("feet-meter");

    // Kilo to Pound conversion
        const resultKP = input * 2.20462;
        // console.log(resultKP)
        kiloPound.innerHTML = resultKP.toFixed(3);
        numInput.innerHTML = input;

  
    //pound to kilo
        const resultPK = input / 2.20462;
        // console.log("resultPK")
        poundKilo.innerHTML = resultPK.toFixed(3); 
        document.getElementById("numInput1").innerHTML = input;
        
    //liters to gallons
        const resultLG = input * 0.264172;
        literGallon.innerHTML = resultLG.toFixed(3); 
        document.getElementById("numInput2").innerHTML = input;

    //gallons to liters
        const resultGL = input / 0.264172;
        gallonLiter.innerHTML = resultGL.toFixed(3); 
        document.getElementById("numInput3").innerHTML = input;
        
        
        //meters to feet
        const resultMF = input * 3.28084;
        meterFeet.innerHTML = resultMF.toFixed(3); 
        document.getElementById("numInput4").innerHTML = input;


        //feet to meters
        const resultFM = input / 3.28084;
        feetMeter.innerHTML = resultFM.toFixed(3); 
        document.getElementById("numInput5").innerHTML = input;
        
           
    
    e.preventDefault();
});
    

