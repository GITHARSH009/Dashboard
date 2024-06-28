import PropTypes from "prop-types";
import styles from "./top-navigation.module.css";

const TopNavigation = ({ className = "" }) => {
  return (
    <header className={[styles.topNavigation, className].join(" ")}>
      <div className={styles.topNavigationChild} />
      <div className={styles.contentLeftTopWrapper}>
        <div className={styles.contentLeftTop}>
          <a className={styles.logo}>Logo</a>
        </div>
      </div>
      <div className={styles.navigation}>
        <div className={styles.navigationChild} />
        <button className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.briefcase02Wrapper}>
            <img
              className={styles.briefcase02Icon}
              alt=""
              src="/briefcase02.svg"
            />
          </div>
          <a className={styles.jobs}>Jobs</a>
        </button>
        <div className={styles.navigationInner}>
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.messageSquare01Parent}>
                <img
                  className={styles.messageSquare01Icon}
                  loading="lazy"
                  alt=""
                  src="/messagesquare01.svg"
                />
                <div className={styles.messagesNotification} />
              </div>
            </div>
            <a className={styles.messages}>Messages</a>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.paymentsIconContainerParent}>
            <div className={styles.paymentsIconContainer}>
              <img
                className={styles.coinsHandIcon}
                loading="lazy"
                alt=""
                src="/coinshand.svg"
              />
            </div>
            <a className={styles.payments}>Payments</a>
          </div>
        </div>
      </div>
      <div className={styles.notificationsContainerWrapper}>
        <div className={styles.notificationsContainer}>
          <div className={styles.notificationsContainerInner}>
            <div className={styles.bell02Parent}>
              <img
                className={styles.bell02Icon}
                loading="lazy"
                alt=""
                src="/bell02.svg"
              />
              <div className={styles.notificationsIndicator} />
            </div>
          </div>
          <select className={styles.option1Wrapper}>
            <option value="option_1">Option 1</option>
          </select>
        </div>
      </div>
    </header>
  );
};

TopNavigation.propTypes = {
  className: PropTypes.string,
};

export default TopNavigation;
