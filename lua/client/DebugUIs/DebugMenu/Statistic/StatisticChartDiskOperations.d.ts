/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugMenu.Statistic {
    /** @customConstructor StatisticChartDiskOperations:new */
    export class StatisticChartDiskOperations extends lua.client.DebugUIs.DebugMenu.Statistic.StatisticChart {
      [id: string]: any;
      static [id: string]: any;

      /** @noSelf */
      static doInstance: () => any;

      /** @noSelf */
      static OnOpenPanel: () => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Statistic.StatisticChartDiskOperations {}
}
