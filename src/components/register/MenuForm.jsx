import React, { useState } from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  position: fixed;
  right: 40px;
  bottom: 80px;
  width: 300px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
  padding: 20px;
  z-index: 2000;
`;

const Input = styled.input`
  width: 90%;
  padding: 12px 16px;
  margin-bottom: 12px;
  border-radius: 18px;
  border: none;
  background: #f5f5f5;
  font-size: 14px;
  font-weight: 500;
  color: #333;

  &::placeholder {
    color: #B3B3B3;
  }

  &:focus {
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 90%;
  padding: 12px 16px;
  margin-bottom: 12px;
  border-radius: 18px;
  border: none;
  background: #F3F3F3;
  font-size: 14px;
  resize: none;
  color: #333;

  &::placeholder {
    color: #B3B3B3;
  }

  &:focus {
    outline: none;

  }
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
`;

const PriceWrapper = styled.div`
  flex: 1;
  position: relative;
`;

const PriceInput = styled.input`
  width: 60%;
  padding: 12px 16px 12px 36px; /* 왼쪽 ₩ 아이콘 공간 */
  border-radius: 18px;
  border: none;
  background: #F3F3F3;
  font-size: 14px;
  color: #333;

  &::placeholder {
    color: #B3B3B3;
  }

  &:focus {
    outline: none;
  }
`;

const PriceSymbol = styled.span`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  color: #999;
  font-weight: bold;
`;

const UploadButton = styled.label`
  width: 48px;
  height: 48px;
  background: #F3F3F3;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  color: #333;

  &:hover {
    background: #ffe5d2;
  }

  input {
    display: none;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 5px;
`;

const ActionButton = styled.button`
  flex: 1;
  padding: 12px;
  background: #F3F3F3;
  color: #B3B3B3;
  border: none;
  border-radius: 18px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover,
  &:focus {
    background: #FF6B00;
    color: #fff;
  }
`;


export default function MenuForm({ onSave, onCancel }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
    }
  };

  const handleSubmit = () => {
    if (!name || !desc || !price) return;
    onSave({ name, desc, price, image });
  };

  return (
    <FormWrapper>
      <Input
        placeholder="음식 이름을 입력하세요."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextArea
        placeholder="음식 설명을 입력하세요."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        rows={3}
      />
      <PriceRow>
        <PriceWrapper>
          <PriceSymbol>₩</PriceSymbol>
          <PriceInput
            placeholder="가격"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </PriceWrapper>
        <UploadButton>
          +
          <input type="file" accept="image/*" onChange={handleImage} />
        </UploadButton>
      </PriceRow>
      <ButtonRow>
        <ActionButton onClick={handleSubmit}>저장</ActionButton>
        <ActionButton onClick={onCancel}>취소</ActionButton>
      </ButtonRow>

    </FormWrapper>
  );
}