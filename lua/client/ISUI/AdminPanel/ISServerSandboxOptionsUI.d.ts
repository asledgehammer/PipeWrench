/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      createChildren(...__args: never[]): any;

      createPanel(page: any, ...__args: never[]): any;

      destroy(...__args: never[]): any;

      onButtonApply(...__args: never[]): any;

      onButtonClose(...__args: never[]): any;

      onMouseDownListbox(item: any, ...__args: never[]): any;

      settingsFromUI(options: any, ...__args: never[]): any;

      settingsToUI(options: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISServerSandboxOptionsUI {}
}
