import styled from "styled-components";

const Button = styled.button`
  background: ${({ selected }) => (selected ? "#FF5D17" : "#E7DCCB")};
  color: ${({ selected }) => (selected ? "#fff" : "#8A8A8A")};
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  margin: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    opacity: 0.9;
    background-color: #FF5D17;
    color: #fff;
  }
`;

export default function OptionButton({ label, selected, onClick }) {
  return <Button selected={selected} onClick={onClick}>{label}</Button>;
}
