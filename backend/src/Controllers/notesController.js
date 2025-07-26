import Note from "../models/Note.js";
const getALLNotes = async (_, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });//sort by createdAt field in descending order
    res.status(200).json(notes);
  } catch (error) {
    console.log("Error in getAllNotes controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "not found note" });
    res.status(200).json(note);
  } catch (error) {
    console.log("Error in getNoteById controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    const newNode = await note.save();
    res.status(201).json(newNode);
  } catch (error) {
    console.log("Error in createNote controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updatedNote)
      return res.status(404).json({ message: "not found note" });
    res.status(200).json(updatedNote);
  } catch (error) {
    console.log("Error in updateNote controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteNote = async(req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({ message: "not found note" });
    res.status(200).json(deletedNote);
  } catch (error) {
    console.log("Error in deleteNote controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { getALLNotes,getNoteById, createNote, updateNote, deleteNote };
