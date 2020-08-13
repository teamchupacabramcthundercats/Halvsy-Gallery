module.exports.generateCss = () => {
  const styles = `
  .thumbnail-carousel-container {
    position: relative;
    box-sizing: border-box;
    width: 75px;
    height: 600px;
    margin-right: 8px;
  }
  
  .flex-container {
    display: flex;
  }
  
  .gallery {
    flex-flow: row;
    width: auto;
    height: auto;
  }
  
  .main-view {
    box-sizing: border-box;
    width: 800px;
    height: 600px;
  }
  
  .thumbnail-list {
    flex-flow: column;
    align-items: flex-start;
    box-sizing: border-box;
    list-style: none;
    scrollbar-width: none;
    overflow: scroll;
    -ms-overflow-style: none;
    padding: 0px;
    margin: 0px;
  }
  
  .thumbnail-list::-webkit-scrollbar {
    display: none;
  }
  
  .thumbnail-scroll-up {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 60px;
  }
  
  .thumbnail-scroll-down {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 60px;
  }
  
  .modal {
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 3;
  }
  
  .hidden-modal {
    display: none;
  }
  `;

  const css = document.createElement('style');
  css.type = 'text/css';
  css.id = 'gallery-styles';

  css.appendChild(document.createTextNode(styles));

  document.getElementsByTagName('head')[0].appendChild(css);
};
