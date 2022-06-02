import { Router } from "express";
import {
  saveTasks,
  deleteTasks,
  getTask,
  getTaskCount,
  getTasks,
  updateTasks,
} from "../controllers/tasks";
const router = Router();

/**
 * @swagger
 * /tasks:
 * get:
 *  summary: Get all the tasks
 *
 */
router.get("/tasks", getTasks);
/**
 * @swagger
 * /tasks/count:
 * get:
 *  summary: Get total tasks counter
 *
 */
router.get("/tasks/count", getTaskCount);
/**
 * @swagger
 * /tasks:
 * get:
 *  summary: Get a tasks by id
 *
 */
router.get("/tasks/:id", getTask);
/**
 * @swagger
 * /tasks:
 * post:
 *  summary: Save a new tasks
 *
 */
router.post("/tasks", saveTasks);
/**
 * @swagger
 * /tasks:
 * delete:
 *  summary: delete a tasks by id
 *
 */
router.delete("/tasks/:id", deleteTasks);
/**
 * @swagger
 * /tasks:
 * put:
 *  summary: update a tasks by id
 *
 */
router.put("/tasks/:id", updateTasks);

export default router;
