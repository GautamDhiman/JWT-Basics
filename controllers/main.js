const jwt = require('jsonwebtoken')
const {BadRequest} = require('../errors/index')

const login = async(req, res) => {
    
    // console.log(req.body);
    const { username, password } = req.body;
    // console.log(username, password);

    if(!username || !password)
    {
        throw new BadRequest('Please provide valid email and password');
    }

    // demo id
    const id = new Date().getDate()

    const token = jwt.sign({id, username}, process.env.JWT_SECRET, { expiresIn: '30d' })

    res.status(200).json({ msg: 'User Created', token});
}

const dashboard = async (req, res) => {

    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({ msg: `Hello ${req.user.username}`, secret: `here is your authorized data, ${luckyNumber}`});
}

module.exports = { login, dashboard }