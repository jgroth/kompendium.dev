import { Component, Prop, h, EventEmitter, Event, Method } from '@stencil/core';
import { format } from '../../utils/utils';
import { Name, MyError } from './my-test-component.types';

/**
 * This is some sample documentation for the `my-component` component
 *
 * You can use any type of markdown to document your components, e.g.
 *
 * - Lists
 *   - Nested lists
 *
 * Text formatting like *italic* and **bold**
 *
 * #### Headings
 *
 * > Blockquotes
 *
 * ```
 * // Code blocks
 * ```
 *
 * :::note
 * Notes
 * :::
 *
 * :::warning
 * Warnings
 * :::
 *
 * @todo You can also add tags like this!
 * @deprecated Maybe this component is deprecated?
 * @exampleComponent my-component-example
 * @exampleComponent my-component-example2
 */
@Component({
    tag: 'my-test-component',
    styleUrl: 'my-test-component.css',
    shadow: true,
})
export class MyTestComponent {
    /**
     * The name data
     * @todo Write better documentation!
     */
    @Prop()
    public data: Name;

    /**
     * This is emitted when the component might crash!
     */
    @Event()
    public crash: EventEmitter<MyError>;

    private getText(): string {
        return format(this.data);
    }

    /**
     * Set the data of the component
     *
     * @param {Name} data the data to set
     *
     * @deprecated This should not be used!
     */
    @Method()
    public async setData(data: Name) {
        this.data = data;
    }

    public render() {
        if (this.data.middle) {
            this.crash.emit();
        }

        return <p>Hello, World! I'm {this.getText()}</p>;
    }
}
