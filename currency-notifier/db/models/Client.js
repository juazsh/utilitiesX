const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    _id : {
      type: String,
      required: true
    },
    email: {
        type: String,
        required: true
    },
    currency :{
        type: String,
        required: true
    },
    threshold:{
        type: Number,
        required: true
    },
    notified: {
        type: Boolean,
        required: true
    },
    recurring: {
        type: Boolean,
        required: true
    },
    notificationCount: {
        type: Number,
        required: true
    }
}, {timestamps: {}});

mongoose.model('Clients', ClientSchema);