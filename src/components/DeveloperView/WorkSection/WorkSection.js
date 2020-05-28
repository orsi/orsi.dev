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
padding-left: 16px;
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
    left: 0;
    width: 3px;
}
`;
const Company = styled.h3`
font-size: 18px;
margin: 0 auto;
`;
const PositionTitle = styled.h4`
font-size: smaller;
font-weight: 400;
margin: 0;
line-height: 1;
`;
const Duration = styled.time`
color: #999;
display: block;
font-size: smaller;
line-height: 1.2;
margin-top: 4px;
`;

export default function WorkSection() {

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
          <Company>Self Employed</Company>
          <PositionTitle>Freelancer</PositionTitle>
          <Duration>September 2014 ➔ Present, {getYears()} years {getMonths()} months</Duration>
        </WorksListItem>
        <WorksListItem>
          <Company>Bombardier Aerospace</Company>
          <PositionTitle>Senior Software Developer</PositionTitle>
          <Duration>June 2019 ➔ February 2020, 8 months</Duration>
        </WorksListItem>
        <WorksListItem>
          <Company>Bombardier Aerospace</Company>
          <PositionTitle>Full Stack Developer</PositionTitle>
          <Duration>June 2017 ➔ May 2019, 2 years 1 month</Duration>
        </WorksListItem>
        <WorksListItem>
          <Company>Bombardier Aerospace</Company>
          <PositionTitle>Front End Developer</PositionTitle>
          <Duration>October 2016 ➔ May 2017, 9 months</Duration>
        </WorksListItem>
      </WorksList>
    </WorkSectionContainer>
  );
}