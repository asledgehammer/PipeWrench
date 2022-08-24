/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.XpSystem {
    export abstract class xpUpdate {
      static [id: string]: any;

      /** @noSelf */
      static addXp: (owner: any, type: any, amount: any) => any;

      /** @noSelf */
      static checkForLosingLevel: (playerObj: any, perk: any) => any;

      /** @noSelf */
      static displayCharacterInfo: (key: any) => any;

      /** @noSelf */
      static everyTenMinutes: () => any;

      /** @noSelf */
      static getModData: (playerObj: any) => any;

      /** @noSelf */
      static levelPerk: (owner: any, perk: any, level: any, addBuffer: any) => any;

      /** @noSelf */
      static onMakeItem: (item: any, resultItem: any, recipe: any) => any;

      /** @noSelf */
      static onNewGame: (playerObj: any, square: any) => any;

      /** @noSelf */
      static onPlayerMove: () => any;

      /** @noSelf */
      static OnWeaponHitTree: (owner: any, weapon: any) => any;

      /** @noSelf */
      static onWeaponHitXp: (owner: any, weapon: any, hitObject: any, damage: any) => any;

      /** @noSelf */
      static randXp: () => any;
    }
  }
  export namespace lua.server.XpSystem.XpUpdate {}
}
