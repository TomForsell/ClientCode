export class RestClient {

    static baseUrl = "http://localhost:8080/assignment"

    static async getAll() : Promise<any> {
        const url = `${RestClient.baseUrl}/all`
        const response = await window.fetch(url)
        return await response.json()
    }

    static async getProduct(id: number) : Promise<any> {
        const url = `${RestClient.baseUrl}/getID/${id}`
        const response = await window.fetch(url)
        return await response.json()
    }

    /*
    static async getProduct() : Promise<any> {
        const url = `${RestClient.baseUrl}/destinations`
        const response = await window.fetch(url)
        return await response.json()
    }




    static addReview(id: number, review: any) : Promise<any> {
        const url = `${RestClient.baseUrl}/destinations/addReviewForDestination/${id}`
        return window.fetch(
            url,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(review)
            }
        )
    }*/
}