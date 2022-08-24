/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor MapSpawnSelect:new */
    export class MapSpawnSelect extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      addY: any;

      backButton: any;

      checkExist: any;

      checkExistsName: any;

      joyfocus: any;

      listbox: any;

      nextButton: any;

      previousScreen: any;

      richText: any;

      selectedRegion: any;

      startY: any;

      textEntry: any;

      textEntryLabel: any;

      constructor(x: any, y: any, width: any, height: any);

      clickBack: (() => any) | any;

      clickNext: (() => any) | any;

      create: (() => any) | any;

      doDrawItem: ((y: any, item: any, alt: any) => any) | any;

      fillList: (() => any) | any;

      getChallengeSpawnRegion: (() => any) | any;

      getFixedSpawnRegion: (() => any) | any;

      getSafehouseSpawnRegion: (() => any) | any;

      getSpawnRegions: (() => any) | any;

      hasChoices: (() => any) | any;

      hideOrShowSaveName: (() => any) | any;

      onDblClick: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivate_child: ((joypadData: any) => any) | any;

      onJoypadDirDown_textEntry: ((joypadData: any) => any) | any;

      onJoypadDown_textEntry: ((button: any, joypadData: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      render: (() => any) | any;

      useDefaultSpawnRegion: (() => any) | any;
    }

    /** @customConstructor MapSpawnSelectInfoPanel:new */
    export class MapSpawnSelectInfoPanel extends lua.client.ISUI.ISRichTextPanel {
      [id: string]: any;
      static [id: string]: any;

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;

      onJoypadDirDown: ((joypadData: any) => any) | any;

      onJoypadDirLeft: ((joypadData: any) => any) | any;

      onJoypadDirUp: ((joypadData: any) => any) | any;

      onJoypadDown: ((button: any, joypadData: any) => any) | any;

      prerender: (() => any) | any;
    }

    /** @customConstructor MapSpawnSelectListBox:new */
    export class MapSpawnSelectListBox extends lua.client.ISUI.ISScrollingListBox {
      [id: string]: any;
      static [id: string]: any;

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;
    }
  }
  export namespace lua.client.OptionScreens.MapSpawnSelect {}
}
