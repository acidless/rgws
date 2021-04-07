import Layout from "../../Components/Layout/Layout";
import Link from "next/link";

/*====================*/

function NotFound() {
  return (
    <Layout title="Not Found">
      <section className="not-found additional-block full-size-block flex-container content-center">
        <div className="container">
          <h2>404</h2>
          <p>Запрашиваемый ресурс не найден</p>
          <Link href="/">
            <a>
              <span className="material-icons">settings</span>
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

/*====================*/

export default NotFound;
