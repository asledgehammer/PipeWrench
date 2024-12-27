/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Definitions.animal {
    export abstract class ButcheringUtil {
      static [id: string]: any;

      /** @noSelf */
      static addAnimalPart: (part: any, player: any, carcass: any, fromGround: any, ...__args: never[]) => any;

      /** @noSelf */
      static butcherAnimalFromGround: (carcass: any, player: any, keepCorpse: any, ...__args: never[]) => any;

      /** @noSelf */
      static getAllBonesDef: (name: any, ...__args: never[]) => any;

      /** @noSelf */
      static getAllPartsDef: (name: any, ...__args: never[]) => any;

      /** @noSelf */
      static getAnimalBones: (carcass: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static getAnimalDef: (name: any, ...__args: never[]) => any;

      /** @noSelf */
      static getCarcassName: (carcass: any, ...__args: never[]) => any;

      /** @noSelf */
      static getHead: (name: any, ...__args: never[]) => any;

      /** @noSelf */
      static getLeather: (name: any, ...__args: never[]) => any;

      /** @noSelf */
      static getPartChance: (baseChance: any, size: any, meatRatio: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static giveMeatModified: (
        meatDef: any,
        nb: any,
        player: any,
        meatRatio: any,
        carcass: any,
        fromGround: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static modifyMeat: (item: any, size: any, meatRatio: any, hungerBoost: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.shared.Definitions.animal.ButcheringUtil {}
}
