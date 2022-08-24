/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugGlobalObjectState {
    /** @customConstructor DebugGlobalObjectState_BasePropertiesPanel:new */
    export class DebugGlobalObjectState_BasePropertiesPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      addLineX: any;

      addLineY: any;

      constructor(x: any, y: any, w: any, h: any);

      addLine: ((text: any, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any) => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      postrender: (() => any) | any;

      render: (() => any) | any;

      renderKeyValue: ((k: any, v: any) => any) | any;
    }

    /** @customConstructor DebugGlobalObjectState_GlobalObjectPanel:new */
    export class DebugGlobalObjectState_GlobalObjectPanel extends lua.client.DebugUIs.DebugGlobalObjectState
      .DebugGlobalObjectState_BasePropertiesPanel {
      [id: string]: any;
      static [id: string]: any;

      objectPos: any;

      system: any;

      render1: (() => any) | any;

      setObject: ((globalObject: any) => any) | any;
    }

    /** @customConstructor DebugGlobalObjectState_IsoObjectPanel:new */
    export class DebugGlobalObjectState_IsoObjectPanel extends lua.client.DebugUIs.DebugGlobalObjectState
      .DebugGlobalObjectState_BasePropertiesPanel {
      [id: string]: any;
      static [id: string]: any;

      objectPos: any;

      system: any;

      render1: (() => any) | any;

      setObject: ((globalObject: any) => any) | any;
    }

    /** @customConstructor DebugGlobalObjectState_PropertiesPanel:new */
    export class DebugGlobalObjectState_PropertiesPanel extends lua.client.DebugUIs.DebugChunkState.ISSectionedPanel {
      [id: string]: any;
      static [id: string]: any;

      object: any;

      state: any;

      system: any;

      constructor(x: any, y: any, width: any, height: any, state: any);

      createChildren: (() => any) | any;

      setObject: ((globalObject: any) => any) | any;

      setSystem: ((system: any) => any) | any;
    }

    /** @customConstructor DebugGlobalObjectState_SystemPanel:new */
    export class DebugGlobalObjectState_SystemPanel extends lua.client.DebugUIs.DebugGlobalObjectState
      .DebugGlobalObjectState_BasePropertiesPanel {
      [id: string]: any;
      static [id: string]: any;

      system: any;

      constructor(x: any, y: any, w: any, h: any);

      render1: (() => any) | any;

      setSystem: ((system: any) => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugGlobalObjectState.DebugGlobalObjectState_PropertiesPanel {}
}
