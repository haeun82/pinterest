import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import styled from "styled-components"; 

const ScrollButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 30px;
  z-index: 1000;
  padding: 10px 13px;
  background-color: #ad081b;
  color: #fff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 300); 
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  if (!isVisible) return null;

  return (
    <ScrollButton onClick={scrollToTop}>
      <FaArrowUp size={25}/>
    </ScrollButton>
  );
};

export default ScrollToTopButton;
