/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.UserPanel {
    /** @customConstructor ISCreateFactionUI:new */
    export class ISCreateFactionUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      buttonBorderColor: any;

      entry: any;

      no: any;

      ok: any;

      player: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      onClick(button: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      updateButtons(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.UserPanel.ISCreateFactionUI {}
}
