import React, { Component } from 'react';
const ReactGridLayout = require('react-grid-layout');
import LearningPlanList from './LearningPlanList';

class LearningPlanContainer extends Component {
    render() {
      var layout = [
        {i: 'a', x: 0, y: 0, w: 6, h: 8, static: true}
      ];
      return (
        <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
          <div key={'a'}>
            <LearningPlanList />
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
