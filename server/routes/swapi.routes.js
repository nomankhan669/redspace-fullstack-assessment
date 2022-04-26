import { Router } from "express";
import { GetPerson } from "../controllers/swapi.controller.js";
const SwapiRoutes = Router();

SwapiRoutes.get('/getPerson/:id', GetPerson);

export default SwapiRoutes;