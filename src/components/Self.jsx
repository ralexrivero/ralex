import { Link } from 'react-router-dom';

const Self = () => {
  return (
    <div className="success-message">
      <p>¡Genial! 🎉 ¡Tu mensaje fue enviado! 💌</p>
      <p>¡Mil gracias por tomarte el tiempo de escribirme! 🙌 Valoro tus palabras y te prometo que te voy a contestar a la brevedad. Mientras tanto, dale una mirada a la página y conóceme un poco más. 🌟</p>
      <p>¡Espero que el sitio te guste y te parezca buena onda! 💫✨</p>
      <Link to="/" className="success-message-link"><span className="material-symbols-rounded">home</span></Link>
    </div>
  );
}

export default Self;
