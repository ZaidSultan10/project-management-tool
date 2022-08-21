const mongoose = require('mongoose')
const moment = require('moment')

const auditTrailSchema = mongoose.Schema({
    loginTime: {
        type: Date,
        default: moment().format('YYYY-MMM-DD HH:mm:ss')
    },
    comment: String,
    createdAt: {
        type: Date,
        default: moment().format('YYYY-MMM-DD HH:mm:ss')
    },
})

const Audit_Trails = mongoose.model('auditTrail',auditTrailSchema)

module.exports = Audit_Trails