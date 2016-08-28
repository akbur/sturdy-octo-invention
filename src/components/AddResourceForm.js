import React from 'react';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Slider from 'material-ui/Slider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
const ReactGridLayout = require('react-grid-layout');

const style = {
  marginLeft: 20,
};

const layout = [
  {i: 'a', x: 0, y: 0, w: 3, h: 7, static: true},
  {i: 'b', x: 3, y: 0, w: 3, h: 7, static: true},
];

// should receive a prop that is a function for handling submit
const AddResourceForm = () => (
  <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
    <div key={'a'}>
      <TextField floatingLabelText="Name" style={style} />
      <br />
      <TextField floatingLabelText="Url" style={style} />
      <br />
      <TextField floatingLabelText="Details" style={style} multiLine={true} rows={3}/>
      <br />
    </div>
    <div key={'b'}>
      <SelectField floatingLabelText="Type" value={1} style={style}>
        <MenuItem value={1} primaryText="Book" />
        <MenuItem value={2} primaryText="Course" />
        <MenuItem value={3} primaryText="Other" />
      </SelectField>
      <p style={style}>Progress:</p>
      <RadioButtonGroup name="progress" defaultSelected="Future">
        <RadioButton style={style} label="Previous" value="Previous" />
        <RadioButton style={style} label="Current" value="Current" />
        <RadioButton style={style} label="Future" value="Future" />
      </RadioButtonGroup>
      <p style={style}>Priority:</p>
      <Slider style={style} step={.10} value={.5} />
    </div>
  </ReactGridLayout>
)

export default AddResourceForm;
