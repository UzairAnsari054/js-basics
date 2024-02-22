// generate a random color

let randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++){
     color += hex[Math.floor(Math.random() * 16)]
    }
    return color
  }
  
  let intervalReference
  const start = function(){
  
    if(!intervalReference){
    intervalReference = setInterval(changingColor, 1000)
    }
    
    function changingColor(){
      document.body.style.backgroundColor = randomColor()
    }
  }
  
  const stop = function(){
   clearInterval(intervalReference)
   intervalReference = null
  }
  
  document.querySelector('#start').addEventListener('click', start)
  document.querySelector('#stop').addEventListener('click', stop)
         
  