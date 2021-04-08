export class RestClient {

    static baseUrl = "http://localhost:8080/assignment"

    static async getEnvironments() : Promise<any> {
        const url = `${RestClient.baseUrl}/all`
        const response = await window.fetch(url)
        return await response.json()
    }

    static async getEnvironment(id: number) : Promise<any> {
        const url = `${RestClient.baseUrl}/getID/${id}`
        const response = await window.fetch(url)
        return await response.json()
    }

    static addEnvironment(environment: any) : Promise<any> {
        const url = `${RestClient.baseUrl}/createEnvironment/`
        return window.fetch(
            url,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(environment)
            }
        )
    }
    static addConfigData(id: number, configData: any) : Promise<any> {
        const url = `${RestClient.baseUrl}/addConfigForEnvironment/${id}`
        return window.fetch(
            url,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(configData)
            }
        )
    }

    /*
    static async getProduct() : Promise<any> {
        const url = `${RestClient.baseUrl}/destinations`
        const response = await window.fetch(url)
        return await response.json()
    }
*/
}