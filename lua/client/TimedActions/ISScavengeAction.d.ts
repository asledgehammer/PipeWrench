/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISScavengeAction:new */
    export class ISScavengeAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bonusFindingChance: any;

      currentTime: any;

      options: any;

      scavengeUI: any;

      scavengeZoneIncrease: any;

      x: any;

      y: any;

      zone: any;

      constructor(character: any, zone: any, options: any, scavengeUI: any);

      addOrDropItems(type: any, count: any, ...__args: never[]): any;

      getForestGoods(...__args: never[]): any;

      getMedicinalHerbs(...__args: never[]): any;

      getPlant(...__args: never[]): any;

      getScavengeZone(...__args: never[]): any;

      getUsedInventory(itemType: any, ...__args: never[]): any;

      scavenge(...__args: never[]): any;

      /** @noSelf */
      static getScavengingZone: (x: any, y: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.TimedActions.ISScavengeAction {}
}
