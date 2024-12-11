/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISDemoPopup:new */
    export class ISDemoPopup extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      richtext: any;

      timer: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren(...__args: never[]): any;

      onJoypadDown(button: any, joypadData: any, ...__args: never[]): any;

      onMouseDownOutside(x: any, y: any, ...__args: never[]): any;

      removeSelf(...__args: never[]): any;

      setInfo(item: any, ...__args: never[]): any;

      /** @noSelf */
      static getInstance: (...__args: never[]) => any;

      /** @noSelf */
      static OnJoypadActivate: (id: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISDemoPopup {
    /** @noSelf */
    export const DoDemoPopup: () => any;
  }
}
