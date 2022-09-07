import Users from "../models/Users.js";

export const getUsers = async (req, res) => {
  try {
    const user = await Users.findAll();
    if (user.length === 0) {
      return res.status(400).json({
        success: false,
        msg: "User tidak ditemukan!",
      });
    }

    res.status(200).json({
      status: true,
      data: user,
    });
  } catch (e) {
    res.status(400).json({
      status: false,
      message: e.message,
    });
  }
};
