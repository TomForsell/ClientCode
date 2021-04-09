import React from "react";
import { RestClient } from "../RestClient";
import {Button, Input, Textarea, H2, H1, P, FormRow} from '@dnb/eufemia'
import AddConfigDataForm from "./AddConfigDataForm";
import Environment from "./Environment";

export default function UpdateConfigDataForm(environment: any) {
        
    const [value, setValue] = React.useState(0) 

    const handleSubmit = (e: any) => {
    let configData = {
        configID: (document.getElementById('updateConfigID') as HTMLInputElement).value,
        keyName:  (document.getElementById('updateKeyName') as HTMLInputElement).value,
        configValue: (document.getElementById('updateConfigValue') as HTMLInputElement).value,
    }

    RestClient.updateConfigData(environment.id, configData)
              .then( () => {
                  window.alert('Updated - you are helping DNB succeed!')
                  window.location.reload()
                  environment.configDataList.push(configData)
                  setValue(value => value + 1)     
              })
              .catch(err => alert(err))
}

return (
    <div>
        <H2 top="medium">Update Configuration Data</H2>
        <FormRow vertical>
            <P>
                <Input label="ID:" type='text' id='updateConfigID'/>
                <Input label="Key Name:" type='text' id='updateKeyName'/>
                <Input label="Configuration Value:" type='text' id='updateConfigValue'/>
                <Button top="small" on_click={handleSubmit}>Update</Button>
            </P>
        </FormRow>
    </div>
    )
}