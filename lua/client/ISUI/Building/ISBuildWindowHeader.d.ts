/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.Building {
    /** @customConstructor ISBuildWindowHeader:new */
    export class ISBuildWindowHeader extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      buttonInfo: any;

      enableIcon: any;

      enableInfoButton: any;

      icon: any;

      iconSize: any;

      marginBottom: any;

      marginLeft: any;

      marginRight: any;

      marginTop: any;

      paddingBottom: any;

      paddingLeft: any;

      paddingRight: any;

      paddingTop: any;

      player: any;

      styleButton: any;

      styleIcon: any;

      styleLabel: any;

      title: any;

      titleStr: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        player: any,
        _styleIcon: any,
        _styleLabel: any,
        _styleButton: any,
      );

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onButtonClick(_button: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      render(...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.Building.ISBuildWindowHeader {}
}
