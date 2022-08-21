/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISSpinBox:new */
    export class ISSpinBox extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      fade: any;

      leftButton: any;

      options: any;

      rightButton: any;

      selected: any;

      target: any;

      targetFunc: any;

      tooltipUI: any;

      constructor(x: any, y: any, width: any, height: any, target: any, targetFunc: any);

      addOption: ((option: any) => any) | any;

      createChildren: (() => any) | any;

      onButton: ((button: any) => any) | any;

      render: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISSpinBox {}
}
