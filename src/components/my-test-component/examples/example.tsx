import { Component, h } from '@stencil/core';
import { Name, Title } from '../my-test-component.types';

/**
 * Basic usage
 *
 * This shows how to use the `my-component` component
 */
@Component({
    tag: 'my-component-example',
    shadow: true,
})
export class MyExample {

    public render() {
        const data: Name = {
            first: 'Tyrion',
            last: 'Lannister',
            title: Title.Lord
        };

        return <my-test-component data={data} />;
    }
}
