const { title } = require('process')
const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.INTEGER},
    role: {type:DataTypes.STRING, defaultValue: "USER"},
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, 
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.INTEGER},
    role: {type:DataTypes.STRING, defaultValue: "USER"},
})

const BasketDevice = sequelize.define('basket_device', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
})

const Device = sequelize.define('device', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rairing: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull:false}
})

const DeviceInfo = sequelize.define('device_info', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull:false}

})

const Raiting = sequelize.define('raiting', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, 
    rate: {type: DataTypes.INTEGER, allowNull: false}
})
const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, 
    name: {type: DataTypes.STRING, unique: true,} //allowNull: false} //alowNull выдает ошибку 
})

const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User .hasMany(Raiting);
Raiting.belongsTo(User);

User .hasOne(Basket);
Basket.belongsTo(User);

Basket.hasMany(BasketDevice);
BasketDevice.belongsTo(Basket);

Type.hasMany(Device);
Device.belongsTo(Type);

Device.hasMany(DeviceInfo);
DeviceInfo.belongsTo(Device);

Device.hasMany(Raiting);
Raiting.belongsTo(Device);

Brand.hasMany(Device);
Device.belongsTo(Brand);

Device.hasMany(BasketDevice);
BasketDevice.belongsTo(Device);

Device.hasMany(DeviceInfo);
DeviceInfo.belongsTo(Device);


Type.belongsToMany(Brand, { through: TypeBrand });
Brand.belongsToMany(Type, { through: TypeBrand });


module.exports = {
    User, 
    Brand, 
    Type, 
    Device,
    DeviceInfo,
    Basket,
    BasketDevice,
    Raiting, 
    TypeBrand,
}