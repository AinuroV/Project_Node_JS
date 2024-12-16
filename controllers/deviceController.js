
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')
const {Device} = require('../models/models')

class DeviceController{
    async create(req, res, next){

        try {
            const {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', fileName))
    
            const device = await Device.create({name, price, brandId, typeId, img: fileName})
            return res.json(device)
        }
            
         catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getAll(req, res){
        
    }
   
    async getONe(req, res){
            
    }
      
}

module.exports = new DeviceController()