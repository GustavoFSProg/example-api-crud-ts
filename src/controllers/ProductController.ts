import { Request, Response } from 'express'
import productModel from '../models/productModel'

async function getAll(req: Request, res: Response) {
  try {
    const data = await productModel.find()
    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send({ message: 'DEU ERRO!' })
  }
}

async function ProductRegister(req: Request, res: Response) {
  try {
    const { filename: image } = req.file

    const [name] = image.split('.')
    const filename = `${name}.jpg`
    await productModel.create({
      title: req.body.title,
      price: req.body.price,
      image: filename,
    })

    return res.status(201).send({ message: 'Product Created with success!' })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function Update(req: Request, res: Response) {
  try {
    await productModel.findByIdAndUpdate(req.params.id, {
      $set: {
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
      },
    })

    return res.status(201).send({ message: 'Product Editado com success!' })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function deleteOne(req: Request, res: Response) {
  try {
    await productModel.findByIdAndRemove(req.params.id)

    return res.status(200).send({ message: 'Product deleted with succes!!' })
  } catch (error) {
    return res.status(200).send({ error })
  }
}

export default { getAll, ProductRegister, deleteOne, Update }
