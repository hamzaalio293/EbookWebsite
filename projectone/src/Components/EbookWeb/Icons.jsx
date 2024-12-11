import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icons = ({ icon, title, description }) => {
  return (
    <section className="icons bg-light pb-1">
      <div className="container-xl">
        <div className="d-flex flex-column align-items-center">
          {/* Icon */}
          <FontAwesomeIcon icon={icon} size="3x" className="text-primary mb-3" />
          {/* Title */}
          <div className="text-center">
            <h5 className="fw-bold">{title}</h5>
            <p className="text-muted mb-4">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Icons;
