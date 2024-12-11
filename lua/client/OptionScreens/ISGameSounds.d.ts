/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      addCombo(
        x: any,
        y: any,
        w: any,
        h: any,
        name: any,
        options: any,
        selected: any,
        target: any,
        onchange: any,
        ...__args: never[]
      ): any;

      addPage(name: any, ...__args: never[]): any;

      addVolumeControl(
        x: any,
        y: any,
        w: any,
        h: any,
        name: any,
        volume: any,
        target: any,
        onchange: any,
        ...__args: never[]
      ): any;

      createChildren(...__args: never[]): any;

      onClose(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadBeforeDeactivate(joypadData: any, ...__args: never[]): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      onReload(...__args: never[]): any;

      onReturnToGame(...__args: never[]): any;

      onStopSound(...__args: never[]): any;

      onVolumeChanged(control: any, volume: any, ...__args: never[]): any;

      /** @noSelf */
      static onPlaySound: (args: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.OptionScreens.ISGameSounds {}
}
