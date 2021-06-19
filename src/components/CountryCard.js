import React from 'react'
import {useHistory} from 'react-router-dom'

const CountryCard = ({ name, flag }) => {
    const history = useHistory()

    const countryInfoHandler = () => {
        history.push(`/info?country=${name}`)
    }

    return (
        <div className='card' onClick={countryInfoHandler}>
            <img src={flag} className='card-flag' alt={`${name} flag`}/>
            <div className='card-description'>
                <h3>{name}</h3>
                <span>Click to get more info.</span>
            </div>
        </div>
    )
}

export default CountryCard