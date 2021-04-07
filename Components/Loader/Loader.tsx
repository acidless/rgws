type PropsType = {
  useAdditionalColor?: boolean;
};

/*====================*/

const Loader: React.FC<PropsType> = function ({ useAdditionalColor }) {
  return (
    <div className={`medium-loader flex-container ${useAdditionalColor ? "additional-color" : ""}`}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

/*====================*/

export default Loader;
