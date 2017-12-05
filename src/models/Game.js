import mongoose, {Schema} from 'mongoose'
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import Promise from 'bluebird'
import omit from 'lodash/omit'

const {hashAsync} = Promise.promisifyAll(bcrypt)
const {signAsync} = Promise.promisifyAll(jsonwebtoken)
const BADCREDENTIALS = () => Promise.reject(new Error('Bad Credentials'))

const compare = (user, password) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, user.password, (err, res) => {
      if (err) return reject(new Error(err))
      if (res) return resolve(user)
      return reject(new Error('Bad Credentials'))
    })
  })
}

const GameSchema = Schema({
  name: String,
  company: String,
  description: String,
  rating: Number,
  image: String
})

GameSchema.pre('save', function (next) {
  
  })
})


export default mongoose.model('game', UserSchema, 'game')