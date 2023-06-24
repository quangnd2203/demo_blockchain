const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    key: {type: String, require: [true, 'key_is_require'], trim: true, unique: true},
    value: {type: Object, require: [true, 'value_is_require'], trim: true},
}, {
    timestamps: true,
    statics: {

        fromJson (json) {
            return {
                key: json.key,
                value: json.value,
                background: json.background,
                createdAt: json.createdAt,
                updatedAt: json.updatedAt,
            }
        },
    
        async updateKey (key, value){
            var config;
            try {
                config = await this.findOneAndUpdate({
                    key: key,
                }, {
                    value: value,
                }, {
                    new: true,
                });
                if(config == null) throw Error();
            } catch (err) {
                config = await this.create({
                    key: key,
                    value: value,
                });
            }
            return config;
        },

        async getByKey (key){
            const config = await this.findOne({
                key: key
            });
            return config;
        },

        async getAllConfig() {
            return this.find();
        }
    }
});

module.exports = mongoose.model('ConfigModel', schema);;