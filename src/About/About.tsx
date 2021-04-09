import React from "react";
import { Div, H1, Li, Ul} from '@dnb/eufemia'

function About() {

    return (
        <Div top="medium" left="medium">
            <H1> About Assignment 2 </H1>
            
            <Ul>
                <Li>How we worked</Li>
                    <Ul>
                        <Li>MVP/Slicing</Li>
                        <Li>Divided in two</Li>
                    </Ul>
                <Li>Our database structure</Li>
                <Li>Walk through key features in our code (both the client-side and server-side)</Li> 
                <Li>Discuss your approach to testing</Li>
                    <Ul>
                        <Li>Sever side:</Li>
                            <Ul>
                                <Li>Advanced REST client</Li>
                                <Li>Unit tests</Li>
                            </Ul>
                    </Ul>
                    <Ul>
                        <Li>Client side:</Li>
                            <Ul>
                                <Li>No writen tests. Haven't learned yet</Li>
                                <Li>Debuged with inspect mode and refresh</Li>
                            </Ul>
                    </Ul>
                <Li>Limitations and possible extensions</Li>
                    <Ul>
                        <Li>Login and admin</Li>
                        <Li>Paging</Li>
                        <Li>Find configuration data within a timeframe</Li>
                        <Li>Handling exceptions</Li>
                        <Li>Tests on client side</Li>
                    </Ul>
                   
            </Ul>
        
            <p> &copy; Tom and Marina </p>
        </Div>
    )
} export default About;