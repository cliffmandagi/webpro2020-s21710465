import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";

const cekTahun = () => {
  return new Date().getFullYear();
}

const Hello = () => {
  return (
    <>
    <p>Tahun sekarang adalah {cekTahun()}</p>
    </>
  )
}

function App() {
  return (
    <>
      <Header />
      <Hello />
      <Content />
    </>
  );
}

export default App;
