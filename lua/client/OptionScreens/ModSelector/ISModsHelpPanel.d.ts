/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.OptionScreens.ModSelector {
    /** @customConstructor ISModsHelpPanel:new */
    export class ISModsHelpPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      ok: any;

      richText: any;

      texture: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onOK(button: any, x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;
    }
  }
  export namespace lua.client.OptionScreens.ModSelector.ISModsHelpPanel {}
}
