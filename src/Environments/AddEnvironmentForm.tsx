import React from "react";
import { RestClient } from "../RestClient";
import {Button, Input, H2, H1, P} from '@dnb/eufemia'

export default function AddEnvrionmentForm(environment: any) {
    const [value, setValue] = React.useState(0) 
    const handleSubmit = (e: any) => {
    let environment = {
        description:  (document.getElementById('addDescription') as HTMLInputElement).value,
    }
    RestClient.addEnvironment(environment)
              .then( () => {
                  window.alert('Added - you are helping DNB succeed!')
                  window.location.reload()
                  setValue(value => value + 1)     
              })
              .catch(err => alert(err))
}

return (
    <div>
        <H2>Add Environment</H2>
        <form>
            <P top="small">
                <Input label="Description:" type='text' id='addDescription' right="small"/>
                <Button on_click={handleSubmit}>Save</Button>
            </P>
        </form>
    </div>
    )
    }