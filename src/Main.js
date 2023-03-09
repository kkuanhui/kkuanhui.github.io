import Jumpbotron from "./Jumpbotron"
import Card from "./Card"

const Main = () => {
  return (
    <div id="main">
      <Jumpbotron></Jumpbotron>
      <div 
        className="d-flex flex-jc-center flex-ai-center flex-direction-row" 
        style={{ "width": "80%", "flexWrap": "wrap"}}>
        <Card style={{"flex": "1 0 auto"}}></Card>
        <Card style={{"flex": "1 0 auto"}}></Card>
        <Card style={{"flex": "1 0 auto"}}></Card>
        <Card style={{"flex": "1 0 auto"}}></Card>
      </div>
      <div>看更多文章</div>
    </div>
  )
}

export default Main