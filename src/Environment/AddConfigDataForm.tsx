import React from "react";
import { RestClient } from "../RestClient";
import {Button, Input, Textarea, H2, H1, P, FormRow} from '@dnb/eufemia'

export default function AddConfigDataForm(environment: any) {
        
    const [value, setValue] = React.useState(0) 

    const handleSubmit = (e: any) => {
    let configData = {
        keyName:  (document.getElementById('addKeyName') as HTMLInputElement).value,
        configValue: (document.getElementById('addConfigValue') as HTMLInputElement).value,
    }
    RestClient.addConfigData(environment.id, configData)
              .then( () => {
                  window.alert('Added - you are helping DNB succeed!')
                  window.location.reload()
                  environment.configDataList.push(configData)
                  setValue(value => value + 1)     
              })
              .catch(err => alert(err))
}

return (
    <div>
        <H2 top="medium">Add Configuration Data</H2>
        <FormRow vertical>
            <P>
                <Input label="Key Name:" type='text' id='addKeyName'/>
                <Input label="Configuration Value:" type='text' id='addConfigValue'/>
                <Button top="small" on_click={handleSubmit} right="small">Save</Button>
            </P>
        </FormRow>
    </div>
    )
}