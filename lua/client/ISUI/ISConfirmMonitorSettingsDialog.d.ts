/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISConfirmMonitorSettingsDialog:new */
    export class ISConfirmMonitorSettingsDialog extends lua.client.ISUI.ISModalDialog {
      [id: string]: any;
      static [id: string]: any;

      startTime: any;

      constructor(x: any, y: any, width: any, height: any, callback: any, param1: any, param2: any);

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISConfirmMonitorSettingsDialog {}
}
