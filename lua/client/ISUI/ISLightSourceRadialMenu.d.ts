/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISLightSourceRadialMenu:new */
    export class ISLightSourceRadialMenu extends lua.shared.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      playerNum: any;

      constructor(character: any);

      center: (() => any) | any;

      display: (() => any) | any;

      fillMenu: (() => any) | any;

      fillMenuForItem: ((menu: any, item: any) => any) | any;

      getInsertBatteryRecipe: ((item: any, containerList: any) => any) | any;

      getRemoveBatteryRecipe: ((item: any, containerList: any) => any) | any;

      onEquipLight: ((item: any, primary: any) => any) | any;

      onExtinguishCandle: ((item: any) => any) | any;

      onInsertBattery: ((item: any) => any) | any;

      onLightCandle: ((item: any) => any) | any;

      onRemoveBattery: ((item: any) => any) | any;

      onToggle: ((item: any) => any) | any;

      /** @noSelf */
      static checkKey: (key: any) => any;

      /** @noSelf */
      static onKeyPressed: (key: any) => any;

      /** @noSelf */
      static onKeyReleased: (key: any) => any;

      /** @noSelf */
      static onKeyRepeat: (key: any) => any;
    }
  }
  export namespace lua.client.ISUI.ISLightSourceRadialMenu {}
}
