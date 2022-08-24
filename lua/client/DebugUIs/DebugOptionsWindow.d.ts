/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor DebugOptionsWindow:new */
    export class DebugOptionsWindow extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      categoryList: any;

      categoryMap: any;

      tickBoxes: any;

      constructor(x: any, y: any, width: any, height: any);

      calcTickBoxBounds: (() => any) | any;

      onCategorySelected: ((category: any) => any) | any;

      onMouseDownOutside: ((x: any, y: any) => any) | any;

      onTickBox: ((index: any, selected: any, option: any) => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugOptionsWindow {}
}
