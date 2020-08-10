import { Component, h } from '@stencil/core';
import { Name, Title, MyError } from '../my-test-component.types';
import nickname from './nickname';

/**
 * Advanced usage
 *
 * You can also give the component a background color and listen for events!
 * @link nickname.ts
 */
@Component({
    tag: 'my-component-example2',
    styleUrl: 'example.css',
    shadow: true,
})
export class MyExample2 {

    public render() {
        const data: Name = {
            first: 'Tyrion',
            last: 'Lannister',
            middle: nickname,
            title: Title.Lord
        };

        return <my-test-component data={data} onCrash={this.onCrash} />;
    }

    private onCrash(error: CustomEvent<MyError>) {
        console.log(error);
    }
}
