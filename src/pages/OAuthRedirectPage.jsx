import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OAuthRedirectPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("accessToken");
    const refreshToken = params.get("refreshToken");
    const isNewUser = params.get("isNewUser") === "true";
    const role = params.get("role");

    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
    }
    if (refreshToken) {
      localStorage.setItem("refreshToken", refreshToken);
    }

    if (isNewUser) {
      navigate("/signup");
      return;
    }

    // 기존 유저면 홈 화면으로 이동
    if (role === "CUSTOMER") {
      navigate("/");
    } else if (role === "OWNER") {
      navigate("/ownerhomepage");
    } else {
      // 롤 정보 없으면 기본 홈으로
      navigate("/signup");
    }
  }, [navigate]);

  return <div>로그인 처리 중...</div>;
}
