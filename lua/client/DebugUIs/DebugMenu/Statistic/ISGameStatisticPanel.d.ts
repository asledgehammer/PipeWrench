/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugMenu.Statistic {
    /** @customConstructor ISGameStatisticPanel:new */
    export class ISGameStatisticPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      avgUpdatePeriod: any;

      buttonBorderColor: any;

      buttonChartDiskOperations: any;

      buttonChartMemory: any;

      buttonChartPackets: any;

      buttonChartUpdatePeriod: any;

      buttonToggleMonitor: any;

      cGreen: any;

      colExt: any;

      colInt: any;

      connection_access: any;

      connection_fps: any;

      connection_fpsAvg: any;

      connection_ip: any;

      connection_ping: any;

      connection_ping_avg: any;

      connection_players: any;

      connection_players_count: any;

      connection_players_desync_avg: any;

      connection_players_desync_max: any;

      connection_players_desync_teleport: any;

      connection_username: any;

      connection_zombies_count: any;

      connection_zombies_desync_avg: any;

      connection_zombies_desync_max: any;

      connection_zombies_desync_teleport: any;

      connections: any;

      cRed: any;

      data: any;

      flareCount: any;

      flareID: any;

      freeMemory: any;

      histogramm_h: any;

      histogramm_w: any;

      histogramm_y: any;

      incomePackets: any;

      init: any;

      lastReport: any;

      loadCellFromDisk: any;

      maxUpdatePeriod: any;

      minUpdatePeriod: any;

      outcomePackets: any;

      panelTitle: any;

      periodValue: any;

      saveCellToDisk: any;

      usedMemory: any;

      variableColor: any;

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any, title: any);

      createChildren: (() => any) | any;

      drawIncomePacketsList: ((y: any, item: any, alt: any) => any) | any;

      drawOutcomePacketsList: ((y: any, item: any, alt: any) => any) | any;

      drawUsersList: ((y: any, item: any, alt: any) => any) | any;

      onClick: ((_button: any) => any) | any;

      onClickClose: (() => any) | any;

      onCombo: ((_combo: any) => any) | any;

      OnFlaresListMouseDown: ((item: any) => any) | any;

      populateConnectionsList: (() => any) | any;

      populatePacketsList: (() => any) | any;

      populateUsersList: ((connect: any) => any) | any;

      updateValues: (() => any) | any;

      /** @noSelf */
      static OnOpenPanel: () => any;

      /** @noSelf */
      static OnServerStatisticReceived: () => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Statistic.ISGameStatisticPanel {}
}
