import boom from 'boom'
import {sign} from '../helpers/games'
import upload from '../helpers/upload'

export const auth = (req, res, next) =>
  req.models.games.authenticate(req.body)
  .then(jwt => res.json(jwt))
  .catch(err => {
    if (err.toString().match(/Bad Credentials/g)) return next(boom.wrap(err, 400))
    next(boom.wrap(err, 500))
  })

export const create = (req, res, next) =>
  req.models.games.create({...req.body, games: req.games._id})
  .then(games => res.json(games))
  .catch(err => next(boom.wrap(err, 400)))

export const list = (req, res, next) =>
  req.models.games.find({}, '-password').exec()
  .then(gamess => res.json(gamess))
  .catch(err => next(boom.wrap(err, 500)))

export const show = (req, res, next) =>
  req.models.games.findOne({...req.query}, '-password').exec()
  .then(gamess => res.json(gamess))
  .catch(err => next(boom.wrap(err, 500)))

export const register = (req, res, next) => {
  if (!req.body) return next(boom.wrap(new Error('no data'), 400))
  const role = 'role_games'
  return upload(req).then(input => req.models.games.create({...input, role}))
  .then(games => sign(games))
  .then(jwt => res.json(jwt))
  .catch(err => next(boom.wrap(err, 400)))
}
