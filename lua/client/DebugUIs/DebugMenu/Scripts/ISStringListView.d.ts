/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Scripts {
    /** @customConstructor ISStringListView:new */
    export class ISStringListView extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      entryBox: any;

      greyCol: any;

      iconCollapse: any;

      iconExpand: any;

      infoList: any;

      labelWidth: any;

      listLabel: any;

      rootNode: any;

      searchText: any;

      constructor(x: any, y: any, width: any, height: any);

      buildList(...__args: never[]): any;

      buildNodes(_lines: any, ...__args: never[]): any;

      clear(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      drawInfoList(y: any, item: any, alt: any, ...__args: never[]): any;

      onInfoListSelected(_item: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      parseSearchText(...__args: never[]): any;

      populate(_lines: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setExpandedAll(...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static onTextChange: (box: any, ...__args: never[]) => any;
    }

    export abstract class ISStringListViewNode {
      static [id: string]: any;

      build: ((_list: any) => any) | any;

      isContainer: (() => any) | any;

      isDrawIcon: (() => any) | any;

      new: ((_parent: any, _text: any, _isRoot: any) => any) | any;

      preBuild: (() => any) | any;

      reset: (() => any) | any;

      resetHighlights: (() => any) | any;

      search: ((_text: any, _col: any) => any) | any;

      setExpanded: ((_b: any, _noChildren: any) => any) | any;

      setExpandedAll: (() => any) | any;

      setHighlight: ((_col: any) => any) | any;

      toggleExpand: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Scripts.ISStringListView {}
}
