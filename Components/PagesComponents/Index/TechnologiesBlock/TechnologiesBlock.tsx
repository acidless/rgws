import Slider from "../../../Slider/Slider";
import { useSelector } from "react-redux";
import { GetTechnologies } from "../../../../redux/reducers/Technology/TechnologyReducer";
import { GetTechnologiesSelector } from "../../../../redux/reducers/Technology/TechnologySelector";
import useDispatchOnMount from "../../../../Hooks/useDispatchOnMount/useDispatchOnMount";
import ITech from "../../../../types/Content/ITechnology/ITech";
import useShowOnScroll from "../../../../Hooks/useShowOnScroll/useShowOnScroll";
import { useRef, useState } from "react";

/*====================*/

type PropsType = {
  isForAll?: boolean;
  technologies?: Array<ITech>;
};

/*====================*/

const TechnologiesBlock: React.FC<PropsType> = function ({ technologies, isForAll = true }) {
  const [isActive, setActive] = useState(false);

  /*====================*/

  let techs = useSelector(GetTechnologiesSelector);

  /*====================*/

  const techsRef = useRef(null);
  if (technologies) {
    techs = technologies;
  }

  /*====================*/

  useDispatchOnMount(GetTechnologies);
  useShowOnScroll(techsRef, setActive);

  /*====================*/

  return (
    <section className="technologies additional-block">
      <div className="container">
        <h2 className="custom-heading">Технологии</h2>
        <p className="line">
          {isForAll
            ? "Список технологий, которые я исполользую в своих проектах."
            : "Список технологий, которые я использовал в этом проекте."}
        </p>
        <div ref={techsRef} className={`${isActive ? "active " : ""}technologies__slider`}>
          <Slider>
            {techs.map((tech) => {
              return (
                <div key={tech._id}>
                  <div className="image-wrapper flex-container">
                    <img src={tech.image} alt={tech.name} />
                    <h3>{tech.name}</h3>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

/*====================*/

export default TechnologiesBlock;
