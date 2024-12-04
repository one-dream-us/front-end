type ShareHandler = (currentUrl: string, setIsShareModalOpen: (isOpen: boolean) => void) => void;

const shareUtils = {
  handleCopyLink: (currentUrl: string, setIsShareModalOpen: (isOpen: boolean) => void) => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setIsShareModalOpen(false);
    });
  },

  handleFacebookShare: (currentUrl: string, setIsShareModalOpen: (isOpen: boolean) => void) => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`);
    setIsShareModalOpen(false);
  },

  handleXShare: (currentUrl: string, setIsShareModalOpen: (isOpen: boolean) => void) => {
    window.open(`https://twitter.com/intent/tweet?url=${currentUrl}`);
    setIsShareModalOpen(false);
  },

  handleKakaoShare: async (currentUrl: string, setIsShareModalOpen: (isOpen: boolean) => void) => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '제목입니다',
        description: '설명란입니다',
        imageUrl: 'https://placehold.co/200x200',
        link: {
          mobileWebUrl: currentUrl,
          webUrl: currentUrl,
        },
      },
    });

    setIsShareModalOpen(false);
  },

  handleButtonClick: (
    handler: ShareHandler,
    setIsShareModalOpen: (isOpen: boolean) => void,
    currentUrl: string,
  ) => {
    return () => {
      handler(currentUrl, setIsShareModalOpen);
    };
  },
};

export default shareUtils;
