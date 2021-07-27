import React, { useEffect } from 'react';

function KakaoLogin(props) {
  const { Kakao } = window;

  useEffect(() => {
    Kakao.init('713ce85f1bb4f1ea03bd5c2c296d2142');
    console.log(Kakao.isInitialized());
    return () => {
      console.log('unmount');
    }
  });

  const kakaoLogin = () => {
    Kakao.Auth.login({
      scope: 'profile_nickname, profile_image, account_email',
      success: function(authObj) {
        console.log(authObj);
        Kakao.API.request({
          url: '/v2/user/me',
          success: res => {
            const kakao_account = res.kakao_account;
            console.log(kakao_account);
          }
        });
      }
    });
  }
  return (
      <button onClick={kakaoLogin}>카카오계정으로 로그인하기</button>
  );
}

export default KakaoLogin;