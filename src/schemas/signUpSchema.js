import Joi from "joi";

const signUpSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required().messages({
    "string.empty": "Please enter your username",
    "string.min": "Username must be at least 3 characters long",
    "string.max": "Username must be at most 30 characters long",
    "string.alphanum": "Username can only contain letters and numbers",
  }),

  email: Joi.string().email({ tlds: false }).required().messages({
    "string.empty": "Please enter your email address",
    "string.email": "Please enter a valid email address",
  }),

  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required()
    .messages({
      "string.empty": "Please enter your password",
      "string.pattern.base":
        "Password must be 3–30 characters and use only letters or numbers",
    }),
});

export { signUpSchema };
