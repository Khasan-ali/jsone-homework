let elList = document.querySelector('.list')

users.map((row) => {
    let newLi = document.createElement('li')
    
    newLi.textContent = `name: ${row.name}, age: ${row.age}, position: ${row.position}, gender: ${row.gender}`

    elList.appendChild(newLi)
})