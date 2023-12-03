import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>,
    },
    {
      path:"watch",
      element:<WatchPage/>,
    }
  ]
}])
function App() {
  return (
    <Provider store={store}>
    <div>
     <Header/>
     <RouterProvider router={appRouter}/>
     <Body/>
    </div>
    </Provider>
  );
}

export default App;
