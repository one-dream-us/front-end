import { IQuiz } from '@/types/interface';

export const formatQuestion = (currentQuiz: IQuiz) => {
  if (currentQuiz === undefined) return;
  const { question, answerNum, choices } = currentQuiz;
  return question.replace(
    choices[answerNum - 1].term,
    '_'.repeat(choices[answerNum - 1].term.length * 3),
  );
};
// 문제 : FOMO는 "Fear of Missing Out"의 약자로, 투자 기회를 놓칠까 봐 불안해하며 성급하게 투자하는 심리를 말해요.
// 선지 : 포모(FOMO)
// 같은 건 처리하는데 포함하는 건 처리 못하고 있음

// 문제 : ___________________________(MicroStrategy)는 기업 데이터를 시각화하고 분석하는 소프트웨어를 제공하며, 대규모 비트코인 보유로도 주목받고 있는 회사예요.
// 선지 : 마이크로스트레티지
//
