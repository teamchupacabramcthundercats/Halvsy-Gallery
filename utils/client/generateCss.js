module.exports.generateCss = () => {
  const styles = `
  .thumbnail-carousel-container {
    align-items: flex-start;
    justify-content: flex-start;
    box-sizing: border-box;
    scrollbar-width: none;
    overflow: scroll;
    -ms-overflow-style: none;
    width: 75px;
    height: 600px;
    margin-right: 8px;
  }
  
  .thumbnail-carousel-container::-webkit-scrollbar {
    display: none;
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
    padding: 0px;
    margin: 0px;
  }
  `;

  const css = document.createElement('style');
  css.type = 'text/css';
  css.id = 'gallery-styles';

  css.appendChild(document.createTextNode(styles));

  document.getElementsByTagName('head')[0].appendChild(css);
};
