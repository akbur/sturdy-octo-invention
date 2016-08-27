import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


/*
  TODO: This should render components - LearningPlanListItem
  List Item should use a card material-ui components
  Should have all props that are needed for an individual resource
  Should display those props in a consistent way

  LearningPlanList should only iterate through the list of resources and
  render a list item for each
*/

class LearningPlanList extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader
            title="Test Item"
            subtitle="This is just a placeholder for learning plan items"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardActions>
            <FlatButton label="Action1" />
          </CardActions>
          <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title="Another Placeholder List Item"
            subtitle="Subtitle"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={false}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardText expandable={true}><h3>Testing Additional Text</h3></CardText>
        </Card>
      </div>
    );
  }
}

export default LearningPlanList;
