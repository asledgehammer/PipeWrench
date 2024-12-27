/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.OptionScreens.ModSelector {
    /** @customConstructor ModInfoPanel:new */
    export class ModInfoPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      dependenciesPanel: any;

      descPanel: any;

      incompatiblePanel: any;

      joypadFocused: any;

      modInfo: any;

      modInfoParams: any;

      thumbnailPanel: any;

      thumbnailPreviewImage: any;

      titlePanel: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren(...__args: never[]): any;

      drawCustomRectBorder(x: any, y: any, w: any, h: any, r: any, g: any, b: any, a: any, ...__args: never[]): any;

      recalcSize(...__args: never[]): any;

      render(...__args: never[]): any;

      setJoypadFocused(val: any, joypadData: any, ...__args: never[]): any;

      updateView(modInfo: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.OptionScreens.ModSelector.ModInfoPanel {}
}
