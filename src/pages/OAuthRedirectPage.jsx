import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

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
      const decoded = jwtDecode(accessToken);
      console.log(decoded);
      // 이메일, 이름 저장
      localStorage.setItem("userEmail", decoded.sub || "");
      localStorage.setItem("userName", decoded.name || "");
    }
    if (refreshToken) {
      localStorage.setItem("refreshToken", refreshToken);
    }

    if (isNewUser) {
      navigate("/signup");
      return;
    }

    // 기존 유저면 홈 화면으로 이동
    if (role === "고객") {
      navigate("/");
    } else if (role === "사장님") {
      navigate("/ownerhomepage");
    } else {
      // 롤 정보 없으면 기본 홈으로
      navigate("/signup");
    }
  }, [navigate]);

  return <div>로그인 처리 중...</div>;
}
