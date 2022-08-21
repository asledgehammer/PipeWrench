/** @noSelfInFile */
/// <reference path="lua.reference.partial.d.ts" />

declare module '@asledgehammer/pipewrench' {
  // [PARTIAL:START]
  // [lua/client/Blacksmith/ISUI/ISBlacksmithMenu.d.ts]
  export abstract class ISBlacksmithMenu extends lua.client.Blacksmith.ISUI.ISBlacksmithMenu {}

  // [lua/client/Blacksmith/ISUI/ISFurnaceInfoWindow.d.ts]
  /** @customConstructor ISFurnaceInfoWindow:new */
  export class ISFurnaceInfoWindow extends lua.client.Blacksmith.ISUI.ISFurnaceInfoWindow {}

  // [lua/client/Blacksmith/TimedActions/ISAddCoalInFurnace.d.ts]
  /** @customConstructor ISAddCoalInFurnace:new */
  export class ISAddCoalInFurnace extends lua.client.Blacksmith.TimedActions.ISAddCoalInFurnace {}

  // [lua/client/Blacksmith/TimedActions/ISAddLogsInDrum.d.ts]
  /** @customConstructor ISAddLogsInDrum:new */
  export class ISAddLogsInDrum extends lua.client.Blacksmith.TimedActions.ISAddLogsInDrum {}

  // [lua/client/Blacksmith/TimedActions/ISDrumLightFromKindle.d.ts]
  /** @customConstructor ISDrumLightFromKindle:new */
  export class ISDrumLightFromKindle extends lua.client.Blacksmith.TimedActions.ISDrumLightFromKindle {}

  // [lua/client/Blacksmith/TimedActions/ISDrumLightFromLiterature.d.ts]
  /** @customConstructor ISDrumLightFromLiterature:new */
  export class ISDrumLightFromLiterature extends lua.client.Blacksmith.TimedActions.ISDrumLightFromLiterature {}

  // [lua/client/Blacksmith/TimedActions/ISDrumLightFromPetrol.d.ts]
  /** @customConstructor ISDrumLightFromPetrol:new */
  export class ISDrumLightFromPetrol extends lua.client.Blacksmith.TimedActions.ISDrumLightFromPetrol {}

  // [lua/client/Blacksmith/TimedActions/ISEmptyDrum.d.ts]
  /** @customConstructor ISEmptyDrum:new */
  export class ISEmptyDrum extends lua.client.Blacksmith.TimedActions.ISEmptyDrum {}

  // [lua/client/Blacksmith/TimedActions/ISFurnaceInfoAction.d.ts]
  /** @customConstructor ISFurnaceInfoAction:new */
  export class ISFurnaceInfoAction extends lua.client.Blacksmith.TimedActions.ISFurnaceInfoAction {}

  // [lua/client/Blacksmith/TimedActions/ISFurnaceLightFromKindle.d.ts]
  /** @customConstructor ISFurnaceLightFromKindle:new */
  export class ISFurnaceLightFromKindle extends lua.client.Blacksmith.TimedActions.ISFurnaceLightFromKindle {}

  // [lua/client/Blacksmith/TimedActions/ISFurnaceLightFromLiterature.d.ts]
  /** @customConstructor ISFurnaceLightFromLiterature:new */
  export class ISFurnaceLightFromLiterature extends lua.client.Blacksmith.TimedActions.ISFurnaceLightFromLiterature {}

  // [lua/client/Blacksmith/TimedActions/ISFurnaceLightFromPetrol.d.ts]
  /** @customConstructor ISFurnaceLightFromPetrol:new */
  export class ISFurnaceLightFromPetrol extends lua.client.Blacksmith.TimedActions.ISFurnaceLightFromPetrol {}

  // [lua/client/Blacksmith/TimedActions/ISPutOutFireDrum.d.ts]
  /** @customConstructor ISPutOutFireDrum:new */
  export class ISPutOutFireDrum extends lua.client.Blacksmith.TimedActions.ISPutOutFireDrum {}

  // [lua/client/Blacksmith/TimedActions/ISRemoveCharcoal.d.ts]
  /** @customConstructor ISRemoveCharcoal:new */
  export class ISRemoveCharcoal extends lua.client.Blacksmith.TimedActions.ISRemoveCharcoal {}

  // [lua/client/Blacksmith/TimedActions/ISRemoveDrum.d.ts]
  /** @customConstructor ISRemoveDrum:new */
  export class ISRemoveDrum extends lua.client.Blacksmith.TimedActions.ISRemoveDrum {}

  // [lua/client/Blacksmith/TimedActions/ISStopFurnaceFire.d.ts]
  /** @customConstructor ISStopFurnaceFire:new */
  export class ISStopFurnaceFire extends lua.client.Blacksmith.TimedActions.ISStopFurnaceFire {}

  // [lua/client/Blacksmith/TimedActions/ISUseBellows.d.ts]
  /** @customConstructor ISUseBellows:new */
  export class ISUseBellows extends lua.client.Blacksmith.TimedActions.ISUseBellows {}

  // [lua/client/BuildingObjects/ISUI/ISBuildMenu.d.ts]
  export abstract class ISBuildMenu extends lua.client.BuildingObjects.ISUI.ISBuildMenu {}

  // [lua/client/BuildingObjects/ISUI/ISInventoryBuildMenu.d.ts]
  export abstract class ISInventoryBuildMenu extends lua.client.BuildingObjects.ISUI.ISInventoryBuildMenu {}

  // [lua/client/BuildingObjects/ISUI/ISPaintMenu.d.ts]
  export abstract class ISPaintMenu extends lua.client.BuildingObjects.ISUI.ISPaintMenu {}

  // [lua/client/BuildingObjects/TimedActions/ISBuildAction.d.ts]
  /** @customConstructor ISBuildAction:new */
  export class ISBuildAction extends lua.client.BuildingObjects.TimedActions.ISBuildAction {}

  // [lua/client/BuildingObjects/TimedActions/ISInsertLightSourceFuelAction.d.ts]
  /** @customConstructor ISInsertLightSourceFuelAction:new */
  export class ISInsertLightSourceFuelAction extends lua.client.BuildingObjects.TimedActions
    .ISInsertLightSourceFuelAction {}

  // [lua/client/BuildingObjects/TimedActions/ISMultiStageBuild.d.ts]
  /** @customConstructor ISMultiStageBuild:new */
  export class ISMultiStageBuild extends lua.client.BuildingObjects.TimedActions.ISMultiStageBuild {}

  // [lua/client/BuildingObjects/TimedActions/ISPaintAction.d.ts]
  /** @customConstructor ISPaintAction:new */
  export class ISPaintAction extends lua.client.BuildingObjects.TimedActions.ISPaintAction {}

  // [lua/client/BuildingObjects/TimedActions/ISPaintSignAction.d.ts]
  /** @customConstructor ISPaintSignAction:new */
  export class ISPaintSignAction extends lua.client.BuildingObjects.TimedActions.ISPaintSignAction {}

  // [lua/client/BuildingObjects/TimedActions/ISPlasterAction.d.ts]
  /** @customConstructor ISPlasterAction:new */
  export class ISPlasterAction extends lua.client.BuildingObjects.TimedActions.ISPlasterAction {}

  // [lua/client/BuildingObjects/TimedActions/ISRemoveLightSourceFuelAction.d.ts]
  /** @customConstructor ISRemoveLightSourceFuelAction:new */
  export class ISRemoveLightSourceFuelAction extends lua.client.BuildingObjects.TimedActions
    .ISRemoveLightSourceFuelAction {}

  // [lua/client/BuildingObjects/TimedActions/ISShovelGround.d.ts]
  /** @customConstructor ISShovelGround:new */
  export class ISShovelGround extends lua.client.BuildingObjects.TimedActions.ISShovelGround {}

  // [lua/client/BuildingObjects/TimedActions/ISToggleLightSourceAction.d.ts]
  /** @customConstructor ISToggleLightSourceAction:new */
  export class ISToggleLightSourceAction extends lua.client.BuildingObjects.TimedActions.ISToggleLightSourceAction {}

  // [lua/client/Camping/CCampfireGlobalObject.d.ts]
  /** @customConstructor CCampfireGlobalObject:new */
  export class CCampfireGlobalObject extends lua.client.Camping.CCampfireGlobalObject {}

  // [lua/client/Camping/CCampfireSystem.d.ts]
  /** @customConstructor CCampfireSystem:new */
  export class CCampfireSystem extends lua.client.Camping.CCampfireSystem {}

  // [lua/client/Camping/ISUI/ISCampingInfoWindow.d.ts]
  /** @customConstructor ISCampingInfoWindow:new */
  export class ISCampingInfoWindow extends lua.client.Camping.ISUI.ISCampingInfoWindow {}

  // [lua/client/Camping/ISUI/ISCampingMenu.d.ts]
  export abstract class ISCampingMenu extends lua.client.Camping.ISUI.ISCampingMenu {}

  // [lua/client/Camping/TimedActions/ISAddFuelAction.d.ts]
  /** @customConstructor ISAddFuelAction:new */
  export class ISAddFuelAction extends lua.client.Camping.TimedActions.ISAddFuelAction {}

  // [lua/client/Camping/TimedActions/ISAddTentAction.d.ts]
  /** @customConstructor ISAddTentAction:new */
  export class ISAddTentAction extends lua.client.Camping.TimedActions.ISAddTentAction {}

  // [lua/client/Camping/TimedActions/ISLightFromKindle.d.ts]
  /** @customConstructor ISLightFromKindle:new */
  export class ISLightFromKindle extends lua.client.Camping.TimedActions.ISLightFromKindle {}

  // [lua/client/Camping/TimedActions/ISLightFromLiterature.d.ts]
  /** @customConstructor ISLightFromLiterature:new */
  export class ISLightFromLiterature extends lua.client.Camping.TimedActions.ISLightFromLiterature {}

  // [lua/client/Camping/TimedActions/ISLightFromPetrol.d.ts]
  /** @customConstructor ISLightFromPetrol:new */
  export class ISLightFromPetrol extends lua.client.Camping.TimedActions.ISLightFromPetrol {}

  // [lua/client/Camping/TimedActions/ISPlaceCampfireAction.d.ts]
  /** @customConstructor ISPlaceCampfireAction:new */
  export class ISPlaceCampfireAction extends lua.client.Camping.TimedActions.ISPlaceCampfireAction {}

  // [lua/client/Camping/TimedActions/ISPutOutCampfireAction.d.ts]
  /** @customConstructor ISPutOutCampfireAction:new */
  export class ISPutOutCampfireAction extends lua.client.Camping.TimedActions.ISPutOutCampfireAction {}

  // [lua/client/Camping/TimedActions/ISRemoveCampfireAction.d.ts]
  /** @customConstructor ISRemoveCampfireAction:new */
  export class ISRemoveCampfireAction extends lua.client.Camping.TimedActions.ISRemoveCampfireAction {}

  // [lua/client/Camping/TimedActions/ISRemoveTentAction.d.ts]
  /** @customConstructor ISRemoveTentAction:new */
  export class ISRemoveTentAction extends lua.client.Camping.TimedActions.ISRemoveTentAction {}

  // [lua/client/Camping/TimedActions/ISSleepInTentAction.d.ts]
  /** @customConstructor ISSleepInTentAction:new */
  export class ISSleepInTentAction extends lua.client.Camping.TimedActions.ISSleepInTentAction {}

  // [lua/client/Chat/ISChat.d.ts]
  /** @customConstructor ISChat:new */
  export class ISChat extends lua.client.Chat.ISChat {}

  // [lua/client/Context/ISContextManager.d.ts]
  export abstract class ISContextManager extends lua.client.Context.ISContextManager {}

  // [lua/client/Context/ISMenuContext.d.ts]
  export abstract class ISMenuContext extends lua.client.Context.ISMenuContext {}

  // [lua/client/Context/ISMenuContextBuild.d.ts]
  export abstract class ISMenuContextBuild extends lua.client.Context.ISMenuContextBuild {}

  // [lua/client/Context/ISMenuContextInventory.d.ts]
  export abstract class ISMenuContextInventory extends lua.client.Context.ISMenuContextInventory {}

  // [lua/client/Context/ISMenuContextWorld.d.ts]
  export abstract class ISMenuContextWorld extends lua.client.Context.ISMenuContextWorld {}

  // [lua/client/Context/ISMenuElement.d.ts]
  export abstract class ISMenuElement extends lua.client.Context.ISMenuElement {}

  // [lua/client/Context/World/TestMarkers.d.ts]
  export abstract class TestMarkers extends lua.client.Context.World.TestMarkers {}

  // [lua/client/DebugUIs/AdminContextMenu.d.ts]
  export abstract class AdminContextMenu extends lua.client.DebugUIs.AdminContextMenu {}

  // [lua/client/DebugUIs/AnimationClipViewer.d.ts]
  /** @customConstructor AnimationClipViewer:new */
  export class AnimationClipViewer extends lua.client.DebugUIs.AnimationClipViewer {}
  /** @customConstructor AnimationClipViewer_ListBox:new */
  export class AnimationClipViewer_ListBox extends lua.client.DebugUIs.AnimationClipViewer_ListBox {}
  /** @customConstructor AnimationClipViewer_OptionsPanel:new */
  export class AnimationClipViewer_OptionsPanel extends lua.client.DebugUIs.AnimationClipViewer_OptionsPanel {}
  /** @customConstructor AnimationClipViewer_Scene:new */
  export class AnimationClipViewer_Scene extends lua.client.DebugUIs.AnimationClipViewer_Scene {}
  /** @customConstructor AnimationClipViewer_Timeline:new */
  export class AnimationClipViewer_Timeline extends lua.client.DebugUIs.AnimationClipViewer_Timeline {}
  /** @noSelf */
  export const AnimationViewerState_InitUI: () => any;

  // [lua/client/DebugUIs/AttachmentEditorUI.d.ts]
  /** @customConstructor AttachmentEditorUI:new */
  export class AttachmentEditorUI extends lua.client.DebugUIs.AttachmentEditorUI {}
  /** @customConstructor AttachmentEditorUI_EditAttachment:new */
  export class AttachmentEditorUI_EditAttachment extends lua.client.DebugUIs.AttachmentEditorUI_EditAttachment {}
  /** @customConstructor AttachmentEditorUI_EditPanel:new */
  export class AttachmentEditorUI_EditPanel extends lua.client.DebugUIs.AttachmentEditorUI_EditPanel {}
  /** @customConstructor AttachmentEditorUI_ListBox:new */
  export class AttachmentEditorUI_ListBox extends lua.client.DebugUIs.AttachmentEditorUI_ListBox {}
  /** @customConstructor AttachmentEditorUI_Scene:new */
  export class AttachmentEditorUI_Scene extends lua.client.DebugUIs.AttachmentEditorUI_Scene {}
  /** @customConstructor AttachmentEditorUI_SwitchView:new */
  export class AttachmentEditorUI_SwitchView extends lua.client.DebugUIs.AttachmentEditorUI_SwitchView {}
  /** @customConstructor AttachmentEditorUI_WorldAttachmentPanel:new */
  export class AttachmentEditorUI_WorldAttachmentPanel extends lua.client.DebugUIs
    .AttachmentEditorUI_WorldAttachmentPanel {}
  /** @noSelf */
  export const AttachmentEditorState_InitUI: () => any;

  // [lua/client/DebugUIs/BrushTool/BrushToolChooseTileUI.d.ts]
  /** @customConstructor BrushToolChooseTileUI:new */
  export class BrushToolChooseTileUI extends lua.client.DebugUIs.BrushTool.BrushToolChooseTileUI {}
  /** @customConstructor BrushToolTilePickerList:new */
  export class BrushToolTilePickerList extends lua.client.DebugUIs.BrushTool.BrushToolTilePickerList {}

  // [lua/client/DebugUIs/BrushTool/BrushToolManager.d.ts]
  /** @customConstructor BrushToolManager:new */
  export class BrushToolManager extends lua.client.DebugUIs.BrushTool.BrushToolManager {}

  // [lua/client/DebugUIs/BrushTool/FireBrushUI.d.ts]
  /** @customConstructor FireBrushUI:new */
  export class FireBrushUI extends lua.client.DebugUIs.BrushTool.FireBrushUI {}

  // [lua/client/DebugUIs/DebugChunkState/DebugChunkState_ObjectPickerPanel.d.ts]
  /** @customConstructor DebugChunkState_ObjectPickerPanel:new */
  export class DebugChunkState_ObjectPickerPanel extends lua.client.DebugUIs.DebugChunkState
    .DebugChunkState_ObjectPickerPanel {}

  // [lua/client/DebugUIs/DebugChunkState/DebugChunkState_ObjectProperties.d.ts]
  /** @customConstructor DebugChunkStateUI_ObjPropsHandler:new */
  export class DebugChunkStateUI_ObjPropsHandler extends lua.client.DebugUIs.DebugChunkState
    .DebugChunkStateUI_ObjPropsHandler {}
  /** @customConstructor DebugChunkStateUI_ObjPropsPanel:new */
  export class DebugChunkStateUI_ObjPropsPanel extends lua.client.DebugUIs.DebugChunkState
    .DebugChunkStateUI_ObjPropsPanel {}

  // [lua/client/DebugUIs/DebugChunkState/DebugChunkState_SquarePanel.d.ts]
  /** @customConstructor DebugChunkStateUI_SquarePanel:new */
  export class DebugChunkStateUI_SquarePanel extends lua.client.DebugUIs.DebugChunkState
    .DebugChunkStateUI_SquarePanel {}
  /** @customConstructor DebugChunkStateUI_SquarePropsHandler:new */
  export class DebugChunkStateUI_SquarePropsHandler extends lua.client.DebugUIs.DebugChunkState
    .DebugChunkStateUI_SquarePropsHandler {}

  // [lua/client/DebugUIs/DebugChunkState/DebugChunkState_Tools.d.ts]
  /** @customConstructor DebugChunkStateUI_DragCameraTool:new */
  export class DebugChunkStateUI_DragCameraTool extends lua.client.DebugUIs.DebugChunkState
    .DebugChunkStateUI_DragCameraTool {}
  /** @customConstructor DebugChunkStateUI_Tool:new */
  export class DebugChunkStateUI_Tool extends lua.client.DebugUIs.DebugChunkState.DebugChunkStateUI_Tool {}

  // [lua/client/DebugUIs/DebugChunkState/DebugChunkState_VehicleStoryPanel.d.ts]
  /** @customConstructor DebugChunkState_VehicleStoryPanel:new */
  export class DebugChunkState_VehicleStoryPanel extends lua.client.DebugUIs.DebugChunkState
    .DebugChunkState_VehicleStoryPanel {}

  // [lua/client/DebugUIs/DebugChunkState/DebugChunkStateUI.d.ts]
  /** @customConstructor DebugChunkStateUI:new */
  export class DebugChunkStateUI extends lua.client.DebugUIs.DebugChunkState.DebugChunkStateUI {}
  /** @customConstructor DebugChunkStateUI_OptionsPanel:new */
  export class DebugChunkStateUI_OptionsPanel extends lua.client.DebugUIs.DebugChunkState
    .DebugChunkStateUI_OptionsPanel {}

  // [lua/client/DebugUIs/DebugChunkState/ISSectionedPanel.d.ts]
  /** @customConstructor ISSectionedPanel:new */
  export class ISSectionedPanel extends lua.client.DebugUIs.DebugChunkState.ISSectionedPanel {}
  /** @customConstructor ISSectionedPanel_Section:new */
  export class ISSectionedPanel_Section extends lua.client.DebugUIs.DebugChunkState.ISSectionedPanel_Section {}

  // [lua/client/DebugUIs/DebugContextMenu.d.ts]
  export abstract class DebugContextMenu extends lua.client.DebugUIs.DebugContextMenu {}

  // [lua/client/DebugUIs/DebugErrorsWindow.d.ts]
  /** @customConstructor DebugErrorsWindow:new */
  export class DebugErrorsWindow extends lua.client.DebugUIs.DebugErrorsWindow {}

  // [lua/client/DebugUIs/DebuggerContextMenu.d.ts]
  /** @customConstructor DebuggerContextMenu:new */
  export class DebuggerContextMenu extends lua.client.DebugUIs.DebuggerContextMenu {}
  /** @noSelf */
  export const getDebuggerContextMenu: () => any;

  // [lua/client/DebugUIs/DebugGlobalObjectState/DebugGlobalObjectState_PropertiesPanel.d.ts]
  /** @customConstructor DebugGlobalObjectState_BasePropertiesPanel:new */
  export class DebugGlobalObjectState_BasePropertiesPanel extends lua.client.DebugUIs.DebugGlobalObjectState
    .DebugGlobalObjectState_BasePropertiesPanel {}
  /** @customConstructor DebugGlobalObjectState_GlobalObjectPanel:new */
  export class DebugGlobalObjectState_GlobalObjectPanel extends lua.client.DebugUIs.DebugGlobalObjectState
    .DebugGlobalObjectState_GlobalObjectPanel {}
  /** @customConstructor DebugGlobalObjectState_IsoObjectPanel:new */
  export class DebugGlobalObjectState_IsoObjectPanel extends lua.client.DebugUIs.DebugGlobalObjectState
    .DebugGlobalObjectState_IsoObjectPanel {}
  /** @customConstructor DebugGlobalObjectState_PropertiesPanel:new */
  export class DebugGlobalObjectState_PropertiesPanel extends lua.client.DebugUIs.DebugGlobalObjectState
    .DebugGlobalObjectState_PropertiesPanel {}
  /** @customConstructor DebugGlobalObjectState_SystemPanel:new */
  export class DebugGlobalObjectState_SystemPanel extends lua.client.DebugUIs.DebugGlobalObjectState
    .DebugGlobalObjectState_SystemPanel {}

  // [lua/client/DebugUIs/DebugGlobalObjectState/DebugGlobalObjectState_Tools.d.ts]
  /** @customConstructor DebugGlobalObjectStateUI_DragCameraTool:new */
  export class DebugGlobalObjectStateUI_DragCameraTool extends lua.client.DebugUIs.DebugGlobalObjectState
    .DebugGlobalObjectStateUI_DragCameraTool {}
  /** @customConstructor DebugGlobalObjectStateUI_Tool:new */
  export class DebugGlobalObjectStateUI_Tool extends lua.client.DebugUIs.DebugGlobalObjectState
    .DebugGlobalObjectStateUI_Tool {}

  // [lua/client/DebugUIs/DebugGlobalObjectState/DebugGlobalObjectStateUI.d.ts]
  /** @customConstructor DebugGlobalObjectStateUI:new */
  export class DebugGlobalObjectStateUI extends lua.client.DebugUIs.DebugGlobalObjectState.DebugGlobalObjectStateUI {}

  // [lua/client/DebugUIs/DebugLogSettings.d.ts]
  /** @customConstructor DebugLogSettings:new */
  export class DebugLogSettings extends lua.client.DebugUIs.DebugLogSettings {}

  // [lua/client/DebugUIs/DebugMenu/Anims/FloatArrayPlotter.d.ts]
  /** @customConstructor FloatArrayPlotter:new */
  export class FloatArrayPlotter extends lua.client.DebugUIs.DebugMenu.Anims.FloatArrayPlotter {}

  // [lua/client/DebugUIs/DebugMenu/Anims/ISAnimDebugMonitor.d.ts]
  /** @customConstructor ISAnimDebugMonitor:new */
  export class ISAnimDebugMonitor extends lua.client.DebugUIs.DebugMenu.Anims.ISAnimDebugMonitor {}

  // [lua/client/DebugUIs/DebugMenu/Anims/ISAnimLoggerOutput.d.ts]
  /** @customConstructor ISAnimLoggerOutput:new */
  export class ISAnimLoggerOutput extends lua.client.DebugUIs.DebugMenu.Anims.ISAnimLoggerOutput {}

  // [lua/client/DebugUIs/DebugMenu/Base/ISDebugPanelBase.d.ts]
  /** @customConstructor ISDebugPanelBase:new */
  export class ISDebugPanelBase extends lua.client.DebugUIs.DebugMenu.Base.ISDebugPanelBase {}

  // [lua/client/DebugUIs/DebugMenu/Base/ISDebugSubPanelBase.d.ts]
  /** @customConstructor ISDebugSubPanelBase:new */
  export class ISDebugSubPanelBase extends lua.client.DebugUIs.DebugMenu.Base.ISDebugSubPanelBase {}

  // [lua/client/DebugUIs/DebugMenu/Climate/ClimateColorsDebug.d.ts]
  /** @customConstructor ClimateColorsDebug:new */
  export class ClimateColorsDebug extends lua.client.DebugUIs.DebugMenu.Climate.ClimateColorsDebug {}

  // [lua/client/DebugUIs/DebugMenu/Climate/ClimateControlDebug.d.ts]
  /** @customConstructor ClimateControlDebug:new */
  export class ClimateControlDebug extends lua.client.DebugUIs.DebugMenu.Climate.ClimateControlDebug {}

  // [lua/client/DebugUIs/DebugMenu/Climate/ClimateDebug.d.ts]
  /** @customConstructor ClimateDebug:new */
  export class ClimateDebug extends lua.client.DebugUIs.DebugMenu.Climate.ClimateDebug {}

  // [lua/client/DebugUIs/DebugMenu/Climate/ClimateOptionsDebug.d.ts]
  /** @customConstructor ClimateOptionsDebug:new */
  export class ClimateOptionsDebug extends lua.client.DebugUIs.DebugMenu.Climate.ClimateOptionsDebug {}

  // [lua/client/DebugUIs/DebugMenu/Climate/ClimDebuggersPanel.d.ts]
  /** @customConstructor ClimDebuggersPanel:new */
  export class ClimDebuggersPanel extends lua.client.DebugUIs.DebugMenu.Climate.ClimDebuggersPanel {}

  // [lua/client/DebugUIs/DebugMenu/Climate/DailyValuesDebug.d.ts]
  /** @customConstructor DailyValuesDebug:new */
  export class DailyValuesDebug extends lua.client.DebugUIs.DebugMenu.Climate.DailyValuesDebug {}

  // [lua/client/DebugUIs/DebugMenu/Climate/ForecasterDebug.d.ts]
  /** @customConstructor ForecasterDebug:new */
  export class ForecasterDebug extends lua.client.DebugUIs.DebugMenu.Climate.ForecasterDebug {}

  // [lua/client/DebugUIs/DebugMenu/Climate/NewFogDebug.d.ts]
  /** @customConstructor NewFogDebug:new */
  export class NewFogDebug extends lua.client.DebugUIs.DebugMenu.Climate.NewFogDebug {}

  // [lua/client/DebugUIs/DebugMenu/Climate/PlayerClimateDebug.d.ts]
  /** @customConstructor PlayerClimateDebug:new */
  export class PlayerClimateDebug extends lua.client.DebugUIs.DebugMenu.Climate.PlayerClimateDebug {}

  // [lua/client/DebugUIs/DebugMenu/Climate/PopupColorEdit.d.ts]
  /** @customConstructor PopupColorEdit:new */
  export class PopupColorEdit extends lua.client.DebugUIs.DebugMenu.Climate.PopupColorEdit {}

  // [lua/client/DebugUIs/DebugMenu/Climate/ThermoDebug.d.ts]
  /** @customConstructor ThermoDebug:new */
  export class ThermoDebug extends lua.client.DebugUIs.DebugMenu.Climate.ThermoDebug {}
  export abstract class ThermoDebug extends lua.client.DebugUIs.DebugMenu.Climate.ThermoDebug {}

  // [lua/client/DebugUIs/DebugMenu/Climate/ThunderDebug.d.ts]
  /** @customConstructor ThunderDebug:new */
  export class ThunderDebug extends lua.client.DebugUIs.DebugMenu.Climate.ThunderDebug {}

  // [lua/client/DebugUIs/DebugMenu/Climate/ValuePlotter.d.ts]
  /** @customConstructor ValuePlotter:new */
  export class ValuePlotter extends lua.client.DebugUIs.DebugMenu.Climate.ValuePlotter {}

  // [lua/client/DebugUIs/DebugMenu/Climate/WeatherFXDebug.d.ts]
  /** @customConstructor WeatherFXDebug:new */
  export class WeatherFXDebug extends lua.client.DebugUIs.DebugMenu.Climate.WeatherFXDebug {}

  // [lua/client/DebugUIs/DebugMenu/Climate/WeatherPeriodDebug.d.ts]
  /** @customConstructor WeatherPeriodDebug:new */
  export class WeatherPeriodDebug extends lua.client.DebugUIs.DebugMenu.Climate.WeatherPeriodDebug {}

  // [lua/client/DebugUIs/DebugMenu/Climate/WindDebug.d.ts]
  /** @customConstructor WindDebug:new */
  export class WindDebug extends lua.client.DebugUIs.DebugMenu.Climate.WindDebug {}

  // [lua/client/DebugUIs/DebugMenu/General/ISCheatPanelUI.d.ts]
  /** @customConstructor ISCheatPanelUI:new */
  export class ISCheatPanelUI extends lua.client.DebugUIs.DebugMenu.General.ISCheatPanelUI {}

  // [lua/client/DebugUIs/DebugMenu/General/ISDebugBlood.d.ts]
  /** @customConstructor ISDebugBlood:new */
  export class ISDebugBlood extends lua.client.DebugUIs.DebugMenu.General.ISDebugBlood {}

  // [lua/client/DebugUIs/DebugMenu/General/ISGameDebugPanel.d.ts]
  /** @customConstructor ISGameDebugPanel:new */
  export class ISGameDebugPanel extends lua.client.DebugUIs.DebugMenu.General.ISGameDebugPanel {}

  // [lua/client/DebugUIs/DebugMenu/General/ISGeneralCheats.d.ts]
  /** @customConstructor ISGeneralCheats:new */
  export class ISGeneralCheats extends lua.client.DebugUIs.DebugMenu.General.ISGeneralCheats {}

  // [lua/client/DebugUIs/DebugMenu/General/ISGeneralDebug.d.ts]
  /** @customConstructor ISGeneralDebug:new */
  export class ISGeneralDebug extends lua.client.DebugUIs.DebugMenu.General.ISGeneralDebug {}

  // [lua/client/DebugUIs/DebugMenu/General/ISSearchMode.d.ts]
  /** @customConstructor ISSearchMode:new */
  export class ISSearchMode extends lua.client.DebugUIs.DebugMenu.General.ISSearchMode {}

  // [lua/client/DebugUIs/DebugMenu/General/ISStatsAndBody.d.ts]
  /** @customConstructor ISStatsAndBody:new */
  export class ISStatsAndBody extends lua.client.DebugUIs.DebugMenu.General.ISStatsAndBody {}

  // [lua/client/DebugUIs/DebugMenu/GlobalModData/GlobalModData.d.ts]
  /** @customConstructor GlobalModDataDebug:new */
  export class GlobalModDataDebug extends lua.client.DebugUIs.DebugMenu.GlobalModData.GlobalModDataDebug {}

  // [lua/client/DebugUIs/DebugMenu/GlobalModData/GlobalModDataTest.d.ts]

  // [lua/client/DebugUIs/DebugMenu/ISDebugMenu.d.ts]
  /** @customConstructor ISDebugMenu:new */
  export class ISDebugMenu extends lua.client.DebugUIs.DebugMenu.ISDebugMenu {}

  // [lua/client/DebugUIs/DebugMenu/ISDebugUtils.d.ts]
  export abstract class ISDebugUtils extends lua.client.DebugUIs.DebugMenu.ISDebugUtils {}

  // [lua/client/DebugUIs/DebugMenu/IsoRegions/IsoRegionDebug.d.ts]
  /** @customConstructor IsoRegionDebug:new */
  export class IsoRegionDebug extends lua.client.DebugUIs.DebugMenu.IsoRegions.IsoRegionDebug {}

  // [lua/client/DebugUIs/DebugMenu/IsoRegions/IsoRegionDetails.d.ts]
  /** @customConstructor IsoRegionDetails:new */
  export class IsoRegionDetails extends lua.client.DebugUIs.DebugMenu.IsoRegions.IsoRegionDetails {}

  // [lua/client/DebugUIs/DebugMenu/IsoRegions/IsoRegionLogWindow.d.ts]
  /** @customConstructor IsoRegionLogWindow:new */
  export class IsoRegionLogWindow extends lua.client.DebugUIs.DebugMenu.IsoRegions.IsoRegionLogWindow {}

  // [lua/client/DebugUIs/DebugMenu/IsoRegions/IsoRegionsWindow.d.ts]
  /** @customConstructor IsoRegionsWindow:new */
  export class IsoRegionsWindow extends lua.client.DebugUIs.DebugMenu.IsoRegions.IsoRegionsWindow {}
  /** @noSelf */
  export const newIsoRegionsWindow: () => any;

  // [lua/client/DebugUIs/DebugMenu/Puddles/PuddlesControl.d.ts]
  /** @customConstructor PuddlesControl:new */
  export class PuddlesControl extends lua.client.DebugUIs.DebugMenu.Puddles.PuddlesControl {}

  // [lua/client/DebugUIs/DebugMenu/Puddles/PuddlesPeriodDebug.d.ts]
  /** @customConstructor PuddlesPeriodDebug:new */
  export class PuddlesPeriodDebug extends lua.client.DebugUIs.DebugMenu.Puddles.PuddlesPeriodDebug {}

  // [lua/client/DebugUIs/DebugMenu/radio/RadioScriptDebugger.d.ts]
  /** @customConstructor RadioScriptDebugger:new */
  export class RadioScriptDebugger extends lua.client.DebugUIs.DebugMenu.radio.RadioScriptDebugger {}

  // [lua/client/DebugUIs/DebugMenu/radio/ZomboidRadioDebug.d.ts]
  /** @customConstructor ZomboidRadioDebug:new */
  export class ZomboidRadioDebug extends lua.client.DebugUIs.DebugMenu.radio.ZomboidRadioDebug {}

  // [lua/client/DebugUIs/DebugMenu/Statistic/ISGameStatisticPanel.d.ts]
  /** @customConstructor ISGameStatisticPanel:new */
  export class ISGameStatisticPanel extends lua.client.DebugUIs.DebugMenu.Statistic.ISGameStatisticPanel {}

  // [lua/client/DebugUIs/DebugMenu/Statistic/StatisticChart.d.ts]
  /** @customConstructor StatisticChart:new */
  export class StatisticChart extends lua.client.DebugUIs.DebugMenu.Statistic.StatisticChart {}

  // [lua/client/DebugUIs/DebugMenu/Statistic/StatisticChartDiskOperations.d.ts]
  /** @customConstructor StatisticChartDiskOperations:new */
  export class StatisticChartDiskOperations extends lua.client.DebugUIs.DebugMenu.Statistic
    .StatisticChartDiskOperations {}

  // [lua/client/DebugUIs/DebugMenu/Statistic/StatisticChartMemory.d.ts]
  /** @customConstructor StatisticChartMemory:new */
  export class StatisticChartMemory extends lua.client.DebugUIs.DebugMenu.Statistic.StatisticChartMemory {}

  // [lua/client/DebugUIs/DebugMenu/Statistic/StatisticChartPackets.d.ts]
  /** @customConstructor StatisticChartPackets:new */
  export class StatisticChartPackets extends lua.client.DebugUIs.DebugMenu.Statistic.StatisticChartPackets {}

  // [lua/client/DebugUIs/DebugMenu/Statistic/StatisticChartUpdatePeriod.d.ts]
  /** @customConstructor StatisticChartUpdatePeriod:new */
  export class StatisticChartUpdatePeriod extends lua.client.DebugUIs.DebugMenu.Statistic.StatisticChartUpdatePeriod {}

  // [lua/client/DebugUIs/DebugMenu/WorldFlares/WorldFlaresDebug.d.ts]
  /** @customConstructor WorldFlaresDebug:new */
  export class WorldFlaresDebug extends lua.client.DebugUIs.DebugMenu.WorldFlares.WorldFlaresDebug {}

  // [lua/client/DebugUIs/DebugOptionsWindow.d.ts]
  /** @customConstructor DebugOptionsWindow:new */
  export class DebugOptionsWindow extends lua.client.DebugUIs.DebugOptionsWindow {}

  // [lua/client/DebugUIs/DebugScenarios.d.ts]
  /** @customConstructor DebugScenarios:new */
  export class DebugScenarios extends lua.client.DebugUIs.DebugScenarios {}
  /** @noSelf */
  export const doDebugScenarios: () => any;

  // [lua/client/DebugUIs/DebugToolstrip.d.ts]
  /** @customConstructor DebugToolstrip:new */
  export class DebugToolstrip extends lua.client.DebugUIs.DebugToolstrip {}

  // [lua/client/DebugUIs/DeviceInspector.d.ts]
  /** @customConstructor DeviceInspector:new */
  export class DeviceInspector extends lua.client.DebugUIs.DeviceInspector {}

  // [lua/client/DebugUIs/ISAttachedItemsUI.d.ts]
  /** @customConstructor ISAttachedItemsUI:new */
  export class ISAttachedItemsUI extends lua.client.DebugUIs.ISAttachedItemsUI {}

  // [lua/client/DebugUIs/ISExtAnimListDebugUI.d.ts]
  /** @customConstructor ISExtAnimListDebugUI:new */
  export class ISExtAnimListDebugUI extends lua.client.DebugUIs.ISExtAnimListDebugUI {}

  // [lua/client/DebugUIs/ISFastTeleportMove.d.ts]
  export abstract class ISFastTeleportMove extends lua.client.DebugUIs.ISFastTeleportMove {}

  // [lua/client/DebugUIs/ISLootStressTestUI.d.ts]
  /** @customConstructor ISLootStreetTestUI:new */
  export class ISLootStreetTestUI extends lua.client.DebugUIs.ISLootStreetTestUI {}

  // [lua/client/DebugUIs/ISRemoveItemTool.d.ts]
  /** @customConstructor ISRemoveItemTool:new */
  export class ISRemoveItemTool extends lua.client.DebugUIs.ISRemoveItemTool {}

  // [lua/client/DebugUIs/ISRunningDebugUI.d.ts]
  /** @customConstructor ISRunningDebugUI:new */
  export class ISRunningDebugUI extends lua.client.DebugUIs.ISRunningDebugUI {}

  // [lua/client/DebugUIs/ISSpawnHordeUI.d.ts]
  /** @customConstructor ISSpawnHordeUI:new */
  export class ISSpawnHordeUI extends lua.client.DebugUIs.ISSpawnHordeUI {}

  // [lua/client/DebugUIs/ISSpawnPointsEditor.d.ts]
  /** @customConstructor ISSpawnPointsEditor:new */
  export class ISSpawnPointsEditor extends lua.client.DebugUIs.ISSpawnPointsEditor {}

  // [lua/client/DebugUIs/ISSpawnVehicleUI.d.ts]
  /** @customConstructor ISSpawnVehicleUI:new */
  export class ISSpawnVehicleUI extends lua.client.DebugUIs.ISSpawnVehicleUI {}

  // [lua/client/DebugUIs/ISTeleportDebugUI.d.ts]
  /** @customConstructor ISTeleportDebugUI:new */
  export class ISTeleportDebugUI extends lua.client.DebugUIs.ISTeleportDebugUI {}

  // [lua/client/DebugUIs/ISTilesPickerDebugUI.d.ts]
  /** @customConstructor ISTilesPickerDebugUI:new */
  export class ISTilesPickerDebugUI extends lua.client.DebugUIs.ISTilesPickerDebugUI {}
  /** @customConstructor ISTilesPickerTilesList:new */
  export class ISTilesPickerTilesList extends lua.client.DebugUIs.ISTilesPickerTilesList {}

  // [lua/client/DebugUIs/ISTriggerThunderUI.d.ts]
  /** @customConstructor ISTriggerThunderUI:new */
  export class ISTriggerThunderUI extends lua.client.DebugUIs.ISTriggerThunderUI {}

  // [lua/client/DebugUIs/LuaDebugger.d.ts]
  /** @customConstructor LuaDebugger:new */
  export class LuaDebugger extends lua.client.DebugUIs.LuaDebugger {}

  // [lua/client/DebugUIs/LuaDebugOutput.d.ts]
  /** @customConstructor LuaDebugOutput:new */
  export class LuaDebugOutput extends lua.client.DebugUIs.LuaDebugOutput {}

  // [lua/client/DebugUIs/LuaFileBrowser.d.ts]
  /** @customConstructor LuaFileBrowser:new */
  export class LuaFileBrowser extends lua.client.DebugUIs.LuaFileBrowser {}
  /** @customConstructor LuaFileBrowserList:new */
  export class LuaFileBrowserList extends lua.client.DebugUIs.LuaFileBrowserList {}

  // [lua/client/DebugUIs/LuaThreadWindow.d.ts]
  /** @customConstructor LuaThreadWindow:new */
  export class LuaThreadWindow extends lua.client.DebugUIs.LuaThreadWindow {}

  // [lua/client/DebugUIs/MPDebugger.d.ts]
  /** @customConstructor MPDebugger:new */
  export class MPDebugger extends lua.client.DebugUIs.MPDebugger {}

  // [lua/client/DebugUIs/ObjectViewer.d.ts]
  /** @customConstructor ObjectViewer:new */
  export class ObjectViewer extends lua.client.DebugUIs.ObjectViewer {}

  // [lua/client/DebugUIs/SourceWindow.d.ts]
  /** @customConstructor SourceWindow:new */
  export class SourceWindow extends lua.client.DebugUIs.SourceWindow {}

  // [lua/client/DebugUIs/StashDebug.d.ts]
  /** @customConstructor StashDebug:new */
  export class StashDebug extends lua.client.DebugUIs.StashDebug {}

  // [lua/client/DebugUIs/StreamMapWindow.d.ts]
  /** @customConstructor StreamMapWindow:new */
  export class StreamMapWindow extends lua.client.DebugUIs.StreamMapWindow {}

  // [lua/client/DebugUIs/TextureViewer.d.ts]
  /** @customConstructor TextureWindow:new */
  export class TextureWindow extends lua.client.DebugUIs.TextureWindow {}

  // [lua/client/DebugUIs/WatchWindow.d.ts]
  /** @customConstructor WatchWindow:new */
  export class WatchWindow extends lua.client.DebugUIs.WatchWindow {}

  // [lua/client/erosion/debug/DebugDemoTime.d.ts]

  // [lua/client/erosion/debug/Point2D.d.ts]
  export abstract class Point2D extends lua.client.erosion.debug.Point2D {}

  // [lua/client/Farming/CFarmingSystem.d.ts]
  /** @customConstructor CFarmingSystem:new */
  export class CFarmingSystem extends lua.client.Farming.CFarmingSystem {}

  // [lua/client/Farming/CPlantGlobalObject.d.ts]
  /** @customConstructor CPlantGlobalObject:new */
  export class CPlantGlobalObject extends lua.client.Farming.CPlantGlobalObject {}

  // [lua/client/Farming/ISUI/ISFarmingInfo.d.ts]
  /** @customConstructor ISFarmingInfo:new */
  export class ISFarmingInfo extends lua.client.Farming.ISUI.ISFarmingInfo {}
  export abstract class disease extends lua.client.Farming.ISUI.disease {}
  export abstract class disease_rgb extends lua.client.Farming.ISUI.disease_rgb {}
  export abstract class fertilizer_rgb extends lua.client.Farming.ISUI.fertilizer_rgb {}
  export abstract class health_rgb extends lua.client.Farming.ISUI.health_rgb {}
  export abstract class nowateredsince_rgb extends lua.client.Farming.ISUI.nowateredsince_rgb {}
  export abstract class title_rgb extends lua.client.Farming.ISUI.title_rgb {}
  export abstract class water_rgb extends lua.client.Farming.ISUI.water_rgb {}
  export abstract class waterbar_rgb extends lua.client.Farming.ISUI.waterbar_rgb {}

  // [lua/client/Farming/ISUI/ISFarmingMenu.d.ts]
  export abstract class ISFarmingMenu extends lua.client.Farming.ISUI.ISFarmingMenu {}

  // [lua/client/Farming/ISUI/ISFarmingWindow.d.ts]
  /** @customConstructor ISFarmingWindow:new */
  export class ISFarmingWindow extends lua.client.Farming.ISUI.ISFarmingWindow {}

  // [lua/client/Farming/TimedActions/ISCureFliesAction.d.ts]
  /** @customConstructor ISCureFliesAction:new */
  export class ISCureFliesAction extends lua.client.Farming.TimedActions.ISCureFliesAction {}

  // [lua/client/Farming/TimedActions/ISCureMildewAction.d.ts]
  /** @customConstructor ISCureMildewAction:new */
  export class ISCureMildewAction extends lua.client.Farming.TimedActions.ISCureMildewAction {}

  // [lua/client/Farming/TimedActions/ISFertilizeAction.d.ts]
  /** @customConstructor ISFertilizeAction:new */
  export class ISFertilizeAction extends lua.client.Farming.TimedActions.ISFertilizeAction {}

  // [lua/client/Farming/TimedActions/ISHarvestPlantAction.d.ts]
  /** @customConstructor ISHarvestPlantAction:new */
  export class ISHarvestPlantAction extends lua.client.Farming.TimedActions.ISHarvestPlantAction {}

  // [lua/client/Farming/TimedActions/ISPlantInfoAction.d.ts]
  /** @customConstructor ISPlantInfoAction:new */
  export class ISPlantInfoAction extends lua.client.Farming.TimedActions.ISPlantInfoAction {}

  // [lua/client/Farming/TimedActions/ISPlowAction.d.ts]
  /** @customConstructor ISPlowAction:new */
  export class ISPlowAction extends lua.client.Farming.TimedActions.ISPlowAction {}

  // [lua/client/Farming/TimedActions/ISSeedAction.d.ts]
  /** @customConstructor ISSeedAction:new */
  export class ISSeedAction extends lua.client.Farming.TimedActions.ISSeedAction {}

  // [lua/client/Farming/TimedActions/ISShovelAction.d.ts]
  /** @customConstructor ISShovelAction:new */
  export class ISShovelAction extends lua.client.Farming.TimedActions.ISShovelAction {}

  // [lua/client/Farming/TimedActions/ISWaterPlantAction.d.ts]
  /** @customConstructor ISWaterPlantAction:new */
  export class ISWaterPlantAction extends lua.client.Farming.TimedActions.ISWaterPlantAction {}

  // [lua/client/Fishing/TimedActions/ISCheckFishingNetAction.d.ts]
  /** @customConstructor ISCheckFishingNetAction:new */
  export class ISCheckFishingNetAction extends lua.client.Fishing.TimedActions.ISCheckFishingNetAction {}

  // [lua/client/Fishing/TimedActions/ISFishingAction.d.ts]
  /** @customConstructor ISFishingAction:new */
  export class ISFishingAction extends lua.client.Fishing.TimedActions.ISFishingAction {}

  // [lua/client/Foraging/forageClient.d.ts]
  export abstract class forageClient extends lua.client.Foraging.forageClient {}
  export abstract class forageData extends lua.client.Foraging.forageData {}

  // [lua/client/Foraging/ISBaseIcon.d.ts]
  /** @customConstructor ISBaseIcon:new */
  export class ISBaseIcon extends lua.client.Foraging.ISBaseIcon {}

  // [lua/client/Foraging/ISForageAction.d.ts]
  /** @customConstructor ISForageAction:new */
  export class ISForageAction extends lua.client.Foraging.ISForageAction {}

  // [lua/client/Foraging/ISForageIcon.d.ts]
  /** @customConstructor ISForageIcon:new */
  export class ISForageIcon extends lua.client.Foraging.ISForageIcon {}

  // [lua/client/Foraging/ISSearchManager.d.ts]
  /** @customConstructor ISSearchManager:new */
  export class ISSearchManager extends lua.client.Foraging.ISSearchManager {}

  // [lua/client/Foraging/ISSearchWindow.d.ts]
  /** @customConstructor ISSearchWindow:new */
  export class ISSearchWindow extends lua.client.Foraging.ISSearchWindow {}

  // [lua/client/Foraging/ISWorldItemIcon.d.ts]
  /** @customConstructor ISWorldItemIcon:new */
  export class ISWorldItemIcon extends lua.client.Foraging.ISWorldItemIcon {}

  // [lua/client/Foraging/ISZoneDisplay.d.ts]
  /** @customConstructor ISZoneDisplay:new */
  export class ISZoneDisplay extends lua.client.Foraging.ISZoneDisplay {}

  // [lua/client/Hotbar/ISHotbar.d.ts]
  /** @customConstructor ISHotbar:new */
  export class ISHotbar extends lua.client.Hotbar.ISHotbar {}

  // [lua/client/ISUI/AdminPanel/ISAddNonPvpZoneUI.d.ts]
  /** @customConstructor ISAddNonPvpZoneUI:new */
  export class ISAddNonPvpZoneUI extends lua.client.ISUI.AdminPanel.ISAddNonPvpZoneUI {}

  // [lua/client/ISUI/AdminPanel/ISAddSafeZoneUI.d.ts]
  /** @customConstructor ISAddSafeZoneUI:new */
  export class ISAddSafeZoneUI extends lua.client.ISUI.AdminPanel.ISAddSafeZoneUI {}

  // [lua/client/ISUI/AdminPanel/ISAdminMessage.d.ts]
  /** @customConstructor ISAdminMessage:new */
  export class ISAdminMessage extends lua.client.ISUI.AdminPanel.ISAdminMessage {}

  // [lua/client/ISUI/AdminPanel/ISAdminPanelUI.d.ts]
  /** @customConstructor ISAdminPanelUI:new */
  export class ISAdminPanelUI extends lua.client.ISUI.AdminPanel.ISAdminPanelUI {}

  // [lua/client/ISUI/AdminPanel/ISAdminPowerUI.d.ts]
  /** @customConstructor ISAdminPowerUI:new */
  export class ISAdminPowerUI extends lua.client.ISUI.AdminPanel.ISAdminPowerUI {}

  // [lua/client/ISUI/AdminPanel/ISAdminTicketsUI.d.ts]
  /** @customConstructor ISAdminTicketsUI:new */
  export class ISAdminTicketsUI extends lua.client.ISUI.AdminPanel.ISAdminTicketsUI {}

  // [lua/client/ISUI/AdminPanel/ISAdminWeather.d.ts]
  /** @customConstructor ISAdminWeather:new */
  export class ISAdminWeather extends lua.client.ISUI.AdminPanel.ISAdminWeather {}

  // [lua/client/ISUI/AdminPanel/ISAdmPanelClimate.d.ts]
  /** @customConstructor ISAdmPanelClimate:new */
  export class ISAdmPanelClimate extends lua.client.ISUI.AdminPanel.ISAdmPanelClimate {}

  // [lua/client/ISUI/AdminPanel/ISAdmPanelWeather.d.ts]
  /** @customConstructor ISAdmPanelWeather:new */
  export class ISAdmPanelWeather extends lua.client.ISUI.AdminPanel.ISAdmPanelWeather {}

  // [lua/client/ISUI/AdminPanel/ISFactionsList.d.ts]
  /** @customConstructor ISFactionsList:new */
  export class ISFactionsList extends lua.client.ISUI.AdminPanel.ISFactionsList {}

  // [lua/client/ISUI/AdminPanel/ISItemEditorUI.d.ts]
  /** @customConstructor ISItemEditorUI:new */
  export class ISItemEditorUI extends lua.client.ISUI.AdminPanel.ISItemEditorUI {}

  // [lua/client/ISUI/AdminPanel/ISItemsListTable.d.ts]
  /** @customConstructor ISItemsListTable:new */
  export class ISItemsListTable extends lua.client.ISUI.AdminPanel.ISItemsListTable {}

  // [lua/client/ISUI/AdminPanel/ISItemsListViewer.d.ts]
  /** @customConstructor ISItemsListViewer:new */
  export class ISItemsListViewer extends lua.client.ISUI.AdminPanel.ISItemsListViewer {}

  // [lua/client/ISUI/AdminPanel/ISMiniScoreboardUI.d.ts]
  /** @customConstructor ISMiniScoreboardUI:new */
  export class ISMiniScoreboardUI extends lua.client.ISUI.AdminPanel.ISMiniScoreboardUI {}

  // [lua/client/ISUI/AdminPanel/ISPacketCounts.d.ts]
  /** @customConstructor ISPacketCounts:new */
  export class ISPacketCounts extends lua.client.ISUI.AdminPanel.ISPacketCounts {}
  /** @customConstructor ISPacketCountsList:new */
  export class ISPacketCountsList extends lua.client.ISUI.AdminPanel.ISPacketCountsList {}

  // [lua/client/ISUI/AdminPanel/ISPvpZonePanel.d.ts]
  /** @customConstructor ISPvpZonePanel:new */
  export class ISPvpZonePanel extends lua.client.ISUI.AdminPanel.ISPvpZonePanel {}

  // [lua/client/ISUI/AdminPanel/ISSafehousesList.d.ts]
  /** @customConstructor ISSafehousesList:new */
  export class ISSafehousesList extends lua.client.ISUI.AdminPanel.ISSafehousesList {}

  // [lua/client/ISUI/AdminPanel/ISServerOptions.d.ts]
  /** @customConstructor ISServerOptions:new */
  export class ISServerOptions extends lua.client.ISUI.AdminPanel.ISServerOptions {}

  // [lua/client/ISUI/AdminPanel/ISServerOptionsChange.d.ts]
  /** @customConstructor ISServerOptionsChange:new */
  export class ISServerOptionsChange extends lua.client.ISUI.AdminPanel.ISServerOptionsChange {}

  // [lua/client/ISUI/AdminPanel/ISServerSandboxOptionsUI.d.ts]
  /** @customConstructor ISServerSandboxOptionsUI:new */
  export class ISServerSandboxOptionsUI extends lua.client.ISUI.AdminPanel.ISServerSandboxOptionsUI {}

  // [lua/client/ISUI/AdminPanel/ISStatisticsUI.d.ts]
  /** @customConstructor ISStatisticsUI:new */
  export class ISStatisticsUI extends lua.client.ISUI.AdminPanel.ISStatisticsUI {}

  // [lua/client/ISUI/AdminPanel/ISWhitelistModifyRow.d.ts]
  /** @customConstructor ISWhitelistModifyRow:new */
  export class ISWhitelistModifyRow extends lua.client.ISUI.AdminPanel.ISWhitelistModifyRow {}

  // [lua/client/ISUI/AdminPanel/ISWhitelistTable.d.ts]
  /** @customConstructor ISWhitelistTable:new */
  export class ISWhitelistTable extends lua.client.ISUI.AdminPanel.ISWhitelistTable {}

  // [lua/client/ISUI/AdminPanel/ISWhitelistViewer.d.ts]
  /** @customConstructor ISWhitelistViewer:new */
  export class ISWhitelistViewer extends lua.client.ISUI.AdminPanel.ISWhitelistViewer {}

  // [lua/client/ISUI/AdminPanel/LootZed/ISLootZed.d.ts]
  /** @customConstructor ISLootZed:new */
  export class ISLootZed extends lua.client.ISUI.AdminPanel.LootZed.ISLootZed {}

  // [lua/client/ISUI/AdminPanel/LootZed/SpawnRateChecker.d.ts]
  export abstract class LootZedTool extends lua.client.ISUI.AdminPanel.LootZed.LootZedTool {}

  // [lua/client/ISUI/BodyParts/ISBodyPartPanel.d.ts]
  /** @customConstructor ISBodyPartPanel:new */
  export class ISBodyPartPanel extends lua.client.ISUI.BodyParts.ISBodyPartPanel {}

  // [lua/client/ISUI/Fireplace/ISKnob.d.ts]
  /** @customConstructor ISKnob:new */
  export class ISKnob extends lua.client.ISUI.Fireplace.ISKnob {}

  // [lua/client/ISUI/Fireplace/ISMicrowaveUI.d.ts]
  /** @customConstructor ISMicrowaveUI:new */
  export class ISMicrowaveUI extends lua.client.ISUI.Fireplace.ISMicrowaveUI {}

  // [lua/client/ISUI/Fireplace/ISOvenUI.d.ts]
  /** @customConstructor ISOvenUI:new */
  export class ISOvenUI extends lua.client.ISUI.Fireplace.ISOvenUI {}

  // [lua/client/ISUI/FPS.d.ts]
  export abstract class ISFPS extends lua.client.ISUI.ISFPS {}

  // [lua/client/ISUI/InterpolationPeriodDebug.d.ts]
  /** @customConstructor InterpolationPeriodDebug:new */
  export class InterpolationPeriodDebug extends lua.client.ISUI.InterpolationPeriodDebug {}

  // [lua/client/ISUI/InterpolationPlayerPeriodDebug.d.ts]
  /** @customConstructor InterpolationPlayerPeriodDebug:new */
  export class InterpolationPlayerPeriodDebug extends lua.client.ISUI.InterpolationPlayerPeriodDebug {}

  // [lua/client/ISUI/ISAlarmClockDialog.d.ts]
  /** @customConstructor ISAlarmClockDialog:new */
  export class ISAlarmClockDialog extends lua.client.ISUI.ISAlarmClockDialog {}

  // [lua/client/ISUI/ISBackButtonWheel.d.ts]
  /** @customConstructor ISBackButtonWheel:new */
  export class ISBackButtonWheel extends lua.client.ISUI.ISBackButtonWheel {}

  // [lua/client/ISUI/ISBBQInfoWindow.d.ts]
  /** @customConstructor ISBBQInfoWindow:new */
  export class ISBBQInfoWindow extends lua.client.ISUI.ISBBQInfoWindow {}

  // [lua/client/ISUI/ISBBQMenu.d.ts]
  export abstract class ISBBQMenu extends lua.client.ISUI.ISBBQMenu {}

  // [lua/client/ISUI/ISBombTimerDialog.d.ts]
  /** @customConstructor ISBombTimerDialog:new */
  export class ISBombTimerDialog extends lua.client.ISUI.ISBombTimerDialog {}

  // [lua/client/ISUI/ISButton.d.ts]
  /** @customConstructor ISButton:new */
  export class ISButton extends lua.client.ISUI.ISButton {}

  // [lua/client/ISUI/ISButtonPrompt.d.ts]
  /** @customConstructor ISButtonPrompt:new */
  export class ISButtonPrompt extends lua.client.ISUI.ISButtonPrompt {}

  // [lua/client/ISUI/ISCollapsableModalRichText.d.ts]
  /** @customConstructor ISCollapsableModalRichText:new */
  export class ISCollapsableModalRichText extends lua.client.ISUI.ISCollapsableModalRichText {}

  // [lua/client/ISUI/ISCollapsableWindow.d.ts]
  /** @customConstructor ISCollapsableWindow:new */
  export class ISCollapsableWindow extends lua.client.ISUI.ISCollapsableWindow {}

  // [lua/client/ISUI/ISCollapsableWindowJoypad.d.ts]
  /** @customConstructor ISCollapsableWindowJoypad:new */
  export class ISCollapsableWindowJoypad extends lua.client.ISUI.ISCollapsableWindowJoypad {}

  // [lua/client/ISUI/ISColorPicker.d.ts]
  /** @customConstructor ISColorPicker:new */
  export class ISColorPicker extends lua.client.ISUI.ISColorPicker {}

  // [lua/client/ISUI/ISComboBox.d.ts]
  /** @customConstructor ISComboBox:new */
  export class ISComboBox extends lua.client.ISUI.ISComboBox {}
  /** @customConstructor ISComboBoxEditor:new */
  export class ISComboBoxEditor extends lua.client.ISUI.ISComboBoxEditor {}
  /** @customConstructor ISComboBoxPopup:new */
  export class ISComboBoxPopup extends lua.client.ISUI.ISComboBoxPopup {}

  // [lua/client/ISUI/ISConfirmMonitorSettingsDialog.d.ts]
  /** @customConstructor ISConfirmMonitorSettingsDialog:new */
  export class ISConfirmMonitorSettingsDialog extends lua.client.ISUI.ISConfirmMonitorSettingsDialog {}

  // [lua/client/ISUI/ISContextMenu.d.ts]
  /** @customConstructor ISContextMenu:new */
  export class ISContextMenu extends lua.client.ISUI.ISContextMenu {}

  // [lua/client/ISUI/ISControllerTestPanel.d.ts]
  /** @customConstructor ISControllerTestPanel:new */
  export class ISControllerTestPanel extends lua.client.ISUI.ISControllerTestPanel {}

  // [lua/client/ISUI/ISCraftingCategoryUI.d.ts]
  /** @customConstructor ISCraftingCategoryUI:new */
  export class ISCraftingCategoryUI extends lua.client.ISUI.ISCraftingCategoryUI {}

  // [lua/client/ISUI/ISCraftingUI.d.ts]
  /** @customConstructor ISCraftingUI:new */
  export class ISCraftingUI extends lua.client.ISUI.ISCraftingUI {}

  // [lua/client/ISUI/ISDemoPopup.d.ts]
  /** @customConstructor ISDemoPopup:new */
  export class ISDemoPopup extends lua.client.ISUI.ISDemoPopup {}
  /** @noSelf */
  export const DoDemoPopup: () => any;

  // [lua/client/ISUI/ISDigitalCode.d.ts]
  /** @customConstructor ISDigitalCode:new */
  export class ISDigitalCode extends lua.client.ISUI.ISDigitalCode {}

  // [lua/client/ISUI/ISDPadWheels.d.ts]
  export abstract class ISDPadWheels extends lua.client.ISUI.ISDPadWheels {}

  // [lua/client/ISUI/ISDuplicateKeybindDialog.d.ts]
  /** @customConstructor ISDuplicateKeybindDialog:new */
  export class ISDuplicateKeybindDialog extends lua.client.ISUI.ISDuplicateKeybindDialog {}

  // [lua/client/ISUI/ISEmoteRadialMenu.d.ts]
  /** @customConstructor ISEmoteRadialMenu:new */
  export class ISEmoteRadialMenu extends lua.client.ISUI.ISEmoteRadialMenu {}

  // [lua/client/ISUI/ISEquippedItem.d.ts]
  /** @customConstructor ISEquippedItem:new */
  export class ISEquippedItem extends lua.client.ISUI.ISEquippedItem {}
  /** @customConstructor ISMapPopup:new */
  export class ISMapPopup extends lua.client.ISUI.ISMapPopup {}
  /** @customConstructor ISMoveablesIconPopup:new */
  export class ISMoveablesIconPopup extends lua.client.ISUI.ISMoveablesIconPopup {}

  // [lua/client/ISUI/ISFirearmRadialMenu.d.ts]
  /** @customConstructor ISFirearmRadialMenu:new */
  export class ISFirearmRadialMenu extends lua.client.ISUI.ISFirearmRadialMenu {}

  // [lua/client/ISUI/ISFireplaceInfoWindow.d.ts]
  /** @customConstructor ISFireplaceInfoWindow:new */
  export class ISFireplaceInfoWindow extends lua.client.ISUI.ISFireplaceInfoWindow {}

  // [lua/client/ISUI/ISFireplaceMenu.d.ts]
  export abstract class ISFireplaceMenu extends lua.client.ISUI.ISFireplaceMenu {}

  // [lua/client/ISUI/ISFishingUI.d.ts]
  /** @customConstructor ISFishingUI:new */
  export class ISFishingUI extends lua.client.ISUI.ISFishingUI {}

  // [lua/client/ISUI/ISFitnessUI.d.ts]
  /** @customConstructor ISFitnessUI:new */
  export class ISFitnessUI extends lua.client.ISUI.ISFitnessUI {}

  // [lua/client/ISUI/ISGameLoadingUI.d.ts]
  /** @customConstructor ISGameLoadingUI:new */
  export class ISGameLoadingUI extends lua.client.ISUI.ISGameLoadingUI {}

  // [lua/client/ISUI/ISGameSoundVolumeControl.d.ts]
  /** @customConstructor ISGameSoundVolumeControl:new */
  export class ISGameSoundVolumeControl extends lua.client.ISUI.ISGameSoundVolumeControl {}

  // [lua/client/ISUI/ISGarmentUI.d.ts]
  /** @customConstructor ISGarmentUI:new */
  export class ISGarmentUI extends lua.client.ISUI.ISGarmentUI {}

  // [lua/client/ISUI/ISGeneratorInfoWindow.d.ts]
  /** @customConstructor ISGeneratorInfoWindow:new */
  export class ISGeneratorInfoWindow extends lua.client.ISUI.ISGeneratorInfoWindow {}

  // [lua/client/ISUI/ISGradientBar.d.ts]
  /** @customConstructor ISGradientBar:new */
  export class ISGradientBar extends lua.client.ISUI.ISGradientBar {}

  // [lua/client/ISUI/ISImage.d.ts]
  /** @customConstructor ISImage:new */
  export class ISImage extends lua.client.ISUI.ISImage {}

  // [lua/client/ISUI/ISInfoContainer.d.ts]
  /** @customConstructor ISInfoContainer:new */
  export class ISInfoContainer extends lua.client.ISUI.ISInfoContainer {}

  // [lua/client/ISUI/ISInventoryPage.d.ts]
  /** @customConstructor ISInventoryPage:new */
  export class ISInventoryPage extends lua.client.ISUI.ISInventoryPage {}

  // [lua/client/ISUI/ISInventoryPane.d.ts]
  /** @customConstructor ISInventoryPane:new */
  export class ISInventoryPane extends lua.client.ISUI.ISInventoryPane {}
  export abstract class ISInventoryPaneDraggedItems extends lua.client.ISUI.ISInventoryPaneDraggedItems {}

  // [lua/client/ISUI/ISInventoryPaneContextMenu.d.ts]
  export abstract class ISInventoryPaneContextMenu extends lua.client.ISUI.ISInventoryPaneContextMenu {}

  // [lua/client/ISUI/ISJoystickButtonRadialMenu.d.ts]
  export abstract class ISJoystickButtonRadialMenu extends lua.client.ISUI.ISJoystickButtonRadialMenu {}

  // [lua/client/ISUI/ISLabel.d.ts]
  /** @customConstructor ISLabel:new */
  export class ISLabel extends lua.client.ISUI.ISLabel {}

  // [lua/client/ISUI/ISLayoutManager.d.ts]
  export abstract class ISLayoutManager extends lua.client.ISUI.ISLayoutManager {}

  // [lua/client/ISUI/ISLcdBar.d.ts]
  /** @customConstructor ISLcdBar:new */
  export class ISLcdBar extends lua.client.ISUI.ISLcdBar {}

  // [lua/client/ISUI/ISLightSourceRadialMenu.d.ts]
  /** @customConstructor ISLightSourceRadialMenu:new */
  export class ISLightSourceRadialMenu extends lua.client.ISUI.ISLightSourceRadialMenu {}

  // [lua/client/ISUI/ISLiteratureUI.d.ts]
  /** @customConstructor ISLiteratureList:new */
  export class ISLiteratureList extends lua.client.ISUI.ISLiteratureList {}
  /** @customConstructor ISLiteratureMediaList:new */
  export class ISLiteratureMediaList extends lua.client.ISUI.ISLiteratureMediaList {}
  /** @customConstructor ISLiteratureUI:new */
  export class ISLiteratureUI extends lua.client.ISUI.ISLiteratureUI {}

  // [lua/client/ISUI/ISMakeUpUI.d.ts]
  /** @customConstructor ISMakeUpUI:new */
  export class ISMakeUpUI extends lua.client.ISUI.ISMakeUpUI {}

  // [lua/client/ISUI/ISMegaVolumeControl.d.ts]
  /** @customConstructor ISMegaVolumeControl:new */
  export class ISMegaVolumeControl extends lua.client.ISUI.ISMegaVolumeControl {}

  // [lua/client/ISUI/ISModalDialog.d.ts]
  /** @customConstructor ISModalDialog:new */
  export class ISModalDialog extends lua.client.ISUI.ISModalDialog {}

  // [lua/client/ISUI/ISModalRichText.d.ts]
  /** @customConstructor ISModalRichText:new */
  export class ISModalRichText extends lua.client.ISUI.ISModalRichText {}

  // [lua/client/ISUI/ISMouseDrag.d.ts]
  export abstract class ISMouseDrag extends lua.client.ISUI.ISMouseDrag {}

  // [lua/client/ISUI/ISMoveableInfoWindow.d.ts]
  /** @customConstructor ISMoveableInfoWindow:new */
  export class ISMoveableInfoWindow extends lua.client.ISUI.ISMoveableInfoWindow {}

  // [lua/client/ISUI/ISNewsUpdate.d.ts]
  /** @customConstructor ISNewsUpdate:new */
  export class ISNewsUpdate extends lua.client.ISUI.ISNewsUpdate {}

  // [lua/client/ISUI/ISOnScreenKeyboard.d.ts]
  /** @customConstructor ISOnScreenKeyboard:new */
  export class ISOnScreenKeyboard extends lua.client.ISUI.ISOnScreenKeyboard {}
  /** @customConstructor OnScreenKeyboardEntry:new */
  export class OnScreenKeyboardEntry extends lua.client.ISUI.OnScreenKeyboardEntry {}
  /** @customConstructor OnScreenKeyboardPanel:new */
  export class OnScreenKeyboardPanel extends lua.client.ISUI.OnScreenKeyboardPanel {}
  export abstract class OnScreenKeyboard extends lua.client.ISUI.OnScreenKeyboard {}

  // [lua/client/ISUI/ISOptionPanel.d.ts]
  /** @customConstructor ISOptionPanel:new */
  export class ISOptionPanel extends lua.client.ISUI.ISOptionPanel {}

  // [lua/client/ISUI/ISPanel.d.ts]
  /** @customConstructor ISPanel:new */
  export class ISPanel extends lua.client.ISUI.ISPanel {}

  // [lua/client/ISUI/ISPanelJoypad.d.ts]
  /** @customConstructor ISPanelJoypad:new */
  export class ISPanelJoypad extends lua.client.ISUI.ISPanelJoypad {}

  // [lua/client/ISUI/ISPauseModListUI.d.ts]
  /** @customConstructor ISPauseModListUI:new */
  export class ISPauseModListUI extends lua.client.ISUI.ISPauseModListUI {}
  export abstract class PauseBuggedModList extends lua.client.ISUI.PauseBuggedModList {}

  // [lua/client/ISUI/ISPostDeathUI.d.ts]
  /** @customConstructor ISPostDeathUI:new */
  export class ISPostDeathUI extends lua.client.ISUI.ISPostDeathUI {}

  // [lua/client/ISUI/ISRadialMenu.d.ts]
  /** @customConstructor ISRadialMenu:new */
  export class ISRadialMenu extends lua.client.ISUI.ISRadialMenu {}

  // [lua/client/ISUI/ISRadialProgressBar.d.ts]
  /** @customConstructor ISRadialProgressBar:new */
  export class ISRadialProgressBar extends lua.client.ISUI.ISRadialProgressBar {}

  // [lua/client/ISUI/ISRadioButtons.d.ts]
  /** @customConstructor ISRadioButtons:new */
  export class ISRadioButtons extends lua.client.ISUI.ISRadioButtons {}

  // [lua/client/ISUI/ISRadioOption.d.ts]
  /** @customConstructor ISRadioOption:new */
  export class ISRadioOption extends lua.client.ISUI.ISRadioOption {}

  // [lua/client/ISUI/ISRainPanel.d.ts]
  /** @customConstructor ISRainPanel:new */
  export class ISRainPanel extends lua.client.ISUI.ISRainPanel {}
  /** @noSelf */
  export const addRainPanel: () => any;

  // [lua/client/ISUI/ISRect.d.ts]
  /** @customConstructor ISRect:new */
  export class ISRect extends lua.client.ISUI.ISRect {}

  // [lua/client/ISUI/ISResizeableButton.d.ts]
  /** @customConstructor ISResizableButton:new */
  export class ISResizableButton extends lua.client.ISUI.ISResizableButton {}

  // [lua/client/ISUI/ISResizeWidget.d.ts]
  /** @customConstructor ISResizeWidget:new */
  export class ISResizeWidget extends lua.client.ISUI.ISResizeWidget {}

  // [lua/client/ISUI/ISRichTextBox.d.ts]
  /** @customConstructor ISRichTextBox:new */
  export class ISRichTextBox extends lua.client.ISUI.ISRichTextBox {}

  // [lua/client/ISUI/ISRichTextPanel.d.ts]
  /** @customConstructor ISRichTextPanel:new */
  export class ISRichTextPanel extends lua.client.ISUI.ISRichTextPanel {}

  // [lua/client/ISUI/ISSafetyUI.d.ts]
  /** @customConstructor ISSafetyUI:new */
  export class ISSafetyUI extends lua.client.ISUI.ISSafetyUI {}

  // [lua/client/ISUI/ISScavengeUI.d.ts]
  /** @customConstructor ISScavengeUI:new */
  export class ISScavengeUI extends lua.client.ISUI.ISScavengeUI {}

  // [lua/client/ISUI/ISScrollBar.d.ts]
  /** @customConstructor ISScrollBar:new */
  export class ISScrollBar extends lua.client.ISUI.ISScrollBar {}

  // [lua/client/ISUI/ISScrollingListBox.d.ts]
  /** @customConstructor ISScrollingListBox:new */
  export class ISScrollingListBox extends lua.client.ISUI.ISScrollingListBox {}

  // [lua/client/ISUI/ISServerDisconnectUI.d.ts]
  /** @customConstructor ISServerDisconnectUI:new */
  export class ISServerDisconnectUI extends lua.client.ISUI.ISServerDisconnectUI {}

  // [lua/client/ISUI/ISServerSavingMessage.d.ts]
  /** @customConstructor ISServerSavingMessage:new */
  export class ISServerSavingMessage extends lua.client.ISUI.ISServerSavingMessage {}

  // [lua/client/ISUI/ISSetKeybindDialog.d.ts]
  /** @customConstructor ISSetKeybindDialog:new */
  export class ISSetKeybindDialog extends lua.client.ISUI.ISSetKeybindDialog {}

  // [lua/client/ISUI/ISSleepDialog.d.ts]
  /** @customConstructor ISSleepDialog:new */
  export class ISSleepDialog extends lua.client.ISUI.ISSleepDialog {}

  // [lua/client/ISUI/ISSpinBox.d.ts]
  /** @customConstructor ISSpinBox:new */
  export class ISSpinBox extends lua.client.ISUI.ISSpinBox {}

  // [lua/client/ISUI/ISTabPanel.d.ts]
  /** @customConstructor ISTabPanel:new */
  export class ISTabPanel extends lua.client.ISUI.ISTabPanel {}

  // [lua/client/ISUI/ISTextBox.d.ts]
  /** @customConstructor ISTextBox:new */
  export class ISTextBox extends lua.client.ISUI.ISTextBox {}

  // [lua/client/ISUI/ISTextEntryBox.d.ts]
  /** @customConstructor ISTextEntryBox:new */
  export class ISTextEntryBox extends lua.client.ISUI.ISTextEntryBox {}

  // [lua/client/ISUI/ISTickBox.d.ts]
  /** @customConstructor ISTickBox:new */
  export class ISTickBox extends lua.client.ISUI.ISTickBox {}

  // [lua/client/ISUI/ISToolTip.d.ts]
  /** @customConstructor ISToolTip:new */
  export class ISToolTip extends lua.client.ISUI.ISToolTip {}

  // [lua/client/ISUI/ISToolTipInv.d.ts]
  /** @customConstructor ISToolTipInv:new */
  export class ISToolTipInv extends lua.client.ISUI.ISToolTipInv {}

  // [lua/client/ISUI/ISTradingUI.d.ts]
  /** @customConstructor ISTradingUI:new */
  export class ISTradingUI extends lua.client.ISUI.ISTradingUI {}

  // [lua/client/ISUI/ISTradingUIHistorial.d.ts]
  /** @customConstructor ISTradingUIHistorical:new */
  export class ISTradingUIHistorical extends lua.client.ISUI.ISTradingUIHistorical {}

  // [lua/client/ISUI/ISUI3DModel.d.ts]
  /** @customConstructor ISUI3DModel:new */
  export class ISUI3DModel extends lua.client.ISUI.ISUI3DModel {}

  // [lua/client/ISUI/ISUIElement.d.ts]
  /** @customConstructor ISUIElement:new */
  export class ISUIElement extends lua.client.ISUI.ISUIElement {}

  // [lua/client/ISUI/ISUIEmoteConfig.d.ts]
  /** @customConstructor ISUIEmoteConfig:new */
  export class ISUIEmoteConfig extends lua.client.ISUI.ISUIEmoteConfig {}

  // [lua/client/ISUI/ISUIHandler.d.ts]
  export abstract class ISUIHandler extends lua.client.ISUI.ISUIHandler {}

  // [lua/client/ISUI/ISUIWriteJournal.d.ts]
  /** @customConstructor ISUIWriteJournal:new */
  export class ISUIWriteJournal extends lua.client.ISUI.ISUIWriteJournal {}

  // [lua/client/ISUI/ISVehicleConfirmBox.d.ts]
  /** @customConstructor ISVehicleConfirmBox:new */
  export class ISVehicleConfirmBox extends lua.client.ISUI.ISVehicleConfirmBox {}
  /** @customConstructor ISVehiclePartListBox:new */
  export class ISVehiclePartListBox extends lua.client.ISUI.ISVehiclePartListBox {}

  // [lua/client/ISUI/ISVolumeControl.d.ts]
  /** @customConstructor ISVolumeControl:new */
  export class ISVolumeControl extends lua.client.ISUI.ISVolumeControl {}

  // [lua/client/ISUI/ISVolumeIndicator.d.ts]
  /** @customConstructor ISVolumeIndicator:new */
  export class ISVolumeIndicator extends lua.client.ISUI.ISVolumeIndicator {}

  // [lua/client/ISUI/ISWindow.d.ts]
  /** @customConstructor ISWindow:new */
  export class ISWindow extends lua.client.ISUI.ISWindow {}

  // [lua/client/ISUI/ISWorldObjectContextMenu.d.ts]
  export abstract class ISWorldObjectContextMenu extends lua.client.ISUI.ISWorldObjectContextMenu {}

  // [lua/client/ISUI/Maps/Editor/WorldMapEditor.d.ts]
  /** @customConstructor WorldMapEditor:new */
  export class WorldMapEditor extends lua.client.ISUI.Maps.Editor.WorldMapEditor {}

  // [lua/client/ISUI/Maps/Editor/WorldMapEditorListBox.d.ts]
  /** @customConstructor WorldMapEditorListBox:new */
  export class WorldMapEditorListBox extends lua.client.ISUI.Maps.Editor.WorldMapEditorListBox {}

  // [lua/client/ISUI/Maps/Editor/WorldMapEditorLocationControl.d.ts]
  /** @customConstructor WorldMapEditorLocationControl:new */
  export class WorldMapEditorLocationControl extends lua.client.ISUI.Maps.Editor.WorldMapEditorLocationControl {}

  // [lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Annotations.d.ts]
  /** @customConstructor WorldMapEditorMode_Annotations:new */
  export class WorldMapEditorMode_Annotations extends lua.client.ISUI.Maps.Editor.WorldMapEditorMode_Annotations {}

  // [lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Bounds.d.ts]
  /** @customConstructor WorldMapEditorMode_Bounds:new */
  export class WorldMapEditorMode_Bounds extends lua.client.ISUI.Maps.Editor.WorldMapEditorMode_Bounds {}

  // [lua/client/ISUI/Maps/Editor/WorldMapEditorMode_DataFiles.d.ts]
  /** @customConstructor WorldMapEditorMode_DataFiles:new */
  export class WorldMapEditorMode_DataFiles extends lua.client.ISUI.Maps.Editor.WorldMapEditorMode_DataFiles {}

  // [lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Maps.d.ts]
  /** @customConstructor WorldMapEditorMode_Maps:new */
  export class WorldMapEditorMode_Maps extends lua.client.ISUI.Maps.Editor.WorldMapEditorMode_Maps {}

  // [lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Stashes.d.ts]
  /** @customConstructor WorldMapEditorMode_Stashes:new */
  export class WorldMapEditorMode_Stashes extends lua.client.ISUI.Maps.Editor.WorldMapEditorMode_Stashes {}

  // [lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Style.d.ts]
  /** @customConstructor WorldMapEditorMode_Style:new */
  export class WorldMapEditorMode_Style extends lua.client.ISUI.Maps.Editor.WorldMapEditorMode_Style {}
  /** @customConstructor WorldMapStyleEditor:new */
  export class WorldMapStyleEditor extends lua.client.ISUI.Maps.Editor.WorldMapStyleEditor {}
  /** @customConstructor WorldMapStyleEditor_ColorStopsPanel:new */
  export class WorldMapStyleEditor_ColorStopsPanel extends lua.client.ISUI.Maps.Editor
    .WorldMapStyleEditor_ColorStopsPanel {}
  /** @customConstructor WorldMapStyleEditor_FilterPanel:new */
  export class WorldMapStyleEditor_FilterPanel extends lua.client.ISUI.Maps.Editor.WorldMapStyleEditor_FilterPanel {}
  /** @customConstructor WorldMapStyleEditor_PolygonLayerPanel:new */
  export class WorldMapStyleEditor_PolygonLayerPanel extends lua.client.ISUI.Maps.Editor
    .WorldMapStyleEditor_PolygonLayerPanel {}
  /** @customConstructor WorldMapStyleEditor_TabPanel:new */
  export class WorldMapStyleEditor_TabPanel extends lua.client.ISUI.Maps.Editor.WorldMapStyleEditor_TabPanel {}
  /** @customConstructor WorldMapStyleEditor_TextureLayerPanel:new */
  export class WorldMapStyleEditor_TextureLayerPanel extends lua.client.ISUI.Maps.Editor
    .WorldMapStyleEditor_TextureLayerPanel {}
  /** @customConstructor WorldMapStyleEditor_TexturePanel:new */
  export class WorldMapStyleEditor_TexturePanel extends lua.client.ISUI.Maps.Editor.WorldMapStyleEditor_TexturePanel {}
  /** @customConstructor WorldMapStyleEditor_TextureStopsPanel:new */
  export class WorldMapStyleEditor_TextureStopsPanel extends lua.client.ISUI.Maps.Editor
    .WorldMapStyleEditor_TextureStopsPanel {}

  // [lua/client/ISUI/Maps/Editor/WorldMapEditorMode.d.ts]
  /** @customConstructor WorldMapEditorMode:new */
  export class WorldMapEditorMode extends lua.client.ISUI.Maps.Editor.WorldMapEditorMode {}

  // [lua/client/ISUI/Maps/Editor/WorldMapEditorResizer.d.ts]
  /** @customConstructor WorldMapEditorResizer:new */
  export class WorldMapEditorResizer extends lua.client.ISUI.Maps.Editor.WorldMapEditorResizer {}

  // [lua/client/ISUI/Maps/ISMap.d.ts]
  /** @customConstructor ISMap:new */
  export class ISMap extends lua.client.ISUI.Maps.ISMap {}
  /** @customConstructor ISMapWrapper:new */
  export class ISMapWrapper extends lua.client.ISUI.Maps.ISMapWrapper {}

  // [lua/client/ISUI/Maps/ISMapDefinitions.d.ts]
  export abstract class LootMaps extends lua.client.ISUI.Maps.LootMaps {}
  export abstract class MapUtils extends lua.client.ISUI.Maps.MapUtils {}

  // [lua/client/ISUI/Maps/ISMiniMap.d.ts]
  /** @customConstructor ISMiniMapInner:new */
  export class ISMiniMapInner extends lua.client.ISUI.Maps.ISMiniMapInner {}
  /** @customConstructor ISMiniMapOuter:new */
  export class ISMiniMapOuter extends lua.client.ISUI.Maps.ISMiniMapOuter {}
  /** @customConstructor ISMiniMapTitleBar:new */
  export class ISMiniMapTitleBar extends lua.client.ISUI.Maps.ISMiniMapTitleBar {}
  export abstract class ISMiniMap extends lua.client.ISUI.Maps.ISMiniMap {}

  // [lua/client/ISUI/Maps/ISTextBoxMap.d.ts]
  /** @customConstructor ISTextBoxMap:new */
  export class ISTextBoxMap extends lua.client.ISUI.Maps.ISTextBoxMap {}

  // [lua/client/ISUI/Maps/ISWorldMap.d.ts]
  /** @customConstructor ISWorldMap:new */
  export class ISWorldMap extends lua.client.ISUI.Maps.ISWorldMap {}
  /** @customConstructor ISWorldMapButtonPanel:new */
  export class ISWorldMapButtonPanel extends lua.client.ISUI.Maps.ISWorldMapButtonPanel {}
  /** @customConstructor WorldMapOptions:new */
  export class WorldMapOptions extends lua.client.ISUI.Maps.WorldMapOptions {}

  // [lua/client/ISUI/Maps/ISWorldMapSymbols.d.ts]
  /** @customConstructor ISWorldMapSymbols:new */
  export class ISWorldMapSymbols extends lua.client.ISUI.Maps.ISWorldMapSymbols {}
  /** @customConstructor ISWorldMapSymbolTool:new */
  export class ISWorldMapSymbolTool extends lua.client.ISUI.Maps.ISWorldMapSymbolTool {}
  /** @customConstructor ISWorldMapSymbolTool_AddNote:new */
  export class ISWorldMapSymbolTool_AddNote extends lua.client.ISUI.Maps.ISWorldMapSymbolTool_AddNote {}
  /** @customConstructor ISWorldMapSymbolTool_AddSymbol:new */
  export class ISWorldMapSymbolTool_AddSymbol extends lua.client.ISUI.Maps.ISWorldMapSymbolTool_AddSymbol {}
  /** @customConstructor ISWorldMapSymbolTool_EditNote:new */
  export class ISWorldMapSymbolTool_EditNote extends lua.client.ISUI.Maps.ISWorldMapSymbolTool_EditNote {}
  /** @customConstructor ISWorldMapSymbolTool_MoveAnnotation:new */
  export class ISWorldMapSymbolTool_MoveAnnotation extends lua.client.ISUI.Maps.ISWorldMapSymbolTool_MoveAnnotation {}
  /** @customConstructor ISWorldMapSymbolTool_RemoveAnnotation:new */
  export class ISWorldMapSymbolTool_RemoveAnnotation extends lua.client.ISUI.Maps
    .ISWorldMapSymbolTool_RemoveAnnotation {}

  // [lua/client/ISUI/PlayerData/ISPlayerData.d.ts]
  export abstract class ISPlayerData extends lua.client.ISUI.PlayerData.ISPlayerData {}
  /** @noSelf */
  export const destroyAllPlayerData: () => any;

  // [lua/client/ISUI/PlayerData/ISPlayerDataObject.d.ts]
  /** @customConstructor ISPlayerDataObject:new */
  export class ISPlayerDataObject extends lua.client.ISUI.PlayerData.ISPlayerDataObject {}

  // [lua/client/ISUI/PlayerStats/ISPlayerStatsAddXPUI.d.ts]
  /** @customConstructor ISPlayerStatsAddXPUI:new */
  export class ISPlayerStatsAddXPUI extends lua.client.ISUI.PlayerStats.ISPlayerStatsAddXPUI {}

  // [lua/client/ISUI/PlayerStats/ISPlayerStatsChooseAccessLevel.d.ts]
  /** @customConstructor ISPlayerStatsChooseAccessLevelUI:new */
  export class ISPlayerStatsChooseAccessLevelUI extends lua.client.ISUI.PlayerStats.ISPlayerStatsChooseAccessLevelUI {}

  // [lua/client/ISUI/PlayerStats/ISPlayerStatsChooseProfessionUI.d.ts]
  /** @customConstructor ISPlayerStatsChooseProfessionUI:new */
  export class ISPlayerStatsChooseProfessionUI extends lua.client.ISUI.PlayerStats.ISPlayerStatsChooseProfessionUI {}

  // [lua/client/ISUI/PlayerStats/ISPlayerStatsChooseTraitUI.d.ts]
  /** @customConstructor ISPlayerStatsChooseTraitUI:new */
  export class ISPlayerStatsChooseTraitUI extends lua.client.ISUI.PlayerStats.ISPlayerStatsChooseTraitUI {}

  // [lua/client/ISUI/PlayerStats/ISPlayerStatsManageInvUI.d.ts]
  /** @customConstructor ISPlayerStatsManageInvUI:new */
  export class ISPlayerStatsManageInvUI extends lua.client.ISUI.PlayerStats.ISPlayerStatsManageInvUI {}

  // [lua/client/ISUI/PlayerStats/ISPlayerStatsUI.d.ts]
  /** @customConstructor ISPlayerStatsUI:new */
  export class ISPlayerStatsUI extends lua.client.ISUI.PlayerStats.ISPlayerStatsUI {}

  // [lua/client/ISUI/PlayerStats/ISPlayerStatsUserlogUI.d.ts]
  /** @customConstructor ISPlayerStatsUserlogUI:new */
  export class ISPlayerStatsUserlogUI extends lua.client.ISUI.PlayerStats.ISPlayerStatsUserlogUI {}

  // [lua/client/ISUI/PlayerStats/ISPlayerStatsWarningPointUI.d.ts]
  /** @customConstructor ISPlayerStatsWarningPointUI:new */
  export class ISPlayerStatsWarningPointUI extends lua.client.ISUI.PlayerStats.ISPlayerStatsWarningPointUI {}

  // [lua/client/ISUI/RichTextLayout.d.ts]
  /** @customConstructor ISRichTextLayout:new */
  export class ISRichTextLayout extends lua.client.ISUI.ISRichTextLayout {}

  // [lua/client/ISUI/SpeedControlsHandler.d.ts]
  export abstract class SpeedControlsHandler extends lua.client.ISUI.SpeedControlsHandler {}

  // [lua/client/ISUI/UserPanel/ISCreateFactionTagUI.d.ts]
  /** @customConstructor ISCreateFactionTagUI:new */
  export class ISCreateFactionTagUI extends lua.client.ISUI.UserPanel.ISCreateFactionTagUI {}

  // [lua/client/ISUI/UserPanel/ISCreateFactionUI.d.ts]
  /** @customConstructor ISCreateFactionUI:new */
  export class ISCreateFactionUI extends lua.client.ISUI.UserPanel.ISCreateFactionUI {}

  // [lua/client/ISUI/UserPanel/ISFactionAddPlayerUI.d.ts]
  /** @customConstructor ISFactionAddPlayerUI:new */
  export class ISFactionAddPlayerUI extends lua.client.ISUI.UserPanel.ISFactionAddPlayerUI {}

  // [lua/client/ISUI/UserPanel/ISFactionUI.d.ts]
  /** @customConstructor ISFactionUI:new */
  export class ISFactionUI extends lua.client.ISUI.UserPanel.ISFactionUI {}

  // [lua/client/ISUI/UserPanel/ISSafehouseAddPlayerUI.d.ts]
  /** @customConstructor ISSafehouseAddPlayerUI:new */
  export class ISSafehouseAddPlayerUI extends lua.client.ISUI.UserPanel.ISSafehouseAddPlayerUI {}

  // [lua/client/ISUI/UserPanel/ISSafehouseUI.d.ts]
  /** @customConstructor ISSafehouseUI:new */
  export class ISSafehouseUI extends lua.client.ISUI.UserPanel.ISSafehouseUI {}

  // [lua/client/ISUI/UserPanel/ISTicketsUI.d.ts]
  /** @customConstructor ISTicketsUI:new */
  export class ISTicketsUI extends lua.client.ISUI.UserPanel.ISTicketsUI {}

  // [lua/client/ISUI/UserPanel/ISUserPanelUI.d.ts]
  /** @customConstructor ISUserPanelUI:new */
  export class ISUserPanelUI extends lua.client.ISUI.UserPanel.ISUserPanelUI {}

  // [lua/client/ISUI/ZombiePopulationWindow.d.ts]
  /** @customConstructor ZombiePopulationWindow:new */
  export class ZombiePopulationWindow extends lua.client.ISUI.ZombiePopulationWindow {}
  /** @noSelf */
  export const newZombiePopulationWindow: () => any;

  // [lua/client/JoyPad/ISJoypadDebugUI.d.ts]
  /** @customConstructor ISJoypadDebugUI:new */
  export class ISJoypadDebugUI extends lua.client.JoyPad.ISJoypadDebugUI {}

  // [lua/client/JoyPad/ISJoypadDisconnectedUI.d.ts]
  /** @customConstructor ISJoypadDisconnectedUI:new */
  export class ISJoypadDisconnectedUI extends lua.client.JoyPad.ISJoypadDisconnectedUI {}

  // [lua/client/JoyPad/ISJoyPadListBox.d.ts]
  /** @customConstructor ISJoypadListBox:new */
  export class ISJoypadListBox extends lua.client.JoyPad.ISJoypadListBox {}

  // [lua/client/LastStand/AReallyCDDAy.d.ts]
  export abstract class CDDA extends lua.client.LastStand.CDDA {}

  // [lua/client/LastStand/AStormIsComing.d.ts]
  export abstract class AStormIsComing extends lua.client.LastStand.AStormIsComing {}

  // [lua/client/LastStand/Challenge1.d.ts]
  export abstract class Challenge1 extends lua.client.LastStand.Challenge1 {}

  // [lua/client/LastStand/Challenge2.d.ts]
  export abstract class Challenge2 extends lua.client.LastStand.Challenge2 {}

  // [lua/client/LastStand/EightMonthsLater.d.ts]
  export abstract class EightMonthsLater extends lua.client.LastStand.EightMonthsLater {}

  // [lua/client/LastStand/Insomnia.d.ts]
  export abstract class InsomniaChallenge extends lua.client.LastStand.InsomniaChallenge {}
  /** @noSelf */
  export const injectInsomnia: () => any;
  /** @noSelf */
  export const removeInsomnia: () => any;

  // [lua/client/LastStand/ISUI/ISChallenge2PlayerUpWindow.d.ts]
  /** @customConstructor ISChallenge2PlayerUpWindow:new */
  export class ISChallenge2PlayerUpWindow extends lua.client.LastStand.ISUI.ISChallenge2PlayerUpWindow {}

  // [lua/client/LastStand/ISUI/ISChallenge2UpgradeTab.d.ts]
  /** @customConstructor ISChallenge2UpgradeTab:new */
  export class ISChallenge2UpgradeTab extends lua.client.LastStand.ISUI.ISChallenge2UpgradeTab {}

  // [lua/client/LastStand/ISUI/ISChallenge2VariousItemWindow.d.ts]
  /** @customConstructor ISChallenge2VariousItemWindow:new */
  export class ISChallenge2VariousItemWindow extends lua.client.LastStand.ISUI.ISChallenge2VariousItemWindow {}

  // [lua/client/LastStand/ISUI/ISChallenge2WeaponRepairWindow.d.ts]
  /** @customConstructor ISChallenge2WeaponRepairWindow:new */
  export class ISChallenge2WeaponRepairWindow extends lua.client.LastStand.ISUI.ISChallenge2WeaponRepairWindow {}

  // [lua/client/LastStand/ISUI/ISChallenge2WeaponUpWindow.d.ts]
  /** @customConstructor ISChallenge2WeaponUpWindow:new */
  export class ISChallenge2WeaponUpWindow extends lua.client.LastStand.ISUI.ISChallenge2WeaponUpWindow {}

  // [lua/client/LastStand/Kingsmouth.d.ts]
  export abstract class Kingsmouth extends lua.client.LastStand.Kingsmouth {}

  // [lua/client/LastStand/LastStandPlayerFile.d.ts]
  export abstract class LastStandPlayerFile extends lua.client.LastStand.LastStandPlayerFile {}

  // [lua/client/LastStand/LastStandSetup.d.ts]
  export abstract class LastStandData extends lua.client.LastStand.LastStandData {}
  /** @noSelf */
  export const doLastStandDraw: () => any;
  /** @noSelf */
  export const doLastStandInit: () => any;
  /** @noSelf */
  export const preLoadLastStandInit: () => any;

  // [lua/client/LastStand/OpeningHours.d.ts]
  export abstract class OpeningHours extends lua.client.LastStand.OpeningHours {}

  // [lua/client/LastStand/Studio.d.ts]
  export abstract class Studio extends lua.client.LastStand.Studio {}

  // [lua/client/LastStand/TheDescendingFog.d.ts]
  export abstract class TheDescendingFog extends lua.client.LastStand.TheDescendingFog {}

  // [lua/client/LastStand/WinterIsComing.d.ts]
  export abstract class WinterIsComing extends lua.client.LastStand.WinterIsComing {}

  // [lua/client/LastStand/YouHaveOneDay.d.ts]
  export abstract class YouHaveOneDay extends lua.client.LastStand.YouHaveOneDay {}

  // [lua/client/Map/CGlobalObject.d.ts]
  /** @customConstructor CGlobalObject:new */
  export class CGlobalObject extends lua.client.Map.CGlobalObject {}

  // [lua/client/Map/CGlobalObjectSystem.d.ts]
  /** @customConstructor CGlobalObjectSystem:new */
  export class CGlobalObjectSystem extends lua.client.Map.CGlobalObjectSystem {}

  // [lua/client/MetalDrum/CMetalDrumGlobalObject.d.ts]
  /** @customConstructor CMetalDrumGlobalObject:new */
  export class CMetalDrumGlobalObject extends lua.client.MetalDrum.CMetalDrumGlobalObject {}

  // [lua/client/MetalDrum/CMetalDrumSystem.d.ts]
  /** @customConstructor CMetalDrumSystem:new */
  export class CMetalDrumSystem extends lua.client.MetalDrum.CMetalDrumSystem {}

  // [lua/client/Moveables/ISMoveableDefinitions.d.ts]
  export abstract class ISMoveableDefinitions extends lua.client.Moveables.ISMoveableDefinitions {}

  // [lua/client/Moveables/ISMoveablesAction.d.ts]
  /** @customConstructor ISMoveablesAction:new */
  export class ISMoveablesAction extends lua.client.Moveables.ISMoveablesAction {}

  // [lua/client/Moveables/ISMoveablesIconToolTip.d.ts]
  /** @customConstructor ISMoveablesIconToolTip:new */
  export class ISMoveablesIconToolTip extends lua.client.Moveables.ISMoveablesIconToolTip {}

  // [lua/client/Moveables/ISMoveableSpriteProps.d.ts]
  export abstract class InfoPanelFlags extends lua.client.Moveables.InfoPanelFlags {}
  export abstract class ISMoveableSpriteProps extends lua.client.Moveables.ISMoveableSpriteProps {}
  export abstract class ISThumpableSpriteProps extends lua.client.Moveables.ISThumpableSpriteProps {}
  export abstract class SpriteGridCache extends lua.client.Moveables.SpriteGridCache {}

  // [lua/client/Moveables/ISMoveableTools.d.ts]
  export abstract class ISMoveableTools extends lua.client.Moveables.ISMoveableTools {}

  // [lua/client/Music/MusicChoices.d.ts]
  export abstract class MusicChoices extends lua.client.Music.MusicChoices {}

  // [lua/client/NPCs/UI/CharacterInfoPage.d.ts]
  /** @customConstructor CharacterInfoPage:new */
  export class CharacterInfoPage extends lua.client.NPCs.UI.CharacterInfoPage {}

  // [lua/client/NPCs/UI/TeamOverview.d.ts]
  /** @customConstructor TeamOverview:new */
  export class TeamOverview extends lua.client.NPCs.UI.TeamOverview {}

  // [lua/client/NPCs/UI/TeamPicker.d.ts]
  /** @customConstructor TeamPicker:new */
  export class TeamPicker extends lua.client.NPCs.UI.TeamPicker {}

  // [lua/client/OptionScreens/BootstrapConnectPopup.d.ts]
  /** @customConstructor BootstrapConnectPopup:new */
  export class BootstrapConnectPopup extends lua.client.OptionScreens.BootstrapConnectPopup {}

  // [lua/client/OptionScreens/CharacterCreationHeader.d.ts]
  /** @customConstructor CharacterCreationHeader:new */
  export class CharacterCreationHeader extends lua.client.OptionScreens.CharacterCreationHeader {}

  // [lua/client/OptionScreens/CharacterCreationMain.d.ts]
  /** @customConstructor CharacterCreationMain:new */
  export class CharacterCreationMain extends lua.client.OptionScreens.CharacterCreationMain {}
  /** @customConstructor CharacterCreationMainCharacterPanel:new */
  export class CharacterCreationMainCharacterPanel extends lua.client.OptionScreens
    .CharacterCreationMainCharacterPanel {}
  /** @customConstructor CharacterCreationMainPresetPanel:new */
  export class CharacterCreationMainPresetPanel extends lua.client.OptionScreens.CharacterCreationMainPresetPanel {}

  // [lua/client/OptionScreens/CharacterCreationProfession.d.ts]
  /** @customConstructor CharacterCreationProfession:new */
  export class CharacterCreationProfession extends lua.client.OptionScreens.CharacterCreationProfession {}
  export abstract class BCRC extends lua.client.OptionScreens.BCRC {}

  // [lua/client/OptionScreens/ConnectToServer.d.ts]
  /** @customConstructor ConnectToServer:new */
  export class ConnectToServer extends lua.client.OptionScreens.ConnectToServer {}

  // [lua/client/OptionScreens/CoopCharacterCreation.d.ts]
  /** @customConstructor CoopCharacterCreation:new */
  export class CoopCharacterCreation extends lua.client.OptionScreens.CoopCharacterCreation {}

  // [lua/client/OptionScreens/CoopCharacterCreationMain.d.ts]
  /** @customConstructor CoopCharacterCreationMain:new */
  export class CoopCharacterCreationMain extends lua.client.OptionScreens.CoopCharacterCreationMain {}

  // [lua/client/OptionScreens/CoopCharacterCreationProfession.d.ts]
  /** @customConstructor CoopCharacterCreationProfession:new */
  export class CoopCharacterCreationProfession extends lua.client.OptionScreens.CoopCharacterCreationProfession {}

  // [lua/client/OptionScreens/CoopMapSpawnSelect.d.ts]
  /** @customConstructor CoopMapSpawnSelect:new */
  export class CoopMapSpawnSelect extends lua.client.OptionScreens.CoopMapSpawnSelect {}

  // [lua/client/OptionScreens/CoopOptionsScreen.d.ts]
  /** @customConstructor CoopOptionsScreen:new */
  export class CoopOptionsScreen extends lua.client.OptionScreens.CoopOptionsScreen {}
  /** @customConstructor CoopOptionsScreenPanel:new */
  export class CoopOptionsScreenPanel extends lua.client.OptionScreens.CoopOptionsScreenPanel {}
  export abstract class CoopConnection extends lua.client.OptionScreens.CoopConnection {}

  // [lua/client/OptionScreens/CoopUserName.d.ts]
  /** @customConstructor CoopUserName:new */
  export class CoopUserName extends lua.client.OptionScreens.CoopUserName {}

  // [lua/client/OptionScreens/InviteFriends.d.ts]
  /** @customConstructor InviteFriends:new */
  export class InviteFriends extends lua.client.OptionScreens.InviteFriends {}

  // [lua/client/OptionScreens/ISGameSounds.d.ts]
  /** @customConstructor ISGameSounds:new */
  export class ISGameSounds extends lua.client.OptionScreens.ISGameSounds {}

  // [lua/client/OptionScreens/ISModsNagPanel.d.ts]
  /** @customConstructor ISModsNagPanel:new */
  export class ISModsNagPanel extends lua.client.OptionScreens.ISModsNagPanel {}

  // [lua/client/OptionScreens/ISScoreboard.d.ts]
  /** @customConstructor ISScoreboard:new */
  export class ISScoreboard extends lua.client.OptionScreens.ISScoreboard {}

  // [lua/client/OptionScreens/LastStandChallenge.d.ts]
  export abstract class LastStandChallenge extends lua.client.OptionScreens.LastStandChallenge {}

  // [lua/client/OptionScreens/LastStandPlayerSelect.d.ts]
  /** @customConstructor LastStandPlayerSelect:new */
  export class LastStandPlayerSelect extends lua.client.OptionScreens.LastStandPlayerSelect {}

  // [lua/client/OptionScreens/LoadGameScreen.d.ts]
  /** @customConstructor LoadGameScreen:new */
  export class LoadGameScreen extends lua.client.OptionScreens.LoadGameScreen {}
  /** @noSelf */
  export const LoadGameScreen_onModsModified: () => any;

  // [lua/client/OptionScreens/LoginScreen.d.ts]
  /** @customConstructor LoginScreen:new */
  export class LoginScreen extends lua.client.OptionScreens.LoginScreen {}
  /** @noSelf */
  export const deleteLoginScreen: () => any;

  // [lua/client/OptionScreens/MainOptions.d.ts]
  /** @customConstructor MainOptions:new */
  export class MainOptions extends lua.client.OptionScreens.MainOptions {}

  // [lua/client/OptionScreens/MainScreen.d.ts]
  /** @customConstructor MainScreen:new */
  export class MainScreen extends lua.client.OptionScreens.MainScreen {}

  // [lua/client/OptionScreens/MapSpawnSelect.d.ts]
  /** @customConstructor MapSpawnSelect:new */
  export class MapSpawnSelect extends lua.client.OptionScreens.MapSpawnSelect {}
  /** @customConstructor MapSpawnSelectInfoPanel:new */
  export class MapSpawnSelectInfoPanel extends lua.client.OptionScreens.MapSpawnSelectInfoPanel {}
  /** @customConstructor MapSpawnSelectListBox:new */
  export class MapSpawnSelectListBox extends lua.client.OptionScreens.MapSpawnSelectListBox {}

  // [lua/client/OptionScreens/ModMoreInfo.d.ts]
  /** @customConstructor ModMoreInfo:new */
  export class ModMoreInfo extends lua.client.OptionScreens.ModMoreInfo {}

  // [lua/client/OptionScreens/ModOrderUI.d.ts]
  /** @customConstructor ModOrderUI:new */
  export class ModOrderUI extends lua.client.OptionScreens.ModOrderUI {}

  // [lua/client/OptionScreens/ModSelector.d.ts]
  /** @customConstructor ModInfoPanel:new */
  export class ModInfoPanel extends lua.client.OptionScreens.ModInfoPanel {}
  /** @customConstructor ModListBox:new */
  export class ModListBox extends lua.client.OptionScreens.ModListBox {}
  /** @customConstructor ModPosterPanel:new */
  export class ModPosterPanel extends lua.client.OptionScreens.ModPosterPanel {}
  /** @customConstructor ModSelector:new */
  export class ModSelector extends lua.client.OptionScreens.ModSelector {}
  /** @customConstructor ModThumbnailPanel:new */
  export class ModThumbnailPanel extends lua.client.OptionScreens.ModThumbnailPanel {}
  /** @noSelf */
  export const ModSelector_onModsModified: () => any;

  // [lua/client/OptionScreens/NewGameScreen.d.ts]
  /** @customConstructor NewGameScreen:new */
  export class NewGameScreen extends lua.client.OptionScreens.NewGameScreen {}

  // [lua/client/OptionScreens/PublicServerList.d.ts]
  /** @customConstructor PublicServerList:new */
  export class PublicServerList extends lua.client.OptionScreens.PublicServerList {}

  // [lua/client/OptionScreens/SandboxOptions.d.ts]
  /** @customConstructor SandboxOptionsScreen:new */
  export class SandboxOptionsScreen extends lua.client.OptionScreens.SandboxOptionsScreen {}

  // [lua/client/OptionScreens/ServerConnectPopup.d.ts]
  /** @customConstructor ServerConnectPopup:new */
  export class ServerConnectPopup extends lua.client.OptionScreens.ServerConnectPopup {}

  // [lua/client/OptionScreens/ServerList.d.ts]
  /** @customConstructor ServerList:new */
  export class ServerList extends lua.client.OptionScreens.ServerList {}

  // [lua/client/OptionScreens/ServerSettingsScreen.d.ts]
  /** @customConstructor BaseServerSettingsPanel:new */
  export class BaseServerSettingsPanel extends lua.client.OptionScreens.BaseServerSettingsPanel {}
  /** @customConstructor ServerSettingsScreen:new */
  export class ServerSettingsScreen extends lua.client.OptionScreens.ServerSettingsScreen {}
  /** @customConstructor SpawnRegionsNameFilePanel:new */
  export class SpawnRegionsNameFilePanel extends lua.client.OptionScreens.SpawnRegionsNameFilePanel {}
  export abstract class DefaultServerSettings extends lua.client.OptionScreens.DefaultServerSettings {}

  // [lua/client/OptionScreens/ServerToolbox.d.ts]
  /** @customConstructor ServerToolbox:new */
  export class ServerToolbox extends lua.client.OptionScreens.ServerToolbox {}

  // [lua/client/OptionScreens/ServerWorkshopItemScreen.d.ts]
  /** @customConstructor ServerWorkshopItemScreen:new */
  export class ServerWorkshopItemScreen extends lua.client.OptionScreens.ServerWorkshopItemScreen {}

  // [lua/client/OptionScreens/WorkshopSubmitScreen.d.ts]
  /** @customConstructor WorkshopSubmitScreen:new */
  export class WorkshopSubmitScreen extends lua.client.OptionScreens.WorkshopSubmitScreen {}

  // [lua/client/OptionScreens/WorldSelect.d.ts]
  /** @customConstructor WorldSelect:new */
  export class WorldSelect extends lua.client.OptionScreens.WorldSelect {}

  // [lua/client/RadioCom/ISRadioAction.d.ts]
  /** @customConstructor ISRadioAction:new */
  export class ISRadioAction extends lua.client.RadioCom.ISRadioAction {}

  // [lua/client/RadioCom/ISRadioInteractions.d.ts]
  export abstract class ISRadioInteractions extends lua.client.RadioCom.ISRadioInteractions {}

  // [lua/client/RadioCom/ISRadioWindow.d.ts]
  /** @customConstructor ISRadioWindow:new */
  export class ISRadioWindow extends lua.client.RadioCom.ISRadioWindow {}

  // [lua/client/RadioCom/ISUIRadio/ISBatteryStatusDisplay.d.ts]
  /** @customConstructor ISBatteryStatusDisplay:new */
  export class ISBatteryStatusDisplay extends lua.client.RadioCom.ISUIRadio.ISBatteryStatusDisplay {}

  // [lua/client/RadioCom/ISUIRadio/ISItemDropBox.d.ts]
  /** @customConstructor ISItemDropBox:new */
  export class ISItemDropBox extends lua.client.RadioCom.ISUIRadio.ISItemDropBox {}

  // [lua/client/RadioCom/ISUIRadio/ISLedLight.d.ts]
  /** @customConstructor ISLedLight:new */
  export class ISLedLight extends lua.client.RadioCom.ISUIRadio.ISLedLight {}

  // [lua/client/RadioCom/ISUIRadio/ISSineWaveDisplay.d.ts]
  /** @customConstructor ISSineWaveDisplay:new */
  export class ISSineWaveDisplay extends lua.client.RadioCom.ISUIRadio.ISSineWaveDisplay {}

  // [lua/client/RadioCom/ISUIRadio/ISSliderPanel.d.ts]
  /** @customConstructor ISSliderPanel:new */
  export class ISSliderPanel extends lua.client.RadioCom.ISUIRadio.ISSliderPanel {}

  // [lua/client/RadioCom/ISUIRadio/ISSpeakerButton.d.ts]
  /** @customConstructor ISSpeakerButton:new */
  export class ISSpeakerButton extends lua.client.RadioCom.ISUIRadio.ISSpeakerButton {}

  // [lua/client/RadioCom/ISUIRadio/ISVolumeBar.d.ts]
  /** @customConstructor ISVolumeBar:new */
  export class ISVolumeBar extends lua.client.RadioCom.ISUIRadio.ISVolumeBar {}

  // [lua/client/RadioCom/RadioWindowModules/RWM.d.ts]
  /** @customConstructor RWM:new */
  export class RWM extends lua.client.RadioCom.RadioWindowModules.RWM {}

  // [lua/client/RadioCom/RadioWindowModules/RWMChannel.d.ts]
  /** @customConstructor RWMChannel:new */
  export class RWMChannel extends lua.client.RadioCom.RadioWindowModules.RWMChannel {}

  // [lua/client/RadioCom/RadioWindowModules/RWMChannelTV.d.ts]
  /** @customConstructor RWMChannelTV:new */
  export class RWMChannelTV extends lua.client.RadioCom.RadioWindowModules.RWMChannelTV {}

  // [lua/client/RadioCom/RadioWindowModules/RWMElement.d.ts]
  /** @customConstructor RWMElement:new */
  export class RWMElement extends lua.client.RadioCom.RadioWindowModules.RWMElement {}

  // [lua/client/RadioCom/RadioWindowModules/RWMGeneral.d.ts]
  /** @customConstructor RWMGeneral:new */
  export class RWMGeneral extends lua.client.RadioCom.RadioWindowModules.RWMGeneral {}

  // [lua/client/RadioCom/RadioWindowModules/RWMGridPower.d.ts]
  /** @customConstructor RWMGridPower:new */
  export class RWMGridPower extends lua.client.RadioCom.RadioWindowModules.RWMGridPower {}

  // [lua/client/RadioCom/RadioWindowModules/RWMMedia.d.ts]
  /** @customConstructor RWMMedia:new */
  export class RWMMedia extends lua.client.RadioCom.RadioWindowModules.RWMMedia {}

  // [lua/client/RadioCom/RadioWindowModules/RWMMicrophone.d.ts]
  /** @customConstructor RWMMicrophone:new */
  export class RWMMicrophone extends lua.client.RadioCom.RadioWindowModules.RWMMicrophone {}

  // [lua/client/RadioCom/RadioWindowModules/RWMPanel.d.ts]
  /** @customConstructor RWMPanel:new */
  export class RWMPanel extends lua.client.RadioCom.RadioWindowModules.RWMPanel {}

  // [lua/client/RadioCom/RadioWindowModules/RWMPower.d.ts]
  /** @customConstructor RWMPower:new */
  export class RWMPower extends lua.client.RadioCom.RadioWindowModules.RWMPower {}

  // [lua/client/RadioCom/RadioWindowModules/RWMSignal.d.ts]
  /** @customConstructor RWMSignal:new */
  export class RWMSignal extends lua.client.RadioCom.RadioWindowModules.RWMSignal {}

  // [lua/client/RadioCom/RadioWindowModules/RWMSubEditPreset.d.ts]
  /** @customConstructor RWMSubEditPreset:new */
  export class RWMSubEditPreset extends lua.client.RadioCom.RadioWindowModules.RWMSubEditPreset {}

  // [lua/client/RadioCom/RadioWindowModules/RWMTestPane.d.ts]
  /** @customConstructor RWMTestPane:new */
  export class RWMTestPane extends lua.client.RadioCom.RadioWindowModules.RWMTestPane {}

  // [lua/client/RadioCom/RadioWindowModules/RWMVolume.d.ts]
  /** @customConstructor RWMVolume:new */
  export class RWMVolume extends lua.client.RadioCom.RadioWindowModules.RWMVolume {}

  // [lua/client/RadioCom/StoryLineSounds/ISSLEvent.d.ts]
  /** @customConstructor ISSLEvent:new */
  export class ISSLEvent extends lua.client.RadioCom.StoryLineSounds.ISSLEvent {}

  // [lua/client/RadioCom/StoryLineSounds/ISSLFrame.d.ts]
  /** @customConstructor ISSLFrame:new */
  export class ISSLFrame extends lua.client.RadioCom.StoryLineSounds.ISSLFrame {}

  // [lua/client/RadioCom/StoryLineSounds/ISSLManager.d.ts]
  /** @customConstructor ISSLManager:new */
  export class ISSLManager extends lua.client.RadioCom.StoryLineSounds.ISSLManager {}

  // [lua/client/RadioCom/StoryLineSounds/ISSLSounds.d.ts]
  /** @customConstructor ISSLSounds:new */
  export class ISSLSounds extends lua.client.RadioCom.StoryLineSounds.ISSLSounds {}

  // [lua/client/RadioCom/StoryLineSounds/StorySoundDebug.d.ts]
  /** @customConstructor ISStorySoundsDebug:new */
  export class ISStorySoundsDebug extends lua.client.RadioCom.StoryLineSounds.ISStorySoundsDebug {}

  // [lua/client/RainBarrel/CRainBarrelGlobalObject.d.ts]
  /** @customConstructor CRainBarrelGlobalObject:new */
  export class CRainBarrelGlobalObject extends lua.client.RainBarrel.CRainBarrelGlobalObject {}

  // [lua/client/RainBarrel/CRainBarrelSystem.d.ts]
  /** @customConstructor CRainBarrelSystem:new */
  export class CRainBarrelSystem extends lua.client.RainBarrel.CRainBarrelSystem {}

  // [lua/client/RecordedMedia/ISMediaInfo.d.ts]
  /** @customConstructor ISMediaInfo:new */
  export class ISMediaInfo extends lua.client.RecordedMedia.ISMediaInfo {}

  // [lua/client/Seasons/ISUI/ISWeather.d.ts]
  /** @customConstructor ISWeather:new */
  export class ISWeather extends lua.client.Seasons.ISUI.ISWeather {}

  // [lua/client/SurvivalGuide/ISTutorialPageInfo.d.ts]
  /** @customConstructor ISTutorialPageInfo:new */
  export class ISTutorialPageInfo extends lua.client.SurvivalGuide.ISTutorialPageInfo {}
  /** @customConstructor ISTutorialSetInfo:new */
  export class ISTutorialSetInfo extends lua.client.SurvivalGuide.ISTutorialSetInfo {}

  // [lua/client/SurvivalGuide/ISTutorialPanel.d.ts]
  /** @customConstructor ISSurvivalGuideListBox:new */
  export class ISSurvivalGuideListBox extends lua.client.SurvivalGuide.ISSurvivalGuideListBox {}
  /** @customConstructor ISSurvivalGuideRichText:new */
  export class ISSurvivalGuideRichText extends lua.client.SurvivalGuide.ISSurvivalGuideRichText {}
  /** @customConstructor ISSurvivalGuideRightPanel:new */
  export class ISSurvivalGuideRightPanel extends lua.client.SurvivalGuide.ISSurvivalGuideRightPanel {}
  /** @customConstructor ISTutorialPanel:new */
  export class ISTutorialPanel extends lua.client.SurvivalGuide.ISTutorialPanel {}

  // [lua/client/SurvivalGuide/SurvivalGuideEntries.d.ts]
  export abstract class SurvivalGuideEntries extends lua.client.SurvivalGuide.SurvivalGuideEntries {}

  // [lua/client/SurvivalGuide/SurvivalGuideManager.d.ts]
  /** @customConstructor SurvivalGuideManager:new */
  export class SurvivalGuideManager extends lua.client.SurvivalGuide.SurvivalGuideManager {}
  /** @noSelf */
  export const doSurvivalGuide: () => any;

  // [lua/client/Tests/MapObjectTests.d.ts]
  /** @noSelf */
  export const MapObjectTestCampfire: () => any;
  /** @noSelf */
  export const MapObjectTestFarming: () => any;
  /** @noSelf */
  export const MapObjectTestRainBarrel: () => any;

  // [lua/client/Tests/RecipeTests.d.ts]
  /** @noSelf */
  export const RecipeTestAll: () => any;
  /** @noSelf */
  export const RecipeTestAvailableItems: () => any;
  /** @noSelf */
  export const RecipeTestNumberOfTimes: () => any;
  /** @noSelf */
  export const RecipeTestSelectedItem: () => any;

  // [lua/client/Tests/RecipeUtils.d.ts]
  export abstract class RecipeUtils extends lua.client.Tests.RecipeUtils {}

  // [lua/client/Tests/TimedActionsTests.d.ts]
  export abstract class TimedActionTests extends lua.client.Tests.TimedActionTests {}

  // [lua/client/TimedActions/ISActivateCarBatteryChargerAction.d.ts]
  /** @customConstructor ISActivateCarBatteryChargerAction:new */
  export class ISActivateCarBatteryChargerAction extends lua.client.TimedActions.ISActivateCarBatteryChargerAction {}

  // [lua/client/TimedActions/ISActivateGenerator.d.ts]
  /** @customConstructor ISActivateGenerator:new */
  export class ISActivateGenerator extends lua.client.TimedActions.ISActivateGenerator {}

  // [lua/client/TimedActions/ISAddCompost.d.ts]
  /** @customConstructor ISAddCompost:new */
  export class ISAddCompost extends lua.client.TimedActions.ISAddCompost {}

  // [lua/client/TimedActions/ISAddFuel.d.ts]
  /** @customConstructor ISAddFuel:new */
  export class ISAddFuel extends lua.client.TimedActions.ISAddFuel {}

  // [lua/client/TimedActions/ISAddItemInRecipe.d.ts]
  /** @customConstructor ISAddItemInRecipe:new */
  export class ISAddItemInRecipe extends lua.client.TimedActions.ISAddItemInRecipe {}

  // [lua/client/TimedActions/ISAddSheetAction.d.ts]
  /** @customConstructor ISAddSheetAction:new */
  export class ISAddSheetAction extends lua.client.TimedActions.ISAddSheetAction {}

  // [lua/client/TimedActions/ISAddSheetRope.d.ts]
  /** @customConstructor ISAddSheetRope:new */
  export class ISAddSheetRope extends lua.client.TimedActions.ISAddSheetRope {}

  // [lua/client/TimedActions/ISAddWaterFromItemAction.d.ts]
  /** @customConstructor ISAddWaterFromItemAction:new */
  export class ISAddWaterFromItemAction extends lua.client.TimedActions.ISAddWaterFromItemAction {}

  // [lua/client/TimedActions/ISApplyBandage.d.ts]
  /** @customConstructor ISApplyBandage:new */
  export class ISApplyBandage extends lua.client.TimedActions.ISApplyBandage {}

  // [lua/client/TimedActions/ISAttachItemHotbar.d.ts]
  /** @customConstructor ISAttachItemHotbar:new */
  export class ISAttachItemHotbar extends lua.client.TimedActions.ISAttachItemHotbar {}

  // [lua/client/TimedActions/ISBarricadeAction.d.ts]
  /** @customConstructor ISBarricadeAction:new */
  export class ISBarricadeAction extends lua.client.TimedActions.ISBarricadeAction {}

  // [lua/client/TimedActions/ISBBQAddFuel.d.ts]
  /** @customConstructor ISBBQAddFuel:new */
  export class ISBBQAddFuel extends lua.client.TimedActions.ISBBQAddFuel {}

  // [lua/client/TimedActions/ISBBQExtinguish.d.ts]
  /** @customConstructor ISBBQExtinguish:new */
  export class ISBBQExtinguish extends lua.client.TimedActions.ISBBQExtinguish {}

  // [lua/client/TimedActions/ISBBQInfoAction.d.ts]
  /** @customConstructor ISBBQInfoAction:new */
  export class ISBBQInfoAction extends lua.client.TimedActions.ISBBQInfoAction {}

  // [lua/client/TimedActions/ISBBQInsertPropaneTank.d.ts]
  /** @customConstructor ISBBQInsertPropaneTank:new */
  export class ISBBQInsertPropaneTank extends lua.client.TimedActions.ISBBQInsertPropaneTank {}

  // [lua/client/TimedActions/ISBBQLightFromKindle.d.ts]
  /** @customConstructor ISBBQLightFromKindle:new */
  export class ISBBQLightFromKindle extends lua.client.TimedActions.ISBBQLightFromKindle {}

  // [lua/client/TimedActions/ISBBQLightFromLiterature.d.ts]
  /** @customConstructor ISBBQLightFromLiterature:new */
  export class ISBBQLightFromLiterature extends lua.client.TimedActions.ISBBQLightFromLiterature {}

  // [lua/client/TimedActions/ISBBQLightFromPetrol.d.ts]
  /** @customConstructor ISBBQLightFromPetrol:new */
  export class ISBBQLightFromPetrol extends lua.client.TimedActions.ISBBQLightFromPetrol {}

  // [lua/client/TimedActions/ISBBQRemovePropaneTank.d.ts]
  /** @customConstructor ISBBQRemovePropaneTank:new */
  export class ISBBQRemovePropaneTank extends lua.client.TimedActions.ISBBQRemovePropaneTank {}

  // [lua/client/TimedActions/ISBBQToggle.d.ts]
  /** @customConstructor ISBBQToggle:new */
  export class ISBBQToggle extends lua.client.TimedActions.ISBBQToggle {}

  // [lua/client/TimedActions/ISBurnCorpseAction.d.ts]
  /** @customConstructor ISBurnCorpseAction:new */
  export class ISBurnCorpseAction extends lua.client.TimedActions.ISBurnCorpseAction {}

  // [lua/client/TimedActions/ISBuryCorpse.d.ts]
  /** @customConstructor ISBuryCorpse:new */
  export class ISBuryCorpse extends lua.client.TimedActions.ISBuryCorpse {}

  // [lua/client/TimedActions/ISCampingInfoAction.d.ts]
  /** @customConstructor ISCampingInfoAction:new */
  export class ISCampingInfoAction extends lua.client.TimedActions.ISCampingInfoAction {}

  // [lua/client/TimedActions/ISChopTreeAction.d.ts]
  /** @customConstructor ISChopTreeAction:new */
  export class ISChopTreeAction extends lua.client.TimedActions.ISChopTreeAction {}

  // [lua/client/TimedActions/ISCleanBandage.d.ts]
  /** @customConstructor ISCleanBandage:new */
  export class ISCleanBandage extends lua.client.TimedActions.ISCleanBandage {}

  // [lua/client/TimedActions/ISCleanBlood.d.ts]
  /** @customConstructor ISCleanBlood:new */
  export class ISCleanBlood extends lua.client.TimedActions.ISCleanBlood {}

  // [lua/client/TimedActions/ISCleanBurn.d.ts]
  /** @customConstructor ISCleanBurn:new */
  export class ISCleanBurn extends lua.client.TimedActions.ISCleanBurn {}

  // [lua/client/TimedActions/ISClearAshes.d.ts]
  /** @customConstructor ISClearAshes:new */
  export class ISClearAshes extends lua.client.TimedActions.ISClearAshes {}

  // [lua/client/TimedActions/ISClimbOverFence.d.ts]
  /** @customConstructor ISClimbOverFence:new */
  export class ISClimbOverFence extends lua.client.TimedActions.ISClimbOverFence {}

  // [lua/client/TimedActions/ISClimbSheetRopeAction.d.ts]
  /** @customConstructor ISClimbSheetRopeAction:new */
  export class ISClimbSheetRopeAction extends lua.client.TimedActions.ISClimbSheetRopeAction {}

  // [lua/client/TimedActions/ISClimbThroughWindow.d.ts]
  /** @customConstructor ISClimbThroughWindow:new */
  export class ISClimbThroughWindow extends lua.client.TimedActions.ISClimbThroughWindow {}

  // [lua/client/TimedActions/ISClothingExtraAction.d.ts]
  /** @customConstructor ISClothingExtraAction:new */
  export class ISClothingExtraAction extends lua.client.TimedActions.ISClothingExtraAction {}

  // [lua/client/TimedActions/ISComfreyCataplasm.d.ts]
  /** @customConstructor ISComfreyCataplasm:new */
  export class ISComfreyCataplasm extends lua.client.TimedActions.ISComfreyCataplasm {}

  // [lua/client/TimedActions/ISConnectCarBatteryToChargerAction.d.ts]
  /** @customConstructor ISConnectCarBatteryToChargerAction:new */
  export class ISConnectCarBatteryToChargerAction extends lua.client.TimedActions.ISConnectCarBatteryToChargerAction {}

  // [lua/client/TimedActions/ISConsolidateDrainable.d.ts]
  /** @customConstructor ISConsolidateDrainable:new */
  export class ISConsolidateDrainable extends lua.client.TimedActions.ISConsolidateDrainable {}

  // [lua/client/TimedActions/ISConsolidateDrainableAll.d.ts]
  /** @customConstructor ISConsolidateDrainableAll:new */
  export class ISConsolidateDrainableAll extends lua.client.TimedActions.ISConsolidateDrainableAll {}

  // [lua/client/TimedActions/ISCraftAction.d.ts]
  /** @customConstructor ISCraftAction:new */
  export class ISCraftAction extends lua.client.TimedActions.ISCraftAction {}

  // [lua/client/TimedActions/ISCutHair.d.ts]
  /** @customConstructor ISCutHair:new */
  export class ISCutHair extends lua.client.TimedActions.ISCutHair {}

  // [lua/client/TimedActions/ISDestroyStuffAction.d.ts]
  /** @customConstructor ISDestroyStuffAction:new */
  export class ISDestroyStuffAction extends lua.client.TimedActions.ISDestroyStuffAction {}

  // [lua/client/TimedActions/ISDetachItemHotbar.d.ts]
  /** @customConstructor ISDetachItemHotbar:new */
  export class ISDetachItemHotbar extends lua.client.TimedActions.ISDetachItemHotbar {}

  // [lua/client/TimedActions/ISDisinfect.d.ts]
  /** @customConstructor ISDisinfect:new */
  export class ISDisinfect extends lua.client.TimedActions.ISDisinfect {}

  // [lua/client/TimedActions/ISDismantleAction.d.ts]
  /** @customConstructor ISDismantleAction:new */
  export class ISDismantleAction extends lua.client.TimedActions.ISDismantleAction {}

  // [lua/client/TimedActions/ISDrinkFromBottle.d.ts]
  /** @customConstructor ISDrinkFromBottle:new */
  export class ISDrinkFromBottle extends lua.client.TimedActions.ISDrinkFromBottle {}

  // [lua/client/TimedActions/ISDropItemAction.d.ts]
  /** @customConstructor ISDropItemAction:new */
  export class ISDropItemAction extends lua.client.TimedActions.ISDropItemAction {}

  // [lua/client/TimedActions/ISDropWorldItemAction.d.ts]
  /** @customConstructor ISDropWorldItemAction:new */
  export class ISDropWorldItemAction extends lua.client.TimedActions.ISDropWorldItemAction {}

  // [lua/client/TimedActions/ISDryMyself.d.ts]
  /** @customConstructor ISDryMyself:new */
  export class ISDryMyself extends lua.client.TimedActions.ISDryMyself {}

  // [lua/client/TimedActions/ISDumpContentsAction.d.ts]
  /** @customConstructor ISDumpContentsAction:new */
  export class ISDumpContentsAction extends lua.client.TimedActions.ISDumpContentsAction {}

  // [lua/client/TimedActions/ISDumpWaterAction.d.ts]
  /** @customConstructor ISDumpWaterAction:new */
  export class ISDumpWaterAction extends lua.client.TimedActions.ISDumpWaterAction {}

  // [lua/client/TimedActions/ISDyeHair.d.ts]
  /** @customConstructor ISDyeHair:new */
  export class ISDyeHair extends lua.client.TimedActions.ISDyeHair {}

  // [lua/client/TimedActions/ISEatFoodAction.d.ts]
  /** @customConstructor ISEatFoodAction:new */
  export class ISEatFoodAction extends lua.client.TimedActions.ISEatFoodAction {}

  // [lua/client/TimedActions/ISEjectMagazine.d.ts]
  /** @customConstructor ISEjectMagazine:new */
  export class ISEjectMagazine extends lua.client.TimedActions.ISEjectMagazine {}

  // [lua/client/TimedActions/ISEmptyRainBarrelAction.d.ts]
  /** @customConstructor ISEmptyRainBarrelAction:new */
  export class ISEmptyRainBarrelAction extends lua.client.TimedActions.ISEmptyRainBarrelAction {}

  // [lua/client/TimedActions/ISEquipHeavyItem.d.ts]
  /** @customConstructor ISEquipHeavyItem:new */
  export class ISEquipHeavyItem extends lua.client.TimedActions.ISEquipHeavyItem {}

  // [lua/client/TimedActions/ISEquipWeaponAction.d.ts]
  /** @customConstructor ISEquipWeaponAction:new */
  export class ISEquipWeaponAction extends lua.client.TimedActions.ISEquipWeaponAction {}

  // [lua/client/TimedActions/ISFillGrave.d.ts]
  /** @customConstructor ISFillGrave:new */
  export class ISFillGrave extends lua.client.TimedActions.ISFillGrave {}

  // [lua/client/TimedActions/ISFinalizeDealAction.d.ts]
  /** @customConstructor ISFinalizeDealAction:new */
  export class ISFinalizeDealAction extends lua.client.TimedActions.ISFinalizeDealAction {}

  // [lua/client/TimedActions/ISFireplaceAddFuel.d.ts]
  /** @customConstructor ISFireplaceAddFuel:new */
  export class ISFireplaceAddFuel extends lua.client.TimedActions.ISFireplaceAddFuel {}

  // [lua/client/TimedActions/ISFireplaceExtinguish.d.ts]
  /** @customConstructor ISFireplaceExtinguish:new */
  export class ISFireplaceExtinguish extends lua.client.TimedActions.ISFireplaceExtinguish {}

  // [lua/client/TimedActions/ISFireplaceInfoAction.d.ts]
  /** @customConstructor ISFireplaceInfoAction:new */
  export class ISFireplaceInfoAction extends lua.client.TimedActions.ISFireplaceInfoAction {}

  // [lua/client/TimedActions/ISFireplaceLightFromKindle.d.ts]
  /** @customConstructor ISFireplaceLightFromKindle:new */
  export class ISFireplaceLightFromKindle extends lua.client.TimedActions.ISFireplaceLightFromKindle {}

  // [lua/client/TimedActions/ISFireplaceLightFromLiterature.d.ts]
  /** @customConstructor ISFireplaceLightFromLiterature:new */
  export class ISFireplaceLightFromLiterature extends lua.client.TimedActions.ISFireplaceLightFromLiterature {}

  // [lua/client/TimedActions/ISFireplaceLightFromPetrol.d.ts]
  /** @customConstructor ISFireplaceLightFromPetrol:new */
  export class ISFireplaceLightFromPetrol extends lua.client.TimedActions.ISFireplaceLightFromPetrol {}

  // [lua/client/TimedActions/ISFitnessAction.d.ts]
  /** @customConstructor ISFitnessAction:new */
  export class ISFitnessAction extends lua.client.TimedActions.ISFitnessAction {}

  // [lua/client/TimedActions/ISFixAction.d.ts]
  /** @customConstructor ISFixAction:new */
  export class ISFixAction extends lua.client.TimedActions.ISFixAction {}

  // [lua/client/TimedActions/ISFixGenerator.d.ts]
  /** @customConstructor ISFixGenerator:new */
  export class ISFixGenerator extends lua.client.TimedActions.ISFixGenerator {}

  // [lua/client/TimedActions/ISGarlicCataplasm.d.ts]
  /** @customConstructor ISGarlicCataplasm:new */
  export class ISGarlicCataplasm extends lua.client.TimedActions.ISGarlicCataplasm {}

  // [lua/client/TimedActions/ISGeneratorInfoAction.d.ts]
  /** @customConstructor ISGeneratorInfoAction:new */
  export class ISGeneratorInfoAction extends lua.client.TimedActions.ISGeneratorInfoAction {}

  // [lua/client/TimedActions/ISGetCompost.d.ts]
  /** @customConstructor ISGetCompost:new */
  export class ISGetCompost extends lua.client.TimedActions.ISGetCompost {}

  // [lua/client/TimedActions/ISGrabCorpseAction.d.ts]
  /** @customConstructor ISGrabCorpseAction:new */
  export class ISGrabCorpseAction extends lua.client.TimedActions.ISGrabCorpseAction {}

  // [lua/client/TimedActions/ISGrabItemAction.d.ts]
  /** @customConstructor ISGrabItemAction:new */
  export class ISGrabItemAction extends lua.client.TimedActions.ISGrabItemAction {}

  // [lua/client/TimedActions/ISInsertMagazine.d.ts]
  /** @customConstructor ISInsertMagazine:new */
  export class ISInsertMagazine extends lua.client.TimedActions.ISInsertMagazine {}

  // [lua/client/TimedActions/ISInventoryTransferAction.d.ts]
  /** @customConstructor ISInventoryTransferAction:new */
  export class ISInventoryTransferAction extends lua.client.TimedActions.ISInventoryTransferAction {}

  // [lua/client/TimedActions/ISLightActions.d.ts]
  /** @customConstructor ISLightActions:new */
  export class ISLightActions extends lua.client.TimedActions.ISLightActions {}

  // [lua/client/TimedActions/ISLoadBulletsInMagazine.d.ts]
  /** @customConstructor ISLoadBulletsInMagazine:new */
  export class ISLoadBulletsInMagazine extends lua.client.TimedActions.ISLoadBulletsInMagazine {}

  // [lua/client/TimedActions/ISLockDoor.d.ts]
  /** @customConstructor ISLockDoor:new */
  export class ISLockDoor extends lua.client.TimedActions.ISLockDoor {}

  // [lua/client/TimedActions/ISMedicalCheckAction.d.ts]
  /** @customConstructor ISMedicalCheckAction:new */
  export class ISMedicalCheckAction extends lua.client.TimedActions.ISMedicalCheckAction {}

  // [lua/client/TimedActions/ISOpenCloseCurtain.d.ts]
  /** @customConstructor ISOpenCloseCurtain:new */
  export class ISOpenCloseCurtain extends lua.client.TimedActions.ISOpenCloseCurtain {}

  // [lua/client/TimedActions/ISOpenCloseDoor.d.ts]
  /** @customConstructor ISOpenCloseDoor:new */
  export class ISOpenCloseDoor extends lua.client.TimedActions.ISOpenCloseDoor {}

  // [lua/client/TimedActions/ISOpenCloseWindow.d.ts]
  /** @customConstructor ISOpenCloseWindow:new */
  export class ISOpenCloseWindow extends lua.client.TimedActions.ISOpenCloseWindow {}

  // [lua/client/TimedActions/ISOpenContainerTimedAction.d.ts]
  /** @customConstructor ISOpenContainerTimedAction:new */
  export class ISOpenContainerTimedAction extends lua.client.TimedActions.ISOpenContainerTimedAction {}

  // [lua/client/TimedActions/ISOvenUITimedAction.d.ts]
  /** @customConstructor ISOvenUITimedAction:new */
  export class ISOvenUITimedAction extends lua.client.TimedActions.ISOvenUITimedAction {}

  // [lua/client/TimedActions/ISPadlockAction.d.ts]
  /** @customConstructor ISPadlockAction:new */
  export class ISPadlockAction extends lua.client.TimedActions.ISPadlockAction {}

  // [lua/client/TimedActions/ISPickupBrokenGlass.d.ts]
  /** @customConstructor ISPickupBrokenGlass:new */
  export class ISPickupBrokenGlass extends lua.client.TimedActions.ISPickupBrokenGlass {}

  // [lua/client/TimedActions/ISPlaceCarBatteryChargerAction.d.ts]
  /** @customConstructor ISPlaceCarBatteryChargerAction:new */
  export class ISPlaceCarBatteryChargerAction extends lua.client.TimedActions.ISPlaceCarBatteryChargerAction {}

  // [lua/client/TimedActions/ISPlaceTrap.d.ts]
  /** @customConstructor ISPlaceTrap:new */
  export class ISPlaceTrap extends lua.client.TimedActions.ISPlaceTrap {}

  // [lua/client/TimedActions/ISPlantainCataplasm.d.ts]
  /** @customConstructor ISPlantainCataplasm:new */
  export class ISPlantainCataplasm extends lua.client.TimedActions.ISPlantainCataplasm {}

  // [lua/client/TimedActions/ISPlugGenerator.d.ts]
  /** @customConstructor ISPlugGenerator:new */
  export class ISPlugGenerator extends lua.client.TimedActions.ISPlugGenerator {}

  // [lua/client/TimedActions/ISPlumbItem.d.ts]
  /** @customConstructor ISPlumbItem:new */
  export class ISPlumbItem extends lua.client.TimedActions.ISPlumbItem {}

  // [lua/client/TimedActions/ISPutOutFire.d.ts]
  /** @customConstructor ISPutOutFire:new */
  export class ISPutOutFire extends lua.client.TimedActions.ISPutOutFire {}

  // [lua/client/TimedActions/ISQueueActionsAction.d.ts]
  /** @customConstructor ISQueueActionsAction:new */
  export class ISQueueActionsAction extends lua.client.TimedActions.ISQueueActionsAction {}

  // [lua/client/TimedActions/ISRackFirearm.d.ts]
  /** @customConstructor ISRackFirearm:new */
  export class ISRackFirearm extends lua.client.TimedActions.ISRackFirearm {}

  // [lua/client/TimedActions/ISReadABook.d.ts]
  /** @customConstructor ISReadABook:new */
  export class ISReadABook extends lua.client.TimedActions.ISReadABook {}

  // [lua/client/TimedActions/ISReadWorldMap.d.ts]
  /** @customConstructor ISReadWorldMap:new */
  export class ISReadWorldMap extends lua.client.TimedActions.ISReadWorldMap {}

  // [lua/client/TimedActions/ISReloadWeaponAction.d.ts]
  /** @customConstructor ISReloadWeaponAction:new */
  export class ISReloadWeaponAction extends lua.client.TimedActions.ISReloadWeaponAction {}

  // [lua/client/TimedActions/ISRemoveBrokenGlass.d.ts]
  /** @customConstructor ISRemoveBrokenGlass:new */
  export class ISRemoveBrokenGlass extends lua.client.TimedActions.ISRemoveBrokenGlass {}

  // [lua/client/TimedActions/ISRemoveBullet.d.ts]
  /** @customConstructor ISRemoveBullet:new */
  export class ISRemoveBullet extends lua.client.TimedActions.ISRemoveBullet {}

  // [lua/client/TimedActions/ISRemoveBush.d.ts]
  /** @customConstructor ISRemoveBush:new */
  export class ISRemoveBush extends lua.client.TimedActions.ISRemoveBush {}

  // [lua/client/TimedActions/ISRemoveCarBatteryFromChargerAction.d.ts]
  /** @customConstructor ISRemoveCarBatteryFromChargerAction:new */
  export class ISRemoveCarBatteryFromChargerAction extends lua.client.TimedActions
    .ISRemoveCarBatteryFromChargerAction {}

  // [lua/client/TimedActions/ISRemoveGlass.d.ts]
  /** @customConstructor ISRemoveGlass:new */
  export class ISRemoveGlass extends lua.client.TimedActions.ISRemoveGlass {}

  // [lua/client/TimedActions/ISRemoveGrass.d.ts]
  /** @customConstructor ISRemoveGrass:new */
  export class ISRemoveGrass extends lua.client.TimedActions.ISRemoveGrass {}

  // [lua/client/TimedActions/ISRemovePatch.d.ts]
  /** @customConstructor ISRemovePatch:new */
  export class ISRemovePatch extends lua.client.TimedActions.ISRemovePatch {}

  // [lua/client/TimedActions/ISRemoveSheetAction.d.ts]
  /** @customConstructor ISRemoveSheetAction:new */
  export class ISRemoveSheetAction extends lua.client.TimedActions.ISRemoveSheetAction {}

  // [lua/client/TimedActions/ISRemoveSheetRope.d.ts]
  /** @customConstructor ISRemoveSheetRope:new */
  export class ISRemoveSheetRope extends lua.client.TimedActions.ISRemoveSheetRope {}

  // [lua/client/TimedActions/ISRemoveWeaponUpgrade.d.ts]
  /** @customConstructor ISRemoveWeaponUpgrade:new */
  export class ISRemoveWeaponUpgrade extends lua.client.TimedActions.ISRemoveWeaponUpgrade {}

  // [lua/client/TimedActions/ISRepairClothing.d.ts]
  /** @customConstructor ISRepairClothing:new */
  export class ISRepairClothing extends lua.client.TimedActions.ISRepairClothing {}

  // [lua/client/TimedActions/ISRestAction.d.ts]
  /** @customConstructor ISRestAction:new */
  export class ISRestAction extends lua.client.TimedActions.ISRestAction {}

  // [lua/client/TimedActions/ISRipClothing.d.ts]
  /** @customConstructor ISRipClothing:new */
  export class ISRipClothing extends lua.client.TimedActions.ISRipClothing {}

  // [lua/client/TimedActions/ISScavengeAction.d.ts]
  /** @customConstructor ISScavengeAction:new */
  export class ISScavengeAction extends lua.client.TimedActions.ISScavengeAction {}

  // [lua/client/TimedActions/ISSetComboWasherDryerMode.d.ts]
  /** @customConstructor ISSetComboWasherDryerMode:new */
  export class ISSetComboWasherDryerMode extends lua.client.TimedActions.ISSetComboWasherDryerMode {}

  // [lua/client/TimedActions/ISSitOnChairAction.d.ts]
  /** @customConstructor ISSitOnChairAction:new */
  export class ISSitOnChairAction extends lua.client.TimedActions.ISSitOnChairAction {}

  // [lua/client/TimedActions/ISSmashWindow.d.ts]
  /** @customConstructor ISSmashWindow:new */
  export class ISSmashWindow extends lua.client.TimedActions.ISSmashWindow {}

  // [lua/client/TimedActions/ISSplint.d.ts]
  /** @customConstructor ISSplint:new */
  export class ISSplint extends lua.client.TimedActions.ISSplint {}

  // [lua/client/TimedActions/ISStitch.d.ts]
  /** @customConstructor ISStitch:new */
  export class ISStitch extends lua.client.TimedActions.ISStitch {}

  // [lua/client/TimedActions/ISStopAlarmClockAction.d.ts]
  /** @customConstructor ISStopAlarmClockAction:new */
  export class ISStopAlarmClockAction extends lua.client.TimedActions.ISStopAlarmClockAction {}

  // [lua/client/TimedActions/ISTakeCarBatteryChargerAction.d.ts]
  /** @customConstructor ISTakeCarBatteryChargerAction:new */
  export class ISTakeCarBatteryChargerAction extends lua.client.TimedActions.ISTakeCarBatteryChargerAction {}

  // [lua/client/TimedActions/ISTakeFuel.d.ts]
  /** @customConstructor ISTakeFuel:new */
  export class ISTakeFuel extends lua.client.TimedActions.ISTakeFuel {}

  // [lua/client/TimedActions/ISTakeGenerator.d.ts]
  /** @customConstructor ISTakeGenerator:new */
  export class ISTakeGenerator extends lua.client.TimedActions.ISTakeGenerator {}

  // [lua/client/TimedActions/ISTakePillAction.d.ts]
  /** @customConstructor ISTakePillAction:new */
  export class ISTakePillAction extends lua.client.TimedActions.ISTakePillAction {}

  // [lua/client/TimedActions/ISTakeTrap.d.ts]
  /** @customConstructor ISTakeTrap:new */
  export class ISTakeTrap extends lua.client.TimedActions.ISTakeTrap {}

  // [lua/client/TimedActions/ISTakeWaterAction.d.ts]
  /** @customConstructor ISTakeWaterAction:new */
  export class ISTakeWaterAction extends lua.client.TimedActions.ISTakeWaterAction {}

  // [lua/client/TimedActions/ISTimedActionQueue.d.ts]
  /** @customConstructor ISTimedActionQueue:new */
  export class ISTimedActionQueue extends lua.client.TimedActions.ISTimedActionQueue {}

  // [lua/client/TimedActions/ISToggleClothingDryer.d.ts]
  /** @customConstructor ISToggleClothingDryer:new */
  export class ISToggleClothingDryer extends lua.client.TimedActions.ISToggleClothingDryer {}

  // [lua/client/TimedActions/ISToggleClothingWasher.d.ts]
  /** @customConstructor ISToggleClothingWasher:new */
  export class ISToggleClothingWasher extends lua.client.TimedActions.ISToggleClothingWasher {}

  // [lua/client/TimedActions/ISToggleComboWasherDryer.d.ts]
  /** @customConstructor ISToggleComboWasherDryer:new */
  export class ISToggleComboWasherDryer extends lua.client.TimedActions.ISToggleComboWasherDryer {}

  // [lua/client/TimedActions/ISToggleLightAction.d.ts]
  /** @customConstructor ISToggleLightAction:new */
  export class ISToggleLightAction extends lua.client.TimedActions.ISToggleLightAction {}

  // [lua/client/TimedActions/ISToggleSafetyAction.d.ts]
  /** @customConstructor ISToggleSafetyAction:new */
  export class ISToggleSafetyAction extends lua.client.TimedActions.ISToggleSafetyAction {}

  // [lua/client/TimedActions/ISToggleStoveAction.d.ts]
  /** @customConstructor ISToggleStoveAction:new */
  export class ISToggleStoveAction extends lua.client.TimedActions.ISToggleStoveAction {}

  // [lua/client/TimedActions/ISTransferWaterAction.d.ts]
  /** @customConstructor ISTransferWaterAction:new */
  export class ISTransferWaterAction extends lua.client.TimedActions.ISTransferWaterAction {}

  // [lua/client/TimedActions/ISTrimBeard.d.ts]
  /** @customConstructor ISTrimBeard:new */
  export class ISTrimBeard extends lua.client.TimedActions.ISTrimBeard {}

  // [lua/client/TimedActions/ISUnbarricadeAction.d.ts]
  /** @customConstructor ISUnbarricadeAction:new */
  export class ISUnbarricadeAction extends lua.client.TimedActions.ISUnbarricadeAction {}

  // [lua/client/TimedActions/ISUnequipAction.d.ts]
  /** @customConstructor ISUnequipAction:new */
  export class ISUnequipAction extends lua.client.TimedActions.ISUnequipAction {}

  // [lua/client/TimedActions/ISUnloadBulletsFromFirearm.d.ts]
  /** @customConstructor ISUnloadBulletsFromFirearm:new */
  export class ISUnloadBulletsFromFirearm extends lua.client.TimedActions.ISUnloadBulletsFromFirearm {}

  // [lua/client/TimedActions/ISUnloadBulletsFromMagazine.d.ts]
  /** @customConstructor ISUnloadBulletsFromMagazine:new */
  export class ISUnloadBulletsFromMagazine extends lua.client.TimedActions.ISUnloadBulletsFromMagazine {}

  // [lua/client/TimedActions/ISUpgradeWeapon.d.ts]
  /** @customConstructor ISUpgradeWeapon:new */
  export class ISUpgradeWeapon extends lua.client.TimedActions.ISUpgradeWeapon {}

  // [lua/client/TimedActions/ISWakeOtherPlayer.d.ts]
  /** @customConstructor ISWakeOtherPlayer:new */
  export class ISWakeOtherPlayer extends lua.client.TimedActions.ISWakeOtherPlayer {}

  // [lua/client/TimedActions/ISWashClothing.d.ts]
  /** @customConstructor ISWashClothing:new */
  export class ISWashClothing extends lua.client.TimedActions.ISWashClothing {}

  // [lua/client/TimedActions/ISWashYourself.d.ts]
  /** @customConstructor ISWashYourself:new */
  export class ISWashYourself extends lua.client.TimedActions.ISWashYourself {}

  // [lua/client/TimedActions/ISWearClothing.d.ts]
  /** @customConstructor ISWearClothing:new */
  export class ISWearClothing extends lua.client.TimedActions.ISWearClothing {}
  export abstract class WearClothingAnimations extends lua.client.TimedActions.WearClothingAnimations {}

  // [lua/client/TimedActions/WalkToTimedAction.d.ts]
  /** @customConstructor ISWalkToTimedAction:new */
  export class ISWalkToTimedAction extends lua.client.TimedActions.ISWalkToTimedAction {}

  // [lua/client/Traps/CTrapGlobalObject.d.ts]
  /** @customConstructor CTrapGlobalObject:new */
  export class CTrapGlobalObject extends lua.client.Traps.CTrapGlobalObject {}

  // [lua/client/Traps/CTrapSystem.d.ts]
  /** @customConstructor CTrapSystem:new */
  export class CTrapSystem extends lua.client.Traps.CTrapSystem {}

  // [lua/client/Traps/TimedActions/ISAddBaitAction.d.ts]
  /** @customConstructor ISAddBaitAction:new */
  export class ISAddBaitAction extends lua.client.Traps.TimedActions.ISAddBaitAction {}

  // [lua/client/Traps/TimedActions/ISCheckTrapAction.d.ts]
  /** @customConstructor ISCheckTrapAction:new */
  export class ISCheckTrapAction extends lua.client.Traps.TimedActions.ISCheckTrapAction {}

  // [lua/client/Traps/TimedActions/ISRemoveBaitAction.d.ts]
  /** @customConstructor ISRemoveBaitAction:new */
  export class ISRemoveBaitAction extends lua.client.Traps.TimedActions.ISRemoveBaitAction {}

  // [lua/client/Traps/TimedActions/ISRemoveTrapAction.d.ts]
  /** @customConstructor ISRemoveTrapAction:new */
  export class ISRemoveTrapAction extends lua.client.Traps.TimedActions.ISRemoveTrapAction {}

  // [lua/client/Tutorial/ISUI/TutorialFocus.d.ts]
  /** @customConstructor TutorialFocus:new */
  export class TutorialFocus extends lua.client.Tutorial.ISUI.TutorialFocus {}

  // [lua/client/Tutorial/ISUI/TutorialMessage.d.ts]
  /** @customConstructor TutorialMessage:new */
  export class TutorialMessage extends lua.client.Tutorial.ISUI.TutorialMessage {}

  // [lua/client/Tutorial/Steps.d.ts]
  /** @customConstructor BandageStep:new */
  export class BandageStep extends lua.client.Tutorial.BandageStep {}
  /** @customConstructor FightStep:new */
  export class FightStep extends lua.client.Tutorial.FightStep {}
  /** @customConstructor InventoryLootingStep:new */
  export class InventoryLootingStep extends lua.client.Tutorial.InventoryLootingStep {}
  /** @customConstructor InventoryUseStep:new */
  export class InventoryUseStep extends lua.client.Tutorial.InventoryUseStep {}
  /** @customConstructor ShotgunStep:new */
  export class ShotgunStep extends lua.client.Tutorial.ShotgunStep {}
  /** @customConstructor SneakStep:new */
  export class SneakStep extends lua.client.Tutorial.SneakStep {}
  /** @customConstructor WalkToAdjacent:new */
  export class WalkToAdjacent extends lua.client.Tutorial.WalkToAdjacent {}
  /** @customConstructor WelcomeStep:new */
  export class WelcomeStep extends lua.client.Tutorial.WelcomeStep {}
  export abstract class TutorialTests extends lua.client.Tutorial.TutorialTests {}

  // [lua/client/Tutorial/Tutorial1.d.ts]
  export abstract class Tutorial1 extends lua.client.Tutorial.Tutorial1 {}

  // [lua/client/Tutorial/TutorialSetup.d.ts]
  export abstract class TutorialData extends lua.client.Tutorial.TutorialData {}
  /** @noSelf */
  export const doTutorialDraw: () => any;
  /** @noSelf */
  export const doTutorialInit: () => any;
  /** @noSelf */
  export const preLoadTutorialInit: () => any;

  // [lua/client/Tutorial/TutorialStep.d.ts]
  /** @customConstructor TutorialStep:new */
  export class TutorialStep extends lua.client.Tutorial.TutorialStep {}

  // [lua/client/Vehicles/ISUI/EditVehicleState.d.ts]
  /** @customConstructor EditVehicleUI:new */
  export class EditVehicleUI extends lua.client.Vehicles.ISUI.EditVehicleUI {}
  /** @customConstructor EditVehicleUI_EditArea:new */
  export class EditVehicleUI_EditArea extends lua.client.Vehicles.ISUI.EditVehicleUI_EditArea {}
  /** @customConstructor EditVehicleUI_EditAttachment:new */
  export class EditVehicleUI_EditAttachment extends lua.client.Vehicles.ISUI.EditVehicleUI_EditAttachment {}
  /** @customConstructor EditVehicleUI_EditChassis:new */
  export class EditVehicleUI_EditChassis extends lua.client.Vehicles.ISUI.EditVehicleUI_EditChassis {}
  /** @customConstructor EditVehicleUI_EditPanel:new */
  export class EditVehicleUI_EditPanel extends lua.client.Vehicles.ISUI.EditVehicleUI_EditPanel {}
  /** @customConstructor EditVehicleUI_EditPassenger:new */
  export class EditVehicleUI_EditPassenger extends lua.client.Vehicles.ISUI.EditVehicleUI_EditPassenger {}
  /** @customConstructor EditVehicleUI_EditPhysics:new */
  export class EditVehicleUI_EditPhysics extends lua.client.Vehicles.ISUI.EditVehicleUI_EditPhysics {}
  /** @customConstructor EditVehicleUI_EditWheel:new */
  export class EditVehicleUI_EditWheel extends lua.client.Vehicles.ISUI.EditVehicleUI_EditWheel {}
  /** @customConstructor EditVehicleUI_ListBox:new */
  export class EditVehicleUI_ListBox extends lua.client.Vehicles.ISUI.EditVehicleUI_ListBox {}
  /** @customConstructor EditVehicleUI_Scene:new */
  export class EditVehicleUI_Scene extends lua.client.Vehicles.ISUI.EditVehicleUI_Scene {}
  /** @customConstructor EditVehicleUI_SwitchView:new */
  export class EditVehicleUI_SwitchView extends lua.client.Vehicles.ISUI.EditVehicleUI_SwitchView {}
  /** @noSelf */
  export const EditVehicleState_InitUI: () => any;

  // [lua/client/Vehicles/ISUI/ISCarMechanicsOverlay.d.ts]
  export abstract class ISCarMechanicsOverlay extends lua.client.Vehicles.ISUI.ISCarMechanicsOverlay {}

  // [lua/client/Vehicles/ISUI/ISLightbarUI.d.ts]
  /** @customConstructor ISLightbarUI:new */
  export class ISLightbarUI extends lua.client.Vehicles.ISUI.ISLightbarUI {}

  // [lua/client/Vehicles/ISUI/ISUI3DScene.d.ts]
  /** @customConstructor ISUI3DScene:new */
  export class ISUI3DScene extends lua.client.Vehicles.ISUI.ISUI3DScene {}

  // [lua/client/Vehicles/ISUI/ISUIVehicleModel.d.ts]
  /** @customConstructor ISUIVehicleModel:new */
  export class ISUIVehicleModel extends lua.client.Vehicles.ISUI.ISUIVehicleModel {}

  // [lua/client/Vehicles/ISUI/ISVehicleACUI.d.ts]
  /** @customConstructor ISVehicleACUI:new */
  export class ISVehicleACUI extends lua.client.Vehicles.ISUI.ISVehicleACUI {}

  // [lua/client/Vehicles/ISUI/ISVehicleAngles.d.ts]
  /** @customConstructor ISVehicleAngles:new */
  export class ISVehicleAngles extends lua.client.Vehicles.ISUI.ISVehicleAngles {}

  // [lua/client/Vehicles/ISUI/ISVehicleBloodUI.d.ts]
  /** @customConstructor ISVehicleBloodUI:new */
  export class ISVehicleBloodUI extends lua.client.Vehicles.ISUI.ISVehicleBloodUI {}

  // [lua/client/Vehicles/ISUI/ISVehicleColor.d.ts]
  /** @customConstructor ISVehicleHSV:new */
  export class ISVehicleHSV extends lua.client.Vehicles.ISUI.ISVehicleHSV {}

  // [lua/client/Vehicles/ISUI/ISVehicleDashboard.d.ts]
  /** @customConstructor ISVehicleDashboard:new */
  export class ISVehicleDashboard extends lua.client.Vehicles.ISUI.ISVehicleDashboard {}

  // [lua/client/Vehicles/ISUI/ISVehicleGauge.d.ts]
  /** @customConstructor ISVehicleGauge:new */
  export class ISVehicleGauge extends lua.client.Vehicles.ISUI.ISVehicleGauge {}

  // [lua/client/Vehicles/ISUI/ISVehicleMechanics.d.ts]
  /** @customConstructor ISVehicleMechanics:new */
  export class ISVehicleMechanics extends lua.client.Vehicles.ISUI.ISVehicleMechanics {}

  // [lua/client/Vehicles/ISUI/ISVehicleMenu.d.ts]
  export abstract class ISVehicleMenu extends lua.client.Vehicles.ISUI.ISVehicleMenu {}

  // [lua/client/Vehicles/ISUI/ISVehiclePartMenu.d.ts]
  export abstract class ISVehiclePartMenu extends lua.client.Vehicles.ISUI.ISVehiclePartMenu {}

  // [lua/client/Vehicles/ISUI/ISVehicleRegulator.d.ts]
  export abstract class ISVehicleRegulator extends lua.client.Vehicles.ISUI.ISVehicleRegulator {}

  // [lua/client/Vehicles/ISUI/ISVehicleRoadtripDebug.d.ts]
  /** @customConstructor ISVehicleRoadtripDebug:new */
  export class ISVehicleRoadtripDebug extends lua.client.Vehicles.ISUI.ISVehicleRoadtripDebug {}

  // [lua/client/Vehicles/ISUI/ISVehicleSeatUI.d.ts]
  /** @customConstructor ISVehicleSeatUI:new */
  export class ISVehicleSeatUI extends lua.client.Vehicles.ISUI.ISVehicleSeatUI {}

  // [lua/client/Vehicles/ISVehicleTrailerUtils.d.ts]
  export abstract class ISVehicleTrailerUtils extends lua.client.Vehicles.ISVehicleTrailerUtils {}

  // [lua/client/Vehicles/TimedActions/ISAddGasolineToVehicle.d.ts]
  /** @customConstructor ISAddGasolineToVehicle:new */
  export class ISAddGasolineToVehicle extends lua.client.Vehicles.TimedActions.ISAddGasolineToVehicle {}

  // [lua/client/Vehicles/TimedActions/ISAttachTrailerToVehicle.d.ts]
  /** @customConstructor ISAttachTrailerToVehicle:new */
  export class ISAttachTrailerToVehicle extends lua.client.Vehicles.TimedActions.ISAttachTrailerToVehicle {}

  // [lua/client/Vehicles/TimedActions/ISCloseVehicleDoor.d.ts]
  /** @customConstructor ISCloseVehicleDoor:new */
  export class ISCloseVehicleDoor extends lua.client.Vehicles.TimedActions.ISCloseVehicleDoor {}

  // [lua/client/Vehicles/TimedActions/ISConfigHeadlight.d.ts]
  /** @customConstructor ISConfigHeadlight:new */
  export class ISConfigHeadlight extends lua.client.Vehicles.TimedActions.ISConfigHeadlight {}

  // [lua/client/Vehicles/TimedActions/ISDeflateTire.d.ts]
  /** @customConstructor ISDeflateTire:new */
  export class ISDeflateTire extends lua.client.Vehicles.TimedActions.ISDeflateTire {}

  // [lua/client/Vehicles/TimedActions/ISDetachTrailerFromVehicle.d.ts]
  /** @customConstructor ISDetachTrailerFromVehicle:new */
  export class ISDetachTrailerFromVehicle extends lua.client.Vehicles.TimedActions.ISDetachTrailerFromVehicle {}

  // [lua/client/Vehicles/TimedActions/ISEnterVehicle.d.ts]
  /** @customConstructor ISEnterVehicle:new */
  export class ISEnterVehicle extends lua.client.Vehicles.TimedActions.ISEnterVehicle {}

  // [lua/client/Vehicles/TimedActions/ISExitVehicle.d.ts]
  /** @customConstructor ISExitVehicle:new */
  export class ISExitVehicle extends lua.client.Vehicles.TimedActions.ISExitVehicle {}

  // [lua/client/Vehicles/TimedActions/ISHorn.d.ts]
  /** @customConstructor ISHorn:new */
  export class ISHorn extends lua.client.Vehicles.TimedActions.ISHorn {}

  // [lua/client/Vehicles/TimedActions/ISHotwireVehicle.d.ts]
  /** @customConstructor ISHotwireVehicle:new */
  export class ISHotwireVehicle extends lua.client.Vehicles.TimedActions.ISHotwireVehicle {}

  // [lua/client/Vehicles/TimedActions/ISInflateTire.d.ts]
  /** @customConstructor ISInflateTire:new */
  export class ISInflateTire extends lua.client.Vehicles.TimedActions.ISInflateTire {}

  // [lua/client/Vehicles/TimedActions/ISInstallVehiclePart.d.ts]
  /** @customConstructor ISInstallVehiclePart:new */
  export class ISInstallVehiclePart extends lua.client.Vehicles.TimedActions.ISInstallVehiclePart {}

  // [lua/client/Vehicles/TimedActions/ISLightbarUITimedAction.d.ts]
  /** @customConstructor ISLightbarUITimedAction:new */
  export class ISLightbarUITimedAction extends lua.client.Vehicles.TimedActions.ISLightbarUITimedAction {}

  // [lua/client/Vehicles/TimedActions/ISLockDoors.d.ts]
  /** @customConstructor ISLockDoors:new */
  export class ISLockDoors extends lua.client.Vehicles.TimedActions.ISLockDoors {}

  // [lua/client/Vehicles/TimedActions/ISLockVehicleDoor.d.ts]
  /** @customConstructor ISLockVehicleDoor:new */
  export class ISLockVehicleDoor extends lua.client.Vehicles.TimedActions.ISLockVehicleDoor {}

  // [lua/client/Vehicles/TimedActions/ISOpenCloseVehicleWindow.d.ts]
  /** @customConstructor ISOpenCloseVehicleWindow:new */
  export class ISOpenCloseVehicleWindow extends lua.client.Vehicles.TimedActions.ISOpenCloseVehicleWindow {}

  // [lua/client/Vehicles/TimedActions/ISOpenMechanicsUIAction.d.ts]
  /** @customConstructor ISOpenMechanicsUIAction:new */
  export class ISOpenMechanicsUIAction extends lua.client.Vehicles.TimedActions.ISOpenMechanicsUIAction {}

  // [lua/client/Vehicles/TimedActions/ISOpenVehicleDoor.d.ts]
  /** @customConstructor ISOpenVehicleDoor:new */
  export class ISOpenVehicleDoor extends lua.client.Vehicles.TimedActions.ISOpenVehicleDoor {}

  // [lua/client/Vehicles/TimedActions/ISPathFindAction.d.ts]
  /** @customConstructor ISPathFindAction:new */
  export class ISPathFindAction extends lua.client.Vehicles.TimedActions.ISPathFindAction {}

  // [lua/client/Vehicles/TimedActions/ISRechargeCarBattery.d.ts]
  /** @customConstructor ISRechargeCarBattery:new */
  export class ISRechargeCarBattery extends lua.client.Vehicles.TimedActions.ISRechargeCarBattery {}

  // [lua/client/Vehicles/TimedActions/ISRefuelFromGasPump.d.ts]
  /** @customConstructor ISRefuelFromGasPump:new */
  export class ISRefuelFromGasPump extends lua.client.Vehicles.TimedActions.ISRefuelFromGasPump {}

  // [lua/client/Vehicles/TimedActions/ISRemoveBurntVehicle.d.ts]
  /** @customConstructor ISRemoveBurntVehicle:new */
  export class ISRemoveBurntVehicle extends lua.client.Vehicles.TimedActions.ISRemoveBurntVehicle {}

  // [lua/client/Vehicles/TimedActions/ISRepairEngine.d.ts]
  /** @customConstructor ISRepairEngine:new */
  export class ISRepairEngine extends lua.client.Vehicles.TimedActions.ISRepairEngine {}

  // [lua/client/Vehicles/TimedActions/ISShutOffVehicleEngine.d.ts]
  /** @customConstructor ISShutOffVehicleEngine:new */
  export class ISShutOffVehicleEngine extends lua.client.Vehicles.TimedActions.ISShutOffVehicleEngine {}

  // [lua/client/Vehicles/TimedActions/ISSmashVehicleWindow.d.ts]
  /** @customConstructor ISSmashVehicleWindow:new */
  export class ISSmashVehicleWindow extends lua.client.Vehicles.TimedActions.ISSmashVehicleWindow {}

  // [lua/client/Vehicles/TimedActions/ISStartVehicleEngine.d.ts]
  /** @customConstructor ISStartVehicleEngine:new */
  export class ISStartVehicleEngine extends lua.client.Vehicles.TimedActions.ISStartVehicleEngine {}

  // [lua/client/Vehicles/TimedActions/ISStopVehicle.d.ts]
  /** @customConstructor ISStopVehicle:new */
  export class ISStopVehicle extends lua.client.Vehicles.TimedActions.ISStopVehicle {}

  // [lua/client/Vehicles/TimedActions/ISSwitchVehicleSeat.d.ts]
  /** @customConstructor ISSwitchVehicleSeat:new */
  export class ISSwitchVehicleSeat extends lua.client.Vehicles.TimedActions.ISSwitchVehicleSeat {}

  // [lua/client/Vehicles/TimedActions/ISTakeEngineParts.d.ts]
  /** @customConstructor ISTakeEngineParts:new */
  export class ISTakeEngineParts extends lua.client.Vehicles.TimedActions.ISTakeEngineParts {}

  // [lua/client/Vehicles/TimedActions/ISTakeGasolineFromVehicle.d.ts]
  /** @customConstructor ISTakeGasolineFromVehicle:new */
  export class ISTakeGasolineFromVehicle extends lua.client.Vehicles.TimedActions.ISTakeGasolineFromVehicle {}

  // [lua/client/Vehicles/TimedActions/ISUninstallVehiclePart.d.ts]
  /** @customConstructor ISUninstallVehiclePart:new */
  export class ISUninstallVehiclePart extends lua.client.Vehicles.TimedActions.ISUninstallVehiclePart {}

  // [lua/client/Vehicles/TimedActions/ISUnlockVehicleDoor.d.ts]
  /** @customConstructor ISUnlockVehicleDoor:new */
  export class ISUnlockVehicleDoor extends lua.client.Vehicles.TimedActions.ISUnlockVehicleDoor {}

  // [lua/client/Vehicles/TimedActions/ISWashVehicle.d.ts]
  /** @customConstructor ISWashVehicle:new */
  export class ISWashVehicle extends lua.client.Vehicles.TimedActions.ISWashVehicle {}

  // [lua/client/XpSystem/ISUI/ISCharacterInfo.d.ts]
  /** @customConstructor ISCharacterInfo:new */
  export class ISCharacterInfo extends lua.client.XpSystem.ISUI.ISCharacterInfo {}

  // [lua/client/XpSystem/ISUI/ISCharacterInfoWindow.d.ts]
  /** @customConstructor ISCharacterInfoWindow:new */
  export class ISCharacterInfoWindow extends lua.client.XpSystem.ISUI.ISCharacterInfoWindow {}

  // [lua/client/XpSystem/ISUI/ISCharacterProtection.d.ts]
  /** @customConstructor ISCharacterProtection:new */
  export class ISCharacterProtection extends lua.client.XpSystem.ISUI.ISCharacterProtection {}

  // [lua/client/XpSystem/ISUI/ISCharacterScreen.d.ts]
  /** @customConstructor ISCharacterScreen:new */
  export class ISCharacterScreen extends lua.client.XpSystem.ISUI.ISCharacterScreen {}
  /** @customConstructor ISCharacterScreenAvatar:new */
  export class ISCharacterScreenAvatar extends lua.client.XpSystem.ISUI.ISCharacterScreenAvatar {}

  // [lua/client/XpSystem/ISUI/ISClothingInsPanel.d.ts]
  /** @customConstructor ISClothingInsPanel:new */
  export class ISClothingInsPanel extends lua.client.XpSystem.ISUI.ISClothingInsPanel {}

  // [lua/client/XpSystem/ISUI/ISHealthPanel.d.ts]
  /** @customConstructor HealthPanelAction:new */
  export class HealthPanelAction extends lua.client.XpSystem.ISUI.HealthPanelAction {}
  /** @customConstructor ISHealthBodyPartListBox:new */
  export class ISHealthBodyPartListBox extends lua.client.XpSystem.ISUI.ISHealthBodyPartListBox {}
  /** @customConstructor ISHealthBodyPartPanel:new */
  export class ISHealthBodyPartPanel extends lua.client.XpSystem.ISUI.ISHealthBodyPartPanel {}
  /** @customConstructor ISHealthPanel:new */
  export class ISHealthPanel extends lua.client.XpSystem.ISUI.ISHealthPanel {}
  /** @customConstructor ISNewHealthPanel:new */
  export class ISNewHealthPanel extends lua.client.XpSystem.ISUI.ISNewHealthPanel {}

  // [lua/client/XpSystem/ISUI/ISSkillProgressBar.d.ts]
  /** @customConstructor ISSkillProgressBar:new */
  export class ISSkillProgressBar extends lua.client.XpSystem.ISUI.ISSkillProgressBar {}

  // [lua/server/BuildingObjects/ISAnvil.d.ts]
  /** @customConstructor ISAnvil:new */
  export class ISAnvil extends lua.server.BuildingObjects.ISAnvil {}

  // [lua/server/BuildingObjects/ISBarbedWire.d.ts]
  /** @customConstructor ISBarbedWire:new */
  export class ISBarbedWire extends lua.server.BuildingObjects.ISBarbedWire {}

  // [lua/server/BuildingObjects/ISBrushToolTileCursor.d.ts]
  /** @customConstructor ISBrushToolTileCursor:new */
  export class ISBrushToolTileCursor extends lua.server.BuildingObjects.ISBrushToolTileCursor {}

  // [lua/server/BuildingObjects/ISBSFurnace.d.ts]
  /** @customConstructor ISBSFurnace:new */
  export class ISBSFurnace extends lua.server.BuildingObjects.ISBSFurnace {}

  // [lua/server/BuildingObjects/ISBuildCursorMouse.d.ts]
  /** @customConstructor ISBuildCursorMouse:new */
  export class ISBuildCursorMouse extends lua.server.BuildingObjects.ISBuildCursorMouse {}

  // [lua/server/BuildingObjects/ISBuildingObject.d.ts]
  /** @customConstructor ISBuildingObject:new */
  export class ISBuildingObject extends lua.server.BuildingObjects.ISBuildingObject {}

  // [lua/server/BuildingObjects/ISBuildUtil.d.ts]
  export abstract class buildUtil extends lua.server.BuildingObjects.buildUtil {}

  // [lua/server/BuildingObjects/ISChopTreeCursor.d.ts]
  /** @customConstructor ISChopTreeCursor:new */
  export class ISChopTreeCursor extends lua.server.BuildingObjects.ISChopTreeCursor {}

  // [lua/server/BuildingObjects/ISCleanBloodCursor.d.ts]
  /** @customConstructor ISCleanBloodCursor:new */
  export class ISCleanBloodCursor extends lua.server.BuildingObjects.ISCleanBloodCursor {}

  // [lua/server/BuildingObjects/ISCompost.d.ts]
  /** @customConstructor ISCompost:new */
  export class ISCompost extends lua.server.BuildingObjects.ISCompost {}

  // [lua/server/BuildingObjects/ISDestroyCursor.d.ts]
  /** @customConstructor ISDestroyCursor:new */
  export class ISDestroyCursor extends lua.server.BuildingObjects.ISDestroyCursor {}

  // [lua/server/BuildingObjects/ISDoubleDoor.d.ts]
  /** @customConstructor ISDoubleDoor:new */
  export class ISDoubleDoor extends lua.server.BuildingObjects.ISDoubleDoor {}

  // [lua/server/BuildingObjects/ISDoubleTileFurniture.d.ts]
  /** @customConstructor ISDoubleTileFurniture:new */
  export class ISDoubleTileFurniture extends lua.server.BuildingObjects.ISDoubleTileFurniture {}

  // [lua/server/BuildingObjects/ISEmptyGraves.d.ts]
  /** @customConstructor ISEmptyGraves:new */
  export class ISEmptyGraves extends lua.server.BuildingObjects.ISEmptyGraves {}

  // [lua/server/BuildingObjects/ISLightSource.d.ts]
  /** @customConstructor ISLightSource:new */
  export class ISLightSource extends lua.server.BuildingObjects.ISLightSource {}

  // [lua/server/BuildingObjects/ISMoveableCursor.d.ts]
  /** @customConstructor ISMoveableCursor:new */
  export class ISMoveableCursor extends lua.server.BuildingObjects.ISMoveableCursor {}

  // [lua/server/BuildingObjects/ISNaturalFloor.d.ts]
  /** @customConstructor ISNaturalFloor:new */
  export class ISNaturalFloor extends lua.server.BuildingObjects.ISNaturalFloor {}

  // [lua/server/BuildingObjects/ISPaintCursor.d.ts]
  /** @customConstructor ISPaintCursor:new */
  export class ISPaintCursor extends lua.server.BuildingObjects.ISPaintCursor {}

  // [lua/server/BuildingObjects/ISPlace3DItemCursor.d.ts]
  /** @customConstructor ISPlace3DItemCursor:new */
  export class ISPlace3DItemCursor extends lua.server.BuildingObjects.ISPlace3DItemCursor {}

  // [lua/server/BuildingObjects/ISRemovePlantCursor.d.ts]
  /** @customConstructor ISRemovePlantCursor:new */
  export class ISRemovePlantCursor extends lua.server.BuildingObjects.ISRemovePlantCursor {}

  // [lua/server/BuildingObjects/ISSelectCursor.d.ts]
  /** @customConstructor ISSelectCursor:new */
  export class ISSelectCursor extends lua.server.BuildingObjects.ISSelectCursor {}

  // [lua/server/BuildingObjects/ISShovelGroundCursor.d.ts]
  /** @customConstructor ISShovelGroundCursor:new */
  export class ISShovelGroundCursor extends lua.server.BuildingObjects.ISShovelGroundCursor {}

  // [lua/server/BuildingObjects/ISSimpleFurniture.d.ts]
  /** @customConstructor ISSimpleFurniture:new */
  export class ISSimpleFurniture extends lua.server.BuildingObjects.ISSimpleFurniture {}

  // [lua/server/BuildingObjects/ISWalkToCursor.d.ts]
  /** @customConstructor ISWalkToCursor:new */
  export class ISWalkToCursor extends lua.server.BuildingObjects.ISWalkToCursor {}

  // [lua/server/BuildingObjects/ISWoodenContainer.d.ts]
  /** @customConstructor ISWoodenContainer:new */
  export class ISWoodenContainer extends lua.server.BuildingObjects.ISWoodenContainer {}

  // [lua/server/BuildingObjects/ISWoodenDoor.d.ts]
  /** @customConstructor ISWoodenDoor:new */
  export class ISWoodenDoor extends lua.server.BuildingObjects.ISWoodenDoor {}

  // [lua/server/BuildingObjects/ISWoodenDoorFrame.d.ts]
  /** @customConstructor ISWoodenDoorFrame:new */
  export class ISWoodenDoorFrame extends lua.server.BuildingObjects.ISWoodenDoorFrame {}

  // [lua/server/BuildingObjects/ISWoodenFloor.d.ts]
  /** @customConstructor ISWoodenFloor:new */
  export class ISWoodenFloor extends lua.server.BuildingObjects.ISWoodenFloor {}

  // [lua/server/BuildingObjects/ISWoodenStairs.d.ts]
  /** @customConstructor ISWoodenStairs:new */
  export class ISWoodenStairs extends lua.server.BuildingObjects.ISWoodenStairs {}

  // [lua/server/BuildingObjects/ISWoodenWall.d.ts]
  /** @customConstructor ISWoodenWall:new */
  export class ISWoodenWall extends lua.server.BuildingObjects.ISWoodenWall {}

  // [lua/server/BuildingObjects/PaintingReference.d.ts]
  export abstract class OtherPainting extends lua.server.BuildingObjects.OtherPainting {}
  export abstract class Painting extends lua.server.BuildingObjects.Painting {}

  // [lua/server/Camping/BuildingObjects/campingCampfire.d.ts]
  /** @customConstructor campingCampfire:new */
  export class campingCampfire extends lua.server.Camping.BuildingObjects.campingCampfire {}

  // [lua/server/Camping/BuildingObjects/campingTent.d.ts]
  /** @customConstructor campingTent:new */
  export class campingTent extends lua.server.Camping.BuildingObjects.campingTent {}

  // [lua/server/Camping/camping_fuel.d.ts]
  export abstract class campingFuelCategory extends lua.server.Camping.campingFuelCategory {}
  export abstract class campingFuelType extends lua.server.Camping.campingFuelType {}
  export abstract class campingLightFireCategory extends lua.server.Camping.campingLightFireCategory {}
  export abstract class campingLightFireType extends lua.server.Camping.campingLightFireType {}

  // [lua/server/Camping/camping_tent.d.ts]
  export abstract class camping extends lua.server.Camping.camping {}

  // [lua/server/Camping/camping_text.d.ts]
  export abstract class campingText extends lua.server.Camping.campingText {}

  // [lua/server/Camping/SCampfireGlobalObject.d.ts]
  /** @customConstructor SCampfireGlobalObject:new */
  export class SCampfireGlobalObject extends lua.server.Camping.SCampfireGlobalObject {}

  // [lua/server/Camping/SCampfireSystem.d.ts]
  /** @customConstructor SCampfireSystem:new */
  export class SCampfireSystem extends lua.server.Camping.SCampfireSystem {}

  // [lua/server/Climate/ClimateMain.d.ts]
  export abstract class ClimateMain extends lua.server.Climate.ClimateMain {}

  // [lua/server/Farming/BuildingObjects/farmingPlot.d.ts]
  /** @customConstructor farmingPlot:new */
  export class farmingPlot extends lua.server.Farming.BuildingObjects.farmingPlot {}

  // [lua/server/Farming/BuildingObjects/ISFarmingCursor.d.ts]
  /** @customConstructor ISFarmingCursor:new */
  export class ISFarmingCursor extends lua.server.Farming.BuildingObjects.ISFarmingCursor {}

  // [lua/server/Farming/BuildingObjects/ISFarmingCursorMouse.d.ts]
  /** @customConstructor ISFarmingCursorMouse:new */
  export class ISFarmingCursorMouse extends lua.server.Farming.BuildingObjects.ISFarmingCursorMouse {}

  // [lua/server/Farming/farming_vegetableconf.d.ts]
  export abstract class farming_vegetableconf extends lua.server.Farming.farming_vegetableconf {}

  // [lua/server/Farming/ScavengeDefinition.d.ts]
  export abstract class scavenges extends lua.server.Farming.scavenges {}

  // [lua/server/Farming/SFarmingSystem.d.ts]
  /** @customConstructor SFarmingSystem:new */
  export class SFarmingSystem extends lua.server.Farming.SFarmingSystem {}

  // [lua/server/Farming/SPlantGlobalObject.d.ts]
  /** @customConstructor SPlantGlobalObject:new */
  export class SPlantGlobalObject extends lua.server.Farming.SPlantGlobalObject {}

  // [lua/server/FireFighting/FireFighting.d.ts]
  export abstract class FireFighting extends lua.server.FireFighting.FireFighting {}

  // [lua/server/FireFighting/ISExtinguishCursor.d.ts]
  /** @customConstructor ISExtinguishCursor:new */
  export class ISExtinguishCursor extends lua.server.FireFighting.ISExtinguishCursor {}

  // [lua/server/Fishing/BuildingObjects/FishingNet.d.ts]
  /** @customConstructor fishingNet:new */
  export class fishingNet extends lua.server.Fishing.BuildingObjects.fishingNet {}

  // [lua/server/HealthSystem/HealthUpdate.d.ts]
  export abstract class healthUpdate extends lua.server.HealthSystem.healthUpdate {}

  // [lua/server/ISBuildingBlueprintManager.d.ts]
  export abstract class ISBuildingBlueprintManager extends lua.server.ISBuildingBlueprintManager {}

  // [lua/server/ISCoordConversion.d.ts]
  export abstract class ISCoordConversion extends lua.server.ISCoordConversion {}

  // [lua/server/ISObjectClickHandler.d.ts]
  export abstract class ISObjectClickHandler extends lua.server.ISObjectClickHandler {}

  // [lua/server/Items/AcceptItemFunction.d.ts]
  export abstract class AcceptItemFunction extends lua.server.Items.AcceptItemFunction {}

  // [lua/server/Items/BrokenFences.d.ts]
  export abstract class debris extends lua.server.Items.debris {}

  // [lua/server/Items/ItemBindingHandler.d.ts]
  export abstract class ItemBindingHandler extends lua.server.Items.ItemBindingHandler {}

  // [lua/server/Items/ProceduralDistributions.d.ts]
  export abstract class ProceduralDistributions extends lua.server.Items.ProceduralDistributions {}

  // [lua/server/Items/ScriptItemInterface.d.ts]
  export abstract class ScriptItemInterface extends lua.server.Items.ScriptItemInterface {}

  // [lua/server/Items/SuburbsDistributions.d.ts]
  export abstract class NoContainerFillRooms extends lua.server.Items.NoContainerFillRooms {}
  export abstract class WeaponUpgrades extends lua.server.Items.WeaponUpgrades {}

  // [lua/server/Map/MapObjects/MOFarming.d.ts]

  // [lua/server/Map/MetaEnum.d.ts]
  export abstract class MetaObjectEnum extends lua.server.Map.MetaObjectEnum {}

  // [lua/server/Map/SGlobalObject.d.ts]
  /** @customConstructor SGlobalObject:new */
  export class SGlobalObject extends lua.server.Map.SGlobalObject {}

  // [lua/server/Map/SGlobalObjectSystem.d.ts]
  /** @customConstructor SGlobalObjectSystem:new */
  export class SGlobalObjectSystem extends lua.server.Map.SGlobalObjectSystem {}

  // [lua/server/MetalDrum/BuildingObjects/ISMetalDrum.d.ts]
  /** @customConstructor ISMetalDrum:new */
  export class ISMetalDrum extends lua.server.MetalDrum.BuildingObjects.ISMetalDrum {}

  // [lua/server/MetalDrum/SMetalDrumGlobalObject.d.ts]
  /** @customConstructor SMetalDrumGlobalObject:new */
  export class SMetalDrumGlobalObject extends lua.server.MetalDrum.SMetalDrumGlobalObject {}

  // [lua/server/MetalDrum/SMetalDrumSystem.d.ts]
  /** @customConstructor SMetalDrumSystem:new */
  export class SMetalDrumSystem extends lua.server.MetalDrum.SMetalDrumSystem {}

  // [lua/server/metazones/metazoneHandler.d.ts]
  /** @noSelf */
  export const doMapZones: () => any;
  /** @noSelf */
  export const doSpawnOrigins: () => any;

  // [lua/server/Movers/ISBaseMover.d.ts]
  /** @customConstructor ISBaseMover:new */
  export class ISBaseMover extends lua.server.Movers.ISBaseMover {}

  // [lua/server/Movers/MoverStateMachine.d.ts]
  /** @customConstructor ISMoverStateMachine:new */
  export class ISMoverStateMachine extends lua.server.Movers.ISMoverStateMachine {}

  // [lua/server/Movers/MoverStates/ISBaseState.d.ts]
  /** @customConstructor ISBaseState:new */
  export class ISBaseState extends lua.server.Movers.MoverStates.ISBaseState {}

  // [lua/server/Movers/MoverStates/MoveToState.d.ts]
  /** @customConstructor MoveToState:new */
  export class MoveToState extends lua.server.Movers.MoverStates.MoveToState {}

  // [lua/server/Movers/Rabbit.d.ts]
  /** @customConstructor Rabbit:new */
  export class Rabbit extends lua.server.Movers.Rabbit {}
  /** @noSelf */
  export const testCreateRabbit: () => any;

  // [lua/server/NewSelectionSystem/GridSquareSelector.d.ts]
  export abstract class GridSquareSelector extends lua.server.NewSelectionSystem.GridSquareSelector {}

  // [lua/server/NPCs/SadisticAIDirector/SadisticMusicDirector.d.ts]
  /** @customConstructor SadisticMusicDirector:new */
  export class SadisticMusicDirector extends lua.server.NPCs.SadisticAIDirector.SadisticMusicDirector {}
  /** @noSelf */
  export const SadisticMusicDirectorTick: () => any;

  // [lua/server/Professions/Professions.d.ts]
  export abstract class Professions extends lua.server.Professions.Professions {}

  // [lua/server/radio/ISDynamicRadio.d.ts]
  export abstract class DynamicRadio extends lua.server.radio.DynamicRadio {}

  // [lua/server/radio/ISWeatherChannel.d.ts]
  export abstract class WeatherChannel extends lua.server.radio.WeatherChannel {}

  // [lua/server/RainBarrel/BuildingObjects/RainCollectorBarrel.d.ts]
  /** @customConstructor RainCollectorBarrel:new */
  export class RainCollectorBarrel extends lua.server.RainBarrel.BuildingObjects.RainCollectorBarrel {}

  // [lua/server/RainBarrel/SRainBarrelGlobalObject.d.ts]
  /** @customConstructor SRainBarrelGlobalObject:new */
  export class SRainBarrelGlobalObject extends lua.server.RainBarrel.SRainBarrelGlobalObject {}

  // [lua/server/RainBarrel/SRainBarrelSystem.d.ts]
  /** @customConstructor SRainBarrelSystem:new */
  export class SRainBarrelSystem extends lua.server.RainBarrel.SRainBarrelSystem {}

  // [lua/server/recipecode.d.ts]
  export abstract class Recipe extends lua.server.Recipe {}

  // [lua/server/Seasons/season.d.ts]
  export abstract class season extends lua.server.Seasons.season {}

  // [lua/server/Seasons/seasonProps.d.ts]
  export abstract class seasonProps extends lua.server.Seasons.seasonProps {}

  // [lua/server/TemplateReplacers.d.ts]
  export abstract class TemplateReplacers extends lua.server.TemplateReplacers {}

  // [lua/server/Traps/BuildingObjects/TrapBO.d.ts]
  /** @customConstructor TrapBO:new */
  export class TrapBO extends lua.server.Traps.BuildingObjects.TrapBO {}

  // [lua/server/Traps/ISUI/ISTrapMenu.d.ts]
  export abstract class ISTrapMenu extends lua.server.Traps.ISUI.ISTrapMenu {}

  // [lua/server/Traps/STrapGlobalObject.d.ts]
  /** @customConstructor STrapGlobalObject:new */
  export class STrapGlobalObject extends lua.server.Traps.STrapGlobalObject {}

  // [lua/server/Traps/STrapSystem.d.ts]
  /** @customConstructor STrapSystem:new */
  export class STrapSystem extends lua.server.Traps.STrapSystem {}

  // [lua/server/Traps/TrapDefinition.d.ts]
  export abstract class Animals extends lua.server.Traps.Animals {}
  export abstract class Traps extends lua.server.Traps.Traps {}

  // [lua/server/TurnBased/TurnBasedMain.d.ts]
  export abstract class TurnbasedDummyChr extends lua.server.TurnBased.TurnbasedDummyChr {}
  /** @noSelf */
  export const InitTurnbasedEngine: () => any;
  /** @noSelf */
  export const PrepareTurnbasedEngine: () => any;

  // [lua/server/TutorialHelperFunctions.d.ts]
  export abstract class TutorialHelperFunctions extends lua.server.TutorialHelperFunctions {}

  // [lua/server/Vehicles/Vehicles.d.ts]
  export abstract class Vehicles extends lua.server.Vehicles.Vehicles {}
  export abstract class VehicleUtils extends lua.server.Vehicles.VehicleUtils {}

  // [lua/server/XpSystem/XPSystem_SkillBook.d.ts]
  export abstract class SkillBook extends lua.server.XpSystem.SkillBook {}

  // [lua/server/XpSystem/XpSystem_text.d.ts]
  export abstract class xpSystemText extends lua.server.XpSystem.xpSystemText {}

  // [lua/server/XpSystem/XpUpdate.d.ts]
  export abstract class xpUpdate extends lua.server.XpSystem.xpUpdate {}

  // [lua/shared/defines.d.ts]
  export abstract class ZomboidGlobals extends lua.shared.ZomboidGlobals {}

  // [lua/shared/Definitions/ClothingRecipesDefinitions.d.ts]
  export abstract class ClothingRecipesDefinitions extends lua.shared.Definitions.ClothingRecipesDefinitions {}

  // [lua/shared/Definitions/DefaultClothing.d.ts]
  export abstract class DefaultClothing extends lua.shared.Definitions.DefaultClothing {}

  // [lua/shared/Definitions/FitnessExercises.d.ts]
  export abstract class FitnessExercises extends lua.shared.Definitions.FitnessExercises {}

  // [lua/shared/Foraging/forageDefinitions.d.ts]
  export abstract class forageCategories extends lua.shared.Foraging.forageCategories {}
  export abstract class forageDefaultDefs extends lua.shared.Foraging.forageDefaultDefs {}
  export abstract class forageDefs extends lua.shared.Foraging.forageDefs {}
  export abstract class forageSkills extends lua.shared.Foraging.forageSkills {}
  export abstract class forageZones extends lua.shared.Foraging.forageZones {}
  export abstract class scavenges extends lua.shared.Foraging.scavenges {}

  // [lua/shared/Foraging/forageSystem.d.ts]
  export abstract class forageSystem extends lua.shared.Foraging.forageSystem {}

  // [lua/shared/ISBaseObject.d.ts]
  /** @customConstructor ISBaseObject:new */
  export class ISBaseObject extends lua.shared.ISBaseObject.ISBaseObject {}

  // [lua/shared/iwbumstempmodelcompat.d.ts]
  /** @noSelf */
  export const getDir: () => any;

  // [lua/shared/JoyPad/JoyPadSetup.d.ts]
  /** @customConstructor JoypadControllerData:new */
  export class JoypadControllerData extends lua.shared.JoyPad.JoypadControllerData {}
  /** @customConstructor JoypadData:new */
  export class JoypadData extends lua.shared.JoyPad.JoypadData {}
  export abstract class joypad extends lua.shared.JoyPad.joypad {}
  export abstract class Joypad extends lua.shared.JoyPad.Joypad {}
  export abstract class JoypadState extends lua.shared.JoyPad.JoypadState {}

  // [lua/shared/keyBinding.d.ts]
  export abstract class keyBinding extends lua.shared.keyBinding {}

  // [lua/shared/Logs/ISLogSystem.d.ts]
  export abstract class ISLogSystem extends lua.shared.Logs.ISLogSystem {}

  // [lua/shared/Logs/ISPerkLog.d.ts]
  export abstract class ISPerkLog extends lua.shared.Logs.ISPerkLog {}

  // [lua/shared/luautils.d.ts]
  export abstract class luautils extends lua.shared.luautils {}

  // [lua/shared/NPCs/MainCreationMethods.d.ts]
  export abstract class BaseGameCharacterDetails extends lua.shared.NPCs.BaseGameCharacterDetails {}

  // [lua/shared/RecordedMedia/ISRecordeMedia.d.ts]
  export abstract class ISRecordedMedia extends lua.shared.RecordedMedia.ISRecordedMedia {}

  // [lua/shared/Reloading/ISRackAction.d.ts]
  /** @customConstructor ISRackAction:new */
  export class ISRackAction extends lua.shared.Reloading.ISRackAction {}

  // [lua/shared/Reloading/ISReloadable.d.ts]
  /** @customConstructor ISReloadable:new */
  export class ISReloadable extends lua.shared.Reloading.ISReloadable {}

  // [lua/shared/Reloading/ISReloadableMagazine.d.ts]
  /** @customConstructor ISReloadableMagazine:new */
  export class ISReloadableMagazine extends lua.shared.Reloading.ISReloadableMagazine {}

  // [lua/shared/Reloading/ISReloadableWeapon.d.ts]
  /** @customConstructor ISReloadableWeapon:new */
  export class ISReloadableWeapon extends lua.shared.Reloading.ISReloadableWeapon {}

  // [lua/shared/Reloading/ISReloadAction.d.ts]
  /** @customConstructor ISReloadAction:new */
  export class ISReloadAction extends lua.shared.Reloading.ISReloadAction {}

  // [lua/shared/Reloading/ISReloadManager.d.ts]
  /** @customConstructor ISReloadManager:new */
  export class ISReloadManager extends lua.shared.Reloading.ISReloadManager {}
  export abstract class aaa extends lua.shared.Reloading.aaa {}

  // [lua/shared/Reloading/ISReloadUtil.d.ts]
  /** @customConstructor ISReloadUtil:new */
  export class ISReloadUtil extends lua.shared.Reloading.ISReloadUtil {}

  // [lua/shared/Reloading/ISRevolverWeapon.d.ts]
  /** @customConstructor ISRevolverWeapon:new */
  export class ISRevolverWeapon extends lua.shared.Reloading.ISRevolverWeapon {}

  // [lua/shared/Reloading/ISSemiAutoWeapon.d.ts]
  /** @customConstructor ISSemiAutoWeapon:new */
  export class ISSemiAutoWeapon extends lua.shared.Reloading.ISSemiAutoWeapon {}

  // [lua/shared/Reloading/ISShotgunWeapon.d.ts]
  /** @customConstructor ISShotgunWeapon:new */
  export class ISShotgunWeapon extends lua.shared.Reloading.ISShotgunWeapon {}

  // [lua/shared/Reloading/stormysReload.d.ts]
  export abstract class ReloadManager extends lua.shared.Reloading.ReloadManager {}
  /** @noSelf */
  export const addShotgun: () => any;

  // [lua/shared/SoundBanks/SoundBanks.d.ts]
  export abstract class ambientSoundTable extends lua.shared.SoundBanks.ambientSoundTable {}
  export abstract class baseSoundTable extends lua.shared.SoundBanks.baseSoundTable {}
  export abstract class footStepTable extends lua.shared.SoundBanks.footStepTable {}
  export abstract class globalSoundTable extends lua.shared.SoundBanks.globalSoundTable {}
  export abstract class voiceTable extends lua.shared.SoundBanks.voiceTable {}
  /** @noSelf */
  export const doLoadSoundbanks: () => any;

  // [lua/shared/SpawnRegions.d.ts]
  export abstract class SpawnRegionMgr extends lua.shared.SpawnRegionMgr {}

  // [lua/shared/StashDescriptions/StashUtil.d.ts]
  export abstract class StashUtil extends lua.shared.StashDescriptions.StashUtil {}

  // [lua/shared/TimedActions/ISBaseTimedAction.d.ts]
  /** @customConstructor ISBaseTimedAction:new */
  export class ISBaseTimedAction extends lua.shared.TimedActions.ISBaseTimedAction {}

  // [lua/shared/Util/AdjacentFreeTileFinder.d.ts]
  export abstract class AdjacentFreeTileFinder extends lua.shared.Util.AdjacentFreeTileFinder {}

  // [lua/shared/Util/BuildingHelper.d.ts]
  export abstract class BuildingHelper extends lua.shared.Util.BuildingHelper {}

  // [lua/shared/Util/ISPriorityTable.d.ts]
  export abstract class ISPriorityTable extends lua.shared.Util.ISPriorityTable {}

  // [lua/shared/Util/LuaList.d.ts]
  /** @customConstructor LuaList:new */
  export class LuaList extends lua.shared.Util.LuaList {}

  // [lua/shared/Util/LuaNet.d.ts]
  export abstract class LuaNet extends lua.shared.Util.LuaNet {}

  // [lua/shared/Util/StringReplacer.d.ts]
  export abstract class StringReplacer extends lua.shared.Util.StringReplacer {}

  // [PARTIAL:STOP]
}
