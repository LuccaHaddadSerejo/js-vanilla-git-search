import { getDataInfo } from "../../getApi.js"

let usersArr = []


function getUser(){
    let getSearch = JSON.parse(localStorage.getItem('recentUsers')) || []
    usersArr = getSearch
    let inputLogin = document.getElementById('inputName')
    let btnLogin = document.getElementById('btnLogin')

    btnLogin.addEventListener('click', async function(event){
            event.preventDefault()
            try{
                const baseUrl = 'https://api.github.com/users/'
                await fetch(`${baseUrl}${inputLogin.value}`)
                if(usersArr.length >= 3){
                    usersArr.pop()
                    usersArr.unshift(inputLogin.value)
                    localStorage.setItem('recentUsers', JSON.stringify(usersArr))
                }else{
                    usersArr.unshift(inputLogin.value)
                    localStorage.setItem('recentUsers', JSON.stringify(usersArr))
                }                  
    
                localStorage.setItem('lastSearch', inputLogin.value)
                window.location.assign('../home/index.html')
            }catch(error){
               errorMessage()
               console.log(error)
            }
    }) 
    return usersArr
}


getUser()


async function renderRecentUsers(){
    let getSearch = JSON.parse(localStorage.getItem('recentUsers')) || []
    for(let i = 0; i < getSearch.length; i++){
        let dataAPI = await getDataInfo(getSearch[i])
        let rUsers = document.getElementById('rUsers')
        let imgUser = document.createElement('img')
        imgUser.classList = 'img-user'
        imgUser.src = dataAPI.avatar_url 
        rUsers.append(imgUser)
    }
}

renderRecentUsers()


function errorMessage(){
    let form = document.getElementById('formLogin')
    let btnLogin = document.getElementById('btnLogin')
    let message = document.createElement('span')

    message.innerHTML = ''
    message.innerText = 'Usuário não encontrado'

    btnLogin.classList = 'align-button section-2-btn button-login'

    message.classList = 'error-message'

    form.append(message)
}
