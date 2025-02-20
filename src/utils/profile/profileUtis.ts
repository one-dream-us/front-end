export const getProfileBannerText = (continuous: number) =>
  continuous > 0
    ? { top: '미션 캘린더', bottom: `${continuous}일째 도전 중` }
    : { top: '연속 학습', bottom: '도전하러 가기' };
