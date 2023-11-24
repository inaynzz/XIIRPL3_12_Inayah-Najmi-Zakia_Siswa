const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Silahkan isikan nama'],
        unique: true
    },
    nis: {
        type: String,
        required: [true, 'Silahkan isikan nis'],
        unique: true
    },
    hobi: {
        type: String,
        required: [true, 'Silahkan isikan hobi'],
        unique: true
    },
    alamat: {
        type: String,
        required: [true, 'Silahkan isikan alamat'],
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }
})

module.exports = mongoose.model('Siswa', UserSchema)