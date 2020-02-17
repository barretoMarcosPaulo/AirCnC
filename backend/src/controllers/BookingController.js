const Booking = require('../models/Booking')

module.exports = {
    async store(req, res){
        const {date} = req.body
        const {spot_id} = req.params
        const {user_id} = req.headers

        const booking = await Booking.create({
            date,
            user: user_id,
            spot: spot_id,
        })
        return res.json(booking)
    }
}

