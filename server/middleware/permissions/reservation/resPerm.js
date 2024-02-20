import checkOwnerRes from "./checkOwnerRes.js";



const resPerm = {
    update:{
        roles:['admin', 'editor','basic'],
        owner: checkOwnerRes,
    },
    delete:{
        roles:['admin', 'editor','basic'],
        owner: checkOwnerRes,
    },
    create:{
        roles:['admin', 'editor','basic'],
        owner: checkOwnerRes,
    },
}

export default resPerm;