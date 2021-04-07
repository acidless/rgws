function MainBlock() {
  function onClick() {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  }

  /*====================*/

  return (
    <section className="main-info additional-block block flex-container">
      <div className="main-info__content container flex-container">
        <div>
          <h1>RGWS</h1>
          <p>Web разработчик</p>
        </div>
        <div className="main-info__scroll-down flex-container centered">
          <button onClick={onClick} className="main-info__scroll-btn default-btn">
            <span className="material-icons">arrow_circle_down</span>
          </button>
        </div>
      </div>
    </section>
  );
}

/*====================*/

export default MainBlock;
