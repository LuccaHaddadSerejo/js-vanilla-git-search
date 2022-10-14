export async function getDataInfo(user){
    try{
        const baseUrl = 'https://api.github.com/users/'
        const data = await fetch(`${baseUrl}${user}`)
        const dataJson = await data.json()
        return dataJson
    }catch(error){
       return error
    }
}


export async function getDataRepos(user){
    try{
        const baseUrl = 'https://api.github.com/users/'
        const data = await fetch(`${baseUrl}${user}/repos`)
        const dataJson = await data.json() 
        return dataJson
    }catch(error){
        return error
    }
}


