import Header from "./components/Header/Header.jsx";
import css from './style/app.module.scss'
const App = () => {
 
  return <div className={`bg-primary ${css.container}`} >
<Header/>
  </div>
};

export default App;