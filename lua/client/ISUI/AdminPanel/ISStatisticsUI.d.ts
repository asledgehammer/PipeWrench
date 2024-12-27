/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISStatisticsPanel:new */
    export class ISStatisticsPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);

      drawRow(
        l: any,
        lC: any,
        c: any,
        cC: any,
        s: any,
        sC: any,
        y: any,
        r: any,
        g: any,
        b: any,
        a: any,
        background: any,
        ...__args: never[]
      ): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      renderStatistics(...__args: never[]): any;
    }

    /** @customConstructor ISStatisticsUI:new */
    export class ISStatisticsUI extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      moveWithMouse: any;

      panel: any;

      player: any;

      playerNum: any;

      showAnimals: any;

      showChunks: any;

      showCPU: any;

      showFPS: any;

      showMemory: any;

      showNetwork: any;

      showPing: any;

      showPlayers: any;

      showTime: any;

      showVersion: any;

      showVOIP: any;

      showZombies: any;

      tickBoxCenter: any;

      tickBoxLeft: any;

      tickBoxRight: any;

      constructor(x: any, y: any, player: any);

      onTickedCenter(index: any, selected: any, ...__args: never[]): any;

      onTickedLeft(index: any, selected: any, ...__args: never[]): any;

      onTickedRight(index: any, selected: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISStatisticsUI {}
}
