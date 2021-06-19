import Map from 'google-map-react'

const Marker = () => <div className='map_marker'></div>;

const GoogleMaps = props => (
    <div className='map_container'>
        <p className='map_title'>Location on Map</p>
        <Map
            bootstrapURLKeys={{ key: 'AIzaSyAqLCxomoHgjsJVwiklmlvEjYHgXmJVNT4' }}
            defaultCenter={ props.latlong }
            defaultZoom={ 6 } >

            <Marker />
        </Map>
    </div>
)

export default GoogleMaps