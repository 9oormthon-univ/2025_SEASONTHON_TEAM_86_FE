import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; 
import lockIcon from '../../assets/lock.svg'
import unlockIcon from '../../assets/lock_white.svg'

export default function SignUpPage() {
  const [region, setRegion] = useState('');
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`이름: ${name}, 이메일: ${email}, 지역: ${region}, 가입여부: ${role}`);

    navigate('/');
  };

  const isDisabled = !name || !email || !region || !role;

  return (
    <Wrapper>
      <FormBox onSubmit={handleSubmit}>
        <Title>회원가입</Title>

        {/* 이름 + 지역 한 줄 */}
        <FlexRow>
          <FieldRow style={{ flex: 1 }}>
            <Label>이름</Label>
            <Input
              type="text"
              placeholder="이름을 입력하세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </FieldRow>

          <FieldRow style={{ flex: 1 }}>
            <Label>지역</Label>
            <Select value={region} onChange={(e) => setRegion(e.target.value)} required>
              <option value="">지역을 선택하세요</option>
              <option value="서울특별시">서울특별시</option>
              <option value="부산광역시">부산광역시</option>
              <option value="대구광역시">대구광역시</option>
              <option value="인천광역시">인천광역시</option>
              <option value="광주광역시">광주광역시</option>
              <option value="대전광역시">대전광역시</option>
              <option value="울산광역시">울산광역시</option>
              <option value="세종특별자치시">세종특별자치시</option>
              <option value="경기도">경기도</option>
              <option value="강원특별자치도">강원특별자치도</option>
              <option value="충청북도">충청북도</option>
              <option value="충청남도">충청남도</option>
              <option value="전북특별자치도">전북특별자치도</option>
              <option value="전라남도">전라남도</option>
              <option value="경상북도">경상북도</option>
              <option value="경상남도">경상남도</option>
              <option value="제주특별자치도">제주특별자치도</option>
            </Select>
          </FieldRow>
        </FlexRow>

        {/* 이메일은 그 아래 */}
        <FieldRow>
          <Label>이메일</Label>
          <Input
            type="email"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FieldRow>

        {/* 가입 여부 */}
        <FieldRow>
          <Label>가입 여부</Label>
          <ButtonGroup>
            <ToggleButton
              type="button"
              $active={role === '고객'}
              onClick={() => setRole('고객')}
            >
              고객
            </ToggleButton>
            <ToggleButton
              type="button"
              $active={role === '사장님'}
              onClick={() => setRole('사장님')}
            >
              사장님
            </ToggleButton>
          </ButtonGroup>
        </FieldRow>

        {/* 가입 버튼 */}
        <SubmitButton type="submit" disabled={!name || !email || !region || !role}>
          가입하기 <img src={isDisabled ? lockIcon : unlockIcon} alt="lock"/>
        </SubmitButton>
      </FormBox>

    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f5f5f5;
`;

const FlexRow = styled.div`
  display: flex;
  gap: 10px; /* 이름 / 지역 사이 간격 */
`;


const FormBox = styled.form`
  background: #fff;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h2`
  margin: 0 0 10px 0;
  font-size: 24px;
  font-weight: 700;
`;

const FieldRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  background-color: #F8F8F8;

  &:focus {
    border-color: #888;
  }
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  background-color: #F8F8F8;

  &:focus {
    border-color: #888;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

const ToggleButton = styled.button`
  flex: 1;
  padding: 10px 0;
  border: 1px solid ${({ $active }) => ($active ? '#FF5D17' : '#D3D3D3')};
  background: ${({ $active }) => ($active ? '#FF5D17' : '#F8F8F8')};
  color: ${({ $active }) => ($active ? '#fff' : '#999')};
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600px;

  &:hover {
    opacity: 0.8;
  }
`;

const SubmitButton = styled.button`
  background: ${({ disabled }) => (disabled ? '#C9C9C9' : '#FF5D17')};
  color: ${({ disabled }) => (disabled ? '#999' : '#fff')};
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  img {
    width: 20px;
    height: 20px;
    text-align: right;
  }
`;
