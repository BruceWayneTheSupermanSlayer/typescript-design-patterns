export interface FlyweightInterface {
    perform(customization: { id: string }): void;
}