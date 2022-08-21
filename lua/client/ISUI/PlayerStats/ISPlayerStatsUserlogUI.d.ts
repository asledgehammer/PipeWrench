/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.PlayerStats {
    /** @customConstructor ISPlayerStatsUserlogUI:new */
    export class ISPlayerStatsUserlogUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      addLog: any;

      chr: any;

      listHeaderColor: any;

      ok: any;

      onclick: any;

      removeLog: any;

      target: any;

      userlogList: any;

      userlogs: any;

      variableColor: any;

      windows: any;

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any, target: any, onclick: any, player: any, userlogs: any);

      create: (() => any) | any;

      drawLog: ((y: any, item: any, alt: any) => any) | any;

      onAddLog: ((button: any, player: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      onRemoveLog: ((button: any, player: any) => any) | any;

      render: (() => any) | any;

      setVisible: ((visible: any) => any) | any;

      /** @noSelf */
      static populateLogList: (self: any) => any;

      /** @noSelf */
      static receiveUserLog: (username: any, logs: any) => any;
    }
  }
  export namespace lua.client.ISUI.PlayerStats.ISPlayerStatsUserlogUI {}
}
