export class RestClient {

    static baseUrl = "http://localhost:8080/assignment"

    static async getEnvironments() : Promise<any> {
        const url = `${RestClient.baseUrl}/all`
        const response = await fetch(url)
        return await response.json()
    }

    static async getEnvironment(id: number) : Promise<any> {
        const url = `${RestClient.baseUrl}/getID/${id}`
        const response = await fetch(url)
        return await response.json()
    }

    static addEnvironment(environment: any) : Promise<any> {
        const url = `${RestClient.baseUrl}/createEnvironment/`
        return fetch(
            url,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(environment)
            }
        )
    }
 
    static async updateEnvironment(environment: any) : Promise<any> {
        const url = `${RestClient.baseUrl}/updateEnvironment/${environment.id}`
        const response =  await fetch(
            url,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(environment)
            }
        )
        return response;
    }
    
   
    static deleteEnvironment(environment: any) : Promise<any> {
        let id = environment.id
        console.log(id)
        const url = `${RestClient.baseUrl}/deleteEnvironment/${id}`
        return fetch(url, {method: 'DELETE'})
    }

    
    static addConfigData(id: number, configData: any) : Promise<any> {
        const url = `${RestClient.baseUrl}/addConfigForEnvironment/${id}`
        return fetch(
            url,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(configData)
            }
        )
    }

    static deleteConfigData(configID: any) : Promise<any> {
        let id = configID.id
        const url = `${RestClient.baseUrl}/deleteConfigForEnvironment/${id}`
        return fetch(url,{method: 'DELETE'})
    }

    static updateConfigData(id: number, configID: any) : Promise<any> {
        const url = `${RestClient.baseUrl}/updateConfigForEnvironment/${id}`
        return fetch(
            url,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(configID)
            }
        )
    }
}