/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      clickBack: (() => any) | any;

      clickNext: (() => any) | any;

      create: (() => any) | any;

      doDrawItem: ((y: any, item: any, alt: any) => any) | any;

      fillList: (() => any) | any;

      hasChoices: (() => any) | any;

      onDblClick: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivate_listbox: ((joypadData: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      onSelectWorld: (() => any) | any;

      render: (() => any) | any;
    }
  }
  export namespace lua.client.OptionScreens.WorldSelect {}
}
