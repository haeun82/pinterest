import {
  StyledMasonry, 
  ImageWrapper, 
  StyledImg, 
  ButtonGroup, 
  Button,
  IconButton
} from "../styles/ImageGrid.styles";
import { FiMoreHorizontal } from 'react-icons/fi';


const ImageGrid = ({ images }) => {
  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    768: 2,
    480: 1,
  };

  return (
    <StyledMasonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.map((img) => (
        <ImageWrapper key={img.id}>
          <StyledImg
            src={img.urls.small}
            alt={img.alt_description || 'unsplash image'}
          />
          <ButtonGroup className="button-group">
            <Button>저장</Button>
            <IconButton>
              <FiMoreHorizontal size={20} color="black" />
            </IconButton>
          </ButtonGroup>
        </ImageWrapper>
      ))}
    </StyledMasonry>
  );
};

export default ImageGrid;
