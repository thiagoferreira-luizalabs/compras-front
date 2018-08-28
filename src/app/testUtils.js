import React from "react"
import { configure as enzymeConfigure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from "sinon";
import { MemoryRouter } from "react-router-dom";

enzymeConfigure({ adapter: new Adapter() });

const asyncAssert = (callback, done) => {
  setTimeout(() => {
    try {
      callback()
      done()
    } catch (e) {
      done.fail(e)
    }
  }, 5)
}

const createFileChangeEvent = (file) => (
  {
    target: {
      files: [file]
    }
  }
)

const MemoryRouterHOC = (children) => (<MemoryRouter>{children}</MemoryRouter>)

const toJsonSnapshot = (wrapper) => toJson(wrapper, { mode: "deep", noKey: true })

export {
  shallow, mount, sinon, MemoryRouter, toJsonSnapshot, asyncAssert, createFileChangeEvent, MemoryRouterHOC
}
