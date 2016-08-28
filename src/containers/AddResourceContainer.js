import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddResourceForm from '../components/AddResourceForm';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { addResourceOpenDialog,
         addResourceCloseDialog,
         addResourcePriorityEdit,
         addResourceProgressEdit } from '../actions/resources';

class AddResourceContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      priorityValue: 0.5,
    }

    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePrioritySlider = this.handlePrioritySlider.bind(this);
    this.handleProgressEdit = this.handleProgressEdit.bind(this);
  }

  handleOpenDialog() {
    const { dispatch } = this.props;
    dispatch(addResourceOpenDialog());
  }

  handleCloseDialog() {
    const { dispatch } = this.props;
    dispatch(addResourceCloseDialog());
  }

  handleSubmit(data) {
    const { dispatch, newResource } = this.props;
    console.log('Submitting new resource', newResource);
    dispatch(addResourceCloseDialog());
  }

  handlePrioritySlider(event, value) {
    const { dispatch } = this.props;
    dispatch(addResourcePriorityEdit(value));
  }

  handleProgressEdit(event, value) {
    const { dispatch } = this.props;
    dispatch(addResourceProgressEdit(value));
  }

  render() {
    const { addResource } = this.props;
    const { openDialog } = addResource;

    return (
      <div>
        <FloatingActionButton onTouchTap={this.handleOpenDialog}>
          <ContentAdd />
        </FloatingActionButton>
        <AddResourceForm
          openDialog={openDialog}
          handleCloseDialog={this.handleCloseDialog}
          handleSubmit={this.handleSubmit}
          handlePrioritySlider={this.handlePrioritySlider}
          handleProgressEdit={this.handleProgressEdit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { addResource: state.addResource, newResource: state.newResource };
}

export default connect(mapStateToProps)(AddResourceContainer);
