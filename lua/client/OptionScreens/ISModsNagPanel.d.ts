/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor ISModsNagPanel:new */
    export class ISModsNagPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      ok: any;

      richText: any;

      texture: any;

      textureH: any;

      textureW: any;

      textureX: any;

      textureY: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onOK: ((button: any, x: any, y: any) => any) | any;

      render: (() => any) | any;
    }
  }
  export namespace lua.client.OptionScreens.ISModsNagPanel {}
}
