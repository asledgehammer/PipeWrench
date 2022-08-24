/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Farming.ISUI {
    /** @customConstructor ISFarmingWindow:new */
    export class ISFarmingWindow extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      farmingPanel: any;

      plant: any;

      constructor(x: any, y: any, width: any, height: any, character: any, plant: any);

      visible: ((visible: any) => any) | any;
    }
  }
  export namespace lua.client.Farming.ISUI.ISFarmingWindow {}
}
