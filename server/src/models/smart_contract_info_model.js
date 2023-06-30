const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    contractName: {type: String, require: [true, 'contract_name_is_require'], trim: true, unique: true},
    info: {type: Object, require: [true, 'info_is_require'], trim: true},
}, {
    timestamps: true,
    statics: {

        fromJson (json) {
            return {
                contractName: json.contractName,
                info: json.info,
                background: json.background,
                createdAt: json.createdAt,
                updatedAt: json.updatedAt,
            }
        },
    
        async updateContract (contractName, info){
            var contractInfo;
            try {
                contractInfo = await this.findOneAndUpdate({
                    contractName: contractName,
                }, {
                    info: info,
                }, {
                    new: true,
                });
                if(contractInfo == null) throw Error();
            } catch (err) {
                contractInfo = await this.create({
                    contractName: contractName,
                    info: info,
                });
            }
            return contractInfo;
        },

        async getInfoByName (contractName){
            const config = await this.findOne({
                contractName: contractName
            });
            return config;
        },

        async getAllContract() {
            return this.find();
        }
    }
});

module.exports = mongoose.model('smart_contract_info', schema);;