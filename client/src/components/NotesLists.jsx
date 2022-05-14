import { useState, useEffect } from "react";
import { getNotes } from "../features/notes";
import { useNavigate, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaPen } from "react-icons/fa";
import styled from "styled-components";
import NoteItem from "./NoteItem";

const NotesContainer = styled.section`
  padding-top: 56px;
`;

const CreateNewNote = styled.button`
  cursor: pointer;
  background-color: #764af1;
  color: #eee;

  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 18px;
  padding: 14px 16px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
`;

export default () => {
  const { notes } = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getNotes());
  }, [notes]);

  return (
    <NotesContainer>
      <CreateNewNote onClick={() => navigate("/create")}>
        <FaPen /> Add Note
      </CreateNewNote>

      <div>
        <>
          {notes.length === 0 && <p>Loading</p>}
          {notes.length &&
            notes.map((note) => (
              <NoteItem
                title={note.title}
                description={note.description}
                id={note._id}
                key={note._id}
              />
            ))}
        </>
      </div>
    </NotesContainer>
  );
};
