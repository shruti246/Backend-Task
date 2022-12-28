const Joi  = require('joi')

function stundentValidation(data){
   const schema = Joi.object({
        name:Joi.string()
        .min(2)
        .max(10)
        .required().pattern(new RegExp(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/)).messages({"string.pattern.base":"Invalid Name",
        "string.min":"minimum 2 character required",
        "string.max":"maximum 30 characters allowed"}),
        gender:Joi.string().required().valid('male', 'female','transger', 'others'),
        address:Joi.string().min(5).required().messages({ "any.required": "address is required" }),
        dob : Joi.date().required()
   })
   return schema.validate(data, {errors: {label: 'key', wrap: {label: false}}})
}


module.exports = {stundentValidation}