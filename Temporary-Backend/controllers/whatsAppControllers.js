const WA = require('../helper-function/whatsapp-send-message');
const sendWhatsappMessage = async (req, res) => {  

  let message = req.body.Body;
  let senderID = req.body.From;

  console.log(message);
  console.log(senderID);

  // Write a function to send message back to WhatsApp
  await WA.sendMessage('Hello from the other side.', senderID);

}

exports.sendWhatsappMessage = sendWhatsappMessage;