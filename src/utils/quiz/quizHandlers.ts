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
import quizResult100 from '@/assets/p2/quiz result=100.png';
import quizResult50 from '@/assets/p2/quiz result=2080.png';
import quizResult0 from '@/assets/p2/quiz result=0.png';
import quizResult100_webp from '@/assets/webps/quiz result=100.webp';
import quizResultMiddle from '@/assets/webps/quiz_middle.webp';
import quizResulLow from '@/assets/webps/quiz_low.webp';

export const formatQuestion = (currentQuiz: IQuiz) => {
  if (currentQuiz === undefined || !currentQuiz.question) return;
  const { question, answerNum, choices } = currentQuiz;
  // return question.replaceAll(
  //   choices[answerNum - 1].term,
  //   '_'.repeat(choices[answerNum - 1].term.length * 3),
  // );
  return question.replaceAll(choices[answerNum - 1].term, '__________');
};

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

export const checkIsRedText = ({
  isCorrect,
  wrongCnt,
}: {
  wrongCnt: number;
  isCorrect: boolean;
}) => (!isCorrect && wrongCnt >= 3 ? true : false);

export const createTitle = (accuracyRate: number, isGraduate: boolean, name?: string) => {
  if (isNaN(accuracyRate)) return;

  const obj = {
    mainTitle: '',
    subTitlt: '',
    src: {
      png: '',
      webp: '',
    },
  };

  switch (accuracyRate) {
    case 100:
      obj.mainTitle = '전부 다 맞았어요!';
      (obj.subTitlt = isGraduate
        ? '외운 단어는 졸업노트에 넣어둘게요!'
        : `${name || 'user'}님, 경제 단어가 쉬워지고 있어요!`),
        (obj.src.png = quizResult100);
      obj.src.webp = quizResult100_webp;

      break;
    case 0:
      obj.mainTitle = '조금 어려웠나봐요!';
      (obj.subTitlt = '놓친 단어는 오답노트에 넣었어요'), (obj.src.png = quizResult0);
      obj.src.webp = quizResulLow;
      break;
    default:
      obj.mainTitle = '퀴즈를 다 풀었어요!';
      (obj.subTitlt = '놓친 단어는 오답노트에 넣었어요'), (obj.src.png = quizResult50);
      obj.src.webp = quizResultMiddle;
  }
  return obj;
};

export const showStatus = ({
  correctCnt,
  wrongCnt,
  isCorrect,
}: {
  correctCnt: number;
  wrongCnt: number;
  isCorrect: boolean;
}) => {
  if (!correctCnt && !wrongCnt) {
    return '히스토리에 추가됨';
  }

  return isCorrect && correctCnt >= 3
    ? '3회 정답! 졸업했어요'
    : isCorrect
      ? `${correctCnt}회 복습`
      : `${wrongCnt}회 오답`;
};
