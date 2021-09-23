type PromiseComponent = {default: ComponentType<any>};

declare module 'dashboardModule/*' {
    export default Promise<PromiseComponent>;
}

declare module 'widgetsModule/*' {
    export default Promise<PromiseComponent>;
}
