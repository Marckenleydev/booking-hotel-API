import express from "express";
import {  countByCity
  , countByType, 
  createHotel,
   deleteHotel,
    getHotel,
     getHotelRooms,
      getHotels,
       updateHotel,
        } from "../controllers/hotel.js";
import { updateRoomAvailability } from "../controllers/room.js";

import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//Create
router.post("/",verifyAdmin, createHotel)

//Update
router.put("/:id",verifyAdmin, updateHotel )

//Delete
router.delete("/:id",verifyAdmin, deleteHotel )

  //Get
  router.get("/find/:id", getHotel)

  // Get All
  router.put("/availability/:id", updateRoomAvailability);
  router.get("/", getHotels );
  router.get("/countByCity", countByCity );
  router.get("/countBytype", countByType );
  router.get("/room/:id", getHotelRooms);

export default router