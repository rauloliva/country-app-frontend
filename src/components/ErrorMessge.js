import errorImage from '../assets/images/error.png'

const ErrorMessage = () => (
    <div className='errorMessage'>
        <img src={ errorImage } className='errorMessage_image' alt='error icon'/>
        <p className='errorMessage_msg'>Something wrong happened!</p>
    </div>
)

export default ErrorMessage