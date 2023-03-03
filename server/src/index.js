const express = require("express")
const mongoose = require("mongoose")
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors');
const dotenv = require("dotenv")
const app = express()
const bodyParser = require("body-parser")

const PostsRoutes = require('./Routes/Posts')
const SignUpRoutes = require('./Routes/SignUp')
const SignInRoutes = require('./Routes/SignIn')
const ProfileRoutes = require('./Routes/UserProfile')
const SearchRoutes = require('./Routes/search')
const PeopleRoutes = require('./Routes/People')

dotenv.config()
mongoose.set('strictQuery', false)
mongoose.connect(process.env.DataBase_URL, (err) => {
    if (err) console.log(err)
    else console.log("done")
})

app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(helmet())
app.use(morgan("common"))
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());

//
app.use("/api/SignUp", SignUpRoutes)
app.use("/api/SignIn", SignInRoutes)
app.use("/api/Profile", ProfileRoutes)
app.use("/api/Posts", PostsRoutes)
app.use("/api/Search", SearchRoutes)
app.use("/api/People", PeopleRoutes)


app.listen(process.env.PORT, () => console.log("server is running"))
