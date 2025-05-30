export interface IcontentdetailList {
  company: string;
  title: string;
  desc: string;
  keywords: string[];
}
export interface ICourseData {
  id: number;
  article: string;
  keyword: string;
  desc: {
    id: number;
    content: string;
  }[];
}
export const contentdetailList: IcontentdetailList = {
  company: '부산일보',
  title: `"환율 급등 쇼크에 '달러 환산 코스피' 2년 전으로 추락"`,
  keywords: ['달러 환산 코스피', '저가 매수세 유입', '코스피 지수'],
  desc: "환율 급등 영향으로 '달러 환산 코스피'가 2년여 전으로 떨어진 것으로 나타났다. 시장에서는 외국인의 저가 매수세 유입이 머지 않았다는 기대감과 더 떨어질 수 있다는 우려가 혼재한다. 1일 금융권에 따르면 지난달 30일 기준 달러 환산 코스피 지수는 787.84를 기록했다.",
};

export const courseData: ICourseData[] = [
  {
    id: 1,
    article: `환율 등급 영향으로 '달러 환산 코스피'가 2년여전 수준까지 떨어진 것으로 나타났다`,
    keyword: '달러 환산 코스피',
    desc: [
      {
        id: 1,
        content: `달러 환산 코스피는 한국 주식 시장의 점수를 외국 사람들이 보기 쉽게 달러로 바꿔 계산한 값이예요.`,
      },
      {
        id: 2,
        content: `이 지수는 환전처럼 환율에 영향을 받아요. 지수가 낮아지면 외국인 투자자들은 환율 변동으로 인한 손실을 우려해 한국 주식을 팔고 자금을 회수하기 시작해요.`,
      },
      {
        id: 3,
        content: `이로 인해 코스피 추가 하락과 원화 약세가 이어지고, 한국 시장이 위험하다는 평가를 받게 되어 경제 전반에 부정적인 영향을 미칠수 있어요.`,
      },
    ],
  },
  {
    id: 2,
    article: `시장에서는 외국인의 저가 매수세 유입이 머지 않았다는 기대감과 더 떨어질 수 있다는 우려가 혼재한다.`,
    keyword: '저가 매수세 유입',
    desc: [
      {
        id: 1,
        content: `저가 매수세 유입은 주식 가격이 크게 떨어졌을 때, 낮아진 가격을 기회로 보고 사려는 투자자들이 많아지는 현상을 말해요.`,
      },
      {
        id: 2,
        content: `매수세는 주식을 사고 싶어 하는 사람들의 힘으로, 외국인 투자자의 매수세가 강해지면 많은 자금이 시장으로 들어오고 주가가 오르며 시장이 더 안정적으로 보이게 돼요.`,
      },
      {
        id: 3,
        content: `이렇게 되면 환율에도 좋은 영향을 주고, 다른 투자자들에게도 신뢰를 주어 추가 투자가 이루어질 가능성이 커져요. 그래서 매수세는 시장과 경제에 정말 중요한 역할을 해요.`,
      },
    ],
  },
  {
    id: 3,
    article: `1일 금융권에 따르면 지난달 30일 기준 달러 환산 코스피 지수는 787.84를 기록했다.`,
    keyword: '코스피 지수',
    desc: [
      {
        id: 1,
        content: `코스피 지수는 한국 주식시장에 있는 모든 회사들의 주가를 하나로 합쳐 보여주는 지표에요.`,
      },
      {
        id: 2,
        content: `이 지수는 상장 기업들의 주가 변동을 종합해 경제와 시장 흐름을 보여줘요. 이 지수는 투자자들의 의사결정, 외국인 자금 유입, 정부의 경제정책 수립에 중요한 기준이 돼요.`,
      },
      {
        id: 3,
        content: `지수가 오르면 기업 실적과 투자 심리가 긍정적으로 작용해 경제가 성장 중임을 나타내고, 지수가 내리면 투자 위축과 경제 불황의 신호로 해석돼요.`,
      },
    ],
  },
];
