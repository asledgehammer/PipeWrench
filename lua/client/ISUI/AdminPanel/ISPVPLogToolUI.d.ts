/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISPVPLogToolUI:new */
    export class ISPVPLogToolUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      clear: any;

      close: any;

      pvpEvents: any;

      teleport: any;

      tickBox: any;

      constructor(x: any, y: any, width: any, height: any);

      closeModal(...__args: never[]): any;

      drawEvents(y: any, item: any, alt: any, ...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onSelect(_item: any, ...__args: never[]): any;

      onTicked(index: any, selected: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISPVPLogToolUI {}
}
