import { configure as enzymeConfigure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from "sinon";
// import { MemoryRouter } from "react-router-dom";

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

export {
  shallow, mount, sinon,  /*MemoryRouter,*/ toJson, asyncAssert, createFileChangeEvent
}
