import reactImag from '../../assets/react-core-concepts.png';

export function Header() {
  const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

  const genRandomInt = (max) => Math.floor(Math.random() * (max + 1));

  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImag} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}

