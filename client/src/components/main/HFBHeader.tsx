import React from "react";
import styled from "styled-components";
import { Menu, Dropdown, Button } from 'antd';
import GoogleTranslate from "./GoogleTranslate";

function HFBHeader() {
    const { SubMenu } = Menu;
    const aboutMenu = (
        <Menu>
          <SubMenu title={<a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/about-us/">
                About HFB
            </a>}>

            <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/about-us/our-services/">
            Celebrating 40 Years of Community Support
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/about-us/our-services/">
            Our Commitment to Diversity, Equity & Inclusion
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/about-us/our-services/">
            Our Service Area
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/about-us/our-services/">
            Our Facility
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/about-us/our-services/">
            Our Milestones: A Timeline of Providing Food For Better Lives
            </a>
          </Menu.Item>
          </SubMenu>

          <SubMenu title={<a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/about-us/our-services/">
            Our Services
            </a>}>

            <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/about-us/our-services/">
            535 Catering
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/about-us/our-services/">
            Conference Center
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/about-us/our-services/">
            Texans Cafe Menu
            </a>
          </Menu.Item>
          </SubMenu>
          
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/about-us/our-leaders/">
            Our Leaders
            </a>
          </Menu.Item>

          <SubMenu title={<a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/about-us/ouragencies/">
            Our Partners
            </a>}>

            <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/about-us/ouragencies/">
            Partner Locator
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/about-us/ouragencies/">
            Partner Collaborations With Houston Food Bank
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/about-us/ouragencies/">
            Delivery Schedule
            </a>
          </Menu.Item>
          </SubMenu>
          
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/about-us/our-financials/">
            Our Financials
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/about-us/employment/">
            Employment
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/about-us/procurement/">
            Procurement
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/ways-to-give/give-time/serviceenterpriseinitiative/">
            Service Enterprise Intiative
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://stores.inksoft.com/houston_food_bank/shop/home">
            Shop
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://houstonfoodbank.zendesk.com/hc/en-us">
            FAQ
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/contact/">
            Contact Us
            </a>
          </Menu.Item>

        </Menu>
      );

      const waysToGive = (
        <Menu>
          
          <SubMenu title={<a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/ways-to-give/give-funds/">
                Give Funds
            </a>}>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/ways-to-give/give-funds/">
            Donate Now
            </a>
          </Menu.Item>
          
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/ways-to-give/givefood/">
            Give Monthly
            </a>
          </Menu.Item>

          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/ways-to-give/give-time/">
            Planned Giving
            </a>
          </Menu.Item>

          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/take-action/advocate-2/">
            Corporate Sponsors
            </a>
          </Menu.Item>
          
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/ways-to-give/otherways/">
            Donor Advised Funds
            </a>
          </Menu.Item>

          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/ways-to-give/otherways/">
            Fund Raise
            </a>
          </Menu.Item>

          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/ways-to-give/otherways/">
            Donor Log-in
            </a>
          </Menu.Item>
        </SubMenu>
          
          <SubMenu title={<a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/ways-to-give/givefood/">
                Give Food
            </a>}>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/ways-to-give/give-time/">
            Host a Food Drive
            </a>
          </Menu.Item>

          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/ways-to-give/give-time/">
            Red Barrels
            </a>
          </Menu.Item>

          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/ways-to-give/give-time/">
            Bulk & Retail Donations
            </a>
          </Menu.Item>
          </SubMenu>
          
          <SubMenu title={<a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/ways-to-give/give-time/">
                Give Time By Volunteering
            </a>}>
            <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/ways-to-give/otherways/">
                Volunteer With Houston Food Bank
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/ways-to-give/otherways/">
                Dedicated Volunteer Opportunities 
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/ways-to-give/otherways/">
                Service Enterprise Initiative
            </a>
          </Menu.Item>
          </SubMenu>
          <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/take-action/advocate-2/">
                Give Your Voice
            </a>
          </Menu.Item>
          
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/ways-to-give/otherways/">
                More Ways to Give
            </a>
          </Menu.Item>

        </Menu>
      );

      const ourPrograms = (
          <Menu>
            <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/ways-to-give/otherways/">
            Backpack Buddy
            </a>
            </Menu.Item>
            <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/ways-to-give/otherways/">
            Community Assistance Program (CAP)
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/ways-to-give/otherways/">
            Community Resource Center
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/ways-to-give/otherways/">
            Food for Change
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/ways-to-give/otherways/">
            Kids Cafe
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/ways-to-give/otherways/">
            Nutrition Education & Health Promotion
            </a>
          </Menu.Item>
          <SubMenu title={<a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/ways-to-give/otherways/">
            On-the-Job Training Programs
            </a>}>
            <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/ways-to-give/otherways/">
            Community Kitchen
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/ways-to-give/otherways/">
            Community Warehouse and Logistics
            </a>
          </Menu.Item>

          </SubMenu>
          
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/ways-to-give/otherways/">
            Red Barrels
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/ways-to-give/otherways/">
            School Market
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/ways-to-give/otherways/">
                More Ways to Give
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/ways-to-give/otherways/">
            Senior Box Program
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.houstonfoodbank.org/ways-to-give/otherways/">
            Teachers Aid
            </a>
          </Menu.Item>

          </Menu>
      );

      
      
  return (
    <Frame23Root>
      <Frame22>
        <Rectangle />
        <Rectangle1>
          <Frame10>
            <a href="https://www.houstonfoodbank.org/">
                <img 
                    src="https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/644024f5-14e4-4a32-8ec7-35aacce899ad.png?alt=media&token=12b1bded-58b4-4f35-b46c-877a61cf8258"
                    alt="Houston Food Bank Logo"
                />
            </a>
            <Frame9>
            <Dropdown overlay={aboutMenu} placement="bottomLeft" arrow>
            <a href="https://www.houstonfoodbank.org/about-us/">
              <AboutUs>About Us</AboutUs>
            </a>
            </Dropdown>

            <Dropdown overlay={waysToGive} placement="bottomLeft" arrow>
            <a href="https://www.houstonfoodbank.org/ways-to-give/">
              <WaysToGive>Ways To Give</WaysToGive>
            </a>
            </Dropdown>
            <Dropdown overlay={ourPrograms} placement="bottomLeft" arrow>
            <a href="https://www.houstonfoodbank.org/our-programs/">
              <OurPrograms>Our Programs</OurPrograms>
            </a>
            </Dropdown>
            <a href="https://www.houstonfoodbank.org/take-action/">
              <TakeAction>Take Action</TakeAction>
            </a>
            <a href="https://www.houstonfoodbank.org/hfb-events/">
              <Events>Events</Events>
            </a>
            <a href="https://www.houstonfoodbank.org/find-help/">
              <FindHelp>Find Help</FindHelp>
              </a>
              <a href="https://www.houstonfoodbank.org/ways-to-give/">
              <Button type="primary">Donate</Button>
                </a>
            </Frame9>
          </Frame10>
        </Rectangle1>
        <Rectangle10>
          <Frame20>
            <Frame18>
                <a href="https://www.houstonfoodbank.org/find-help/">
                    <NeedFood>Need Food?</NeedFood>
                </a>
              <Rectangle11 />
              <a href="https://houstonfoodbank.civicore.com/index.php?section=volOpportunities&action=calendar">
                <VolunteerLogin>Volunteer Login</VolunteerLogin>
              </a>
              <Rectangle12 />
              <a href="https://www.houstonfoodbank.org/about-us/ouragencies/deliveryschedule/">
                <DeliverySchedule>Delivery Schedule</DeliverySchedule>
              </a>
              <Rectangle13 />
              <a href="https://sharepoint.houstonfoodbank.org/">
                <HFBStaff>HFB Staff</HFBStaff>
              </a>
              <Rectangle14 />
              <Group>
                <Rectangle15>
                  <Rectangle16>
                
                    <GoogleTranslate />
                  </Rectangle16>
                </Rectangle15>
                <a href="https://www.houstonfoodbank.org/take-action/learn-about-hunger/newsroom/">
                <Newsroom>Newsroom</Newsroom>
                </a>
              </Group>
            </Frame18>
            <Frame19>
              <Facebook>Facebook</Facebook>
              <Instagram>Instagram</Instagram>
              <YouTube>YouTube</YouTube>
              <Twitter>Twitter</Twitter>
              <LinkedIn>LinkedIn</LinkedIn>
            </Frame19>
          </Frame20>
        </Rectangle10>
        <Rectangle21 />
      </Frame22>
    </Frame23Root>
  );
};

export default HFBHeader;

const Frame23Root = styled.div`
  background-color: #ffffff;
  height: 140px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0;
  padding-top: 0.38px;
  padding-bottom: 0.38px;
  margin: auto;
`;
const Frame22 = styled.div`
  height: 134px;
  position: relative;
`;
const Rectangle = styled.div`
  background-color: #e5e5e5;
  height: 1px;
  position: absolute;
  top: 15px;
  left: 0;
`;
const Rectangle1 = styled.div`
  background-color: #ffffff;
  position: absolute;
  top: 44.62px;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 0.38px;
  padding-bottom: 0.62px;
`;
const Frame10 = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 2px;
  align-items: flex-end;
`;
const Frame9 = styled.div`
  width: 801.94px;
  height: 38px;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 0.06px;
  padding-right: 0.06px;
  padding-top: 25.62px;
  padding-bottom: 22.38px;
  align-items: flex-start;
`;
const AboutUs = styled.div`
  color: #333333;
  width: 76px;
  font-size: 17px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 17px;
  margin-top: 9px;
  margin-right: 24px;
`;
const WaysToGive = styled.div`
  color: #333333;
  width: 110px;
  font-size: 17px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 17px;
  margin-top: 9px;
  margin-right: 25px;
`;
const OurPrograms = styled.div`
  color: #333333;
  width: 114px;
  font-size: 17px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 17px;
  margin-top: 9px;
  margin-right: 25px;
`;
const TakeAction = styled.div`
  color: #333333;
  width: 94px;
  font-size: 17px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 17px;
  margin-top: 9px;
  margin-right: 26px;
`;
const Events = styled.div`
  color: #333333;
  width: 56px;
  font-size: 17px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 17px;
  margin-top: 9px;
  margin-right: 25px;
`;
const FindHelp = styled.div`
  color: #333333;
  width: 77px;
  font-size: 17px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 17px;
  margin-top: 9px;
  margin-right: 25px;
`;

const Rectangle10 = styled.div`
  background-color: #66cc00;
  width: 1600px;
  position: absolute;
  top: -0.38px;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 0.38px;
  padding-bottom: 0.62px;
`;
const Frame20 = styled.div`
  width: 699.94px;
  height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 13px;
  padding-left: 200.03px;
  padding-right: 200.03px;
  align-items: center;
`;
const Frame18 = styled.div`
  width: 493.01px;
  display: flex;
  flex-direction: row;
  padding-left: 12.94px;
  padding-right: 14px;
`;
const NeedFood = styled.div`
  color: #ffffff;
  width: 72px;
  font-size: 13px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 16.25px;
  margin-right: 11.63px;
  align-self: center;
`;
const Rectangle11 = styled.div`
  background-color: #ffffff;
  width: 1px;
  height: 44px;
  margin-right: 14.37px;
`;
const VolunteerLogin = styled.div`
  color: #ffffff;
  width: 90px;
  font-size: 12px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 16.25px;
  margin-right: 11.98px;
  align-self: center;
`;
const Rectangle12 = styled.div`
  background-color: #ffffff;
  width: 1px;
  height: 44px;
  margin-right: 14.02px;
`;
const DeliverySchedule = styled.div`
  color: #ffffff;
  width: 105px;
  font-size: 13px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 16.25px;
  margin-right: 11.77px;
  align-self: center;
`;
const Rectangle13 = styled.div`
  background-color: #ffffff;
  width: 1px;
  height: 44px;
  margin-right: 14.23px;
`;
const HFBStaff = styled.div`
  color: #ffffff;
  width: 56px;
  font-size: 13px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 16.25px;
  margin-right: 11.89px;
  align-self: center;
`;
const Rectangle14 = styled.div`
  background-color: #ffffff;
  width: 1px;
  height: 44px;
  margin-right: 14.11px;
`;
const Group = styled.div`
  width: 62px;
  height: 1px;
  position: relative;
`;
const Rectangle15 = styled.div`
  background-color: #66cc00;
  position: absolute;
  top: -0.38px;
  left: 76px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Rectangle16 = styled.div`
  border-width: 1px;
  border-color: #cccccc;
  border-style: solid;
  width: 161px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 4px;
  padding-bottom: 4px;
  align-items: center;
`;
const Newsroom = styled.div`
  color: #ffffff;
  width: 62px;
  font-size: 12px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 16.25px;
  position: absolute;
  top: 13.62px;
  left: 0;
`;
const Frame19 = styled.div`
  width: 390.03px;
  height: 26px;
  position: relative;
`;
const Facebook = styled.div`
  color: #ffffff;
  width: 62px;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 16px;
  position: absolute;
  top: -1.38px;
  left: 25px;
`;
const Instagram = styled.div`
  color: #ffffff;
  width: 64px;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 16px;
  position: absolute;
  top: -1.38px;
  left: 97px;
`;
const YouTube = styled.div`
  color: #ffffff;
  width: 58px;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 16px;
  position: absolute;
  top: -1.38px;
  left: 169px;
`;
const Twitter = styled.div`
  color: #ffffff;
  width: 46px;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 16px;
  position: absolute;
  top: -1.38px;
  left: 61px;
`;
const LinkedIn = styled.div`
  color: #ffffff;
  width: 59px;
  font-size: 15px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 16px;
  position: absolute;
  top: -1.38px;
  left: 133px;
`;
const Rectangle21 = styled.div`
  background-color: #e5e5e5;
  width: 1200px;
  height: 1px;
  position: absolute;
  top: 134px;
  left: 0;
`;
