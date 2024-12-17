/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.ISUI {
    /** @customConstructor EditVehicleState_EditPhysics_PhysicsMeshPanel:new */
    export class EditVehicleState_EditPhysics_PhysicsMeshPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      comboPhysicsShape: any;

      editPhysics: any;

      constructor(x: any, y: any, width: any, height: any, editPhysics: any);

      createChildren(...__args: never[]): any;

      fillCombo(...__args: never[]): any;

      onSelectPhysicsShapeScript(...__args: never[]): any;
    }

    /** @customConstructor EditVehicleUI:new */
    export class EditVehicleUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      bottomPanel: any;

      editCombo: any;

      editUI: any;

      scene: any;

      scriptCombo: any;

      views: any;

      wroteScriptLabel: any;

      wroteScriptTime: any;

      constructor(x: any, y: any, width: any, height: any);

      alignEverythingToGrid(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onComboEdit(...__args: never[]): any;

      onComboVehicle(...__args: never[]): any;

      onExit(button: any, x: any, y: any, ...__args: never[]): any;

      onKeyPress(key: any, ...__args: never[]): any;

      onReload(button: any, x: any, y: any, ...__args: never[]): any;

      onResolutionChange(oldw: any, oldh: any, neww: any, newh: any, ...__args: never[]): any;

      onSave(button: any, x: any, y: any, ...__args: never[]): any;

      setEditUI(ui: any, ...__args: never[]): any;

      setScript(scriptName: any, ...__args: never[]): any;

      showUI(...__args: never[]): any;

      update(...__args: never[]): any;

      wroteScript(fileName: any, ...__args: never[]): any;
    }

    /** @customConstructor EditVehicleUI_EditArea:new */
    export class EditVehicleUI_EditArea extends lua.client.DebugUIs.AttachmentEditorUI_EditPanel {
      [id: string]: any;
      static [id: string]: any;

      button: any;

      buttonAlign: any;

      gizmo: any;

      list: any;

      originalXYWH: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren(...__args: never[]): any;

      doDrawItem(y: any, item: any, alt: any, ...__args: never[]): any;

      getSelectedAreas(...__args: never[]): any;

      onAlignToExtents(...__args: never[]): any;

      onToggleGizmo(...__args: never[]): any;
    }

    /** @customConstructor EditVehicleUI_EditAttachment:new */
    export class EditVehicleUI_EditAttachment extends lua.client.DebugUIs.AttachmentEditorUI_EditPanel {
      [id: string]: any;
      static [id: string]: any;

      belowList: any;

      button3: any;

      button4: any;

      buttonDeleteAttachment: any;

      buttonNewAttachment: any;

      gizmo: any;

      list: any;

      modelCombo: any;

      nameEntry: any;

      originalOffset: any;

      originalRotate: any;

      partCombo: any;

      selectedAttachment: any;

      selectedBone: any;

      transformMode: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren(...__args: never[]): any;

      doDrawItem(y: any, item: any, alt: any, ...__args: never[]): any;

      doLayout(...__args: never[]): any;

      getCurrentModel(...__args: never[]): any;

      getCurrentPart(...__args: never[]): any;

      getModelScriptForPart(part: any, vehicleModel: any, ...__args: never[]): any;

      getScriptForAttachments(...__args: never[]): any;

      getSelectedAttachmentIds(...__args: never[]): any;

      getSelectedAttachments(...__args: never[]): any;

      getUniqueAttachmentId(modelScript: any, ...__args: never[]): any;

      onComboModel(...__args: never[]): any;

      onComboPart(...__args: never[]): any;

      onDeleteAttachment(button: any, x: any, y: any, ...__args: never[]): any;

      onKeyPress(key: any, ...__args: never[]): any;

      onNameEntered(...__args: never[]): any;

      onNewAttachment(button: any, x: any, y: any, ...__args: never[]): any;

      onToggleGizmo(...__args: never[]): any;

      onToggleGlobalLocal(...__args: never[]): any;

      pickPartBone(...__args: never[]): any;

      populateAttachmentList(...__args: never[]): any;

      populateComboModel(...__args: never[]): any;

      populateComboPart(...__args: never[]): any;

      setSelectedAttachment(attach: any, ...__args: never[]): any;
    }

    /** @customConstructor EditVehicleUI_EditChassis:new */
    export class EditVehicleUI_EditChassis extends lua.client.DebugUIs.AttachmentEditorUI_EditPanel {
      [id: string]: any;
      static [id: string]: any;

      list: any;

      originalCenterOfMassOffset: any;

      originalChassisExtents: any;

      originalExtents: any;

      originalModelOffset: any;

      originalModelScale: any;

      originalShadowExtents: any;

      originalShadowOffset: any;

      tempVector3f_1: any;

      tempVector3f_2: any;

      constructor(x: any, y: any, width: any, height: any);

      addAABB(box: any, offset: any, r: any, g: any, b: any, ...__args: never[]): any;

      addSphere(offset: any, radius: any, r: any, g: any, b: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      doDrawItem(y: any, item: any, alt: any, ...__args: never[]): any;
    }

    /** @customConstructor EditVehicleUI_EditPanel:new */
    export class EditVehicleUI_EditPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      script: any;

      constructor(x: any, y: any, width: any, height: any);

      createList(x: any, y: any, w: any, h: any, ...__args: never[]): any;

      isScaleVehicle(...__args: never[]): any;

      java0(func: any, ...__args: never[]): any;

      java1(func: any, arg0: any, ...__args: never[]): any;

      java2(func: any, arg0: any, arg1: any, ...__args: never[]): any;

      java3(func: any, arg0: any, arg1: any, arg2: any, ...__args: never[]): any;

      java4(func: any, arg0: any, arg1: any, arg2: any, arg3: any, ...__args: never[]): any;

      java5(func: any, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, ...__args: never[]): any;

      java6(func: any, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, ...__args: never[]): any;

      java7(
        func: any,
        arg0: any,
        arg1: any,
        arg2: any,
        arg3: any,
        arg4: any,
        arg5: any,
        arg6: any,
        ...__args: never[]
      ): any;

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

      onKeyPress(key: any, ...__args: never[]): any;

      onSceneMouseDown(x: any, y: any, ...__args: never[]): any;

      prerenderEditor(...__args: never[]): any;

      toUI(...__args: never[]): any;

      undisplay(...__args: never[]): any;

      updateEditor(...__args: never[]): any;
    }

    /** @customConstructor EditVehicleUI_EditPart:new */
    export class EditVehicleUI_EditPart extends lua.client.DebugUIs.AttachmentEditorUI_EditPanel {
      [id: string]: any;
      static [id: string]: any;

      button3: any;

      button4: any;

      gizmo: any;

      list: any;

      list2: any;

      originalValue: any;

      selectedPart: any;

      transformMode: any;

      constructor(x: any, y: any, width: any, height: any);

      addAABB(extents: any, offset: any, r: any, g: any, b: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      doDrawItem(y: any, item: any, alt: any, ...__args: never[]): any;

      doDrawItem2(y: any, item: any, alt: any, ...__args: never[]): any;

      getSelectedModels(...__args: never[]): any;

      indexOfModel(model: any, ...__args: never[]): any;

      onToggleGizmo(...__args: never[]): any;

      onToggleGlobalLocal(...__args: never[]): any;

      prerenderEditor2(...__args: never[]): any;

      setSelectedPart(part: any, ...__args: never[]): any;
    }

    /** @customConstructor EditVehicleUI_EditPassenger:new */
    export class EditVehicleUI_EditPassenger extends lua.client.DebugUIs.AttachmentEditorUI_EditPanel {
      [id: string]: any;
      static [id: string]: any;

      list: any;

      list2: any;

      originalOffset: any;

      selectedPassenger: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren(...__args: never[]): any;

      doDrawItem(y: any, item: any, alt: any, ...__args: never[]): any;

      doDrawItem2(y: any, item: any, alt: any, ...__args: never[]): any;

      getSelectedPositionIds(...__args: never[]): any;

      getSelectedPositions(...__args: never[]): any;

      prerenderEditor2(...__args: never[]): any;

      setSelectedPassenger(pngr: any, ...__args: never[]): any;
    }

    /** @customConstructor EditVehicleUI_EditPhysics:new */
    export class EditVehicleUI_EditPhysics extends lua.client.DebugUIs.AttachmentEditorUI_EditPanel {
      [id: string]: any;
      static [id: string]: any;

      button1: any;

      button2: any;

      button3: any;

      button4: any;

      button5: any;

      editor: any;

      list: any;

      list2: any;

      originalValue: any;

      physicsMeshPanel: any;

      selectedShape: any;

      transformMode: any;

      constructor(x: any, y: any, width: any, height: any, editor: any);

      addAABB(extents: any, offset: any, r: any, g: any, b: any, ...__args: never[]): any;

      addPhysicsMesh(
        offset: any,
        rotate: any,
        scale: any,
        physicsShapeScript: any,
        r: any,
        g: any,
        b: any,
        ...__args: never[]
      ): any;

      addSphere(offset: any, radius: any, r: any, g: any, b: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      doDrawItem(y: any, item: any, alt: any, ...__args: never[]): any;

      doDrawItem2(y: any, item: any, alt: any, ...__args: never[]): any;

      getSelectedShapes(...__args: never[]): any;

      indexOfShape(shape: any, ...__args: never[]): any;

      onAddBox(...__args: never[]): any;

      onAddMesh(...__args: never[]): any;

      onAddSphere(...__args: never[]): any;

      onRemoveShape(...__args: never[]): any;

      onToggleGlobalLocal(...__args: never[]): any;

      prerenderEditor2(...__args: never[]): any;

      setSelectedShape(shape: any, ...__args: never[]): any;

      undisplay(...__args: never[]): any;
    }

    /** @customConstructor EditVehicleUI_EditWheel:new */
    export class EditVehicleUI_EditWheel extends lua.client.DebugUIs.AttachmentEditorUI_EditPanel {
      [id: string]: any;
      static [id: string]: any;

      list: any;

      originalOffset: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren(...__args: never[]): any;

      doDrawItem(y: any, item: any, alt: any, ...__args: never[]): any;

      getSelectedWheels(...__args: never[]): any;
    }

    /** @customConstructor EditVehicleUI_ListBox:new */
    export class EditVehicleUI_ListBox extends lua.client.ISUI.ISScrollingListBox {
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

    /** @customConstructor EditVehicleUI_Scene:new */
    export class EditVehicleUI_Scene extends lua.client.Vehicles.ISUI.ISUI3DScene {
      [id: string]: any;
      static [id: string]: any;

      gizmoAxis: any;

      gizmoClickScenePos: any;

      gizmoStartScenePos: any;

      constructor(x: any, y: any, width: any, height: any);

      onGizmoAccept(...__args: never[]): any;

      onGizmoCancel(...__args: never[]): any;

      onGizmoChanged(delta: any, ...__args: never[]): any;

      onGizmoStart(...__args: never[]): any;

      onRightMouseDown(x: any, y: any, ...__args: never[]): any;

      prerenderEditor(...__args: never[]): any;
    }

    /** @customConstructor EditVehicleUI_SwitchView:new */
    export class EditVehicleUI_SwitchView extends lua.client.Vehicles.ISUI.ISUI3DScene {
      [id: string]: any;
      static [id: string]: any;

      editor: any;

      constructor(editor: any, x: any, y: any, width: any, height: any);

      onMouseMoveOutside(dx: any, dy: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.EditVehicleState {
    /** @noSelf */
    export const EditVehicleState_InitUI: () => any;
  }
}
