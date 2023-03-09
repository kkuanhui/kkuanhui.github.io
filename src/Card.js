
const Card = (props) => {
  const blogImg =
    "https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2184&q=80";
  const blogCreateDate = "2023/01/01";
  const blogTitle = "Express.js 用法";
  return (
    <div className="card" style={props.style}>
      <img src={blogImg} width={"250"} height={"150"} alt="cards"></img>
      <div className="card-title">{blogTitle}</div>
      <div className="card-time">{blogCreateDate}</div>
    </div>
  );
};

export default Card;