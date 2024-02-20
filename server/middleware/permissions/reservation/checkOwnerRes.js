
import Reservation from "../../../models/Reservation.js";


const checkOwnerRes = async (req)=>{
    try {
        const reservation = await Reservation.findOne({_id:req.params.resId, uid:req.user.id});
        if(reservation) return true 
        return false
    } catch (error) {
        console.log(error)
        return 'error'
    }
}

export default checkOwnerRes;