

const Article = () => {
  const imageSrc = "https://images.unsplash.com/photo-1500252185289-40ca85eb23a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"

  return (
    <div id="main">
      <h1>CSS 順序的探討</h1>
      {/* <img 
      src={imageSrc}
      alt="article cover img" 
      className="article-cover"></img> */}

      <img src={imageSrc} height="450" width="800" alt="the first blog"></img>
      <div className="article">
        <p>這是段落一</p>
        <p>這是段落二</p>
      </div>
    </div>
  );
};

export default Article;