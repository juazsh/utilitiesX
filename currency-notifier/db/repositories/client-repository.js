const mongoose = require('mongoose');
const Clients = mongoose.model('Clients');
function clientRepository(){
    async function insertUpdateClient(_id, client){
        return Clients.findOneAndUpdate({_id},
            {...client},
            {new: true, useFindAndModify: false, upsert: true}).lean();
    }
    async function getClientsToNotify_db(){
        return Clients.find({$or : [{recurring: true}, {notified: false} ]})
            .lean();
    }
    return { insertUpdateClient, getClientsToNotify_db }
}
module.exports = clientRepository();