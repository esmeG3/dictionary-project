import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container-sm">
        <main>
          <Dictionary defaultKeyword="springtime" />
        </main>
        <footer>
          Coded by <a href="https://github.com/esmeG3">Esme G 🤍</a> open
          sourced on{" "}
          <a href="https://github.com/esmeG3/dictionary-project">
            {" "}
            Github <i class="fa-brands fa-github"></i>
          </a>{" "}
          and hosted on{" "}
          <a href="https://this-is-a-dictionary.netlify.app/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}
