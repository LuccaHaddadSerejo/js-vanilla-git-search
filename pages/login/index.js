let usersArr = []

function getUser(){
    let inputLogin = document.getElementById('inputName')
    let btnLogin = document.getElementById('btnLogin')

    btnLogin.addEventListener('click', function(event){
        event.preventDefault()
        usersArr.push(inputLogin.value)
        localStorage.setItem('lastSearch', inputLogin.value)
        window.location.assign('../home/index.html')      
    }) 
    return usersArr
}

getUser()


