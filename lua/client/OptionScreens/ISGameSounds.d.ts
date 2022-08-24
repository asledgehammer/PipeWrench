/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor ISGameSounds:new */
    export class ISGameSounds extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      addY: any;

      buttonClose: any;

      buttonReload: any;

      joyfocus: any;

      mainPanel: any;

      maxLabelWidth: any;

      previewControl: any;

      tabs: any;

      volumesChanged: any;

      constructor(x: any, y: any, width: any, height: any);

      addCombo:
        | ((x: any, y: any, w: any, h: any, name: any, options: any, selected: any, target: any, onchange: any) => any)
        | any;

      addPage: ((name: any) => any) | any;

      addVolumeControl:
        | ((x: any, y: any, w: any, h: any, name: any, volume: any, target: any, onchange: any) => any)
        | any;

      createChildren: (() => any) | any;

      onClose: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      onReload: (() => any) | any;

      onReturnToGame: (() => any) | any;

      onStopSound: (() => any) | any;

      onVolumeChanged: ((control: any, volume: any) => any) | any;

      /** @noSelf */
      static onPlaySound: (args: any) => any;
    }
  }
  export namespace lua.client.OptionScreens.ISGameSounds {}
}
