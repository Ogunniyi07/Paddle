import { FaArrowRight } from 'react-icons/fa';
import React from 'react'
import Nav from '../components/Nav'
import Footer2 from '../components/Footer2'
import Title2 from '../components/Title2'
import '../styles/Privacy.css';

const Privacy = () => {
  return (
    <div className='privacy'>
      <Nav/>
      <Title2/>
        <div className='privacyText'>
          <div className='ecclipse'>
            <img src='images/ecclipse.png' alt=''/>
          </div>
          <div className='condition'>
            <p className='absolute'>
              1. At Metricks, accessible from http://metricks.io, one of our main priorities is the privacy of our users. 
              This Privacy Policy document contains types of information that is collected and recorded by Metricks.io and how we use it.
            </p>
            <p>
              2. This Privacy Policy applies only to our online activities and is valid for visitors to our software with regards to the information
              that they shared and/or collected in Metricks.io. This policy is not applicable to any information collected offline or via channels other than this software.
            </p>
            <p>
              3. We only disclose your personal data to third parties that assist us with providing you with our services and, if you authorize us explicitly, to our affiliated 
              companies for the purpose of customer relationship management, analytics and marketing.
            </p>
            <p>
              4. We only disclose your personal data to third parties that assist us with providing you with our services and, if you authorize us explicitly, to our affiliated 
              companies for the purpose of customer relationship management, analytics and marketing.
            </p>
            <ol>
              <li>Consent</li>
              <p>
                By using our software, you hereby consent to our Privacy Policy and agree to its terms.
              </p>
              <li>Information we collect</li>
              <p>
                1. The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to 
                provide your personal information.
              </p>
              <p>
                2. Unless specified otherwise, all Data requested by Metricks is mandatory and failure to provide this Data may make it impossible for Metricks to provide its services.
                In cases where Metricks specifically states that some Data is not mandatory, Users are free not to communicate this Data without consequences to the availability or the functioning of the Service..
              </p>
              <p>
                3. Users are responsible for any third-party Personal Data obtained, published or shared through this software and confirm that they have the third party's consent to provide the Data to the Owner.
              </p>
              <li>Log data</li>
              <p>
                Metricks.io follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services' analytics. The information 
                collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are
                 not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
              </p>
              <li>Cookies and Web Beacons</li>
              <p>
                Like any other website, Metricks.io uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to 
                optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
              </p>
              <h3>How we use your information</h3>
              <h4>We use the information we collect in various ways, including to:</h4>
              <div className='list2'>
                <ol>
                  <li>Provide, operate, and maintain our software</li>
                  <li>Improve, personalize, and expand our software</li>
                  <li>Understand and analyze how you use our software</li>
                  <li>Develop new products, services, features, and functionality</li>
                  <li>Communicate with you, either directly or through one of our partners,
                    including for customer service, to provide you with updates and other 
                    information relating to the software, and for marketing and promotional 
                    purposes
                  </li>
                  <li>Send you emails</li>
                  <li>Find and prevent fraud</li>
                </ol>
              </div>
              <h3>Personal information</h3>
              <h4>We may ask for personal information, such as your:</h4>
              <div className='list2'>
                <ol>
                  <li>Name</li>
                  <li>Email</li>
                  <li>Phone/mobile number</li>
                  <li>Home/Mailing address</li>
                  <li>Payment information</li>
                </ol>
              </div>
              <li>Third-Party Privacy Policies</li>
              <p>
                Metricks.io's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you 
                to consult the respective Privacy Policies of these third-party ad servers for more detailed information.
                It may include their practices and instructions about how to opt out of certain options.
              </p>
              <p>
                You can choose to disable cookies through your individual browser options. To know more detailed information
                about cookie management with specific web browsers, it can be found at the browsers' respective websites.
              </p>
              <li>Legal bases for processing</li>
              <p>
                We will process your personal information lawfully, fairly and in a transparent manner. We collect and 
                process information about you only where we have legal bases for doing so. These legal bases depend on the
                 services you use and how you use them, meaning we collect and use your information only where:
              </p>
              <div className='list2'>
                <ol>
                  <li>it’s necessary for the performance of a contract to which you are a party or to take steps at your request before entering into such a contract (for example, when we provide a service you request from us);</li>
                  <li>it satisfies a legitimate interest (which is not overridden by your data protection interests), such as for research and development, to market and promote our services, and to protect our legal rights and interests;</li>
                  <li>you give us consent to do so for a specific purpose (for example, you might consent to us sending you our newsletter); or</li>
                  <li>we need to process your data to comply with a legal obligation.</li>
                  <li>we need to process your data to comply with a legal obligation.</li>
                </ol>
              </div>
              <p>
              We don’t keep personal information for longer than is necessary. While we retain this information, we will 
              protect it within commercially acceptable means to prevent loss and theft, as well as unauthorised access,
              disclosure, copying, use or modification. That said, we advise that no method of electronic transmission or
              storage is 100% secure and cannot guarantee absolute data security. If necessary, we may retain your 
              personal information for our compliance with a legal obligation or in order to protect your vital interests
              or the vital interests of another natural person.
              </p>
              <li>Collection and use of information</li>
              <p>
              We may collect, hold, use and disclose information for the following purposes and personal information will 
              not be further processed in a manner that is incompatible with these purposes:
              </p>
              <div className='list2'>
                <ol>
                  <li>to enable you to customise or personalise your experience of our software;</li>
                  <li>to enable you to access and use our software, associated applications and associated social media platforms;</li>
                  <li>to contact and communicate with you;</li>
                  <li>for internal record keeping and administrative purposes;</li>
                  <li>for analytics, market research and business development, including to operate and improve our software, associated applications and associated social media platforms;</li>
                  <li>to run competitions and/or offer additional benefits to you</li>
                  <li>for advertising and marketing, including sending you promotional information about our products and services and information about third parties that we consider may be of interest to you; and</li>
                  <li>to comply with our legal obligations and resolve any disputes that we may have.</li>
                </ol>
              </div>
              <li>Disclosure of personal information to third parties</li>
              <p>We may disclose personal information to:</p>
              <div className='list2'>
                <ol>
                  <li>third party service providers for the purpose of enabling them to provide their services, including (without limitation) IT service providers, data storage, hosting and server providers, ad networks, analytics, error loggers, debt collectors, maintenance or problem-solving providers, marketing or advertising providers, professional advisors and payment systems operators;</li>
                  <li>our employees, contractors and/or related entities; and</li>
                  <li>credit reporting agencies, courts, tribunals and regulatory authorities, in the event you fail to pay for goods or services we have provided to you.</li>
                </ol>
              </div>
              <li>International transfers of personal information</li>
              <p>1. The personal information we collect is stored and processed in the United States, or where we or our partners, affiliates and third-party providers maintain facilities. By providing us with your personal information, you consent to the disclosure to these overseas third parties.</p>
              <p>2. We will ensure that any transfer of personal information from countries in the European Economic Area (EEA) to countries outside the EEA will be protected by appropriate safeguards, for example by using standard data protection clauses approved by the European Commission, or the use of binding corporate rules or other legally accepted means.</p>
              <p>3. Where we transfer personal information from a non-EEA country to another country, you acknowledge that third parties in other jurisdictions may not be subject to similar data protection laws to the ones in our jurisdiction. There are risks if any such third party engages in any act or practise that would contravene the data privacy laws in our jurisdiction and this might mean that you will not be able to seek redress under our jurisdiction’s privacy laws.</p>
              <li>Your rights and controlling your personal information</li>
          <p>
            Choice and consent: By providing personal information to us, you consent to us collecting, holding, using and 
            disclosing your personal information in accordance with this privacy policy. If you are under 16 years of age,
            you must have and warrant to the extent permitted by law to us, that you have your parent or legal guardian’s
            permission to access and use the software and they (your parents or guardian) have consented to you 
            providing us with your personal information. You do not have to provide personal information to us, however,
            if you do not, it may affect your use of this software or the products and/or services offered on or through it.
          </p>
          <li>Information from third parties</li>
          <p>
            If we receive personal information about you from a third party, we will protect it as set out in this privacy
            policy. If you are a third party providing personal information about somebody else, you represent and 
            warrant that you have such person’s consent to provide the personal information to us.
          </p>
          <li>Restrict</li>
          <p>
            You may choose to restrict the collection or use of your personal information. If you have previously agreed to
            us using your personal information for direct marketing purposes, you may change your mind at any time by 
            contacting us using the details below. If you ask us to restrict or limit how we process your personal information,
            we will let you know how the restriction affects your use of our software or products and services.
          </p>
          <li>Access and data portability</li>
          <p>
            You may request details of the personal information that we hold about you. You may request a copy of the personal
            information we hold about you. Where possible, we will provide this information in CSV format or another easily 
            readable machine format. You may request that we erase the personal information we hold about you at any time. 
            You may also request that we transfer this personal information to another third party.
          </p>
          <li>Correction</li>
          <p>
            If you believe that any information we hold about you is inaccurate, out of date, incomplete, irrelevant or 
            misleading, please contact us using the details below. We will take reasonable steps to correct any information
            found to be inaccurate, incomplete, misleading or out of date.
          </p>
          <li>Notification of data breaches</li>
          <p>
            We will comply with laws applicable to us in respect of any data breach.
          </p>
          <li>Complaints</li>
          <p>
            If you believe that we have breached a relevant data protection law and wish to make a complaint, please contact 
            us using the details below and provide us with full details of the alleged breach. We will promptly investigate your 
            complaint and respond to you, in writing, setting out the outcome of our investigation and the steps we will take to
            deal with your complaint. You also have the right to contact a regulatory body or data protection authority in 
            relation to your complaint.
          </p>
          <li> Unsubscribe</li>
          <p>
            To unsubscribe from our email database or opt-out of communications (including marketing communications), please contact 
            us using the details below or opt-out using the opt-out facilities provided in the communication.
          </p>
          <li>Cookies</li>
          <p>
            We use “cookies” to collect information about you and your activity across our site. A cookie is a small piece of data that
            our software stores on your computer, and accesses each time you visit, so we can understand how you use our site. 
            This helps us serve you content based on the preferences you have specified.
          </p>
          <li>Business transfers</li>
          <p>
            If we or our assets are acquired, or in the unlikely event that we go out of business or enter bankruptcy, we 
            would include data among the assets transferred to any parties who acquire us. You acknowledge that such 
            transfers may occur and that any parties who acquire us may continue to use your personal information according
            to this policy.
          </p>
          <li>Limits of our policy</li>
          <p>
            Our software may link to external sites that are not operated by us. Please be aware that we have no control 
            over the content and policies of those sites, and cannot accept responsibility or liability for their respective
            privacy practices.
          </p>
          <li>Changes to this policy</li>
          <p>
            At our discretion, we may change our privacy policy to reflect current acceptable practices. We will take reasonable
            steps to let users know about changes via our software. Your continued use of this site after any changes to this 
            policy will be regarded as acceptance of our practices around privacy and personal information.
          </p>
          <p>
            If we make a significant change to this privacy policy, for example changing a lawful basis on which we process your 
            personal information, we will ask you to re-consent to the amended privacy policy.
          </p>
          <li>Contact Us</li>
          <p>
            If you have any questions about these Terms, please contact us over live chat or email support@metricks..io
          </p>
            </ol>
          </div>
        </div>
      <Footer2/>
    </div>
  )
}

export default Privacy