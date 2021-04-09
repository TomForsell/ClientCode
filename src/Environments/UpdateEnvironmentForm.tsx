import React from "react";
import { RestClient } from "../RestClient";
import {Button, Input, Textarea, H2, H1, P, FormRow} from '@dnb/eufemia'

export default function UpdateEnvironmentForm() {
    const [value, setValue] = React.useState(0) 
    const handleSubmit = (e: any) => {
    let environment = {
        id:           (document.getElementById('updateEnvID') as HTMLInputElement).value,
        description:  (document.getElementById('updateDescription') as HTMLInputElement).value,
    }
    RestClient.updateEnvironment(environment)
              .then( () => {
                  window.alert('Updated - you are helping DNB succeed!')
                  window.location.reload()
                  setValue(value => value + 1)     
              })
              .catch(err => alert(err))
}

return (
    <div>
        <H2 top="medium">Update Environment</H2>
        <FormRow vertical>
            <P>
                <Input label="ID:" type='text' id='updateEnvID'/>
                <Input label="Description:" type='text' id='updateDescription'/>
                <Button top="small" on_click={handleSubmit} right="small">Update</Button>
            </P>
        </FormRow>
    </div>
    )
}