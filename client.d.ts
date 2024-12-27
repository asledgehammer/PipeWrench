/**  @noSelfInFile */
/// <reference path="reference.d.ts" />
declare module '@asledgehammer/pipewrench/client' {
  // [LUA-PARTIAL:START]

  // [lua/client/Animals/CAnimals_Interact.d.ts]
  export abstract class CAnimals_Interact extends lua.client.Animals.CAnimals_Interact {}

  // [lua/client/Animals/CButcherHook_Interact.d.ts]
  export abstract class CButcherHook_Interact extends lua.client.Animals.CButcherHook_Interact {}

  // [lua/client/Animals/CHutch_Interact.d.ts]
  export abstract class CHutch_Interact extends lua.client.Animals.CHutch_Interact {}

  // [lua/client/Bed/CBed_Interact.d.ts]
  export abstract class CBed_Interact extends lua.client.Bed.CBed_Interact {}

  // [lua/client/BuildingObjects/ISUI/ISBuildMenu.d.ts]
  export abstract class ISBuildMenu extends lua.client.BuildingObjects.ISUI.ISBuildMenu {}

  // [lua/client/BuildingObjects/ISUI/ISInventoryBuildMenu.d.ts]
  export abstract class ISInventoryBuildMenu extends lua.client.BuildingObjects.ISUI.ISInventoryBuildMenu {}

  // [lua/client/BuildingObjects/ISUI/ISPaintMenu.d.ts]
  export abstract class ISPaintMenu extends lua.client.BuildingObjects.ISUI.ISPaintMenu {}

  // [lua/client/BuildingObjects/TimedActions/ISBuildAction.d.ts]
  /** @customConstructor ISBuildAction:new */
  export class ISBuildAction extends lua.client.BuildingObjects.TimedActions.ISBuildAction {}

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

  // [lua/client/Chat/ISAlert.d.ts]
  /** @customConstructor ISAlert:new */
  export class ISAlert extends lua.client.Chat.ISAlert {}

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
  /** @customConstructor AnimationClipViewer_SoundBar:new */
  export class AnimationClipViewer_SoundBar extends lua.client.DebugUIs.AnimationClipViewer_SoundBar {}
  /** @customConstructor AnimationClipViewer_SoundPanel:new */
  export class AnimationClipViewer_SoundPanel extends lua.client.DebugUIs.AnimationClipViewer_SoundPanel {}
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

  // [lua/client/DebugUIs/DebugChunkState/DebugChunkState_ObjectAtCursorPanel.d.ts]
  /** @customConstructor DebugChunkState_ObjectAtCursorPanel:new */
  export class DebugChunkState_ObjectAtCursorPanel extends lua.client.DebugUIs.DebugChunkState
    .DebugChunkState_ObjectAtCursorPanel {}

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
  /** @customConstructor DebugChunkStateUI_SpritePopupPanel:new */
  export class DebugChunkStateUI_SpritePopupPanel extends lua.client.DebugUIs.DebugChunkState
    .DebugChunkStateUI_SpritePopupPanel {}

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

  // [lua/client/DebugUIs/DebugMenu/Audio/ISAudioDebugPanel.d.ts]
  /** @customConstructor ISAudioDebugPanel:new */
  export class ISAudioDebugPanel extends lua.client.DebugUIs.DebugMenu.Audio.ISAudioDebugPanel {}

  // [lua/client/DebugUIs/DebugMenu/Audio/ISFMODEventPlayerPanel.d.ts]
  /** @customConstructor ISFMODEventPlayerPanel:new */
  export class ISFMODEventPlayerPanel extends lua.client.DebugUIs.DebugMenu.Audio.ISFMODEventPlayerPanel {}
  /** @customConstructor ISFMODEventPlayerParameterEditor:new */
  export class ISFMODEventPlayerParameterEditor extends lua.client.DebugUIs.DebugMenu.Audio
    .ISFMODEventPlayerParameterEditor {}

  // [lua/client/DebugUIs/DebugMenu/Audio/ISMusicIntensityEventsPanel.d.ts]
  /** @customConstructor ISMusicIntensityEventsPanel:new */
  export class ISMusicIntensityEventsPanel extends lua.client.DebugUIs.DebugMenu.Audio.ISMusicIntensityEventsPanel {}

  // [lua/client/DebugUIs/DebugMenu/Audio/ISMusicThreatStatusPanel.d.ts]
  /** @customConstructor ISMusicThreatStatusPanel:new */
  export class ISMusicThreatStatusPanel extends lua.client.DebugUIs.DebugMenu.Audio.ISMusicThreatStatusPanel {}

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

  // [lua/client/DebugUIs/DebugMenu/Entity/ISEntitiesDebugWindow.d.ts]
  /** @customConstructor ISEntitiesDebugWindow:new */
  export class ISEntitiesDebugWindow extends lua.client.DebugUIs.DebugMenu.Entity.ISEntitiesDebugWindow {}

  // [lua/client/DebugUIs/DebugMenu/Entity/ISEntityInstancesPanel.d.ts]
  /** @customConstructor ISEntityInstancesPanel:new */
  export class ISEntityInstancesPanel extends lua.client.DebugUIs.DebugMenu.Entity.ISEntityInstancesPanel {}

  // [lua/client/DebugUIs/DebugMenu/Entity/ISEntityScriptsPanel.d.ts]
  /** @customConstructor ISEntityScriptsPanel:new */
  export class ISEntityScriptsPanel extends lua.client.DebugUIs.DebugMenu.Entity.ISEntityScriptsPanel {}

  // [lua/client/DebugUIs/DebugMenu/Entity/ISEntityViewPanel.d.ts]
  /** @customConstructor ISEntityViewPanel:new */
  export class ISEntityViewPanel extends lua.client.DebugUIs.DebugMenu.Entity.ISEntityViewPanel {}

  // [lua/client/DebugUIs/DebugMenu/Entity/ISEntityViewWindow.d.ts]
  /** @customConstructor ISEntityViewWindow:new */
  export class ISEntityViewWindow extends lua.client.DebugUIs.DebugMenu.Entity.ISEntityViewWindow {}

  // [lua/client/DebugUIs/DebugMenu/Fluids/ISFluidCategoriesViewPanel.d.ts]
  /** @customConstructor ISFluidCategoriesViewPanel:new */
  export class ISFluidCategoriesViewPanel extends lua.client.DebugUIs.DebugMenu.Fluids.ISFluidCategoriesViewPanel {}

  // [lua/client/DebugUIs/DebugMenu/Fluids/ISFluidDebugWindow.d.ts]
  /** @customConstructor ISFluidDebugWindow:new */
  export class ISFluidDebugWindow extends lua.client.DebugUIs.DebugMenu.Fluids.ISFluidDebugWindow {}

  // [lua/client/DebugUIs/DebugMenu/Fluids/ISFluidItemsViewPanel.d.ts]
  /** @customConstructor ISFluidItemsViewPanel:new */
  export class ISFluidItemsViewPanel extends lua.client.DebugUIs.DebugMenu.Fluids.ISFluidItemsViewPanel {}

  // [lua/client/DebugUIs/DebugMenu/Fluids/ISFluidMixerViewPanel.d.ts]
  /** @customConstructor ISFluidMixerViewPanel:new */
  export class ISFluidMixerViewPanel extends lua.client.DebugUIs.DebugMenu.Fluids.ISFluidMixerViewPanel {}

  // [lua/client/DebugUIs/DebugMenu/Fluids/ISFluidOverviewPanel.d.ts]
  /** @customConstructor ISFluidOverviewPanel:new */
  export class ISFluidOverviewPanel extends lua.client.DebugUIs.DebugMenu.Fluids.ISFluidOverviewPanel {}

  // [lua/client/DebugUIs/DebugMenu/Fluids/ISFluidViewPanel.d.ts]
  /** @customConstructor ISFluidViewPanel:new */
  export class ISFluidViewPanel extends lua.client.DebugUIs.DebugMenu.Fluids.ISFluidViewPanel {}

  // [lua/client/DebugUIs/DebugMenu/General/ISBulletTracerEffect.d.ts]
  /** @customConstructor ISBulletTracerEffect:new */
  export class ISBulletTracerEffect extends lua.client.DebugUIs.DebugMenu.General.ISBulletTracerEffect {}

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
  /** @noSelf */
  export const doNewUIDebug: () => any;

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

  // [lua/client/DebugUIs/DebugMenu/Physics/DebugRagdollPanel.d.ts]
  /** @customConstructor DebugRagdollPanel:new */
  export class DebugRagdollPanel extends lua.client.DebugUIs.DebugMenu.Physics.DebugRagdollPanel {}

  // [lua/client/DebugUIs/DebugMenu/Physics/ForceHitReactionPanel.d.ts]
  /** @customConstructor ForceHitReactionPanel:new */
  export class ForceHitReactionPanel extends lua.client.DebugUIs.DebugMenu.Physics.ForceHitReactionPanel {}

  // [lua/client/DebugUIs/DebugMenu/Physics/HitReactionSettingsPanel.d.ts]
  /** @customConstructor HitReactionSettingsPanel:new */
  export class HitReactionSettingsPanel extends lua.client.DebugUIs.DebugMenu.Physics.HitReactionSettingsPanel {}

  // [lua/client/DebugUIs/DebugMenu/Physics/RagdollSettingsPanel.d.ts]
  /** @customConstructor RagdollSettingsPanel:new */
  export class RagdollSettingsPanel extends lua.client.DebugUIs.DebugMenu.Physics.RagdollSettingsPanel {}

  // [lua/client/DebugUIs/DebugMenu/Player/ISCharacterDebugUI.d.ts]
  /** @customConstructor ISCharacterDebugUI:new */
  export class ISCharacterDebugUI extends lua.client.DebugUIs.DebugMenu.Player.ISCharacterDebugUI {}

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

  // [lua/client/DebugUIs/DebugMenu/Recipes/ISCraftRecipeDbgWindow.d.ts]
  /** @customConstructor ISCraftRecipeDbgWindow:new */
  export class ISCraftRecipeDbgWindow extends lua.client.DebugUIs.DebugMenu.Recipes.ISCraftRecipeDbgWindow {}

  // [lua/client/DebugUIs/DebugMenu/Recipes/ISCraftRecipeIconsPanel.d.ts]
  /** @customConstructor ISCraftRecipeIconsPanel:new */
  export class ISCraftRecipeIconsPanel extends lua.client.DebugUIs.DebugMenu.Recipes.ISCraftRecipeIconsPanel {}

  // [lua/client/DebugUIs/DebugMenu/Recipes/ISCraftRecipeMonitor.d.ts]
  /** @customConstructor ISCraftRecipeMonitor:new */
  export class ISCraftRecipeMonitor extends lua.client.DebugUIs.DebugMenu.Recipes.ISCraftRecipeMonitor {}

  // [lua/client/DebugUIs/DebugMenu/Recipes/ISCraftRecipeOverviewPanel.d.ts]
  /** @customConstructor ISCraftRecipeOverviewPanel:new */
  export class ISCraftRecipeOverviewPanel extends lua.client.DebugUIs.DebugMenu.Recipes.ISCraftRecipeOverviewPanel {}

  // [lua/client/DebugUIs/DebugMenu/Recipes/ISCraftRecipeQueriesPanel.d.ts]
  /** @customConstructor ISCraftRecipeQueriesPanel:new */
  export class ISCraftRecipeQueriesPanel extends lua.client.DebugUIs.DebugMenu.Recipes.ISCraftRecipeQueriesPanel {}

  // [lua/client/DebugUIs/DebugMenu/Recipes/ISCraftRecipeTagsDebugPanel.d.ts]
  /** @customConstructor ISCraftRecipeTagsDebugPanel:new */
  export class ISCraftRecipeTagsDebugPanel extends lua.client.DebugUIs.DebugMenu.Recipes.ISCraftRecipeTagsDebugPanel {}

  // [lua/client/DebugUIs/DebugMenu/Recipes/ISCraftRecipeTagsPanel.d.ts]
  /** @customConstructor ISCraftRecipeTagsPanel:new */
  export class ISCraftRecipeTagsPanel extends lua.client.DebugUIs.DebugMenu.Recipes.ISCraftRecipeTagsPanel {}

  // [lua/client/DebugUIs/DebugMenu/Recipes/ISRecipeMonitor.d.ts]
  /** @customConstructor ISRecipeMonitor:new */
  export class ISRecipeMonitor extends lua.client.DebugUIs.DebugMenu.Recipes.ISRecipeMonitor {}

  // [lua/client/DebugUIs/DebugMenu/Scripts/ISScriptsDebugWindow.d.ts]
  /** @customConstructor ISScriptsDebugWindow:new */
  export class ISScriptsDebugWindow extends lua.client.DebugUIs.DebugMenu.Scripts.ISScriptsDebugWindow {}

  // [lua/client/DebugUIs/DebugMenu/Scripts/ISScriptViewPanel.d.ts]
  /** @customConstructor ISScriptViewPanel:new */
  export class ISScriptViewPanel extends lua.client.DebugUIs.DebugMenu.Scripts.ISScriptViewPanel {}

  // [lua/client/DebugUIs/DebugMenu/Scripts/ISScriptViewWindow.d.ts]
  /** @customConstructor ISScriptViewWindow:new */
  export class ISScriptViewWindow extends lua.client.DebugUIs.DebugMenu.Scripts.ISScriptViewWindow {}

  // [lua/client/DebugUIs/DebugMenu/Scripts/ISStringListView.d.ts]
  /** @customConstructor ISStringListView:new */
  export class ISStringListView extends lua.client.DebugUIs.DebugMenu.Scripts.ISStringListView {}
  export abstract class ISStringListViewNode extends lua.client.DebugUIs.DebugMenu.Scripts.ISStringListViewNode {}

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

  // [lua/client/DebugUIs/DebugMenu/UnitTests/UnitTestsDebug.d.ts]
  /** @customConstructor UnitTestsDebug:new */
  export class UnitTestsDebug extends lua.client.DebugUIs.DebugMenu.UnitTests.UnitTestsDebug {}

  // [lua/client/DebugUIs/DebugMenu/UnitTests/UnitTestsTimedActionsPanel.d.ts]
  /** @customConstructor UnitTestsTimedActionsPanel:new */
  export class UnitTestsTimedActionsPanel extends lua.client.DebugUIs.DebugMenu.UnitTests.UnitTestsTimedActionsPanel {}
  export abstract class UnitTestsTimedActionsPanelTestResults extends lua.client.DebugUIs.DebugMenu.UnitTests
    .UnitTestsTimedActionsPanelTestResults {}

  // [lua/client/DebugUIs/DebugMenu/WorldFlares/WorldFlaresDebug.d.ts]
  /** @customConstructor WorldFlaresDebug:new */
  export class WorldFlaresDebug extends lua.client.DebugUIs.DebugMenu.WorldFlares.WorldFlaresDebug {}

  // [lua/client/DebugUIs/DebugMenu/Xui/XuiDebugLayoutWindow.d.ts]
  /** @customConstructor XuiDebugLayoutWindow:new */
  export class XuiDebugLayoutWindow extends lua.client.DebugUIs.DebugMenu.Xui.XuiDebugLayoutWindow {}

  // [lua/client/DebugUIs/DebugMenu/Xui/XuiDebugWindow.d.ts]
  /** @customConstructor XuiDebugWindow:new */
  export class XuiDebugWindow extends lua.client.DebugUIs.DebugMenu.Xui.XuiDebugWindow {}

  // [lua/client/DebugUIs/DebugMenu/Xui/XuiTestWindow.d.ts]
  /** @customConstructor XuiTestWindow:new */
  export class XuiTestWindow extends lua.client.DebugUIs.DebugMenu.Xui.XuiTestWindow {}

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

  // [lua/client/DebugUIs/ISDebugAnimationTextUI.d.ts]
  /** @customConstructor ISDebugAnimationTextUI:new */
  export class ISDebugAnimationTextUI extends lua.client.DebugUIs.ISDebugAnimationTextUI {}

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

  // [lua/client/DebugUIs/SeamEditor/SeamEditorUI_SeamTileList.d.ts]
  /** @customConstructor SeamEditorUI_SeamTileList:new */
  export class SeamEditorUI_SeamTileList extends lua.client.DebugUIs.SeamEditor.SeamEditorUI_SeamTileList {}

  // [lua/client/DebugUIs/SeamEditor/SeamEditorUI_TileList.d.ts]
  /** @customConstructor SeamEditorUI_TileList:new */
  export class SeamEditorUI_TileList extends lua.client.DebugUIs.SeamEditor.SeamEditorUI_TileList {}

  // [lua/client/DebugUIs/SeamEditor/SeamEditorUI_TileList2.d.ts]
  /** @customConstructor SeamEditorUI_TileList2:new */
  export class SeamEditorUI_TileList2 extends lua.client.DebugUIs.SeamEditor.SeamEditorUI_TileList2 {}

  // [lua/client/DebugUIs/SeamEditor/SeamEditorUI.d.ts]
  /** @customConstructor SeamEditorUI:new */
  export class SeamEditorUI extends lua.client.DebugUIs.SeamEditor.SeamEditorUI {}
  /** @customConstructor SeamEditorUI_OptionsPanel:new */
  export class SeamEditorUI_OptionsPanel extends lua.client.DebugUIs.SeamEditor.SeamEditorUI_OptionsPanel {}
  /** @customConstructor SeamEditorUI_Scene:new */
  export class SeamEditorUI_Scene extends lua.client.DebugUIs.SeamEditor.SeamEditorUI_Scene {}
  /** @customConstructor SeamEditorUI_TilePicker:new */
  export class SeamEditorUI_TilePicker extends lua.client.DebugUIs.SeamEditor.SeamEditorUI_TilePicker {}
  /** @customConstructor SeamEditorUI_TilePicker2:new */
  export class SeamEditorUI_TilePicker2 extends lua.client.DebugUIs.SeamEditor.SeamEditorUI_TilePicker2 {}
  /** @noSelf */
  export const SeamEditorUI_InitUI: () => any;

  // [lua/client/DebugUIs/SourceWindow.d.ts]
  /** @customConstructor SourceWindow:new */
  export class SourceWindow extends lua.client.DebugUIs.SourceWindow {}

  // [lua/client/DebugUIs/SpriteModelEditor.d.ts]
  /** @customConstructor SpriteModelEditor:new */
  export class SpriteModelEditor extends lua.client.DebugUIs.SpriteModelEditor {}
  /** @customConstructor SpriteModelEditor_ListBox:new */
  export class SpriteModelEditor_ListBox extends lua.client.DebugUIs.SpriteModelEditor_ListBox {}
  /** @customConstructor SpriteModelEditor_OptionsPanel:new */
  export class SpriteModelEditor_OptionsPanel extends lua.client.DebugUIs.SpriteModelEditor_OptionsPanel {}
  /** @customConstructor SpriteModelEditor_Scene:new */
  export class SpriteModelEditor_Scene extends lua.client.DebugUIs.SpriteModelEditor_Scene {}
  /** @customConstructor SpriteModelEditor_TileList:new */
  export class SpriteModelEditor_TileList extends lua.client.DebugUIs.SpriteModelEditor_TileList {}
  /** @customConstructor SpriteModelEditor_TilePicker:new */
  export class SpriteModelEditor_TilePicker extends lua.client.DebugUIs.SpriteModelEditor_TilePicker {}
  /** @noSelf */
  export const SpriteModelEditor_InitUI: () => any;

  // [lua/client/DebugUIs/StashDebug.d.ts]
  /** @customConstructor StashDebug:new */
  export class StashDebug extends lua.client.DebugUIs.StashDebug {}

  // [lua/client/DebugUIs/StreamMapWindow.d.ts]
  /** @customConstructor StreamMapWindow:new */
  export class StreamMapWindow extends lua.client.DebugUIs.StreamMapWindow {}

  // [lua/client/DebugUIs/TextureViewer.d.ts]
  /** @customConstructor TextureWindow:new */
  export class TextureWindow extends lua.client.DebugUIs.TextureWindow {}

  // [lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_EditMode.d.ts]
  /** @customConstructor TileGeometryEditor_BoxPanel:new */
  export class TileGeometryEditor_BoxPanel extends lua.client.DebugUIs.TileGeometryEditor.TileGeometryEditor_BoxPanel {}
  /** @customConstructor TileGeometryEditor_CylinderPanel:new */
  export class TileGeometryEditor_CylinderPanel extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_CylinderPanel {}
  /** @customConstructor TileGeometryEditor_DepthTexturePanel:new */
  export class TileGeometryEditor_DepthTexturePanel extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_DepthTexturePanel {}
  /** @customConstructor TileGeometryEditor_EditMode:new */
  export class TileGeometryEditor_EditMode extends lua.client.DebugUIs.TileGeometryEditor.TileGeometryEditor_EditMode {}
  /** @customConstructor TileGeometryEditor_EditMode_Geometry:new */
  export class TileGeometryEditor_EditMode_Geometry extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_EditMode_Geometry {}
  /** @customConstructor TileGeometryEditor_EditMode_SceneTiles:new */
  export class TileGeometryEditor_EditMode_SceneTiles extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_EditMode_SceneTiles {}
  /** @customConstructor TileGeometryEditor_EditMode_Seating:new */
  export class TileGeometryEditor_EditMode_Seating extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_EditMode_Seating {}
  /** @customConstructor TileGeometryEditor_GeometryListBox:new */
  export class TileGeometryEditor_GeometryListBox extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_GeometryListBox {}
  /** @customConstructor TileGeometryEditor_ListBox:new */
  export class TileGeometryEditor_ListBox extends lua.client.DebugUIs.TileGeometryEditor.TileGeometryEditor_ListBox {}
  /** @customConstructor TileGeometryEditor_PropertiesPanel:new */
  export class TileGeometryEditor_PropertiesPanel extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_PropertiesPanel {}
  /** @customConstructor TileGeometryEditor_SeatingListBox:new */
  export class TileGeometryEditor_SeatingListBox extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_SeatingListBox {}
  /** @customConstructor TileGeometryEditor_SeatingPropertiesPanel:new */
  export class TileGeometryEditor_SeatingPropertiesPanel extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_SeatingPropertiesPanel {}
  /** @customConstructor TileGeometryEditor_TilePicker3:new */
  export class TileGeometryEditor_TilePicker3 extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_TilePicker3 {}

  // [lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_SceneTiles.d.ts]
  /** @customConstructor TileGeometryEditor_SceneTiles:new */
  export class TileGeometryEditor_SceneTiles extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_SceneTiles {}

  // [lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_TileList.d.ts]
  /** @customConstructor TileGeometryEditor_TileList:new */
  export class TileGeometryEditor_TileList extends lua.client.DebugUIs.TileGeometryEditor.TileGeometryEditor_TileList {}

  // [lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_TileList2.d.ts]
  /** @customConstructor TileGeometryEditor_TileList2:new */
  export class TileGeometryEditor_TileList2 extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_TileList2 {}

  // [lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_TileList3.d.ts]
  /** @customConstructor TileGeometryEditor_TileList3:new */
  export class TileGeometryEditor_TileList3 extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_TileList3 {}

  // [lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_Tools.d.ts]
  /** @customConstructor TileGeometryEditor_AddTileTool:new */
  export class TileGeometryEditor_AddTileTool extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_AddTileTool {}
  /** @customConstructor TileGeometryEditor_DepthRectTool:new */
  export class TileGeometryEditor_DepthRectTool extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_DepthRectTool {}
  /** @customConstructor TileGeometryEditor_EditPolygonTool:new */
  export class TileGeometryEditor_EditPolygonTool extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_EditPolygonTool {}
  /** @customConstructor TileGeometryEditor_GizmoTool:new */
  export class TileGeometryEditor_GizmoTool extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_GizmoTool {}
  /** @customConstructor TileGeometryEditor_GizmoTool_ResizeBox:new */
  export class TileGeometryEditor_GizmoTool_ResizeBox extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_GizmoTool_ResizeBox {}
  /** @customConstructor TileGeometryEditor_GizmoTool_ResizeCylinder:new */
  export class TileGeometryEditor_GizmoTool_ResizeCylinder extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_GizmoTool_ResizeCylinder {}
  /** @customConstructor TileGeometryEditor_GizmoTool_Rotate:new */
  export class TileGeometryEditor_GizmoTool_Rotate extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_GizmoTool_Rotate {}
  /** @customConstructor TileGeometryEditor_GizmoTool_Scale:new */
  export class TileGeometryEditor_GizmoTool_Scale extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_GizmoTool_Scale {}
  /** @customConstructor TileGeometryEditor_GizmoTool_SetSurface:new */
  export class TileGeometryEditor_GizmoTool_SetSurface extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_GizmoTool_SetSurface {}
  /** @customConstructor TileGeometryEditor_GizmoTool_Translate:new */
  export class TileGeometryEditor_GizmoTool_Translate extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_GizmoTool_Translate {}
  /** @customConstructor TileGeometryEditor_MoveTileTool:new */
  export class TileGeometryEditor_MoveTileTool extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_MoveTileTool {}
  /** @customConstructor TileGeometryEditor_Tool:new */
  export class TileGeometryEditor_Tool extends lua.client.DebugUIs.TileGeometryEditor.TileGeometryEditor_Tool {}

  // [lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor.d.ts]
  /** @customConstructor TileGeometryEditor:new */
  export class TileGeometryEditor extends lua.client.DebugUIs.TileGeometryEditor.TileGeometryEditor {}
  /** @customConstructor TileGeometryEditor_OptionsPanel:new */
  export class TileGeometryEditor_OptionsPanel extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_OptionsPanel {}
  /** @customConstructor TileGeometryEditor_Scene:new */
  export class TileGeometryEditor_Scene extends lua.client.DebugUIs.TileGeometryEditor.TileGeometryEditor_Scene {}
  /** @customConstructor TileGeometryEditor_SwitchView:new */
  export class TileGeometryEditor_SwitchView extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_SwitchView {}
  /** @customConstructor TileGeometryEditor_TilePicker:new */
  export class TileGeometryEditor_TilePicker extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_TilePicker {}
  /** @customConstructor TileGeometryEditor_TilePicker2:new */
  export class TileGeometryEditor_TilePicker2 extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_TilePicker2 {}
  /** @noSelf */
  export const TileGeometryEditor_InitUI: () => any;

  // [lua/client/DebugUIs/WatchWindow.d.ts]
  /** @customConstructor WatchWindow:new */
  export class WatchWindow extends lua.client.DebugUIs.WatchWindow {}

  // [lua/client/Entity/ISEntityUI.d.ts]
  export abstract class ISEntityUI extends lua.client.Entity.ISEntityUI {}

  // [lua/client/Entity/ISEntityUtilUI.d.ts]
  export abstract class ISEntityUtilUI extends lua.client.Entity.ISEntityUtilUI {}

  // [lua/client/Entity/ISUI/BuildRecipe/ISBuildPanel.d.ts]
  /** @customConstructor ISBuildPanel:new */
  export class ISBuildPanel extends lua.client.Entity.ISUI.BuildRecipe.ISBuildPanel {}

  // [lua/client/Entity/ISUI/BuildRecipe/ISBuildRecipePanel.d.ts]
  /** @customConstructor ISBuildRecipePanel:new */
  export class ISBuildRecipePanel extends lua.client.Entity.ISUI.BuildRecipe.ISBuildRecipePanel {}

  // [lua/client/Entity/ISUI/BuildRecipe/ISBuildWidgetIngredientsInputs.d.ts]
  /** @customConstructor ISBuildWidgetIngredientsInputs:new */
  export class ISBuildWidgetIngredientsInputs extends lua.client.Entity.ISUI.BuildRecipe
    .ISBuildWidgetIngredientsInputs {}

  // [lua/client/Entity/ISUI/BuildRecipe/ISWidgetBuildControl.d.ts]
  /** @customConstructor ISWidgetBuildControl:new */
  export class ISWidgetBuildControl extends lua.client.Entity.ISUI.BuildRecipe.ISWidgetBuildControl {}

  // [lua/client/Entity/ISUI/Components/Crafting/ISButcherHookCraftPanel.d.ts]
  /** @customConstructor ISButcherHookCraftPanel:new */
  export class ISButcherHookCraftPanel extends lua.client.Entity.ISUI.Components.Crafting.ISButcherHookCraftPanel {}

  // [lua/client/Entity/ISUI/Components/Crafting/ISButcherHookProcessorPanel.d.ts]
  /** @customConstructor ISButcherHookProcessorPanel:new */
  export class ISButcherHookProcessorPanel extends lua.client.Entity.ISUI.Components.Crafting
    .ISButcherHookProcessorPanel {}

  // [lua/client/Entity/ISUI/Components/Crafting/ISCraftBenchPanel.d.ts]
  /** @customConstructor ISCraftBenchPanel:new */
  export class ISCraftBenchPanel extends lua.client.Entity.ISUI.Components.Crafting.ISCraftBenchPanel {}

  // [lua/client/Entity/ISUI/Components/Crafting/ISCraftLogicPanel.d.ts]
  /** @customConstructor ISCraftLogicPanel:new */
  export class ISCraftLogicPanel extends lua.client.Entity.ISUI.Components.Crafting.ISCraftLogicPanel {}

  // [lua/client/Entity/ISUI/Components/Crafting/ISFurnaceLogicPanel.d.ts]
  /** @customConstructor ISFurnaceLogicPanel:new */
  export class ISFurnaceLogicPanel extends lua.client.Entity.ISUI.Components.Crafting.ISFurnaceLogicPanel {}

  // [lua/client/Entity/ISUI/Components/Crafting/ISMashingLogicPanel.d.ts]
  /** @customConstructor ISMashingLogicPanel:new */
  export class ISMashingLogicPanel extends lua.client.Entity.ISUI.Components.Crafting.ISMashingLogicPanel {}

  // [lua/client/Entity/ISUI/Components/ISBaseComponentPanel.d.ts]
  /** @customConstructor ISBaseComponentPanel:new */
  export class ISBaseComponentPanel extends lua.client.Entity.ISUI.Components.ISBaseComponentPanel {}

  // [lua/client/Entity/ISUI/Components/ISTestComponentPanel.d.ts]
  /** @customConstructor ISTestComponentPanel:new */
  export class ISTestComponentPanel extends lua.client.Entity.ISUI.Components.ISTestComponentPanel {}

  // [lua/client/Entity/ISUI/Controls/ISComponentsListPanel.d.ts]
  /** @customConstructor ISComponentsListPanel:new */
  export class ISComponentsListPanel extends lua.client.Entity.ISUI.Controls.ISComponentsListPanel {}

  // [lua/client/Entity/ISUI/Controls/ISComponentsTabPanel.d.ts]
  /** @customConstructor ISComponentsTabPanel:new */
  export class ISComponentsTabPanel extends lua.client.Entity.ISUI.Controls.ISComponentsTabPanel {}

  // [lua/client/Entity/ISUI/Controls/ISEnergyBar.d.ts]
  /** @customConstructor ISEnergyBar:new */
  export class ISEnergyBar extends lua.client.Entity.ISUI.Controls.ISEnergyBar {}

  // [lua/client/Entity/ISUI/Controls/ISEnergySlot.d.ts]
  /** @customConstructor ISEnergySlot:new */
  export class ISEnergySlot extends lua.client.Entity.ISUI.Controls.ISEnergySlot {}

  // [lua/client/Entity/ISUI/Controls/ISEnergySlotPanel.d.ts]
  /** @customConstructor ISEnergySlotPanel:new */
  export class ISEnergySlotPanel extends lua.client.Entity.ISUI.Controls.ISEnergySlotPanel {}

  // [lua/client/Entity/ISUI/Controls/ISFluidSlot.d.ts]
  /** @customConstructor ISFluidSlot:new */
  export class ISFluidSlot extends lua.client.Entity.ISUI.Controls.ISFluidSlot {}

  // [lua/client/Entity/ISUI/Controls/ISFluidSlotPanel.d.ts]
  /** @customConstructor ISFluidSlotPanel:new */
  export class ISFluidSlotPanel extends lua.client.Entity.ISUI.Controls.ISFluidSlotPanel {}

  // [lua/client/Entity/ISUI/Controls/ISGroupBox.d.ts]
  /** @customConstructor ISGroupBox:new */
  export class ISGroupBox extends lua.client.Entity.ISUI.Controls.ISGroupBox {}

  // [lua/client/Entity/ISUI/Controls/ISItemSlot.d.ts]
  /** @customConstructor ISItemSlot:new */
  export class ISItemSlot extends lua.client.Entity.ISUI.Controls.ISItemSlot {}

  // [lua/client/Entity/ISUI/Controls/ISItemSlotPanel.d.ts]
  /** @customConstructor ISItemSlotPanel:new */
  export class ISItemSlotPanel extends lua.client.Entity.ISUI.Controls.ISItemSlotPanel {}

  // [lua/client/Entity/ISUI/Controls/ISTableLayout.d.ts]
  /** @customConstructor ISTableLayout:new */
  export class ISTableLayout extends lua.client.Entity.ISUI.Controls.ISTableLayout {}
  /** @customConstructor ISTableLayoutCell:new */
  export class ISTableLayoutCell extends lua.client.Entity.ISUI.Controls.ISTableLayoutCell {}
  /** @customConstructor ISTableLayoutColumn:new */
  export class ISTableLayoutColumn extends lua.client.Entity.ISUI.Controls.ISTableLayoutColumn {}
  /** @customConstructor ISTableLayoutRow:new */
  export class ISTableLayoutRow extends lua.client.Entity.ISUI.Controls.ISTableLayoutRow {}

  // [lua/client/Entity/ISUI/Controls/ISVendorSpiral.d.ts]
  /** @customConstructor ISVendorSpiral:new */
  export class ISVendorSpiral extends lua.client.Entity.ISUI.Controls.ISVendorSpiral {}

  // [lua/client/Entity/ISUI/Controls/ISWidgetComponentHeader.d.ts]
  /** @customConstructor ISWidgetComponentHeader:new */
  export class ISWidgetComponentHeader extends lua.client.Entity.ISUI.Controls.ISWidgetComponentHeader {}

  // [lua/client/Entity/ISUI/Controls/ISWidgetCraftControl.d.ts]
  /** @customConstructor ISWidgetCraftControl:new */
  export class ISWidgetCraftControl extends lua.client.Entity.ISUI.Controls.ISWidgetCraftControl {}

  // [lua/client/Entity/ISUI/Controls/ISWidgetCraftDebug.d.ts]
  /** @customConstructor ISWidgetCraftDebug:new */
  export class ISWidgetCraftDebug extends lua.client.Entity.ISUI.Controls.ISWidgetCraftDebug {}

  // [lua/client/Entity/ISUI/Controls/ISWidgetCraftProgress.d.ts]
  /** @customConstructor ISWidgetCraftProgress:new */
  export class ISWidgetCraftProgress extends lua.client.Entity.ISUI.Controls.ISWidgetCraftProgress {}

  // [lua/client/Entity/ISUI/Controls/ISWidgetEntityDebug.d.ts]
  /** @customConstructor ISWidgetEntityDebug:new */
  export class ISWidgetEntityDebug extends lua.client.Entity.ISUI.Controls.ISWidgetEntityDebug {}

  // [lua/client/Entity/ISUI/Controls/ISWidgetEntityHeader.d.ts]
  /** @customConstructor ISWidgetEntityHeader:new */
  export class ISWidgetEntityHeader extends lua.client.Entity.ISUI.Controls.ISWidgetEntityHeader {}

  // [lua/client/Entity/ISUI/Controls/ISWidgetRecipeSelect.d.ts]
  /** @customConstructor ISWidgetRecipeSelect:new */
  export class ISWidgetRecipeSelect extends lua.client.Entity.ISUI.Controls.ISWidgetRecipeSelect {}

  // [lua/client/Entity/ISUI/Controls/ISWidgetTitleHeader.d.ts]
  /** @customConstructor ISWidgetTitleHeader:new */
  export class ISWidgetTitleHeader extends lua.client.Entity.ISUI.Controls.ISWidgetTitleHeader {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISCraftInputItems.d.ts]
  /** @customConstructor ISCraftInputItemNode:new */
  export class ISCraftInputItemNode extends lua.client.Entity.ISUI.CraftRecipe.ISCraftInputItemNode {}
  /** @customConstructor ISCraftInputItems:new */
  export class ISCraftInputItems extends lua.client.Entity.ISUI.CraftRecipe.ISCraftInputItems {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISCraftInventoryPanel.d.ts]
  /** @customConstructor ISCraftInventoryPanel:new */
  export class ISCraftInventoryPanel extends lua.client.Entity.ISUI.CraftRecipe.ISCraftInventoryPanel {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISCraftRecipeInfoBox.d.ts]
  /** @customConstructor ISCraftRecipeInfoBox:new */
  export class ISCraftRecipeInfoBox extends lua.client.Entity.ISUI.CraftRecipe.ISCraftRecipeInfoBox {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISCraftRecipePanel.d.ts]
  /** @customConstructor ISCraftRecipePanel:new */
  export class ISCraftRecipePanel extends lua.client.Entity.ISUI.CraftRecipe.ISCraftRecipePanel {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISCraftRecipeTooltip.d.ts]
  /** @customConstructor ISCraftRecipeTooltip:new */
  export class ISCraftRecipeTooltip extends lua.client.Entity.ISUI.CraftRecipe.ISCraftRecipeTooltip {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISHandCraftPanel.d.ts]
  /** @customConstructor ISHandCraftPanel:new */
  export class ISHandCraftPanel extends lua.client.Entity.ISUI.CraftRecipe.ISHandCraftPanel {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISTiledIconListBox.d.ts]
  /** @customConstructor ISTiledIconListBox:new */
  export class ISTiledIconListBox extends lua.client.Entity.ISUI.CraftRecipe.ISTiledIconListBox {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISTiledIconPanel.d.ts]
  /** @customConstructor ISTiledIconPanel:new */
  export class ISTiledIconPanel extends lua.client.Entity.ISUI.CraftRecipe.ISTiledIconPanel {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISWidgetAutoToggle.d.ts]
  /** @customConstructor ISWidgetAutoToggle:new */
  export class ISWidgetAutoToggle extends lua.client.Entity.ISUI.CraftRecipe.ISWidgetAutoToggle {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISWidgetHandCraftControl.d.ts]
  /** @customConstructor ISWidgetHandCraftControl:new */
  export class ISWidgetHandCraftControl extends lua.client.Entity.ISUI.CraftRecipe.ISWidgetHandCraftControl {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISWidgetIngredients.d.ts]
  /** @customConstructor ISWidgetIngredients:new */
  export class ISWidgetIngredients extends lua.client.Entity.ISUI.CraftRecipe.ISWidgetIngredients {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISWidgetIngredientsInputs.d.ts]
  /** @customConstructor ISWidgetIngredientsInputs:new */
  export class ISWidgetIngredientsInputs extends lua.client.Entity.ISUI.CraftRecipe.ISWidgetIngredientsInputs {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISWidgetIngredientsOutputs.d.ts]
  /** @customConstructor ISWidgetIngredientsOutputs:new */
  export class ISWidgetIngredientsOutputs extends lua.client.Entity.ISUI.CraftRecipe.ISWidgetIngredientsOutputs {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISWidgetInput.d.ts]
  /** @customConstructor ISWidgetInput:new */
  export class ISWidgetInput extends lua.client.Entity.ISUI.CraftRecipe.ISWidgetInput {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISWidgetOutput.d.ts]
  /** @customConstructor ISWidgetOutput:new */
  export class ISWidgetOutput extends lua.client.Entity.ISUI.CraftRecipe.ISWidgetOutput {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISWidgetRecipeCategories.d.ts]
  /** @customConstructor ISWidgetRecipeCategories:new */
  export class ISWidgetRecipeCategories extends lua.client.Entity.ISUI.CraftRecipe.ISWidgetRecipeCategories {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISWidgetRecipeFilterPanel.d.ts]
  /** @customConstructor ISWidgetRecipeFilterPanel:new */
  export class ISWidgetRecipeFilterPanel extends lua.client.Entity.ISUI.CraftRecipe.ISWidgetRecipeFilterPanel {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISWidgetRecipeListPanel.d.ts]
  /** @customConstructor ISWidgetRecipeListPanel:new */
  export class ISWidgetRecipeListPanel extends lua.client.Entity.ISUI.CraftRecipe.ISWidgetRecipeListPanel {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISWidgetRecipesPanel.d.ts]
  /** @customConstructor ISWidgetRecipesPanel:new */
  export class ISWidgetRecipesPanel extends lua.client.Entity.ISUI.CraftRecipe.ISWidgetRecipesPanel {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISWidgetRecipeTools.d.ts]
  /** @customConstructor ISWidgetRecipeTools:new */
  export class ISWidgetRecipeTools extends lua.client.Entity.ISUI.CraftRecipe.ISWidgetRecipeTools {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISWidgetTooltipInput.d.ts]
  /** @customConstructor ISWidgetTooltipInput:new */
  export class ISWidgetTooltipInput extends lua.client.Entity.ISUI.CraftRecipe.ISWidgetTooltipInput {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISWidgetTooltipOutput.d.ts]
  /** @customConstructor ISWidgetTooltipOutput:new */
  export class ISWidgetTooltipOutput extends lua.client.Entity.ISUI.CraftRecipe.ISWidgetTooltipOutput {}

  // [lua/client/Entity/ISUI/ISBaseEntityWindow.d.ts]
  /** @customConstructor ISBaseEntityWindow:new */
  export class ISBaseEntityWindow extends lua.client.Entity.ISUI.ISBaseEntityWindow {}

  // [lua/client/Entity/ISUI/ISEntityBuildMenu.d.ts]
  export abstract class ISEntityBuildMenu extends lua.client.Entity.ISUI.ISEntityBuildMenu {}

  // [lua/client/Entity/ISUI/Layouts/ISBaseStockingLayout.d.ts]
  /** @customConstructor ISBaseStockingLayout:new */
  export class ISBaseStockingLayout extends lua.client.Entity.ISUI.Layouts.ISBaseStockingLayout {}

  // [lua/client/Entity/ISUI/Layouts/ISBaseVendingLayout.d.ts]
  /** @customConstructor ISBaseVendingLayout:new */
  export class ISBaseVendingLayout extends lua.client.Entity.ISUI.Layouts.ISBaseVendingLayout {}

  // [lua/client/Entity/ISUI/Layouts/ISPartsLayout.d.ts]
  /** @customConstructor ISPartsLayout:new */
  export class ISPartsLayout extends lua.client.Entity.ISUI.Layouts.ISPartsLayout {}

  // [lua/client/Entity/ISUI/Layouts/ISSodaStockingLayout.d.ts]
  /** @customConstructor ISSodaStockingLayout:new */
  export class ISSodaStockingLayout extends lua.client.Entity.ISUI.Layouts.ISSodaStockingLayout {}

  // [lua/client/Entity/ISUI/Layouts/ISSodaVendingLayout.d.ts]
  /** @customConstructor ISSodaVendingLayout:new */
  export class ISSodaVendingLayout extends lua.client.Entity.ISUI.Layouts.ISSodaVendingLayout {}

  // [lua/client/Entity/ISUI/Layouts/ISVendorStockingLayout.d.ts]
  /** @customConstructor ISVendorStockingLayout:new */
  export class ISVendorStockingLayout extends lua.client.Entity.ISUI.Layouts.ISVendorStockingLayout {}

  // [lua/client/Entity/ISUI/Layouts/ISVendorVendingLayout.d.ts]
  /** @customConstructor ISVendorVendingLayout:new */
  export class ISVendorVendingLayout extends lua.client.Entity.ISUI.Layouts.ISVendorVendingLayout {}

  // [lua/client/Entity/ISUI/Windows/ISEntityTabWindow.d.ts]
  /** @customConstructor ISEntityTabWindow:new */
  export class ISEntityTabWindow extends lua.client.Entity.ISUI.Windows.ISEntityTabWindow {}

  // [lua/client/Entity/ISUI/Windows/ISEntityWindow.d.ts]
  /** @customConstructor ISEntityWindow:new */
  export class ISEntityWindow extends lua.client.Entity.ISUI.Windows.ISEntityWindow {}

  // [lua/client/erosion/debug/DebugDemoTime.d.ts]

  // [lua/client/erosion/debug/Point2D.d.ts]
  export abstract class Point2D extends lua.client.erosion.debug.Point2D {}

  // [lua/client/Farming/CFarming_Interact.d.ts]
  export abstract class CFarming_Interact extends lua.client.Farming.CFarming_Interact {}

  // [lua/client/Farming/CFarmingSystem.d.ts]
  /** @customConstructor CFarmingSystem:new */
  export class CFarmingSystem extends lua.client.Farming.CFarmingSystem {}

  // [lua/client/Farming/CPlantGlobalObject.d.ts]
  /** @customConstructor CPlantGlobalObject:new */
  export class CPlantGlobalObject extends lua.client.Farming.CPlantGlobalObject {}

  // [lua/client/Farming/ISUI/ISFarmingInfo.d.ts]
  /** @customConstructor ISFarmingInfo:new */
  export class ISFarmingInfo extends lua.client.Farming.ISUI.ISFarmingInfo {}
  export abstract class compost_rgb extends lua.client.Farming.ISUI.compost_rgb {}
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

  // [lua/client/Farming/TimedActions/ISPlantInfoAction.d.ts]
  /** @customConstructor ISPlantInfoAction:new */
  export class ISPlantInfoAction extends lua.client.Farming.TimedActions.ISPlantInfoAction {}

  // [lua/client/FeedingTrough/CFeedingTroughGlobalObject.d.ts]
  /** @customConstructor CFeedingTroughGlobalObject:new */
  export class CFeedingTroughGlobalObject extends lua.client.FeedingTrough.CFeedingTroughGlobalObject {}

  // [lua/client/FeedingTrough/CFeedingTroughSystem.d.ts]
  /** @customConstructor CFeedingTroughSystem:new */
  export class CFeedingTroughSystem extends lua.client.FeedingTrough.CFeedingTroughSystem {}

  // [lua/client/FeedingTrough/ISUI/ISFeedingTroughMenu.d.ts]
  export abstract class ISFeedingTroughMenu extends lua.client.FeedingTrough.ISUI.ISFeedingTroughMenu {}

  // [lua/client/FeedingTrough/ISUI/ISFeedingTroughUI.d.ts]
  /** @customConstructor ISFeedingTroughUI:new */
  export class ISFeedingTroughUI extends lua.client.FeedingTrough.ISUI.ISFeedingTroughUI {}

  // [lua/client/Fishing/FishingDebugWindow.d.ts]
  /** @customConstructor FishingDebugWindow:new */
  export class FishingDebugWindow extends lua.client.Fishing.FishingDebugWindow {}

  // [lua/client/Fishing/FishingHandler.d.ts]
  /** @noSelf */
  export const OnGameStart: () => any;

  // [lua/client/Fishing/FishingStates.d.ts]
  /** @noSelf */
  export const start: () => any;
  /** @noSelf */
  export const stop: () => any;
  /** @noSelf */
  export const update: () => any;

  // [lua/client/Fishing/TensionUI.d.ts]
  // Wrong: class name is undefined

  // [lua/client/Fluids/ISFluidBar.d.ts]
  /** @customConstructor ISFluidBar:new */
  export class ISFluidBar extends lua.client.Fluids.ISFluidBar {}

  // [lua/client/Fluids/ISFluidContainerPanel.d.ts]
  /** @customConstructor ISFluidContainerPanel:new */
  export class ISFluidContainerPanel extends lua.client.Fluids.ISFluidContainerPanel {}

  // [lua/client/Fluids/ISFluidInfoUI.d.ts]
  /** @customConstructor ISFluidInfoUI:new */
  export class ISFluidInfoUI extends lua.client.Fluids.ISFluidInfoUI {}

  // [lua/client/Fluids/ISFluidPanelAction.d.ts]
  /** @customConstructor ISFluidPanelAction:new */
  export class ISFluidPanelAction extends lua.client.Fluids.ISFluidPanelAction {}

  // [lua/client/Fluids/ISFluidTransferUI.d.ts]
  /** @customConstructor ISFluidTransferUI:new */
  export class ISFluidTransferUI extends lua.client.Fluids.ISFluidTransferUI {}

  // [lua/client/Foraging/forageClient.d.ts]
  export abstract class forageClient extends lua.client.Foraging.forageClient {}
  export abstract class forageData extends lua.client.Foraging.forageData {}

  // [lua/client/Foraging/ISAnimalTracksFinder.d.ts]
  export abstract class ISAnimalTracksFinder extends lua.client.Foraging.ISAnimalTracksFinder {}

  // [lua/client/Foraging/ISAnimalTracksMenu.d.ts]
  export abstract class ISAnimalTracksMenu extends lua.client.Foraging.ISAnimalTracksMenu {}

  // [lua/client/Foraging/ISBaseIcon.d.ts]
  /** @customConstructor ISBaseIcon:new */
  export class ISBaseIcon extends lua.client.Foraging.ISBaseIcon {}

  // [lua/client/Foraging/ISForageIcon.d.ts]
  /** @customConstructor ISForageIcon:new */
  export class ISForageIcon extends lua.client.Foraging.ISForageIcon {}

  // [lua/client/Foraging/ISSearchManager.d.ts]
  /** @customConstructor ISSearchManager:new */
  export class ISSearchManager extends lua.client.Foraging.ISSearchManager {}

  // [lua/client/Foraging/ISSearchWindow.d.ts]
  /** @customConstructor ISSearchWindow:new */
  export class ISSearchWindow extends lua.client.Foraging.ISSearchWindow {}

  // [lua/client/Foraging/ISStashIcon.d.ts]
  /** @customConstructor ISStashIcon:new */
  export class ISStashIcon extends lua.client.Foraging.ISStashIcon {}

  // [lua/client/Foraging/ISWorldItemIcon.d.ts]
  /** @customConstructor ISWorldItemIcon:new */
  export class ISWorldItemIcon extends lua.client.Foraging.ISWorldItemIcon {}

  // [lua/client/Foraging/ISWorldItemIconTrack.d.ts]
  /** @customConstructor ISWorldItemIconTrack:new */
  export class ISWorldItemIconTrack extends lua.client.Foraging.ISWorldItemIconTrack {}

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

  // [lua/client/ISUI/AdminPanel/ISItemEditPanel.d.ts]
  /** @customConstructor ISItemEditPanel:new */
  export class ISItemEditPanel extends lua.client.ISUI.AdminPanel.ISItemEditPanel {}

  // [lua/client/ISUI/AdminPanel/ISItemsListTable.d.ts]
  /** @customConstructor ISItemsListTable:new */
  export class ISItemsListTable extends lua.client.ISUI.AdminPanel.ISItemsListTable {}

  // [lua/client/ISUI/AdminPanel/ISItemsListViewer.d.ts]
  /** @customConstructor ISItemsListViewer:new */
  export class ISItemsListViewer extends lua.client.ISUI.AdminPanel.ISItemsListViewer {}

  // [lua/client/ISUI/AdminPanel/ISLootLog.d.ts]
  /** @customConstructor ISLootLog:new */
  export class ISLootLog extends lua.client.ISUI.AdminPanel.ISLootLog {}

  // [lua/client/ISUI/AdminPanel/ISMiniScoreboardUI.d.ts]
  /** @customConstructor ISMiniScoreboardUI:new */
  export class ISMiniScoreboardUI extends lua.client.ISUI.AdminPanel.ISMiniScoreboardUI {}

  // [lua/client/ISUI/AdminPanel/ISModalEditRole.d.ts]
  /** @customConstructor ISModalEditRole:new */
  export class ISModalEditRole extends lua.client.ISUI.AdminPanel.ISModalEditRole {}

  // [lua/client/ISUI/AdminPanel/ISPacketCounts.d.ts]
  /** @customConstructor ISPacketCounts:new */
  export class ISPacketCounts extends lua.client.ISUI.AdminPanel.ISPacketCounts {}
  /** @customConstructor ISPacketCountsList:new */
  export class ISPacketCountsList extends lua.client.ISUI.AdminPanel.ISPacketCountsList {}

  // [lua/client/ISUI/AdminPanel/ISPVPLogToolUI.d.ts]
  /** @customConstructor ISPVPLogToolUI:new */
  export class ISPVPLogToolUI extends lua.client.ISUI.AdminPanel.ISPVPLogToolUI {}

  // [lua/client/ISUI/AdminPanel/ISPvpZonePanel.d.ts]
  /** @customConstructor ISPvpZonePanel:new */
  export class ISPvpZonePanel extends lua.client.ISUI.AdminPanel.ISPvpZonePanel {}

  // [lua/client/ISUI/AdminPanel/ISRolesList.d.ts]
  /** @customConstructor ISRolesList:new */
  export class ISRolesList extends lua.client.ISUI.AdminPanel.ISRolesList {}

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
  /** @customConstructor ISStatisticsPanel:new */
  export class ISStatisticsPanel extends lua.client.ISUI.AdminPanel.ISStatisticsPanel {}
  /** @customConstructor ISStatisticsUI:new */
  export class ISStatisticsUI extends lua.client.ISUI.AdminPanel.ISStatisticsUI {}

  // [lua/client/ISUI/AdminPanel/ISUsersList.d.ts]
  /** @customConstructor ISUsersList:new */
  export class ISUsersList extends lua.client.ISUI.AdminPanel.ISUsersList {}

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

  // [lua/client/ISUI/AdminPanel/ZoneEditor/ISMultiplayerZoneEditor.d.ts]
  /** @customConstructor ISMultiplayerZoneEditor:new */
  export class ISMultiplayerZoneEditor extends lua.client.ISUI.AdminPanel.ZoneEditor.ISMultiplayerZoneEditor {}
  /** @customConstructor ISMultiplayerZoneEditor_ButtonPanel:new */
  export class ISMultiplayerZoneEditor_ButtonPanel extends lua.client.ISUI.AdminPanel.ZoneEditor
    .ISMultiplayerZoneEditor_ButtonPanel {}

  // [lua/client/ISUI/AdminPanel/ZoneEditor/MultiplayerZoneEditorMode_NonPVP.d.ts]
  /** @customConstructor MultiplayerZoneEditorMode_NonPVP:new */
  export class MultiplayerZoneEditorMode_NonPVP extends lua.client.ISUI.AdminPanel.ZoneEditor
    .MultiplayerZoneEditorMode_NonPVP {}

  // [lua/client/ISUI/AdminPanel/ZoneEditor/MultiplayerZoneEditorMode_Safehouse.d.ts]
  /** @customConstructor MultiplayerZoneEditorMode_Safehouse:new */
  export class MultiplayerZoneEditorMode_Safehouse extends lua.client.ISUI.AdminPanel.ZoneEditor
    .MultiplayerZoneEditorMode_Safehouse {}
  /** @customConstructor MultiplayerZoneEditorMode_Safehouse_Confirm:new */
  export class MultiplayerZoneEditorMode_Safehouse_Confirm extends lua.client.ISUI.AdminPanel.ZoneEditor
    .MultiplayerZoneEditorMode_Safehouse_Confirm {}
  /** @customConstructor MultiplayerZoneEditorMode_Safehouse_Details:new */
  export class MultiplayerZoneEditorMode_Safehouse_Details extends lua.client.ISUI.AdminPanel.ZoneEditor
    .MultiplayerZoneEditorMode_Safehouse_Details {}

  // [lua/client/ISUI/AdminPanel/ZoneEditor/MultiplayerZoneEditorMode.d.ts]
  /** @customConstructor MultiplayerZoneEditorMode:new */
  export class MultiplayerZoneEditorMode extends lua.client.ISUI.AdminPanel.ZoneEditor.MultiplayerZoneEditorMode {}

  // [lua/client/ISUI/Animal/ISAddDesignationAnimalZoneUI.d.ts]
  /** @customConstructor ISAddDesignationAnimalZoneUI:new */
  export class ISAddDesignationAnimalZoneUI extends lua.client.ISUI.Animal.ISAddDesignationAnimalZoneUI {}

  // [lua/client/ISUI/Animal/ISAnimalBehaviorDebugUI.d.ts]
  /** @customConstructor ISAnimalBehaviorDebugUI:new */
  export class ISAnimalBehaviorDebugUI extends lua.client.ISUI.Animal.ISAnimalBehaviorDebugUI {}

  // [lua/client/ISUI/Animal/ISAnimalContextMenu.d.ts]
  export abstract class AnimalContextMenu extends lua.client.ISUI.Animal.AnimalContextMenu {}

  // [lua/client/ISUI/Animal/ISAnimalGenomeUI.d.ts]
  /** @customConstructor ISAnimalGenomeUI:new */
  export class ISAnimalGenomeUI extends lua.client.ISUI.Animal.ISAnimalGenomeUI {}

  // [lua/client/ISUI/Animal/ISAnimalTracksUI.d.ts]
  /** @customConstructor ISAnimalTracksUI:new */
  export class ISAnimalTracksUI extends lua.client.ISUI.Animal.ISAnimalTracksUI {}

  // [lua/client/ISUI/Animal/ISAnimalUI.d.ts]
  /** @customConstructor ISAnimalAvatar:new */
  export class ISAnimalAvatar extends lua.client.ISUI.Animal.ISAnimalAvatar {}
  /** @customConstructor ISAnimalUI:new */
  export class ISAnimalUI extends lua.client.ISUI.Animal.ISAnimalUI {}

  // [lua/client/ISUI/Animal/ISAnimalZoneFirstInfo.d.ts]
  /** @customConstructor ISAnimalZoneFirstInfo:new */
  export class ISAnimalZoneFirstInfo extends lua.client.ISUI.Animal.ISAnimalZoneFirstInfo {}

  // [lua/client/ISUI/Animal/ISButcherHookUI.d.ts]
  /** @customConstructor ISButcherHookUI:new */
  export class ISButcherHookUI extends lua.client.ISUI.Animal.ISButcherHookUI {}

  // [lua/client/ISUI/Animal/ISButcheringDebugUI.d.ts]
  /** @customConstructor ISButcheringDebugUI:new */
  export class ISButcheringDebugUI extends lua.client.ISUI.Animal.ISButcheringDebugUI {}

  // [lua/client/ISUI/Animal/ISDesignationAnimalZoneUI.d.ts]
  /** @customConstructor ISDesignationZoneAnimalZoneUI:new */
  export class ISDesignationZoneAnimalZoneUI extends lua.client.ISUI.Animal.ISDesignationZoneAnimalZoneUI {}

  // [lua/client/ISUI/BodyParts/ISBodyPartPanel.d.ts]
  /** @customConstructor ISBodyPartPanel:new */
  export class ISBodyPartPanel extends lua.client.ISUI.BodyParts.ISBodyPartPanel {}

  // [lua/client/ISUI/Building/ISBuildWindow.d.ts]
  /** @customConstructor ISBuildWindow:new */
  export class ISBuildWindow extends lua.client.ISUI.Building.ISBuildWindow {}

  // [lua/client/ISUI/Building/ISBuildWindowHeader.d.ts]
  /** @customConstructor ISBuildWindowHeader:new */
  export class ISBuildWindowHeader extends lua.client.ISUI.Building.ISBuildWindowHeader {}

  // [lua/client/ISUI/Crafting/ISHandcraftWindow.d.ts]
  /** @customConstructor ISHandcraftWindow:new */
  export class ISHandcraftWindow extends lua.client.ISUI.Crafting.ISHandcraftWindow {}

  // [lua/client/ISUI/Crafting/ISHandcraftWindowHeader.d.ts]
  /** @customConstructor ISHandcraftWindowHeader:new */
  export class ISHandcraftWindowHeader extends lua.client.ISUI.Crafting.ISHandcraftWindowHeader {}

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

  // [lua/client/ISUI/Hutch/ISHutchMenu.d.ts]
  export abstract class ISHutchMenu extends lua.client.ISUI.Hutch.ISHutchMenu {}

  // [lua/client/ISUI/Hutch/ISHutchUI.d.ts]
  /** @customConstructor ISHutch3DModel:new */
  export class ISHutch3DModel extends lua.client.ISUI.Hutch.ISHutch3DModel {}
  /** @customConstructor ISHutchNestBox:new */
  export class ISHutchNestBox extends lua.client.ISUI.Hutch.ISHutchNestBox {}
  /** @customConstructor ISHutchRoost:new */
  export class ISHutchRoost extends lua.client.ISUI.Hutch.ISHutchRoost {}
  /** @customConstructor ISHutchUI:new */
  export class ISHutchUI extends lua.client.ISUI.Hutch.ISHutchUI {}

  // [lua/client/ISUI/InterpolationPeriodDebug.d.ts]
  /** @customConstructor InterpolationPeriodDebug:new */
  export class InterpolationPeriodDebug extends lua.client.ISUI.InterpolationPeriodDebug {}

  // [lua/client/ISUI/InterpolationPlayerPeriodDebug.d.ts]
  /** @customConstructor InterpolationPlayerPeriodDebug:new */
  export class InterpolationPlayerPeriodDebug extends lua.client.ISUI.InterpolationPlayerPeriodDebug {}

  // [lua/client/ISUI/IS9Patch.d.ts]
  /** @customConstructor IS9Patch:new */
  export class IS9Patch extends lua.client.ISUI.IS9Patch {}

  // [lua/client/ISUI/ISAddGeneticDisorderUIU.d.ts]
  /** @customConstructor ISAddGeneticDisorderUI:new */
  export class ISAddGeneticDisorderUI extends lua.client.ISUI.ISAddGeneticDisorderUI {}

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

  // [lua/client/ISUI/ISColorPickerHSB.d.ts]
  /** @customConstructor ISColorPickerHSB:new */
  export class ISColorPickerHSB extends lua.client.ISUI.ISColorPickerHSB {}

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
  /** @customConstructor ISCraftingIngredientIconPanel:new */
  export class ISCraftingIngredientIconPanel extends lua.client.ISUI.ISCraftingIngredientIconPanel {}
  /** @customConstructor ISCraftingUI:new */
  export class ISCraftingUI extends lua.client.ISUI.ISCraftingUI {}

  // [lua/client/ISUI/ISDebugAvatarUI.d.ts]
  /** @customConstructor ISDebugAvatarUI:new */
  export class ISDebugAvatarUI extends lua.client.ISUI.ISDebugAvatarUI {}

  // [lua/client/ISUI/ISDemoPopup.d.ts]
  /** @customConstructor ISDemoPopup:new */
  export class ISDemoPopup extends lua.client.ISUI.ISDemoPopup {}
  /** @noSelf */
  export const DoDemoPopup: () => any;

  // [lua/client/ISUI/ISDesignationZonePanel.d.ts]
  /** @customConstructor ISDesignationZonePanel:new */
  export class ISDesignationZonePanel extends lua.client.ISUI.ISDesignationZonePanel {}

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

  // [lua/client/ISUI/ISInventoryItem.d.ts]
  export abstract class ISInventoryItem extends lua.client.ISUI.ISInventoryItem {}

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
  /** @customConstructor ISLiteratureGrowingList:new */
  export class ISLiteratureGrowingList extends lua.client.ISUI.ISLiteratureGrowingList {}
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

  // [lua/client/ISUI/ISPrintMediaTextPanel.d.ts]
  /** @customConstructor ISPrintMediaMap:new */
  export class ISPrintMediaMap extends lua.client.ISUI.ISPrintMediaMap {}
  /** @customConstructor ISPrintMediaTextPanel:new */
  export class ISPrintMediaTextPanel extends lua.client.ISUI.ISPrintMediaTextPanel {}

  // [lua/client/ISUI/ISProgressBar.d.ts]
  /** @customConstructor ISProgressBar:new */
  export class ISProgressBar extends lua.client.ISUI.ISProgressBar {}

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

  // [lua/client/ISUI/ISSleepingUI.d.ts]
  /** @customConstructor ISSleepingUI:new */
  export class ISSleepingUI extends lua.client.ISUI.ISSleepingUI {}

  // [lua/client/ISUI/ISSpinBox.d.ts]
  /** @customConstructor ISSpinBox:new */
  export class ISSpinBox extends lua.client.ISUI.ISSpinBox {}

  // [lua/client/ISUI/ISTabPanel.d.ts]
  /** @customConstructor ISTabPanel:new */
  export class ISTabPanel extends lua.client.ISUI.ISTabPanel {}

  // [lua/client/ISUI/ISTabPanelPaginated.d.ts]
  /** @customConstructor ISTabPanelPaginated:new */
  export class ISTabPanelPaginated extends lua.client.ISUI.ISTabPanelPaginated {}

  // [lua/client/ISUI/ISTermsOfServiceUI.d.ts]
  /** @customConstructor ISTermsOfServiceUI:new */
  export class ISTermsOfServiceUI extends lua.client.ISUI.ISTermsOfServiceUI {}

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

  // [lua/client/ISUI/ISUIElementJoypad.d.ts]
  /** @customConstructor ISUIElementJoypad:new */
  export class ISUIElementJoypad extends lua.client.ISUI.ISUIElementJoypad {}

  // [lua/client/ISUI/ISUIEmoteConfig.d.ts]
  /** @customConstructor ISUIEmoteConfig:new */
  export class ISUIEmoteConfig extends lua.client.ISUI.ISUIEmoteConfig {}

  // [lua/client/ISUI/ISUIHandler.d.ts]
  export abstract class ISUIHandler extends lua.client.ISUI.ISUIHandler {}

  // [lua/client/ISUI/ISUIWriteJournal.d.ts]
  /** @customConstructor ISUIWriteJournal:new */
  export class ISUIWriteJournal extends lua.client.ISUI.ISUIWriteJournal {}

  // [lua/client/ISUI/ISVehicleAnimalUI.d.ts]
  /** @customConstructor ISVehicleAnimal3DModel:new */
  export class ISVehicleAnimal3DModel extends lua.client.ISUI.ISVehicleAnimal3DModel {}
  /** @customConstructor ISVehicleAnimalUI:new */
  export class ISVehicleAnimalUI extends lua.client.ISUI.ISVehicleAnimalUI {}

  // [lua/client/ISUI/ISVehicleConfirmBox.d.ts]
  /** @customConstructor ISVehicleConfirmBox:new */
  export class ISVehicleConfirmBox extends lua.client.ISUI.ISVehicleConfirmBox {}
  /** @customConstructor ISVehiclePartListBox:new */
  export class ISVehiclePartListBox extends lua.client.ISUI.ISVehiclePartListBox {}

  // [lua/client/ISUI/ISVersionWaterMark.d.ts]
  /** @customConstructor WaterMarkUI:new */
  export class WaterMarkUI extends lua.client.ISUI.WaterMarkUI {}
  export abstract class ISVersionWaterMark extends lua.client.ISUI.ISVersionWaterMark {}

  // [lua/client/ISUI/ISVolumeControl.d.ts]
  /** @customConstructor ISVolumeControl:new */
  export class ISVolumeControl extends lua.client.ISUI.ISVolumeControl {}

  // [lua/client/ISUI/ISVolumeIndicator.d.ts]
  /** @customConstructor ISVolumeIndicator:new */
  export class ISVolumeIndicator extends lua.client.ISUI.ISVolumeIndicator {}

  // [lua/client/ISUI/ISWarManagerUI.d.ts]
  /** @customConstructor ISWarManagerUI:new */
  export class ISWarManagerUI extends lua.client.ISUI.ISWarManagerUI {}

  // [lua/client/ISUI/ISWindow.d.ts]
  /** @customConstructor ISWindow:new */
  export class ISWindow extends lua.client.ISUI.ISWindow {}

  // [lua/client/ISUI/ISWorldObjectContextMenu.d.ts]
  export abstract class ISWorldObjectContextMenu extends lua.client.ISUI.ISWorldObjectContextMenu {}

  // [lua/client/ISUI/ISXuiBuilder.d.ts]
  export abstract class ISXuiBuilder extends lua.client.ISUI.ISXuiBuilder {}
  export abstract class ISXuiFunctions extends lua.client.ISUI.ISXuiFunctions {}

  // [lua/client/ISUI/ISXuiSkin.d.ts]
  export abstract class ISXuiSkin extends lua.client.ISUI.ISXuiSkin {}
  export abstract class ISXuiSkinFunctions extends lua.client.ISUI.ISXuiSkinFunctions {}

  // [lua/client/ISUI/ISXuiTableLayout.d.ts]
  /** @customConstructor ISXuiTableLayout:new */
  export class ISXuiTableLayout extends lua.client.ISUI.ISXuiTableLayout {}
  /** @customConstructor ISXuiTableLayoutCell:new */
  export class ISXuiTableLayoutCell extends lua.client.ISUI.ISXuiTableLayoutCell {}
  /** @customConstructor ISXuiTableLayoutColumn:new */
  export class ISXuiTableLayoutColumn extends lua.client.ISUI.ISXuiTableLayoutColumn {}
  /** @customConstructor ISXuiTableLayoutRow:new */
  export class ISXuiTableLayoutRow extends lua.client.ISUI.ISXuiTableLayoutRow {}

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
  export abstract class PrintMediaMaps extends lua.client.ISUI.Maps.PrintMediaMaps {}

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

  // [lua/client/ISUI/Maps/ISWorldMapKey.d.ts]
  /** @customConstructor ISWorldMapKey:new */
  export class ISWorldMapKey extends lua.client.ISUI.Maps.ISWorldMapKey {}

  // [lua/client/ISUI/Maps/ISWorldMapSharing.d.ts]
  /** @customConstructor ISWorldMapSharing:new */
  export class ISWorldMapSharing extends lua.client.ISUI.Maps.ISWorldMapSharing {}
  /** @customConstructor ISWorldMapSharing_PanelPlayers:new */
  export class ISWorldMapSharing_PanelPlayers extends lua.client.ISUI.Maps.ISWorldMapSharing_PanelPlayers {}

  // [lua/client/ISUI/Maps/ISWorldMapSymbols.d.ts]
  /** @customConstructor ISWorldMapSymbols:new */
  export class ISWorldMapSymbols extends lua.client.ISUI.Maps.ISWorldMapSymbols {}
  /** @customConstructor ISWorldMapSymbolsTabPanel:new */
  export class ISWorldMapSymbolsTabPanel extends lua.client.ISUI.Maps.ISWorldMapSymbolsTabPanel {}
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
  /** @customConstructor ISWorldMapSymbolTool_Sharing:new */
  export class ISWorldMapSymbolTool_Sharing extends lua.client.ISUI.Maps.ISWorldMapSymbolTool_Sharing {}

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

  // [lua/client/ISUI/PlayerStats/ISPlayerStatsSuspicionActivityUI.d.ts]
  /** @customConstructor ISPlayerStatsSuspicionActivityUI:new */
  export class ISPlayerStatsSuspicionActivityUI extends lua.client.ISUI.PlayerStats.ISPlayerStatsSuspicionActivityUI {}

  // [lua/client/ISUI/PlayerStats/ISPlayerStatsUI.d.ts]
  /** @customConstructor ISPlayerStatsUI:new */
  export class ISPlayerStatsUI extends lua.client.ISUI.PlayerStats.ISPlayerStatsUI {}

  // [lua/client/ISUI/PlayerStats/ISPlayerStatsUserlogUI.d.ts]
  /** @customConstructor ISPlayerStatsUserlogUI:new */
  export class ISPlayerStatsUserlogUI extends lua.client.ISUI.PlayerStats.ISPlayerStatsUserlogUI {}

  // [lua/client/ISUI/PlayerStats/ISPlayerStatsWarningPointUI.d.ts]
  /** @customConstructor ISPlayerStatsWarningPointUI:new */
  export class ISPlayerStatsWarningPointUI extends lua.client.ISUI.PlayerStats.ISPlayerStatsWarningPointUI {}

  // [lua/client/ISUI/PrintMedia/ISPrintMediaInfo.d.ts]
  /** @customConstructor ISPrintMediaInfo:new */
  export class ISPrintMediaInfo extends lua.client.ISUI.PrintMedia.ISPrintMediaInfo {}
  /** @customConstructor ISPrintMediaSetInfo:new */
  export class ISPrintMediaSetInfo extends lua.client.ISUI.PrintMedia.ISPrintMediaSetInfo {}

  // [lua/client/ISUI/PrintMedia/ISPrintMediaPage.d.ts]
  /** @customConstructor ISPrintMediaPage:new */
  export class ISPrintMediaPage extends lua.client.ISUI.PrintMedia.ISPrintMediaPage {}
  /** @customConstructor ISPrintMediaRichText:new */
  export class ISPrintMediaRichText extends lua.client.ISUI.PrintMedia.ISPrintMediaRichText {}

  // [lua/client/ISUI/PrintMedia/ISPrintMediaPanel.d.ts]
  /** @customConstructor ISPrintMediaListBox:new */
  export class ISPrintMediaListBox extends lua.client.ISUI.PrintMedia.ISPrintMediaListBox {}
  /** @customConstructor ISPrintMediaPanel:new */
  export class ISPrintMediaPanel extends lua.client.ISUI.PrintMedia.ISPrintMediaPanel {}

  // [lua/client/ISUI/PrintMedia/PrintMediaEntries.d.ts]
  export abstract class PrintMediaEntries extends lua.client.ISUI.PrintMedia.PrintMediaEntries {}

  // [lua/client/ISUI/PrintMedia/PrintMediaManager.d.ts]
  /** @customConstructor PrintMediaManager:new */
  export class PrintMediaManager extends lua.client.ISUI.PrintMedia.PrintMediaManager {}
  /** @noSelf */
  export const doPrintMediaDebug: () => any;

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

  // [lua/client/ISUI/WelcomeMessageB42.d.ts]
  /** @customConstructor WelcomeMessageUI:new */
  export class WelcomeMessageUI extends lua.client.ISUI.WelcomeMessageUI {}
  export abstract class WelcomeMessageB42 extends lua.client.ISUI.WelcomeMessageB42 {}

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

  // [lua/client/Mining/DiggingUtil.d.ts]
  export abstract class DiggingUtil extends lua.client.Mining.DiggingUtil {}

  // [lua/client/Moveables/ISMoveablesIconToolTip.d.ts]
  /** @customConstructor ISMoveablesIconToolTip:new */
  export class ISMoveablesIconToolTip extends lua.client.Moveables.ISMoveablesIconToolTip {}

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

  // [lua/client/OptionScreens/MainOptions.d.ts]
  /** @customConstructor MainOptions:new */
  export class MainOptions extends lua.client.OptionScreens.MainOptions {}

  // [lua/client/OptionScreens/MainScreen.d.ts]
  /** @customConstructor MainScreen:new */
  export class MainScreen extends lua.client.OptionScreens.MainScreen {}

  // [lua/client/OptionScreens/MapsOrder.d.ts]
  export abstract class IgnoredMap extends lua.client.OptionScreens.IgnoredMap {}
  export abstract class MapsOrder extends lua.client.OptionScreens.MapsOrder {}

  // [lua/client/OptionScreens/MapSpawnSelect.d.ts]
  /** @customConstructor MapSpawnSelect:new */
  export class MapSpawnSelect extends lua.client.OptionScreens.MapSpawnSelect {}
  /** @customConstructor MapSpawnSelectImage:new */
  export class MapSpawnSelectImage extends lua.client.OptionScreens.MapSpawnSelectImage {}
  /** @customConstructor MapSpawnSelectInfoPanel:new */
  export class MapSpawnSelectInfoPanel extends lua.client.OptionScreens.MapSpawnSelectInfoPanel {}
  /** @customConstructor MapSpawnSelectListBox:new */
  export class MapSpawnSelectListBox extends lua.client.OptionScreens.MapSpawnSelectListBox {}

  // [lua/client/OptionScreens/ModMoreInfo.d.ts]
  /** @customConstructor ModMoreInfo:new */
  export class ModMoreInfo extends lua.client.OptionScreens.ModMoreInfo {}

  // [lua/client/OptionScreens/ModSelector/ISModsHelpPanel.d.ts]
  /** @customConstructor ISModsHelpPanel:new */
  export class ISModsHelpPanel extends lua.client.OptionScreens.ModSelector.ISModsHelpPanel {}

  // [lua/client/OptionScreens/ModSelector/MapOrderListBox.d.ts]
  // Wrong: class name is undefined

  // [lua/client/OptionScreens/ModSelector/MapOrderUI.d.ts]
  // Wrong: class name is undefined

  // [lua/client/OptionScreens/ModSelector/MissedModsPanel.d.ts]
  // Wrong: class name is undefined

  // [lua/client/OptionScreens/ModSelector/ModInfoPanel.d.ts]
  /** @customConstructor ModInfoPanel:new */
  export class ModInfoPanel extends lua.client.OptionScreens.ModSelector.ModInfoPanel {}

  // [lua/client/OptionScreens/ModSelector/ModInfoPanelDesc.d.ts]
  // Wrong: class name is undefined
  /** @noSelf */
  export const createChildren: () => any;
  /** @noSelf */
  export const render: () => any;

  // [lua/client/OptionScreens/ModSelector/ModInfoPanelInteractionParam.d.ts]
  // Wrong: class name is undefined

  // [lua/client/OptionScreens/ModSelector/ModInfoPanelParam.d.ts]
  // Wrong: class name is undefined

  // [lua/client/OptionScreens/ModSelector/ModInfoPanelThumbnail.d.ts]
  // Wrong: class name is undefined

  // [lua/client/OptionScreens/ModSelector/ModInfoPanelTitle.d.ts]
  // Wrong: class name is undefined

  // [lua/client/OptionScreens/ModSelector/ModListBox.d.ts]
  // Wrong: class name is undefined

  // [lua/client/OptionScreens/ModSelector/ModListPanel.d.ts]
  // Wrong: class name is undefined

  // [lua/client/OptionScreens/ModSelector/ModListPresets.d.ts]
  /** @customConstructor ModListPresets:new */
  export class ModListPresets extends lua.client.OptionScreens.ModSelector.ModListPresets {}

  // [lua/client/OptionScreens/ModSelector/ModLoadOrderPanel.d.ts]
  // Wrong: class name is undefined

  // [lua/client/OptionScreens/ModSelector/ModOrderListBox.d.ts]
  // Wrong: class name is undefined

  // [lua/client/OptionScreens/ModSelector/ModSelector.d.ts]
  /** @customConstructor ModSelector:new */
  export class ModSelector extends lua.client.OptionScreens.ModSelector.ModSelector {}
  /** @noSelf */
  export const ModSelector_onModsModified: () => any;

  // [lua/client/OptionScreens/ModSelector/ModSelectorModel.d.ts]
  /** @noSelf */
  export const acceptChanges: () => any;
  /** @noSelf */
  export const checkMapConflicts: () => any;
  /** @noSelf */
  export const getActiveMods: () => any;
  /** @noSelf */
  export const getAllMapsInOrder: () => any;
  /** @noSelf */
  export const loadModDataFromFile: () => any;
  /** @noSelf */
  export const refreshMods: () => any;
  /** @noSelf */
  export const reloadMods: () => any;
  /** @noSelf */
  export const saveModDataToFile: () => any;

  // [lua/client/OptionScreens/MultiplayerScreen.d.ts]
  /** @customConstructor MultiplayerScreen:new */
  export class MultiplayerScreen extends lua.client.OptionScreens.MultiplayerScreen {}

  // [lua/client/OptionScreens/NewGameScreen.d.ts]
  /** @customConstructor NewGameScreen:new */
  export class NewGameScreen extends lua.client.OptionScreens.NewGameScreen {}

  // [lua/client/OptionScreens/PublicServerList.d.ts]
  /** @customConstructor PublicServerList:new */
  export class PublicServerList extends lua.client.OptionScreens.PublicServerList {}
  /** @noSelf */
  export const OnConnected: () => any;

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
  // Wrong: class name is undefined
  export abstract class DefaultServerSettings extends lua.client.OptionScreens.DefaultServerSettings {}
  /** @noSelf */
  export const aboutToShow: () => any;
  /** @noSelf */
  export const create: () => any;
  /** @noSelf */
  export const onButtonCancel: () => any;
  /** @noSelf */
  export const onButtonMods: () => any;
  /** @noSelf */
  export const onButtonNext: () => any;

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

  // [lua/client/PZAPI/ModOptions.d.ts]
  /** @noSelf */
  export const load: () => any;
  /** @noSelf */
  export const save: () => any;

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

  // [lua/client/TimedActions/Animal/ISCheckAnimalInsideTrailer.d.ts]
  /** @customConstructor ISCheckAnimalInsideTrailer:new */
  export class ISCheckAnimalInsideTrailer extends lua.client.TimedActions.Animal.ISCheckAnimalInsideTrailer {}

  // [lua/client/TimedActions/Animal/ISGetHutchInfo.d.ts]
  /** @customConstructor ISGetHutchInfo:new */
  export class ISGetHutchInfo extends lua.client.TimedActions.Animal.ISGetHutchInfo {}

  // [lua/client/TimedActions/Animal/ISInspectAnimalTrackAction.d.ts]
  /** @customConstructor ISInspectAnimalTrackAction:new */
  export class ISInspectAnimalTrackAction extends lua.client.TimedActions.Animal.ISInspectAnimalTrackAction {}

  // [lua/client/TimedActions/ISBBQInfoAction.d.ts]
  /** @customConstructor ISBBQInfoAction:new */
  export class ISBBQInfoAction extends lua.client.TimedActions.ISBBQInfoAction {}

  // [lua/client/TimedActions/ISCampingInfoAction.d.ts]
  /** @customConstructor ISCampingInfoAction:new */
  export class ISCampingInfoAction extends lua.client.TimedActions.ISCampingInfoAction {}

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

  // [lua/client/TimedActions/ISDetachItemHotbar.d.ts]
  /** @customConstructor ISDetachItemHotbar:new */
  export class ISDetachItemHotbar extends lua.client.TimedActions.ISDetachItemHotbar {}

  // [lua/client/TimedActions/ISDigStairsAction.d.ts]
  /** @customConstructor ISDigStairsAction:new */
  export class ISDigStairsAction extends lua.client.TimedActions.ISDigStairsAction {}

  // [lua/client/TimedActions/ISFireplaceInfoAction.d.ts]
  /** @customConstructor ISFireplaceInfoAction:new */
  export class ISFireplaceInfoAction extends lua.client.TimedActions.ISFireplaceInfoAction {}

  // [lua/client/TimedActions/ISGeneratorInfoAction.d.ts]
  /** @customConstructor ISGeneratorInfoAction:new */
  export class ISGeneratorInfoAction extends lua.client.TimedActions.ISGeneratorInfoAction {}

  // [lua/client/TimedActions/ISGrabItemAction.d.ts]
  /** @customConstructor ISGrabItemAction:new */
  export class ISGrabItemAction extends lua.client.TimedActions.ISGrabItemAction {}

  // [lua/client/TimedActions/ISInventoryTransferAction.d.ts]
  /** @customConstructor ISInventoryTransferAction:new */
  export class ISInventoryTransferAction extends lua.client.TimedActions.ISInventoryTransferAction {}

  // [lua/client/TimedActions/ISMedicalCheckAction.d.ts]
  /** @customConstructor ISMedicalCheckAction:new */
  export class ISMedicalCheckAction extends lua.client.TimedActions.ISMedicalCheckAction {}

  // [lua/client/TimedActions/ISOpenContainerTimedAction.d.ts]
  /** @customConstructor ISOpenContainerTimedAction:new */
  export class ISOpenContainerTimedAction extends lua.client.TimedActions.ISOpenContainerTimedAction {}

  // [lua/client/TimedActions/ISOvenUITimedAction.d.ts]
  /** @customConstructor ISOvenUITimedAction:new */
  export class ISOvenUITimedAction extends lua.client.TimedActions.ISOvenUITimedAction {}

  // [lua/client/TimedActions/ISPickAxeGroundCoverItem.d.ts]
  /** @customConstructor ISPickAxeGroundCoverItem:new */
  export class ISPickAxeGroundCoverItem extends lua.client.TimedActions.ISPickAxeGroundCoverItem {}

  // [lua/client/TimedActions/ISQueueActionsAction.d.ts]
  /** @customConstructor ISQueueActionsAction:new */
  export class ISQueueActionsAction extends lua.client.TimedActions.ISQueueActionsAction {}

  // [lua/client/TimedActions/ISReadWorldMap.d.ts]
  /** @customConstructor ISReadWorldMap:new */
  export class ISReadWorldMap extends lua.client.TimedActions.ISReadWorldMap {}

  // [lua/client/TimedActions/ISTimedActionQueue.d.ts]
  /** @customConstructor ISTimedActionQueue:new */
  export class ISTimedActionQueue extends lua.client.TimedActions.ISTimedActionQueue {}

  // [lua/client/TimedActions/WalkToTimedAction.d.ts]
  /** @customConstructor ISWalkToTimedAction:new */
  export class ISWalkToTimedAction extends lua.client.TimedActions.ISWalkToTimedAction {}

  // [lua/client/TimedActions/WalkToTimedActionF.d.ts]
  /** @customConstructor ISWalkToTimedActionF:new */
  export class ISWalkToTimedActionF extends lua.client.TimedActions.ISWalkToTimedActionF {}

  // [lua/client/Traps/CTrapGlobalObject.d.ts]
  /** @customConstructor CTrapGlobalObject:new */
  export class CTrapGlobalObject extends lua.client.Traps.CTrapGlobalObject {}

  // [lua/client/Traps/CTrapSystem.d.ts]
  /** @customConstructor CTrapSystem:new */
  export class CTrapSystem extends lua.client.Traps.CTrapSystem {}

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
  /** @customConstructor EditVehicleState_EditPhysics_PhysicsMeshPanel:new */
  export class EditVehicleState_EditPhysics_PhysicsMeshPanel extends lua.client.Vehicles.ISUI
    .EditVehicleState_EditPhysics_PhysicsMeshPanel {}
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
  /** @customConstructor EditVehicleUI_EditPart:new */
  export class EditVehicleUI_EditPart extends lua.client.Vehicles.ISUI.EditVehicleUI_EditPart {}
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
  export abstract class ImageScale extends lua.client.Vehicles.ISUI.ImageScale {}
  export abstract class SeatOffsetX extends lua.client.Vehicles.ISUI.SeatOffsetX {}
  export abstract class SeatOffsetY extends lua.client.Vehicles.ISUI.SeatOffsetY {}

  // [lua/client/Vehicles/ISVehicleTrailerUtils.d.ts]
  export abstract class ISVehicleTrailerUtils extends lua.client.Vehicles.ISVehicleTrailerUtils {}

  // [lua/client/Vehicles/TimedActions/ISAttachTrailerToVehicle.d.ts]
  /** @customConstructor ISAttachTrailerToVehicle:new */
  export class ISAttachTrailerToVehicle extends lua.client.Vehicles.TimedActions.ISAttachTrailerToVehicle {}

  // [lua/client/Vehicles/TimedActions/ISConfigHeadlight.d.ts]
  /** @customConstructor ISConfigHeadlight:new */
  export class ISConfigHeadlight extends lua.client.Vehicles.TimedActions.ISConfigHeadlight {}

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

  // [lua/client/Vehicles/TimedActions/ISLightbarUITimedAction.d.ts]
  /** @customConstructor ISLightbarUITimedAction:new */
  export class ISLightbarUITimedAction extends lua.client.Vehicles.TimedActions.ISLightbarUITimedAction {}

  // [lua/client/Vehicles/TimedActions/ISOpenMechanicsUIAction.d.ts]
  /** @customConstructor ISOpenMechanicsUIAction:new */
  export class ISOpenMechanicsUIAction extends lua.client.Vehicles.TimedActions.ISOpenMechanicsUIAction {}

  // [lua/client/Vehicles/TimedActions/ISPathFindAction.d.ts]
  /** @customConstructor ISPathFindAction:new */
  export class ISPathFindAction extends lua.client.Vehicles.TimedActions.ISPathFindAction {}

  // [lua/client/Vehicles/TimedActions/ISStopVehicle.d.ts]
  /** @customConstructor ISStopVehicle:new */
  export class ISStopVehicle extends lua.client.Vehicles.TimedActions.ISStopVehicle {}

  // [lua/client/Vehicles/TimedActions/ISSwitchVehicleSeat.d.ts]
  /** @customConstructor ISSwitchVehicleSeat:new */
  export class ISSwitchVehicleSeat extends lua.client.Vehicles.TimedActions.ISSwitchVehicleSeat {}

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

  // [LUA-PARTIAL:END]
}
