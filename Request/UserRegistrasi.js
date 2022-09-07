import { body } from "express-validator";

export const UserRegistrasi = [
  body("name").notEmpty().withMessage("Nama tidak boleh kosong!"),
  body("jenis_kelamin").notEmpty().withMessage("Jenis Kelamin tidak boleh kosong!"),
  body("email")
    .notEmpty()
    .withMessage("Email tidak boleh kosong!"),
  body("password")
    .isLength({
      min: 6,
    })
    .withMessage("Password minimal 6 karakter!"),
];
