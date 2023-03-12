import React from 'react';
import BackpackCollection from '../BackpackCollection/BackpackCollection';
import Carousolcontainer from '../Carousolcontainer/Carousolcontainer';
import Categories from '../Categories/Categories';
import Footer from '../Footer/Footer';
import ShoesContainer from '../ShoesContainer/ShoesContainer';
import Subscribe from '../Subscribe/Subscribe';





const Home = () => {
    return (
        <div>
            <Carousolcontainer></Carousolcontainer>
            <Categories></Categories>
            <ShoesContainer></ShoesContainer>
            <BackpackCollection></BackpackCollection>
            <Subscribe></Subscribe>
            <Footer></Footer>

        </div>
    );
};

export default Home;