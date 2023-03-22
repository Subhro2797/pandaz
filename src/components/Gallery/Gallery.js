import BackpackGallery from '../BackpackGallery/BackpackGallery';
import Modal from '../Modal/Modal';
import ShoeGallery from '../ShoeGallery/ShoeGallery';
import ShoeModal from '../ShoeModal/ShoeModal';
const Gallery = () => {
    return (

        <div>
            <ShoeGallery><ShoeModal></ShoeModal></ShoeGallery>
            <BackpackGallery><Modal></Modal></BackpackGallery>
        </div>

    );
};

export default Gallery;