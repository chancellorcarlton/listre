require('dotenv').config();
const sequelize = require('./sequelize');
const bcrypt = require('bcrypt');

module.exports= {
    register: async (req, res) => {
        console.log('hit')
        // const db = req.app.get('db')
        const {username, first_name, last_name, password} = req.body
        let checkUser = await sequelize.query(`
            SELECT * FROM users WHERE username = '${username}'
        `)

        if(checkUser[0].length !== 0){
            res.status(400).send('Username is already in use')
        } else {
            const salt = bcrypt.genSaltSync(10)
            const passHash = bcrypt.hashSync(password, salt)
            let userInfo = await sequelize.query(`
                INSERT INTO users (first_name, last_name, username, passhash) 
                VALUES ('${first_name}', '${last_name}', '${username}', '${passHash}')
                RETURNING *;
            `)
            console.log('HERE IS THE USER INFO', userInfo)
            res.status(200).send(userInfo);
        }
    },

    login: async (req, res) => {
        const {username, passhash} = req.body
        console.log(passhash)
        const validUser = await sequelize.query(`
        SELECT * FROM users
        WHERE username = '${username}'; `)
      .catch((err) => console.log(err))
        
      if(validUser[1].rowCount === 1) {
        console.log(validUser[0][0])
        if (bcrypt.compareSync(passhash, validUser[0][0].passhash)) {
          let object = {
            id: validUser[0][0].user_id,
            username: validUser[0][0].username, 
            first_name: validUser[0][0].first_name,
            last_name: validUser[0][0].last_name
    
          }
          res.status(200).send(object)
        } else {
          res.status(401).send('It looks like your password is incorrect')
        }
      } else {
        res.status(401).send('It looks like your username is incorrect.')
      }
      }
}