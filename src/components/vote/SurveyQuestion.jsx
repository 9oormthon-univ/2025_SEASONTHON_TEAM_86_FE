import styled from "styled-components";
import OptionButton from "./OptionButton";

const QuestionContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 24px;
`;

const QuestionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const OptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function SurveyQuestion({ question, options, selected, onSelect }) {
  return (
    <QuestionContainer>
      <QuestionTitle>{question}</QuestionTitle>
      <OptionsWrapper>
        {options.map((opt) => (
          <OptionButton
            key={opt}
            label={opt}
            selected={selected === opt}
            onClick={() => onSelect(opt)}
          />
        ))}
      </OptionsWrapper>
    </QuestionContainer>
  );
}
