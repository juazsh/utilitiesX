const mongoose = require('mongoose');
const Clients = mongoose.model('Clients');
function clientRepository(){
    async function insertUpdateClient(_id, client){
        return Clients.findOneAndUpdate({_id},
            {...client},
            {new: true, useFindAndModify: false, upsert: true}).lean();
    }
    return { insertUpdateClient }
}
module.exports = clientRepository();