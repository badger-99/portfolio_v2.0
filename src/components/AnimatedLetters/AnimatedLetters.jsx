import './animatedLetters.scss';

const AnimatedLetters = ({charClass, charArray, idx}) => {
  return (
    <span>
      {
        charArray.map((char, i) => (
          <span key={char + i} className={`${charClass} _${i + idx}`}>
            {char}
          </span>
        ))
      }
    </span>
  )
}
export default AnimatedLetters