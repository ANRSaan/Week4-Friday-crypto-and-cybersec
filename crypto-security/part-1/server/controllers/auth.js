const bcrypt = require('bcryptjs')
const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username){
        const existingPassword = bcrypt.compareSync(password, users[i].passwordHash)
          if(existingPassword) {
          let secUser = {...users[i]}
          delete secUser.passwordHash

          res.status(200).send(secUser)
          return
        }
      }
      res.status(400).send("User not found.")
    }
  },
    register: (req, res) => {
      const {username, email, firstName, lastName, password} = req.body
      const salt = bcrypt.genSaltSync(5)
      const passwordHash = bcrypt.hashSync(password, salt)

      let userObj = {
        username,
        email,
        firstName,
        lastName,
        passwordHash
      }

      let secUser = {...userObj}
      delete secUser.passwordHash

        console.log('Registering User')
        users.push(userObj)
        res.status(200).send(secUser)
    }
}