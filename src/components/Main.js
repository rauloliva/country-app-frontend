import usaFlag from '../assets/images/united-state-flag.png'
import mexicoFlag from '../assets/images/mexico-flag.png'
import canadaFlag from '../assets/images/canada-flag.png'

const Main = () => (
    <div className='main'>
        <img src={ mexicoFlag } className='main_image image_left' alt='mexico flag'/>
        <img src={ usaFlag } className='main_image image_center' alt='usa flag'/>
        <img src={ canadaFlag } className='main_image image_right' alt='canada flag'/>
    </div>
)

export default Main