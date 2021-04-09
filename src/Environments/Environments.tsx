import React from "react";
import { Link } from "react-router-dom";
import { RestClient } from "../RestClient";
import {FormSet, H1} from '@dnb/eufemia';
import AddEnvironmentForm from "../Environments/AddEnvironmentForm"
import UpdateEnvironmentForm from "../Environments/UpdateEnvironmentForm"
import DeleteEnvironmentForm from "../Environments/DeleteEnvironmentForm"

export default function Environments() {
    let [environments, setEnvironments] = React.useState<Array<any>>([])
    let [environment] = React.useState<any>(undefined)

    React.useEffect(() => {
        RestClient.getEnvironments()
                  .then(environments => setEnvironments(environments))
    }, [])

    return (
        <div>
            <H1 top="medium" left="medium">Environments</H1>
            {environments.map((e: any, i: number) =>
                <Link key={i} className='blockLink' to={`environment/${e.id}`}>ID: {e.id} - {e.description  }</Link>
            )}
            <FormSet top="medium" left="medium">
                {AddEnvironmentForm(environment)}
                {UpdateEnvironmentForm()}
                {DeleteEnvironmentForm(environment)}
            </FormSet>
        </div>
    )

    

}