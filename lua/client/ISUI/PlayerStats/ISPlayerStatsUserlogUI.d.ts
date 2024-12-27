/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.PlayerStats {
    /** @customConstructor ISPlayerStatsUserlogUI:new */
    export class ISPlayerStatsUserlogUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      addLog: any;

      listHeaderColor: any;

      ok: any;

      onclick: any;

      removeLog: any;

      target: any;

      userlogList: any;

      userlogs: any;

      username: any;

      variableColor: any;

      windows: any;

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any, target: any, onclick: any, username: any, userlogs: any);

      create(...__args: never[]): any;

      drawLog(y: any, item: any, alt: any, ...__args: never[]): any;

      onAddLog(button: any, player: any, ...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      onRemoveLog(button: any, player: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setVisible(visible: any, ...__args: never[]): any;

      /** @noSelf */
      static populateLogList: (self: any, ...__args: never[]) => any;

      /** @noSelf */
      static receiveUserLog: (username: any, logs: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.PlayerStats.ISPlayerStatsUserlogUI {}
}
