
import express from "express";
import User from "../models/user.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get(
  "/profile",
  protect,
  async (req, res) => {
    try {
      const user = await User.findById(
        req.user.id
      ).select("-password");

      res.json(user);
    } catch (error) {
      res.json({
        error: error.message,
      });
    }
  }
);

router.put(
  "/profile",
  protect,
  async (req, res) => {
    try {
      const user = await User.findById(
        req.user.id
      );

      if (user) {
        user.name =
          req.body.name || user.name;

        user.email =
          req.body.email || user.email;

        const updatedUser =
          await user.save();

        res.json(updatedUser);
      } else {
        res.json({
          message: "User not found",
        });
      }
    } catch (error) {
      res.json({
        error: error.message,
      });
    }
  }
);

export default router;