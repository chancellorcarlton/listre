require('dotenv').config();
const sequelize = require('./sequelize');
const bcrypt = require('bcrypt');

module.exports= {
    register: async (req, res) => {
        console.log('hit')
        // const db = req.app.get('db')
        const {username, first_name, last_name, password} = req.body
        //profile pic
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

    
}