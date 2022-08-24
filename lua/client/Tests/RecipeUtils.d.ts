/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Tests {
    export abstract class RecipeUtils {
      static [id: string]: any;

      /** @noSelf */
      static CreateSourceItem: (recipe: any, source: any, sourceFullType: any, options: any, result: any) => any;

      /** @noSelf */
      static CreateSourceItem1: (recipe: any, source: any, sourceFullType: any, options: any) => any;

      /** @noSelf */
      static CreateSourceItem2: (recipe: any, source: any, sourceFullType: any, options: any, result: any) => any;

      /** @noSelf */
      static CreateSourceItems: (recipe: any, options: any, result: any) => any;
    }
  }
  export namespace lua.client.Tests.RecipeUtils {}
}
