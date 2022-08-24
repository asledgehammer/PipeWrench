/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISDemoPopup:new */
    export class ISDemoPopup extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      richtext: any;

      timer: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren: (() => any) | any;

      onJoypadDown: ((button: any, joypadData: any) => any) | any;

      onMouseDownOutside: ((x: any, y: any) => any) | any;

      removeSelf: (() => any) | any;

      setInfo: ((item: any) => any) | any;

      /** @noSelf */
      static getInstance: () => any;

      /** @noSelf */
      static OnJoypadActivate: (id: any) => any;
    }
  }
  export namespace lua.client.ISUI.ISDemoPopup {
    /** @noSelf */
    export const DoDemoPopup: () => any;
  }
}
