import React from 'react';
import Login from "./login"
import { mount, toJsonSnapshot } from "../../testUtils"

it("Renders without crashing", () => {
  let wrapper = mount(<Login />)
  expect(toJsonSnapshot(wrapper)).toMatchSnapshot()
})