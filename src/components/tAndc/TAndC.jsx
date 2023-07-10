import React, { useState } from "react";
import "./tAndC.scss";

export const TAndC = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="TC">
      <div className="TC-top">
        <button className={show ? "active" : ""} onClick={() => setShow(true)}>
          Terms and Condition
        </button>
        <button
          className={!show ? "active" : ""}
          onClick={() => setShow(false)}
        >
          Privacy Policy
        </button>
      </div>
      <div className="TC-bottom">
        {!show ? (
          <>
            <div className="TC-desc">
              <strong>Personal Information We Collect:</strong> We may collect
              personal information such as your name, email address, and
              demographic information (age, gender, etc.) when you sign up for
              the Education Quiz League App. We may also collect information
              about your usage of the app, including quiz scores and performance
              data.
            </div>
            <div className="TC-desc">
              <strong>How We Use Your Personal Information:</strong> We use your
              personal information to provide you with a personalized experience
              on the Education Quiz League App, including personalized quiz
              content and recommendations. We may also use your information to
              communicate with you about the app, such as notifications about
              new features or updates.
            </div>
            <div className="TC-desc">
              <strong>Data Sharing:</strong> We do not share your personal
              information with third parties without your consent, except as
              required by law. We may share your information with service
              providers who help us operate the app, such as hosting providers
              and analytics providers.
            </div>
            <div className="TC-desc">
              <strong>Data Security:</strong> We take reasonable measures to
              protect your personal information from unauthorized access, use,
              and disclosure. We use industry-standard security measures such as
              encryption and firewalls to protect your information.
            </div>
            <div className="TC-desc">
              <strong>Data Retention:</strong> We will retain your personal
              information for as long as necessary to provide you with the
              Education Quiz League App, unless a longer retention period is
              required by law.
            </div>
            <div className="TC-desc">
              <strong>Children's Privacy:</strong> The Education Quiz League App
              is intended for users 13 years and older. We do not knowingly
              collect personal information from children under 13. If we become
              aware that we have collected personal information from a child
              under 13 without parental consent, we will take steps to delete
              that information.
            </div>
            <div className="TC-desc">
              <strong>Changes to the Privacy Policy:</strong> We may modify this
              privacy policy at any time. If we make material changes to the
              policy, we will notify you via the app or by email
            </div>
          </>
        ) : (
          <>
            <div className="TC-desc">
              <strong>Eligibility:</strong> Users of the Education Quiz League
              App must be at least 13 years old. If you are under 13, you may
              use the app only with the involvement of a parent or guardian.
            </div>
            <div className="TC-desc">
              <strong>Privacy Policy:</strong> Our privacy policy governs the
              collection, use, and sharing of your personal information. Please
              review our privacy policy before using the app.
            </div>
            <div className="TC-desc">
              <strong>Content Ownership:</strong> All content, including
              questions and answers, within the Education Quiz League App is the
              property of the app owners. Users may not copy or reproduce any
              content within the app without written permission from the owners.
            </div>
            <div className="TC-desc">
              <strong>User Conduct:</strong> Users of the Education Quiz League
              App are expected to behave in a respectful and appropriate manner.
              Users may not use the app to post or transmit any content that is
              illegal, harmful, threatening, abusive, harassing, defamatory,
              vulgar, obscene, or invasive of another's privacy.
            </div>
            <div className="TC-desc">
              <strong>Termination:</strong> We reserve the right to terminate a
              user's access to the Education Quiz League App at any time, for
              any reason, without notice.
            </div>
            <div className="TC-desc">
              <strong>Disclaimer of Warranties:</strong> The Education Quiz
              League App is provided "as is" and without warranties of any kind,
              whether express or implied. We do not guarantee that the app will
              be error-free, uninterrupted, or free of viruses or other harmful
              components.
            </div>
            <div className="TC-desc">
              <strong>Limitation of Liability:</strong> We will not be liable
              for any damages arising from the use of the Education Quiz League
              App, including but not limited to direct, indirect, incidental,
              punitive, and consequential damages.
            </div>
          </>
        )}
      </div>
    </div>
  );
};
