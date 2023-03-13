const Joi = require("joi");

const contactValidation = (contact) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().min(3).max(30).required(),
    phone: Joi.string()
      .pattern(/^(?:\d{3}-\d{2}-\d{2}|\d{7})$/)
      .required(),
  });

  return schema.validate(contact);
};

module.exports = {
    contactValidation,
}