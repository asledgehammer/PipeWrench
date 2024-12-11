/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISDuplicateKeybindDialog:new */
    export class ISDuplicateKeybindDialog extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      cancel: any;

      clear: any;

      keep: any;

      key: any;

      keybind2Name: any;

      keybindName: any;

      label: any;

      constructor(key: any, keybindName: any, keybind2Name: any);

      assignKey(keyText: any, keybind: any, key: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      destroy(...__args: never[]): any;

      nextDuplicate(...__args: never[]): any;

      onCancel(...__args: never[]): any;

      onClear(...__args: never[]): any;

      onKeep(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISDuplicateKeybindDialog {}
}
