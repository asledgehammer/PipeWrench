/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor DebugOptionsWindow:new */
    export class DebugOptionsWindow extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      categoryList: any;

      categoryMap: any;

      tickBoxes: any;

      constructor(x: any, y: any, width: any, height: any);

      calcTickBoxBounds(...__args: never[]): any;

      onCategorySelected(category: any, ...__args: never[]): any;

      onMouseDownOutside(x: any, y: any, ...__args: never[]): any;

      onTickBox(index: any, selected: any, option: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.DebugOptionsWindow {}
}
