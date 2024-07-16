import { FC } from "react";
import Api from "./thread.tsx";

const App: FC = () => {
  return(
    <div>
      <h1>掲示板</h1>
      <Api />
    </div>
  )
}
export default App;