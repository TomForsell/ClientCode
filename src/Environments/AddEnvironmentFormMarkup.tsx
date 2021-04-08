import React from "react";
import { useParams } from "react-router-dom";
import { RestClient } from "../RestClient";
import {Button, Input, Textarea, H2, H1, P} from '@dnb/eufemia'

export default function AddEnvrionmentFormMarkup(environment: any) {
    const [value, setValue] = React.useState(0) 
    const handleSubmit = (e: any) => {
    e.preventDefault();
    let environment = {
        description:  (document.getElementById('description') as HTMLInputElement).value,
    }
    RestClient.addEnvironment(environment)
              .then( () => {
                  window.alert('Nice work, you are helping DNB succeed!')
                  e.target.reset()
                  setValue(value => value + 1)     
              })
              .catch(err => alert(err))
}

return (
    <div>
        <h2>Add Environment</h2>
        <form onSubmit={handleSubmit}>
            <P>
                <label htmlFor='description'>Description</label>
                <input type='text' id='description'/>
            </P>
            <P>
                <label>&nbsp;</label> {/* Placeholder */}
                <button>Save</button>
            </P>
        </form>
    </div>
    )
    }