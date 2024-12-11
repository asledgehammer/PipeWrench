/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISLightSourceRadialMenu:new */
    export class ISLightSourceRadialMenu extends sharedLua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      playerNum: any;

      constructor(character: any);

      center(...__args: never[]): any;

      display(...__args: never[]): any;

      fillMenu(...__args: never[]): any;

      fillMenuForItem(menu: any, item: any, ...__args: never[]): any;

      getInsertBatteryRecipe(item: any, containerList: any, ...__args: never[]): any;

      getRemoveBatteryRecipe(item: any, containerList: any, ...__args: never[]): any;

      onEquipLight(item: any, primary: any, ...__args: never[]): any;

      onExtinguishCandle(item: any, ...__args: never[]): any;

      onInsertBattery(item: any, ...__args: never[]): any;

      onLightCandle(item: any, ...__args: never[]): any;

      onRemoveBattery(item: any, ...__args: never[]): any;

      onToggle(item: any, ...__args: never[]): any;

      /** @noSelf */
      static checkKey: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static onKeyPressed: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static onKeyReleased: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static onKeyRepeat: (key: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISLightSourceRadialMenu {}
}
