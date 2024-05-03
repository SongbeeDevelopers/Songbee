import React from "react";

import { motion } from "framer-motion";

import './InfoPages.css'

function PrivacyPolicyPage({ routeVariants }) {

  return (

    <motion.div
      className="container"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <div className="info">

        <h1 className="info-title">Privacy Policy</h1>
        <p className="info-subtitle">
          Protecting your private information is our priority. This Statement of
          Privacy applies to www.songbee.com, and Songbee, LLC and governs data
          collection and usage. For the purposes of this Privacy Policy, unless
          otherwise noted, all references to Songbee, LLC include www.songbee.com,
          Songbee and www.songbee.com. The Songbee website is a We are an
          ecommerce website that sells custom songs for any and every occasion
          including birthdays, weddings, memorials, etc. We also create learning
          songs that help children meet their learning milestones. site. By using
          the Songbee website, you consent to the data practices described in this
          statement.
        </p>

        <h2 className="info-section-header">Collection of Your Personal Information</h2>
        <p>
          In order to better provide you with products and services offered
          <ul className="info-section-list">
            <li>First and Last Name</li>
            <li>Mailing Address</li>
            <li>E-mail Address</li>
            <li>Phone Number</li>
          </ul>
          Songbee may also collect anonymous demographic information, which is not unique to you,
          such as your:
          <ul className="info-section-list">
            <li>Age</li>
            <li>Gender</li>
            <li>Household Income</li>
          </ul>
          Please keep in mind that if you directly disclose personally
          identifiable information or personally sensitive data through Songbee's
          public message boards, this information may be collected and used by
          others. We do not collect any personal information about you unless you
          voluntarily provide it to us. However, you may be required to provide
          certain personal information to us when you elect to use certain
          products or services.
        </p>
        <p>These may include:
          <ul className="info-section-list">
            <li>Registering for an account</li>
            <li>Entering a sweepstakes or contest sponsored by us or one of our partners</li>
            <li>Signing up for special offers from selected third parties</li>
            <li>Sending us an email message</li>
            <li>Submitting your credit card or other payment information when ordering and purchasing products and services</li>
          </ul>
          To wit, we will use your information for, but not limited to,
          communicating with you in relation to services and/or products you have
          requested from us. We also may gather additional personal or
          non-personal information in the future.
        </p>

        <h2 className="info-section-header">Use of your Personal Information</h2>
        <p>
          Songbee collects and uses your personal information to operate and
          deliver the services you have requested. Songbee may also use your
          personally identifiable information to inform you of other products or
          services available from Songbee and its affiliates.
        </p>

        <h2 className="info-section-header">Sharing Information with Third Parties</h2>
        <p>
          Songbee does not sell, rent or lease its customer lists to third parties.
          Songbee may share data with trusted partners to help perform statistical
          analysis, send you email or postal mail, provide customer support,or
          arrange for deliveries. All such third parties are prohibited from
          using your personal information except to provide these services to
          Songbee, and they are required to maintain the confidentiality of your
          information. Songbee may disclose your personal information,
          without notice, if required to do so by law or in the good faith belief
          that such action is necessary to:
          <ul className="info-section-list">
            <li>Conform to the edicts of the law or comply with legal process served on Songbee or the site</li>
            <li>Protect and defend the rightsor property of Songbee</li>
            <li>act under exigent circumstances to protectthe personal safety of users of Songbee, or the public</li>
          </ul>
        </p>

        <h2 className="info-section-header">Tracking User Behavior</h2>
        <p>
          Songbee may keep track of the websites and pages our users visit within
          Songbee, in order to determine what Songbee services are the
          most popular. This data is used to deliver customized content and
          advertising within Songbee to customers whose behavior indicates that
          they are interested in aparticular subject area.
        </p>

        <h2 className="info-section-header">Automatically Collected Information</h2>
        <p>
          Information about your computer hardware and software may
          be automatically collected by Songbee. This information can include
          <ul className="info-section-list">
            <li>IP address</li>
            <li>browser type</li>
            <li>domain names</li>
            <li>access times and referring website addresses</li>
          </ul>
          This information is used for the operation of the
          service, to maintain quality of the service, and to provide general
          statistics regarding use of the Songbee website.
        </p>

        <h2 className="info-section-header">Right to Deletion</h2>
        <p>
          Subject to certain exceptions set out below, on receipt of a verifiable
          request from you, we will:
          <ul className="info-section-list">
            <li>Delete your personal information from our records</li>
            <li>Direct any service providers to delete your personal information from their records</li>
          </ul>
          Please note that we may not be able to
          comply with requests to delete your personal information if it is
          necessary to:
          <ul className="info-section-list">
            <li>
              Complete the transaction for which the personal information was collected
            </li>
            <li>
              Fulfill the terms of a written warranty or product recall
              conducted in accordance with federal law
            </li>
            <li>
              Provide a good or service requested by you or reasonably anticipated within
              the context of our ongoing business relationship with you or otherwise perform
              a contract betweenyou and us
            </li>
            <li>
              Detect security incidents, protect againstmalicious, deceptive, fraudulent,
              or illegal activity; or prosecute those responsible for that activity
            </li>
            <li>
              Debug to identify and repair errors that impair existing intended functionality
            </li>
            <li>
              Exercise free speech, ensure the right ofanother consumer to exercise his or her
              right of free speech, or exercise another right provided for by law
            </li>
            <li>
              Comply with the California Electronic Communications Privacy Act
            </li>
            <li>
              Engage in public or peer-reviewed scientific, historical, or statistical
              research in the public interest that adheres to all other applicable
              ethics and privacy laws, when our deletion of the information is likely
              to render impossible or seriously impair the achievement of such
              research, provided we have obtained your informed consent
            </li>
            <li>
              Enable solely internal uses that are reasonably aligned with your expectations
              based on your relationship with us
            </li>
            <li>
              Comply with an existing legal obligation
            </li>
            <li>
              Otherwise use your personal information, internally, in a lawful manner
              that is compatible with the context in which you provided the information.
            </li>
          </ul>
        </p>

        <h2 className="info-section-header">Children Under Thirteen</h2>
        <p>
          Songbee collects personally identifiable information fromchildren under
          the age of thirteen. Songbee collects this information for the following
          reason(s): We create learning songs for children and we collect the ages
          of the children to best recommend learning song packages. If you are
          under the age of thirteen, you must ask your parent or guardian for
          permission to use this website. If you are a parent and you have
          questions regarding our data collection practices, please contact
          us using the information provided at the end of this Statement of
          Privacy.
        </p>

        <h2 className="info-section-header">E-mail Communications</h2>
        <p>
          From time to time, Songbee may contact you via email for the purpose of
          providing announcements, promotional offers, alerts,
          confirmations, surveys, and/or other general communication. In order to
          improve our Services, we may receive a notification when you open an
          email from Songbee or click on a link therein. If you would like to stop
          receiving marketing or promotional communications via email from Songbee,
          you may opt out of such communications by Selecting "unsubscribe" on
          emails.
        </p>

        <h2 className="info-section-header">Changes to this Statement</h2>
        <p>
          Songbee reserves the right to change this Privacy Policyfrom time to
          time. We will notify you about significant changes in the way wetreat
          personal information by sending a notice to the primary email
          addressspecified in your account, by placing a prominent notice on our
          website, and/orby updating any privacy information. Your continued use
          of the website and/orServices available after such modifications will
          constitute your:
          <ul className="info-section-list">
            <li>Acknowledgment of the modified Privacy Policy</li>
            <li>Agreement to abide and be bound by that Policy</li>
          </ul>
        </p>

        <h2 className="info-section-header">Contact Information</h2>
        <p>
          Songbee welcomes your questions or comments regarding this Statement of 
          Privacy. If you believe that Songbee has not adhered to this Statement, 
          please contact Songbee at:
        </p>

        <p className="info-contact">
          Songbee, LLC <br/>
          Virginia <br/>
          <a href="mailto:hello@songbee.com" className="mail-guarantee">hello@songbee.com</a> <br/><br/>
          Effective as of Aug 01 2021
        </p>

      </div>
    </motion.div >
  );
}

export default PrivacyPolicyPage;
