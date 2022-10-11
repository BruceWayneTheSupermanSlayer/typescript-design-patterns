export interface RequestInterface {
    getOrigin(): string;

    getParams(): Map<string, string>;
}