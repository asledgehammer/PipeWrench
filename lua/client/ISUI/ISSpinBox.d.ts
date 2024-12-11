/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      addOption(option: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onButton(button: any, ...__args: never[]): any;

      render(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISSpinBox {}
}
