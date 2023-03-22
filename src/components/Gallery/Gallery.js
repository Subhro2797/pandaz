import BackpackGallery from '../BackpackGallery/BackpackGallery';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import ShoeGallery from '../ShoeGallery/ShoeGallery';
import ShoeModal from '../ShoeModal/ShoeModal';
const Gallery = () => {
    return (

        <div>
            <Header></Header>
            <ShoeGallery><ShoeModal></ShoeModal></ShoeGallery>
            <BackpackGallery><Modal></Modal></BackpackGallery>
        </div>

    );
};

export default Gallery;