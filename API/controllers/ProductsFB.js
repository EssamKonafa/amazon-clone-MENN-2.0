// const fireBaseApp = require('../index')
// const { getFirestore, collection, addDoc, getDocs } = require('@firebase/firestore')

// class Products {
//     constructor() {
//         this.db = getFirestore(fireBaseApp)
//         this.collectionName = 'products'
//     }


// async addProduct(req, res){
//     try {
//             const {category, title, description, image, price} = req.body

//             prdDoc = await addDoc(collection(this.db, this.collectionName),{
//                 category: category,
//                 title: title,
//                 description: description,
//                 image: image,
//                 price: price
//             })
//             console.log('product added with ID:', prdDoc.id);
//             console.log('product added successfully :', prdDoc);
//             res.status(200).json({message: 'Product added successfully', prdDoc })
//     } catch(err){
//         console.error('error adding prd', err)
//         res.status(500).json({message: 'error adding prd'})
//     }
// }
// }

// module.exports = Products