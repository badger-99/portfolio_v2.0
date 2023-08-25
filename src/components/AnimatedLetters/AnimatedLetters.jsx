import './animatedLetters.scss';

const AnimatedLetters = ({charClassName, charArray, idx}) => {
  return (
    <span>
      {
        charArray.map((char, i) => (
          <span key={char + i} className={`${charClassName} _${i + idx}`}>
            {char}
          </span>
        ))
      }
    </span>
  )
}
export default AnimatedLetters