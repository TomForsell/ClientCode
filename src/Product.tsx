import React from "react";
import { useParams } from "react-router-dom";
import { RestClient } from "./RestClient"

export default function Product() {

    let {id}: any = useParams();
    let [product, setProduct] = React.useState<any>(undefined)

    React.useEffect(() => {
        RestClient.getProduct(id)
            .then(product => setProduct(product))
            .catch((err: any) => alert(err))
    }, [id])

    console.log(product);
    if (product) {
        return (
            <React.Fragment>
                <ProductDetails {...product} />
            </React.Fragment>
        )
    } else {
        return <p>...</p>
    }

    function ProductDetails(product: any) {
        console.log(product);
        return (

            <div>
                <h1>{product.description}</h1>
                <p>
                    <label>Price</label>
                    <span>{product.price}</span>
                </p>
                <p>
                    <label>InStock</label>
                    <span>{product.inStock}</span>
                </p>
            </div>
        )

    }
}

