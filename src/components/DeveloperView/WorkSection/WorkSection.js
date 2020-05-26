import React from 'react';
import styled from 'styled-components';

const WorkSectionContainer = styled.section`
margin-top: 32px;
`;
const WorkSectionTitle = styled.h2``;
const WorksList = styled.ul`
list-style: none;
margin: 0 auto;
padding: 0;
`;
const WorksListItem = styled.li`
padding-left: 20px;
position: relative;
&:not(:first-of-type) {
  margin-top: 24px;
}
&:before {
    content: '';
    background-color: #ddd;
    position: absolute;
    bottom: 0px;
    top: 0px;
    left: 6px;
    width: 3px;
}
`;
const PositionsList = styled.ul`
font-size: .8em;
list-style: none;
margin: 16px 0 0 32px;
padding: 0;
opacity: .8;
`;
const PositionsListItem = styled.li`
margin: 0;
&:not(:first-of-type) {
  margin-top: 16px;
}
`;
const Company = styled.h3`
font-size: 18px;
margin: 0 auto;
`;
const Duration = styled.time`
color: #999;
font-size: smaller;
line-height: 1;
`;
const PositionTitle = styled.h4`
font-weight: 700;
margin: 0;
line-height: 1;
`;

export default function WorkSection () {

  function getYears() {
    var ageDifMs = Date.now() - new Date('2014/09/01');
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  function getMonths() {
    return new Date().getMonth() + 1;
  }
  return (
    <WorkSectionContainer>
      <WorkSectionTitle id="work">Work</WorkSectionTitle>
        <WorksList>
          <WorksListItem>
            <Company>Freelance Software Developer</Company>
            <Duration>September 2014 ➔ Present, { getYears() } years { getMonths() } months</Duration>
          </WorksListItem>
          <WorksListItem>
            <Company>Bombardier Aerospace</Company>
            <Duration>October 2016 ➔ February 2020, 3 years, 5 months</Duration>
            <PositionsList>
              <PositionsListItem>
                <PositionTitle>Senior Software Developer</PositionTitle>
                <Duration>June 2019 ➔ February 2020, 8 months</Duration>
              </PositionsListItem>
              <PositionsListItem>
                <PositionTitle>Full Stack Developer</PositionTitle>
                <Duration>June 2017 ➔ May 2019, 2 years 1 month</Duration>
              </PositionsListItem>
              <PositionsListItem>
                <PositionTitle>Front End Developer</PositionTitle>
                <Duration>October 2016 ➔ May 2017, 9 months</Duration>
              </PositionsListItem>
            </PositionsList>
          </WorksListItem>
        </WorksList>
    </WorkSectionContainer>
  );
}