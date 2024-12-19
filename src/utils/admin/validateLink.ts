const validateLink = (target: string) => {
  const pattern = /^https:\/\/www\.youtube\.com\/watch\?v=[A-Za-z0-9_\-!@#$%^&*()+=]{11}$/;
  return pattern.test(target);
};
export default validateLink;
