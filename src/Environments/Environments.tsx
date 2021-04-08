import React from "react";
import { Link } from "react-router-dom";
import { RestClient } from "../RestClient";
import {Button, Input} from '@dnb/eufemia';
import AddEnvironmentFormMarkup from "../Environments/AddEnvironmentFormMarkup"
import Environment from "../Environment/Environment";

export default function Environments() {
    let [environments, setEnvironments] = React.useState<Array<any>>([])
    React.useEffect(() => {
        RestClient.getEnvironments()
                  .then(environments => setEnvironments(environments))
    }, [])

    return (
        <div>
            <h1>Environments</h1>
            {environments.map((e: any, i: number) =>
                <Link key={i} className='blockLink' to={`environment/${e.id}`}>{e.description  }</Link>
            )}
        </div>
    )

    function useAddConfigureDataFormMarkup() {
        let [environment, setEnvironment] = React.useState<any>(undefined)
        return (
            <React.Fragment>
                <AddEnvironmentFormMarkup {...environment} />
            </React.Fragment>
        )
    }

}