import React from "react";
import { RestClient } from "../RestClient";
import {Button, Input, Textarea, H2, H1, P} from '@dnb/eufemia'

export default function AddConfigDataForm(environment: any) {
        
    const [value, setValue] = React.useState(0) 

    const handleSubmit = (e: any) => {
    e.preventDefault();
    let configData = {
        keyName:  (document.getElementById('addKeyName') as HTMLInputElement).value,
        configValue: (document.getElementById('addConfigValue') as HTMLInputElement).value,
    }
    RestClient.addConfigData(environment.id, configData)
              .then( () => {
                  window.alert('Added - you are helping DNB succeed!')
                  e.target.reset()
                  window.location.reload()
                  environment.configDataList.push(configData)
                  setValue(value => value + 1)     
              })
              .catch(err => alert(err))
}

return (
    <div>
        <H2>Add Configuration Data</H2>
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor='addKeyName'>Key Name</label>
                <input type='text' id='addKeyName'/>
            </p>
            <p>
                <label htmlFor='addConfigValue'>Configuration Value</label>
                <input type='text' id='addConfigValue'/>
            </p>
            <p>
                <label>&nbsp;</label> {/* Placeholder */}
                <button>Save</button>
            </p>
        </form>
    </div>
    )
}