/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Statistic {
    /** @customConstructor StatisticChartMemory:new */
    export class StatisticChartMemory extends lua.client.DebugUIs.DebugMenu.Statistic.StatisticChart {
      [id: string]: any;
      static [id: string]: any;

      /** @noSelf */
      static doInstance: (...__args: never[]) => any;

      /** @noSelf */
      static OnOpenPanel: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Statistic.StatisticChartMemory {}
}
