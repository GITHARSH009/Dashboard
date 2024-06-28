import { Button } from "@mui/material";
import TopNavigation from "../components/top-navigation";
import FrameComponent from "../components/frame-component";
import styles from "./index.module.css";

const JobPreviewDashboard = () => {
  return (
    <div className={styles.jobPreviewDashboard}>
      <TopNavigation />
      <main className={styles.gridWithStarsParent}>
        <FrameComponent />
        <section className={styles.jobDetails}>
          <div className={styles.jobDetails1} style={{'minWidth':'65%'}}>
            <div className={styles.jobDetailsChild} />
            <h1 className={styles.seniorProductDesigner}>
              Senior Product Designer
            </h1>
            <div className={styles.jobSummary} />
            <div className={styles.posted2Days}>posted 2 days ago</div>
            <div className={styles.badge}>
              <div className={styles.badgeBackground}>
                <img className={styles.dotIcon} alt="" src="/-dot.svg" />
              </div>
              <a className={styles.text}>Open</a>
            </div>
            <img
              className={styles.markerPin01Icon}
              loading="lazy"
              alt=""
              src="/markerpin01.svg"
            />
            <div className={styles.delawareUsa}>Delaware, USA</div>
            <div className={styles.jobSummary1} />
            <img
              className={styles.coinsStacked03Icon}
              loading="lazy"
              alt=""
              src="/coinsstacked03.svg"
            />
            <div className={styles.k400k}>$300k-$400k</div>
            <div className={styles.jobInfo}>
              <div className={styles.jobTags}>
                <div className={styles.label}>Skills Required</div>
                <div className={styles.tags}>
                  <div className={styles.tag}>
                    <div className={styles.content}>
                      <img
                        className={styles.image1Icon}
                        loading="lazy"
                        alt=""
                        src="/image-1@2x.png"
                      />
                      <div className={styles.tagName}>Figma</div>
                    </div>
                  </div>
                  <button className={styles.tag1}>
                    <div className={styles.content1}>
                      <img
                        className={styles.image2Icon}
                        alt=""
                        src="/image-2@2x.png"
                      />
                      <div className={styles.text1}>Adobe Illustrator</div>
                    </div>
                  </button>
                  <div className={styles.tag2}>
                    <div className={styles.content2}>
                      <img
                        className={styles.image6Icon}
                        loading="lazy"
                        alt=""
                        src="/image-6@2x.png"
                      />
                      <div className={styles.text2}>Adobe XD</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.jobInfoList}>
                <div className={styles.label1}>Preferred Language</div>
                <div className={styles.infoContent}>English</div>
              </div>
              <div className={styles.jobInfoList1}>
                <div className={styles.label2}>Type</div>
                <div className={styles.text3}>Full time</div>
              </div>
              <div className={styles.jobInfoList2}>
                <div className={styles.label3}>Years of Experience</div>
                <div className={styles.text4}>3+ Years of Experience</div>
              </div>
            </div>
            <div className={styles.label4}>About the job</div>
            <div className={styles.jobDescription}>
              <p
                className={styles.handleTheUiux}
              >{`1. Handle the UI/UX research design2. Work on researching on latest web applications designs & trends3. Work on conceptualizing and visualizing4. Work on creating graphics content and other graphic related works`}</p>
              <p className={styles.benefits}>Benefits:</p>
              <ul className={styles.healthInsuranceProvidentFun}>
                <li className={styles.healthInsurance}>Health insurance</li>
                <li className={styles.providentFund}>Provident Fund</li>
              </ul>
              <p className={styles.schedule}>Schedule:</p>
              <ul className={styles.dayShift}>
                <li className={styles.dayShift1}>Day shift</li>
              </ul>
              <p className={styles.supplementalPayTypes}>
                Supplemental pay types:
              </p>
              <ul className={styles.performanceBonusYearlyBonus}>
                <li className={styles.performanceBonus}>Performance bonus</li>
                <li className={styles.yearlyBonus}>Yearly bonus</li>
              </ul>
              <p className={styles.workLocationIn}>Work Location: In person</p>
            </div>
            <div className={styles.jobSummary2} />
            <div className={styles.jobSummary3} />
            <div className={styles.jobSummary4} />
            <div className={styles.companyInfo}>
              <div className={styles.companyLogoContainer}>
                <div className={styles.companyLogo}>
                  <img
                    className={styles.logoBackgroundIcon}
                    loading="lazy"
                    alt=""
                    src="/rectangle-43@2x.png"
                  />
                  <div className={styles.atlassian}>Atlassian</div>
                </div>
              </div>
              <div className={styles.companyDetails}>
                <div className={styles.companyDetailItems}>
                  <div className={styles.label5}>Company size</div>
                  <div className={styles.companyDetailContent}>
                    1k - 2k Employees
                  </div>
                </div>
                <div className={styles.companyDetailItems1}>
                  <div className={styles.label6}>Type</div>
                  <div className={styles.text5}>Private</div>
                </div>
                <div className={styles.companyDetailItems2}>
                  <div className={styles.label7}>Sector</div>
                  <div className={styles.text6}>
                    Information Technology, Infrastructure
                  </div>
                </div>
                <div className={styles.companyDetailItems3}>
                  <a className={styles.label8}>Funding</a>
                  <div className={styles.text7}>Bootstrapped</div>
                </div>
                <div className={styles.companyDetailItems4}>
                  <div className={styles.label9}>Founded In</div>
                  <div className={styles.text8}>2019</div>
                </div>
                <div className={styles.companyDetailItems5}>
                  <div className={styles.label10}>Founded By</div>
                  <div className={styles.text9}>
                    <a
                      className={styles.scottFarquhar}
                      href={`https://www.google.com/search?sca_esv=2e8a42a989b18c72&sca_upv=1&sxsrf=ADLYWIJfOan6Il30oG_UZfuOgWJJQyy6jw:1718807486320&q=Scott+Farquhar&si=ACC90nwLLwns5sISZcdzuISy7t-NHozt8Cbt6G3WNQfC9ekAgGn2U5_lv-iJKoEW9GGV3oQ_U1KzHM3grBvdDJw8AP9jrnXyCRK6qNSYCb3jHdJP2aGUh_HIEtaCjacARkKoOWECb-5Ob0Mv9e_MI4c_vMY8PVDZWA6-OO6yqvbV1TIRgm4P4FtNTbK6rHh3ojk0CXz_ZgaKdVf6VpRiXhZ7YUAy8LzI5HMyryDEBGhju5Ama_FvECG7_qGa4tSKw7XIbHa99s9btrbgRBy-6z85_2p6BPYPhA%3D%3D&sa=X&sqi=2&ved=2ahUKEwip7KLt8OeGAxVBRmwGHTGjBGsQmxMoAXoECDYQAw`}
                      target="_blank"
                    >
                      <span className={styles.scottFarquhar1}>
                        Scott Farquhar
                      </span>
                    </a>
                    <span className={styles.span}>, </span>
                    <a
                      className={styles.mikeCannonBrookes}
                      href={`https://www.google.com/search?sca_esv=2e8a42a989b18c72&sca_upv=1&sxsrf=ADLYWIJfOan6Il30oG_UZfuOgWJJQyy6jw:1718807486320&q=Mike+Cannon-Brookes&si=ACC90nwLLwns5sISZcdzuISy7t-NHozt8Cbt6G3WNQfC9ekAgJsvrQUWPOKZ8iETJQdvnbU2UFD7BVWUbHmvxqkn_X6fnbX-LLuIjmm9FYDOCdLoN8dDFvHE1HsZUhT6XIGTrbZRGGDIDstquY_yluK6YQX1NkHtmo0wsp8wVD7ouAbjfDvaQHjO4Iyd2AKnCQbPH8-Ah5otgNPwHcJ39HScqiWv6SVxYRXUiznwfdbns6uKnydurua8JyyTlcxFT3lPFMTAfAAzqy-x0DxflUh6aHFtCEgFOChGuNdxmDlND1wruAK7SbM%3D&sa=X&sqi=2&ved=2ahUKEwip7KLt8OeGAxVBRmwGHTGjBGsQmxMoAnoECDYQBA`}
                      target="_blank"
                    >
                      <span className={styles.mikeCannonBrookes1}>
                        Mike Cannon-Brookes
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.actionDividerParent} style={{'minWidth':'20%','maxHeight':'40%','marginLeft':'2rem'}}>
              <div className={styles.actionDivider} />
              <div className={styles.dropdownOptions}>
                <Button
                  className={styles.deleteAction}
                  startIcon={
                    <img width="20px" height="20px" src="/trash03.svg" />
                  }
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#dc4a2d",
                    fontSize: "16",
                    background: "#fef4f2",
                    border: "#dc4a2d solid 0.8px",
                    borderRadius: "8px",
                    "&:hover": { background: "#fef4f2" },
                    height: 47.6,
                  }}
                >
                  Delete job
                </Button>
                <Button
                  className={styles.editAction}
                  startIcon={
                    <img width="16px" height="16px" src="/edit02.svg" />
                  }
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#dc4a2d",
                    border: "#fed3ca solid 2px",
                    borderRadius: "8px",
                    "&:hover": { background: "#dc4a2d" },
                    height: 50,
                  }}
                >
                  Edit job
                </Button>
              </div>
              <div className={styles.jobEngagement}>
                <div className={styles.engagementIcons}>
                  <div className={styles.iconsWrapper}>
                    <div className={styles.icons}>
                      <div className={styles.engagementIcons1}>
                        <img
                          className={styles.users01Icon}
                          loading="lazy"
                          alt=""
                          src="/users01.svg"
                        />
                      </div>
                      <div className={styles.applicants}>Applicants</div>
                    </div>
                  </div>
                  <div className={styles.engagementDivider}>400</div>
                </div>
                <div className={styles.engagementIcons2} />
                <div className={styles.engagementIcons3}>
                  <div className={styles.engagementIconsInner}>
                    <div className={styles.frameParent}>
                      <div className={styles.userCheck01Wrapper}>
                        <img
                          className={styles.userCheck01Icon}
                          loading="lazy"
                          alt=""
                          src="/usercheck01.svg"
                        />
                      </div>
                      <div className={styles.matches}>Matches</div>
                    </div>
                  </div>
                  <div className={styles.div}>100</div>
                </div>
                <div className={styles.engagementIcons4} />
                <div className={styles.engagementIcons5}>
                  <div className={styles.engagementIconsChild}>
                    <div className={styles.frameGroup}>
                      <div className={styles.messageSquare01Wrapper}>
                        <img
                          className={styles.messageSquare01Icon}
                          alt=""
                          src="/messagesquare01-1.svg"
                        />
                      </div>
                      <div className={styles.messages}>Messages</div>
                    </div>
                  </div>
                  <div className={styles.div1}>147</div>
                </div>
                <div className={styles.engagementIcons6} />
                <div className={styles.engagementIcons7}>
                  <div className={styles.frameDiv}>
                    <div className={styles.frameContainer}>
                      <div className={styles.eyeWrapper}>
                        <img
                          className={styles.eyeIcon}
                          loading="lazy"
                          alt=""
                          src="/eye.svg"
                        />
                      </div>
                      <div className={styles.views}>Views</div>
                    </div>
                  </div>
                  <div className={styles.div2}>800</div>
                </div>
              </div>
            </div>
        </section>
      </main>
    </div>
  );
};

export default JobPreviewDashboard;
