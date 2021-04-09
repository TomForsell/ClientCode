import React from "react";
import { RestClient } from "../RestClient";
import {Button, Input, H2, H1, P, FormSet, FormRow} from '@dnb/eufemia'


export default function DeleteEnvironmentForm(environment: any) {
        
    const [value, setValue] = React.useState(0) 

    const handleSubmit = (e: any) => {
    let environment = {
        id:           (document.getElementById('deleteEnvID') as HTMLInputElement).value,
    }

    RestClient.deleteEnvironment(environment)
              .then( () => {
                  window.alert('Deleted - you are helping DNB succeed!')
                  window.location.reload()
                  setValue(value => value + 1)     
              })
              .catch(err => alert(err))
}

return (
    <div>
        <H2 top="large">Delete Environment</H2>    
        <form>
            <P top="small">
                <Input label="ID:" type='text' id='deleteEnvID' label_direction="vertical"/>
                <Button top="small" bottom="small" on_click={handleSubmit} >Delete</Button>
            </P>
        </form>
    </div>
    )
}