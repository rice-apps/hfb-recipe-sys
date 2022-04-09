
import React from "react";
import styled from "styled-components";
import HFBLogo from './image@2x.png';
import { SocialIcon } from 'react-social-icons';
import './footer.css';

function HFBFooterFinal() {
  return <HFBFooter {...hFBFooterData} />;
}

export default HFBFooterFinal;

function HFBFooter(props:any) {
  const {
    contactUs1,
    name1,
    address1,
    address2,
    name2,
    address3,
    address4,
    phone,
    additionalContacts,
    quickLinks,
    contactUs2,
    mediaInquiries,
    employment,
    conferenceCenter,
    frequentlyAskedQuestions,
    requestASpeaker,
    nondiscriminationStatement,
    privacyStatement,
    theHoustonFoodBan,
    nonProfitOrganizat,
    assistsTheHouston,
    copyright2021Houst,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="hfbfooterscreen">
        <UpperFooter>
          <Contact>
            <ContactUs>{contactUs1}</ContactUs>
            <Frame>
              <IMAGE src={HFBLogo} />
              <Name>{name1}</Name>
              <Address>{address1}</Address>
              <Address1>{address2}</Address1>
              <Name1>{name2}</Name1>
              <Address1>{address3}</Address1>
              <Address1>{address4}</Address1>
              <Phone>{phone}</Phone>
              <AdditionalContacts>{additionalContacts}</AdditionalContacts>
            </Frame>
          </Contact>
          <QuickLinks>
            <QuickLinks1>{quickLinks}</QuickLinks1>
            <Links>
              <ContactUs1>{<a target="_blank" rel="noopener noreferrer"  href="https://www.houstonfoodbank.org/contact/">{"> " + contactUs2}</a>}</ContactUs1>
              <Rectangle></Rectangle>
              <MediaInquiries>{<a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/take-action/learn-about-hunger/newsroom/">{"> " + mediaInquiries}</a>}</MediaInquiries>
              <Rectangle></Rectangle>
              <MediaInquiries>{<a target="_blank" rel="noopener noreferrer"  href="https://www.houstonfoodbank.org/about-us/employment/">{"> " + employment}</a>}</MediaInquiries>
              <Rectangle></Rectangle>
              <ConferenceCenter>{<a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/about-us/our-services/conference-center/">{"> " + conferenceCenter}</a>}</ConferenceCenter>
              <Rectangle></Rectangle>
              <ConferenceCenter>{<a target="_blank" rel="noopener noreferrer" href="https://houstonfoodbank.zendesk.com/hc">{"> " + frequentlyAskedQuestions}</a>}</ConferenceCenter>
              <Rectangle></Rectangle>
              <ConferenceCenter>{<a target="_blank" rel="noopener noreferrer" href="https://houstonfoodbank.tfaforms.net/4727933">{"> " + requestASpeaker}</a>}</ConferenceCenter>
              <Rectangle></Rectangle>
              <NondiscriminationStatement>{<a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/wp-content/uploads/2020/12/partners_usdastatement_nondis2020.pdf">{"> " + nondiscriminationStatement}</a>}</NondiscriminationStatement>
              <Rectangle></Rectangle>
            </Links>
          </QuickLinks>
          
          <PrivacyStatement>
            <LanguageTranslator>{privacyStatement}</LanguageTranslator>
            <StatementText>
              <TheHoustonFoodBan>{theHoustonFoodBan}</TheHoustonFoodBan>
              <OverlapGroup>
                <NonProfitOrganizat>{nonProfitOrganizat}</NonProfitOrganizat>
                <AssistsTheHouston>{assistsTheHouston}</AssistsTheHouston>
              </OverlapGroup>
            </StatementText>
          </PrivacyStatement>
        </UpperFooter>
        <Copyright>

          <Copyright2021Houst>{copyright2021Houst}</Copyright2021Houst>

          <OverlapGroup1>
          
              <div>
                <SocialIcon url="https://www.facebook.com/thehoustonfoodbank" network="facebook" bgColor="#282a2b" fgColor="white" style={{ height: 40, width: 40 }}/>
                </div>
                <div>
                <SocialIcon url="https://twitter.com/HoustonFoodBank" network="twitter" bgColor="#282a2b" fgColor="white" style={{ height: 40, width: 40 }}/>
                </div>
                <div>
                <SocialIcon url="https://www.instagram.com/houstonfoodbank/" network="instagram" bgColor="#282a2b" fgColor="white" style={{ height: 40, width: 40 }}/>
                </div>
                <div>
                <SocialIcon url="https://www.linkedin.com/company/houstonfoodbank" network="linkedin" bgColor="#282a2b" fgColor="white" style={{ height: 40, width: 40 }}/>
                </div>
                <div>
                <SocialIcon url="https://www.youtube.com/HoustonFoodBank" network="youtube" bgColor="#282a2b" fgColor="white" style={{ height: 40, width: 40 }}/>
              </div>
          </OverlapGroup1>
        </Copyright>
      </div>
    </div>
  );
}
const RobotoNormalWhite16px = styled.div`
  color: var(--white);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-xxl);
  font-weight: 400;
  font-style: normal;
`;
const RobotoNormalAlto15px = styled.div`
  color: var(--alto);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-xl2);
  font-weight: 400;
  font-style: normal;
`;
const RobotoNormalAlto16px = styled.div`
  color: var(--alto);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-xxl);
  font-weight: 400;
  font-style: normal;
`;
const HeeboNormalAlto11px = styled.div`
  color: var(--alto);
  font-family: var(--font-family-heebo);
  font-size: var(--font-size-xs);
  font-weight: 400;
  font-style: normal;
`;
const RobotoNormalWhite13px = styled.div`
  color: var(--white);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;
`;
const HeeboNormalAlto12px = styled.div`
  color: var(--alto);
  font-family: var(--font-family-heebo);
  font-size: var(--font-size-s);
  font-weight: 400;
  font-style: normal;
`;
const RobotoNormalWhite15px = styled.div`
  color: var(--white);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-xl2);
  font-weight: 400;
  font-style: normal;
`;

const UpperFooter = styled.div`
  height: 446px;
  display: flex;
  padding: 43px 49px;
  justify-content: center;
  align-items: flex-start;
  min-width: 1200px;
  background-color: #363839;
`;

const Contact = styled.div`
  width: 253px;
  margin-top: 0.05px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 344px;
  color: white;
`;

const ContactUs = styled.div`
  ${HeeboNormalAlto12px}
  min-height: 18px;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const LanguageTranslator = styled.div`
  ${HeeboNormalAlto11px}
  min-height: 18px;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const Frame = styled.div`
  width: 252px;
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 298px;
`;

const IMAGE = styled.img`
  width: 200px;
  height: 74px;
  object-fit: cover;
`;

const Name = styled.p`
  ${RobotoNormalWhite16px}
  min-height: 20px;
  margin-top: 15px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Address = styled.div`
  ${RobotoNormalWhite15px}
  min-height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Address1 = styled.div`
  ${RobotoNormalWhite16px}
  min-height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Name1 = styled.p`
  ${RobotoNormalWhite16px}
  min-height: 20px;
  margin-top: 16px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Phone = styled.div`
  ${RobotoNormalWhite15px}
  min-height: 20px;
  margin-top: 16px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const AdditionalContacts = styled.div`
  ${RobotoNormalAlto15px}
  min-height: 20px;
  margin-top: 16px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const QuickLinks = styled.div`
  width: 252px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 323px;
  color: white;
`;

const QuickLinks1 = styled.div`
  ${HeeboNormalAlto12px}
  min-height: 18px;
  margin-left: 0.5px;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const Links = styled.div`
  width: 252px;
  margin-top: 28px;
  display: flex;
  color: white;
  flex-direction: column;
  align-items: flex-start;
  min-height: 277px;
`;

const ContactUs1 = styled.div`
  ${RobotoNormalAlto16px}
  margin-top: -1px;
  min-height: 20px;
  margin-left: 12.5px;
  letter-spacing: 0;
  line-height: 20px;
  color: white;
  white-space: nowrap;
  a {
    color: white;
    &:hover {
      color: red;
    }
  }
  
`;

const Rectangle = styled.div`
  width: 252px;
  height: 1px;
  margin-top: 12px;
  background-color: var(--abbey);
`;

const MediaInquiries = styled.div`
  ${RobotoNormalAlto15px}
  min-height: 20px;
  margin-top: 8px;
  margin-left: 12.5px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
  a {
    color: white;
    &:hover {
      color: red;
    }
  }
`;

const ConferenceCenter = styled.div`
  ${RobotoNormalAlto16px}
  min-height: 20px;
  margin-top: 8px;
  margin-left: 12.5px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
  a {
    color: white;
    &:hover {
      color: red;
    }
  }
`;

const NondiscriminationStatement = styled.div`
  ${RobotoNormalAlto15px}
  width: 205px;
  min-height: 20px;
  align-self: center;
  margin-top: 8px;
  margin-right: 22.5px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
  a {
    color: white;
    &:hover {
      color: red;
    }
  }
  
`;

const PrivacyStatement = styled.div`
  width: 253px;
  margin-left: 16px;
  margin-top: 0.05px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 350px;
  color: white;
`;

const StatementText = styled.div`
  ${RobotoNormalWhite13px}
  width: 252px;
  margin-top: 28px;
  margin-left: -0.5px;
  display: flex;
  flex-direction: column;
  padding: 0 0.5px;
  align-items: flex-start;
  min-height: 304px;
`;

const TheHoustonFoodBan = styled.p`
  margin-top: -1px;
  min-height: 17px;
  letter-spacing: 0;
  line-height: 16.2px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  width: 247px;
  height: 259px;
  position: relative;
`;

const NonProfitOrganizat = styled.p`
  position: absolute;
  width: 243px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 16.2px;
`;

const AssistsTheHouston = styled.p`
  position: absolute;
  width: 247px;
  top: 96px;
  left: 0;
  letter-spacing: 0;
  line-height: 16.2px;
`;

const Copyright = styled.div`
  height: 72px;
  display: flex;
  padding: 27px 0;
  justify-content: flex-end;
  align-items: center;
  min-width: 1200px;
  background-color: #282a2b;
`;

const Copyright2021Houst = styled.p`
  width: 305px;
  min-height: 15px;
  margin-top: 1px;
  font-family: var(--font-family-roboto);
  font-weight: 400;
  color: white;
  font-size: var(--font-size-s);
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
  height: 72px;
  display: flex;
  padding: 27px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1200px;
  background-color: #282a2b;
`;

const hFBFooterData = {
  contactUs1: "CONTACT US",
  name1: "Houston Food Bank East Branch",
  address1: "535 Portwall St.",
  address2: "Houston, TX 77029",
  name2: "Houston Food Bank North Branch",
  address3: "146 Knobcrest Dr.",
  address4: "Houston, TX 77060",
  phone: "713.223.3700",
  additionalContacts: "+ Additional Contacts",
  quickLinks: "QUICK LINKS",
  contactUs2: "Contact Us",
  mediaInquiries: "Media Inquiries",
  employment: "Employment",
  conferenceCenter: "Conference Center",
  frequentlyAskedQuestions: "Frequently Asked Questions",
  requestASpeaker: "Request a Speaker",
  nondiscriminationStatement: "Nondiscrimination Statement",
  privacyStatement: "PRIVACY STATEMENT",
  theHoustonFoodBan: "The Houston Food Bank is registered as a ",
  nonProfit501c3: "501(c)(3)",
  nonProfitOrganizat:
    "non-profit organization. Contributions are tax-deductible to the extent permitted by law, tax identification number 74-2181456.",
  assistsTheHouston:
    "assists the Houston Food Bank to identify any potential improper activity. Lighthouse is committed to protecting the identity of community members, including Food Bank staff, to submit confidential reports, suggestions, or complaints to a third party who helps the Houston Food Bank administration resolve issues while maintaining professional standards. on Food Bank",
  hfbWebPrivacy: "View the Houston Food Bank's",
  webPrivacyPolicy: "Web Privacy Policy",
  donorPrivacyCode: "Donor Privacy Code",
  copyright2021Houst: "Copyright 2021 Houston Food Bank | All Rights Reserved",
  ethicsAndCompliance: "The Houston Food Bank believes in conducting business with the utmost honesty and integrity.",
  lighthouseServices: "LightHouse Services",
  ethicsAndCompliance2: "assists the Houston Food Bank to identify any potential improper activity. Lighthouse is committed to protecting the identity of community members, including Food Bank staff, to submit confidential reports, suggestions, or complaints to a third party who helps the Houston Food Bank administration resolve issues while maintaining professional standards.",

};