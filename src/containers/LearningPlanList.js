import React, { Component } from 'react';
import LearningPlanListItem from '../components/LearningPlanListItem';

class LearningPlanList extends Component {
  render() {
    return (
      <div>
        {this.props.list.map((resource) => {
          return <LearningPlanListItem key={resource.id} resource={resource}/>
        })}
      </div>
    );
  }
}

export default LearningPlanList;
