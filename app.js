const express =  require('express')
const app = express();
/**loger file */
const logger = require('./config/logger')
/**database file */
require('./db')
/** envorment*/
require('dotenv').config()

/**routes */
const routes = require('./routes/studentRoutes')
app.use(express.json());

app.use((req,res,next)=>{
    logger.info(req.body)
    next()
})

app.use(routes)



/*listing port */
app.listen(3000,()=>{
    logger.log('info',`server is run up on port ${process.env.PORT}`)
})