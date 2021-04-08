import React from "react";
import { RestClient } from "../RestClient";
import {Button, Input, Textarea, H2, H1, P} from '@dnb/eufemia'

export default function DeleteConfigDataForm(environment: any) {
        
    const [value, setValue] = React.useState(0) 

    const handleSubmit = (e: any) => {
    e.preventDefault();
    const configID = {
        configID:  (document.getElementById('configID') as HTMLInputElement).value,
    }
    RestClient.deleteConfigData(environment.id, configID)
              .then( () => {
                  window.alert('Deleted - you are helping DNB succeed!')
                  e.target.reset()
                  environment.configData.delete(configID)
                  setValue(value => value + 1)     
              })
              .catch(err => alert(err))
}

return (
    <div>
        <H2>Delete Configuration Data</H2>
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor='configID'>ConfigID</label>
                <input type='number' id='configID'/>
            </p>
            <p>
                <label>&nbsp;</label> {/* Placeholder */}
                <button>Delete</button>
            </p>
        </form>
    </div>
    )
}