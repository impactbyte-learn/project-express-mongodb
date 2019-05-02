const mongoose = require('../../configs/mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)
const uniqueValidator = require('mongoose-unique-validator')

// Schema of User
const UserSchema = mongoose.Schema(
  {
    name: {
      type: String
    },
    username: {
      type: String,
      unique: true
    },
    email: {
      type: String,
      unique: true
    },
    phone: {
      type: String,
      unique: true
    },
    todos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Todo'
      }
    ]
  },
  {
    timestamps: true
    // createdAt
    // updatedAt
  }
)

// plug the AutoIncrement plugin into the schema to create auto incremented id
// id is different with _id
// inc_field is to track which id to increment
UserSchema.plugin(AutoIncrement, {
  id: 'users_counter',
  inc_field: 'id'
})

UserSchema.plugin(uniqueValidator)

// User model => users collection
const User = mongoose.model('User', UserSchema)

module.exports = User
