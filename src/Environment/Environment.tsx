import React from "react";
import { useParams } from "react-router-dom";
import { RestClient } from "../RestClient";
import {Button, Input, Textarea, H2, H1, P} from '@dnb/eufemia'

export default function Environment() {

    let {id}: any = useParams();
    let [environment, setEnvironment] = React.useState<any>(undefined)

    React.useEffect(() => {
        RestClient.getEnvironment(id)
                  .then(environment => setEnvironment(environment))
                  .catch((err: any) => alert(err))
    }, [id])
    
    if (environment) {
        return (
            <React.Fragment>
                <EnvironmentDetails {...environment} />
                <EnvironmentConfigureData {...environment} />
            </React.Fragment>
        )
    } else {
        return <P>...</P>
    }

    function EnvironmentDetails(environment: any) {
        return (
            <div>
                <H1>{environment.description}</H1>
            </div>
        )
    }

    function EnvironmentConfigureData(environment: any) {
        return (
            <React.Fragment>
                {useConfigDataMarkup(environment)}
                {useAddConfigureDataFormMarkup(environment)}
            </React.Fragment>
        )
    }

    function useConfigDataMarkup(environment: any) {
        if (!environment.configDataList || !environment.configDataList.length) {
            return <div>No configuration data yet, sorry!</div>
        }
        else {
            return (
                <div>
                    <H2>Configuration data</H2>
                    {environment.configDataList.map((c: any, i: number) => 
                        <P key={i}>
                            <span className='keyName'>{c.keyName}</span>
                            <span className='configValue'>{c.value}</span>
                        </P>
                    )}
                </div>
            )
        }
    }

    function useAddConfigureDataFormMarkup(environment: any) {
        
        const [value, setValue] = React.useState(0) 

	    const handleSubmit = (e: any) => {
		e.preventDefault();
		let configData = {
			keyName:  (document.getElementById('keyName') as HTMLInputElement).value,
			configValue: (document.getElementById('configValue') as HTMLInputElement).value,
		}
		RestClient.addConfigData(environment.id, configData)
		          .then( () => {
					  window.alert('Nice work, you are helping DNB succeed!')
					  e.target.reset()
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
					<label htmlFor='keyName'>Key Name</label>
					<Input type='text' id='keyName'/>
				</p>
				<p>
					<label htmlFor='configValue'>Configuration Value</label>
					<Textarea id='comment' rows={3} cols={20}/>
				</p>
				<p>
					<label>&nbsp;</label> {/* Placeholder */}
					<Button>Save</Button>
				</p>
			</form>
		</div>
	    )
    }
}

