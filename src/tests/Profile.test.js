import React from 'react';
import ProfileStatusWithHooks from '../components/Profile/ProfileInfo/ProfileStatusWithHooks';
import ProfileStatus from '../components/Profile/ProfileInfo/ProfileStatusDemo';
import { create } from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow, mount } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() })

describe('ProfileStatus component', () => {
    it("status from props should be auuu", () => {
        const component = create(<ProfileStatusWithHooks status='auuu' />)
        const root = component.root;
        expect(root.props.status).toBe('auuu')
    })
    it("input should be displayed in editMode of span", () => {
        const component = create(<ProfileStatusWithHooks status='auuu' />)
        const root = component.root;
        let span = root.findByType("span")
        span.props.onDoubleClick();
        let input = root.findByType("input")
        expect(input.props.value).toBe('auuu')
    })
    it("input should be displayed in editMode of span", () => {
        const component = create(<ProfileStatusWithHooks status='auuu' />)
        const root = component.root;
        let span = root.findByType("span")
        span.props.onDoubleClick();
        let input = root.findByType("input")
        expect(input.props.value).toBe('auuu')
    })
    it("After creation input shouldn't be displayed", () => {
        const component = create(<ProfileStatusWithHooks status='auuu' />)
        const root = component.root;
        expect(() => {
            let input = root.findByType("input")
        }).toThrow()
    })
    /* it("CallBack should be called", () => {
        const mockCallBack = jest.fn()
        const component = create(<ProfileStatusWithHooks status='auuu' updateStatus={mockCallBack} />)
        const instance = component.getInstance()
        instance.deActivatedEditMode()
        expect(mockCallBack.mock.calls.length).toBe(1)
    }) */
    it('After creation <span> should be displayd', () => {
        let component = create(<ProfileStatusWithHooks status = 'auuu' />)
        let root = component.root;
        let spans = root.findByType('span')
        expect(spans).not.toBeNull()
    })
})