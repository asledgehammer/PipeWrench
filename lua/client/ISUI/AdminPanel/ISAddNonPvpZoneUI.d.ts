/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISAddNonPvpZoneUI:new */
    export class ISAddNonPvpZoneUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      buttonBorderColor: any;

      cancel: any;

      defineStartingPointBtn: any;

      endX: any;

      endY: any;

      ok: any;

      player: any;

      size: any;

      startingX: any;

      startingY: any;

      titleEntry: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      onClick: ((button: any) => any) | any;

      updateButtons: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISAddNonPvpZoneUI {}
}
