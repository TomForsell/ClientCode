import React from "react";
import { RestClient } from "../RestClient";
import {Button, Input, Textarea, H2, H1, P} from '@dnb/eufemia'

export default function UpdateEnvrionmentForm(environment: any) {
    const [value, setValue] = React.useState(0) 
    const handleSubmit = (e: any) => {
    e.preventDefault();
    let updatedEnvironment = {
        id:           (document.getElementById('environmentID') as HTMLInputElement).value,
        description:  (document.getElementById('description') as HTMLInputElement).value,
    }
    RestClient.updateEnvironment(environment.id, updatedEnvironment)
              .then( () => {
                  window.alert('Updated - you are helping DNB succeed!')
                  e.target.reset()
                  //TODO: pushe til skjerm? 
                  setValue(value => value + 1)     
              })
              .catch(err => alert(err))
}

return (
    <div>
        <h2>Update Environment</h2>
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