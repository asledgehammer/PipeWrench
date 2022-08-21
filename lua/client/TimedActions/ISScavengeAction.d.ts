/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISScavengeAction:new */
    export class ISScavengeAction extends lua.shared.TimedActions.ISBaseTimedAction {
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

      addOrDropItems: ((type: any, count: any) => any) | any;

      getForestGoods: (() => any) | any;

      getMedicinalHerbs: (() => any) | any;

      getPlant: (() => any) | any;

      getScavengeZone: (() => any) | any;

      getUsedInventory: ((itemType: any) => any) | any;

      scavenge: (() => any) | any;

      /** @noSelf */
      static getScavengingZone: (x: any, y: any) => any;
    }
  }
  export namespace lua.client.TimedActions.ISScavengeAction {}
}
