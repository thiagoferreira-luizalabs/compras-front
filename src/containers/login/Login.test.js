import React from 'react';
import Login from "./Login"
import { mount, toJsonSnapshot } from "../../testUtils"

it("Renders without crashing", () => {
  let wrapper = mount(<Login />)
  expect(toJsonSnapshot(wrapper)).toMatchSnapshot()
})