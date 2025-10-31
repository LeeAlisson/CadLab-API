import { Router } from "express";
import { LabController } from "../controllers/labController";
import { authenticateJWT } from "../middleware/authMiddleware";

const router = Router();
router.use(authenticateJWT);

/**
 * @swagger
 * /labs:
 *  get:
 *     summary: Get all labs
 *     tags: [Labs]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *      200:
 *        description: All labs retrieved successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Lab'
 */
router.get("/", LabController.getAll);

/**
 * @swagger
 * /labs/{id}:
 *  get:
 *     summary: Get a lab by ID
 *     tags: [Labs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: The ID of the lab to retrieve
 *        schema:
 *          type: string
 *     responses:
 *      200:
 *        description: Lab retrieved successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Lab'
 */
router.get("/:id", LabController.getOne);

/**
 * @swagger
 * /labs:
 *  post:
 *     summary: Create a new lab
 *     tags: [Labs]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Lab'
 *     responses:
 *      201:
 *        description: Lab created successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Lab'
 */
router.post("/", LabController.create);

/**
 * @swagger
 * /labs/{id}:
 *  put:
 *     summary: Update a lab by ID
 *     tags: [Labs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: The ID of the lab to update
 *        schema:
 *          type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Lab'
 *     responses:
 *      200:
 *        description: Lab updated successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Lab'
 */
router.put("/:id", LabController.update);

/**
 * @swagger
 * /labs/{id}:
 *  delete:
 *     summary: Delete a lab by ID
 *     tags: [Labs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: The ID of the lab to delete
 *        schema:
 *          type: string
 *     responses:
 *      204:
 *        description: Lab deleted successfully
 */
router.delete("/:id", LabController.delete);

export default router;
