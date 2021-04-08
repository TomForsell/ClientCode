import React from "react";
import { useParams } from "react-router-dom";
import { RestClient } from "../RestClient";
import {Button, Input, Textarea, H2, H1, P} from '@dnb/eufemia'
import AddConfigDataForm from "./AddConfigDataForm"
import DeleteConfigDataForm from "./DeleteConfigDataForm"
import UpdateConfigDataForm from "./UpdateConfigDataForm"

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
        return <P>...</P>
    }

    function EnvironmentDetails(environment: any) {
        return (
            <div>
                <H1>{environment.description}</H1>
            </div>
        )
    }

    function EnvironmentConfigureData(environment: any) {
        return (
            <React.Fragment>
                {listAllConfigData(environment)}
                {AddConfigDataForm(environment)}
                {DeleteConfigDataForm(environment)}
                {UpdateConfigDataForm(environment)}
            </React.Fragment>
        )
    }

    //TODO: Make a table 
    function listAllConfigData(environment: any) {
        if (!environment.configDataList || !environment.configDataList.length) {
            return <div>No configuration data yet, sorry!</div>
        }
        else {
            return (
                <div>
                    <H2>Configuration data</H2>
                    {environment.configDataList.map((c: any, i: number) => 
                        <P key={i}>
                            <span>{c.configID} &nbsp;&nbsp;|&nbsp;&nbsp; </span>
                            <span className='keyName'>{c.keyName} &nbsp;&nbsp;|&nbsp;&nbsp; </span>
                            <span className='configValue'>{c.configValue} &nbsp;&nbsp;|&nbsp;&nbsp; </span>
                            <span className='ts'>{c.ts}</span>
                        </P>
                    )}
                </div>
            )
        }
    }
}

