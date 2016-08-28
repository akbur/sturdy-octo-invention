import React, { Component, PropTypes } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { connect } from 'react-redux';
const ReactGridLayout = require('react-grid-layout');
import LearningPlanList from '../components/LearningPlanList';
import { filterByProgress } from '../actions/resources';

  // TODO: Tabs should be filtered by Progress

class LearningPlanContainer extends Component {
    constructor(props) {
      super(props);

      this.handleActive = this.handleActive.bind(this);
    }

    handleActive(tab) {
      const { dispatch } = this.props;
      const progress = tab.props['data-progress'];
      if (progress !== 'all') {
        dispatch(filterByProgress(progress));
      }
    }

    render() {
      const layout = [ {i: 'a', x: 0, y: 0, w: 5, h: 12, static: true} ];
      const { filteredResources, resources } = this.props;

      return (
        <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
          <div key={'a'}>
            <Tabs initialSelectedIndex={0}>
              <Tab label="All" data-progress="all" onActive={this.handleActive}>
                <LearningPlanList list={resources}/>
              </Tab>
              <Tab label="Previous" data-progress="previous" onActive={this.handleActive}>
                <LearningPlanList list={filteredResources}/>
              </Tab>
              <Tab label="Current" data-progress="current" onActive={this.handleActive}>
                <LearningPlanList list={filteredResources}/>
              </Tab>
              <Tab label="Future" data-progress="future" onActive={this.handleActive}>
                <LearningPlanList list={filteredResources}/>
              </Tab>
            </Tabs>
          </div>
        </ReactGridLayout>
      );

      /* the other way to use - on the div itself rather than factored out ---
      <ReactGridLayout className="layout" cols={12} rowHeight={30} width={1200}>
              <div key="a" data-grid={{x: 0, y: 0, w: 6, h: 8, static: true}}>a</div>
      </ReactGridLayout>
      */
    }
};

LearningPlanContainer.propTypes = {
  dispatch: PropTypes.func,
}

const mapStateToProps = (state) => {
  return { resources: state.resources, filteredResources: state.filteredResources };
}

export default connect(mapStateToProps)(LearningPlanContainer);
