import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
const ReactGridLayout = require('react-grid-layout');
import LearningPlanList from './LearningPlanList';
import resourceData from '../constants/mock-data';

  // TODO: Tabs should be filtered by Progress

class LearningPlanContainer extends Component {

    render() {
      var layout = [
        {i: 'a', x: 0, y: 0, w: 5, h: 12, static: false}
      ];

      return (
        <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
          <div key={'a'}>
            <Tabs initialSelectedIndex={1}>
              <Tab label="Previous" onActive={()=>{this.setState({tab: "Previous"})}}>
                <LearningPlanList list={resourceData}/>
              </Tab>
              <Tab label="Current" onActive={()=>{this.setState({tab: "Current"})}}>
                <LearningPlanList list={resourceData}/>
              </Tab>
              <Tab label="Future" onActive={()=>{this.setState({tab: "Future"})}}>
                <LearningPlanList list={resourceData}/>
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

export default LearningPlanContainer;
