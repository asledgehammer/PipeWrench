/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISSetKeybindDialog:new */
    export class ISSetKeybindDialog extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      cancel: any;

      clear: any;

      _default_: any;

      isModBind: any;

      keybindName: any;

      constructor(keybindName: any, isModBind: any);

      createChildren(...__args: never[]): any;

      destroy(...__args: never[]): any;

      isKeyConsumed(key: any, ...__args: never[]): any;

      onCancel(...__args: never[]): any;

      onClear(...__args: never[]): any;

      onDefault(...__args: never[]): any;

      onKeyRelease(key: any, ...__args: never[]): any;

      onMouseButtonDown(btn: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISSetKeybindDialog {}
}
