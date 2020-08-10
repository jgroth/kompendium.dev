import { Name } from "../components/my-test-component/my-test-component.types";

export function format(data: Name): string {
    return (data.title || '') + ' ' + (data.first || '') + (data.last ? ` ${data.last}` : '');
}
