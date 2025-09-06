const BASE_URL = import.meta.env.VITE_BASE_URL ?? "";

export async function fetchSurveys() {
  const res = await fetch(`${BASE_URL}api/surveys`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`설문 API 호출 실패: ${res.status}`);
  }

  return await res.json(); // [{ surveyId, surveyText }]
}

// 질문별 옵션 가져오기
export async function fetchSurveyOptions(surveyId) {
  const res = await fetch(`${BASE_URL}api/surveys/${surveyId}/options`);
  if (!res.ok) throw new Error(`옵션 API 실패: ${res.status}`);
  return await res.json(); // [{ optionId, surveyId, optionText }]
}

// 설문 응답 저장
export async function saveSurveyAnswers(answers) {
  const res = await fetch(`${BASE_URL}api/surveys/answers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(answers), // 배열 형태
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `설문 저장 실패 (${res.status})`);
  }

  return await res.json();
}