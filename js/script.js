const number = document.getElementById("num1")
const button = document.querySelectorAll(".btn")
 

button.forEach(btn => {                                                                                      
 btn.addEventListener("click", (e) => {
    const  count = e.target.value
    let current = Number(number.value)
    console.log(e.target)

    if(count === "+"){
        current += 1
    }else if(count === "-"){
        current -= 1
    }
    number.value = current
 })

});  




