/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.CraftRecipe {
    /** @customConstructor ISCraftInputItemNode:new */
    export class ISCraftInputItemNode extends sharedLua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      expanded: any;

      items: any;

      name: any;

      recipe: any;

      scriptItem: any;

      textCol: any;

      width: any;

      constructor(_recipe: any, _scriptItem: any);

      reset(...__args: never[]): any;
    }

    /** @customConstructor ISCraftInputItems:new */
    export class ISCraftInputItems extends sharedLua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      allItems: any;

      containers: any;

      nodes: any;

      oldNodes: any;

      player: any;

      recipe: any;

      recipeData: any;

      constructor(_player: any, _recipeData: any);

      getAllItems(...__args: never[]): any;

      onRecipeChanged(...__args: never[]): any;

      rebuildItemNodes(...__args: never[]): any;

      updateContainers(...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.CraftRecipe.ISCraftInputItems {}
}
