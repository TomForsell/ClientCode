import React from "react";
import { RestClient } from "../RestClient";
import {Button, Input, Textarea, H2, H1, P} from '@dnb/eufemia'

export default function UpdateEnvironmentForm() {
    const [value, setValue] = React.useState(0) 
    const handleSubmit = (e: any) => {
    e.preventDefault();
    let environment = {
        id:           (document.getElementById('updateEnvID') as HTMLInputElement).value,
        description:  (document.getElementById('updateDescription') as HTMLInputElement).value,
    }
    RestClient.updateEnvironment(environment)
              .then( () => {
                  window.alert('Updated - you are helping DNB succeed!')
                  e.target.reset()
                  window.location.reload()
                  setValue(value => value + 1)     
              })
              .catch(err => alert(err))
}

return (
    <div>
        <H2>Update Environment</H2>
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor='updateEnvID'>ID</label>
                <input type='text' id='updateEnvID'/>
            </p>
            <p>
                <label htmlFor='updateDescription'>Description</label>
                <input type='text' id='updateDescription'/>
            </p>
            <p>
                <label>&nbsp;</label> {/* Placeholder */}
                <button>Update</button>
            </p>
        </form>
    </div>
    )
}