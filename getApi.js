export async function getDataInfo(nome){
    try{
        const baseUrl = 'https://api.github.com/users/'
        const data = await fetch(`${baseUrl}${nome}`)
        const dataJson = await data.json() 
        return dataJson
    }catch(error){
        console.log(error) 
    }
}


export async function getDataRepos(nome){
    try{
        const baseUrl = 'https://api.github.com/users/'
        const data = await fetch(`${baseUrl}${nome}/repos`)
        const dataJson = await data.json() 
        return dataJson
    }catch(error){
        console.log(error) 
    }
}