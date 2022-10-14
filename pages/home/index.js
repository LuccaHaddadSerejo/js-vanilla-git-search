import { getDataRepos, getDataInfo } from "../../getApi.js"

function createHeader(user){
    const headerDiv = document.querySelector('.header-div-1')
    const userImg = document.createElement('img') 
    const divInfo = document.createElement('div')
    const userName = document.createElement('h2')
    const userBio = document.createElement('span')


    headerDiv.classList = "header-div-1 flex-row align-center"
    userImg.classList = 'img-user'
    divInfo.classList = 'header-div-1-div'
    userName.classList = "header-user"
    userBio.classList = 'header-job'
    

    userImg.src = user.avatar_url
    userName.innerText = user.name
    userBio.innerText = user.bio

    divInfo.append(userName, userBio)
    headerDiv.append(userImg, divInfo)


    return headerDiv
}

function createMain(userRepo){
    let fullUl = document.querySelector('.list-full')
    console.log(userRepo)
    userRepo.forEach(element => {
        const card = document.createElement('li')
        const cardTitle = document.createElement('h2')
        const cardDescription = document.createElement('p')
        const cardDiv = document.createElement('div')
        const cardBtnOne = document.createElement('button')
        
        
        card.classList = 'list-card flex-col align-start'
        cardTitle.classList = 'card-title'
        cardDescription.classList = 'card-paragraph'
        cardDiv.classList = 'card-div flex-row'
        cardBtnOne.classList = 'card-btn-1'
        

        cardTitle.innerText = element.name
        cardDescription.innerText = element.description
        cardBtnOne.innerText = 'Repositório'
        

        cardBtnOne.setAttribute('onclick', `location.href='${element.html_url}?'`)

        if(element.homepage != null && element.homepage != ""){
            const cardBtnTwo = document.createElement('button')
            cardBtnTwo.classList = 'card-btn-2'
            cardBtnTwo.innerText = 'Demo'
            cardBtnTwo.setAttribute('onclick', `location.href='${element.homepage}?'`)
            cardDiv.append(cardBtnOne, cardBtnTwo)
            card.append(cardTitle,cardDescription,cardDiv)
            fullUl.append(card)
        }else{
            cardDiv.append(cardBtnOne)
            card.append(cardTitle,cardDescription,cardDiv)
            fullUl.append(card)     
        }     
    });   
    return fullUl
}

export async function requestApiInfo(){
    let teste = localStorage.getItem('lastSearch')
    let api = await getDataInfo(teste)
    renderHeader(api)
}

export async function requestApiRepos(){
    let teste = localStorage.getItem('lastSearch')
    let api = await getDataRepos(teste)
    renderMain(api)
}



export async function renderMain(data){
    let main = document.getElementById('mainPrincipal')    
    return main.append(createMain(data))       
}

export async function renderHeader(data){
    let header = document.getElementById('getHead')    
    return header.append(createHeader(data))       
}

requestApiInfo()
requestApiRepos()






// async function renderMain(baseUrl, user){
//     let main = document.getElementById('mainPrincipal')
//     let getUserData = await getData(`${baseUrl}${user}/repos`)       
//     return main.append(createMain(getUserData))       
// }

// export async function renderHeader(baseUrl, user){
//     let header = document.getElementById('getHead')
//     let getUserData = await getData(`${baseUrl}${user}`)       
//     return header.append(createHeader(getUserData))       
// }

// renderHeader('https://api.github.com/users/', 'samuelleao')

// renderMain('https://api.github.com/users/', 'samuelleao')