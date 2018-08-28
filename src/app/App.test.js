import React from 'react';
import App from './App';
import { mount, toJsonSnapshot, MemoryRouterHOC } from "./testUtils"

it("Renders public page without menu", () => {
  const props = {
    auth: {
      isAuthenticated: false,
      user: null,
      token: null
    }
  }
  let wrapper = mount(MemoryRouterHOC(<App {...props}>Testing</App>))
  expect(toJsonSnapshot(wrapper)).toMatchSnapshot()
})

it("Renders private page with menu", () => {
  const props = {
    auth: {
      isAuthenticated: true,
      user: "Tester",
      token: "12321312"
    }
  }
  let wrapper = mount(MemoryRouterHOC(<App {...props}>Testing</App>))
  expect(toJsonSnapshot(wrapper)).toMatchSnapshot()
})
