import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// TODO: improve card format & style

class LearningPlanListItem extends Component {

  render() {
    const { name, type, url, details, progress, priority } = this.props.resource;
    return (
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
  }
}

export default LearningPlanListItem;
