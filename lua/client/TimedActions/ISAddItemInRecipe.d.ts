/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISAddItemInRecipe:new */
    export class ISAddItemInRecipe extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      baseItem: any;

      jobType: any;

      recipe: any;

      sound: any;

      usedItem: any;

      constructor(character: any, recipe: any, baseItem: any, usedItem: any, time: any);

      /** @noSelf */
      static checkName: (baseItem: any, recipe: any, ...__args: never[]) => any;

      /** @noSelf */
      static checkTemperature: (baseItem: any, usedItem: any, recipe: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.TimedActions.ISAddItemInRecipe {}
}
