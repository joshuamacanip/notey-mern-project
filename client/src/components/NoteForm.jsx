import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postNote } from "../features/notes";

const FormContainer = styled.form`
  padding-top: 56px;
`;

const FormTextInput = styled.input`
  display: block;
  border-radius: 2px;
  border: 1px solid #eee;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #eee;
  width: 100%;
  margin-bottom: 16px;
  transition: outline 300ms ease-in-out;

  &:focus {
    outline: none;
    outline: 2px solid blue;
  }
`;

const FormTextArea = styled.textarea`
  display: block;
  border-radius: 2px;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #eee;
  width: 100%;
  margin-bottom: 16px;
  transition: outline 300ms ease-in-out;

  &:focus {
    outline: none;
    outline: 2px solid blue;
  }
`;

const FormButton = styled.button`
  padding: 8px 14px;
  font-weight: 500;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`;

export default () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !body) {
      alert("Please fill in all inputs fields.");
    } else {
      setTitle("");
      setDescription("");
      setBody("");

      alert("Do you want to create this new note.");

      dispatch(postNote({ title, description, body }));

      navigate("/");
    }
  };

  return (
    <FormContainer onSubmit={onFormSubmit}>
      <FormTextInput
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        value={title}
      />
      <FormTextInput
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        value={description}
      />
      <FormTextArea
        onChange={(e) => setBody(e.target.value)}
        rows={10}
        placeholder="Notes..."
        value={body}
      />
      <FormButton>Send</FormButton>
    </FormContainer>
  );
};
