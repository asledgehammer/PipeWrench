/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.UserPanel {
    /** @customConstructor ISCreateFactionTagUI:new */
    export class ISCreateFactionTagUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      buttonBorderColor: any;

      entry: any;

      faction: any;

      no: any;

      ok: any;

      player: any;

      constructor(x: any, y: any, width: any, height: any, player: any, faction: any);

      onClick: ((button: any) => any) | any;

      render: (() => any) | any;

      updateButtons: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.UserPanel.ISCreateFactionTagUI {}
}
