import Header from "./Header";
import Footer from "./Footer";
import Teams from "./Teams";
import Schedule from "./Schedule";
import Champion from "./champion";

function App(){
  return(
    <>
      <Header/>
      <Teams/>
      <Schedule isFive={true} team={30} games= {40}/>
      <Schedule isFive={false} team="Lakers" games={20}/>
      <Schedule isFive={false} team="Bulls" games={15}/>
      <Schedule isFive={false} team="Bulls" games/>
      <Champion champion = {true} name = "Knicks"/>



      <Footer/>
    </>
  );
}

export default App