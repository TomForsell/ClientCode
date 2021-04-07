import React from "react";
import { Link } from "react-router-dom";
import { RestClient } from "./RestClient"
import {Button, Input} from '@dnb/eufemia'

function Environments() {

    let [environments, setEnvironments] = React.useState<Array<any>>([])

    React.useEffect(() => {
        RestClient.getEnvironments()
                  .then(environments => setEnvironments(environments))
    }, [])

    return (
        <div>
            <h1>Environments</h1>
            {environments.map((e: any, i: number) =>
                <Link key={i} className='blockLink' to={`configdata/${e.id}`}>{e.description  }</Link>
            )}
            <br></br>
            <br></br>
            <Input label="Add new environment" value="Input" right="small" />
            <Button text="Save" />
        </div>
    )
}
export default Environments;