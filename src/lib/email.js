import emailjs from 'emailjs-com'

/**
 * Template id should be added to the enviorment 
 * variable 
 */

const sendEmail = ({ name, email, message }) => {
    emailjs.send(
        'default_service',
        'template_H4uxiwmf',
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

export { sendEmail }