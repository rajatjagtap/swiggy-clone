import Category from "./components/Category";
import Header from "./components/Header";
import OnlineDelivery from "./components/OnlineDelivery";
import TopRest from "./components/TopRest";

function App() {
  return (
   <>
     <Header/>
     <div  className="my-4">
        <Category/>
        <TopRest/>
        <OnlineDelivery/>
     </div>
   </>
  );
}

export default App;
