import PropTypes from "prop-types";
import styles from "./frame-component.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.jobPreviewHeader}>
        <a className={styles.jobPreview} style={{'cursor':'pointer'}}>Job preview</a>
        <div className={styles.separatorWrapper}>
          <div className={styles.separator} />
        </div>
      </div>
      <a className={styles.applicants} style={{'cursor':'pointer'}}>Applicants</a>
      <a className={styles.match} style={{'cursor':'pointer'}}>Match</a>
      <a className={styles.messages} style={{'cursor':'pointer'}}>Messages</a>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
