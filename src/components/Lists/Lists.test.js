import React from 'react'
import Lists, {List} from './Lists'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

describe('Lists component', () => {

    it('Should render ul tag and its children', () => {
        const component = shallow(<Lists><List key="001">Content</List></Lists>)
        expect(component).toMatchSnapshot()
    })

    it('Should not render other components except for List component', () => {
        const children = [
            <List key="001">content 1</List>,
            <List key="002">content 2</List>,
            <p key="003">other component</p>
        ]
        const component = shallow(<Lists>{children}</Lists>)
        expect(component).toMatchSnapshot()
    })

    it('Should have a class="container bullet" if props.type is set "bullet"', () => {
        const children = [
            <List key="001">content 1</List>
        ]
        const component = shallow(<Lists type="bullet">{children}</Lists>)
        expect(component).toMatchSnapshot()
    })

    it('Should have class="container default foo bar" if props.classes is set ["foo", "bar"]', () => {
        const children = [
            <List key="001">content 1</List>
        ]
        const component = shallow(<Lists classes={["foo", "bar"]}>{children}</Lists>)
        expect(component).toMatchSnapshot()
    })

})

describe('List Component', () => {

    it('Should render li tag and its children', () => {
        const component = shallow(<List>Content</List>)
        expect(component).toMatchSnapshot()
    }) 

    it('Should have class="content foo bar" if props.classes is set ["foo", "bar"]', () => {
        const component = shallow(<List classes={["foo", "bar"]}>Content</List>)
        expect(component).toMatchSnapshot()
    })

})