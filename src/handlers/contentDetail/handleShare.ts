type ShareHandler = (
  currentUrl: string,
  setIsShareModalOpen: (isOpen: boolean) => void,
  showToast: (message: string, type: string) => void,
  title: string,
  description: string,
  img: string,
) => void;

const shareUtils = {
  handleCopyLink: (
    currentUrl: string,
    setIsShareModalOpen: (isOpen: boolean) => void,
    showToast: (message: string, type: string) => void,
  ) => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setIsShareModalOpen(false);
      showToast('링크가 복사되었어요.', 'copy');
    });
  },

  handleFacebookShare: (
    currentUrl: string,
    setIsShareModalOpen: (isOpen: boolean) => void,
    _showToast: (message: string, type: string) => void,
  ) => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`);
    setIsShareModalOpen(false);
  },

  handleXShare: (
    currentUrl: string,
    setIsShareModalOpen: (isOpen: boolean) => void,
    _showToast: (message: string, type: string) => void,
    text: string,
  ) => {
    const hashtags = '이게머니,Thisismoney';
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${currentUrl}&hashtags=${encodeURIComponent(hashtags)}`,
    );
    setIsShareModalOpen(false);
  },

  handleKakaoShare: async (
    currentUrl: string,
    setIsShareModalOpen: (isOpen: boolean) => void,
    _showToast: (message: string, type: string) => void,
    title: string,
    description: string,
    img: string,
  ) => {
    let cleanedDescription = description.replace(/<p[^>]*>/g, '').replace(/<\/p>/g, '');
    cleanedDescription = cleanedDescription.replace(/<br\s*\/?>/g, '');
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: title,
        description: cleanedDescription,
        imageUrl: img,
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
    showToast: (message: string, type: string) => void,
    title: string,
    description: string,
    img: string,
  ) => {
    return () => {
      handler(currentUrl, setIsShareModalOpen, showToast, title, description, img);
    };
  },
};
export default shareUtils;
