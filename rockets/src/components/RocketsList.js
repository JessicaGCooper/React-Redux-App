import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import Rocket from './Rocket'
import { fetchRockets } from '../actions'

const RocketsList = props => {

    useEffect(() => {
        props.fetchRockets()
    }, [])
    
    if (props.isFetching) {
        //usualy a spinner (react-library-spinner)
        return <h2>Loading Rockets List...</h2>
    }
    
    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.rockets.map(rocket => (
                <Rocket  key={rocket.id} rocket={rocket} />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        rockets: state.rockets,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchRockets })(RocketsList)