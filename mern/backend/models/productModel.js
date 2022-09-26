const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name : {
        type: String, 
        required: [true, "Please Enter product name"],
        trim: true
    },
    description : {
        type: String,
        required: [true, "Please Enter product Description"]
    },
    price : {
        type: Number,
        required: [true, "Please Enter Product Price"],
        maxLength: [6 , "Price cannot exceed 6 characters"]
    },
    rating : {
        type: Number,
        default: 0
    },
    // to host img we will use clound navi; [array of Object]
    images : [
        { 
            public_id : { 
                type: String, 
                required: true
            },
            url : { 
                type: String, 
                required: true
            }
        }
    ],

    category :{ 
        type : String,
        required: [true , "Please enter Product Category"],
    },
    stock : {
        type : Number,
        required : [true , "Please Enter Product Stock"],
        maxLength: [4 , "Stock cannot exceed 4 characters"],
        default : 1
    },
    numOfreviews : {
        type : Number,
        default : 0,
    },
    reviews : [
        { 
            name : { 
                type : String,
                required:true
            },
            rating :{
                type: Number,
                required:true,
            },
            comment :{
                type : String,
                required: true
            }
        }
    ],
    createdAt :{
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model("Product" , productSchema );