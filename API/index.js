const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const productRoutes = require('./routes/Products')
const userRoutes = require('./routes/User')
// const {firebaseConfig} = require ('./firebase')
// const { initializeApp } = require ("firebase/app")
// const {getFirestore} = require ('@firebase/firestore')

const port = 4000
app.listen(port,() => console.log(`Listening on port ${port}...`))

app.use(
    cors({
        origin: '*'
    })
)

//middleware
app.use(express.json())

app.use('/products', productRoutes)
app.use('/User', userRoutes)


//not found middleware
app.use('*', (req, res, next) => {
    res.status(404).json({ message: 'API not found' })
})

//error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({ message: 'there is something went wrong with your API' });
    next(err);
});

mongoose
.connect('mongodb://127.0.0.1:27017/amazonClone')
.then(()=>{
    console.log('connected to database');
})
.catch((err)=>{
    console.log(err);
})


// Initialize Firebase
// try {
//     const fireBaseApp = initializeApp(firebaseConfig);
//     const db = getFirestore(fireBaseApp);
//     console.log('Connected to Firebase successfully');
// } catch (error) {
//     console.error('Error connecting to Firebase:', error);
// }