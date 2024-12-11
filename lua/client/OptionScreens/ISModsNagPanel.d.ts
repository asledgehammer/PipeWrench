/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      createChildren(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onOK(button: any, x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;
    }
  }
  export namespace lua.client.OptionScreens.ISModsNagPanel {}
}
