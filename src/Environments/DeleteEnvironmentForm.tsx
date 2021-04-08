import React from "react";
import { RestClient } from "../RestClient";
import {Button, Input, Textarea, H2, H1, P} from '@dnb/eufemia'

export default function DeleteEnvironmentForm(environment: any) {
        
    const [value, setValue] = React.useState(0) 

    const handleSubmit = (e: any) => {
    e.preventDefault();
    let environmentID = {
        environmentID:  (document.getElementById('environmentID') as HTMLInputElement).value,
    }
    RestClient.deleteEnvironment(environment.id)
              .then( () => {
                  window.alert('Deleted - you are helping DNB succeed!')
                  e.target.reset()
                  //TODO: Oppdatere skjerm?
                  setValue(value => value + 1)     
              })
              .catch(err => alert(err))
}

return (
    <div>
        <H2>Delete Environment</H2>
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor='environmentID'>ID</label>
                <input type='number' id='environmentID'/>
            </p>
            <p>
                <label>&nbsp;</label> {/* Placeholder */}
                <button>Delete</button>
            </p>
        </form>
    </div>
    )
}