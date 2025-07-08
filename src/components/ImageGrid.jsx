import {
  StyledMasonry, 
  ImageWrapper, 
  StyledImg, 
  ButtonGroup, 
  Button,
  IconButton
} from "../styles/ImageGrid.styles";
import { FiMoreHorizontal } from 'react-icons/fi';

const ImageGrid = ({ images, lastImageRef }) => {
  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    768: 2,
    480: 1,
  };

  const handleSaveClick = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'save_img.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <StyledMasonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images?.map((img, index) => {
        const isLast = index === images.length - 1;

        return (
          <ImageWrapper key={img.id} ref={isLast ? lastImageRef : null}>
            <StyledImg
              src={img.urls.small}
              alt={img.alt_description || 'unsplash image'}
            />
            <ButtonGroup className="button-group">
              <Button onClick={() => handleSaveClick(img.urls.full)}>저장</Button>
              <IconButton>
                <FiMoreHorizontal size={20} color="black" />
              </IconButton>
            </ButtonGroup>
          </ImageWrapper>
        );
      })}
    </StyledMasonry>
  );
};

export default ImageGrid;
