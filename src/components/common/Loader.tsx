export default function Loader({ size }: { size: number }) {
  return (
    <img
      className={`size-${size} animate-spin`}
      src='https://www.svgrepo.com/show/448500/loading.svg'
      alt='Loading icon'
    ></img>
  );
}
