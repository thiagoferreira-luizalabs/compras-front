import React from 'react';
import Login from "./login"
import { mount, toJson } from "../../testUtils"

it("Renders without crashing", () => {
  let wrapper = mount(<Login />)
  expect(toJson(wrapper)).toMatchSnapshot()
})