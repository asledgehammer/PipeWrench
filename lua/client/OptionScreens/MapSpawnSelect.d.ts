/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      clickBack(...__args: never[]): any;

      clickNext(...__args: never[]): any;

      create(...__args: never[]): any;

      doDrawItem(y: any, item: any, alt: any, ...__args: never[]): any;

      fillList(...__args: never[]): any;

      getChallengeSpawnRegion(...__args: never[]): any;

      getFixedSpawnRegion(...__args: never[]): any;

      getSafehouseSpawnRegion(...__args: never[]): any;

      getSpawnRegions(...__args: never[]): any;

      hasChoices(...__args: never[]): any;

      hideOrShowSaveName(...__args: never[]): any;

      onDblClick(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadBeforeDeactivate(joypadData: any, ...__args: never[]): any;

      onJoypadBeforeDeactivate_child(joypadData: any, ...__args: never[]): any;

      onJoypadDirDown_textEntry(joypadData: any, ...__args: never[]): any;

      onJoypadDown_textEntry(button: any, joypadData: any, ...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      onResolutionChange(oldw: any, oldh: any, neww: any, newh: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      useDefaultSpawnRegion(...__args: never[]): any;
    }

    /** @customConstructor MapSpawnSelectInfoPanel:new */
    export class MapSpawnSelectInfoPanel extends lua.client.ISUI.ISRichTextPanel {
      [id: string]: any;
      static [id: string]: any;

      onJoypadBeforeDeactivate(joypadData: any, ...__args: never[]): any;

      onJoypadDirDown(joypadData: any, ...__args: never[]): any;

      onJoypadDirLeft(joypadData: any, ...__args: never[]): any;

      onJoypadDirUp(joypadData: any, ...__args: never[]): any;

      onJoypadDown(button: any, joypadData: any, ...__args: never[]): any;

      prerender(...__args: never[]): any;
    }

    /** @customConstructor MapSpawnSelectListBox:new */
    export class MapSpawnSelectListBox extends lua.client.ISUI.ISScrollingListBox {
      [id: string]: any;
      static [id: string]: any;

      onJoypadBeforeDeactivate(joypadData: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.OptionScreens.MapSpawnSelect {}
}
