// declare variabble
let sort = document.querySelector("#sort");
let input = document.querySelector("#display");
let add = document.querySelector("#add")
let list = document.querySelector("#lists")
let array = [];

//to add to the list 
add.addEventListener("click", (e)=> {
    e.preventDefault()
    if(input.value) {
        array.push(input.value)
        input.value = ""
    } 
    
})

// checkbox and button
localStorage.setItem("names", JSON.stringify(array))
add.addEventListener("click", (event)=> {
    event.preventDefault()
    list.innerHTML = "";
    array.forEach( (name)=> {
        list.innerHTML += `
        <li><input type="checkbox" class= "check">
        ${name}
        <button class="btn3">x</button>
        </li>
        `
    })
})