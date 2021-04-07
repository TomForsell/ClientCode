import React from "react";
import { useParams } from "react-router-dom";
import { RestClient } from "./RestClient"

export default function Environment() {

    let {id}: any = useParams();
    let [environment, setEnvironment] = React.useState<any>(undefined)

    React.useEffect(() => {
        RestClient.getEnvironment(id)
                  .then(environment => setEnvironment(environment))
                  .catch((err: any) => alert(err))
    }, [id])
    
    if (environment) {
        return (
            <React.Fragment>
                <EnvironmentDetails {...environment} />
                <EnvironmentConfigureData {...environment} />
            </React.Fragment>
        )
    } else {
        return <p>...</p>
    }

    function EnvironmentDetails(environment: any) {
        return (
            <div>
                <h1>{environment.description}</h1>
            </div>
        )
    }

    function EnvironmentConfigureData(environment: any) {
        return (
            <React.Fragment>
                {useConfigDataMarkup(environment)}
            </React.Fragment>
        )
    }

    function useConfigDataMarkup(environment: any) {
        if (!environment.configDataList || !environment.configDataList.length) {
            return <div>No configuration data yet, sorry!</div>
        }
        else {
            return (
                <div>
                    <h2>Configuration data</h2>
                    {environment.configDataList.map((c: any, i: number) => 
                        <p key={i}>
                            <span className='keyName:'>{c.keyName}</span>
                            <span className='value'>{c.value}</span>
                            <span className='ts'> [{c.ts}]</span>
                        </p>
                    )}
                </div>
            )
        }
    }
}

