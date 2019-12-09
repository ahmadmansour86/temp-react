import styled from 'styled-components';

export const ProfileSkills = styled.div`
    padding: 50px 0;
    overflow: hidden;
`

export const ProfileAMT = styled.div`
    width: 50%;
    float: left;
`

export const ShareTitle = styled.h2`
    font-size: 40px; 
    margin-bottom: 20px
`

export const ShareSpan = styled.span`
    font-weight: normal;
`

export const ProfileList = styled.ul`
    list-style: none
`

export const ProfileItem = styled.li`
    margin-bottom: 18px
`

export const ItemSpan = styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold
`

export const WebSpan = styled.span`
    font-weight: normal;
    color: #eb5424
`

export const SkillsDiv = styled.div`
    width: 50%;
    float: left;
`

export const SkillsDesc = styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`

export const SkillsBar = styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`

export const BarTitle = styled.span`
    float: left;
`

export const BarPerc = styled.span`
    float: right;
    margin-right: 100px
`

export const BarParent = styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`

export const ParentSpan = styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${props => props.Width === 2 ? "90%" : props.Width === 3 ? "80%" : "100%"};
`