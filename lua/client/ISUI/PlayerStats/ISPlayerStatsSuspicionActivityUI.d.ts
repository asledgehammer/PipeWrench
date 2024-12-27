/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.PlayerStats {
    /** @customConstructor ISPlayerStatsSuspicionActivityUI:new */
    export class ISPlayerStatsSuspicionActivityUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      listHeaderColor: any;

      ok: any;

      onclick: any;

      points: any;

      suspicionActivity: any;

      target: any;

      username: any;

      variableColor: any;

      windows: any;

      zOffsetSmallFont: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        target: any,
        onclick: any,
        username: any,
        suspicionActivity: any,
      );

      create(...__args: never[]): any;

      drawLog(y: any, item: any, alt: any, ...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setVisible(visible: any, ...__args: never[]): any;

      /** @noSelf */
      static populate: (self: any, ...__args: never[]) => any;

      /** @noSelf */
      static receiveSuspicionActivity: (
        username: any,
        userLog: any,
        suspiciousActivity: any,
        ...__args: never[]
      ) => any;
    }
  }
  export namespace lua.client.ISUI.PlayerStats.ISPlayerStatsSuspicionActivityUI {}
}
