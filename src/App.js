import "./App.css";
import { Suspense,lazy } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import {Helmet} from "react-helmet";
import { Provider } from "react-redux";
import store from "./utils/store";
import {Outlet, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchShimmer from "./components/SearchShimmer";
import SearchResult from "./components/SearchResults";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <Provider store={store}>
    <div className="grid grid-cols-6 overflow-hidden">
    <Helmet>
                <meta charSet="utf-8" />
                <title>SamTube</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="This is my video streaming website" />
            </Helmet>
      <div className="col-span-6"><Header/></div>
      <Sidebar/>
      <Outlet/>
    </div>
    </Provider>
  );
}

export const appRouter=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>,
    },
    {
      path:"watch",
      element:<WatchPage/>,
    },
    {
      path: "Result",
      element: (
        <Suspense fallback={<SearchShimmer />}>
          <SearchResult />
        </Suspense>
      ),
    },
  ]
}])

export default App;
