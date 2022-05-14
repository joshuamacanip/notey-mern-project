import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//initial state
const initialState = {
  notes: [],
  status: {},
  note: null,
};

//GET Notes
export const getNotes = createAsyncThunk("notes/getNotes", async () => {
  //fetch all notes
  const response = await fetch("http://localhost:8080/api/v1/notes");

  //parse notes
  const notes = await response.json();

  //return notes
  return notes;
});

export const getOneNote = createAsyncThunk(
  "notes/getOneNote",
  async (noteId) => {
    const response = await fetch(
      `http://localhost:8080/api/v1/note/${noteId}`,
      {
        method: "GET",
      }
    );

    const note = await response.json();

    return note;
  }
);

//POST Note
export const postNote = createAsyncThunk(
  "/notes/postNotes",
  async (userNote) => {
    //post new note
    const response = await fetch("http://localhost:8080/api/v1/note", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userNote),
    });

    //parse note
    const note = await response.json();

    //return note
    return note;
  }
);

//DELETE Note
export const deleteNote = createAsyncThunk(
  "/notes/deleteNote",
  async (noteId) => {
    const response = await fetch(
      `http://localhost:8080/api/v1/note/${noteId}`,
      {
        method: "DELETE",
      }
    );

    const note = await response.json();

    return note;
  }
);

const notesSlices = createSlice({
  name: "notes",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getNotes.fulfilled, (state, action) => {
        state.notes = action.payload;
        state.status = "Completed";
      })
      .addCase(getNotes.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(getNotes.rejected, (state) => {
        state.status = "Failed";
      })
      .addCase(postNote.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(postNote.fulfilled, (state, action) => {
        state.status = "Completed";
        state.notes = [...state.notes, action.payload];
      })
      .addCase(postNote.rejected, (state) => {
        state.status = "Failed";
      })
      .addCase(deleteNote.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(deleteNote.fulfilled, (state, action) => {
        state.status = "Completed";
        state.notes.filter((note) => note._id !== action.payload);
      })
      .addCase(deleteNote.rejected, (state) => {
        state.status = "Failed";
      })
      .addCase(getOneNote.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(getOneNote.fulfilled, (state, action) => {
        state.status = "Completed";
        state.note = action.payload;
      })
      .addCase(getOneNote.rejected, (state) => {
        state.status = "Failed";
      });
  },
});

export const notesReducers = notesSlices.reducer;
