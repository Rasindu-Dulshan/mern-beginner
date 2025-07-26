import express from 'express';
import { getALLNotes,getNoteById, createNote, updateNote, deleteNote } from '../Controllers/notesController.js';
const router = express.Router();

router.get("/", getALLNotes) 
router.get("/:id", getNoteById)
router.post("/",createNote)
router.put("/:id", updateNote)
router.delete("/:id", deleteNote)

export default router;