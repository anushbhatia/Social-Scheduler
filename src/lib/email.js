import emailjs from 'emailjs-com'

/**
 * Template id should be added to the enviorment 
 * variable 
 * REACT_APP_EMAIL_TEMPLATE_ID = template id from emailjs dashboard
 */

const sendEmail = ({ name, email, message }) => {
    emailjs.send(
        'default_service',
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        {
            message: message,
            name: name,
            email: email
        }
    ).then(res => {
        return { successfull: true, res, message: 'Email successfully created' }
    }).catch(err => {
        return { successfull: false, err, message: 'Some error occured' }
    })
}

export default sendEmail