type PropsType = {
  description: string;
  repository: string;
};

/*====================*/

const ProjectInfo: React.FC<PropsType> = function ({ repository, description }) {
  return (
    <section className="light-block project-wrapper__info">
      <div className="container">
        <h2 className="custom-heading">Информация о проекте</h2>
        {repository && (
          <p className="align-left small-line flex-container align-items-start">
            <span className="material-icons text--blue animated-icon">link</span>
            Github репозиторий:
            <a className="blue-link project-wrapper__repository-link" href={repository} target="_blank">
              {repository}
            </a>
          </p>
        )}
        <p className="align-left small-line flex-container align-items-start">
          <span className="material-icons text--blue animated-icon">info</span>
          Описание: {description}
        </p>
      </div>
    </section>
  );
};

/*====================*/

export default ProjectInfo;
