import React from "react";
import { useParams } from "react-router-dom";
import { RestClient } from "./RestClient"

export default function ConfigData() {

    let {id}: any = useParams();
    let [configData, setConfigData] = React.useState<any>(undefined)

    React.useEffect(() => {
        RestClient.getConfigData(id)
            .then(configData => setConfigData(configData))
            .catch((err: any) => alert(err))
    }, [id])

    console.log(configData);
    if (configData) {
        return (
            <React.Fragment>
                <ConfigDataDetails {...configData} />
            </React.Fragment>
        )
    } else {
        return <p>...</p>
    }

    function ConfigDataDetails(configData: any) {
        console.log(configData);
        return (

            <div>
                <h1>{configData.environment}</h1>
                <p>
                    <label>Key Name</label>
                    <span>{configData.keyName}</span>
                </p>
                <p>
                    <label>Value</label>
                    <span>{configData.value}</span>
                </p>
                <p>
                    <label>Timestamp</label>
                    <span>{configData.ts}</span>
                </p>
            </div>
        )

    }
}

