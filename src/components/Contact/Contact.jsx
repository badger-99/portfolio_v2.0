import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './contact.scss';

const Contact = () => {
  const word = 'Contact Me'.split('');
  const [theClassName, setTheClassName] = useState('text-animate-hover');

  useEffect(() => {
    setTimeout(() => {
      setTheClassName('text-animate-hover');
    }, 3000);
  }, []);
  return (
    <>
      <div className="continer contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              charArray={word}
              charClassName={theClassName}
              idx={15}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            similique doloremque sed praesentium quod aliquam expedita,
            inventore quas ratione, sit sunt quia ducimus eius itaque. Odio
            aspernatur porro provident mollitia!
          </p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input type="email" name="email" placeholder="Email" required />
                </li>
                <li>
                  <input type="text" name="Subject" placeholder="Subject" required />
                </li>
                <li>
                  <textarea name="message" placeholder='Message' required></textarea>
                </li>
                <li>
                  <input type="submit" className='flat-button' value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};
export default Contact;
