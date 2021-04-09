import React from "react";
import { useParams } from "react-router-dom";
import { RestClient } from "../RestClient";
import {Button, Input, Textarea, H2, H1, P, Table, Tr, Th, Td, FormSet} from '@dnb/eufemia'
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
            <FormSet top="medium" left="medium" direction="horizontal">
                {listAllConfigData(environment)}
                {AddConfigDataForm(environment)}
                {DeleteConfigDataForm(environment)}
                {UpdateConfigDataForm(environment)}
            </FormSet>
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
                    <Table className="dnb-table">
                        <Tr>
                            <Th>ConfigID</Th>
                            <Th>Key Name</Th>
                            <Th>Config Value</Th>
                            <Th>Time modified</Th>
                        </Tr>
                            {environment.configDataList.map((c: any, i: number) => 
                        <tr key={i}>
                            <Td>{c.configID}</Td>
                            <Td className='keyName'>{c.keyName}</Td>
                            <Td className='configValue'>{c.configValue}</Td>
                            <Td className='ts'>{c.ts}</Td>
                        </tr>
                            )}
                    </Table>
                </div>
            )
        }
    }
}

