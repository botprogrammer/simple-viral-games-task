export default function UncheckedIcon({
  width = 16,
  strokeColor = 'currentColor'
}) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} viewBox='0 0 256 256'>
      <path
        fill={strokeColor}
        d='M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Z'
      ></path>
    </svg>
  )
}
