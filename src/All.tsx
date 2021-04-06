import React from "react";
import { Link } from "react-router-dom";
import { RestClient } from "./RestClient"

function All() {

    let [products, setProducts] = React.useState<Array<any>>([])

    React.useEffect(() => {
        RestClient.getAll()
            .then(products => setProducts(products))
    }, [])

    return (
        <div>
            <h1>All Environments</h1>
            {products.map((prod: any, i: number) =>
                <Link key={i} className='blockLink' to={`product/${prod.id}`}>{prod.description  }</Link>
            )}
        </div>
    )
}
export default All;