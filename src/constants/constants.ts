import scrapIcon from '@/assets/P2_5d/icon_scrap.png';
import bookMarkIcon from '@/assets/P2_5d/icon_Keynote.png';
import reviewNoteIcon from '@/assets/p2/icon_X_dark.png';
import graduationIcon from '@/assets/p2/icon_grad.png';
import mobileImage1 from '@/assets/p2/P2 에셋_2차전달/onboarding_1_m.jpg';
import mobileImage2 from '@/assets/p2/P2 에셋_2차전달/onboarding_2_m.jpg';
import mobileImage3 from '@/assets/p2/P2 에셋_2차전달/onboarding_3_m.jpg';
import mobileImage4 from '@/assets/p2/P2 에셋_2차전달/onboarding_4_m.jpg';
import tabletImage1 from '@/assets/p2/P2 에셋_2차전달/onboarding_1_tab.web.png';
import tabletImage2 from '@/assets/p2/P2 에셋_2차전달/onboarding_2_tab.web.png';
import tabletImage3 from '@/assets/p2/P2 에셋_2차전달/onboarding_3_tab.web.png';
import tabletImage4 from '@/assets/p2/P2 에셋_2차전달/onboarding_4_tab.web.png';
import mobileBanner1 from '@/assets/p2/P2 에셋_2차전달/모바일 배너 (3).png';
import mobileBanner2 from '@/assets/p2/P2 에셋_2차전달/모바일 배너 (1).png';
import mobileBanner3 from '@/assets/p2/P2 에셋_2차전달/모바일 배너 (2).png';
import tabBanner1 from '@/assets/p2/P2 에셋_2차전달/태블릿 배너 (2).png';
import tabBanner2 from '@/assets/p2/P2 에셋_2차전달/태블릿 배너 (3).png';
import tabBanner3 from '@/assets/p2/P2 에셋_2차전달/태블릿 배너 (1).png';
import webBanner1 from '@/assets/p2/P2 에셋_2차전달/웹배너 (2).png';
import webBanner2 from '@/assets/p2/P2 에셋_2차전달/웹배너 (3).png';
import webBanner3 from '@/assets/p2/P2 에셋_2차전달/웹배너 (1).png';
import { myScrapMenu, MyWordListMenuType } from '@/types/types';
import detailOnboardingImg1_mobile from '@/assets/detailpage_tutorial/modalImg1_mobile.png';
import detailOnboardingImg2_mobile from '@/assets/detailpage_tutorial/modalImg2_mobile.png';
import detailOnboardingImg3_mobile from '@/assets/detailpage_tutorial/modalImg3_mobile.png';
import detailOnboardingImg1_tab from '@/assets/detailpage_tutorial/modalImg1_tab.png';
import detailOnboardingImg2_tab from '@/assets/detailpage_tutorial/modalImg2_tab.png';
import detailOnboardingImg3_tab from '@/assets/detailpage_tutorial/modalImg3_tab.png';

export const HeaderMenuList = [
  { id: 1, title: '홈', to: '/' },
  { id: 2, title: '머니뉴스', to: '/news-list', sub: '/news/' },
  { id: 3, title: '나의 단어장', to: '/my-word-list' },
];

export const FooterMenuList = [
  {
    id: 1,
    title: '이용약관',
    to: 'https://myinsightbox.notion.site/a30746d5882d4a74b7a964e79a0035df',
  },
  {
    id: 2,
    title: '개인정보처리방침',
    to: 'https://myinsightbox.notion.site/2b2b6555fe1e47f790e5f67985ec4b33',
  },
  {
    id: 3,
    title: '오류 접수',
    to: 'https://docs.google.com/forms/d/e/1FAIpQLSdhMeraw_O3ecKd3ujPOGoRBCtHoZ83tv7Fex1tKD5nmILtug/viewform',
  },
];

export const ProfileLabels = ['스크랩', '키워드', '본 콘텐츠'];

export const MenuItems: myScrapMenu[] = ['콘텐츠', '단어장'];

export const adminMenuList = [
  { id: 1, title: '홈', to: '/admin/home' },
  { id: 2, title: '콘텐츠 등록', to: '/admin/write' },
];

export const adminTableHeader = [
  { id: 1, title: 'No', width: '60px' },
  { id: 2, title: '생성일', width: '120px' },
  { id: 3, title: '업로드일', width: '120px' },
  { id: 4, title: '콘텐츠 ID', width: '160px' },
  { id: 5, title: '제목', width: '360px' },
  { id: 6, title: '태그', width: '200px' },
  { id: 7, title: '상세보기', width: '160px' },
];

export const myWordListMenu: MyWordListMenuType[] = ['히스토리', '북마크', '오답노트', '졸업노트'];

export const myWordListInfo = {
  히스토리: {
    icon: scrapIcon,
    title: '내가 본 단어는 히스토리',
    description: '머니뉴스를 보고 학습한 단어는<br/> 히스토리에 자동 저장돼요.',
  },
  북마크: {
    icon: bookMarkIcon,
    title: '중요한 단어는 북마크',
    description: '어려운 단어는 북마크하면,',
  },
  오답노트: {
    icon: reviewNoteIcon,
    title: '틀린 단어는 오답노트',
    description: '진행한 퀴즈에서 틀린 단어들을<br/>모아보고 학습해요.',
  },
  졸업노트: {
    icon: graduationIcon,
    title: '열심히 공부한 졸업노트',
    description: '퀴즈에서 3번 이상 맞추면<br/>단어가 졸업노트로 이동해요!',
  },
};

export const onboardingSteps = [
  {
    mobileImage: mobileImage1,
    tabletImage: tabletImage1,
    title: '매일 한 개씩, 한 줄씩 성장하는 금융 지식',
    description: '어려운 단어가 가득한 금융정보를<br />한 문장씩, 단어해석과 함께 공부해보세요.',
  },
  {
    mobileImage: mobileImage2,
    tabletImage: tabletImage2,
    title: '중요한 단어는 스크랩',
    description: '학습이 완료된 후, 중요한 단어는 스크랩하여<br />‘나의 단어장’에서 관리해 주세요.',
  },
  {
    mobileImage: mobileImage3,
    tabletImage: tabletImage3,
    title: '핵심 노트를 통한 퀴즈 학습',
    description:
      '스크랩한 단어 중 중요단어를 체크해 주시면<br />퀴즈를 통해 반복 학습하실 수 있어요.',
  },
  {
    mobileImage: mobileImage4,
    tabletImage: tabletImage4,
    title: '틀린 단어는 오답 노트로 복습',
    description: '틀린 단어는 오답 노트를 통해 복습하여<br />어렵기만 한 금융단어를 졸업해 보세요.',
  },
];

export const Banners = [
  {
    mobileImage: mobileBanner1,
    tabImage: tabBanner1,
    webImage: webBanner1,
  },
  {
    mobileImage: mobileBanner2,
    tabImage: tabBanner2,
    webImage: webBanner2,
  },
  {
    mobileImage: mobileBanner3,
    tabImage: tabBanner3,
    webImage: webBanner3,
  },
];

export const SHOW_NEWS_DETAIL_ONBOARDING_KEY = 'showDetailPageOnboarding';
export const SHOW_NEWS_DETAIL_ONBOARDING = JSON.parse(
  localStorage.getItem(SHOW_NEWS_DETAIL_ONBOARDING_KEY) ?? 'true',
);

export const SHOW_NEWS_COMPLETE_ONBOARDING_KEY = 'showCompletePageOnboarding';
export const SHOW_NEWS_COMPLETE_ONBOARDING = JSON.parse(
  localStorage.getItem(SHOW_NEWS_COMPLETE_ONBOARDING_KEY) ?? 'true',
);

export const SHOW_NEWS_COMPLETE_PAGE_TURORIAL_KEY = 'shownewsCompleteTurotial'; // 삭제 예정
export const SHOW_NEWS_COMPLETE_PAGE_TURORIAL =
  localStorage.getItem('shownewsCompleteTurotial') === null; // 삭제 예정

export const NORMAL_QUIZ_RESULT_KEY = 'normalQuizResult';
export const RANDOM_QUIZ_RESULT_KEY = 'randomQuizResult';

export const LEARNING_DURATION_SECONDS_KEY = 'learningDuration';

export const tutorialTitleList = [
  {
    id: 1,
    src: {
      mobile: detailOnboardingImg1_mobile,
      tab: detailOnboardingImg1_tab,
    },
    top: '첫 문단에서는 단어의',
    bottom: '사전적인 뜻을 학습해요!',
  },
  {
    id: 2,
    src: {
      mobile: detailOnboardingImg2_mobile,
      tab: detailOnboardingImg2_tab,
    },
    top: '다음 문단에서는 단어의 특징과',
    bottom: '경제에 미치는 영향을 학습해요!',
  },
  {
    id: 3,
    src: {
      mobile: detailOnboardingImg3_mobile,
      tab: detailOnboardingImg3_tab,
    },
    top: '학습이 끝나면 원문 뉴스로',
    bottom: '심화 학습에 도전해요!',
  },
];

export const ADMIN_UPLOAD_LIST_PAGE_SIZE = 5;
export const WEEK_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
