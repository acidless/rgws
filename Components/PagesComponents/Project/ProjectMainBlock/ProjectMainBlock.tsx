import Slider from "../../../Slider/Slider";

/*====================*/

type PropsType = {
  projectName: string;
  shortDescription: string;
  images: Array<string>;
};

/*====================*/

const ProjectMainBlock: React.FC<PropsType> = function ({ projectName, shortDescription, images }) {
  return (
    <section className="additional-block">
      <div className="container">
        <div className="project-wrapper__main-info">
          <h2 className="custom-heading">{projectName}</h2>
          <p className="line">{shortDescription}</p>
          <div className="flex-container content-center">
            <Slider>
              {images.map((image) => {
                return (
                  <div key={image}>
                    <img className="full-size-block" src={image} alt="" />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

/*====================*/

export default ProjectMainBlock;
