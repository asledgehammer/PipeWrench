/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor AttachmentEditorUI:new */
    export class AttachmentEditorUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      bottomPanel: any;

      buttonScale1: any;

      buttonScale2: any;

      buttonScale3: any;

      editUI: any;

      scene: any;

      views: any;

      worldAttachmentPanel: any;

      wroteScriptLabel: any;

      wroteScriptTime: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren(...__args: never[]): any;

      onExit(button: any, x: any, y: any, ...__args: never[]): any;

      onGridMult1(button: any, x: any, y: any, ...__args: never[]): any;

      onGridMult2(button: any, x: any, y: any, ...__args: never[]): any;

      onGridMult3(button: any, x: any, y: any, ...__args: never[]): any;

      onResolutionChange(oldw: any, oldh: any, neww: any, newh: any, ...__args: never[]): any;

      onSave(button: any, x: any, y: any, ...__args: never[]): any;

      setEditUI(ui: any, ...__args: never[]): any;

      showUI(...__args: never[]): any;

      update(...__args: never[]): any;

      wroteScript(fileName: any, ...__args: never[]): any;
    }

    /** @customConstructor AttachmentEditorUI_EditAttachment:new */
    export class AttachmentEditorUI_EditAttachment extends lua.client.DebugUIs.AttachmentEditorUI_EditPanel {
      [id: string]: any;
      static [id: string]: any;

      belowList: any;

      button3: any;

      button4: any;

      buttonDeleteAttachment: any;

      buttonNewAttachment: any;

      buttonRemoveModel: any;

      comboAddModel: any;

      comboPlayer: any;

      femaleBodyScript: any;

      gizmo: any;

      list: any;

      list2: any;

      maleBodyScript: any;

      nameEntry: any;

      originalOffset: any;

      originalRotate: any;

      selectedAttachment: any;

      selectedBone: any;

      selectedModelScript: any;

      transformMode: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren(...__args: never[]): any;

      doDrawItem(y: any, item: any, alt: any, ...__args: never[]): any;

      doDrawItem2(y: any, item: any, alt: any, ...__args: never[]): any;

      doLayout(...__args: never[]): any;

      getSelectedAttachmentIds(...__args: never[]): any;

      getSelectedAttachments(...__args: never[]): any;

      getUniqueAttachmentId(modelScript: any, ...__args: never[]): any;

      isBodyScript(modelScript: any, ...__args: never[]): any;

      onComboAddModel(...__args: never[]): any;

      onComboPlayerModel(...__args: never[]): any;

      onDeleteAttachment(button: any, x: any, y: any, ...__args: never[]): any;

      onNameEntered(...__args: never[]): any;

      onNewAttachment(button: any, x: any, y: any, ...__args: never[]): any;

      onRemoveModel(button: any, x: any, y: any, ...__args: never[]): any;

      onRightMouseDownList1(x: any, y: any, ...__args: never[]): any;

      onSetObjectAutoRotate(child: any, ...__args: never[]): any;

      onSetObjectParent(child: any, childAttachment: any, parent: any, parentAttachment: any, ...__args: never[]): any;

      onToggleGizmo(...__args: never[]): any;

      onToggleGlobalLocal(...__args: never[]): any;

      pickCharacterBone(...__args: never[]): any;

      setSelectedAttachment(attach: any, ...__args: never[]): any;

      setSelectedModel(modelScript: any, ...__args: never[]): any;
    }

    /** @customConstructor AttachmentEditorUI_EditPanel:new */
    export class AttachmentEditorUI_EditPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);

      createList(x: any, y: any, w: any, h: any, ...__args: never[]): any;

      java0(func: any, ...__args: never[]): any;

      java1(func: any, arg0: any, ...__args: never[]): any;

      java2(func: any, arg0: any, arg1: any, ...__args: never[]): any;

      java3(func: any, arg0: any, arg1: any, arg2: any, ...__args: never[]): any;

      java4(func: any, arg0: any, arg1: any, arg2: any, arg3: any, ...__args: never[]): any;

      java6(func: any, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, ...__args: never[]): any;

      java9(
        func: any,
        arg0: any,
        arg1: any,
        arg2: any,
        arg3: any,
        arg4: any,
        arg5: any,
        arg6: any,
        arg7: any,
        arg8: any,
        ...__args: never[]
      ): any;

      onGizmoAccept(...__args: never[]): any;

      onGizmoCancel(...__args: never[]): any;

      onGizmoChanged(delta: any, ...__args: never[]): any;

      onGizmoStart(...__args: never[]): any;

      onSceneMouseDown(x: any, y: any, ...__args: never[]): any;

      prerenderEditor(...__args: never[]): any;

      toUI(...__args: never[]): any;

      updateEditor(...__args: never[]): any;
    }

    /** @customConstructor AttachmentEditorUI_ListBox:new */
    export class AttachmentEditorUI_ListBox extends lua.client.ISUI.ISScrollingListBox {
      [id: string]: any;
      static [id: string]: any;

      selectionMode: any;

      constructor(x: any, y: any, width: any, height: any);

      clearSelection(...__args: never[]): any;

      getSelectedCount(...__args: never[]): any;

      getSelectedItems(...__args: never[]): any;

      indexOf(text: any, ...__args: never[]): any;

      iteratorSelected(...__args: never[]): any;

      setSelectedRow(row: any, ...__args: never[]): any;

      setSelectedRows(rows: any, ...__args: never[]): any;
    }

    /** @customConstructor AttachmentEditorUI_Scene:new */
    export class AttachmentEditorUI_Scene extends lua.client.Vehicles.ISUI.ISUI3DScene {
      [id: string]: any;
      static [id: string]: any;

      gizmoAxis: any;

      gizmoClickScenePos: any;

      gizmoStartScenePos: any;

      zeroVector: any;

      constructor(x: any, y: any, width: any, height: any);

      onGizmoAccept(...__args: never[]): any;

      onGizmoCancel(...__args: never[]): any;

      onGizmoChanged(delta: any, ...__args: never[]): any;

      onGizmoStart(...__args: never[]): any;

      onRightMouseDown(x: any, y: any, ...__args: never[]): any;

      prerenderEditor(...__args: never[]): any;
    }

    /** @customConstructor AttachmentEditorUI_SwitchView:new */
    export class AttachmentEditorUI_SwitchView extends lua.client.Vehicles.ISUI.ISUI3DScene {
      [id: string]: any;
      static [id: string]: any;

      editor: any;

      constructor(editor: any, x: any, y: any, width: any, height: any);

      onMouseMoveOutside(dx: any, dy: any, ...__args: never[]): any;
    }

    /** @customConstructor AttachmentEditorUI_WorldAttachmentPanel:new */
    export class AttachmentEditorUI_WorldAttachmentPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      scene: any;

      weaponRotationHack: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren(...__args: never[]): any;

      onTickBox(index: any, selected: any, ...__args: never[]): any;

      setModelScriptName(scriptName: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.AttachmentEditorUI {
    /** @noSelf */
    export const AttachmentEditorState_InitUI: () => any;
  }
}
