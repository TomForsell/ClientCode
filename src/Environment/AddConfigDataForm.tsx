import React from "react";
import { RestClient } from "../RestClient";
import {Button, Input, Textarea, H2, H1, P} from '@dnb/eufemia'

export default function AddConfigDataForm(environment: any) {
        
    const [value, setValue] = React.useState(0) 

    const handleSubmit = (e: any) => {
    e.preventDefault();
    let configData = {
        keyName:  (document.getElementById('keyName') as HTMLInputElement).value,
        configValue: (document.getElementById('configValue') as HTMLInputElement).value,
    }
    RestClient.addConfigData(environment.id, configData)
              .then( () => {
                  window.alert('Added - you are helping DNB succeed!')
                  e.target.reset()
                  environment.configData.push(configData)
                  setValue(value => value + 1)     
              })
              .catch(err => alert(err))
}

return (
    <div>
        <H2>Add Configuration Data</H2>
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor='keyName'>Key Name</label>
                <input type='text' id='keyName'/>
            </p>
            <p>
                <label htmlFor='configValue'>Configuration Value</label>
                <textarea id='comment' rows={3} cols={20}/>
            </p>
            <p>
                <label>&nbsp;</label> {/* Placeholder */}
                <button>Save</button>
            </p>
        </form>
    </div>
    )
}