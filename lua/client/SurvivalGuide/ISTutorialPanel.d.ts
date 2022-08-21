/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.SurvivalGuide {
    /** @customConstructor ISSurvivalGuideListBox:new */
    export class ISSurvivalGuideListBox extends lua.client.ISUI.ISScrollingListBox {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);

      onGainJoypadFocus: ((joypadData: any) => any) | any;
    }

    /** @customConstructor ISSurvivalGuideRichText:new */
    export class ISSurvivalGuideRichText extends lua.client.ISUI.ISRichTextPanel {
      [id: string]: any;
      static [id: string]: any;

      smoothScrollTargetY: any;

      smoothScrollY: any;

      yScrollDelta: any;

      constructor(x: any, y: any, width: any, height: any);

      onJoypadDirDown: ((joypadData: any) => any) | any;

      onJoypadDirLeft: ((joypadData: any) => any) | any;

      onJoypadDirRight: ((joypadData: any) => any) | any;

      onJoypadDirUp: ((joypadData: any) => any) | any;

      onJoypadDown: ((button: any, joypadData: any) => any) | any;

      prerender: (() => any) | any;

      updateSmoothScrolling: (() => any) | any;
    }

    /** @customConstructor ISSurvivalGuideRightPanel:new */
    export class ISSurvivalGuideRightPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      richText: any;

      tickBox: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      onTickBox: ((index: any, selected: any) => any) | any;
    }

    /** @customConstructor ISTutorialPanel:new */
    export class ISTutorialPanel extends lua.client.ISUI.ISCollapsableWindowJoypad {
      [id: string]: any;
      static [id: string]: any;

      centerText: any;

      chapterList: any;

      content: any;

      moreInfo: any;

      rightPanel: any;

      rightPanelText: any;

      tutorialSetInfo: any;

      visibleFunction: any;

      visibleTarget: any;

      constructor(x: any, y: any, width: any, height: any);

      close: (() => any) | any;

      createChildren: (() => any) | any;

      fillChapterList: (() => any) | any;

      isKeyConsumed: ((key: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onKeyRelease: ((key: any) => any) | any;

      onToggleVisible: (() => any) | any;

      prerender: (() => any) | any;

      reload: (() => any) | any;

      render: (() => any) | any;

      setPage: ((pageNum: any) => any) | any;

      setUseJoypad: ((useJoypad: any) => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.SurvivalGuide.ISTutorialPanel {}
}
