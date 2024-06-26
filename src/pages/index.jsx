import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/header';
import { Intro } from '../components/intro';
import { Pose } from '../components/pose';


const HomePage = () => {
  return (
    <>
        <Header title="Jogíni" />
        <Intro heading="Vítejte mezi Jogíny" text= "Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem. Postupně se seznámíte se základními principy jógy, jak přístupovat k sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu svoje tělo, pocity a emoce." />
        <Pose src="img/yoga-pose.jpg" />
    </>
  )
}

document.querySelector('#root').innerHTML = render(
  <HomePage />
);
