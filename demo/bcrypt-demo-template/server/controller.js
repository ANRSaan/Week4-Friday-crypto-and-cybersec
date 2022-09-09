const bcrypt = require('bcryptjs')
const chats = []

module.exports = {

    createMessage: (req, res) => {
        // console.log(req.body)
        const {pin, message} = req.body
        
        for(let i = 0; i < chats.length; i++){
            const existingPin = bcrypt.compareSync(pin, chats[i].pinHash)
            
            if(existingPin){
                chats[i].messages.push(message)

                let existingSecureMessage = {...chats[i]}
                delete existingSecureMessage.pinHash

                return res.status(200).send(existingSecureMessage)
            }

        }

        const salt = bcrypt.genSaltSync(5)
        const pinHash = bcrypt.hashSync(pin, salt)
        
        let msgObj = {
            pinHash,
            messages: [message]
        }

        chats.push(msgObj)

        let securedMessage = {...msgObj}
        delete securedMessage.pinHash

        console.log(chats)

        res.status(200).send(securedMessage)
        // console.log(pin)
        // console.log(salt)
        // console.log(pinHash)
    }
}