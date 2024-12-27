local Exports = {}
-- [LUA-PARTIAL:START]

--[lua/client/Animals/CAnimals_Interact.d.ts]
Exports.CAnimals_Interact = loadstring("require('lua/client/Animals/CAnimals_Interact');return _G['CAnimals_Interact']")()

--[lua/client/Animals/CButcherHook_Interact.d.ts]
Exports.CButcherHook_Interact = loadstring("require('lua/client/Animals/CButcherHook_Interact');return _G['CButcherHook_Interact']")()

--[lua/client/Animals/CHutch_Interact.d.ts]
Exports.CHutch_Interact = loadstring("require('lua/client/Animals/CHutch_Interact');return _G['CHutch_Interact']")()

--[lua/client/Bed/CBed_Interact.d.ts]
Exports.CBed_Interact = loadstring("require('lua/client/Bed/CBed_Interact');return _G['CBed_Interact']")()

--[lua/client/BuildingObjects/ISUI/ISBuildMenu.d.ts]
Exports.ISBuildMenu = loadstring("require('lua/client/BuildingObjects/ISUI/ISBuildMenu');return _G['ISBuildMenu']")()

--[lua/client/BuildingObjects/ISUI/ISInventoryBuildMenu.d.ts]
Exports.ISInventoryBuildMenu = loadstring("require('lua/client/BuildingObjects/ISUI/ISInventoryBuildMenu');return _G['ISInventoryBuildMenu']")()

--[lua/client/BuildingObjects/ISUI/ISPaintMenu.d.ts]
Exports.ISPaintMenu = loadstring("require('lua/client/BuildingObjects/ISUI/ISPaintMenu');return _G['ISPaintMenu']")()

--[lua/client/BuildingObjects/TimedActions/ISBuildAction.d.ts]
Exports.ISBuildAction = loadstring("require('lua/client/BuildingObjects/TimedActions/ISBuildAction');return _G['ISBuildAction']")()

--[lua/client/Camping/CCampfireGlobalObject.d.ts]
Exports.CCampfireGlobalObject = loadstring("require('lua/client/Camping/CCampfireGlobalObject');return _G['CCampfireGlobalObject']")()

--[lua/client/Camping/CCampfireSystem.d.ts]
Exports.CCampfireSystem = loadstring("require('lua/client/Camping/CCampfireSystem');return _G['CCampfireSystem']")()

--[lua/client/Camping/ISUI/ISCampingInfoWindow.d.ts]
Exports.ISCampingInfoWindow = loadstring("require('lua/client/Camping/ISUI/ISCampingInfoWindow');return _G['ISCampingInfoWindow']")()

--[lua/client/Camping/ISUI/ISCampingMenu.d.ts]
Exports.ISCampingMenu = loadstring("require('lua/client/Camping/ISUI/ISCampingMenu');return _G['ISCampingMenu']")()

--[lua/client/Chat/ISAlert.d.ts]
Exports.ISAlert = loadstring("require('lua/client/Chat/ISAlert');return _G['ISAlert']")()

--[lua/client/Chat/ISChat.d.ts]
Exports.ISChat = loadstring("require('lua/client/Chat/ISChat');return _G['ISChat']")()

--[lua/client/Context/ISContextManager.d.ts]
Exports.ISContextManager = loadstring("require('lua/client/Context/ISContextManager');return _G['ISContextManager']")()

--[lua/client/Context/ISMenuContext.d.ts]
Exports.ISMenuContext = loadstring("require('lua/client/Context/ISMenuContext');return _G['ISMenuContext']")()

--[lua/client/Context/ISMenuContextBuild.d.ts]
Exports.ISMenuContextBuild = loadstring("require('lua/client/Context/ISMenuContextBuild');return _G['ISMenuContextBuild']")()

--[lua/client/Context/ISMenuContextInventory.d.ts]
Exports.ISMenuContextInventory = loadstring("require('lua/client/Context/ISMenuContextInventory');return _G['ISMenuContextInventory']")()

--[lua/client/Context/ISMenuContextWorld.d.ts]
Exports.ISMenuContextWorld = loadstring("require('lua/client/Context/ISMenuContextWorld');return _G['ISMenuContextWorld']")()

--[lua/client/Context/ISMenuElement.d.ts]
Exports.ISMenuElement = loadstring("require('lua/client/Context/ISMenuElement');return _G['ISMenuElement']")()

--[lua/client/Context/World/TestMarkers.d.ts]
Exports.TestMarkers = loadstring("require('lua/client/Context/World/TestMarkers');return _G['TestMarkers']")()

--[lua/client/DebugUIs/AdminContextMenu.d.ts]
Exports.AdminContextMenu = loadstring("require('lua/client/DebugUIs/AdminContextMenu');return _G['AdminContextMenu']")()

--[lua/client/DebugUIs/AnimationClipViewer.d.ts]
Exports.AnimationClipViewer = loadstring("require('lua/client/DebugUIs/AnimationClipViewer');return _G['AnimationClipViewer']")()
Exports.AnimationClipViewer_ListBox = loadstring("require('lua/client/DebugUIs/AnimationClipViewer');return _G['AnimationClipViewer_ListBox']")()
Exports.AnimationClipViewer_OptionsPanel = loadstring("require('lua/client/DebugUIs/AnimationClipViewer');return _G['AnimationClipViewer_OptionsPanel']")()
Exports.AnimationClipViewer_Scene = loadstring("require('lua/client/DebugUIs/AnimationClipViewer');return _G['AnimationClipViewer_Scene']")()
Exports.AnimationClipViewer_SoundBar = loadstring("require('lua/client/DebugUIs/AnimationClipViewer');return _G['AnimationClipViewer_SoundBar']")()
Exports.AnimationClipViewer_SoundPanel = loadstring("require('lua/client/DebugUIs/AnimationClipViewer');return _G['AnimationClipViewer_SoundPanel']")()
Exports.AnimationClipViewer_Timeline = loadstring("require('lua/client/DebugUIs/AnimationClipViewer');return _G['AnimationClipViewer_Timeline']")()

--[lua/client/DebugUIs/AttachmentEditorUI.d.ts]
Exports.AttachmentEditorUI = loadstring("require('lua/client/DebugUIs/AttachmentEditorUI');return _G['AttachmentEditorUI']")()
Exports.AttachmentEditorUI_EditAttachment = loadstring("require('lua/client/DebugUIs/AttachmentEditorUI');return _G['AttachmentEditorUI_EditAttachment']")()
Exports.AttachmentEditorUI_EditPanel = loadstring("require('lua/client/DebugUIs/AttachmentEditorUI');return _G['AttachmentEditorUI_EditPanel']")()
Exports.AttachmentEditorUI_ListBox = loadstring("require('lua/client/DebugUIs/AttachmentEditorUI');return _G['AttachmentEditorUI_ListBox']")()
Exports.AttachmentEditorUI_Scene = loadstring("require('lua/client/DebugUIs/AttachmentEditorUI');return _G['AttachmentEditorUI_Scene']")()
Exports.AttachmentEditorUI_SwitchView = loadstring("require('lua/client/DebugUIs/AttachmentEditorUI');return _G['AttachmentEditorUI_SwitchView']")()
Exports.AttachmentEditorUI_WorldAttachmentPanel = loadstring("require('lua/client/DebugUIs/AttachmentEditorUI');return _G['AttachmentEditorUI_WorldAttachmentPanel']")()

--[lua/client/DebugUIs/BrushTool/BrushToolChooseTileUI.d.ts]
Exports.BrushToolChooseTileUI = loadstring("require('lua/client/DebugUIs/BrushTool/BrushToolChooseTileUI');return _G['BrushToolChooseTileUI']")()
Exports.BrushToolTilePickerList = loadstring("require('lua/client/DebugUIs/BrushTool/BrushToolChooseTileUI');return _G['BrushToolTilePickerList']")()

--[lua/client/DebugUIs/BrushTool/BrushToolManager.d.ts]
Exports.BrushToolManager = loadstring("require('lua/client/DebugUIs/BrushTool/BrushToolManager');return _G['BrushToolManager']")()

--[lua/client/DebugUIs/BrushTool/FireBrushUI.d.ts]
Exports.FireBrushUI = loadstring("require('lua/client/DebugUIs/BrushTool/FireBrushUI');return _G['FireBrushUI']")()

--[lua/client/DebugUIs/DebugChunkState/DebugChunkState_ObjectAtCursorPanel.d.ts]
Exports.DebugChunkState_ObjectAtCursorPanel = loadstring("require('lua/client/DebugUIs/DebugChunkState/DebugChunkState_ObjectAtCursorPanel');return _G['DebugChunkState_ObjectAtCursorPanel']")()

--[lua/client/DebugUIs/DebugChunkState/DebugChunkState_ObjectPickerPanel.d.ts]
Exports.DebugChunkState_ObjectPickerPanel = loadstring("require('lua/client/DebugUIs/DebugChunkState/DebugChunkState_ObjectPickerPanel');return _G['DebugChunkState_ObjectPickerPanel']")()

--[lua/client/DebugUIs/DebugChunkState/DebugChunkState_ObjectProperties.d.ts]
Exports.DebugChunkStateUI_ObjPropsHandler = loadstring("require('lua/client/DebugUIs/DebugChunkState/DebugChunkState_ObjectProperties');return _G['DebugChunkStateUI_ObjPropsHandler']")()
Exports.DebugChunkStateUI_ObjPropsPanel = loadstring("require('lua/client/DebugUIs/DebugChunkState/DebugChunkState_ObjectProperties');return _G['DebugChunkStateUI_ObjPropsPanel']")()

--[lua/client/DebugUIs/DebugChunkState/DebugChunkState_SquarePanel.d.ts]
Exports.DebugChunkStateUI_SquarePanel = loadstring("require('lua/client/DebugUIs/DebugChunkState/DebugChunkState_SquarePanel');return _G['DebugChunkStateUI_SquarePanel']")()
Exports.DebugChunkStateUI_SquarePropsHandler = loadstring("require('lua/client/DebugUIs/DebugChunkState/DebugChunkState_SquarePanel');return _G['DebugChunkStateUI_SquarePropsHandler']")()

--[lua/client/DebugUIs/DebugChunkState/DebugChunkState_Tools.d.ts]
Exports.DebugChunkStateUI_DragCameraTool = loadstring("require('lua/client/DebugUIs/DebugChunkState/DebugChunkState_Tools');return _G['DebugChunkStateUI_DragCameraTool']")()
Exports.DebugChunkStateUI_Tool = loadstring("require('lua/client/DebugUIs/DebugChunkState/DebugChunkState_Tools');return _G['DebugChunkStateUI_Tool']")()

--[lua/client/DebugUIs/DebugChunkState/DebugChunkState_VehicleStoryPanel.d.ts]
Exports.DebugChunkState_VehicleStoryPanel = loadstring("require('lua/client/DebugUIs/DebugChunkState/DebugChunkState_VehicleStoryPanel');return _G['DebugChunkState_VehicleStoryPanel']")()

--[lua/client/DebugUIs/DebugChunkState/DebugChunkStateUI.d.ts]
Exports.DebugChunkStateUI = loadstring("require('lua/client/DebugUIs/DebugChunkState/DebugChunkStateUI');return _G['DebugChunkStateUI']")()
Exports.DebugChunkStateUI_OptionsPanel = loadstring("require('lua/client/DebugUIs/DebugChunkState/DebugChunkStateUI');return _G['DebugChunkStateUI_OptionsPanel']")()
Exports.DebugChunkStateUI_SpritePopupPanel = loadstring("require('lua/client/DebugUIs/DebugChunkState/DebugChunkStateUI');return _G['DebugChunkStateUI_SpritePopupPanel']")()

--[lua/client/DebugUIs/DebugChunkState/ISSectionedPanel.d.ts]
Exports.ISSectionedPanel = loadstring("require('lua/client/DebugUIs/DebugChunkState/ISSectionedPanel');return _G['ISSectionedPanel']")()
Exports.ISSectionedPanel_Section = loadstring("require('lua/client/DebugUIs/DebugChunkState/ISSectionedPanel');return _G['ISSectionedPanel_Section']")()

--[lua/client/DebugUIs/DebugContextMenu.d.ts]
Exports.DebugContextMenu = loadstring("require('lua/client/DebugUIs/DebugContextMenu');return _G['DebugContextMenu']")()

--[lua/client/DebugUIs/DebugErrorsWindow.d.ts]
Exports.DebugErrorsWindow = loadstring("require('lua/client/DebugUIs/DebugErrorsWindow');return _G['DebugErrorsWindow']")()

--[lua/client/DebugUIs/DebuggerContextMenu.d.ts]
Exports.DebuggerContextMenu = loadstring("require('lua/client/DebugUIs/DebuggerContextMenu');return _G['DebuggerContextMenu']")()

--[lua/client/DebugUIs/DebugGlobalObjectState/DebugGlobalObjectState_PropertiesPanel.d.ts]
Exports.DebugGlobalObjectState_BasePropertiesPanel = loadstring("require('lua/client/DebugUIs/DebugGlobalObjectState/DebugGlobalObjectState_PropertiesPanel');return _G['DebugGlobalObjectState_BasePropertiesPanel']")()
Exports.DebugGlobalObjectState_GlobalObjectPanel = loadstring("require('lua/client/DebugUIs/DebugGlobalObjectState/DebugGlobalObjectState_PropertiesPanel');return _G['DebugGlobalObjectState_GlobalObjectPanel']")()
Exports.DebugGlobalObjectState_IsoObjectPanel = loadstring("require('lua/client/DebugUIs/DebugGlobalObjectState/DebugGlobalObjectState_PropertiesPanel');return _G['DebugGlobalObjectState_IsoObjectPanel']")()
Exports.DebugGlobalObjectState_PropertiesPanel = loadstring("require('lua/client/DebugUIs/DebugGlobalObjectState/DebugGlobalObjectState_PropertiesPanel');return _G['DebugGlobalObjectState_PropertiesPanel']")()
Exports.DebugGlobalObjectState_SystemPanel = loadstring("require('lua/client/DebugUIs/DebugGlobalObjectState/DebugGlobalObjectState_PropertiesPanel');return _G['DebugGlobalObjectState_SystemPanel']")()

--[lua/client/DebugUIs/DebugGlobalObjectState/DebugGlobalObjectState_Tools.d.ts]
Exports.DebugGlobalObjectStateUI_DragCameraTool = loadstring("require('lua/client/DebugUIs/DebugGlobalObjectState/DebugGlobalObjectState_Tools');return _G['DebugGlobalObjectStateUI_DragCameraTool']")()
Exports.DebugGlobalObjectStateUI_Tool = loadstring("require('lua/client/DebugUIs/DebugGlobalObjectState/DebugGlobalObjectState_Tools');return _G['DebugGlobalObjectStateUI_Tool']")()

--[lua/client/DebugUIs/DebugGlobalObjectState/DebugGlobalObjectStateUI.d.ts]
Exports.DebugGlobalObjectStateUI = loadstring("require('lua/client/DebugUIs/DebugGlobalObjectState/DebugGlobalObjectStateUI');return _G['DebugGlobalObjectStateUI']")()

--[lua/client/DebugUIs/DebugLogSettings.d.ts]
Exports.DebugLogSettings = loadstring("require('lua/client/DebugUIs/DebugLogSettings');return _G['DebugLogSettings']")()

--[lua/client/DebugUIs/DebugMenu/Anims/FloatArrayPlotter.d.ts]
Exports.FloatArrayPlotter = loadstring("require('lua/client/DebugUIs/DebugMenu/Anims/FloatArrayPlotter');return _G['FloatArrayPlotter']")()

--[lua/client/DebugUIs/DebugMenu/Anims/ISAnimDebugMonitor.d.ts]
Exports.ISAnimDebugMonitor = loadstring("require('lua/client/DebugUIs/DebugMenu/Anims/ISAnimDebugMonitor');return _G['ISAnimDebugMonitor']")()

--[lua/client/DebugUIs/DebugMenu/Anims/ISAnimLoggerOutput.d.ts]
Exports.ISAnimLoggerOutput = loadstring("require('lua/client/DebugUIs/DebugMenu/Anims/ISAnimLoggerOutput');return _G['ISAnimLoggerOutput']")()

--[lua/client/DebugUIs/DebugMenu/Audio/ISAudioDebugPanel.d.ts]
Exports.ISAudioDebugPanel = loadstring("require('lua/client/DebugUIs/DebugMenu/Audio/ISAudioDebugPanel');return _G['ISAudioDebugPanel']")()

--[lua/client/DebugUIs/DebugMenu/Audio/ISFMODEventPlayerPanel.d.ts]
Exports.ISFMODEventPlayerPanel = loadstring("require('lua/client/DebugUIs/DebugMenu/Audio/ISFMODEventPlayerPanel');return _G['ISFMODEventPlayerPanel']")()
Exports.ISFMODEventPlayerParameterEditor = loadstring("require('lua/client/DebugUIs/DebugMenu/Audio/ISFMODEventPlayerPanel');return _G['ISFMODEventPlayerParameterEditor']")()

--[lua/client/DebugUIs/DebugMenu/Audio/ISMusicIntensityEventsPanel.d.ts]
Exports.ISMusicIntensityEventsPanel = loadstring("require('lua/client/DebugUIs/DebugMenu/Audio/ISMusicIntensityEventsPanel');return _G['ISMusicIntensityEventsPanel']")()

--[lua/client/DebugUIs/DebugMenu/Audio/ISMusicThreatStatusPanel.d.ts]
Exports.ISMusicThreatStatusPanel = loadstring("require('lua/client/DebugUIs/DebugMenu/Audio/ISMusicThreatStatusPanel');return _G['ISMusicThreatStatusPanel']")()

--[lua/client/DebugUIs/DebugMenu/Base/ISDebugPanelBase.d.ts]
Exports.ISDebugPanelBase = loadstring("require('lua/client/DebugUIs/DebugMenu/Base/ISDebugPanelBase');return _G['ISDebugPanelBase']")()

--[lua/client/DebugUIs/DebugMenu/Base/ISDebugSubPanelBase.d.ts]
Exports.ISDebugSubPanelBase = loadstring("require('lua/client/DebugUIs/DebugMenu/Base/ISDebugSubPanelBase');return _G['ISDebugSubPanelBase']")()

--[lua/client/DebugUIs/DebugMenu/Climate/ClimateColorsDebug.d.ts]
Exports.ClimateColorsDebug = loadstring("require('lua/client/DebugUIs/DebugMenu/Climate/ClimateColorsDebug');return _G['ClimateColorsDebug']")()

--[lua/client/DebugUIs/DebugMenu/Climate/ClimateControlDebug.d.ts]
Exports.ClimateControlDebug = loadstring("require('lua/client/DebugUIs/DebugMenu/Climate/ClimateControlDebug');return _G['ClimateControlDebug']")()

--[lua/client/DebugUIs/DebugMenu/Climate/ClimateDebug.d.ts]
Exports.ClimateDebug = loadstring("require('lua/client/DebugUIs/DebugMenu/Climate/ClimateDebug');return _G['ClimateDebug']")()

--[lua/client/DebugUIs/DebugMenu/Climate/ClimateOptionsDebug.d.ts]
Exports.ClimateOptionsDebug = loadstring("require('lua/client/DebugUIs/DebugMenu/Climate/ClimateOptionsDebug');return _G['ClimateOptionsDebug']")()

--[lua/client/DebugUIs/DebugMenu/Climate/ClimDebuggersPanel.d.ts]
Exports.ClimDebuggersPanel = loadstring("require('lua/client/DebugUIs/DebugMenu/Climate/ClimDebuggersPanel');return _G['ClimDebuggersPanel']")()

--[lua/client/DebugUIs/DebugMenu/Climate/DailyValuesDebug.d.ts]
Exports.DailyValuesDebug = loadstring("require('lua/client/DebugUIs/DebugMenu/Climate/DailyValuesDebug');return _G['DailyValuesDebug']")()

--[lua/client/DebugUIs/DebugMenu/Climate/ForecasterDebug.d.ts]
Exports.ForecasterDebug = loadstring("require('lua/client/DebugUIs/DebugMenu/Climate/ForecasterDebug');return _G['ForecasterDebug']")()

--[lua/client/DebugUIs/DebugMenu/Climate/NewFogDebug.d.ts]
Exports.NewFogDebug = loadstring("require('lua/client/DebugUIs/DebugMenu/Climate/NewFogDebug');return _G['NewFogDebug']")()

--[lua/client/DebugUIs/DebugMenu/Climate/PlayerClimateDebug.d.ts]
Exports.PlayerClimateDebug = loadstring("require('lua/client/DebugUIs/DebugMenu/Climate/PlayerClimateDebug');return _G['PlayerClimateDebug']")()

--[lua/client/DebugUIs/DebugMenu/Climate/PopupColorEdit.d.ts]
Exports.PopupColorEdit = loadstring("require('lua/client/DebugUIs/DebugMenu/Climate/PopupColorEdit');return _G['PopupColorEdit']")()

--[lua/client/DebugUIs/DebugMenu/Climate/ThermoDebug.d.ts]
Exports.ThermoDebug = loadstring("require('lua/client/DebugUIs/DebugMenu/Climate/ThermoDebug');return _G['ThermoDebug']")()
Exports.ThermoDebug = loadstring("require('lua/client/DebugUIs/DebugMenu/Climate/ThermoDebug');return _G['ThermoDebug']")()

--[lua/client/DebugUIs/DebugMenu/Climate/ThunderDebug.d.ts]
Exports.ThunderDebug = loadstring("require('lua/client/DebugUIs/DebugMenu/Climate/ThunderDebug');return _G['ThunderDebug']")()

--[lua/client/DebugUIs/DebugMenu/Climate/ValuePlotter.d.ts]
Exports.ValuePlotter = loadstring("require('lua/client/DebugUIs/DebugMenu/Climate/ValuePlotter');return _G['ValuePlotter']")()

--[lua/client/DebugUIs/DebugMenu/Climate/WeatherFXDebug.d.ts]
Exports.WeatherFXDebug = loadstring("require('lua/client/DebugUIs/DebugMenu/Climate/WeatherFXDebug');return _G['WeatherFXDebug']")()

--[lua/client/DebugUIs/DebugMenu/Climate/WeatherPeriodDebug.d.ts]
Exports.WeatherPeriodDebug = loadstring("require('lua/client/DebugUIs/DebugMenu/Climate/WeatherPeriodDebug');return _G['WeatherPeriodDebug']")()

--[lua/client/DebugUIs/DebugMenu/Climate/WindDebug.d.ts]
Exports.WindDebug = loadstring("require('lua/client/DebugUIs/DebugMenu/Climate/WindDebug');return _G['WindDebug']")()

--[lua/client/DebugUIs/DebugMenu/Entity/ISEntitiesDebugWindow.d.ts]
Exports.ISEntitiesDebugWindow = loadstring("require('lua/client/DebugUIs/DebugMenu/Entity/ISEntitiesDebugWindow');return _G['ISEntitiesDebugWindow']")()

--[lua/client/DebugUIs/DebugMenu/Entity/ISEntityInstancesPanel.d.ts]
Exports.ISEntityInstancesPanel = loadstring("require('lua/client/DebugUIs/DebugMenu/Entity/ISEntityInstancesPanel');return _G['ISEntityInstancesPanel']")()

--[lua/client/DebugUIs/DebugMenu/Entity/ISEntityScriptsPanel.d.ts]
Exports.ISEntityScriptsPanel = loadstring("require('lua/client/DebugUIs/DebugMenu/Entity/ISEntityScriptsPanel');return _G['ISEntityScriptsPanel']")()

--[lua/client/DebugUIs/DebugMenu/Entity/ISEntityViewPanel.d.ts]
Exports.ISEntityViewPanel = loadstring("require('lua/client/DebugUIs/DebugMenu/Entity/ISEntityViewPanel');return _G['ISEntityViewPanel']")()

--[lua/client/DebugUIs/DebugMenu/Entity/ISEntityViewWindow.d.ts]
Exports.ISEntityViewWindow = loadstring("require('lua/client/DebugUIs/DebugMenu/Entity/ISEntityViewWindow');return _G['ISEntityViewWindow']")()

--[lua/client/DebugUIs/DebugMenu/Fluids/ISFluidCategoriesViewPanel.d.ts]
Exports.ISFluidCategoriesViewPanel = loadstring("require('lua/client/DebugUIs/DebugMenu/Fluids/ISFluidCategoriesViewPanel');return _G['ISFluidCategoriesViewPanel']")()

--[lua/client/DebugUIs/DebugMenu/Fluids/ISFluidDebugWindow.d.ts]
Exports.ISFluidDebugWindow = loadstring("require('lua/client/DebugUIs/DebugMenu/Fluids/ISFluidDebugWindow');return _G['ISFluidDebugWindow']")()

--[lua/client/DebugUIs/DebugMenu/Fluids/ISFluidItemsViewPanel.d.ts]
Exports.ISFluidItemsViewPanel = loadstring("require('lua/client/DebugUIs/DebugMenu/Fluids/ISFluidItemsViewPanel');return _G['ISFluidItemsViewPanel']")()

--[lua/client/DebugUIs/DebugMenu/Fluids/ISFluidMixerViewPanel.d.ts]
Exports.ISFluidMixerViewPanel = loadstring("require('lua/client/DebugUIs/DebugMenu/Fluids/ISFluidMixerViewPanel');return _G['ISFluidMixerViewPanel']")()

--[lua/client/DebugUIs/DebugMenu/Fluids/ISFluidOverviewPanel.d.ts]
Exports.ISFluidOverviewPanel = loadstring("require('lua/client/DebugUIs/DebugMenu/Fluids/ISFluidOverviewPanel');return _G['ISFluidOverviewPanel']")()

--[lua/client/DebugUIs/DebugMenu/Fluids/ISFluidViewPanel.d.ts]
Exports.ISFluidViewPanel = loadstring("require('lua/client/DebugUIs/DebugMenu/Fluids/ISFluidViewPanel');return _G['ISFluidViewPanel']")()

--[lua/client/DebugUIs/DebugMenu/General/ISBulletTracerEffect.d.ts]
Exports.ISBulletTracerEffect = loadstring("require('lua/client/DebugUIs/DebugMenu/General/ISBulletTracerEffect');return _G['ISBulletTracerEffect']")()

--[lua/client/DebugUIs/DebugMenu/General/ISCheatPanelUI.d.ts]
Exports.ISCheatPanelUI = loadstring("require('lua/client/DebugUIs/DebugMenu/General/ISCheatPanelUI');return _G['ISCheatPanelUI']")()

--[lua/client/DebugUIs/DebugMenu/General/ISDebugBlood.d.ts]
Exports.ISDebugBlood = loadstring("require('lua/client/DebugUIs/DebugMenu/General/ISDebugBlood');return _G['ISDebugBlood']")()

--[lua/client/DebugUIs/DebugMenu/General/ISGameDebugPanel.d.ts]
Exports.ISGameDebugPanel = loadstring("require('lua/client/DebugUIs/DebugMenu/General/ISGameDebugPanel');return _G['ISGameDebugPanel']")()

--[lua/client/DebugUIs/DebugMenu/General/ISGeneralCheats.d.ts]
Exports.ISGeneralCheats = loadstring("require('lua/client/DebugUIs/DebugMenu/General/ISGeneralCheats');return _G['ISGeneralCheats']")()

--[lua/client/DebugUIs/DebugMenu/General/ISGeneralDebug.d.ts]
Exports.ISGeneralDebug = loadstring("require('lua/client/DebugUIs/DebugMenu/General/ISGeneralDebug');return _G['ISGeneralDebug']")()

--[lua/client/DebugUIs/DebugMenu/General/ISSearchMode.d.ts]
Exports.ISSearchMode = loadstring("require('lua/client/DebugUIs/DebugMenu/General/ISSearchMode');return _G['ISSearchMode']")()

--[lua/client/DebugUIs/DebugMenu/General/ISStatsAndBody.d.ts]
Exports.ISStatsAndBody = loadstring("require('lua/client/DebugUIs/DebugMenu/General/ISStatsAndBody');return _G['ISStatsAndBody']")()

--[lua/client/DebugUIs/DebugMenu/GlobalModData/GlobalModData.d.ts]
Exports.GlobalModDataDebug = loadstring("require('lua/client/DebugUIs/DebugMenu/GlobalModData/GlobalModData');return _G['GlobalModDataDebug']")()

--[lua/client/DebugUIs/DebugMenu/GlobalModData/GlobalModDataTest.d.ts]

--[lua/client/DebugUIs/DebugMenu/ISDebugMenu.d.ts]
Exports.ISDebugMenu = loadstring("require('lua/client/DebugUIs/DebugMenu/ISDebugMenu');return _G['ISDebugMenu']")()

--[lua/client/DebugUIs/DebugMenu/ISDebugUtils.d.ts]
Exports.ISDebugUtils = loadstring("require('lua/client/DebugUIs/DebugMenu/ISDebugUtils');return _G['ISDebugUtils']")()

--[lua/client/DebugUIs/DebugMenu/IsoRegions/IsoRegionDebug.d.ts]
Exports.IsoRegionDebug = loadstring("require('lua/client/DebugUIs/DebugMenu/IsoRegions/IsoRegionDebug');return _G['IsoRegionDebug']")()

--[lua/client/DebugUIs/DebugMenu/IsoRegions/IsoRegionDetails.d.ts]
Exports.IsoRegionDetails = loadstring("require('lua/client/DebugUIs/DebugMenu/IsoRegions/IsoRegionDetails');return _G['IsoRegionDetails']")()

--[lua/client/DebugUIs/DebugMenu/IsoRegions/IsoRegionLogWindow.d.ts]
Exports.IsoRegionLogWindow = loadstring("require('lua/client/DebugUIs/DebugMenu/IsoRegions/IsoRegionLogWindow');return _G['IsoRegionLogWindow']")()

--[lua/client/DebugUIs/DebugMenu/IsoRegions/IsoRegionsWindow.d.ts]
Exports.IsoRegionsWindow = loadstring("require('lua/client/DebugUIs/DebugMenu/IsoRegions/IsoRegionsWindow');return _G['IsoRegionsWindow']")()

--[lua/client/DebugUIs/DebugMenu/Physics/DebugRagdollPanel.d.ts]
Exports.DebugRagdollPanel = loadstring("require('lua/client/DebugUIs/DebugMenu/Physics/DebugRagdollPanel');return _G['DebugRagdollPanel']")()

--[lua/client/DebugUIs/DebugMenu/Physics/ForceHitReactionPanel.d.ts]
Exports.ForceHitReactionPanel = loadstring("require('lua/client/DebugUIs/DebugMenu/Physics/ForceHitReactionPanel');return _G['ForceHitReactionPanel']")()

--[lua/client/DebugUIs/DebugMenu/Physics/HitReactionSettingsPanel.d.ts]
Exports.HitReactionSettingsPanel = loadstring("require('lua/client/DebugUIs/DebugMenu/Physics/HitReactionSettingsPanel');return _G['HitReactionSettingsPanel']")()

--[lua/client/DebugUIs/DebugMenu/Physics/RagdollSettingsPanel.d.ts]
Exports.RagdollSettingsPanel = loadstring("require('lua/client/DebugUIs/DebugMenu/Physics/RagdollSettingsPanel');return _G['RagdollSettingsPanel']")()

--[lua/client/DebugUIs/DebugMenu/Player/ISCharacterDebugUI.d.ts]
Exports.ISCharacterDebugUI = loadstring("require('lua/client/DebugUIs/DebugMenu/Player/ISCharacterDebugUI');return _G['ISCharacterDebugUI']")()

--[lua/client/DebugUIs/DebugMenu/Puddles/PuddlesControl.d.ts]
Exports.PuddlesControl = loadstring("require('lua/client/DebugUIs/DebugMenu/Puddles/PuddlesControl');return _G['PuddlesControl']")()

--[lua/client/DebugUIs/DebugMenu/Puddles/PuddlesPeriodDebug.d.ts]
Exports.PuddlesPeriodDebug = loadstring("require('lua/client/DebugUIs/DebugMenu/Puddles/PuddlesPeriodDebug');return _G['PuddlesPeriodDebug']")()

--[lua/client/DebugUIs/DebugMenu/radio/RadioScriptDebugger.d.ts]
Exports.RadioScriptDebugger = loadstring("require('lua/client/DebugUIs/DebugMenu/radio/RadioScriptDebugger');return _G['RadioScriptDebugger']")()

--[lua/client/DebugUIs/DebugMenu/radio/ZomboidRadioDebug.d.ts]
Exports.ZomboidRadioDebug = loadstring("require('lua/client/DebugUIs/DebugMenu/radio/ZomboidRadioDebug');return _G['ZomboidRadioDebug']")()

--[lua/client/DebugUIs/DebugMenu/Recipes/ISCraftRecipeDbgWindow.d.ts]
Exports.ISCraftRecipeDbgWindow = loadstring("require('lua/client/DebugUIs/DebugMenu/Recipes/ISCraftRecipeDbgWindow');return _G['ISCraftRecipeDbgWindow']")()

--[lua/client/DebugUIs/DebugMenu/Recipes/ISCraftRecipeIconsPanel.d.ts]
Exports.ISCraftRecipeIconsPanel = loadstring("require('lua/client/DebugUIs/DebugMenu/Recipes/ISCraftRecipeIconsPanel');return _G['ISCraftRecipeIconsPanel']")()

--[lua/client/DebugUIs/DebugMenu/Recipes/ISCraftRecipeMonitor.d.ts]
Exports.ISCraftRecipeMonitor = loadstring("require('lua/client/DebugUIs/DebugMenu/Recipes/ISCraftRecipeMonitor');return _G['ISCraftRecipeMonitor']")()

--[lua/client/DebugUIs/DebugMenu/Recipes/ISCraftRecipeOverviewPanel.d.ts]
Exports.ISCraftRecipeOverviewPanel = loadstring("require('lua/client/DebugUIs/DebugMenu/Recipes/ISCraftRecipeOverviewPanel');return _G['ISCraftRecipeOverviewPanel']")()

--[lua/client/DebugUIs/DebugMenu/Recipes/ISCraftRecipeQueriesPanel.d.ts]
Exports.ISCraftRecipeQueriesPanel = loadstring("require('lua/client/DebugUIs/DebugMenu/Recipes/ISCraftRecipeQueriesPanel');return _G['ISCraftRecipeQueriesPanel']")()

--[lua/client/DebugUIs/DebugMenu/Recipes/ISCraftRecipeTagsDebugPanel.d.ts]
Exports.ISCraftRecipeTagsDebugPanel = loadstring("require('lua/client/DebugUIs/DebugMenu/Recipes/ISCraftRecipeTagsDebugPanel');return _G['ISCraftRecipeTagsDebugPanel']")()

--[lua/client/DebugUIs/DebugMenu/Recipes/ISCraftRecipeTagsPanel.d.ts]
Exports.ISCraftRecipeTagsPanel = loadstring("require('lua/client/DebugUIs/DebugMenu/Recipes/ISCraftRecipeTagsPanel');return _G['ISCraftRecipeTagsPanel']")()

--[lua/client/DebugUIs/DebugMenu/Recipes/ISRecipeMonitor.d.ts]
Exports.ISRecipeMonitor = loadstring("require('lua/client/DebugUIs/DebugMenu/Recipes/ISRecipeMonitor');return _G['ISRecipeMonitor']")()

--[lua/client/DebugUIs/DebugMenu/Scripts/ISScriptsDebugWindow.d.ts]
Exports.ISScriptsDebugWindow = loadstring("require('lua/client/DebugUIs/DebugMenu/Scripts/ISScriptsDebugWindow');return _G['ISScriptsDebugWindow']")()

--[lua/client/DebugUIs/DebugMenu/Scripts/ISScriptViewPanel.d.ts]
Exports.ISScriptViewPanel = loadstring("require('lua/client/DebugUIs/DebugMenu/Scripts/ISScriptViewPanel');return _G['ISScriptViewPanel']")()

--[lua/client/DebugUIs/DebugMenu/Scripts/ISScriptViewWindow.d.ts]
Exports.ISScriptViewWindow = loadstring("require('lua/client/DebugUIs/DebugMenu/Scripts/ISScriptViewWindow');return _G['ISScriptViewWindow']")()

--[lua/client/DebugUIs/DebugMenu/Scripts/ISStringListView.d.ts]
Exports.ISStringListView = loadstring("require('lua/client/DebugUIs/DebugMenu/Scripts/ISStringListView');return _G['ISStringListView']")()
Exports.ISStringListViewNode = loadstring("require('lua/client/DebugUIs/DebugMenu/Scripts/ISStringListView');return _G['ISStringListViewNode']")()

--[lua/client/DebugUIs/DebugMenu/Statistic/ISGameStatisticPanel.d.ts]
Exports.ISGameStatisticPanel = loadstring("require('lua/client/DebugUIs/DebugMenu/Statistic/ISGameStatisticPanel');return _G['ISGameStatisticPanel']")()

--[lua/client/DebugUIs/DebugMenu/Statistic/StatisticChart.d.ts]
Exports.StatisticChart = loadstring("require('lua/client/DebugUIs/DebugMenu/Statistic/StatisticChart');return _G['StatisticChart']")()

--[lua/client/DebugUIs/DebugMenu/Statistic/StatisticChartDiskOperations.d.ts]
Exports.StatisticChartDiskOperations = loadstring("require('lua/client/DebugUIs/DebugMenu/Statistic/StatisticChartDiskOperations');return _G['StatisticChartDiskOperations']")()

--[lua/client/DebugUIs/DebugMenu/Statistic/StatisticChartMemory.d.ts]
Exports.StatisticChartMemory = loadstring("require('lua/client/DebugUIs/DebugMenu/Statistic/StatisticChartMemory');return _G['StatisticChartMemory']")()

--[lua/client/DebugUIs/DebugMenu/Statistic/StatisticChartPackets.d.ts]
Exports.StatisticChartPackets = loadstring("require('lua/client/DebugUIs/DebugMenu/Statistic/StatisticChartPackets');return _G['StatisticChartPackets']")()

--[lua/client/DebugUIs/DebugMenu/Statistic/StatisticChartUpdatePeriod.d.ts]
Exports.StatisticChartUpdatePeriod = loadstring("require('lua/client/DebugUIs/DebugMenu/Statistic/StatisticChartUpdatePeriod');return _G['StatisticChartUpdatePeriod']")()

--[lua/client/DebugUIs/DebugMenu/UnitTests/UnitTestsDebug.d.ts]
Exports.UnitTestsDebug = loadstring("require('lua/client/DebugUIs/DebugMenu/UnitTests/UnitTestsDebug');return _G['UnitTestsDebug']")()

--[lua/client/DebugUIs/DebugMenu/UnitTests/UnitTestsTimedActionsPanel.d.ts]
Exports.UnitTestsTimedActionsPanel = loadstring("require('lua/client/DebugUIs/DebugMenu/UnitTests/UnitTestsTimedActionsPanel');return _G['UnitTestsTimedActionsPanel']")()
Exports.UnitTestsTimedActionsPanelTestResults = loadstring("require('lua/client/DebugUIs/DebugMenu/UnitTests/UnitTestsTimedActionsPanel');return _G['UnitTestsTimedActionsPanelTestResults']")()

--[lua/client/DebugUIs/DebugMenu/WorldFlares/WorldFlaresDebug.d.ts]
Exports.WorldFlaresDebug = loadstring("require('lua/client/DebugUIs/DebugMenu/WorldFlares/WorldFlaresDebug');return _G['WorldFlaresDebug']")()

--[lua/client/DebugUIs/DebugMenu/Xui/XuiDebugLayoutWindow.d.ts]
Exports.XuiDebugLayoutWindow = loadstring("require('lua/client/DebugUIs/DebugMenu/Xui/XuiDebugLayoutWindow');return _G['XuiDebugLayoutWindow']")()

--[lua/client/DebugUIs/DebugMenu/Xui/XuiDebugWindow.d.ts]
Exports.XuiDebugWindow = loadstring("require('lua/client/DebugUIs/DebugMenu/Xui/XuiDebugWindow');return _G['XuiDebugWindow']")()

--[lua/client/DebugUIs/DebugMenu/Xui/XuiTestWindow.d.ts]
Exports.XuiTestWindow = loadstring("require('lua/client/DebugUIs/DebugMenu/Xui/XuiTestWindow');return _G['XuiTestWindow']")()

--[lua/client/DebugUIs/DebugOptionsWindow.d.ts]
Exports.DebugOptionsWindow = loadstring("require('lua/client/DebugUIs/DebugOptionsWindow');return _G['DebugOptionsWindow']")()

--[lua/client/DebugUIs/DebugScenarios.d.ts]
Exports.DebugScenarios = loadstring("require('lua/client/DebugUIs/DebugScenarios');return _G['DebugScenarios']")()

--[lua/client/DebugUIs/DebugToolstrip.d.ts]
Exports.DebugToolstrip = loadstring("require('lua/client/DebugUIs/DebugToolstrip');return _G['DebugToolstrip']")()

--[lua/client/DebugUIs/DeviceInspector.d.ts]
Exports.DeviceInspector = loadstring("require('lua/client/DebugUIs/DeviceInspector');return _G['DeviceInspector']")()

--[lua/client/DebugUIs/ISAttachedItemsUI.d.ts]
Exports.ISAttachedItemsUI = loadstring("require('lua/client/DebugUIs/ISAttachedItemsUI');return _G['ISAttachedItemsUI']")()

--[lua/client/DebugUIs/ISDebugAnimationTextUI.d.ts]
Exports.ISDebugAnimationTextUI = loadstring("require('lua/client/DebugUIs/ISDebugAnimationTextUI');return _G['ISDebugAnimationTextUI']")()

--[lua/client/DebugUIs/ISExtAnimListDebugUI.d.ts]
Exports.ISExtAnimListDebugUI = loadstring("require('lua/client/DebugUIs/ISExtAnimListDebugUI');return _G['ISExtAnimListDebugUI']")()

--[lua/client/DebugUIs/ISFastTeleportMove.d.ts]
Exports.ISFastTeleportMove = loadstring("require('lua/client/DebugUIs/ISFastTeleportMove');return _G['ISFastTeleportMove']")()

--[lua/client/DebugUIs/ISLootStressTestUI.d.ts]
Exports.ISLootStreetTestUI = loadstring("require('lua/client/DebugUIs/ISLootStressTestUI');return _G['ISLootStreetTestUI']")()

--[lua/client/DebugUIs/ISRemoveItemTool.d.ts]
Exports.ISRemoveItemTool = loadstring("require('lua/client/DebugUIs/ISRemoveItemTool');return _G['ISRemoveItemTool']")()

--[lua/client/DebugUIs/ISRunningDebugUI.d.ts]
Exports.ISRunningDebugUI = loadstring("require('lua/client/DebugUIs/ISRunningDebugUI');return _G['ISRunningDebugUI']")()

--[lua/client/DebugUIs/ISSpawnHordeUI.d.ts]
Exports.ISSpawnHordeUI = loadstring("require('lua/client/DebugUIs/ISSpawnHordeUI');return _G['ISSpawnHordeUI']")()

--[lua/client/DebugUIs/ISSpawnPointsEditor.d.ts]
Exports.ISSpawnPointsEditor = loadstring("require('lua/client/DebugUIs/ISSpawnPointsEditor');return _G['ISSpawnPointsEditor']")()

--[lua/client/DebugUIs/ISSpawnVehicleUI.d.ts]
Exports.ISSpawnVehicleUI = loadstring("require('lua/client/DebugUIs/ISSpawnVehicleUI');return _G['ISSpawnVehicleUI']")()

--[lua/client/DebugUIs/ISTeleportDebugUI.d.ts]
Exports.ISTeleportDebugUI = loadstring("require('lua/client/DebugUIs/ISTeleportDebugUI');return _G['ISTeleportDebugUI']")()

--[lua/client/DebugUIs/ISTilesPickerDebugUI.d.ts]
Exports.ISTilesPickerDebugUI = loadstring("require('lua/client/DebugUIs/ISTilesPickerDebugUI');return _G['ISTilesPickerDebugUI']")()
Exports.ISTilesPickerTilesList = loadstring("require('lua/client/DebugUIs/ISTilesPickerDebugUI');return _G['ISTilesPickerTilesList']")()

--[lua/client/DebugUIs/ISTriggerThunderUI.d.ts]
Exports.ISTriggerThunderUI = loadstring("require('lua/client/DebugUIs/ISTriggerThunderUI');return _G['ISTriggerThunderUI']")()

--[lua/client/DebugUIs/LuaDebugger.d.ts]
Exports.LuaDebugger = loadstring("require('lua/client/DebugUIs/LuaDebugger');return _G['LuaDebugger']")()

--[lua/client/DebugUIs/LuaDebugOutput.d.ts]
Exports.LuaDebugOutput = loadstring("require('lua/client/DebugUIs/LuaDebugOutput');return _G['LuaDebugOutput']")()

--[lua/client/DebugUIs/LuaFileBrowser.d.ts]
Exports.LuaFileBrowser = loadstring("require('lua/client/DebugUIs/LuaFileBrowser');return _G['LuaFileBrowser']")()
Exports.LuaFileBrowserList = loadstring("require('lua/client/DebugUIs/LuaFileBrowser');return _G['LuaFileBrowserList']")()

--[lua/client/DebugUIs/LuaThreadWindow.d.ts]
Exports.LuaThreadWindow = loadstring("require('lua/client/DebugUIs/LuaThreadWindow');return _G['LuaThreadWindow']")()

--[lua/client/DebugUIs/MPDebugger.d.ts]
Exports.MPDebugger = loadstring("require('lua/client/DebugUIs/MPDebugger');return _G['MPDebugger']")()

--[lua/client/DebugUIs/ObjectViewer.d.ts]
Exports.ObjectViewer = loadstring("require('lua/client/DebugUIs/ObjectViewer');return _G['ObjectViewer']")()

--[lua/client/DebugUIs/SeamEditor/SeamEditorUI_SeamTileList.d.ts]
Exports.SeamEditorUI_SeamTileList = loadstring("require('lua/client/DebugUIs/SeamEditor/SeamEditorUI_SeamTileList');return _G['SeamEditorUI_SeamTileList']")()

--[lua/client/DebugUIs/SeamEditor/SeamEditorUI_TileList.d.ts]
Exports.SeamEditorUI_TileList = loadstring("require('lua/client/DebugUIs/SeamEditor/SeamEditorUI_TileList');return _G['SeamEditorUI_TileList']")()

--[lua/client/DebugUIs/SeamEditor/SeamEditorUI_TileList2.d.ts]
Exports.SeamEditorUI_TileList2 = loadstring("require('lua/client/DebugUIs/SeamEditor/SeamEditorUI_TileList2');return _G['SeamEditorUI_TileList2']")()

--[lua/client/DebugUIs/SeamEditor/SeamEditorUI.d.ts]
Exports.SeamEditorUI = loadstring("require('lua/client/DebugUIs/SeamEditor/SeamEditorUI');return _G['SeamEditorUI']")()
Exports.SeamEditorUI_OptionsPanel = loadstring("require('lua/client/DebugUIs/SeamEditor/SeamEditorUI');return _G['SeamEditorUI_OptionsPanel']")()
Exports.SeamEditorUI_Scene = loadstring("require('lua/client/DebugUIs/SeamEditor/SeamEditorUI');return _G['SeamEditorUI_Scene']")()
Exports.SeamEditorUI_TilePicker = loadstring("require('lua/client/DebugUIs/SeamEditor/SeamEditorUI');return _G['SeamEditorUI_TilePicker']")()
Exports.SeamEditorUI_TilePicker2 = loadstring("require('lua/client/DebugUIs/SeamEditor/SeamEditorUI');return _G['SeamEditorUI_TilePicker2']")()

--[lua/client/DebugUIs/SourceWindow.d.ts]
Exports.SourceWindow = loadstring("require('lua/client/DebugUIs/SourceWindow');return _G['SourceWindow']")()

--[lua/client/DebugUIs/SpriteModelEditor.d.ts]
Exports.SpriteModelEditor = loadstring("require('lua/client/DebugUIs/SpriteModelEditor');return _G['SpriteModelEditor']")()
Exports.SpriteModelEditor_ListBox = loadstring("require('lua/client/DebugUIs/SpriteModelEditor');return _G['SpriteModelEditor_ListBox']")()
Exports.SpriteModelEditor_OptionsPanel = loadstring("require('lua/client/DebugUIs/SpriteModelEditor');return _G['SpriteModelEditor_OptionsPanel']")()
Exports.SpriteModelEditor_Scene = loadstring("require('lua/client/DebugUIs/SpriteModelEditor');return _G['SpriteModelEditor_Scene']")()
Exports.SpriteModelEditor_TileList = loadstring("require('lua/client/DebugUIs/SpriteModelEditor');return _G['SpriteModelEditor_TileList']")()
Exports.SpriteModelEditor_TilePicker = loadstring("require('lua/client/DebugUIs/SpriteModelEditor');return _G['SpriteModelEditor_TilePicker']")()

--[lua/client/DebugUIs/StashDebug.d.ts]
Exports.StashDebug = loadstring("require('lua/client/DebugUIs/StashDebug');return _G['StashDebug']")()

--[lua/client/DebugUIs/StreamMapWindow.d.ts]
Exports.StreamMapWindow = loadstring("require('lua/client/DebugUIs/StreamMapWindow');return _G['StreamMapWindow']")()

--[lua/client/DebugUIs/TextureViewer.d.ts]
Exports.TextureWindow = loadstring("require('lua/client/DebugUIs/TextureViewer');return _G['TextureWindow']")()

--[lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_EditMode.d.ts]
Exports.TileGeometryEditor_BoxPanel = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_EditMode');return _G['TileGeometryEditor_BoxPanel']")()
Exports.TileGeometryEditor_CylinderPanel = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_EditMode');return _G['TileGeometryEditor_CylinderPanel']")()
Exports.TileGeometryEditor_DepthTexturePanel = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_EditMode');return _G['TileGeometryEditor_DepthTexturePanel']")()
Exports.TileGeometryEditor_EditMode = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_EditMode');return _G['TileGeometryEditor_EditMode']")()
Exports.TileGeometryEditor_EditMode_Geometry = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_EditMode');return _G['TileGeometryEditor_EditMode_Geometry']")()
Exports.TileGeometryEditor_EditMode_SceneTiles = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_EditMode');return _G['TileGeometryEditor_EditMode_SceneTiles']")()
Exports.TileGeometryEditor_EditMode_Seating = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_EditMode');return _G['TileGeometryEditor_EditMode_Seating']")()
Exports.TileGeometryEditor_GeometryListBox = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_EditMode');return _G['TileGeometryEditor_GeometryListBox']")()
Exports.TileGeometryEditor_ListBox = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_EditMode');return _G['TileGeometryEditor_ListBox']")()
Exports.TileGeometryEditor_PropertiesPanel = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_EditMode');return _G['TileGeometryEditor_PropertiesPanel']")()
Exports.TileGeometryEditor_SeatingListBox = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_EditMode');return _G['TileGeometryEditor_SeatingListBox']")()
Exports.TileGeometryEditor_SeatingPropertiesPanel = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_EditMode');return _G['TileGeometryEditor_SeatingPropertiesPanel']")()
Exports.TileGeometryEditor_TilePicker3 = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_EditMode');return _G['TileGeometryEditor_TilePicker3']")()

--[lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_SceneTiles.d.ts]
Exports.TileGeometryEditor_SceneTiles = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_SceneTiles');return _G['TileGeometryEditor_SceneTiles']")()

--[lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_TileList.d.ts]
Exports.TileGeometryEditor_TileList = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_TileList');return _G['TileGeometryEditor_TileList']")()

--[lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_TileList2.d.ts]
Exports.TileGeometryEditor_TileList2 = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_TileList2');return _G['TileGeometryEditor_TileList2']")()

--[lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_TileList3.d.ts]
Exports.TileGeometryEditor_TileList3 = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_TileList3');return _G['TileGeometryEditor_TileList3']")()

--[lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_Tools.d.ts]
Exports.TileGeometryEditor_AddTileTool = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_Tools');return _G['TileGeometryEditor_AddTileTool']")()
Exports.TileGeometryEditor_DepthRectTool = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_Tools');return _G['TileGeometryEditor_DepthRectTool']")()
Exports.TileGeometryEditor_EditPolygonTool = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_Tools');return _G['TileGeometryEditor_EditPolygonTool']")()
Exports.TileGeometryEditor_GizmoTool = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_Tools');return _G['TileGeometryEditor_GizmoTool']")()
Exports.TileGeometryEditor_GizmoTool_ResizeBox = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_Tools');return _G['TileGeometryEditor_GizmoTool_ResizeBox']")()
Exports.TileGeometryEditor_GizmoTool_ResizeCylinder = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_Tools');return _G['TileGeometryEditor_GizmoTool_ResizeCylinder']")()
Exports.TileGeometryEditor_GizmoTool_Rotate = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_Tools');return _G['TileGeometryEditor_GizmoTool_Rotate']")()
Exports.TileGeometryEditor_GizmoTool_Scale = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_Tools');return _G['TileGeometryEditor_GizmoTool_Scale']")()
Exports.TileGeometryEditor_GizmoTool_SetSurface = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_Tools');return _G['TileGeometryEditor_GizmoTool_SetSurface']")()
Exports.TileGeometryEditor_GizmoTool_Translate = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_Tools');return _G['TileGeometryEditor_GizmoTool_Translate']")()
Exports.TileGeometryEditor_MoveTileTool = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_Tools');return _G['TileGeometryEditor_MoveTileTool']")()
Exports.TileGeometryEditor_Tool = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_Tools');return _G['TileGeometryEditor_Tool']")()

--[lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor.d.ts]
Exports.TileGeometryEditor = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor');return _G['TileGeometryEditor']")()
Exports.TileGeometryEditor_OptionsPanel = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor');return _G['TileGeometryEditor_OptionsPanel']")()
Exports.TileGeometryEditor_Scene = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor');return _G['TileGeometryEditor_Scene']")()
Exports.TileGeometryEditor_SwitchView = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor');return _G['TileGeometryEditor_SwitchView']")()
Exports.TileGeometryEditor_TilePicker = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor');return _G['TileGeometryEditor_TilePicker']")()
Exports.TileGeometryEditor_TilePicker2 = loadstring("require('lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor');return _G['TileGeometryEditor_TilePicker2']")()

--[lua/client/DebugUIs/WatchWindow.d.ts]
Exports.WatchWindow = loadstring("require('lua/client/DebugUIs/WatchWindow');return _G['WatchWindow']")()

--[lua/client/Entity/ISEntityUI.d.ts]
Exports.ISEntityUI = loadstring("require('lua/client/Entity/ISEntityUI');return _G['ISEntityUI']")()

--[lua/client/Entity/ISEntityUtilUI.d.ts]
Exports.ISEntityUtilUI = loadstring("require('lua/client/Entity/ISEntityUtilUI');return _G['ISEntityUtilUI']")()

--[lua/client/Entity/ISUI/BuildRecipe/ISBuildPanel.d.ts]
Exports.ISBuildPanel = loadstring("require('lua/client/Entity/ISUI/BuildRecipe/ISBuildPanel');return _G['ISBuildPanel']")()

--[lua/client/Entity/ISUI/BuildRecipe/ISBuildRecipePanel.d.ts]
Exports.ISBuildRecipePanel = loadstring("require('lua/client/Entity/ISUI/BuildRecipe/ISBuildRecipePanel');return _G['ISBuildRecipePanel']")()

--[lua/client/Entity/ISUI/BuildRecipe/ISBuildWidgetIngredientsInputs.d.ts]
Exports.ISBuildWidgetIngredientsInputs = loadstring("require('lua/client/Entity/ISUI/BuildRecipe/ISBuildWidgetIngredientsInputs');return _G['ISBuildWidgetIngredientsInputs']")()

--[lua/client/Entity/ISUI/BuildRecipe/ISWidgetBuildControl.d.ts]
Exports.ISWidgetBuildControl = loadstring("require('lua/client/Entity/ISUI/BuildRecipe/ISWidgetBuildControl');return _G['ISWidgetBuildControl']")()

--[lua/client/Entity/ISUI/Components/Crafting/ISButcherHookCraftPanel.d.ts]
Exports.ISButcherHookCraftPanel = loadstring("require('lua/client/Entity/ISUI/Components/Crafting/ISButcherHookCraftPanel');return _G['ISButcherHookCraftPanel']")()

--[lua/client/Entity/ISUI/Components/Crafting/ISButcherHookProcessorPanel.d.ts]
Exports.ISButcherHookProcessorPanel = loadstring("require('lua/client/Entity/ISUI/Components/Crafting/ISButcherHookProcessorPanel');return _G['ISButcherHookProcessorPanel']")()

--[lua/client/Entity/ISUI/Components/Crafting/ISCraftBenchPanel.d.ts]
Exports.ISCraftBenchPanel = loadstring("require('lua/client/Entity/ISUI/Components/Crafting/ISCraftBenchPanel');return _G['ISCraftBenchPanel']")()

--[lua/client/Entity/ISUI/Components/Crafting/ISCraftLogicPanel.d.ts]
Exports.ISCraftLogicPanel = loadstring("require('lua/client/Entity/ISUI/Components/Crafting/ISCraftLogicPanel');return _G['ISCraftLogicPanel']")()

--[lua/client/Entity/ISUI/Components/Crafting/ISFurnaceLogicPanel.d.ts]
Exports.ISFurnaceLogicPanel = loadstring("require('lua/client/Entity/ISUI/Components/Crafting/ISFurnaceLogicPanel');return _G['ISFurnaceLogicPanel']")()

--[lua/client/Entity/ISUI/Components/Crafting/ISMashingLogicPanel.d.ts]
Exports.ISMashingLogicPanel = loadstring("require('lua/client/Entity/ISUI/Components/Crafting/ISMashingLogicPanel');return _G['ISMashingLogicPanel']")()

--[lua/client/Entity/ISUI/Components/ISBaseComponentPanel.d.ts]
Exports.ISBaseComponentPanel = loadstring("require('lua/client/Entity/ISUI/Components/ISBaseComponentPanel');return _G['ISBaseComponentPanel']")()

--[lua/client/Entity/ISUI/Components/ISTestComponentPanel.d.ts]
Exports.ISTestComponentPanel = loadstring("require('lua/client/Entity/ISUI/Components/ISTestComponentPanel');return _G['ISTestComponentPanel']")()

--[lua/client/Entity/ISUI/Controls/ISComponentsListPanel.d.ts]
Exports.ISComponentsListPanel = loadstring("require('lua/client/Entity/ISUI/Controls/ISComponentsListPanel');return _G['ISComponentsListPanel']")()

--[lua/client/Entity/ISUI/Controls/ISComponentsTabPanel.d.ts]
Exports.ISComponentsTabPanel = loadstring("require('lua/client/Entity/ISUI/Controls/ISComponentsTabPanel');return _G['ISComponentsTabPanel']")()

--[lua/client/Entity/ISUI/Controls/ISEnergyBar.d.ts]
Exports.ISEnergyBar = loadstring("require('lua/client/Entity/ISUI/Controls/ISEnergyBar');return _G['ISEnergyBar']")()

--[lua/client/Entity/ISUI/Controls/ISEnergySlot.d.ts]
Exports.ISEnergySlot = loadstring("require('lua/client/Entity/ISUI/Controls/ISEnergySlot');return _G['ISEnergySlot']")()

--[lua/client/Entity/ISUI/Controls/ISEnergySlotPanel.d.ts]
Exports.ISEnergySlotPanel = loadstring("require('lua/client/Entity/ISUI/Controls/ISEnergySlotPanel');return _G['ISEnergySlotPanel']")()

--[lua/client/Entity/ISUI/Controls/ISFluidSlot.d.ts]
Exports.ISFluidSlot = loadstring("require('lua/client/Entity/ISUI/Controls/ISFluidSlot');return _G['ISFluidSlot']")()

--[lua/client/Entity/ISUI/Controls/ISFluidSlotPanel.d.ts]
Exports.ISFluidSlotPanel = loadstring("require('lua/client/Entity/ISUI/Controls/ISFluidSlotPanel');return _G['ISFluidSlotPanel']")()

--[lua/client/Entity/ISUI/Controls/ISGroupBox.d.ts]
Exports.ISGroupBox = loadstring("require('lua/client/Entity/ISUI/Controls/ISGroupBox');return _G['ISGroupBox']")()

--[lua/client/Entity/ISUI/Controls/ISItemSlot.d.ts]
Exports.ISItemSlot = loadstring("require('lua/client/Entity/ISUI/Controls/ISItemSlot');return _G['ISItemSlot']")()

--[lua/client/Entity/ISUI/Controls/ISItemSlotPanel.d.ts]
Exports.ISItemSlotPanel = loadstring("require('lua/client/Entity/ISUI/Controls/ISItemSlotPanel');return _G['ISItemSlotPanel']")()

--[lua/client/Entity/ISUI/Controls/ISTableLayout.d.ts]
Exports.ISTableLayout = loadstring("require('lua/client/Entity/ISUI/Controls/ISTableLayout');return _G['ISTableLayout']")()
Exports.ISTableLayoutCell = loadstring("require('lua/client/Entity/ISUI/Controls/ISTableLayout');return _G['ISTableLayoutCell']")()
Exports.ISTableLayoutColumn = loadstring("require('lua/client/Entity/ISUI/Controls/ISTableLayout');return _G['ISTableLayoutColumn']")()
Exports.ISTableLayoutRow = loadstring("require('lua/client/Entity/ISUI/Controls/ISTableLayout');return _G['ISTableLayoutRow']")()

--[lua/client/Entity/ISUI/Controls/ISVendorSpiral.d.ts]
Exports.ISVendorSpiral = loadstring("require('lua/client/Entity/ISUI/Controls/ISVendorSpiral');return _G['ISVendorSpiral']")()

--[lua/client/Entity/ISUI/Controls/ISWidgetComponentHeader.d.ts]
Exports.ISWidgetComponentHeader = loadstring("require('lua/client/Entity/ISUI/Controls/ISWidgetComponentHeader');return _G['ISWidgetComponentHeader']")()

--[lua/client/Entity/ISUI/Controls/ISWidgetCraftControl.d.ts]
Exports.ISWidgetCraftControl = loadstring("require('lua/client/Entity/ISUI/Controls/ISWidgetCraftControl');return _G['ISWidgetCraftControl']")()

--[lua/client/Entity/ISUI/Controls/ISWidgetCraftDebug.d.ts]
Exports.ISWidgetCraftDebug = loadstring("require('lua/client/Entity/ISUI/Controls/ISWidgetCraftDebug');return _G['ISWidgetCraftDebug']")()

--[lua/client/Entity/ISUI/Controls/ISWidgetCraftProgress.d.ts]
Exports.ISWidgetCraftProgress = loadstring("require('lua/client/Entity/ISUI/Controls/ISWidgetCraftProgress');return _G['ISWidgetCraftProgress']")()

--[lua/client/Entity/ISUI/Controls/ISWidgetEntityDebug.d.ts]
Exports.ISWidgetEntityDebug = loadstring("require('lua/client/Entity/ISUI/Controls/ISWidgetEntityDebug');return _G['ISWidgetEntityDebug']")()

--[lua/client/Entity/ISUI/Controls/ISWidgetEntityHeader.d.ts]
Exports.ISWidgetEntityHeader = loadstring("require('lua/client/Entity/ISUI/Controls/ISWidgetEntityHeader');return _G['ISWidgetEntityHeader']")()

--[lua/client/Entity/ISUI/Controls/ISWidgetRecipeSelect.d.ts]
Exports.ISWidgetRecipeSelect = loadstring("require('lua/client/Entity/ISUI/Controls/ISWidgetRecipeSelect');return _G['ISWidgetRecipeSelect']")()

--[lua/client/Entity/ISUI/Controls/ISWidgetTitleHeader.d.ts]
Exports.ISWidgetTitleHeader = loadstring("require('lua/client/Entity/ISUI/Controls/ISWidgetTitleHeader');return _G['ISWidgetTitleHeader']")()

--[lua/client/Entity/ISUI/CraftRecipe/ISCraftInputItems.d.ts]
Exports.ISCraftInputItemNode = loadstring("require('lua/client/Entity/ISUI/CraftRecipe/ISCraftInputItems');return _G['ISCraftInputItemNode']")()
Exports.ISCraftInputItems = loadstring("require('lua/client/Entity/ISUI/CraftRecipe/ISCraftInputItems');return _G['ISCraftInputItems']")()

--[lua/client/Entity/ISUI/CraftRecipe/ISCraftInventoryPanel.d.ts]
Exports.ISCraftInventoryPanel = loadstring("require('lua/client/Entity/ISUI/CraftRecipe/ISCraftInventoryPanel');return _G['ISCraftInventoryPanel']")()

--[lua/client/Entity/ISUI/CraftRecipe/ISCraftRecipeInfoBox.d.ts]
Exports.ISCraftRecipeInfoBox = loadstring("require('lua/client/Entity/ISUI/CraftRecipe/ISCraftRecipeInfoBox');return _G['ISCraftRecipeInfoBox']")()

--[lua/client/Entity/ISUI/CraftRecipe/ISCraftRecipePanel.d.ts]
Exports.ISCraftRecipePanel = loadstring("require('lua/client/Entity/ISUI/CraftRecipe/ISCraftRecipePanel');return _G['ISCraftRecipePanel']")()

--[lua/client/Entity/ISUI/CraftRecipe/ISCraftRecipeTooltip.d.ts]
Exports.ISCraftRecipeTooltip = loadstring("require('lua/client/Entity/ISUI/CraftRecipe/ISCraftRecipeTooltip');return _G['ISCraftRecipeTooltip']")()

--[lua/client/Entity/ISUI/CraftRecipe/ISHandCraftPanel.d.ts]
Exports.ISHandCraftPanel = loadstring("require('lua/client/Entity/ISUI/CraftRecipe/ISHandCraftPanel');return _G['ISHandCraftPanel']")()

--[lua/client/Entity/ISUI/CraftRecipe/ISTiledIconListBox.d.ts]
Exports.ISTiledIconListBox = loadstring("require('lua/client/Entity/ISUI/CraftRecipe/ISTiledIconListBox');return _G['ISTiledIconListBox']")()

--[lua/client/Entity/ISUI/CraftRecipe/ISTiledIconPanel.d.ts]
Exports.ISTiledIconPanel = loadstring("require('lua/client/Entity/ISUI/CraftRecipe/ISTiledIconPanel');return _G['ISTiledIconPanel']")()

--[lua/client/Entity/ISUI/CraftRecipe/ISWidgetAutoToggle.d.ts]
Exports.ISWidgetAutoToggle = loadstring("require('lua/client/Entity/ISUI/CraftRecipe/ISWidgetAutoToggle');return _G['ISWidgetAutoToggle']")()

--[lua/client/Entity/ISUI/CraftRecipe/ISWidgetHandCraftControl.d.ts]
Exports.ISWidgetHandCraftControl = loadstring("require('lua/client/Entity/ISUI/CraftRecipe/ISWidgetHandCraftControl');return _G['ISWidgetHandCraftControl']")()

--[lua/client/Entity/ISUI/CraftRecipe/ISWidgetIngredients.d.ts]
Exports.ISWidgetIngredients = loadstring("require('lua/client/Entity/ISUI/CraftRecipe/ISWidgetIngredients');return _G['ISWidgetIngredients']")()

--[lua/client/Entity/ISUI/CraftRecipe/ISWidgetIngredientsInputs.d.ts]
Exports.ISWidgetIngredientsInputs = loadstring("require('lua/client/Entity/ISUI/CraftRecipe/ISWidgetIngredientsInputs');return _G['ISWidgetIngredientsInputs']")()

--[lua/client/Entity/ISUI/CraftRecipe/ISWidgetIngredientsOutputs.d.ts]
Exports.ISWidgetIngredientsOutputs = loadstring("require('lua/client/Entity/ISUI/CraftRecipe/ISWidgetIngredientsOutputs');return _G['ISWidgetIngredientsOutputs']")()

--[lua/client/Entity/ISUI/CraftRecipe/ISWidgetInput.d.ts]
Exports.ISWidgetInput = loadstring("require('lua/client/Entity/ISUI/CraftRecipe/ISWidgetInput');return _G['ISWidgetInput']")()

--[lua/client/Entity/ISUI/CraftRecipe/ISWidgetOutput.d.ts]
Exports.ISWidgetOutput = loadstring("require('lua/client/Entity/ISUI/CraftRecipe/ISWidgetOutput');return _G['ISWidgetOutput']")()

--[lua/client/Entity/ISUI/CraftRecipe/ISWidgetRecipeCategories.d.ts]
Exports.ISWidgetRecipeCategories = loadstring("require('lua/client/Entity/ISUI/CraftRecipe/ISWidgetRecipeCategories');return _G['ISWidgetRecipeCategories']")()

--[lua/client/Entity/ISUI/CraftRecipe/ISWidgetRecipeFilterPanel.d.ts]
Exports.ISWidgetRecipeFilterPanel = loadstring("require('lua/client/Entity/ISUI/CraftRecipe/ISWidgetRecipeFilterPanel');return _G['ISWidgetRecipeFilterPanel']")()

--[lua/client/Entity/ISUI/CraftRecipe/ISWidgetRecipeListPanel.d.ts]
Exports.ISWidgetRecipeListPanel = loadstring("require('lua/client/Entity/ISUI/CraftRecipe/ISWidgetRecipeListPanel');return _G['ISWidgetRecipeListPanel']")()

--[lua/client/Entity/ISUI/CraftRecipe/ISWidgetRecipesPanel.d.ts]
Exports.ISWidgetRecipesPanel = loadstring("require('lua/client/Entity/ISUI/CraftRecipe/ISWidgetRecipesPanel');return _G['ISWidgetRecipesPanel']")()

--[lua/client/Entity/ISUI/CraftRecipe/ISWidgetRecipeTools.d.ts]
Exports.ISWidgetRecipeTools = loadstring("require('lua/client/Entity/ISUI/CraftRecipe/ISWidgetRecipeTools');return _G['ISWidgetRecipeTools']")()

--[lua/client/Entity/ISUI/CraftRecipe/ISWidgetTooltipInput.d.ts]
Exports.ISWidgetTooltipInput = loadstring("require('lua/client/Entity/ISUI/CraftRecipe/ISWidgetTooltipInput');return _G['ISWidgetTooltipInput']")()

--[lua/client/Entity/ISUI/CraftRecipe/ISWidgetTooltipOutput.d.ts]
Exports.ISWidgetTooltipOutput = loadstring("require('lua/client/Entity/ISUI/CraftRecipe/ISWidgetTooltipOutput');return _G['ISWidgetTooltipOutput']")()

--[lua/client/Entity/ISUI/ISBaseEntityWindow.d.ts]
Exports.ISBaseEntityWindow = loadstring("require('lua/client/Entity/ISUI/ISBaseEntityWindow');return _G['ISBaseEntityWindow']")()

--[lua/client/Entity/ISUI/ISEntityBuildMenu.d.ts]
Exports.ISEntityBuildMenu = loadstring("require('lua/client/Entity/ISUI/ISEntityBuildMenu');return _G['ISEntityBuildMenu']")()

--[lua/client/Entity/ISUI/Layouts/ISBaseStockingLayout.d.ts]
Exports.ISBaseStockingLayout = loadstring("require('lua/client/Entity/ISUI/Layouts/ISBaseStockingLayout');return _G['ISBaseStockingLayout']")()

--[lua/client/Entity/ISUI/Layouts/ISBaseVendingLayout.d.ts]
Exports.ISBaseVendingLayout = loadstring("require('lua/client/Entity/ISUI/Layouts/ISBaseVendingLayout');return _G['ISBaseVendingLayout']")()

--[lua/client/Entity/ISUI/Layouts/ISPartsLayout.d.ts]
Exports.ISPartsLayout = loadstring("require('lua/client/Entity/ISUI/Layouts/ISPartsLayout');return _G['ISPartsLayout']")()

--[lua/client/Entity/ISUI/Layouts/ISSodaStockingLayout.d.ts]
Exports.ISSodaStockingLayout = loadstring("require('lua/client/Entity/ISUI/Layouts/ISSodaStockingLayout');return _G['ISSodaStockingLayout']")()

--[lua/client/Entity/ISUI/Layouts/ISSodaVendingLayout.d.ts]
Exports.ISSodaVendingLayout = loadstring("require('lua/client/Entity/ISUI/Layouts/ISSodaVendingLayout');return _G['ISSodaVendingLayout']")()

--[lua/client/Entity/ISUI/Layouts/ISVendorStockingLayout.d.ts]
Exports.ISVendorStockingLayout = loadstring("require('lua/client/Entity/ISUI/Layouts/ISVendorStockingLayout');return _G['ISVendorStockingLayout']")()

--[lua/client/Entity/ISUI/Layouts/ISVendorVendingLayout.d.ts]
Exports.ISVendorVendingLayout = loadstring("require('lua/client/Entity/ISUI/Layouts/ISVendorVendingLayout');return _G['ISVendorVendingLayout']")()

--[lua/client/Entity/ISUI/Windows/ISEntityTabWindow.d.ts]
Exports.ISEntityTabWindow = loadstring("require('lua/client/Entity/ISUI/Windows/ISEntityTabWindow');return _G['ISEntityTabWindow']")()

--[lua/client/Entity/ISUI/Windows/ISEntityWindow.d.ts]
Exports.ISEntityWindow = loadstring("require('lua/client/Entity/ISUI/Windows/ISEntityWindow');return _G['ISEntityWindow']")()

--[lua/client/erosion/debug/DebugDemoTime.d.ts]

--[lua/client/erosion/debug/Point2D.d.ts]
Exports.Point2D = loadstring("require('lua/client/erosion/debug/Point2D');return _G['Point2D']")()

--[lua/client/Farming/CFarming_Interact.d.ts]
Exports.CFarming_Interact = loadstring("require('lua/client/Farming/CFarming_Interact');return _G['CFarming_Interact']")()

--[lua/client/Farming/CFarmingSystem.d.ts]
Exports.CFarmingSystem = loadstring("require('lua/client/Farming/CFarmingSystem');return _G['CFarmingSystem']")()

--[lua/client/Farming/CPlantGlobalObject.d.ts]
Exports.CPlantGlobalObject = loadstring("require('lua/client/Farming/CPlantGlobalObject');return _G['CPlantGlobalObject']")()

--[lua/client/Farming/ISUI/ISFarmingInfo.d.ts]
Exports.ISFarmingInfo = loadstring("require('lua/client/Farming/ISUI/ISFarmingInfo');return _G['ISFarmingInfo']")()
Exports.compost_rgb = loadstring("require('lua/client/Farming/ISUI/ISFarmingInfo');return _G['compost_rgb']")()
Exports.disease = loadstring("require('lua/client/Farming/ISUI/ISFarmingInfo');return _G['disease']")()
Exports.disease_rgb = loadstring("require('lua/client/Farming/ISUI/ISFarmingInfo');return _G['disease_rgb']")()
Exports.fertilizer_rgb = loadstring("require('lua/client/Farming/ISUI/ISFarmingInfo');return _G['fertilizer_rgb']")()
Exports.health_rgb = loadstring("require('lua/client/Farming/ISUI/ISFarmingInfo');return _G['health_rgb']")()
Exports.nowateredsince_rgb = loadstring("require('lua/client/Farming/ISUI/ISFarmingInfo');return _G['nowateredsince_rgb']")()
Exports.title_rgb = loadstring("require('lua/client/Farming/ISUI/ISFarmingInfo');return _G['title_rgb']")()
Exports.water_rgb = loadstring("require('lua/client/Farming/ISUI/ISFarmingInfo');return _G['water_rgb']")()
Exports.waterbar_rgb = loadstring("require('lua/client/Farming/ISUI/ISFarmingInfo');return _G['waterbar_rgb']")()

--[lua/client/Farming/ISUI/ISFarmingMenu.d.ts]
Exports.ISFarmingMenu = loadstring("require('lua/client/Farming/ISUI/ISFarmingMenu');return _G['ISFarmingMenu']")()

--[lua/client/Farming/ISUI/ISFarmingWindow.d.ts]
Exports.ISFarmingWindow = loadstring("require('lua/client/Farming/ISUI/ISFarmingWindow');return _G['ISFarmingWindow']")()

--[lua/client/Farming/TimedActions/ISPlantInfoAction.d.ts]
Exports.ISPlantInfoAction = loadstring("require('lua/client/Farming/TimedActions/ISPlantInfoAction');return _G['ISPlantInfoAction']")()

--[lua/client/FeedingTrough/CFeedingTroughGlobalObject.d.ts]
Exports.CFeedingTroughGlobalObject = loadstring("require('lua/client/FeedingTrough/CFeedingTroughGlobalObject');return _G['CFeedingTroughGlobalObject']")()

--[lua/client/FeedingTrough/CFeedingTroughSystem.d.ts]
Exports.CFeedingTroughSystem = loadstring("require('lua/client/FeedingTrough/CFeedingTroughSystem');return _G['CFeedingTroughSystem']")()

--[lua/client/FeedingTrough/ISUI/ISFeedingTroughMenu.d.ts]
Exports.ISFeedingTroughMenu = loadstring("require('lua/client/FeedingTrough/ISUI/ISFeedingTroughMenu');return _G['ISFeedingTroughMenu']")()

--[lua/client/FeedingTrough/ISUI/ISFeedingTroughUI.d.ts]
Exports.ISFeedingTroughUI = loadstring("require('lua/client/FeedingTrough/ISUI/ISFeedingTroughUI');return _G['ISFeedingTroughUI']")()

--[lua/client/Fishing/FishingDebugWindow.d.ts]
Exports.FishingDebugWindow = loadstring("require('lua/client/Fishing/FishingDebugWindow');return _G['FishingDebugWindow']")()

--[lua/client/Fishing/FishingHandler.d.ts]

--[lua/client/Fishing/FishingStates.d.ts]

--[lua/client/Fishing/TensionUI.d.ts]
-- Wrong: class name is undefined
--[lua/client/Fluids/ISFluidBar.d.ts]
Exports.ISFluidBar = loadstring("require('lua/client/Fluids/ISFluidBar');return _G['ISFluidBar']")()

--[lua/client/Fluids/ISFluidContainerPanel.d.ts]
Exports.ISFluidContainerPanel = loadstring("require('lua/client/Fluids/ISFluidContainerPanel');return _G['ISFluidContainerPanel']")()

--[lua/client/Fluids/ISFluidInfoUI.d.ts]
Exports.ISFluidInfoUI = loadstring("require('lua/client/Fluids/ISFluidInfoUI');return _G['ISFluidInfoUI']")()

--[lua/client/Fluids/ISFluidPanelAction.d.ts]
Exports.ISFluidPanelAction = loadstring("require('lua/client/Fluids/ISFluidPanelAction');return _G['ISFluidPanelAction']")()

--[lua/client/Fluids/ISFluidTransferUI.d.ts]
Exports.ISFluidTransferUI = loadstring("require('lua/client/Fluids/ISFluidTransferUI');return _G['ISFluidTransferUI']")()

--[lua/client/Foraging/forageClient.d.ts]
Exports.forageClient = loadstring("require('lua/client/Foraging/forageClient');return _G['forageClient']")()
Exports.forageData = loadstring("require('lua/client/Foraging/forageClient');return _G['forageData']")()

--[lua/client/Foraging/ISAnimalTracksFinder.d.ts]
Exports.ISAnimalTracksFinder = loadstring("require('lua/client/Foraging/ISAnimalTracksFinder');return _G['ISAnimalTracksFinder']")()

--[lua/client/Foraging/ISAnimalTracksMenu.d.ts]
Exports.ISAnimalTracksMenu = loadstring("require('lua/client/Foraging/ISAnimalTracksMenu');return _G['ISAnimalTracksMenu']")()

--[lua/client/Foraging/ISBaseIcon.d.ts]
Exports.ISBaseIcon = loadstring("require('lua/client/Foraging/ISBaseIcon');return _G['ISBaseIcon']")()

--[lua/client/Foraging/ISForageIcon.d.ts]
Exports.ISForageIcon = loadstring("require('lua/client/Foraging/ISForageIcon');return _G['ISForageIcon']")()

--[lua/client/Foraging/ISSearchManager.d.ts]
Exports.ISSearchManager = loadstring("require('lua/client/Foraging/ISSearchManager');return _G['ISSearchManager']")()

--[lua/client/Foraging/ISSearchWindow.d.ts]
Exports.ISSearchWindow = loadstring("require('lua/client/Foraging/ISSearchWindow');return _G['ISSearchWindow']")()

--[lua/client/Foraging/ISStashIcon.d.ts]
Exports.ISStashIcon = loadstring("require('lua/client/Foraging/ISStashIcon');return _G['ISStashIcon']")()

--[lua/client/Foraging/ISWorldItemIcon.d.ts]
Exports.ISWorldItemIcon = loadstring("require('lua/client/Foraging/ISWorldItemIcon');return _G['ISWorldItemIcon']")()

--[lua/client/Foraging/ISWorldItemIconTrack.d.ts]
Exports.ISWorldItemIconTrack = loadstring("require('lua/client/Foraging/ISWorldItemIconTrack');return _G['ISWorldItemIconTrack']")()

--[lua/client/Foraging/ISZoneDisplay.d.ts]
Exports.ISZoneDisplay = loadstring("require('lua/client/Foraging/ISZoneDisplay');return _G['ISZoneDisplay']")()

--[lua/client/Hotbar/ISHotbar.d.ts]
Exports.ISHotbar = loadstring("require('lua/client/Hotbar/ISHotbar');return _G['ISHotbar']")()

--[lua/client/ISUI/AdminPanel/ISAddNonPvpZoneUI.d.ts]
Exports.ISAddNonPvpZoneUI = loadstring("require('lua/client/ISUI/AdminPanel/ISAddNonPvpZoneUI');return _G['ISAddNonPvpZoneUI']")()

--[lua/client/ISUI/AdminPanel/ISAddSafeZoneUI.d.ts]
Exports.ISAddSafeZoneUI = loadstring("require('lua/client/ISUI/AdminPanel/ISAddSafeZoneUI');return _G['ISAddSafeZoneUI']")()

--[lua/client/ISUI/AdminPanel/ISAdminMessage.d.ts]
Exports.ISAdminMessage = loadstring("require('lua/client/ISUI/AdminPanel/ISAdminMessage');return _G['ISAdminMessage']")()

--[lua/client/ISUI/AdminPanel/ISAdminPanelUI.d.ts]
Exports.ISAdminPanelUI = loadstring("require('lua/client/ISUI/AdminPanel/ISAdminPanelUI');return _G['ISAdminPanelUI']")()

--[lua/client/ISUI/AdminPanel/ISAdminPowerUI.d.ts]
Exports.ISAdminPowerUI = loadstring("require('lua/client/ISUI/AdminPanel/ISAdminPowerUI');return _G['ISAdminPowerUI']")()

--[lua/client/ISUI/AdminPanel/ISAdminTicketsUI.d.ts]
Exports.ISAdminTicketsUI = loadstring("require('lua/client/ISUI/AdminPanel/ISAdminTicketsUI');return _G['ISAdminTicketsUI']")()

--[lua/client/ISUI/AdminPanel/ISAdminWeather.d.ts]
Exports.ISAdminWeather = loadstring("require('lua/client/ISUI/AdminPanel/ISAdminWeather');return _G['ISAdminWeather']")()

--[lua/client/ISUI/AdminPanel/ISAdmPanelClimate.d.ts]
Exports.ISAdmPanelClimate = loadstring("require('lua/client/ISUI/AdminPanel/ISAdmPanelClimate');return _G['ISAdmPanelClimate']")()

--[lua/client/ISUI/AdminPanel/ISAdmPanelWeather.d.ts]
Exports.ISAdmPanelWeather = loadstring("require('lua/client/ISUI/AdminPanel/ISAdmPanelWeather');return _G['ISAdmPanelWeather']")()

--[lua/client/ISUI/AdminPanel/ISFactionsList.d.ts]
Exports.ISFactionsList = loadstring("require('lua/client/ISUI/AdminPanel/ISFactionsList');return _G['ISFactionsList']")()

--[lua/client/ISUI/AdminPanel/ISItemEditorUI.d.ts]
Exports.ISItemEditorUI = loadstring("require('lua/client/ISUI/AdminPanel/ISItemEditorUI');return _G['ISItemEditorUI']")()

--[lua/client/ISUI/AdminPanel/ISItemEditPanel.d.ts]
Exports.ISItemEditPanel = loadstring("require('lua/client/ISUI/AdminPanel/ISItemEditPanel');return _G['ISItemEditPanel']")()

--[lua/client/ISUI/AdminPanel/ISItemsListTable.d.ts]
Exports.ISItemsListTable = loadstring("require('lua/client/ISUI/AdminPanel/ISItemsListTable');return _G['ISItemsListTable']")()

--[lua/client/ISUI/AdminPanel/ISItemsListViewer.d.ts]
Exports.ISItemsListViewer = loadstring("require('lua/client/ISUI/AdminPanel/ISItemsListViewer');return _G['ISItemsListViewer']")()

--[lua/client/ISUI/AdminPanel/ISLootLog.d.ts]
Exports.ISLootLog = loadstring("require('lua/client/ISUI/AdminPanel/ISLootLog');return _G['ISLootLog']")()

--[lua/client/ISUI/AdminPanel/ISMiniScoreboardUI.d.ts]
Exports.ISMiniScoreboardUI = loadstring("require('lua/client/ISUI/AdminPanel/ISMiniScoreboardUI');return _G['ISMiniScoreboardUI']")()

--[lua/client/ISUI/AdminPanel/ISModalEditRole.d.ts]
Exports.ISModalEditRole = loadstring("require('lua/client/ISUI/AdminPanel/ISModalEditRole');return _G['ISModalEditRole']")()

--[lua/client/ISUI/AdminPanel/ISPacketCounts.d.ts]
Exports.ISPacketCounts = loadstring("require('lua/client/ISUI/AdminPanel/ISPacketCounts');return _G['ISPacketCounts']")()
Exports.ISPacketCountsList = loadstring("require('lua/client/ISUI/AdminPanel/ISPacketCounts');return _G['ISPacketCountsList']")()

--[lua/client/ISUI/AdminPanel/ISPVPLogToolUI.d.ts]
Exports.ISPVPLogToolUI = loadstring("require('lua/client/ISUI/AdminPanel/ISPVPLogToolUI');return _G['ISPVPLogToolUI']")()

--[lua/client/ISUI/AdminPanel/ISPvpZonePanel.d.ts]
Exports.ISPvpZonePanel = loadstring("require('lua/client/ISUI/AdminPanel/ISPvpZonePanel');return _G['ISPvpZonePanel']")()

--[lua/client/ISUI/AdminPanel/ISRolesList.d.ts]
Exports.ISRolesList = loadstring("require('lua/client/ISUI/AdminPanel/ISRolesList');return _G['ISRolesList']")()

--[lua/client/ISUI/AdminPanel/ISSafehousesList.d.ts]
Exports.ISSafehousesList = loadstring("require('lua/client/ISUI/AdminPanel/ISSafehousesList');return _G['ISSafehousesList']")()

--[lua/client/ISUI/AdminPanel/ISServerOptions.d.ts]
Exports.ISServerOptions = loadstring("require('lua/client/ISUI/AdminPanel/ISServerOptions');return _G['ISServerOptions']")()

--[lua/client/ISUI/AdminPanel/ISServerOptionsChange.d.ts]
Exports.ISServerOptionsChange = loadstring("require('lua/client/ISUI/AdminPanel/ISServerOptionsChange');return _G['ISServerOptionsChange']")()

--[lua/client/ISUI/AdminPanel/ISServerSandboxOptionsUI.d.ts]
Exports.ISServerSandboxOptionsUI = loadstring("require('lua/client/ISUI/AdminPanel/ISServerSandboxOptionsUI');return _G['ISServerSandboxOptionsUI']")()

--[lua/client/ISUI/AdminPanel/ISStatisticsUI.d.ts]
Exports.ISStatisticsPanel = loadstring("require('lua/client/ISUI/AdminPanel/ISStatisticsUI');return _G['ISStatisticsPanel']")()
Exports.ISStatisticsUI = loadstring("require('lua/client/ISUI/AdminPanel/ISStatisticsUI');return _G['ISStatisticsUI']")()

--[lua/client/ISUI/AdminPanel/ISUsersList.d.ts]
Exports.ISUsersList = loadstring("require('lua/client/ISUI/AdminPanel/ISUsersList');return _G['ISUsersList']")()

--[lua/client/ISUI/AdminPanel/ISWhitelistModifyRow.d.ts]
Exports.ISWhitelistModifyRow = loadstring("require('lua/client/ISUI/AdminPanel/ISWhitelistModifyRow');return _G['ISWhitelistModifyRow']")()

--[lua/client/ISUI/AdminPanel/ISWhitelistTable.d.ts]
Exports.ISWhitelistTable = loadstring("require('lua/client/ISUI/AdminPanel/ISWhitelistTable');return _G['ISWhitelistTable']")()

--[lua/client/ISUI/AdminPanel/ISWhitelistViewer.d.ts]
Exports.ISWhitelistViewer = loadstring("require('lua/client/ISUI/AdminPanel/ISWhitelistViewer');return _G['ISWhitelistViewer']")()

--[lua/client/ISUI/AdminPanel/LootZed/ISLootZed.d.ts]
Exports.ISLootZed = loadstring("require('lua/client/ISUI/AdminPanel/LootZed/ISLootZed');return _G['ISLootZed']")()

--[lua/client/ISUI/AdminPanel/LootZed/SpawnRateChecker.d.ts]
Exports.LootZedTool = loadstring("require('lua/client/ISUI/AdminPanel/LootZed/SpawnRateChecker');return _G['LootZedTool']")()

--[lua/client/ISUI/AdminPanel/ZoneEditor/ISMultiplayerZoneEditor.d.ts]
Exports.ISMultiplayerZoneEditor = loadstring("require('lua/client/ISUI/AdminPanel/ZoneEditor/ISMultiplayerZoneEditor');return _G['ISMultiplayerZoneEditor']")()
Exports.ISMultiplayerZoneEditor_ButtonPanel = loadstring("require('lua/client/ISUI/AdminPanel/ZoneEditor/ISMultiplayerZoneEditor');return _G['ISMultiplayerZoneEditor_ButtonPanel']")()

--[lua/client/ISUI/AdminPanel/ZoneEditor/MultiplayerZoneEditorMode_NonPVP.d.ts]
Exports.MultiplayerZoneEditorMode_NonPVP = loadstring("require('lua/client/ISUI/AdminPanel/ZoneEditor/MultiplayerZoneEditorMode_NonPVP');return _G['MultiplayerZoneEditorMode_NonPVP']")()

--[lua/client/ISUI/AdminPanel/ZoneEditor/MultiplayerZoneEditorMode_Safehouse.d.ts]
Exports.MultiplayerZoneEditorMode_Safehouse = loadstring("require('lua/client/ISUI/AdminPanel/ZoneEditor/MultiplayerZoneEditorMode_Safehouse');return _G['MultiplayerZoneEditorMode_Safehouse']")()
Exports.MultiplayerZoneEditorMode_Safehouse_Confirm = loadstring("require('lua/client/ISUI/AdminPanel/ZoneEditor/MultiplayerZoneEditorMode_Safehouse');return _G['MultiplayerZoneEditorMode_Safehouse_Confirm']")()
Exports.MultiplayerZoneEditorMode_Safehouse_Details = loadstring("require('lua/client/ISUI/AdminPanel/ZoneEditor/MultiplayerZoneEditorMode_Safehouse');return _G['MultiplayerZoneEditorMode_Safehouse_Details']")()

--[lua/client/ISUI/AdminPanel/ZoneEditor/MultiplayerZoneEditorMode.d.ts]
Exports.MultiplayerZoneEditorMode = loadstring("require('lua/client/ISUI/AdminPanel/ZoneEditor/MultiplayerZoneEditorMode');return _G['MultiplayerZoneEditorMode']")()

--[lua/client/ISUI/Animal/ISAddDesignationAnimalZoneUI.d.ts]
Exports.ISAddDesignationAnimalZoneUI = loadstring("require('lua/client/ISUI/Animal/ISAddDesignationAnimalZoneUI');return _G['ISAddDesignationAnimalZoneUI']")()

--[lua/client/ISUI/Animal/ISAnimalBehaviorDebugUI.d.ts]
Exports.ISAnimalBehaviorDebugUI = loadstring("require('lua/client/ISUI/Animal/ISAnimalBehaviorDebugUI');return _G['ISAnimalBehaviorDebugUI']")()

--[lua/client/ISUI/Animal/ISAnimalContextMenu.d.ts]
Exports.AnimalContextMenu = loadstring("require('lua/client/ISUI/Animal/ISAnimalContextMenu');return _G['AnimalContextMenu']")()

--[lua/client/ISUI/Animal/ISAnimalGenomeUI.d.ts]
Exports.ISAnimalGenomeUI = loadstring("require('lua/client/ISUI/Animal/ISAnimalGenomeUI');return _G['ISAnimalGenomeUI']")()

--[lua/client/ISUI/Animal/ISAnimalTracksUI.d.ts]
Exports.ISAnimalTracksUI = loadstring("require('lua/client/ISUI/Animal/ISAnimalTracksUI');return _G['ISAnimalTracksUI']")()

--[lua/client/ISUI/Animal/ISAnimalUI.d.ts]
Exports.ISAnimalAvatar = loadstring("require('lua/client/ISUI/Animal/ISAnimalUI');return _G['ISAnimalAvatar']")()
Exports.ISAnimalUI = loadstring("require('lua/client/ISUI/Animal/ISAnimalUI');return _G['ISAnimalUI']")()

--[lua/client/ISUI/Animal/ISAnimalZoneFirstInfo.d.ts]
Exports.ISAnimalZoneFirstInfo = loadstring("require('lua/client/ISUI/Animal/ISAnimalZoneFirstInfo');return _G['ISAnimalZoneFirstInfo']")()

--[lua/client/ISUI/Animal/ISButcherHookUI.d.ts]
Exports.ISButcherHookUI = loadstring("require('lua/client/ISUI/Animal/ISButcherHookUI');return _G['ISButcherHookUI']")()

--[lua/client/ISUI/Animal/ISButcheringDebugUI.d.ts]
Exports.ISButcheringDebugUI = loadstring("require('lua/client/ISUI/Animal/ISButcheringDebugUI');return _G['ISButcheringDebugUI']")()

--[lua/client/ISUI/Animal/ISDesignationAnimalZoneUI.d.ts]
Exports.ISDesignationZoneAnimalZoneUI = loadstring("require('lua/client/ISUI/Animal/ISDesignationAnimalZoneUI');return _G['ISDesignationZoneAnimalZoneUI']")()

--[lua/client/ISUI/BodyParts/ISBodyPartPanel.d.ts]
Exports.ISBodyPartPanel = loadstring("require('lua/client/ISUI/BodyParts/ISBodyPartPanel');return _G['ISBodyPartPanel']")()

--[lua/client/ISUI/Building/ISBuildWindow.d.ts]
Exports.ISBuildWindow = loadstring("require('lua/client/ISUI/Building/ISBuildWindow');return _G['ISBuildWindow']")()

--[lua/client/ISUI/Building/ISBuildWindowHeader.d.ts]
Exports.ISBuildWindowHeader = loadstring("require('lua/client/ISUI/Building/ISBuildWindowHeader');return _G['ISBuildWindowHeader']")()

--[lua/client/ISUI/Crafting/ISHandcraftWindow.d.ts]
Exports.ISHandcraftWindow = loadstring("require('lua/client/ISUI/Crafting/ISHandcraftWindow');return _G['ISHandcraftWindow']")()

--[lua/client/ISUI/Crafting/ISHandcraftWindowHeader.d.ts]
Exports.ISHandcraftWindowHeader = loadstring("require('lua/client/ISUI/Crafting/ISHandcraftWindowHeader');return _G['ISHandcraftWindowHeader']")()

--[lua/client/ISUI/Fireplace/ISKnob.d.ts]
Exports.ISKnob = loadstring("require('lua/client/ISUI/Fireplace/ISKnob');return _G['ISKnob']")()

--[lua/client/ISUI/Fireplace/ISMicrowaveUI.d.ts]
Exports.ISMicrowaveUI = loadstring("require('lua/client/ISUI/Fireplace/ISMicrowaveUI');return _G['ISMicrowaveUI']")()

--[lua/client/ISUI/Fireplace/ISOvenUI.d.ts]
Exports.ISOvenUI = loadstring("require('lua/client/ISUI/Fireplace/ISOvenUI');return _G['ISOvenUI']")()

--[lua/client/ISUI/FPS.d.ts]
Exports.ISFPS = loadstring("require('lua/client/ISUI/FPS');return _G['ISFPS']")()

--[lua/client/ISUI/Hutch/ISHutchMenu.d.ts]
Exports.ISHutchMenu = loadstring("require('lua/client/ISUI/Hutch/ISHutchMenu');return _G['ISHutchMenu']")()

--[lua/client/ISUI/Hutch/ISHutchUI.d.ts]
Exports.ISHutch3DModel = loadstring("require('lua/client/ISUI/Hutch/ISHutchUI');return _G['ISHutch3DModel']")()
Exports.ISHutchNestBox = loadstring("require('lua/client/ISUI/Hutch/ISHutchUI');return _G['ISHutchNestBox']")()
Exports.ISHutchRoost = loadstring("require('lua/client/ISUI/Hutch/ISHutchUI');return _G['ISHutchRoost']")()
Exports.ISHutchUI = loadstring("require('lua/client/ISUI/Hutch/ISHutchUI');return _G['ISHutchUI']")()

--[lua/client/ISUI/InterpolationPeriodDebug.d.ts]
Exports.InterpolationPeriodDebug = loadstring("require('lua/client/ISUI/InterpolationPeriodDebug');return _G['InterpolationPeriodDebug']")()

--[lua/client/ISUI/InterpolationPlayerPeriodDebug.d.ts]
Exports.InterpolationPlayerPeriodDebug = loadstring("require('lua/client/ISUI/InterpolationPlayerPeriodDebug');return _G['InterpolationPlayerPeriodDebug']")()

--[lua/client/ISUI/IS9Patch.d.ts]
Exports.IS9Patch = loadstring("require('lua/client/ISUI/IS9Patch');return _G['IS9Patch']")()

--[lua/client/ISUI/ISAddGeneticDisorderUIU.d.ts]
Exports.ISAddGeneticDisorderUI = loadstring("require('lua/client/ISUI/ISAddGeneticDisorderUIU');return _G['ISAddGeneticDisorderUI']")()

--[lua/client/ISUI/ISAlarmClockDialog.d.ts]
Exports.ISAlarmClockDialog = loadstring("require('lua/client/ISUI/ISAlarmClockDialog');return _G['ISAlarmClockDialog']")()

--[lua/client/ISUI/ISBackButtonWheel.d.ts]
Exports.ISBackButtonWheel = loadstring("require('lua/client/ISUI/ISBackButtonWheel');return _G['ISBackButtonWheel']")()

--[lua/client/ISUI/ISBBQInfoWindow.d.ts]
Exports.ISBBQInfoWindow = loadstring("require('lua/client/ISUI/ISBBQInfoWindow');return _G['ISBBQInfoWindow']")()

--[lua/client/ISUI/ISBBQMenu.d.ts]
Exports.ISBBQMenu = loadstring("require('lua/client/ISUI/ISBBQMenu');return _G['ISBBQMenu']")()

--[lua/client/ISUI/ISBombTimerDialog.d.ts]
Exports.ISBombTimerDialog = loadstring("require('lua/client/ISUI/ISBombTimerDialog');return _G['ISBombTimerDialog']")()

--[lua/client/ISUI/ISButton.d.ts]
Exports.ISButton = loadstring("require('lua/client/ISUI/ISButton');return _G['ISButton']")()

--[lua/client/ISUI/ISButtonPrompt.d.ts]
Exports.ISButtonPrompt = loadstring("require('lua/client/ISUI/ISButtonPrompt');return _G['ISButtonPrompt']")()

--[lua/client/ISUI/ISCollapsableModalRichText.d.ts]
Exports.ISCollapsableModalRichText = loadstring("require('lua/client/ISUI/ISCollapsableModalRichText');return _G['ISCollapsableModalRichText']")()

--[lua/client/ISUI/ISCollapsableWindow.d.ts]
Exports.ISCollapsableWindow = loadstring("require('lua/client/ISUI/ISCollapsableWindow');return _G['ISCollapsableWindow']")()

--[lua/client/ISUI/ISCollapsableWindowJoypad.d.ts]
Exports.ISCollapsableWindowJoypad = loadstring("require('lua/client/ISUI/ISCollapsableWindowJoypad');return _G['ISCollapsableWindowJoypad']")()

--[lua/client/ISUI/ISColorPicker.d.ts]
Exports.ISColorPicker = loadstring("require('lua/client/ISUI/ISColorPicker');return _G['ISColorPicker']")()

--[lua/client/ISUI/ISColorPickerHSB.d.ts]
Exports.ISColorPickerHSB = loadstring("require('lua/client/ISUI/ISColorPickerHSB');return _G['ISColorPickerHSB']")()

--[lua/client/ISUI/ISComboBox.d.ts]
Exports.ISComboBox = loadstring("require('lua/client/ISUI/ISComboBox');return _G['ISComboBox']")()
Exports.ISComboBoxEditor = loadstring("require('lua/client/ISUI/ISComboBox');return _G['ISComboBoxEditor']")()
Exports.ISComboBoxPopup = loadstring("require('lua/client/ISUI/ISComboBox');return _G['ISComboBoxPopup']")()

--[lua/client/ISUI/ISConfirmMonitorSettingsDialog.d.ts]
Exports.ISConfirmMonitorSettingsDialog = loadstring("require('lua/client/ISUI/ISConfirmMonitorSettingsDialog');return _G['ISConfirmMonitorSettingsDialog']")()

--[lua/client/ISUI/ISContextMenu.d.ts]
Exports.ISContextMenu = loadstring("require('lua/client/ISUI/ISContextMenu');return _G['ISContextMenu']")()

--[lua/client/ISUI/ISControllerTestPanel.d.ts]
Exports.ISControllerTestPanel = loadstring("require('lua/client/ISUI/ISControllerTestPanel');return _G['ISControllerTestPanel']")()

--[lua/client/ISUI/ISCraftingCategoryUI.d.ts]
Exports.ISCraftingCategoryUI = loadstring("require('lua/client/ISUI/ISCraftingCategoryUI');return _G['ISCraftingCategoryUI']")()

--[lua/client/ISUI/ISCraftingUI.d.ts]
Exports.ISCraftingIngredientIconPanel = loadstring("require('lua/client/ISUI/ISCraftingUI');return _G['ISCraftingIngredientIconPanel']")()
Exports.ISCraftingUI = loadstring("require('lua/client/ISUI/ISCraftingUI');return _G['ISCraftingUI']")()

--[lua/client/ISUI/ISDebugAvatarUI.d.ts]
Exports.ISDebugAvatarUI = loadstring("require('lua/client/ISUI/ISDebugAvatarUI');return _G['ISDebugAvatarUI']")()

--[lua/client/ISUI/ISDemoPopup.d.ts]
Exports.ISDemoPopup = loadstring("require('lua/client/ISUI/ISDemoPopup');return _G['ISDemoPopup']")()

--[lua/client/ISUI/ISDesignationZonePanel.d.ts]
Exports.ISDesignationZonePanel = loadstring("require('lua/client/ISUI/ISDesignationZonePanel');return _G['ISDesignationZonePanel']")()

--[lua/client/ISUI/ISDigitalCode.d.ts]
Exports.ISDigitalCode = loadstring("require('lua/client/ISUI/ISDigitalCode');return _G['ISDigitalCode']")()

--[lua/client/ISUI/ISDPadWheels.d.ts]
Exports.ISDPadWheels = loadstring("require('lua/client/ISUI/ISDPadWheels');return _G['ISDPadWheels']")()

--[lua/client/ISUI/ISDuplicateKeybindDialog.d.ts]
Exports.ISDuplicateKeybindDialog = loadstring("require('lua/client/ISUI/ISDuplicateKeybindDialog');return _G['ISDuplicateKeybindDialog']")()

--[lua/client/ISUI/ISEmoteRadialMenu.d.ts]
Exports.ISEmoteRadialMenu = loadstring("require('lua/client/ISUI/ISEmoteRadialMenu');return _G['ISEmoteRadialMenu']")()

--[lua/client/ISUI/ISEquippedItem.d.ts]
Exports.ISEquippedItem = loadstring("require('lua/client/ISUI/ISEquippedItem');return _G['ISEquippedItem']")()
Exports.ISMapPopup = loadstring("require('lua/client/ISUI/ISEquippedItem');return _G['ISMapPopup']")()
Exports.ISMoveablesIconPopup = loadstring("require('lua/client/ISUI/ISEquippedItem');return _G['ISMoveablesIconPopup']")()

--[lua/client/ISUI/ISFirearmRadialMenu.d.ts]
Exports.ISFirearmRadialMenu = loadstring("require('lua/client/ISUI/ISFirearmRadialMenu');return _G['ISFirearmRadialMenu']")()

--[lua/client/ISUI/ISFireplaceInfoWindow.d.ts]
Exports.ISFireplaceInfoWindow = loadstring("require('lua/client/ISUI/ISFireplaceInfoWindow');return _G['ISFireplaceInfoWindow']")()

--[lua/client/ISUI/ISFireplaceMenu.d.ts]
Exports.ISFireplaceMenu = loadstring("require('lua/client/ISUI/ISFireplaceMenu');return _G['ISFireplaceMenu']")()

--[lua/client/ISUI/ISFishingUI.d.ts]
Exports.ISFishingUI = loadstring("require('lua/client/ISUI/ISFishingUI');return _G['ISFishingUI']")()

--[lua/client/ISUI/ISFitnessUI.d.ts]
Exports.ISFitnessUI = loadstring("require('lua/client/ISUI/ISFitnessUI');return _G['ISFitnessUI']")()

--[lua/client/ISUI/ISGameLoadingUI.d.ts]
Exports.ISGameLoadingUI = loadstring("require('lua/client/ISUI/ISGameLoadingUI');return _G['ISGameLoadingUI']")()

--[lua/client/ISUI/ISGameSoundVolumeControl.d.ts]
Exports.ISGameSoundVolumeControl = loadstring("require('lua/client/ISUI/ISGameSoundVolumeControl');return _G['ISGameSoundVolumeControl']")()

--[lua/client/ISUI/ISGarmentUI.d.ts]
Exports.ISGarmentUI = loadstring("require('lua/client/ISUI/ISGarmentUI');return _G['ISGarmentUI']")()

--[lua/client/ISUI/ISGeneratorInfoWindow.d.ts]
Exports.ISGeneratorInfoWindow = loadstring("require('lua/client/ISUI/ISGeneratorInfoWindow');return _G['ISGeneratorInfoWindow']")()

--[lua/client/ISUI/ISGradientBar.d.ts]
Exports.ISGradientBar = loadstring("require('lua/client/ISUI/ISGradientBar');return _G['ISGradientBar']")()

--[lua/client/ISUI/ISImage.d.ts]
Exports.ISImage = loadstring("require('lua/client/ISUI/ISImage');return _G['ISImage']")()

--[lua/client/ISUI/ISInfoContainer.d.ts]
Exports.ISInfoContainer = loadstring("require('lua/client/ISUI/ISInfoContainer');return _G['ISInfoContainer']")()

--[lua/client/ISUI/ISInventoryItem.d.ts]
Exports.ISInventoryItem = loadstring("require('lua/client/ISUI/ISInventoryItem');return _G['ISInventoryItem']")()

--[lua/client/ISUI/ISInventoryPage.d.ts]
Exports.ISInventoryPage = loadstring("require('lua/client/ISUI/ISInventoryPage');return _G['ISInventoryPage']")()

--[lua/client/ISUI/ISInventoryPane.d.ts]
Exports.ISInventoryPane = loadstring("require('lua/client/ISUI/ISInventoryPane');return _G['ISInventoryPane']")()
Exports.ISInventoryPaneDraggedItems = loadstring("require('lua/client/ISUI/ISInventoryPane');return _G['ISInventoryPaneDraggedItems']")()

--[lua/client/ISUI/ISInventoryPaneContextMenu.d.ts]
Exports.ISInventoryPaneContextMenu = loadstring("require('lua/client/ISUI/ISInventoryPaneContextMenu');return _G['ISInventoryPaneContextMenu']")()

--[lua/client/ISUI/ISJoystickButtonRadialMenu.d.ts]
Exports.ISJoystickButtonRadialMenu = loadstring("require('lua/client/ISUI/ISJoystickButtonRadialMenu');return _G['ISJoystickButtonRadialMenu']")()

--[lua/client/ISUI/ISLabel.d.ts]
Exports.ISLabel = loadstring("require('lua/client/ISUI/ISLabel');return _G['ISLabel']")()

--[lua/client/ISUI/ISLayoutManager.d.ts]
Exports.ISLayoutManager = loadstring("require('lua/client/ISUI/ISLayoutManager');return _G['ISLayoutManager']")()

--[lua/client/ISUI/ISLcdBar.d.ts]
Exports.ISLcdBar = loadstring("require('lua/client/ISUI/ISLcdBar');return _G['ISLcdBar']")()

--[lua/client/ISUI/ISLightSourceRadialMenu.d.ts]
Exports.ISLightSourceRadialMenu = loadstring("require('lua/client/ISUI/ISLightSourceRadialMenu');return _G['ISLightSourceRadialMenu']")()

--[lua/client/ISUI/ISLiteratureUI.d.ts]
Exports.ISLiteratureGrowingList = loadstring("require('lua/client/ISUI/ISLiteratureUI');return _G['ISLiteratureGrowingList']")()
Exports.ISLiteratureList = loadstring("require('lua/client/ISUI/ISLiteratureUI');return _G['ISLiteratureList']")()
Exports.ISLiteratureMediaList = loadstring("require('lua/client/ISUI/ISLiteratureUI');return _G['ISLiteratureMediaList']")()
Exports.ISLiteratureUI = loadstring("require('lua/client/ISUI/ISLiteratureUI');return _G['ISLiteratureUI']")()

--[lua/client/ISUI/ISMakeUpUI.d.ts]
Exports.ISMakeUpUI = loadstring("require('lua/client/ISUI/ISMakeUpUI');return _G['ISMakeUpUI']")()

--[lua/client/ISUI/ISMegaVolumeControl.d.ts]
Exports.ISMegaVolumeControl = loadstring("require('lua/client/ISUI/ISMegaVolumeControl');return _G['ISMegaVolumeControl']")()

--[lua/client/ISUI/ISModalDialog.d.ts]
Exports.ISModalDialog = loadstring("require('lua/client/ISUI/ISModalDialog');return _G['ISModalDialog']")()

--[lua/client/ISUI/ISModalRichText.d.ts]
Exports.ISModalRichText = loadstring("require('lua/client/ISUI/ISModalRichText');return _G['ISModalRichText']")()

--[lua/client/ISUI/ISMouseDrag.d.ts]
Exports.ISMouseDrag = loadstring("require('lua/client/ISUI/ISMouseDrag');return _G['ISMouseDrag']")()

--[lua/client/ISUI/ISMoveableInfoWindow.d.ts]
Exports.ISMoveableInfoWindow = loadstring("require('lua/client/ISUI/ISMoveableInfoWindow');return _G['ISMoveableInfoWindow']")()

--[lua/client/ISUI/ISNewsUpdate.d.ts]
Exports.ISNewsUpdate = loadstring("require('lua/client/ISUI/ISNewsUpdate');return _G['ISNewsUpdate']")()

--[lua/client/ISUI/ISOnScreenKeyboard.d.ts]
Exports.ISOnScreenKeyboard = loadstring("require('lua/client/ISUI/ISOnScreenKeyboard');return _G['ISOnScreenKeyboard']")()
Exports.OnScreenKeyboardEntry = loadstring("require('lua/client/ISUI/ISOnScreenKeyboard');return _G['OnScreenKeyboardEntry']")()
Exports.OnScreenKeyboardPanel = loadstring("require('lua/client/ISUI/ISOnScreenKeyboard');return _G['OnScreenKeyboardPanel']")()
Exports.OnScreenKeyboard = loadstring("require('lua/client/ISUI/ISOnScreenKeyboard');return _G['OnScreenKeyboard']")()

--[lua/client/ISUI/ISOptionPanel.d.ts]
Exports.ISOptionPanel = loadstring("require('lua/client/ISUI/ISOptionPanel');return _G['ISOptionPanel']")()

--[lua/client/ISUI/ISPanel.d.ts]
Exports.ISPanel = loadstring("require('lua/client/ISUI/ISPanel');return _G['ISPanel']")()

--[lua/client/ISUI/ISPanelJoypad.d.ts]
Exports.ISPanelJoypad = loadstring("require('lua/client/ISUI/ISPanelJoypad');return _G['ISPanelJoypad']")()

--[lua/client/ISUI/ISPauseModListUI.d.ts]
Exports.ISPauseModListUI = loadstring("require('lua/client/ISUI/ISPauseModListUI');return _G['ISPauseModListUI']")()
Exports.PauseBuggedModList = loadstring("require('lua/client/ISUI/ISPauseModListUI');return _G['PauseBuggedModList']")()

--[lua/client/ISUI/ISPostDeathUI.d.ts]
Exports.ISPostDeathUI = loadstring("require('lua/client/ISUI/ISPostDeathUI');return _G['ISPostDeathUI']")()

--[lua/client/ISUI/ISPrintMediaTextPanel.d.ts]
Exports.ISPrintMediaMap = loadstring("require('lua/client/ISUI/ISPrintMediaTextPanel');return _G['ISPrintMediaMap']")()
Exports.ISPrintMediaTextPanel = loadstring("require('lua/client/ISUI/ISPrintMediaTextPanel');return _G['ISPrintMediaTextPanel']")()

--[lua/client/ISUI/ISProgressBar.d.ts]
Exports.ISProgressBar = loadstring("require('lua/client/ISUI/ISProgressBar');return _G['ISProgressBar']")()

--[lua/client/ISUI/ISRadialMenu.d.ts]
Exports.ISRadialMenu = loadstring("require('lua/client/ISUI/ISRadialMenu');return _G['ISRadialMenu']")()

--[lua/client/ISUI/ISRadialProgressBar.d.ts]
Exports.ISRadialProgressBar = loadstring("require('lua/client/ISUI/ISRadialProgressBar');return _G['ISRadialProgressBar']")()

--[lua/client/ISUI/ISRadioButtons.d.ts]
Exports.ISRadioButtons = loadstring("require('lua/client/ISUI/ISRadioButtons');return _G['ISRadioButtons']")()

--[lua/client/ISUI/ISRadioOption.d.ts]
Exports.ISRadioOption = loadstring("require('lua/client/ISUI/ISRadioOption');return _G['ISRadioOption']")()

--[lua/client/ISUI/ISRainPanel.d.ts]
Exports.ISRainPanel = loadstring("require('lua/client/ISUI/ISRainPanel');return _G['ISRainPanel']")()

--[lua/client/ISUI/ISRect.d.ts]
Exports.ISRect = loadstring("require('lua/client/ISUI/ISRect');return _G['ISRect']")()

--[lua/client/ISUI/ISResizeableButton.d.ts]
Exports.ISResizableButton = loadstring("require('lua/client/ISUI/ISResizeableButton');return _G['ISResizableButton']")()

--[lua/client/ISUI/ISResizeWidget.d.ts]
Exports.ISResizeWidget = loadstring("require('lua/client/ISUI/ISResizeWidget');return _G['ISResizeWidget']")()

--[lua/client/ISUI/ISRichTextBox.d.ts]
Exports.ISRichTextBox = loadstring("require('lua/client/ISUI/ISRichTextBox');return _G['ISRichTextBox']")()

--[lua/client/ISUI/ISRichTextPanel.d.ts]
Exports.ISRichTextPanel = loadstring("require('lua/client/ISUI/ISRichTextPanel');return _G['ISRichTextPanel']")()

--[lua/client/ISUI/ISScrollBar.d.ts]
Exports.ISScrollBar = loadstring("require('lua/client/ISUI/ISScrollBar');return _G['ISScrollBar']")()

--[lua/client/ISUI/ISScrollingListBox.d.ts]
Exports.ISScrollingListBox = loadstring("require('lua/client/ISUI/ISScrollingListBox');return _G['ISScrollingListBox']")()

--[lua/client/ISUI/ISServerDisconnectUI.d.ts]
Exports.ISServerDisconnectUI = loadstring("require('lua/client/ISUI/ISServerDisconnectUI');return _G['ISServerDisconnectUI']")()

--[lua/client/ISUI/ISServerSavingMessage.d.ts]
Exports.ISServerSavingMessage = loadstring("require('lua/client/ISUI/ISServerSavingMessage');return _G['ISServerSavingMessage']")()

--[lua/client/ISUI/ISSetKeybindDialog.d.ts]
Exports.ISSetKeybindDialog = loadstring("require('lua/client/ISUI/ISSetKeybindDialog');return _G['ISSetKeybindDialog']")()

--[lua/client/ISUI/ISSleepDialog.d.ts]
Exports.ISSleepDialog = loadstring("require('lua/client/ISUI/ISSleepDialog');return _G['ISSleepDialog']")()

--[lua/client/ISUI/ISSleepingUI.d.ts]
Exports.ISSleepingUI = loadstring("require('lua/client/ISUI/ISSleepingUI');return _G['ISSleepingUI']")()

--[lua/client/ISUI/ISSpinBox.d.ts]
Exports.ISSpinBox = loadstring("require('lua/client/ISUI/ISSpinBox');return _G['ISSpinBox']")()

--[lua/client/ISUI/ISTabPanel.d.ts]
Exports.ISTabPanel = loadstring("require('lua/client/ISUI/ISTabPanel');return _G['ISTabPanel']")()

--[lua/client/ISUI/ISTabPanelPaginated.d.ts]
Exports.ISTabPanelPaginated = loadstring("require('lua/client/ISUI/ISTabPanelPaginated');return _G['ISTabPanelPaginated']")()

--[lua/client/ISUI/ISTermsOfServiceUI.d.ts]
Exports.ISTermsOfServiceUI = loadstring("require('lua/client/ISUI/ISTermsOfServiceUI');return _G['ISTermsOfServiceUI']")()

--[lua/client/ISUI/ISTextBox.d.ts]
Exports.ISTextBox = loadstring("require('lua/client/ISUI/ISTextBox');return _G['ISTextBox']")()

--[lua/client/ISUI/ISTextEntryBox.d.ts]
Exports.ISTextEntryBox = loadstring("require('lua/client/ISUI/ISTextEntryBox');return _G['ISTextEntryBox']")()

--[lua/client/ISUI/ISTickBox.d.ts]
Exports.ISTickBox = loadstring("require('lua/client/ISUI/ISTickBox');return _G['ISTickBox']")()

--[lua/client/ISUI/ISToolTip.d.ts]
Exports.ISToolTip = loadstring("require('lua/client/ISUI/ISToolTip');return _G['ISToolTip']")()

--[lua/client/ISUI/ISToolTipInv.d.ts]
Exports.ISToolTipInv = loadstring("require('lua/client/ISUI/ISToolTipInv');return _G['ISToolTipInv']")()

--[lua/client/ISUI/ISTradingUI.d.ts]
Exports.ISTradingUI = loadstring("require('lua/client/ISUI/ISTradingUI');return _G['ISTradingUI']")()

--[lua/client/ISUI/ISTradingUIHistorial.d.ts]
Exports.ISTradingUIHistorical = loadstring("require('lua/client/ISUI/ISTradingUIHistorial');return _G['ISTradingUIHistorical']")()

--[lua/client/ISUI/ISUI3DModel.d.ts]
Exports.ISUI3DModel = loadstring("require('lua/client/ISUI/ISUI3DModel');return _G['ISUI3DModel']")()

--[lua/client/ISUI/ISUIElement.d.ts]
Exports.ISUIElement = loadstring("require('lua/client/ISUI/ISUIElement');return _G['ISUIElement']")()

--[lua/client/ISUI/ISUIElementJoypad.d.ts]
Exports.ISUIElementJoypad = loadstring("require('lua/client/ISUI/ISUIElementJoypad');return _G['ISUIElementJoypad']")()

--[lua/client/ISUI/ISUIEmoteConfig.d.ts]
Exports.ISUIEmoteConfig = loadstring("require('lua/client/ISUI/ISUIEmoteConfig');return _G['ISUIEmoteConfig']")()

--[lua/client/ISUI/ISUIHandler.d.ts]
Exports.ISUIHandler = loadstring("require('lua/client/ISUI/ISUIHandler');return _G['ISUIHandler']")()

--[lua/client/ISUI/ISUIWriteJournal.d.ts]
Exports.ISUIWriteJournal = loadstring("require('lua/client/ISUI/ISUIWriteJournal');return _G['ISUIWriteJournal']")()

--[lua/client/ISUI/ISVehicleAnimalUI.d.ts]
Exports.ISVehicleAnimal3DModel = loadstring("require('lua/client/ISUI/ISVehicleAnimalUI');return _G['ISVehicleAnimal3DModel']")()
Exports.ISVehicleAnimalUI = loadstring("require('lua/client/ISUI/ISVehicleAnimalUI');return _G['ISVehicleAnimalUI']")()

--[lua/client/ISUI/ISVehicleConfirmBox.d.ts]
Exports.ISVehicleConfirmBox = loadstring("require('lua/client/ISUI/ISVehicleConfirmBox');return _G['ISVehicleConfirmBox']")()
Exports.ISVehiclePartListBox = loadstring("require('lua/client/ISUI/ISVehicleConfirmBox');return _G['ISVehiclePartListBox']")()

--[lua/client/ISUI/ISVersionWaterMark.d.ts]
Exports.WaterMarkUI = loadstring("require('lua/client/ISUI/ISVersionWaterMark');return _G['WaterMarkUI']")()
Exports.ISVersionWaterMark = loadstring("require('lua/client/ISUI/ISVersionWaterMark');return _G['ISVersionWaterMark']")()

--[lua/client/ISUI/ISVolumeControl.d.ts]
Exports.ISVolumeControl = loadstring("require('lua/client/ISUI/ISVolumeControl');return _G['ISVolumeControl']")()

--[lua/client/ISUI/ISVolumeIndicator.d.ts]
Exports.ISVolumeIndicator = loadstring("require('lua/client/ISUI/ISVolumeIndicator');return _G['ISVolumeIndicator']")()

--[lua/client/ISUI/ISWarManagerUI.d.ts]
Exports.ISWarManagerUI = loadstring("require('lua/client/ISUI/ISWarManagerUI');return _G['ISWarManagerUI']")()

--[lua/client/ISUI/ISWindow.d.ts]
Exports.ISWindow = loadstring("require('lua/client/ISUI/ISWindow');return _G['ISWindow']")()

--[lua/client/ISUI/ISWorldObjectContextMenu.d.ts]
Exports.ISWorldObjectContextMenu = loadstring("require('lua/client/ISUI/ISWorldObjectContextMenu');return _G['ISWorldObjectContextMenu']")()

--[lua/client/ISUI/ISXuiBuilder.d.ts]
Exports.ISXuiBuilder = loadstring("require('lua/client/ISUI/ISXuiBuilder');return _G['ISXuiBuilder']")()
Exports.ISXuiFunctions = loadstring("require('lua/client/ISUI/ISXuiBuilder');return _G['ISXuiFunctions']")()

--[lua/client/ISUI/ISXuiSkin.d.ts]
Exports.ISXuiSkin = loadstring("require('lua/client/ISUI/ISXuiSkin');return _G['ISXuiSkin']")()
Exports.ISXuiSkinFunctions = loadstring("require('lua/client/ISUI/ISXuiSkin');return _G['ISXuiSkinFunctions']")()

--[lua/client/ISUI/ISXuiTableLayout.d.ts]
Exports.ISXuiTableLayout = loadstring("require('lua/client/ISUI/ISXuiTableLayout');return _G['ISXuiTableLayout']")()
Exports.ISXuiTableLayoutCell = loadstring("require('lua/client/ISUI/ISXuiTableLayout');return _G['ISXuiTableLayoutCell']")()
Exports.ISXuiTableLayoutColumn = loadstring("require('lua/client/ISUI/ISXuiTableLayout');return _G['ISXuiTableLayoutColumn']")()
Exports.ISXuiTableLayoutRow = loadstring("require('lua/client/ISUI/ISXuiTableLayout');return _G['ISXuiTableLayoutRow']")()

--[lua/client/ISUI/Maps/Editor/WorldMapEditor.d.ts]
Exports.WorldMapEditor = loadstring("require('lua/client/ISUI/Maps/Editor/WorldMapEditor');return _G['WorldMapEditor']")()

--[lua/client/ISUI/Maps/Editor/WorldMapEditorListBox.d.ts]
Exports.WorldMapEditorListBox = loadstring("require('lua/client/ISUI/Maps/Editor/WorldMapEditorListBox');return _G['WorldMapEditorListBox']")()

--[lua/client/ISUI/Maps/Editor/WorldMapEditorLocationControl.d.ts]
Exports.WorldMapEditorLocationControl = loadstring("require('lua/client/ISUI/Maps/Editor/WorldMapEditorLocationControl');return _G['WorldMapEditorLocationControl']")()

--[lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Annotations.d.ts]
Exports.WorldMapEditorMode_Annotations = loadstring("require('lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Annotations');return _G['WorldMapEditorMode_Annotations']")()

--[lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Bounds.d.ts]
Exports.WorldMapEditorMode_Bounds = loadstring("require('lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Bounds');return _G['WorldMapEditorMode_Bounds']")()

--[lua/client/ISUI/Maps/Editor/WorldMapEditorMode_DataFiles.d.ts]
Exports.WorldMapEditorMode_DataFiles = loadstring("require('lua/client/ISUI/Maps/Editor/WorldMapEditorMode_DataFiles');return _G['WorldMapEditorMode_DataFiles']")()

--[lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Maps.d.ts]
Exports.WorldMapEditorMode_Maps = loadstring("require('lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Maps');return _G['WorldMapEditorMode_Maps']")()

--[lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Stashes.d.ts]
Exports.WorldMapEditorMode_Stashes = loadstring("require('lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Stashes');return _G['WorldMapEditorMode_Stashes']")()

--[lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Style.d.ts]
Exports.WorldMapEditorMode_Style = loadstring("require('lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Style');return _G['WorldMapEditorMode_Style']")()
Exports.WorldMapStyleEditor = loadstring("require('lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Style');return _G['WorldMapStyleEditor']")()
Exports.WorldMapStyleEditor_ColorStopsPanel = loadstring("require('lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Style');return _G['WorldMapStyleEditor_ColorStopsPanel']")()
Exports.WorldMapStyleEditor_FilterPanel = loadstring("require('lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Style');return _G['WorldMapStyleEditor_FilterPanel']")()
Exports.WorldMapStyleEditor_PolygonLayerPanel = loadstring("require('lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Style');return _G['WorldMapStyleEditor_PolygonLayerPanel']")()
Exports.WorldMapStyleEditor_TabPanel = loadstring("require('lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Style');return _G['WorldMapStyleEditor_TabPanel']")()
Exports.WorldMapStyleEditor_TextureLayerPanel = loadstring("require('lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Style');return _G['WorldMapStyleEditor_TextureLayerPanel']")()
Exports.WorldMapStyleEditor_TexturePanel = loadstring("require('lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Style');return _G['WorldMapStyleEditor_TexturePanel']")()
Exports.WorldMapStyleEditor_TextureStopsPanel = loadstring("require('lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Style');return _G['WorldMapStyleEditor_TextureStopsPanel']")()

--[lua/client/ISUI/Maps/Editor/WorldMapEditorMode.d.ts]
Exports.WorldMapEditorMode = loadstring("require('lua/client/ISUI/Maps/Editor/WorldMapEditorMode');return _G['WorldMapEditorMode']")()

--[lua/client/ISUI/Maps/Editor/WorldMapEditorResizer.d.ts]
Exports.WorldMapEditorResizer = loadstring("require('lua/client/ISUI/Maps/Editor/WorldMapEditorResizer');return _G['WorldMapEditorResizer']")()

--[lua/client/ISUI/Maps/ISMap.d.ts]
Exports.ISMap = loadstring("require('lua/client/ISUI/Maps/ISMap');return _G['ISMap']")()
Exports.ISMapWrapper = loadstring("require('lua/client/ISUI/Maps/ISMap');return _G['ISMapWrapper']")()

--[lua/client/ISUI/Maps/ISMapDefinitions.d.ts]
Exports.LootMaps = loadstring("require('lua/client/ISUI/Maps/ISMapDefinitions');return _G['LootMaps']")()
Exports.MapUtils = loadstring("require('lua/client/ISUI/Maps/ISMapDefinitions');return _G['MapUtils']")()
Exports.PrintMediaMaps = loadstring("require('lua/client/ISUI/Maps/ISMapDefinitions');return _G['PrintMediaMaps']")()

--[lua/client/ISUI/Maps/ISMiniMap.d.ts]
Exports.ISMiniMapInner = loadstring("require('lua/client/ISUI/Maps/ISMiniMap');return _G['ISMiniMapInner']")()
Exports.ISMiniMapOuter = loadstring("require('lua/client/ISUI/Maps/ISMiniMap');return _G['ISMiniMapOuter']")()
Exports.ISMiniMapTitleBar = loadstring("require('lua/client/ISUI/Maps/ISMiniMap');return _G['ISMiniMapTitleBar']")()
Exports.ISMiniMap = loadstring("require('lua/client/ISUI/Maps/ISMiniMap');return _G['ISMiniMap']")()

--[lua/client/ISUI/Maps/ISTextBoxMap.d.ts]
Exports.ISTextBoxMap = loadstring("require('lua/client/ISUI/Maps/ISTextBoxMap');return _G['ISTextBoxMap']")()

--[lua/client/ISUI/Maps/ISWorldMap.d.ts]
Exports.ISWorldMap = loadstring("require('lua/client/ISUI/Maps/ISWorldMap');return _G['ISWorldMap']")()
Exports.ISWorldMapButtonPanel = loadstring("require('lua/client/ISUI/Maps/ISWorldMap');return _G['ISWorldMapButtonPanel']")()
Exports.WorldMapOptions = loadstring("require('lua/client/ISUI/Maps/ISWorldMap');return _G['WorldMapOptions']")()

--[lua/client/ISUI/Maps/ISWorldMapKey.d.ts]
Exports.ISWorldMapKey = loadstring("require('lua/client/ISUI/Maps/ISWorldMapKey');return _G['ISWorldMapKey']")()

--[lua/client/ISUI/Maps/ISWorldMapSharing.d.ts]
Exports.ISWorldMapSharing = loadstring("require('lua/client/ISUI/Maps/ISWorldMapSharing');return _G['ISWorldMapSharing']")()
Exports.ISWorldMapSharing_PanelPlayers = loadstring("require('lua/client/ISUI/Maps/ISWorldMapSharing');return _G['ISWorldMapSharing_PanelPlayers']")()

--[lua/client/ISUI/Maps/ISWorldMapSymbols.d.ts]
Exports.ISWorldMapSymbols = loadstring("require('lua/client/ISUI/Maps/ISWorldMapSymbols');return _G['ISWorldMapSymbols']")()
Exports.ISWorldMapSymbolsTabPanel = loadstring("require('lua/client/ISUI/Maps/ISWorldMapSymbols');return _G['ISWorldMapSymbolsTabPanel']")()
Exports.ISWorldMapSymbolTool = loadstring("require('lua/client/ISUI/Maps/ISWorldMapSymbols');return _G['ISWorldMapSymbolTool']")()
Exports.ISWorldMapSymbolTool_AddNote = loadstring("require('lua/client/ISUI/Maps/ISWorldMapSymbols');return _G['ISWorldMapSymbolTool_AddNote']")()
Exports.ISWorldMapSymbolTool_AddSymbol = loadstring("require('lua/client/ISUI/Maps/ISWorldMapSymbols');return _G['ISWorldMapSymbolTool_AddSymbol']")()
Exports.ISWorldMapSymbolTool_EditNote = loadstring("require('lua/client/ISUI/Maps/ISWorldMapSymbols');return _G['ISWorldMapSymbolTool_EditNote']")()
Exports.ISWorldMapSymbolTool_MoveAnnotation = loadstring("require('lua/client/ISUI/Maps/ISWorldMapSymbols');return _G['ISWorldMapSymbolTool_MoveAnnotation']")()
Exports.ISWorldMapSymbolTool_RemoveAnnotation = loadstring("require('lua/client/ISUI/Maps/ISWorldMapSymbols');return _G['ISWorldMapSymbolTool_RemoveAnnotation']")()
Exports.ISWorldMapSymbolTool_Sharing = loadstring("require('lua/client/ISUI/Maps/ISWorldMapSymbols');return _G['ISWorldMapSymbolTool_Sharing']")()

--[lua/client/ISUI/PlayerData/ISPlayerData.d.ts]
Exports.ISPlayerData = loadstring("require('lua/client/ISUI/PlayerData/ISPlayerData');return _G['ISPlayerData']")()

--[lua/client/ISUI/PlayerData/ISPlayerDataObject.d.ts]
Exports.ISPlayerDataObject = loadstring("require('lua/client/ISUI/PlayerData/ISPlayerDataObject');return _G['ISPlayerDataObject']")()

--[lua/client/ISUI/PlayerStats/ISPlayerStatsAddXPUI.d.ts]
Exports.ISPlayerStatsAddXPUI = loadstring("require('lua/client/ISUI/PlayerStats/ISPlayerStatsAddXPUI');return _G['ISPlayerStatsAddXPUI']")()

--[lua/client/ISUI/PlayerStats/ISPlayerStatsChooseAccessLevel.d.ts]
Exports.ISPlayerStatsChooseAccessLevelUI = loadstring("require('lua/client/ISUI/PlayerStats/ISPlayerStatsChooseAccessLevel');return _G['ISPlayerStatsChooseAccessLevelUI']")()

--[lua/client/ISUI/PlayerStats/ISPlayerStatsChooseProfessionUI.d.ts]
Exports.ISPlayerStatsChooseProfessionUI = loadstring("require('lua/client/ISUI/PlayerStats/ISPlayerStatsChooseProfessionUI');return _G['ISPlayerStatsChooseProfessionUI']")()

--[lua/client/ISUI/PlayerStats/ISPlayerStatsChooseTraitUI.d.ts]
Exports.ISPlayerStatsChooseTraitUI = loadstring("require('lua/client/ISUI/PlayerStats/ISPlayerStatsChooseTraitUI');return _G['ISPlayerStatsChooseTraitUI']")()

--[lua/client/ISUI/PlayerStats/ISPlayerStatsManageInvUI.d.ts]
Exports.ISPlayerStatsManageInvUI = loadstring("require('lua/client/ISUI/PlayerStats/ISPlayerStatsManageInvUI');return _G['ISPlayerStatsManageInvUI']")()

--[lua/client/ISUI/PlayerStats/ISPlayerStatsSuspicionActivityUI.d.ts]
Exports.ISPlayerStatsSuspicionActivityUI = loadstring("require('lua/client/ISUI/PlayerStats/ISPlayerStatsSuspicionActivityUI');return _G['ISPlayerStatsSuspicionActivityUI']")()

--[lua/client/ISUI/PlayerStats/ISPlayerStatsUI.d.ts]
Exports.ISPlayerStatsUI = loadstring("require('lua/client/ISUI/PlayerStats/ISPlayerStatsUI');return _G['ISPlayerStatsUI']")()

--[lua/client/ISUI/PlayerStats/ISPlayerStatsUserlogUI.d.ts]
Exports.ISPlayerStatsUserlogUI = loadstring("require('lua/client/ISUI/PlayerStats/ISPlayerStatsUserlogUI');return _G['ISPlayerStatsUserlogUI']")()

--[lua/client/ISUI/PlayerStats/ISPlayerStatsWarningPointUI.d.ts]
Exports.ISPlayerStatsWarningPointUI = loadstring("require('lua/client/ISUI/PlayerStats/ISPlayerStatsWarningPointUI');return _G['ISPlayerStatsWarningPointUI']")()

--[lua/client/ISUI/PrintMedia/ISPrintMediaInfo.d.ts]
Exports.ISPrintMediaInfo = loadstring("require('lua/client/ISUI/PrintMedia/ISPrintMediaInfo');return _G['ISPrintMediaInfo']")()
Exports.ISPrintMediaSetInfo = loadstring("require('lua/client/ISUI/PrintMedia/ISPrintMediaInfo');return _G['ISPrintMediaSetInfo']")()

--[lua/client/ISUI/PrintMedia/ISPrintMediaPage.d.ts]
Exports.ISPrintMediaPage = loadstring("require('lua/client/ISUI/PrintMedia/ISPrintMediaPage');return _G['ISPrintMediaPage']")()
Exports.ISPrintMediaRichText = loadstring("require('lua/client/ISUI/PrintMedia/ISPrintMediaPage');return _G['ISPrintMediaRichText']")()

--[lua/client/ISUI/PrintMedia/ISPrintMediaPanel.d.ts]
Exports.ISPrintMediaListBox = loadstring("require('lua/client/ISUI/PrintMedia/ISPrintMediaPanel');return _G['ISPrintMediaListBox']")()
Exports.ISPrintMediaPanel = loadstring("require('lua/client/ISUI/PrintMedia/ISPrintMediaPanel');return _G['ISPrintMediaPanel']")()

--[lua/client/ISUI/PrintMedia/PrintMediaEntries.d.ts]
Exports.PrintMediaEntries = loadstring("require('lua/client/ISUI/PrintMedia/PrintMediaEntries');return _G['PrintMediaEntries']")()

--[lua/client/ISUI/PrintMedia/PrintMediaManager.d.ts]
Exports.PrintMediaManager = loadstring("require('lua/client/ISUI/PrintMedia/PrintMediaManager');return _G['PrintMediaManager']")()

--[lua/client/ISUI/RichTextLayout.d.ts]
Exports.ISRichTextLayout = loadstring("require('lua/client/ISUI/RichTextLayout');return _G['ISRichTextLayout']")()

--[lua/client/ISUI/SpeedControlsHandler.d.ts]
Exports.SpeedControlsHandler = loadstring("require('lua/client/ISUI/SpeedControlsHandler');return _G['SpeedControlsHandler']")()

--[lua/client/ISUI/UserPanel/ISCreateFactionTagUI.d.ts]
Exports.ISCreateFactionTagUI = loadstring("require('lua/client/ISUI/UserPanel/ISCreateFactionTagUI');return _G['ISCreateFactionTagUI']")()

--[lua/client/ISUI/UserPanel/ISCreateFactionUI.d.ts]
Exports.ISCreateFactionUI = loadstring("require('lua/client/ISUI/UserPanel/ISCreateFactionUI');return _G['ISCreateFactionUI']")()

--[lua/client/ISUI/UserPanel/ISFactionAddPlayerUI.d.ts]
Exports.ISFactionAddPlayerUI = loadstring("require('lua/client/ISUI/UserPanel/ISFactionAddPlayerUI');return _G['ISFactionAddPlayerUI']")()

--[lua/client/ISUI/UserPanel/ISFactionUI.d.ts]
Exports.ISFactionUI = loadstring("require('lua/client/ISUI/UserPanel/ISFactionUI');return _G['ISFactionUI']")()

--[lua/client/ISUI/UserPanel/ISSafehouseAddPlayerUI.d.ts]
Exports.ISSafehouseAddPlayerUI = loadstring("require('lua/client/ISUI/UserPanel/ISSafehouseAddPlayerUI');return _G['ISSafehouseAddPlayerUI']")()

--[lua/client/ISUI/UserPanel/ISSafehouseUI.d.ts]
Exports.ISSafehouseUI = loadstring("require('lua/client/ISUI/UserPanel/ISSafehouseUI');return _G['ISSafehouseUI']")()

--[lua/client/ISUI/UserPanel/ISTicketsUI.d.ts]
Exports.ISTicketsUI = loadstring("require('lua/client/ISUI/UserPanel/ISTicketsUI');return _G['ISTicketsUI']")()

--[lua/client/ISUI/UserPanel/ISUserPanelUI.d.ts]
Exports.ISUserPanelUI = loadstring("require('lua/client/ISUI/UserPanel/ISUserPanelUI');return _G['ISUserPanelUI']")()

--[lua/client/ISUI/WelcomeMessageB42.d.ts]
Exports.WelcomeMessageUI = loadstring("require('lua/client/ISUI/WelcomeMessageB42');return _G['WelcomeMessageUI']")()
Exports.WelcomeMessageB42 = loadstring("require('lua/client/ISUI/WelcomeMessageB42');return _G['WelcomeMessageB42']")()

--[lua/client/ISUI/ZombiePopulationWindow.d.ts]
Exports.ZombiePopulationWindow = loadstring("require('lua/client/ISUI/ZombiePopulationWindow');return _G['ZombiePopulationWindow']")()

--[lua/client/JoyPad/ISJoypadDebugUI.d.ts]
Exports.ISJoypadDebugUI = loadstring("require('lua/client/JoyPad/ISJoypadDebugUI');return _G['ISJoypadDebugUI']")()

--[lua/client/JoyPad/ISJoypadDisconnectedUI.d.ts]
Exports.ISJoypadDisconnectedUI = loadstring("require('lua/client/JoyPad/ISJoypadDisconnectedUI');return _G['ISJoypadDisconnectedUI']")()

--[lua/client/JoyPad/ISJoyPadListBox.d.ts]
Exports.ISJoypadListBox = loadstring("require('lua/client/JoyPad/ISJoyPadListBox');return _G['ISJoypadListBox']")()

--[lua/client/LastStand/AReallyCDDAy.d.ts]
Exports.CDDA = loadstring("require('lua/client/LastStand/AReallyCDDAy');return _G['CDDA']")()

--[lua/client/LastStand/AStormIsComing.d.ts]
Exports.AStormIsComing = loadstring("require('lua/client/LastStand/AStormIsComing');return _G['AStormIsComing']")()

--[lua/client/LastStand/Challenge1.d.ts]
Exports.Challenge1 = loadstring("require('lua/client/LastStand/Challenge1');return _G['Challenge1']")()

--[lua/client/LastStand/Challenge2.d.ts]
Exports.Challenge2 = loadstring("require('lua/client/LastStand/Challenge2');return _G['Challenge2']")()

--[lua/client/LastStand/EightMonthsLater.d.ts]
Exports.EightMonthsLater = loadstring("require('lua/client/LastStand/EightMonthsLater');return _G['EightMonthsLater']")()

--[lua/client/LastStand/Insomnia.d.ts]
Exports.InsomniaChallenge = loadstring("require('lua/client/LastStand/Insomnia');return _G['InsomniaChallenge']")()

--[lua/client/LastStand/ISUI/ISChallenge2PlayerUpWindow.d.ts]
Exports.ISChallenge2PlayerUpWindow = loadstring("require('lua/client/LastStand/ISUI/ISChallenge2PlayerUpWindow');return _G['ISChallenge2PlayerUpWindow']")()

--[lua/client/LastStand/ISUI/ISChallenge2UpgradeTab.d.ts]
Exports.ISChallenge2UpgradeTab = loadstring("require('lua/client/LastStand/ISUI/ISChallenge2UpgradeTab');return _G['ISChallenge2UpgradeTab']")()

--[lua/client/LastStand/ISUI/ISChallenge2VariousItemWindow.d.ts]
Exports.ISChallenge2VariousItemWindow = loadstring("require('lua/client/LastStand/ISUI/ISChallenge2VariousItemWindow');return _G['ISChallenge2VariousItemWindow']")()

--[lua/client/LastStand/ISUI/ISChallenge2WeaponRepairWindow.d.ts]
Exports.ISChallenge2WeaponRepairWindow = loadstring("require('lua/client/LastStand/ISUI/ISChallenge2WeaponRepairWindow');return _G['ISChallenge2WeaponRepairWindow']")()

--[lua/client/LastStand/ISUI/ISChallenge2WeaponUpWindow.d.ts]
Exports.ISChallenge2WeaponUpWindow = loadstring("require('lua/client/LastStand/ISUI/ISChallenge2WeaponUpWindow');return _G['ISChallenge2WeaponUpWindow']")()

--[lua/client/LastStand/Kingsmouth.d.ts]
Exports.Kingsmouth = loadstring("require('lua/client/LastStand/Kingsmouth');return _G['Kingsmouth']")()

--[lua/client/LastStand/LastStandPlayerFile.d.ts]
Exports.LastStandPlayerFile = loadstring("require('lua/client/LastStand/LastStandPlayerFile');return _G['LastStandPlayerFile']")()

--[lua/client/LastStand/LastStandSetup.d.ts]
Exports.LastStandData = loadstring("require('lua/client/LastStand/LastStandSetup');return _G['LastStandData']")()

--[lua/client/LastStand/OpeningHours.d.ts]
Exports.OpeningHours = loadstring("require('lua/client/LastStand/OpeningHours');return _G['OpeningHours']")()

--[lua/client/LastStand/Studio.d.ts]
Exports.Studio = loadstring("require('lua/client/LastStand/Studio');return _G['Studio']")()

--[lua/client/LastStand/TheDescendingFog.d.ts]
Exports.TheDescendingFog = loadstring("require('lua/client/LastStand/TheDescendingFog');return _G['TheDescendingFog']")()

--[lua/client/LastStand/WinterIsComing.d.ts]
Exports.WinterIsComing = loadstring("require('lua/client/LastStand/WinterIsComing');return _G['WinterIsComing']")()

--[lua/client/LastStand/YouHaveOneDay.d.ts]
Exports.YouHaveOneDay = loadstring("require('lua/client/LastStand/YouHaveOneDay');return _G['YouHaveOneDay']")()

--[lua/client/Map/CGlobalObject.d.ts]
Exports.CGlobalObject = loadstring("require('lua/client/Map/CGlobalObject');return _G['CGlobalObject']")()

--[lua/client/Map/CGlobalObjectSystem.d.ts]
Exports.CGlobalObjectSystem = loadstring("require('lua/client/Map/CGlobalObjectSystem');return _G['CGlobalObjectSystem']")()

--[lua/client/Mining/DiggingUtil.d.ts]
Exports.DiggingUtil = loadstring("require('lua/client/Mining/DiggingUtil');return _G['DiggingUtil']")()

--[lua/client/Moveables/ISMoveablesIconToolTip.d.ts]
Exports.ISMoveablesIconToolTip = loadstring("require('lua/client/Moveables/ISMoveablesIconToolTip');return _G['ISMoveablesIconToolTip']")()

--[lua/client/Music/MusicChoices.d.ts]
Exports.MusicChoices = loadstring("require('lua/client/Music/MusicChoices');return _G['MusicChoices']")()

--[lua/client/NPCs/UI/CharacterInfoPage.d.ts]
Exports.CharacterInfoPage = loadstring("require('lua/client/NPCs/UI/CharacterInfoPage');return _G['CharacterInfoPage']")()

--[lua/client/NPCs/UI/TeamOverview.d.ts]
Exports.TeamOverview = loadstring("require('lua/client/NPCs/UI/TeamOverview');return _G['TeamOverview']")()

--[lua/client/NPCs/UI/TeamPicker.d.ts]
Exports.TeamPicker = loadstring("require('lua/client/NPCs/UI/TeamPicker');return _G['TeamPicker']")()

--[lua/client/OptionScreens/BootstrapConnectPopup.d.ts]
Exports.BootstrapConnectPopup = loadstring("require('lua/client/OptionScreens/BootstrapConnectPopup');return _G['BootstrapConnectPopup']")()

--[lua/client/OptionScreens/CharacterCreationHeader.d.ts]
Exports.CharacterCreationHeader = loadstring("require('lua/client/OptionScreens/CharacterCreationHeader');return _G['CharacterCreationHeader']")()

--[lua/client/OptionScreens/CharacterCreationMain.d.ts]
Exports.CharacterCreationMain = loadstring("require('lua/client/OptionScreens/CharacterCreationMain');return _G['CharacterCreationMain']")()
Exports.CharacterCreationMainCharacterPanel = loadstring("require('lua/client/OptionScreens/CharacterCreationMain');return _G['CharacterCreationMainCharacterPanel']")()
Exports.CharacterCreationMainPresetPanel = loadstring("require('lua/client/OptionScreens/CharacterCreationMain');return _G['CharacterCreationMainPresetPanel']")()

--[lua/client/OptionScreens/CharacterCreationProfession.d.ts]
Exports.CharacterCreationProfession = loadstring("require('lua/client/OptionScreens/CharacterCreationProfession');return _G['CharacterCreationProfession']")()
Exports.BCRC = loadstring("require('lua/client/OptionScreens/CharacterCreationProfession');return _G['BCRC']")()

--[lua/client/OptionScreens/ConnectToServer.d.ts]
Exports.ConnectToServer = loadstring("require('lua/client/OptionScreens/ConnectToServer');return _G['ConnectToServer']")()

--[lua/client/OptionScreens/CoopCharacterCreation.d.ts]
Exports.CoopCharacterCreation = loadstring("require('lua/client/OptionScreens/CoopCharacterCreation');return _G['CoopCharacterCreation']")()

--[lua/client/OptionScreens/CoopCharacterCreationMain.d.ts]
Exports.CoopCharacterCreationMain = loadstring("require('lua/client/OptionScreens/CoopCharacterCreationMain');return _G['CoopCharacterCreationMain']")()

--[lua/client/OptionScreens/CoopCharacterCreationProfession.d.ts]
Exports.CoopCharacterCreationProfession = loadstring("require('lua/client/OptionScreens/CoopCharacterCreationProfession');return _G['CoopCharacterCreationProfession']")()

--[lua/client/OptionScreens/CoopMapSpawnSelect.d.ts]
Exports.CoopMapSpawnSelect = loadstring("require('lua/client/OptionScreens/CoopMapSpawnSelect');return _G['CoopMapSpawnSelect']")()

--[lua/client/OptionScreens/CoopOptionsScreen.d.ts]
Exports.CoopOptionsScreen = loadstring("require('lua/client/OptionScreens/CoopOptionsScreen');return _G['CoopOptionsScreen']")()
Exports.CoopOptionsScreenPanel = loadstring("require('lua/client/OptionScreens/CoopOptionsScreen');return _G['CoopOptionsScreenPanel']")()
Exports.CoopConnection = loadstring("require('lua/client/OptionScreens/CoopOptionsScreen');return _G['CoopConnection']")()

--[lua/client/OptionScreens/CoopUserName.d.ts]
Exports.CoopUserName = loadstring("require('lua/client/OptionScreens/CoopUserName');return _G['CoopUserName']")()

--[lua/client/OptionScreens/InviteFriends.d.ts]
Exports.InviteFriends = loadstring("require('lua/client/OptionScreens/InviteFriends');return _G['InviteFriends']")()

--[lua/client/OptionScreens/ISGameSounds.d.ts]
Exports.ISGameSounds = loadstring("require('lua/client/OptionScreens/ISGameSounds');return _G['ISGameSounds']")()

--[lua/client/OptionScreens/ISModsNagPanel.d.ts]
Exports.ISModsNagPanel = loadstring("require('lua/client/OptionScreens/ISModsNagPanel');return _G['ISModsNagPanel']")()

--[lua/client/OptionScreens/ISScoreboard.d.ts]
Exports.ISScoreboard = loadstring("require('lua/client/OptionScreens/ISScoreboard');return _G['ISScoreboard']")()

--[lua/client/OptionScreens/LastStandChallenge.d.ts]
Exports.LastStandChallenge = loadstring("require('lua/client/OptionScreens/LastStandChallenge');return _G['LastStandChallenge']")()

--[lua/client/OptionScreens/LastStandPlayerSelect.d.ts]
Exports.LastStandPlayerSelect = loadstring("require('lua/client/OptionScreens/LastStandPlayerSelect');return _G['LastStandPlayerSelect']")()

--[lua/client/OptionScreens/LoadGameScreen.d.ts]
Exports.LoadGameScreen = loadstring("require('lua/client/OptionScreens/LoadGameScreen');return _G['LoadGameScreen']")()

--[lua/client/OptionScreens/MainOptions.d.ts]
Exports.MainOptions = loadstring("require('lua/client/OptionScreens/MainOptions');return _G['MainOptions']")()

--[lua/client/OptionScreens/MainScreen.d.ts]
Exports.MainScreen = loadstring("require('lua/client/OptionScreens/MainScreen');return _G['MainScreen']")()

--[lua/client/OptionScreens/MapsOrder.d.ts]
Exports.IgnoredMap = loadstring("require('lua/client/OptionScreens/MapsOrder');return _G['IgnoredMap']")()
Exports.MapsOrder = loadstring("require('lua/client/OptionScreens/MapsOrder');return _G['MapsOrder']")()

--[lua/client/OptionScreens/MapSpawnSelect.d.ts]
Exports.MapSpawnSelect = loadstring("require('lua/client/OptionScreens/MapSpawnSelect');return _G['MapSpawnSelect']")()
Exports.MapSpawnSelectImage = loadstring("require('lua/client/OptionScreens/MapSpawnSelect');return _G['MapSpawnSelectImage']")()
Exports.MapSpawnSelectInfoPanel = loadstring("require('lua/client/OptionScreens/MapSpawnSelect');return _G['MapSpawnSelectInfoPanel']")()
Exports.MapSpawnSelectListBox = loadstring("require('lua/client/OptionScreens/MapSpawnSelect');return _G['MapSpawnSelectListBox']")()

--[lua/client/OptionScreens/ModMoreInfo.d.ts]
Exports.ModMoreInfo = loadstring("require('lua/client/OptionScreens/ModMoreInfo');return _G['ModMoreInfo']")()

--[lua/client/OptionScreens/ModSelector/ISModsHelpPanel.d.ts]
Exports.ISModsHelpPanel = loadstring("require('lua/client/OptionScreens/ModSelector/ISModsHelpPanel');return _G['ISModsHelpPanel']")()

--[lua/client/OptionScreens/ModSelector/MapOrderListBox.d.ts]
-- Wrong: class name is undefined
--[lua/client/OptionScreens/ModSelector/MapOrderUI.d.ts]
-- Wrong: class name is undefined
--[lua/client/OptionScreens/ModSelector/MissedModsPanel.d.ts]
-- Wrong: class name is undefined
--[lua/client/OptionScreens/ModSelector/ModInfoPanel.d.ts]
Exports.ModInfoPanel = loadstring("require('lua/client/OptionScreens/ModSelector/ModInfoPanel');return _G['ModInfoPanel']")()

--[lua/client/OptionScreens/ModSelector/ModInfoPanelDesc.d.ts]
-- Wrong: class name is undefined
--[lua/client/OptionScreens/ModSelector/ModInfoPanelInteractionParam.d.ts]
-- Wrong: class name is undefined
--[lua/client/OptionScreens/ModSelector/ModInfoPanelParam.d.ts]
-- Wrong: class name is undefined
--[lua/client/OptionScreens/ModSelector/ModInfoPanelThumbnail.d.ts]
-- Wrong: class name is undefined
--[lua/client/OptionScreens/ModSelector/ModInfoPanelTitle.d.ts]
-- Wrong: class name is undefined
--[lua/client/OptionScreens/ModSelector/ModListBox.d.ts]
-- Wrong: class name is undefined
--[lua/client/OptionScreens/ModSelector/ModListPanel.d.ts]
-- Wrong: class name is undefined
--[lua/client/OptionScreens/ModSelector/ModListPresets.d.ts]
Exports.ModListPresets = loadstring("require('lua/client/OptionScreens/ModSelector/ModListPresets');return _G['ModListPresets']")()

--[lua/client/OptionScreens/ModSelector/ModLoadOrderPanel.d.ts]
-- Wrong: class name is undefined
--[lua/client/OptionScreens/ModSelector/ModOrderListBox.d.ts]
-- Wrong: class name is undefined
--[lua/client/OptionScreens/ModSelector/ModSelector.d.ts]
Exports.ModSelector = loadstring("require('lua/client/OptionScreens/ModSelector/ModSelector');return _G['ModSelector']")()

--[lua/client/OptionScreens/ModSelector/ModSelectorModel.d.ts]

--[lua/client/OptionScreens/MultiplayerScreen.d.ts]
Exports.MultiplayerScreen = loadstring("require('lua/client/OptionScreens/MultiplayerScreen');return _G['MultiplayerScreen']")()

--[lua/client/OptionScreens/NewGameScreen.d.ts]
Exports.NewGameScreen = loadstring("require('lua/client/OptionScreens/NewGameScreen');return _G['NewGameScreen']")()

--[lua/client/OptionScreens/PublicServerList.d.ts]
Exports.PublicServerList = loadstring("require('lua/client/OptionScreens/PublicServerList');return _G['PublicServerList']")()

--[lua/client/OptionScreens/SandboxOptions.d.ts]
Exports.SandboxOptionsScreen = loadstring("require('lua/client/OptionScreens/SandboxOptions');return _G['SandboxOptionsScreen']")()

--[lua/client/OptionScreens/ServerConnectPopup.d.ts]
Exports.ServerConnectPopup = loadstring("require('lua/client/OptionScreens/ServerConnectPopup');return _G['ServerConnectPopup']")()

--[lua/client/OptionScreens/ServerList.d.ts]
Exports.ServerList = loadstring("require('lua/client/OptionScreens/ServerList');return _G['ServerList']")()

--[lua/client/OptionScreens/ServerSettingsScreen.d.ts]
Exports.BaseServerSettingsPanel = loadstring("require('lua/client/OptionScreens/ServerSettingsScreen');return _G['BaseServerSettingsPanel']")()
Exports.ServerSettingsScreen = loadstring("require('lua/client/OptionScreens/ServerSettingsScreen');return _G['ServerSettingsScreen']")()
Exports.SpawnRegionsNameFilePanel = loadstring("require('lua/client/OptionScreens/ServerSettingsScreen');return _G['SpawnRegionsNameFilePanel']")()
-- Wrong: class name is undefinedExports.DefaultServerSettings = loadstring("require('lua/client/OptionScreens/ServerSettingsScreen');return _G['DefaultServerSettings']")()

--[lua/client/OptionScreens/ServerToolbox.d.ts]
Exports.ServerToolbox = loadstring("require('lua/client/OptionScreens/ServerToolbox');return _G['ServerToolbox']")()

--[lua/client/OptionScreens/ServerWorkshopItemScreen.d.ts]
Exports.ServerWorkshopItemScreen = loadstring("require('lua/client/OptionScreens/ServerWorkshopItemScreen');return _G['ServerWorkshopItemScreen']")()

--[lua/client/OptionScreens/WorkshopSubmitScreen.d.ts]
Exports.WorkshopSubmitScreen = loadstring("require('lua/client/OptionScreens/WorkshopSubmitScreen');return _G['WorkshopSubmitScreen']")()

--[lua/client/OptionScreens/WorldSelect.d.ts]
Exports.WorldSelect = loadstring("require('lua/client/OptionScreens/WorldSelect');return _G['WorldSelect']")()

--[lua/client/PZAPI/ModOptions.d.ts]

--[lua/client/RadioCom/ISRadioAction.d.ts]
Exports.ISRadioAction = loadstring("require('lua/client/RadioCom/ISRadioAction');return _G['ISRadioAction']")()

--[lua/client/RadioCom/ISRadioInteractions.d.ts]
Exports.ISRadioInteractions = loadstring("require('lua/client/RadioCom/ISRadioInteractions');return _G['ISRadioInteractions']")()

--[lua/client/RadioCom/ISRadioWindow.d.ts]
Exports.ISRadioWindow = loadstring("require('lua/client/RadioCom/ISRadioWindow');return _G['ISRadioWindow']")()

--[lua/client/RadioCom/ISUIRadio/ISBatteryStatusDisplay.d.ts]
Exports.ISBatteryStatusDisplay = loadstring("require('lua/client/RadioCom/ISUIRadio/ISBatteryStatusDisplay');return _G['ISBatteryStatusDisplay']")()

--[lua/client/RadioCom/ISUIRadio/ISItemDropBox.d.ts]
Exports.ISItemDropBox = loadstring("require('lua/client/RadioCom/ISUIRadio/ISItemDropBox');return _G['ISItemDropBox']")()

--[lua/client/RadioCom/ISUIRadio/ISLedLight.d.ts]
Exports.ISLedLight = loadstring("require('lua/client/RadioCom/ISUIRadio/ISLedLight');return _G['ISLedLight']")()

--[lua/client/RadioCom/ISUIRadio/ISSineWaveDisplay.d.ts]
Exports.ISSineWaveDisplay = loadstring("require('lua/client/RadioCom/ISUIRadio/ISSineWaveDisplay');return _G['ISSineWaveDisplay']")()

--[lua/client/RadioCom/ISUIRadio/ISSliderPanel.d.ts]
Exports.ISSliderPanel = loadstring("require('lua/client/RadioCom/ISUIRadio/ISSliderPanel');return _G['ISSliderPanel']")()

--[lua/client/RadioCom/ISUIRadio/ISSpeakerButton.d.ts]
Exports.ISSpeakerButton = loadstring("require('lua/client/RadioCom/ISUIRadio/ISSpeakerButton');return _G['ISSpeakerButton']")()

--[lua/client/RadioCom/ISUIRadio/ISVolumeBar.d.ts]
Exports.ISVolumeBar = loadstring("require('lua/client/RadioCom/ISUIRadio/ISVolumeBar');return _G['ISVolumeBar']")()

--[lua/client/RadioCom/RadioWindowModules/RWM.d.ts]
Exports.RWM = loadstring("require('lua/client/RadioCom/RadioWindowModules/RWM');return _G['RWM']")()

--[lua/client/RadioCom/RadioWindowModules/RWMChannel.d.ts]
Exports.RWMChannel = loadstring("require('lua/client/RadioCom/RadioWindowModules/RWMChannel');return _G['RWMChannel']")()

--[lua/client/RadioCom/RadioWindowModules/RWMChannelTV.d.ts]
Exports.RWMChannelTV = loadstring("require('lua/client/RadioCom/RadioWindowModules/RWMChannelTV');return _G['RWMChannelTV']")()

--[lua/client/RadioCom/RadioWindowModules/RWMElement.d.ts]
Exports.RWMElement = loadstring("require('lua/client/RadioCom/RadioWindowModules/RWMElement');return _G['RWMElement']")()

--[lua/client/RadioCom/RadioWindowModules/RWMGeneral.d.ts]
Exports.RWMGeneral = loadstring("require('lua/client/RadioCom/RadioWindowModules/RWMGeneral');return _G['RWMGeneral']")()

--[lua/client/RadioCom/RadioWindowModules/RWMGridPower.d.ts]
Exports.RWMGridPower = loadstring("require('lua/client/RadioCom/RadioWindowModules/RWMGridPower');return _G['RWMGridPower']")()

--[lua/client/RadioCom/RadioWindowModules/RWMMedia.d.ts]
Exports.RWMMedia = loadstring("require('lua/client/RadioCom/RadioWindowModules/RWMMedia');return _G['RWMMedia']")()

--[lua/client/RadioCom/RadioWindowModules/RWMMicrophone.d.ts]
Exports.RWMMicrophone = loadstring("require('lua/client/RadioCom/RadioWindowModules/RWMMicrophone');return _G['RWMMicrophone']")()

--[lua/client/RadioCom/RadioWindowModules/RWMPanel.d.ts]
Exports.RWMPanel = loadstring("require('lua/client/RadioCom/RadioWindowModules/RWMPanel');return _G['RWMPanel']")()

--[lua/client/RadioCom/RadioWindowModules/RWMPower.d.ts]
Exports.RWMPower = loadstring("require('lua/client/RadioCom/RadioWindowModules/RWMPower');return _G['RWMPower']")()

--[lua/client/RadioCom/RadioWindowModules/RWMSignal.d.ts]
Exports.RWMSignal = loadstring("require('lua/client/RadioCom/RadioWindowModules/RWMSignal');return _G['RWMSignal']")()

--[lua/client/RadioCom/RadioWindowModules/RWMSubEditPreset.d.ts]
Exports.RWMSubEditPreset = loadstring("require('lua/client/RadioCom/RadioWindowModules/RWMSubEditPreset');return _G['RWMSubEditPreset']")()

--[lua/client/RadioCom/RadioWindowModules/RWMTestPane.d.ts]
Exports.RWMTestPane = loadstring("require('lua/client/RadioCom/RadioWindowModules/RWMTestPane');return _G['RWMTestPane']")()

--[lua/client/RadioCom/RadioWindowModules/RWMVolume.d.ts]
Exports.RWMVolume = loadstring("require('lua/client/RadioCom/RadioWindowModules/RWMVolume');return _G['RWMVolume']")()

--[lua/client/RadioCom/StoryLineSounds/ISSLEvent.d.ts]
Exports.ISSLEvent = loadstring("require('lua/client/RadioCom/StoryLineSounds/ISSLEvent');return _G['ISSLEvent']")()

--[lua/client/RadioCom/StoryLineSounds/ISSLFrame.d.ts]
Exports.ISSLFrame = loadstring("require('lua/client/RadioCom/StoryLineSounds/ISSLFrame');return _G['ISSLFrame']")()

--[lua/client/RadioCom/StoryLineSounds/ISSLManager.d.ts]
Exports.ISSLManager = loadstring("require('lua/client/RadioCom/StoryLineSounds/ISSLManager');return _G['ISSLManager']")()

--[lua/client/RadioCom/StoryLineSounds/ISSLSounds.d.ts]
Exports.ISSLSounds = loadstring("require('lua/client/RadioCom/StoryLineSounds/ISSLSounds');return _G['ISSLSounds']")()

--[lua/client/RadioCom/StoryLineSounds/StorySoundDebug.d.ts]
Exports.ISStorySoundsDebug = loadstring("require('lua/client/RadioCom/StoryLineSounds/StorySoundDebug');return _G['ISStorySoundsDebug']")()

--[lua/client/RainBarrel/CRainBarrelGlobalObject.d.ts]
Exports.CRainBarrelGlobalObject = loadstring("require('lua/client/RainBarrel/CRainBarrelGlobalObject');return _G['CRainBarrelGlobalObject']")()

--[lua/client/RainBarrel/CRainBarrelSystem.d.ts]
Exports.CRainBarrelSystem = loadstring("require('lua/client/RainBarrel/CRainBarrelSystem');return _G['CRainBarrelSystem']")()

--[lua/client/RecordedMedia/ISMediaInfo.d.ts]
Exports.ISMediaInfo = loadstring("require('lua/client/RecordedMedia/ISMediaInfo');return _G['ISMediaInfo']")()

--[lua/client/Seasons/ISUI/ISWeather.d.ts]
Exports.ISWeather = loadstring("require('lua/client/Seasons/ISUI/ISWeather');return _G['ISWeather']")()

--[lua/client/SurvivalGuide/ISTutorialPageInfo.d.ts]
Exports.ISTutorialPageInfo = loadstring("require('lua/client/SurvivalGuide/ISTutorialPageInfo');return _G['ISTutorialPageInfo']")()
Exports.ISTutorialSetInfo = loadstring("require('lua/client/SurvivalGuide/ISTutorialPageInfo');return _G['ISTutorialSetInfo']")()

--[lua/client/SurvivalGuide/ISTutorialPanel.d.ts]
Exports.ISSurvivalGuideListBox = loadstring("require('lua/client/SurvivalGuide/ISTutorialPanel');return _G['ISSurvivalGuideListBox']")()
Exports.ISSurvivalGuideRichText = loadstring("require('lua/client/SurvivalGuide/ISTutorialPanel');return _G['ISSurvivalGuideRichText']")()
Exports.ISSurvivalGuideRightPanel = loadstring("require('lua/client/SurvivalGuide/ISTutorialPanel');return _G['ISSurvivalGuideRightPanel']")()
Exports.ISTutorialPanel = loadstring("require('lua/client/SurvivalGuide/ISTutorialPanel');return _G['ISTutorialPanel']")()

--[lua/client/SurvivalGuide/SurvivalGuideEntries.d.ts]
Exports.SurvivalGuideEntries = loadstring("require('lua/client/SurvivalGuide/SurvivalGuideEntries');return _G['SurvivalGuideEntries']")()

--[lua/client/SurvivalGuide/SurvivalGuideManager.d.ts]
Exports.SurvivalGuideManager = loadstring("require('lua/client/SurvivalGuide/SurvivalGuideManager');return _G['SurvivalGuideManager']")()

--[lua/client/Tests/MapObjectTests.d.ts]

--[lua/client/Tests/RecipeTests.d.ts]

--[lua/client/Tests/RecipeUtils.d.ts]
Exports.RecipeUtils = loadstring("require('lua/client/Tests/RecipeUtils');return _G['RecipeUtils']")()

--[lua/client/Tests/TimedActionsTests.d.ts]
Exports.TimedActionTests = loadstring("require('lua/client/Tests/TimedActionsTests');return _G['TimedActionTests']")()

--[lua/client/TimedActions/Animal/ISCheckAnimalInsideTrailer.d.ts]
Exports.ISCheckAnimalInsideTrailer = loadstring("require('lua/client/TimedActions/Animal/ISCheckAnimalInsideTrailer');return _G['ISCheckAnimalInsideTrailer']")()

--[lua/client/TimedActions/Animal/ISGetHutchInfo.d.ts]
Exports.ISGetHutchInfo = loadstring("require('lua/client/TimedActions/Animal/ISGetHutchInfo');return _G['ISGetHutchInfo']")()

--[lua/client/TimedActions/Animal/ISInspectAnimalTrackAction.d.ts]
Exports.ISInspectAnimalTrackAction = loadstring("require('lua/client/TimedActions/Animal/ISInspectAnimalTrackAction');return _G['ISInspectAnimalTrackAction']")()

--[lua/client/TimedActions/ISBBQInfoAction.d.ts]
Exports.ISBBQInfoAction = loadstring("require('lua/client/TimedActions/ISBBQInfoAction');return _G['ISBBQInfoAction']")()

--[lua/client/TimedActions/ISCampingInfoAction.d.ts]
Exports.ISCampingInfoAction = loadstring("require('lua/client/TimedActions/ISCampingInfoAction');return _G['ISCampingInfoAction']")()

--[lua/client/TimedActions/ISClimbOverFence.d.ts]
Exports.ISClimbOverFence = loadstring("require('lua/client/TimedActions/ISClimbOverFence');return _G['ISClimbOverFence']")()

--[lua/client/TimedActions/ISClimbSheetRopeAction.d.ts]
Exports.ISClimbSheetRopeAction = loadstring("require('lua/client/TimedActions/ISClimbSheetRopeAction');return _G['ISClimbSheetRopeAction']")()

--[lua/client/TimedActions/ISClimbThroughWindow.d.ts]
Exports.ISClimbThroughWindow = loadstring("require('lua/client/TimedActions/ISClimbThroughWindow');return _G['ISClimbThroughWindow']")()

--[lua/client/TimedActions/ISClothingExtraAction.d.ts]
Exports.ISClothingExtraAction = loadstring("require('lua/client/TimedActions/ISClothingExtraAction');return _G['ISClothingExtraAction']")()

--[lua/client/TimedActions/ISDetachItemHotbar.d.ts]
Exports.ISDetachItemHotbar = loadstring("require('lua/client/TimedActions/ISDetachItemHotbar');return _G['ISDetachItemHotbar']")()

--[lua/client/TimedActions/ISDigStairsAction.d.ts]
Exports.ISDigStairsAction = loadstring("require('lua/client/TimedActions/ISDigStairsAction');return _G['ISDigStairsAction']")()

--[lua/client/TimedActions/ISFireplaceInfoAction.d.ts]
Exports.ISFireplaceInfoAction = loadstring("require('lua/client/TimedActions/ISFireplaceInfoAction');return _G['ISFireplaceInfoAction']")()

--[lua/client/TimedActions/ISGeneratorInfoAction.d.ts]
Exports.ISGeneratorInfoAction = loadstring("require('lua/client/TimedActions/ISGeneratorInfoAction');return _G['ISGeneratorInfoAction']")()

--[lua/client/TimedActions/ISGrabItemAction.d.ts]
Exports.ISGrabItemAction = loadstring("require('lua/client/TimedActions/ISGrabItemAction');return _G['ISGrabItemAction']")()

--[lua/client/TimedActions/ISInventoryTransferAction.d.ts]
Exports.ISInventoryTransferAction = loadstring("require('lua/client/TimedActions/ISInventoryTransferAction');return _G['ISInventoryTransferAction']")()

--[lua/client/TimedActions/ISMedicalCheckAction.d.ts]
Exports.ISMedicalCheckAction = loadstring("require('lua/client/TimedActions/ISMedicalCheckAction');return _G['ISMedicalCheckAction']")()

--[lua/client/TimedActions/ISOpenContainerTimedAction.d.ts]
Exports.ISOpenContainerTimedAction = loadstring("require('lua/client/TimedActions/ISOpenContainerTimedAction');return _G['ISOpenContainerTimedAction']")()

--[lua/client/TimedActions/ISOvenUITimedAction.d.ts]
Exports.ISOvenUITimedAction = loadstring("require('lua/client/TimedActions/ISOvenUITimedAction');return _G['ISOvenUITimedAction']")()

--[lua/client/TimedActions/ISPickAxeGroundCoverItem.d.ts]
Exports.ISPickAxeGroundCoverItem = loadstring("require('lua/client/TimedActions/ISPickAxeGroundCoverItem');return _G['ISPickAxeGroundCoverItem']")()

--[lua/client/TimedActions/ISQueueActionsAction.d.ts]
Exports.ISQueueActionsAction = loadstring("require('lua/client/TimedActions/ISQueueActionsAction');return _G['ISQueueActionsAction']")()

--[lua/client/TimedActions/ISReadWorldMap.d.ts]
Exports.ISReadWorldMap = loadstring("require('lua/client/TimedActions/ISReadWorldMap');return _G['ISReadWorldMap']")()

--[lua/client/TimedActions/ISTimedActionQueue.d.ts]
Exports.ISTimedActionQueue = loadstring("require('lua/client/TimedActions/ISTimedActionQueue');return _G['ISTimedActionQueue']")()

--[lua/client/TimedActions/WalkToTimedAction.d.ts]
Exports.ISWalkToTimedAction = loadstring("require('lua/client/TimedActions/WalkToTimedAction');return _G['ISWalkToTimedAction']")()

--[lua/client/TimedActions/WalkToTimedActionF.d.ts]
Exports.ISWalkToTimedActionF = loadstring("require('lua/client/TimedActions/WalkToTimedActionF');return _G['ISWalkToTimedActionF']")()

--[lua/client/Traps/CTrapGlobalObject.d.ts]
Exports.CTrapGlobalObject = loadstring("require('lua/client/Traps/CTrapGlobalObject');return _G['CTrapGlobalObject']")()

--[lua/client/Traps/CTrapSystem.d.ts]
Exports.CTrapSystem = loadstring("require('lua/client/Traps/CTrapSystem');return _G['CTrapSystem']")()

--[lua/client/Tutorial/ISUI/TutorialFocus.d.ts]
Exports.TutorialFocus = loadstring("require('lua/client/Tutorial/ISUI/TutorialFocus');return _G['TutorialFocus']")()

--[lua/client/Tutorial/ISUI/TutorialMessage.d.ts]
Exports.TutorialMessage = loadstring("require('lua/client/Tutorial/ISUI/TutorialMessage');return _G['TutorialMessage']")()

--[lua/client/Tutorial/Steps.d.ts]
Exports.BandageStep = loadstring("require('lua/client/Tutorial/Steps');return _G['BandageStep']")()
Exports.FightStep = loadstring("require('lua/client/Tutorial/Steps');return _G['FightStep']")()
Exports.InventoryLootingStep = loadstring("require('lua/client/Tutorial/Steps');return _G['InventoryLootingStep']")()
Exports.InventoryUseStep = loadstring("require('lua/client/Tutorial/Steps');return _G['InventoryUseStep']")()
Exports.ShotgunStep = loadstring("require('lua/client/Tutorial/Steps');return _G['ShotgunStep']")()
Exports.SneakStep = loadstring("require('lua/client/Tutorial/Steps');return _G['SneakStep']")()
Exports.WalkToAdjacent = loadstring("require('lua/client/Tutorial/Steps');return _G['WalkToAdjacent']")()
Exports.WelcomeStep = loadstring("require('lua/client/Tutorial/Steps');return _G['WelcomeStep']")()
Exports.TutorialTests = loadstring("require('lua/client/Tutorial/Steps');return _G['TutorialTests']")()

--[lua/client/Tutorial/Tutorial1.d.ts]
Exports.Tutorial1 = loadstring("require('lua/client/Tutorial/Tutorial1');return _G['Tutorial1']")()

--[lua/client/Tutorial/TutorialSetup.d.ts]
Exports.TutorialData = loadstring("require('lua/client/Tutorial/TutorialSetup');return _G['TutorialData']")()

--[lua/client/Tutorial/TutorialStep.d.ts]
Exports.TutorialStep = loadstring("require('lua/client/Tutorial/TutorialStep');return _G['TutorialStep']")()

--[lua/client/Vehicles/ISUI/EditVehicleState.d.ts]
Exports.EditVehicleState_EditPhysics_PhysicsMeshPanel = loadstring("require('lua/client/Vehicles/ISUI/EditVehicleState');return _G['EditVehicleState_EditPhysics_PhysicsMeshPanel']")()
Exports.EditVehicleUI = loadstring("require('lua/client/Vehicles/ISUI/EditVehicleState');return _G['EditVehicleUI']")()
Exports.EditVehicleUI_EditArea = loadstring("require('lua/client/Vehicles/ISUI/EditVehicleState');return _G['EditVehicleUI_EditArea']")()
Exports.EditVehicleUI_EditAttachment = loadstring("require('lua/client/Vehicles/ISUI/EditVehicleState');return _G['EditVehicleUI_EditAttachment']")()
Exports.EditVehicleUI_EditChassis = loadstring("require('lua/client/Vehicles/ISUI/EditVehicleState');return _G['EditVehicleUI_EditChassis']")()
Exports.EditVehicleUI_EditPanel = loadstring("require('lua/client/Vehicles/ISUI/EditVehicleState');return _G['EditVehicleUI_EditPanel']")()
Exports.EditVehicleUI_EditPart = loadstring("require('lua/client/Vehicles/ISUI/EditVehicleState');return _G['EditVehicleUI_EditPart']")()
Exports.EditVehicleUI_EditPassenger = loadstring("require('lua/client/Vehicles/ISUI/EditVehicleState');return _G['EditVehicleUI_EditPassenger']")()
Exports.EditVehicleUI_EditPhysics = loadstring("require('lua/client/Vehicles/ISUI/EditVehicleState');return _G['EditVehicleUI_EditPhysics']")()
Exports.EditVehicleUI_EditWheel = loadstring("require('lua/client/Vehicles/ISUI/EditVehicleState');return _G['EditVehicleUI_EditWheel']")()
Exports.EditVehicleUI_ListBox = loadstring("require('lua/client/Vehicles/ISUI/EditVehicleState');return _G['EditVehicleUI_ListBox']")()
Exports.EditVehicleUI_Scene = loadstring("require('lua/client/Vehicles/ISUI/EditVehicleState');return _G['EditVehicleUI_Scene']")()
Exports.EditVehicleUI_SwitchView = loadstring("require('lua/client/Vehicles/ISUI/EditVehicleState');return _G['EditVehicleUI_SwitchView']")()

--[lua/client/Vehicles/ISUI/ISCarMechanicsOverlay.d.ts]
Exports.ISCarMechanicsOverlay = loadstring("require('lua/client/Vehicles/ISUI/ISCarMechanicsOverlay');return _G['ISCarMechanicsOverlay']")()

--[lua/client/Vehicles/ISUI/ISLightbarUI.d.ts]
Exports.ISLightbarUI = loadstring("require('lua/client/Vehicles/ISUI/ISLightbarUI');return _G['ISLightbarUI']")()

--[lua/client/Vehicles/ISUI/ISUI3DScene.d.ts]
Exports.ISUI3DScene = loadstring("require('lua/client/Vehicles/ISUI/ISUI3DScene');return _G['ISUI3DScene']")()

--[lua/client/Vehicles/ISUI/ISUIVehicleModel.d.ts]
Exports.ISUIVehicleModel = loadstring("require('lua/client/Vehicles/ISUI/ISUIVehicleModel');return _G['ISUIVehicleModel']")()

--[lua/client/Vehicles/ISUI/ISVehicleACUI.d.ts]
Exports.ISVehicleACUI = loadstring("require('lua/client/Vehicles/ISUI/ISVehicleACUI');return _G['ISVehicleACUI']")()

--[lua/client/Vehicles/ISUI/ISVehicleAngles.d.ts]
Exports.ISVehicleAngles = loadstring("require('lua/client/Vehicles/ISUI/ISVehicleAngles');return _G['ISVehicleAngles']")()

--[lua/client/Vehicles/ISUI/ISVehicleBloodUI.d.ts]
Exports.ISVehicleBloodUI = loadstring("require('lua/client/Vehicles/ISUI/ISVehicleBloodUI');return _G['ISVehicleBloodUI']")()

--[lua/client/Vehicles/ISUI/ISVehicleColor.d.ts]
Exports.ISVehicleHSV = loadstring("require('lua/client/Vehicles/ISUI/ISVehicleColor');return _G['ISVehicleHSV']")()

--[lua/client/Vehicles/ISUI/ISVehicleDashboard.d.ts]
Exports.ISVehicleDashboard = loadstring("require('lua/client/Vehicles/ISUI/ISVehicleDashboard');return _G['ISVehicleDashboard']")()

--[lua/client/Vehicles/ISUI/ISVehicleGauge.d.ts]
Exports.ISVehicleGauge = loadstring("require('lua/client/Vehicles/ISUI/ISVehicleGauge');return _G['ISVehicleGauge']")()

--[lua/client/Vehicles/ISUI/ISVehicleMechanics.d.ts]
Exports.ISVehicleMechanics = loadstring("require('lua/client/Vehicles/ISUI/ISVehicleMechanics');return _G['ISVehicleMechanics']")()

--[lua/client/Vehicles/ISUI/ISVehicleMenu.d.ts]
Exports.ISVehicleMenu = loadstring("require('lua/client/Vehicles/ISUI/ISVehicleMenu');return _G['ISVehicleMenu']")()

--[lua/client/Vehicles/ISUI/ISVehiclePartMenu.d.ts]
Exports.ISVehiclePartMenu = loadstring("require('lua/client/Vehicles/ISUI/ISVehiclePartMenu');return _G['ISVehiclePartMenu']")()

--[lua/client/Vehicles/ISUI/ISVehicleRegulator.d.ts]
Exports.ISVehicleRegulator = loadstring("require('lua/client/Vehicles/ISUI/ISVehicleRegulator');return _G['ISVehicleRegulator']")()

--[lua/client/Vehicles/ISUI/ISVehicleRoadtripDebug.d.ts]
Exports.ISVehicleRoadtripDebug = loadstring("require('lua/client/Vehicles/ISUI/ISVehicleRoadtripDebug');return _G['ISVehicleRoadtripDebug']")()

--[lua/client/Vehicles/ISUI/ISVehicleSeatUI.d.ts]
Exports.ISVehicleSeatUI = loadstring("require('lua/client/Vehicles/ISUI/ISVehicleSeatUI');return _G['ISVehicleSeatUI']")()
Exports.ImageScale = loadstring("require('lua/client/Vehicles/ISUI/ISVehicleSeatUI');return _G['ImageScale']")()
Exports.SeatOffsetX = loadstring("require('lua/client/Vehicles/ISUI/ISVehicleSeatUI');return _G['SeatOffsetX']")()
Exports.SeatOffsetY = loadstring("require('lua/client/Vehicles/ISUI/ISVehicleSeatUI');return _G['SeatOffsetY']")()

--[lua/client/Vehicles/ISVehicleTrailerUtils.d.ts]
Exports.ISVehicleTrailerUtils = loadstring("require('lua/client/Vehicles/ISVehicleTrailerUtils');return _G['ISVehicleTrailerUtils']")()

--[lua/client/Vehicles/TimedActions/ISAttachTrailerToVehicle.d.ts]
Exports.ISAttachTrailerToVehicle = loadstring("require('lua/client/Vehicles/TimedActions/ISAttachTrailerToVehicle');return _G['ISAttachTrailerToVehicle']")()

--[lua/client/Vehicles/TimedActions/ISConfigHeadlight.d.ts]
Exports.ISConfigHeadlight = loadstring("require('lua/client/Vehicles/TimedActions/ISConfigHeadlight');return _G['ISConfigHeadlight']")()

--[lua/client/Vehicles/TimedActions/ISDetachTrailerFromVehicle.d.ts]
Exports.ISDetachTrailerFromVehicle = loadstring("require('lua/client/Vehicles/TimedActions/ISDetachTrailerFromVehicle');return _G['ISDetachTrailerFromVehicle']")()

--[lua/client/Vehicles/TimedActions/ISEnterVehicle.d.ts]
Exports.ISEnterVehicle = loadstring("require('lua/client/Vehicles/TimedActions/ISEnterVehicle');return _G['ISEnterVehicle']")()

--[lua/client/Vehicles/TimedActions/ISExitVehicle.d.ts]
Exports.ISExitVehicle = loadstring("require('lua/client/Vehicles/TimedActions/ISExitVehicle');return _G['ISExitVehicle']")()

--[lua/client/Vehicles/TimedActions/ISHorn.d.ts]
Exports.ISHorn = loadstring("require('lua/client/Vehicles/TimedActions/ISHorn');return _G['ISHorn']")()

--[lua/client/Vehicles/TimedActions/ISLightbarUITimedAction.d.ts]
Exports.ISLightbarUITimedAction = loadstring("require('lua/client/Vehicles/TimedActions/ISLightbarUITimedAction');return _G['ISLightbarUITimedAction']")()

--[lua/client/Vehicles/TimedActions/ISOpenMechanicsUIAction.d.ts]
Exports.ISOpenMechanicsUIAction = loadstring("require('lua/client/Vehicles/TimedActions/ISOpenMechanicsUIAction');return _G['ISOpenMechanicsUIAction']")()

--[lua/client/Vehicles/TimedActions/ISPathFindAction.d.ts]
Exports.ISPathFindAction = loadstring("require('lua/client/Vehicles/TimedActions/ISPathFindAction');return _G['ISPathFindAction']")()

--[lua/client/Vehicles/TimedActions/ISStopVehicle.d.ts]
Exports.ISStopVehicle = loadstring("require('lua/client/Vehicles/TimedActions/ISStopVehicle');return _G['ISStopVehicle']")()

--[lua/client/Vehicles/TimedActions/ISSwitchVehicleSeat.d.ts]
Exports.ISSwitchVehicleSeat = loadstring("require('lua/client/Vehicles/TimedActions/ISSwitchVehicleSeat');return _G['ISSwitchVehicleSeat']")()

--[lua/client/XpSystem/ISUI/ISCharacterInfo.d.ts]
Exports.ISCharacterInfo = loadstring("require('lua/client/XpSystem/ISUI/ISCharacterInfo');return _G['ISCharacterInfo']")()

--[lua/client/XpSystem/ISUI/ISCharacterInfoWindow.d.ts]
Exports.ISCharacterInfoWindow = loadstring("require('lua/client/XpSystem/ISUI/ISCharacterInfoWindow');return _G['ISCharacterInfoWindow']")()

--[lua/client/XpSystem/ISUI/ISCharacterProtection.d.ts]
Exports.ISCharacterProtection = loadstring("require('lua/client/XpSystem/ISUI/ISCharacterProtection');return _G['ISCharacterProtection']")()

--[lua/client/XpSystem/ISUI/ISCharacterScreen.d.ts]
Exports.ISCharacterScreen = loadstring("require('lua/client/XpSystem/ISUI/ISCharacterScreen');return _G['ISCharacterScreen']")()
Exports.ISCharacterScreenAvatar = loadstring("require('lua/client/XpSystem/ISUI/ISCharacterScreen');return _G['ISCharacterScreenAvatar']")()

--[lua/client/XpSystem/ISUI/ISClothingInsPanel.d.ts]
Exports.ISClothingInsPanel = loadstring("require('lua/client/XpSystem/ISUI/ISClothingInsPanel');return _G['ISClothingInsPanel']")()

--[lua/client/XpSystem/ISUI/ISHealthPanel.d.ts]
Exports.HealthPanelAction = loadstring("require('lua/client/XpSystem/ISUI/ISHealthPanel');return _G['HealthPanelAction']")()
Exports.ISHealthBodyPartListBox = loadstring("require('lua/client/XpSystem/ISUI/ISHealthPanel');return _G['ISHealthBodyPartListBox']")()
Exports.ISHealthBodyPartPanel = loadstring("require('lua/client/XpSystem/ISUI/ISHealthPanel');return _G['ISHealthBodyPartPanel']")()
Exports.ISHealthPanel = loadstring("require('lua/client/XpSystem/ISUI/ISHealthPanel');return _G['ISHealthPanel']")()
Exports.ISNewHealthPanel = loadstring("require('lua/client/XpSystem/ISUI/ISHealthPanel');return _G['ISNewHealthPanel']")()

--[lua/client/XpSystem/ISUI/ISSkillProgressBar.d.ts]
Exports.ISSkillProgressBar = loadstring("require('lua/client/XpSystem/ISUI/ISSkillProgressBar');return _G['ISSkillProgressBar']")()

-- [LUA-PARTIAL:STOP]
return Exports
