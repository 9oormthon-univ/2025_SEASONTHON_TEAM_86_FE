import styled from "styled-components";

const StepBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  width: 100%;     
`;

const StepWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-start;
`;

const Circle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ status }) =>
    status === "done" || status === "current" ? "#FF6B00" : "#E0E0E0"};
  color: ${({ status }) =>
    status === "upcoming" ? "#555" : "#fff"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
`;

const Line = styled.div`
  flex: 1;
  height: 4px;
  background: ${({ active }) => (active ? "#FF6B00" : "#E0E0E0")};
`;

export default function SurveyStepBar({ current }) {
  const steps = [1, 2, 3, 4, 5];

  return (
    <StepBar>
      {steps.map((step, index) => {
        let status = "upcoming";
        if (step < current) status = "done";
        else if (step === current) status = "current";
  
        return (
            <StepWrapper key={step}>
            <Circle status={status}>
              {status === "done" ? "✔" : step}
            </Circle>
            {index < steps.length - 1 && (
              <Line active={step < current} />
            )}
          </StepWrapper>
        );
      })}
    </StepBar>
  );
  
}
