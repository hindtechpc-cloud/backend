import { body } from "express-validator";

export const userValidator = [
  body("name")
    .notEmpty()
    .withMessage("name is required")
    .trim()
    .isAlpha()
    .withMessage("name must be only string")
    .isLength({
      minLength: 5,
      maxLength: 50,
    })
    .withMessage("name lenth only between 5 to 50 charactors"),
  body("email")
    .isEmail()
    .withMessage("please provide valid email")
    .normalizeEmail(),
  // body("password")
  //   .isLength({
  //     min: 8,
  //     max: 16,
  //   })
  //   .withMessage("password lenth only betwenn 8 to 16 charactors")
  //   .isStrongPassword()
  //   .withMessage(
  //     "password have must a number, capital letter, small letter and spacial charactor"
  //   ),
  body("salary")
    .notEmpty()
    .withMessage("salary  is required")
    .isLength({
      min: 5,
    })
    .withMessage("minimum salary is 10000")
    .isNumeric()
    .withMessage("please enter salary only in numeric value"),
  body("address").notEmpty().withMessage("address is required"),
  body("role")
    .notEmpty()
    .withMessage("role is required")
    .isIn(["mern dev", "laravel dev", "python dev", "java dev"])
    .withMessage(
      `please select only "mern dev","laravel dev","python dev","java dev"`
    ),
];

// notEmpty()
// isEmail()
// isNumeric()
// isAlpha()
// isAlphanumeric()
// trim()
// ltrim()
// rtrim()
// normlizeEmail();
// isDate()
