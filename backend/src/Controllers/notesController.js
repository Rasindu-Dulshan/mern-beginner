const getALLNotes = (req, res) => {
    res.status(200).send('you fetched the notes');
}

const createNote = (req, res) => {
    res.send('you created a note');
}

const updateNote = (req, res) => {
    res.send('you updated a note');
}

const deleteNote = (req, res) => {
    res.send('you deleted a note');
}

export { getALLNotes, createNote, updateNote, deleteNote };