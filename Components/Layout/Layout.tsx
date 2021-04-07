import Header from "./Header/Header";
import Head from "next/Head";
import Footer from "./Footer/Footer";

/*====================*/

type PropsType = {
  title?: string;
};

/*====================*/

const Layout: React.FC<PropsType> = function ({ children, title }) {
  return (
    <>
      <Head>
        <html lang="ru" />
        <title>{title ? `${title} | ` : ""} RGWS</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <div className="app-container">
        <Header />
        <main className="flex-container column align-items-stretch">{children}</main>
        <Footer />
      </div>
    </>
  );
};

/*====================*/

export default Layout;
