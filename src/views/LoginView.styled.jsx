import styled from 'styled-components';

export const DivLogin = styled.div`
text-align: -webkit-center;
`

export const FormLog = styled.form`
  display: flex;
  flex-direction: column;
  flex-flow: column wrap;
  align-items: flex-start;
  width: min-content;;
  border: 2px solid steelblue;
`;

export const LabelLog = styled.label`
  display: flex;
  flex-flow: column wrap;
  text-align: left;
  font-weight: 500;
  font-size: 18px;
  margin: 15px;
  margin-bottom: 0;
`;

export const InputLog = styled.input`
  border: 2px solid lightblue;
  margin-top: 10px;
`;

export const ButtonLog = styled.button`
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 15px;
  border-radius: 4px;
  border: none;
  background-color: forestgreen;
  font-weight: 600;
  cursor: pointer;
  padding: 5px;
  opacity: 0.8;
    &:hover, &:focus {
    opacity: 1;
  }
`;