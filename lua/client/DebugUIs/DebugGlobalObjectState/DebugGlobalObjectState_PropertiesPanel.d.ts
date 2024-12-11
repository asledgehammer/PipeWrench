/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugGlobalObjectState {
    /** @customConstructor DebugGlobalObjectState_BasePropertiesPanel:new */
    export class DebugGlobalObjectState_BasePropertiesPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      addLineX: any;

      addLineY: any;

      constructor(x: any, y: any, w: any, h: any);

      addLine(text: any, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, ...__args: never[]): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      postrender(...__args: never[]): any;

      render(...__args: never[]): any;

      renderKeyValue(k: any, v: any, ...__args: never[]): any;
    }

    /** @customConstructor DebugGlobalObjectState_GlobalObjectPanel:new */
    export class DebugGlobalObjectState_GlobalObjectPanel extends lua.client.DebugUIs.DebugGlobalObjectState
      .DebugGlobalObjectState_BasePropertiesPanel {
      [id: string]: any;
      static [id: string]: any;

      objectPos: any;

      system: any;

      render1(...__args: never[]): any;

      setObject(globalObject: any, ...__args: never[]): any;
    }

    /** @customConstructor DebugGlobalObjectState_IsoObjectPanel:new */
    export class DebugGlobalObjectState_IsoObjectPanel extends lua.client.DebugUIs.DebugGlobalObjectState
      .DebugGlobalObjectState_BasePropertiesPanel {
      [id: string]: any;
      static [id: string]: any;

      objectPos: any;

      system: any;

      render1(...__args: never[]): any;

      setObject(globalObject: any, ...__args: never[]): any;
    }

    /** @customConstructor DebugGlobalObjectState_PropertiesPanel:new */
    export class DebugGlobalObjectState_PropertiesPanel extends lua.client.DebugUIs.DebugChunkState.ISSectionedPanel {
      [id: string]: any;
      static [id: string]: any;

      object: any;

      state: any;

      system: any;

      constructor(x: any, y: any, width: any, height: any, state: any);

      createChildren(...__args: never[]): any;

      setObject(globalObject: any, ...__args: never[]): any;

      setSystem(system: any, ...__args: never[]): any;
    }

    /** @customConstructor DebugGlobalObjectState_SystemPanel:new */
    export class DebugGlobalObjectState_SystemPanel extends lua.client.DebugUIs.DebugGlobalObjectState
      .DebugGlobalObjectState_BasePropertiesPanel {
      [id: string]: any;
      static [id: string]: any;

      system: any;

      constructor(x: any, y: any, w: any, h: any);

      render1(...__args: never[]): any;

      setSystem(system: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.DebugGlobalObjectState.DebugGlobalObjectState_PropertiesPanel {}
}
