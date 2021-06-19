import React, {Fragment, useState, useEffect} from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import axios from '../axios'
import CountryCard from './CountryCard'
import Loading from './Loading'
import ErrorMessage from './ErrorMessge'

const Search = () => {
    const history = useHistory()
    const location = useLocation()

    const [ country, setCountry ] = useState('')
    const [ countryData, setCountryData ] = useState(null)
    const [ loadingStatus, setLoadingStatus ] = useState('none')
    const [ message, setMessage ] = useState('')

    const queryParams = new URLSearchParams(location.search)
    const recievedCountry = queryParams.get('country')

    useEffect(() => {
        if(recievedCountry && countryData === null) {
            setLoadingStatus('pending')
            axios.get(`/country/${recievedCountry}`)
                .then(response => {
                    setCountryData(response.data)
                    setLoadingStatus('complete')
                })
                .catch(() => {
                    setLoadingStatus('error')
                })
        }
    }, [recievedCountry, countryData, setCountryData, setLoadingStatus])

    const submitHandler = () => {
        if(country) {
            setCountryData(null)
            history.push(`/search?country=${country}`)
        } else {
            setMessage('The text field is empty')
        }
    }

    let countries = null
    if(countryData) {
        countries = countryData.map(country => (
            <CountryCard 
                key={country.id}
                name={country.name}
                flag={country.flag}
            />
        ))
    }

    return (
        <Fragment>
            <main className='description'>
                <p>Type a country and explore about it</p>

                { message && <p className='alert'>{message}</p> }

                <div className='search-container'>
                    <span className='search-box'>
                        <img src='https://img.icons8.com/color/search' className='search-img' alt='search icon'/>
                    </span>
                    <input 
                        type='text' 
                        className='search-input' 
                        onChange={ evt => setCountry(evt.target.value) }
                        value={ country }
                    />
                    <button 
                        className='search-button'
                        onClick={ submitHandler }
                    >Submit</button>
                </div>

                { loadingStatus === 'pending' && <Loading /> }
                { loadingStatus === 'error' && <ErrorMessage />}
            </main>
            <div style={{marginTop: '1rem',flexWrap: 'wrap',display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'space-evenly'}}>
                {countries}
            </div>
            
        </Fragment>
    )
}

export default Search