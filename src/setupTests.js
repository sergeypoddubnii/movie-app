import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { shallow, render, mount, configure } from 'enzyme';

// React 16 Enzyme adapter
configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.toJson = toJson;

// Fail tests on any warning
console.error = message => {
  throw new Error(message);
};
