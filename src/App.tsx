import Heading from "./assets/components/Heading"
import Section from "./assets/components/Section"
import Counter from "./assets/components/Counter"
import List from "./assets/components/List"
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0) 

  return (
    <>
      <Heading title="Hello World"/>
      <Section children="This is a child Element" title="This is a title"/>
      <Counter setCount={setCount} count={count}>{count}</Counter>
      <List items={['☕ Coffee', '🌮 Tacos', '‍💻 Code']} render={(item: string) => <span className="bold">{item}</span>}/>
    </>
  )
}

export default App