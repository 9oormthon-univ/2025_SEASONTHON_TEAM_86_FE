import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import lockIcon from "../../assets/lock.svg";
import unlockIcon from "../../assets/lock_white.svg";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [region, setRegion] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`이름: ${name}, 이메일: ${email}, 지역: ${region}, 롤: ${role}`);
    navigate("/");
  };

  const isDisabled = !name || !email || !region || !role;

  return (
    <Wrapper>
      <FormBox onSubmit={handleSubmit}>
        <Title>회원가입</Title>

        <FlexRow>
          <Field>
            <Label>이름</Label>
            <Input
              type="text"
              placeholder="이름을 입력하세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Field>

          <Field>
            <Label>지역</Label>
            <Select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              required
            >
              <option value="">지역을 선택하세요</option>
              <option value="서울특별시">서울특별시</option>
              <option value="인천광역시">인천광역시</option>
              <option value="경기도">경기도</option>
              <option value="강원특별자치도">강원특별자치도</option>
              <option value="대전광역시">대전광역시</option>
              <option value="세종특별자치시">세종특별자치시</option>
              <option value="충청북도">충청북도</option>
              <option value="충청남도">충청남도</option>
              <option value="광주광역시">광주광역시</option>
              <option value="전북특별자치도">전북특별자치도</option>
              <option value="전라남도">전라남도</option>
              <option value="대구광역시">대구광역시</option>
              <option value="부산광역시">부산광역시</option>
              <option value="울산광역시">울산광역시</option>
              <option value="경상북도">경상북도</option>
              <option value="경상남도">경상남도</option>
              <option value="제주특별자치도">제주특별자치도</option>
            </Select>
          </Field>
        </FlexRow>

        <Field>
          <Label>이메일</Label>
          <Input
            type="email"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Field>

        <Field>
          <Label>가입 여부</Label>
          <ButtonGroup>
            <ToggleButton
              type="button"
              $active={role === "고객"}
              onClick={() => setRole("고객")}
            >
              고객
            </ToggleButton>
            <ToggleButton
              type="button"
              $active={role === "사장님"}
              onClick={() => setRole("사장님")}
            >
              사장님
            </ToggleButton>
          </ButtonGroup>
        </Field>

        <SubmitButton type="submit" disabled={isDisabled}>
          가입하기 <Icon src={isDisabled ? lockIcon : unlockIcon} alt="lock" />
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
  background-color: #f5f5f5;
`;

const FormBox = styled.form`
  background-color: #fff;
  padding: 40px 45px;
  border-radius: 20px;
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const Title = styled.h2`
  font-size: 34px;
  font-weight: 700;
  text-align: left;
  margin: 0;
`;

const FlexRow = styled.div`
  display: flex;
  gap: 21px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #565656;
`;

const Input = styled.input`
  border-radius: 10px;
  border: 1px solid #d3d3d3;
  background: #f8f8f8;
  padding: 10px 12px;
  font-size: 12px;
  outline: none;
`;

const Select = styled.select`
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 14px;
  background-color: #f8f8f8;
  outline: none;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

const ToggleButton = styled.button`
  flex: 1;
  padding: 10px 0;
  border: 1px solid ${({ $active }) => ($active ? "#ff5d17" : "#d3d3d3")};
  background-color: ${({ $active }) => ($active ? "#ff5d17" : "#f8f8f8")};
  color: ${({ $active }) => ($active ? "#fff" : "#666")};
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
`;

const SubmitButton = styled.button`
  background-color: ${({ disabled }) => (disabled ? "#E9E9E9" : "#ff5d17")};
  color: ${({ disabled }) => (disabled ? "#666" : "#fff")};
  border: ${({ disabled }) => (disabled ? "1px solid #C9C9C9" : "none")};
  border-radius: 12px;
  padding: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
