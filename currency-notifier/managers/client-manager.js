const { insertUpdateClient } = require('./../db/repositories/client-repository');
function clientManager() {
    async function addUpdateClient(client){
        const _id = `${client.email}_${client.currency}`;
        return await insertUpdateClient(_id, {
            ...client,
            _id,
            recurring: false,
            notificationCount: 0,
            notified: false
        });
    }
    return { addUpdateClient }
}
module.exports = clientManager();