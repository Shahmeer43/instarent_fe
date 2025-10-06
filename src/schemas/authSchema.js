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
    .min(8)
    .max(30)
    .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*]).+$"))
    .required()
    .messages({
      "string.empty": "Please enter your password",
      "string.min": "Password must be at least 8 characters long",
      "string.pattern.base":
        "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character",
    }),
});

const signInSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required().messages({
    "string.empty": "Please enter your email address",
    "string.email": "Please enter a valid email address",
  }),

  password: Joi.string().required().messages({
    "string.empty": "Please enter your password",
  }),

  rememberMe: Joi.boolean().default(false),
});

export { signUpSchema, signInSchema };
