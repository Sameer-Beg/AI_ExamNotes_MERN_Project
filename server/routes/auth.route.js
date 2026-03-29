import express from "express"
import { googleAuth, logOut } from "../controllers/auth.controller.js"

const authRouter =  express.Router()


// google auth route 
authRouter.post("/google" , googleAuth)
// logout aoute 
authRouter.get("/logout" , logOut)

export default authRouter