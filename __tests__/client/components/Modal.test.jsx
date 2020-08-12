/* eslint-disable */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Modal from '../../../client/src/components/Modal';

describe('Modal', () => {
  it('should render without any errors', () => {
    const wrapper = shallow(<Modal />);

    expect(wrapper.is('.modal')).toBe(true);
  })
});
