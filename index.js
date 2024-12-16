require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models.js')
const cors = require('cors')
const router = require('./routes/index.js')
const PORT = process.env.PORT || 3000
const errorHandler = require('./midlleware/ErrorHandlingMiddleware.js')
const fileUpload = require('express-fileupload')

const app = express()
app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)

app.use(errorHandler)
//Функция подключения к бд
const start = async() => {
    try {
        await sequelize.authenticate()// подключение к бд
        await sequelize.sync()
        app.listen(PORT, () => { console.log(`Server started on port ${PORT}`)})
        
    } catch (error) {
        console.log(error)
    }
}                            

start()