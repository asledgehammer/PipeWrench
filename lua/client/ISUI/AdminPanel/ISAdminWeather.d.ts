/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISAdminWeather:new */
    export class ISAdminWeather extends lua.client.DebugUIs.DebugMenu.Base.ISDebugPanelBase {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any, title: any);
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISAdminWeather {}
}
