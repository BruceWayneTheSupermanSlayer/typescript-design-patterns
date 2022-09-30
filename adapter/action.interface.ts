export interface IActionCreator {
    createAction(name: string): Promise<void>;
}