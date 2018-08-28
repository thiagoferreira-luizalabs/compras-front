import React from 'react';
import Routes from './Routes';
import { mount, toJsonSnapshot, MemoryRouterHOC, sinon } from "../testUtils"

global.window.localStorage = {}
const localStorage = global.window.localStorage

describe("Routes tests", () => {
  beforeEach(() => {
    localStorage.getItem = sinon.mock()
    localStorage.setItem = sinon.mock()
  })

  it("Render routes for non authenticated user", () => {

    localStorage.getItem.returns(null) // not authenticated

    let wrapper = mount(MemoryRouterHOC(<Routes />))
    expect(toJsonSnapshot(wrapper)).toMatchSnapshot()
    expect(localStorage.getItem.calledOnce).toBeTruthy()
  })


  it("Render routes for authenticated user", () => {
    let auth = btoa(JSON.stringify({
      isAuthenticated: true,
      user: "TBU_FERREIRA",
      token: "XPTO_TOKEN"
    }))

    localStorage.getItem.returns(auth)

    let wrapper = mount(MemoryRouterHOC(<Routes />))
    expect(toJsonSnapshot(wrapper)).toMatchSnapshot()
    expect(localStorage.getItem.calledOnce).toBeTruthy()
  })
})

