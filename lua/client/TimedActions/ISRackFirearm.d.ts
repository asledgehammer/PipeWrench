/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISRackFirearm:new */
    export class ISRackFirearm extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      gun: any;

      playedEjectAmmoStartSound: any;

      useProgressBar: any;

      constructor(character: any, gun: any);

      animEvent: ((event: any, parameter: any) => any) | any;

      ejectSpentRounds: (() => any) | any;

      initVars: (() => any) | any;

      rackBullet: (() => any) | any;

      removeBullet: (() => any) | any;
    }
  }
  export namespace lua.client.TimedActions.ISRackFirearm {}
}
