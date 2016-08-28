import React, { PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// TODO: improve card format & style

const LearningPlanListItem = ({ name, type, url, details, progress, priority }) => (
  <Card>
    <CardHeader
      title={name}
      subtitle={type}
      actAsExpander={true}
      showExpandableButton={false}
    />
    <CardText expandable={true}>
      <p><a>{url}</a></p>
      <p>{details}</p>
      <p>{progress}</p>
      <p>{priority}</p>
    </CardText>
  </Card>
);

LearningPlanListItem.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string,
  details: PropTypes.string,
  progress: PropTypes.string,
  priority: PropTypes.number.isRequired
};

export default LearningPlanListItem;
