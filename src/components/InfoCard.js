import React, { Fragment, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import axios from '../axios'
import Loading from './Loading'
import Map from './Map'

const InfoCard = () => {
    const location = useLocation()

    const queryParams = new URLSearchParams(location.search)
    const countryParam = queryParams.get('country')

    const [ country, setCountry ] = useState('')
    const [ loadingStatus, setLoadingStatus ] = useState('none')
    const [ latlong, setLanlong ] = useState({})

    useEffect(() => {
        setLoadingStatus('pending')
        axios.get(`/country/all/${countryParam}`)
            .then(response => {
                const [ lat, lng ] = response.data[0].latlng
                setLanlong({ lat:lat, lng: lng })
                setCountry(response.data)
                setLoadingStatus('complete')
            })
            .catch(error => {
                setLoadingStatus('error')
            })
    }, [ countryParam ])

    const toNumber = n => n.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")

    let countryInfo = null
    if(country !== '') {
        countryInfo = country.map(info => (
            <div className='infocard-main' key={info.id}>
                <div>
                    <p>Country Name: {info.name}</p>
                    <p>Native Name: {info.nativeName}</p>
                    <p>Demonym: {info.demonym}</p>
                    <p>Capital City: {info.capital}</p>
                    <p>Population: {toNumber(info.population)}</p>
                    <p>Language(s): {info.languages[0].name} ({info.languages[0].nativeName})</p>
                    <p>Currencies: {info.currencies[0].name} ({info.currencies[0].symbol})</p>
                    <p>Web Domain: {info.topLevelDomain}</p>
                </div>
                <img className='infocard-img' src={info.flag} alt='infocard'/>
            </div>
        ))
    }

    return (
        <Fragment>
            { loadingStatus === 'pending' && <Loading /> }
            { loadingStatus === 'error' && <div>Something wrong happened!</div> }
            { loadingStatus === 'complete' && (
                <div className='infocard'>
                    <div className='infocard-box'>
                        {countryInfo}

                        <Map 
                            latlong={ latlong }
                            country={ country[0].name }
                        />
                    </div>
                </div>
            ) }

            
        </Fragment>
    )
}

export default InfoCard