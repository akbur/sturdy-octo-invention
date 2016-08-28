import React, { Component } from 'react';
import AppHeader from '../components/AppHeader';
import LearningPlanContainer from './LearningPlanContainer';
import AddResourceContainer from './AddResourceContainer';

const App = () => (
  <div>
    <AppHeader />
    <LearningPlanContainer />
    <AddResourceContainer />
  </div>
)

export default App;
