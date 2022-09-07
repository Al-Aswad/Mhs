import Users from "../models/Users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

export const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  const {
    name,
    email,
    password,
    confirmPassword,
    jenis_kelamin,
    alamat,
    agama,
    latitude,
    Longitude,
  } = req.body;

  if (password !== confirmPassword)
    return res.status(400).json({ msg: "Password tidak sama!" });

  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await Users.create({
      name,
      email,
      password: hashPassword,
      jenis_kelamin,
      alamat,
      agama,
      latitude,
      Longitude,
    });

    res.json({ msg: "User berhasil ditambahkan!" });
  } catch (e) {
    res.status(400).json({ msg: "User gagal ditambahkan!" });
  }
};



export const login = async (req, res) => {
    try {

        const user = await Users.findOne({
            where: {
                email: req.body.email
            }
        });

        if (!user) {
            return res.status(400).json({
                success: false,
                msg: "Email tidak terdaftar!"
            });
        }
        
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) return res.status(400).json({ msg: "Password salah!" });

        const accessToken = jwt.sign({
            id: user.id,
            name: user.name,
            email: user.email
        }, process.env.JWT_SECRET, { expiresIn: "20s" });
        // res.json({ accessToken });
        const refreshToken = jwt.sign({
            id: user.id,
            name: user.name,
            email: user.email
        }, process.env.JWT_REFREST_TOKEN, { expiresIn: "1d" });
        // res.json({ accessToken, refreshToken });
        await Users.update({ refresh_token: refreshToken }, {
            where: {
                id: user.id
            }
        });
        // res.json({})
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            path: "/"
        });

        res.json({
            accessToken,
            // refreshToken
        });

    } catch (e) {
        res.status(400).json({ msg: e });
    }
}