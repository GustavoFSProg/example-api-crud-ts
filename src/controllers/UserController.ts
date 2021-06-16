import UserModel from '../models/UserModel'
import { Request, Response } from 'express'
import md5 from 'md5'
import dotenv from 'dotenv'

dotenv.config()

async function UserRegsiter(req: Request, res: Response) {
  try {
    await UserModel.create({
      name: req.body.name,
      email: req.body.email,
      password: md5(req.body.password, process.env.SECRET as string & { asBytes: true }),
    })

    return res.status(201).send({ Message: 'User Created succssesfuly !!!' })
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function getAll(req: Request, res: Response) {
  try {
    const data = await UserModel.find()

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send({ error })
  }
}

export default { getAll, UserRegsiter }
