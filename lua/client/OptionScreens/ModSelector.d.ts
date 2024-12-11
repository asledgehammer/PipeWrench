/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor ModInfoPanel:new */
    export class ModInfoPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      buttonOptions: any;

      buttonToggle: any;

      locationEntry: any;

      locationLabel: any;

      modInfo: any;

      posterPanel: any;

      richText: any;

      thumbnailPanel: any;

      urlButton: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadBeforeDeactivate(joypadData: any, ...__args: never[]): any;

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setModInfo(modInfo: any, ...__args: never[]): any;
    }

    /** @customConstructor ModListBox:new */
    export class ModListBox extends lua.client.ISUI.ISScrollingListBox {
      [id: string]: any;
      static [id: string]: any;

      mouseOverButton: any;

      constructor(x: any, y: any, width: any, height: any);

      onJoypadBeforeDeactivate(joypadData: any, ...__args: never[]): any;
    }

    /** @customConstructor ModPosterPanel:new */
    export class ModPosterPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      modInfo: any;

      constructor(x: any, y: any, width: any, height: any);

      render(...__args: never[]): any;

      setJoypadFocused(focused: any, ...__args: never[]): any;

      setModInfo(modInfo: any, ...__args: never[]): any;
    }

    /** @customConstructor ModSelector:new */
    export class ModSelector extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      abutton: any;

      backButton: any;

      cantTexture: any;

      getModButton: any;

      infoPanel: any;

      itemheightoverride: any;

      javaObject: any;

      joyfocus: any;

      listbox: any;

      loadGameFolder: any;

      loadGameMapName: any;

      mapConflicts: any;

      mapGroups: any;

      modOrderbtn: any;

      modorderui: any;

      ModsEnabled: any;

      selected: any;

      smallFontHgt: any;

      tickTexture: any;

      topRect: any;

      urlButton: any;

      constructor(x: any, y: any, width: any, height: any);

      create(...__args: never[]): any;

      forceActivateMods(modInfo: any, activate: any, ...__args: never[]): any;

      getActiveMods(...__args: never[]): any;

      instantiate(...__args: never[]): any;

      isModActive(modInfo: any, ...__args: never[]): any;

      onAccept(...__args: never[]): any;

      onDblClickMap(item: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadBeforeDeactivate(joypadData: any, ...__args: never[]): any;

      onModsEnabledTick(option: any, selected: any, ...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      onResolutionChange(oldw: any, oldh: any, neww: any, newh: any, ...__args: never[]): any;

      populateListBox(directories: any, ...__args: never[]): any;

      setExistingSavefile(folder: any, ...__args: never[]): any;

      updateButtons(...__args: never[]): any;

      /** @noSelf */
      static showNagPanel: (...__args: never[]) => any;
    }

    /** @customConstructor ModThumbnailPanel:new */
    export class ModThumbnailPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      index: any;

      modInfo: any;

      padX: any;

      padY: any;

      pressed: any;

      thumbnailHeight: any;

      thumbnailWidth: any;

      constructor(x: any, y: any, width: any, height: any);

      getIndexAt(x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setJoypadFocused(focused: any, ...__args: never[]): any;

      setModInfo(modInfo: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.OptionScreens.ModSelector {
    /** @noSelf */
    export const ModSelector_onModsModified: () => any;
  }
}
