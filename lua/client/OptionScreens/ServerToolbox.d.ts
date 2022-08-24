/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      clickAllow: (() => any) | any;

      clickBack: (() => any) | any;

      create: (() => any) | any;

      doDrawItem: ((y: any, item: any, alt: any) => any) | any;

      fillList: (() => any) | any;

      hasChoices: (() => any) | any;

      onDblClick: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      render: (() => any) | any;

      useDefaultSpawnRegion: (() => any) | any;
    }
  }
  export namespace lua.client.OptionScreens.ServerToolbox {}
}
