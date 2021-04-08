import React from "react";
import { RestClient } from "../RestClient";
import {Button, Input, Textarea, H2, H1, P} from '@dnb/eufemia'

export default function AddEnvrionmentForm(environment: any) {
    const [value, setValue] = React.useState(0) 
    const handleSubmit = (e: any) => {
    e.preventDefault();
    let environment = {
        description:  (document.getElementById('addDescription') as HTMLInputElement).value,
    }
    RestClient.addEnvironment(environment)
              .then( () => {
                  window.alert('Added - you are helping DNB succeed!')
                  e.target.reset()
                  window.location.reload()
                  setValue(value => value + 1)     
              })
              .catch(err => alert(err))
}

return (
    <div>
        <H2>Add Environment</H2>
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor='addDescription'>Description</label>
                <input type='text' id='addDescription'/>
            </p>
            <p>
                <label>&nbsp;</label> {/* Placeholder */}
                <button>Save</button>
            </p>
        </form>
    </div>
    )
    }