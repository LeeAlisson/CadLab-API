import { Router } from "express";
import { RoomController } from "../controllers/roomController";
import { authenticateJWT } from "../middleware/authMiddleware";

const router = Router();
router.use(authenticateJWT);

/**
 * @swagger
 * /rooms:
 *   get:
 *     summary: Get all rooms
 *     tags: [Rooms]
 *     description: Retrieve a list of all rooms
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: All rooms retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Room'
 */
router.get("/", RoomController.getAll);

/**
 * @swagger
 * /rooms/lab/{labId}:
 *   get:
 *     summary: Get rooms by lab ID
 *     tags: [Rooms]
 *     description: Retrieve a list of rooms for a specific lab
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: labId
 *         required: true
 *         description: The ID of the lab to retrieve rooms for
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Rooms retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Room'
 */
router.get("/lab/:labId", RoomController.getByLab);

/**
 * @swagger
 * /rooms:
 *   post:
 *     summary: Create a new room
 *     tags: [Rooms]
 *     description: Create a new room with the provided details
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Room'
 *     responses:
 *       201:
 *         description: Room created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Room'
 */
router.post("/", RoomController.create);

/**
 * @swagger
 * /rooms/{id}:
 *   put:
 *     summary: Update a room by ID
 *     tags: [Rooms]
 *     description: Update the details of an existing room
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the room to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Room'
 *     responses:
 *       200:
 *         description: Room updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Room'
 */
router.put("/:id", RoomController.update);

/**
 * @swagger
 * /rooms/{id}:
 *   delete:
 *     summary: Delete a room by ID
 *     tags: [Rooms]
 *     description: Delete an existing room
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the room to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Room deleted successfully
 */
router.delete("/:id", RoomController.delete);

export default router;
