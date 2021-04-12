import React from "react";
import { RestClient } from "../RestClient";
import {Button, Input, Textarea, H2, H1, P} from '@dnb/eufemia'

export default function DeleteConfigDataForm(environment: any) {
        
    const [value, setValue] = React.useState(0) 

    const handleSubmit = (e: any) => {
    let configData = {
        configID:    (document.getElementById('deleteConfigID') as HTMLInputElement).value,
    }
    
    RestClient.deleteConfigData(configData)
              .then( () => {
                  window.alert('Deleted - you are helping DNB succeed!')
                  window.location.reload()
                  setValue(value => value + 1)     
              })
              .catch(err => alert(err))
}

return (
    <div>
        <H2 top="large">Delete Configuration Data</H2>    
        <form>
            <P top="small">
                <Input label="ID:" label_direction="vertical" type='text' id='deleteConfigID' right="small"/>
                <Button top="small" on_click={handleSubmit} >Delete</Button>
            </P>
        </form>
    </div>
    )
}