import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddResourceForm from '../components/AddResourceForm';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { addResourceOpenDialog, addResourceCloseDialog } from '../actions/resources';

class AddResourceContainer extends Component {
  constructor(props) {
    super(props);

    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    console.log('Submitting', data);
    // this.setState({dialogOpen: false});
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
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { addResource: state.addResource };
}

export default connect(mapStateToProps)(AddResourceContainer);
