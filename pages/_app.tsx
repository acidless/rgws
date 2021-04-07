import "../styles/app.scss";
import { Provider } from "react-redux";
import store from "../redux/store";

/*====================*/

type PropsType = {
  Component: React.ElementType;
  pageProps: object;
};

/*====================*/

const MyApp: React.FC<PropsType> = function ({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

/*====================*/

export default MyApp;
