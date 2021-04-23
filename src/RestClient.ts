export class RestClient {

    static baseUrl = "http://localhost:8080/assignment"

    static async getAllEnvironments() : Promise<any> {
        const url = `${RestClient.baseUrl}/getAllEnvironments`
        const response = await fetch(url)
        return await response.json()
    }

    static async getEnvironment(id: number) : Promise<any> {
        const url = `${RestClient.baseUrl}/getEnvironment/${id}`
        const response = await fetch(url)
        return await response.json()
    }

    static addEnvironment(environment: any) : Promise<any> {
        const url = `${RestClient.baseUrl}/addEnvironment/`
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
        const url = `${RestClient.baseUrl}/updateEnvironment/ig`
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

    static async getConfigData(id: number) : Promise<any> {
        const url = `${RestClient.baseUrl}/getConfigData/${id}`
        const response = await fetch(url)
        return await response.json()
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

    static deleteConfigData(configData: any) : Promise<any> {
        let id = configData.configID
        console.log(id)
        const url = `${RestClient.baseUrl}/deleteConfigForEnvironment/${id}`
        return fetch(
            url,
            {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(configData)

            }
        )

    }

    static updateConfigData(id: any, configData: any) : Promise<any> {
        const url = `${RestClient.baseUrl}/updateConfigForEnvironment/${id}`
        return fetch(
            url,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(configData)
            }
        )
    }
}