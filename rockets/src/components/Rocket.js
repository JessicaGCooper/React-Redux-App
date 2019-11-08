import React from 'react'

const Rocket = props => {
    console.log('Rocket', props)
    return (
        <div>
            <section>
                <div className="imageContainer">
                    <img></img>
                </div>
                <div>
                    <h1>{props.rocket.rocket_name}</h1>
                    <h3>Country: {props.rocket.country}</h3>
                    <h3>Date of First Flight: {props.rocket.first_flight}</h3>
                    <h3>Cost Per Launch: ${props.rocket.cost_per_launch}</h3>
                    {(props.rocket.active === true) ? <h3>Currently Active:  Yes</h3> : <h3>Currently Active:  No</h3>}
                </div>
            </section>
            <section>
                <p>Description: {props.rocket.description}</p>
                <a href={props.rocket.wikipedia}>Wikipedia Link</a>
            </section>
        </div>
    )
}

export default Rocket
