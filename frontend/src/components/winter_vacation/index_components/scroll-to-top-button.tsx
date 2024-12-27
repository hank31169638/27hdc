import React from 'react';

function ScrollToTopButton() {
  const scrollToTop = () => {
    const scrollableContainer = document.getElementById('scroll-container');
    if (scrollableContainer) {
      scrollableContainer.scrollTo({
        top: 0,
        behavior: 'smooth', // 平滑滾動效果
      });
    }
  };

  return (
    <button
      className="fixed right-[5vw] bottom-[40px] mix-blend-difference hover:scale-110 duration-300 outline-none"
      onClick={scrollToTop}
    >
      回到頂部
    </button>
  );
}

export default ScrollToTopButton;
