/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISAdminPowerUI:new */
    export class ISAdminPowerUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      ok: any;

      player: any;

      richText: any;

      setFunction: any;

      tickBox: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      addAdminPowerOptions(...__args: never[]): any;

      addOption(text: any, selected: any, setFunction: any, ...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onTicked(index: any, selected: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      /** @noSelf */
      static onGameStart: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISAdminPowerUI {}
}
