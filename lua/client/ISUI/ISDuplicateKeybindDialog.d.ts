/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      assignKey: ((keyText: any, keybind: any, key: any) => any) | any;

      createChildren: (() => any) | any;

      destroy: (() => any) | any;

      nextDuplicate: (() => any) | any;

      onCancel: (() => any) | any;

      onClear: (() => any) | any;

      onKeep: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISDuplicateKeybindDialog {}
}
