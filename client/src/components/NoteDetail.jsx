import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getOneNote } from "../features/notes";
import { useSelector, useDispatch } from "react-redux";
import { FaHome, FaPen } from "react-icons/fa";
import styled from "styled-components";

const CardNoteDetail = styled.section`
  padding: 56px 0;

  .card__header {
    padding-bottom: 24px;

    .card__title {
      font-size: 60px;
      line-height: 1.2;
      letter-spacing: 0.5px;
      font-weight: 300;
      padding-bottom: 8px;
    }

    .card__description {
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 0.15px;
      padding-bottom: 12px;
    }

    .card__createdAt {
      font-size: 12px;
      letter-spacing: 0.4px;
      font-weight: 400;
    }
  }

  .card__content {
    padding: 32px 0;

    .card__body {
      font-size: 16px;
      letter-spacing: 0.5px;
      line-height: 1.6;
      width: 60ch;
      padding-bottom: 56px;
    }
  }
`;

const CardDetailBtn = styled.button`
  cursor: pointer;
  padding: 8px 12px;
  margin-right: 12px;
  font-size: 16px;
`;

export default () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { note } = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(getOneNote(id));
  }, [id]);

  return (
    <>
      {!note && <p>Loading Note Detail</p>}
      {note && (
        <CardNoteDetail>
          <div className="card__header">
            <h2 className="card__title">{note.title}</h2>

            <h6 className="card__description">{note.description}</h6>

            <small className="card__createdAt">{note.createdAt}</small>
          </div>

          <hr />

          <div className="card__content">
            <p className="card__body">{note.body}</p>
          </div>

          <CardDetailBtn onClick={() => navigate("/")}>
            <FaHome />
          </CardDetailBtn>

          <CardDetailBtn>
            <FaPen />
          </CardDetailBtn>
        </CardNoteDetail>
      )}
    </>
  );
};
