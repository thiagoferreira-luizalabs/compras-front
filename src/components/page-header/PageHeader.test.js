import React from 'react';
import PageHeader from './PageHeader';
import { mount, toJsonSnapshot, MemoryRouterHOC } from "../../testUtils"

it("Renders page header", () => {
  let wrapper = mount(
    MemoryRouterHOC(<PageHeader />)
  )
  expect(toJsonSnapshot(wrapper)).toMatchSnapshot()
})