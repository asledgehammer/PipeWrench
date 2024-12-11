/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor ServerToolbox:new */
    export class ServerToolbox extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      allowButton: any;

      backButton: any;

      items: any;

      listbox: any;

      selectedItem: any;

      statusLabel: any;

      constructor(x: any, y: any, width: any, height: any);

      clickAllow(...__args: never[]): any;

      clickBack(...__args: never[]): any;

      create(...__args: never[]): any;

      doDrawItem(y: any, item: any, alt: any, ...__args: never[]): any;

      fillList(...__args: never[]): any;

      hasChoices(...__args: never[]): any;

      onDblClick(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      useDefaultSpawnRegion(...__args: never[]): any;
    }
  }
  export namespace lua.client.OptionScreens.ServerToolbox {}
}
