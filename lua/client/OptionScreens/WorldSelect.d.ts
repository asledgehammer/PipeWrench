/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor WorldSelect:new */
    export class WorldSelect extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      backButton: any;

      listbox: any;

      mapGroups: any;

      mapListbox: any;

      nextButton: any;

      previousScreen: any;

      constructor(x: any, y: any, width: any, height: any);

      clickBack(...__args: never[]): any;

      clickNext(...__args: never[]): any;

      create(...__args: never[]): any;

      doDrawItem(y: any, item: any, alt: any, ...__args: never[]): any;

      fillList(...__args: never[]): any;

      hasChoices(...__args: never[]): any;

      onDblClick(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadBeforeDeactivate(joypadData: any, ...__args: never[]): any;

      onJoypadBeforeDeactivate_listbox(joypadData: any, ...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      onResolutionChange(oldw: any, oldh: any, neww: any, newh: any, ...__args: never[]): any;

      onSelectWorld(...__args: never[]): any;

      render(...__args: never[]): any;
    }
  }
  export namespace lua.client.OptionScreens.WorldSelect {}
}
