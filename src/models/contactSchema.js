const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  nomComplet: {
    type: String,
    required: true
  },
  adresseEmail: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
