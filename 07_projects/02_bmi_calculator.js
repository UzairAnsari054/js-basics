const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result =document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give valid height ${height}`
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give valid weight ${weight}`
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        let type
        if (bmi < 18.6) {
          type = "Underweight";
      } else if (bmi >= 18.6 && bmi <= 24.9) {
          type = "Normal Range";
      } else {
          type = "Overweight";
      }
        result.innerHTML = `<span>Your bmi is${ bmi} & so you are ${ type}</span>`
    }
})