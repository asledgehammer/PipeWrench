/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.XpSystem {
    export abstract class xpUpdate {
      static [id: string]: any;

      /** @noSelf */
      static addXp: (owner: any, type: any, amount: any, ...__args: never[]) => any;

      /** @noSelf */
      static checkForLosingLevel: (playerObj: any, perk: any, ...__args: never[]) => any;

      /** @noSelf */
      static displayCharacterInfo: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static everyTenMinutes: (...__args: never[]) => any;

      /** @noSelf */
      static getModData: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static levelPerk: (owner: any, perk: any, level: any, addBuffer: any, ...__args: never[]) => any;

      /** @noSelf */
      static onMakeItem: (item: any, resultItem: any, recipe: any, ...__args: never[]) => any;

      /** @noSelf */
      static onNewGame: (playerObj: any, square: any, ...__args: never[]) => any;

      /** @noSelf */
      static onPlayerMove: (player: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnWeaponHitTree: (owner: any, weapon: any, ...__args: never[]) => any;

      /** @noSelf */
      static onWeaponHitXp: (
        owner: any,
        weapon: any,
        hitObject: any,
        damage: any,
        hitCount: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static randXp: (...__args: never[]) => any;
    }
  }
  export namespace lua.server.XpSystem.XpUpdate {}
}
