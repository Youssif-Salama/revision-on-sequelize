import { Router } from "express";
import { addNewUser } from "../controllers/users.controllers.js";
const router = Router();
router.post("/add", addNewUser);
export default router;