import React from "react";
import { RestClient } from "../RestClient";
import {Button, Input, Textarea, H2, H1, P} from '@dnb/eufemia'

export default function UpdateEnvironmentForm() {
    const [value, setValue] = React.useState(0) 
    const handleSubmit = (e: any) => {
    e.preventDefault();
    let environment = {
        id:           (document.getElementById('environmentID') as HTMLInputElement).value,
        description:  (document.getElementById('description') as HTMLInputElement).value,
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
                <label htmlFor='environmentID'>ID</label>
                <input type='text' id='environmentID'/>
            </p>
            <p>
                <label htmlFor='description'>Description</label>
                <input type='text' id='description'/>
            </p>
            <p>
                <label>&nbsp;</label> {/* Placeholder */}
                <button>Update</button>
            </p>
        </form>
    </div>
    )
}