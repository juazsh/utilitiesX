const { insertUpdateClient, getClientsToNotify_db } = require('./../db/repositories/client-repository');
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
    async function getClientsToNotify(){
        return await getClientsToNotify_db();
    }
    return { addUpdateClient, getClientsToNotify }
}
module.exports = clientManager();