const baseUrl = 'https://api.github.com/users/'
const myHeaders = {
    'Content-Type': 'application/json'
}

export async function getDataInfo(user){
    try{ 
        const data = await fetch(`${baseUrl}${user}`, {
            method: 'GET',
            headers: myHeaders
        })
        const dataJson = await data.json()
        return dataJson
    }catch(error){
       console.log(error)
    }
}


export async function getDataRepos(user){
    try{
        const data = await fetch(`${baseUrl}${user}/repos`, {
            method: 'GET',
            headers: myHeaders
        })
        const dataJson = await data.json() 
        return dataJson
    }catch(error){
        return error
    }
}

export { baseUrl, myHeaders }

// function getDataInfo(user){
//     fetch(`${baseUrl}${user}`, {
//         method: 'GET',
//         headers: myHeaders})   
//         .then(resp => resp.json())
//         .then(resp => console.log(resp))
// }

// function getDataRepos(user){
//     fetch(`${baseUrl}${user}/repos`, {
//             method: 'GET',
//             headers: myHeaders})
//             .then(resp => resp.json())
//             .then(resp => console.log(resp))
// }
     
