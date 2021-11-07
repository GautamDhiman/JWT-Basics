const login = async(req, res) => {
    res.send('Login route!')
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random()*100)

    res.status(200).json({ msg: `Hello`, secret: `here is your authorized data, ${luckyNumber}`});
}

module.exports = { login, dashboard }