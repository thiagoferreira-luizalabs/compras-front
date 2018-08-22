import React from 'react';
import App from './App';
import { mount, toJson } from "./testUtils"

it("Renders without crashing", () => {
  let wrapper = mount(<App />)
  expect(toJson(wrapper)).toMatchSnapshot()
})