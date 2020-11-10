import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Card from "./components/Card";

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

const person = [
  {
    name:"McClif Mandagi",
    institute:"Universitas Klabat",
    address:"Airmadidi - Minahasa Utara", 
    phone:"081355726832"
  },
  {
    name:"John Doe",
    institute:"Universitas Klabat",
    address:"Airmadidi - Minahasa Utara", 
    phone:"081355726832"
  },
  {
    name:"Test",
    institute:"Universitas Klabat",
    address:"Airmadidi - Minahasa Utara", 
    phone:"081355726832"
  }
]

function App() {
  return (
    <>
    {person.map((item) => {
      return (
        <Card 
          name={item.name}
          institute={item.institute} 
          address={item.address} 
          phone={item.phone}
          />
      )
    })}
    </>
  );
}

export default App;
