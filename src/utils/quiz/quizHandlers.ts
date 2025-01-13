import { IQuiz } from '@/types/interface';
import iconAGreen from '@/assets/p2/icon_a_green.png';
import iconAGrey from '@/assets/p2/icon_a_grey.png';
import iconAREd from '@/assets/p2/icon_a_red.png';
import iconBGreen from '@/assets/p2/icon_b_green.png';
import iconBGrey from '@/assets/p2/icon_b_grey.png';
import iconBREd from '@/assets/p2/icon_b_red.png';
import iconCGreen from '@/assets/p2/icon_c_green.png';
import iconCGrey from '@/assets/p2/icon_c_grey.png';
import iconCREd from '@/assets/p2/icon_c_red.png';
import iconDGreen from '@/assets/p2/icon_d_green.png';
import iconDGrey from '@/assets/p2/icon_d_grey.png';
import iconDREd from '@/assets/p2/icon_d_red.png';

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

// 문제 : ___________________(MicroStrategy)는 기업 데이터를 시각화하고 분석하는 소프트웨어를 제공하며, 대규모 비트코인 보유로도 주목받고 있는 회사예요.
// 선지 : 마이크로스트레티지
//

// 문제 : ___(long)은 자산 가격이 오를 것을 기대하고 매수하는 것을 뜻해요. 싸게 사서 비싸게 팔아 이익을 내는 일반적인 투자 방식이에요.
// 선지 : 롱

export const matchOptionImgColor = (
  isCorrect: boolean | null,
  optionIndex: number,
  answer: string,
  term: string,
  myChoice: string | null,
) => {
  const correctCase = typeof isCorrect === 'boolean' && answer === term;
  const wrongCase = typeof isCorrect === 'boolean' && term === myChoice && myChoice !== answer;
  if (optionIndex === 0) {
    if (correctCase) {
      return iconAGreen;
    } else if (wrongCase) {
      return iconAREd;
    }
    return iconAGrey;
  } else if (optionIndex === 1) {
    if (correctCase) {
      return iconBGreen;
    } else if (wrongCase) {
      return iconBREd;
    }
    return iconBGrey;
  } else if (optionIndex === 2) {
    if (correctCase) {
      return iconCGreen;
    } else if (wrongCase) {
      return iconCREd;
    }
    return iconCGrey;
  } else {
    if (correctCase) {
      return iconDGreen;
    } else if (wrongCase) {
      return iconDREd;
    }
    return iconDGrey;
  }
};
