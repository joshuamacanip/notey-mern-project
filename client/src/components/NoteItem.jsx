import styled from "styled-components";
import { FaPencilAlt, FaEraser } from "react-icons/fa";

const NoteItemCard = styled.article`
  padding: 14px;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-bottom: 12px; 
  transition: box-shadow 300ms ease-in-out;

  &:hover {
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.19), 0 3px 6px rgba(0, 0, 0, 0.23); 
    border 1px solid #eee;
  }

  .card__title {
    font-size: 18px;
  } 

  .card__description{ 
    font-weight: 300; 
    font-size: 16px;
  }       


`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NoteControlBtn = styled.button`
  margin-left: 8px;
  padding: 4px;
  text-align: center;
`;

export default ({ title, description }) => {
  return (
    <NoteItemCard>
      <FlexContainer>
        <div>
          <h6 className="card__title">{title}</h6>
          <p className="card__description">{description}</p>
        </div>

        <div>
          <NoteControlBtn color="red">
            <FaPencilAlt />
          </NoteControlBtn>
          <NoteControlBtn>
            <FaEraser />
          </NoteControlBtn>
        </div>
      </FlexContainer>
    </NoteItemCard>
  );
};
