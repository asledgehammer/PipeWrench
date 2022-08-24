/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISSetKeybindDialog:new */
    export class ISSetKeybindDialog extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      cancel: any;

      clear: any;

      _default_: any;

      keybindName: any;

      constructor(keybindName: any);

      createChildren: (() => any) | any;

      destroy: (() => any) | any;

      isKeyConsumed: ((key: any) => any) | any;

      onCancel: (() => any) | any;

      onClear: (() => any) | any;

      onDefault: (() => any) | any;

      onKeyRelease: ((key: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISSetKeybindDialog {}
}
