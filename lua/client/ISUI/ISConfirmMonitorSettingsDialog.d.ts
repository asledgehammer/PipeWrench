/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISConfirmMonitorSettingsDialog:new */
    export class ISConfirmMonitorSettingsDialog extends lua.client.ISUI.ISModalDialog {
      [id: string]: any;
      static [id: string]: any;

      startTime: any;

      constructor(x: any, y: any, width: any, height: any, callback: any, param1: any, param2: any);

      update: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISConfirmMonitorSettingsDialog {}
}
