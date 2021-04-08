import React from "react";
import { Link } from "react-router-dom";
import { RestClient } from "../RestClient";
import {H1} from '@dnb/eufemia';
import AddEnvironmentFormMarkup from "../Environments/AddEnvironmentFormMarkup"

export default function Environments() {
    let [environments, setEnvironments] = React.useState<Array<any>>([])
    let [environment, setEnvironment] = React.useState<any>(undefined)

    React.useEffect(() => {
        RestClient.getEnvironments()
                  .then(environments => setEnvironments(environments))
    }, [])

    return (
        <div>
            <H1>Environments</H1>
            {environments.map((e: any, i: number) =>
                <Link key={i} className='blockLink' to={`environment/${e.id}`}>{e.description  }</Link>
            )}
            {AddEnvironmentFormMarkup(environment)}
        </div>
    )

    

}