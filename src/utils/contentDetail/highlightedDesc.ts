export const highlightedDesc = (
  desc: string,
  keywords: string[] | string,
  spanId: 'highlight_underline' | 'highlight_text',
) => {
  // if (!desc) {
  //   desc = '';
  // }
  // if (!keywords) {
  //   keywords = [''];
  // }
  // const keywordArray = Array.isArray(keywords) ? keywords : [keywords];

  // const res = keywordArray.reduce((acc, keyword) => {
  //   // 괄호를 이스케이프 처리하여 정규식 생성
  //   const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  //   const regex = new RegExp(`(${escapedKeyword})`, 'i');
  //   return acc.replace(regex, `<span id=${spanId}>$1</span>`);
  // }, desc);

  // return res;

  keywords;
  const parser = new DOMParser();
  const doc = parser.parseFromString(desc, 'text/html');

  // 모든 mark 태그를 찾아 클래스명 추가
  const markTags = doc.querySelectorAll('mark');
  markTags.forEach((mark) => {
    mark.setAttribute('id', spanId);
  });

  // 수정된 HTML을 문자열로 반환
  return doc.body.innerHTML;
};
