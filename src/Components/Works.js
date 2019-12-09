import React, {Component} from 'react';
import axios from 'axios';
import {WorkSection, WorkTitle, WorkSpan, WorkPart, WorkIcon, PartTitle, PartLine, PartDesc} from './WorksStyle';

class Works extends Component {
    state = {
        works : []
    }
    componentDidMount (){
        axios.get('js/data.json').then( res => { this.setState({works: res.data.works}) } )
    }
    render(){
        const {works} = this.state;
        const worksList = works.map( (workItem) => {
            return(
                <WorkPart order={workItem.id} key={workItem.id}>
                        <WorkIcon className={workItem.icon_name}></WorkIcon>
                        <PartTitle>{workItem.title}</PartTitle>
                        <PartLine />
                        <PartDesc>
                        {workItem.body}
                        </PartDesc>
                    </WorkPart>
            )
        })
        return(
            <WorkSection>
                <div className="container">
                    <WorkTitle><WorkSpan>My</WorkSpan> Work</WorkTitle>
                    {worksList}
                </div>
            </WorkSection>
        )
    }
    
}
export default Works;