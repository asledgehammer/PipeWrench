/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISServerSandboxOptionsUI:new */
    export class ISServerSandboxOptionsUI extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      applyButton: any;

      closeButton: any;

      controls: any;

      currentPanel: any;

      customui: any;

      groupBox: any;

      listbox: any;

      options: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren: (() => any) | any;

      createPanel: ((page: any) => any) | any;

      destroy: (() => any) | any;

      onButtonApply: (() => any) | any;

      onButtonClose: (() => any) | any;

      onMouseDownListbox: ((item: any) => any) | any;

      settingsFromUI: ((options: any) => any) | any;

      settingsToUI: ((options: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISServerSandboxOptionsUI {}
}
