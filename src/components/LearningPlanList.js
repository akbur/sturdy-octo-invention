import React, { PropTypes } from 'react';
import LearningPlanListItem from '../components/LearningPlanListItem';

const LearningPlanList = ({ list }) => (
  <div>
    {list.map(resource =>
      <LearningPlanListItem
        key={resource.id}
        {...resource}
      />
    )}
  </div>
);

LearningPlanList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    url: PropTypes.string,
    details: PropTypes.string,
    progress: PropTypes.string,
    priority: PropTypes.number.isRequired
  })).isRequired
}

export default LearningPlanList;
