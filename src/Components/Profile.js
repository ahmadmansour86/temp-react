import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ProfileSkills, ProfileAMT, ShareTitle, ShareSpan, ProfileList, ProfileItem, ItemSpan, WebSpan, SkillsDiv, SkillsDesc, SkillsBar, BarTitle, BarPerc, BarParent, ParentSpan } from './ProfileStyle.js';

const Profile = () => {
    const [ skills, setSkills] = useState([])
    useEffect ( () => {
        axios.get('js/data.json').then( res => { setSkills( res.data.skills) } )
    } , [] )
    const SkillsItems = skills.map( (skill) => {
        return (
            <SkillsBar key={skill.id}>
                    <BarTitle>{skill.title}</BarTitle>
                    <BarPerc>{skill.percent}</BarPerc>
                    <BarParent>
                        <ParentSpan Width={skill.id}></ParentSpan>
                    </BarParent>
            </SkillsBar>
        )
    })
    return (
        <ProfileSkills>
        <div className="container">
            <ProfileAMT>
                <ShareTitle><ShareSpan>My </ShareSpan>Profile</ShareTitle>
                <ProfileList>
                    <ProfileItem>
                        <ItemSpan>Name</ItemSpan>
                        Ahmad Mansour
                    </ProfileItem>
                    <ProfileItem>
                        <ItemSpan>Birthday</ItemSpan>
                        21/7/1986
                    </ProfileItem>
                    <ProfileItem>
                        <ItemSpan>Address</ItemSpan>
                        Solgårdsvej
                    </ProfileItem>
                    <ProfileItem>
                        <ItemSpan>Phone</ItemSpan>
                        4444 5555 6666
                    </ProfileItem>
                    <ProfileItem>
                        <ItemSpan>Email</ItemSpan>
                        ahmad@ahmad.com
                    </ProfileItem>
                    <ProfileItem>
                        <ItemSpan>Website</ItemSpan>
                        <WebSpan>www.ahmad.com</WebSpan>
                    </ProfileItem>
                </ProfileList>
            </ProfileAMT>
            
            <SkillsDiv>
                <ShareTitle>Some <ShareSpan>Skills</ShareSpan></ShareTitle>
                <SkillsDesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                </SkillsDesc>
                {SkillsItems}
            </SkillsDiv>
            
        </div>
    </ProfileSkills>
    )
}
export default Profile;