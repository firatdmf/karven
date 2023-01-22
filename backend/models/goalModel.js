const mongoose = require('mongoose');

//with every goal you need to know which user created that goal
const goalSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        reference:'User', //name of the model for object id to reference to

    },
    text: {
        type: String,
        required: [true,'Please add a text value']

    },
},{
    timestamps: true,
})

module.exports = mongoose.model('Goal',goalSchema)

