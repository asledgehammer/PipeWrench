local Exports = {}
-- [LUA-PARTIAL:START]

--[lua/client/Blacksmith/ISUI/ISBlacksmithMenu.d.ts]
Exports.ISBlacksmithMenu = loadstring("require('lua/client/Blacksmith/ISUI/ISBlacksmithMenu');return _G['ISBlacksmithMenu']")()

--[lua/client/Blacksmith/ISUI/ISFurnaceInfoWindow.d.ts]
Exports.ISFurnaceInfoWindow = loadstring("require('lua/client/Blacksmith/ISUI/ISFurnaceInfoWindow');return _G['ISFurnaceInfoWindow']")()

--[lua/client/Blacksmith/TimedActions/ISAddCoalInFurnace.d.ts]
Exports.ISAddCoalInFurnace = loadstring("require('lua/client/Blacksmith/TimedActions/ISAddCoalInFurnace');return _G['ISAddCoalInFurnace']")()

--[lua/client/Blacksmith/TimedActions/ISAddLogsInDrum.d.ts]
Exports.ISAddLogsInDrum = loadstring("require('lua/client/Blacksmith/TimedActions/ISAddLogsInDrum');return _G['ISAddLogsInDrum']")()

--[lua/client/Blacksmith/TimedActions/ISDrumLightFromKindle.d.ts]
Exports.ISDrumLightFromKindle = loadstring("require('lua/client/Blacksmith/TimedActions/ISDrumLightFromKindle');return _G['ISDrumLightFromKindle']")()

--[lua/client/Blacksmith/TimedActions/ISDrumLightFromLiterature.d.ts]
Exports.ISDrumLightFromLiterature = loadstring("require('lua/client/Blacksmith/TimedActions/ISDrumLightFromLiterature');return _G['ISDrumLightFromLiterature']")()

--[lua/client/Blacksmith/TimedActions/ISDrumLightFromPetrol.d.ts]
Exports.ISDrumLightFromPetrol = loadstring("require('lua/client/Blacksmith/TimedActions/ISDrumLightFromPetrol');return _G['ISDrumLightFromPetrol']")()

--[lua/client/Blacksmith/TimedActions/ISEmptyDrum.d.ts]
Exports.ISEmptyDrum = loadstring("require('lua/client/Blacksmith/TimedActions/ISEmptyDrum');return _G['ISEmptyDrum']")()

--[lua/client/Blacksmith/TimedActions/ISFurnaceInfoAction.d.ts]
Exports.ISFurnaceInfoAction = loadstring("require('lua/client/Blacksmith/TimedActions/ISFurnaceInfoAction');return _G['ISFurnaceInfoAction']")()

--[lua/client/Blacksmith/TimedActions/ISFurnaceLightFromKindle.d.ts]
Exports.ISFurnaceLightFromKindle = loadstring("require('lua/client/Blacksmith/TimedActions/ISFurnaceLightFromKindle');return _G['ISFurnaceLightFromKindle']")()

--[lua/client/Blacksmith/TimedActions/ISFurnaceLightFromLiterature.d.ts]
Exports.ISFurnaceLightFromLiterature = loadstring("require('lua/client/Blacksmith/TimedActions/ISFurnaceLightFromLiterature');return _G['ISFurnaceLightFromLiterature']")()

--[lua/client/Blacksmith/TimedActions/ISFurnaceLightFromPetrol.d.ts]
Exports.ISFurnaceLightFromPetrol = loadstring("require('lua/client/Blacksmith/TimedActions/ISFurnaceLightFromPetrol');return _G['ISFurnaceLightFromPetrol']")()

--[lua/client/Blacksmith/TimedActions/ISPutOutFireDrum.d.ts]
Exports.ISPutOutFireDrum = loadstring("require('lua/client/Blacksmith/TimedActions/ISPutOutFireDrum');return _G['ISPutOutFireDrum']")()

--[lua/client/Blacksmith/TimedActions/ISRemoveCharcoal.d.ts]
Exports.ISRemoveCharcoal = loadstring("require('lua/client/Blacksmith/TimedActions/ISRemoveCharcoal');return _G['ISRemoveCharcoal']")()

--[lua/client/Blacksmith/TimedActions/ISRemoveDrum.d.ts]
Exports.ISRemoveDrum = loadstring("require('lua/client/Blacksmith/TimedActions/ISRemoveDrum');return _G['ISRemoveDrum']")()

--[lua/client/Blacksmith/TimedActions/ISStopFurnaceFire.d.ts]
Exports.ISStopFurnaceFire = loadstring("require('lua/client/Blacksmith/TimedActions/ISStopFurnaceFire');return _G['ISStopFurnaceFire']")()

--[lua/client/Blacksmith/TimedActions/ISUseBellows.d.ts]
Exports.ISUseBellows = loadstring("require('lua/client/Blacksmith/TimedActions/ISUseBellows');return _G['ISUseBellows']")()

--[lua/client/BuildingObjects/ISUI/ISBuildMenu.d.ts]
Exports.ISBuildMenu = loadstring("require('lua/client/BuildingObjects/ISUI/ISBuildMenu');return _G['ISBuildMenu']")()

--[lua/client/BuildingObjects/ISUI/ISInventoryBuildMenu.d.ts]
Exports.ISInventoryBuildMenu = loadstring("require('lua/client/BuildingObjects/ISUI/ISInventoryBuildMenu');return _G['ISInventoryBuildMenu']")()

--[lua/client/BuildingObjects/ISUI/ISPaintMenu.d.ts]
Exports.ISPaintMenu = loadstring("require('lua/client/BuildingObjects/ISUI/ISPaintMenu');return _G['ISPaintMenu']")()

--[lua/client/BuildingObjects/TimedActions/ISBuildAction.d.ts]
Exports.ISBuildAction = loadstring("require('lua/client/BuildingObjects/TimedActions/ISBuildAction');return _G['ISBuildAction']")()

--[lua/client/BuildingObjects/TimedActions/ISInsertLightSourceFuelAction.d.ts]
Exports.ISInsertLightSourceFuelAction = loadstring("require('lua/client/BuildingObjects/TimedActions/ISInsertLightSourceFuelAction');return _G['ISInsertLightSourceFuelAction']")()

--[lua/client/BuildingObjects/TimedActions/ISMultiStageBuild.d.ts]
Exports.ISMultiStageBuild = loadstring("require('lua/client/BuildingObjects/TimedActions/ISMultiStageBuild');return _G['ISMultiStageBuild']")()

--[lua/client/BuildingObjects/TimedActions/ISPaintAction.d.ts]
Exports.ISPaintAction = loadstring("require('lua/client/BuildingObjects/TimedActions/ISPaintAction');return _G['ISPaintAction']")()

--[lua/client/BuildingObjects/TimedActions/ISPaintSignAction.d.ts]
Exports.ISPaintSignAction = loadstring("require('lua/client/BuildingObjects/TimedActions/ISPaintSignAction');return _G['ISPaintSignAction']")()

--[lua/client/BuildingObjects/TimedActions/ISPlasterAction.d.ts]
Exports.ISPlasterAction = loadstring("require('lua/client/BuildingObjects/TimedActions/ISPlasterAction');return _G['ISPlasterAction']")()

--[lua/client/BuildingObjects/TimedActions/ISRemoveLightSourceFuelAction.d.ts]
Exports.ISRemoveLightSourceFuelAction = loadstring("require('lua/client/BuildingObjects/TimedActions/ISRemoveLightSourceFuelAction');return _G['ISRemoveLightSourceFuelAction']")()

--[lua/client/BuildingObjects/TimedActions/ISShovelGround.d.ts]
Exports.ISShovelGround = loadstring("require('lua/client/BuildingObjects/TimedActions/ISShovelGround');return _G['ISShovelGround']")()

--[lua/client/BuildingObjects/TimedActions/ISToggleLightSourceAction.d.ts]
Exports.ISToggleLightSourceAction = loadstring("require('lua/client/BuildingObjects/TimedActions/ISToggleLightSourceAction');return _G['ISToggleLightSourceAction']")()

--[lua/client/Camping/CCampfireGlobalObject.d.ts]
Exports.CCampfireGlobalObject = loadstring("require('lua/client/Camping/CCampfireGlobalObject');return _G['CCampfireGlobalObject']")()

--[lua/client/Camping/CCampfireSystem.d.ts]
Exports.CCampfireSystem = loadstring("require('lua/client/Camping/CCampfireSystem');return _G['CCampfireSystem']")()

--[lua/client/Camping/ISUI/ISCampingInfoWindow.d.ts]
Exports.ISCampingInfoWindow = loadstring("require('lua/client/Camping/ISUI/ISCampingInfoWindow');return _G['ISCampingInfoWindow']")()

--[lua/client/Camping/ISUI/ISCampingMenu.d.ts]
Exports.ISCampingMenu = loadstring("require('lua/client/Camping/ISUI/ISCampingMenu');return _G['ISCampingMenu']")()

--[lua/client/Camping/TimedActions/ISAddFuelAction.d.ts]
Exports.ISAddFuelAction = loadstring("require('lua/client/Camping/TimedActions/ISAddFuelAction');return _G['ISAddFuelAction']")()

--[lua/client/Camping/TimedActions/ISAddTentAction.d.ts]
Exports.ISAddTentAction = loadstring("require('lua/client/Camping/TimedActions/ISAddTentAction');return _G['ISAddTentAction']")()

--[lua/client/Camping/TimedActions/ISLightFromKindle.d.ts]
Exports.ISLightFromKindle = loadstring("require('lua/client/Camping/TimedActions/ISLightFromKindle');return _G['ISLightFromKindle']")()

--[lua/client/Camping/TimedActions/ISLightFromLiterature.d.ts]
Exports.ISLightFromLiterature = loadstring("require('lua/client/Camping/TimedActions/ISLightFromLiterature');return _G['ISLightFromLiterature']")()

--[lua/client/Camping/TimedActions/ISLightFromPetrol.d.ts]
Exports.ISLightFromPetrol = loadstring("require('lua/client/Camping/TimedActions/ISLightFromPetrol');return _G['ISLightFromPetrol']")()

--[lua/client/Camping/TimedActions/ISPlaceCampfireAction.d.ts]
Exports.ISPlaceCampfireAction = loadstring("require('lua/client/Camping/TimedActions/ISPlaceCampfireAction');return _G['ISPlaceCampfireAction']")()

--[lua/client/Camping/TimedActions/ISPutOutCampfireAction.d.ts]
Exports.ISPutOutCampfireAction = loadstring("require('lua/client/Camping/TimedActions/ISPutOutCampfireAction');return _G['ISPutOutCampfireAction']")()

--[lua/client/Camping/TimedActions/ISRemoveCampfireAction.d.ts]
Exports.ISRemoveCampfireAction = loadstring("require('lua/client/Camping/TimedActions/ISRemoveCampfireAction');return _G['ISRemoveCampfireAction']")()

--[lua/client/Camping/TimedActions/ISRemoveTentAction.d.ts]
Exports.ISRemoveTentAction = loadstring("require('lua/client/Camping/TimedActions/ISRemoveTentAction');return _G['ISRemoveTentAction']")()

--[lua/client/Camping/TimedActions/ISSleepInTentAction.d.ts]
Exports.ISSleepInTentAction = loadstring("require('lua/client/Camping/TimedActions/ISSleepInTentAction');return _G['ISSleepInTentAction']")()

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

--[lua/client/DebugUIs/DebugMenu/Puddles/PuddlesControl.d.ts]
Exports.PuddlesControl = loadstring("require('lua/client/DebugUIs/DebugMenu/Puddles/PuddlesControl');return _G['PuddlesControl']")()

--[lua/client/DebugUIs/DebugMenu/Puddles/PuddlesPeriodDebug.d.ts]
Exports.PuddlesPeriodDebug = loadstring("require('lua/client/DebugUIs/DebugMenu/Puddles/PuddlesPeriodDebug');return _G['PuddlesPeriodDebug']")()

--[lua/client/DebugUIs/DebugMenu/radio/RadioScriptDebugger.d.ts]
Exports.RadioScriptDebugger = loadstring("require('lua/client/DebugUIs/DebugMenu/radio/RadioScriptDebugger');return _G['RadioScriptDebugger']")()

--[lua/client/DebugUIs/DebugMenu/radio/ZomboidRadioDebug.d.ts]
Exports.ZomboidRadioDebug = loadstring("require('lua/client/DebugUIs/DebugMenu/radio/ZomboidRadioDebug');return _G['ZomboidRadioDebug']")()

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

--[lua/client/DebugUIs/DebugMenu/WorldFlares/WorldFlaresDebug.d.ts]
Exports.WorldFlaresDebug = loadstring("require('lua/client/DebugUIs/DebugMenu/WorldFlares/WorldFlaresDebug');return _G['WorldFlaresDebug']")()

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

--[lua/client/DebugUIs/SourceWindow.d.ts]
Exports.SourceWindow = loadstring("require('lua/client/DebugUIs/SourceWindow');return _G['SourceWindow']")()

--[lua/client/DebugUIs/StashDebug.d.ts]
Exports.StashDebug = loadstring("require('lua/client/DebugUIs/StashDebug');return _G['StashDebug']")()

--[lua/client/DebugUIs/StreamMapWindow.d.ts]
Exports.StreamMapWindow = loadstring("require('lua/client/DebugUIs/StreamMapWindow');return _G['StreamMapWindow']")()

--[lua/client/DebugUIs/TextureViewer.d.ts]
Exports.TextureWindow = loadstring("require('lua/client/DebugUIs/TextureViewer');return _G['TextureWindow']")()

--[lua/client/DebugUIs/WatchWindow.d.ts]
Exports.WatchWindow = loadstring("require('lua/client/DebugUIs/WatchWindow');return _G['WatchWindow']")()

--[lua/client/erosion/debug/DebugDemoTime.d.ts]

--[lua/client/erosion/debug/Point2D.d.ts]
Exports.Point2D = loadstring("require('lua/client/erosion/debug/Point2D');return _G['Point2D']")()

--[lua/client/Farming/CFarmingSystem.d.ts]
Exports.CFarmingSystem = loadstring("require('lua/client/Farming/CFarmingSystem');return _G['CFarmingSystem']")()

--[lua/client/Farming/CPlantGlobalObject.d.ts]
Exports.CPlantGlobalObject = loadstring("require('lua/client/Farming/CPlantGlobalObject');return _G['CPlantGlobalObject']")()

--[lua/client/Farming/ISUI/ISFarmingInfo.d.ts]
Exports.ISFarmingInfo = loadstring("require('lua/client/Farming/ISUI/ISFarmingInfo');return _G['ISFarmingInfo']")()
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

--[lua/client/Farming/TimedActions/ISCureFliesAction.d.ts]
Exports.ISCureFliesAction = loadstring("require('lua/client/Farming/TimedActions/ISCureFliesAction');return _G['ISCureFliesAction']")()

--[lua/client/Farming/TimedActions/ISCureMildewAction.d.ts]
Exports.ISCureMildewAction = loadstring("require('lua/client/Farming/TimedActions/ISCureMildewAction');return _G['ISCureMildewAction']")()

--[lua/client/Farming/TimedActions/ISFertilizeAction.d.ts]
Exports.ISFertilizeAction = loadstring("require('lua/client/Farming/TimedActions/ISFertilizeAction');return _G['ISFertilizeAction']")()

--[lua/client/Farming/TimedActions/ISHarvestPlantAction.d.ts]
Exports.ISHarvestPlantAction = loadstring("require('lua/client/Farming/TimedActions/ISHarvestPlantAction');return _G['ISHarvestPlantAction']")()

--[lua/client/Farming/TimedActions/ISPlantInfoAction.d.ts]
Exports.ISPlantInfoAction = loadstring("require('lua/client/Farming/TimedActions/ISPlantInfoAction');return _G['ISPlantInfoAction']")()

--[lua/client/Farming/TimedActions/ISPlowAction.d.ts]
Exports.ISPlowAction = loadstring("require('lua/client/Farming/TimedActions/ISPlowAction');return _G['ISPlowAction']")()

--[lua/client/Farming/TimedActions/ISSeedAction.d.ts]
Exports.ISSeedAction = loadstring("require('lua/client/Farming/TimedActions/ISSeedAction');return _G['ISSeedAction']")()

--[lua/client/Farming/TimedActions/ISShovelAction.d.ts]
Exports.ISShovelAction = loadstring("require('lua/client/Farming/TimedActions/ISShovelAction');return _G['ISShovelAction']")()

--[lua/client/Farming/TimedActions/ISWaterPlantAction.d.ts]
Exports.ISWaterPlantAction = loadstring("require('lua/client/Farming/TimedActions/ISWaterPlantAction');return _G['ISWaterPlantAction']")()

--[lua/client/Fishing/TimedActions/ISCheckFishingNetAction.d.ts]
Exports.ISCheckFishingNetAction = loadstring("require('lua/client/Fishing/TimedActions/ISCheckFishingNetAction');return _G['ISCheckFishingNetAction']")()

--[lua/client/Fishing/TimedActions/ISFishingAction.d.ts]
Exports.ISFishingAction = loadstring("require('lua/client/Fishing/TimedActions/ISFishingAction');return _G['ISFishingAction']")()

--[lua/client/Foraging/forageClient.d.ts]
Exports.forageClient = loadstring("require('lua/client/Foraging/forageClient');return _G['forageClient']")()
Exports.forageData = loadstring("require('lua/client/Foraging/forageClient');return _G['forageData']")()

--[lua/client/Foraging/ISBaseIcon.d.ts]
Exports.ISBaseIcon = loadstring("require('lua/client/Foraging/ISBaseIcon');return _G['ISBaseIcon']")()

--[lua/client/Foraging/ISForageAction.d.ts]
Exports.ISForageAction = loadstring("require('lua/client/Foraging/ISForageAction');return _G['ISForageAction']")()

--[lua/client/Foraging/ISForageIcon.d.ts]
Exports.ISForageIcon = loadstring("require('lua/client/Foraging/ISForageIcon');return _G['ISForageIcon']")()

--[lua/client/Foraging/ISSearchManager.d.ts]
Exports.ISSearchManager = loadstring("require('lua/client/Foraging/ISSearchManager');return _G['ISSearchManager']")()

--[lua/client/Foraging/ISSearchWindow.d.ts]
Exports.ISSearchWindow = loadstring("require('lua/client/Foraging/ISSearchWindow');return _G['ISSearchWindow']")()

--[lua/client/Foraging/ISWorldItemIcon.d.ts]
Exports.ISWorldItemIcon = loadstring("require('lua/client/Foraging/ISWorldItemIcon');return _G['ISWorldItemIcon']")()

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

--[lua/client/ISUI/AdminPanel/ISItemsListTable.d.ts]
Exports.ISItemsListTable = loadstring("require('lua/client/ISUI/AdminPanel/ISItemsListTable');return _G['ISItemsListTable']")()

--[lua/client/ISUI/AdminPanel/ISItemsListViewer.d.ts]
Exports.ISItemsListViewer = loadstring("require('lua/client/ISUI/AdminPanel/ISItemsListViewer');return _G['ISItemsListViewer']")()

--[lua/client/ISUI/AdminPanel/ISMiniScoreboardUI.d.ts]
Exports.ISMiniScoreboardUI = loadstring("require('lua/client/ISUI/AdminPanel/ISMiniScoreboardUI');return _G['ISMiniScoreboardUI']")()

--[lua/client/ISUI/AdminPanel/ISPacketCounts.d.ts]
Exports.ISPacketCounts = loadstring("require('lua/client/ISUI/AdminPanel/ISPacketCounts');return _G['ISPacketCounts']")()
Exports.ISPacketCountsList = loadstring("require('lua/client/ISUI/AdminPanel/ISPacketCounts');return _G['ISPacketCountsList']")()

--[lua/client/ISUI/AdminPanel/ISPvpZonePanel.d.ts]
Exports.ISPvpZonePanel = loadstring("require('lua/client/ISUI/AdminPanel/ISPvpZonePanel');return _G['ISPvpZonePanel']")()

--[lua/client/ISUI/AdminPanel/ISSafehousesList.d.ts]
Exports.ISSafehousesList = loadstring("require('lua/client/ISUI/AdminPanel/ISSafehousesList');return _G['ISSafehousesList']")()

--[lua/client/ISUI/AdminPanel/ISServerOptions.d.ts]
Exports.ISServerOptions = loadstring("require('lua/client/ISUI/AdminPanel/ISServerOptions');return _G['ISServerOptions']")()

--[lua/client/ISUI/AdminPanel/ISServerOptionsChange.d.ts]
Exports.ISServerOptionsChange = loadstring("require('lua/client/ISUI/AdminPanel/ISServerOptionsChange');return _G['ISServerOptionsChange']")()

--[lua/client/ISUI/AdminPanel/ISServerSandboxOptionsUI.d.ts]
Exports.ISServerSandboxOptionsUI = loadstring("require('lua/client/ISUI/AdminPanel/ISServerSandboxOptionsUI');return _G['ISServerSandboxOptionsUI']")()

--[lua/client/ISUI/AdminPanel/ISStatisticsUI.d.ts]
Exports.ISStatisticsUI = loadstring("require('lua/client/ISUI/AdminPanel/ISStatisticsUI');return _G['ISStatisticsUI']")()

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

--[lua/client/ISUI/BodyParts/ISBodyPartPanel.d.ts]
Exports.ISBodyPartPanel = loadstring("require('lua/client/ISUI/BodyParts/ISBodyPartPanel');return _G['ISBodyPartPanel']")()

--[lua/client/ISUI/Fireplace/ISKnob.d.ts]
Exports.ISKnob = loadstring("require('lua/client/ISUI/Fireplace/ISKnob');return _G['ISKnob']")()

--[lua/client/ISUI/Fireplace/ISMicrowaveUI.d.ts]
Exports.ISMicrowaveUI = loadstring("require('lua/client/ISUI/Fireplace/ISMicrowaveUI');return _G['ISMicrowaveUI']")()

--[lua/client/ISUI/Fireplace/ISOvenUI.d.ts]
Exports.ISOvenUI = loadstring("require('lua/client/ISUI/Fireplace/ISOvenUI');return _G['ISOvenUI']")()

--[lua/client/ISUI/FPS.d.ts]
Exports.ISFPS = loadstring("require('lua/client/ISUI/FPS');return _G['ISFPS']")()

--[lua/client/ISUI/InterpolationPeriodDebug.d.ts]
Exports.InterpolationPeriodDebug = loadstring("require('lua/client/ISUI/InterpolationPeriodDebug');return _G['InterpolationPeriodDebug']")()

--[lua/client/ISUI/InterpolationPlayerPeriodDebug.d.ts]
Exports.InterpolationPlayerPeriodDebug = loadstring("require('lua/client/ISUI/InterpolationPlayerPeriodDebug');return _G['InterpolationPlayerPeriodDebug']")()

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
Exports.ISCraftingUI = loadstring("require('lua/client/ISUI/ISCraftingUI');return _G['ISCraftingUI']")()

--[lua/client/ISUI/ISDemoPopup.d.ts]
Exports.ISDemoPopup = loadstring("require('lua/client/ISUI/ISDemoPopup');return _G['ISDemoPopup']")()

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

--[lua/client/ISUI/ISSafetyUI.d.ts]
Exports.ISSafetyUI = loadstring("require('lua/client/ISUI/ISSafetyUI');return _G['ISSafetyUI']")()

--[lua/client/ISUI/ISScavengeUI.d.ts]
Exports.ISScavengeUI = loadstring("require('lua/client/ISUI/ISScavengeUI');return _G['ISScavengeUI']")()

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

--[lua/client/ISUI/ISSpinBox.d.ts]
Exports.ISSpinBox = loadstring("require('lua/client/ISUI/ISSpinBox');return _G['ISSpinBox']")()

--[lua/client/ISUI/ISTabPanel.d.ts]
Exports.ISTabPanel = loadstring("require('lua/client/ISUI/ISTabPanel');return _G['ISTabPanel']")()

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

--[lua/client/ISUI/ISUIEmoteConfig.d.ts]
Exports.ISUIEmoteConfig = loadstring("require('lua/client/ISUI/ISUIEmoteConfig');return _G['ISUIEmoteConfig']")()

--[lua/client/ISUI/ISUIHandler.d.ts]
Exports.ISUIHandler = loadstring("require('lua/client/ISUI/ISUIHandler');return _G['ISUIHandler']")()

--[lua/client/ISUI/ISUIWriteJournal.d.ts]
Exports.ISUIWriteJournal = loadstring("require('lua/client/ISUI/ISUIWriteJournal');return _G['ISUIWriteJournal']")()

--[lua/client/ISUI/ISVehicleConfirmBox.d.ts]
Exports.ISVehicleConfirmBox = loadstring("require('lua/client/ISUI/ISVehicleConfirmBox');return _G['ISVehicleConfirmBox']")()
Exports.ISVehiclePartListBox = loadstring("require('lua/client/ISUI/ISVehicleConfirmBox');return _G['ISVehiclePartListBox']")()

--[lua/client/ISUI/ISVolumeControl.d.ts]
Exports.ISVolumeControl = loadstring("require('lua/client/ISUI/ISVolumeControl');return _G['ISVolumeControl']")()

--[lua/client/ISUI/ISVolumeIndicator.d.ts]
Exports.ISVolumeIndicator = loadstring("require('lua/client/ISUI/ISVolumeIndicator');return _G['ISVolumeIndicator']")()

--[lua/client/ISUI/ISWindow.d.ts]
Exports.ISWindow = loadstring("require('lua/client/ISUI/ISWindow');return _G['ISWindow']")()

--[lua/client/ISUI/ISWorldObjectContextMenu.d.ts]
Exports.ISWorldObjectContextMenu = loadstring("require('lua/client/ISUI/ISWorldObjectContextMenu');return _G['ISWorldObjectContextMenu']")()

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

--[lua/client/ISUI/Maps/ISWorldMapSymbols.d.ts]
Exports.ISWorldMapSymbols = loadstring("require('lua/client/ISUI/Maps/ISWorldMapSymbols');return _G['ISWorldMapSymbols']")()
Exports.ISWorldMapSymbolTool = loadstring("require('lua/client/ISUI/Maps/ISWorldMapSymbols');return _G['ISWorldMapSymbolTool']")()
Exports.ISWorldMapSymbolTool_AddNote = loadstring("require('lua/client/ISUI/Maps/ISWorldMapSymbols');return _G['ISWorldMapSymbolTool_AddNote']")()
Exports.ISWorldMapSymbolTool_AddSymbol = loadstring("require('lua/client/ISUI/Maps/ISWorldMapSymbols');return _G['ISWorldMapSymbolTool_AddSymbol']")()
Exports.ISWorldMapSymbolTool_EditNote = loadstring("require('lua/client/ISUI/Maps/ISWorldMapSymbols');return _G['ISWorldMapSymbolTool_EditNote']")()
Exports.ISWorldMapSymbolTool_MoveAnnotation = loadstring("require('lua/client/ISUI/Maps/ISWorldMapSymbols');return _G['ISWorldMapSymbolTool_MoveAnnotation']")()
Exports.ISWorldMapSymbolTool_RemoveAnnotation = loadstring("require('lua/client/ISUI/Maps/ISWorldMapSymbols');return _G['ISWorldMapSymbolTool_RemoveAnnotation']")()

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

--[lua/client/ISUI/PlayerStats/ISPlayerStatsUI.d.ts]
Exports.ISPlayerStatsUI = loadstring("require('lua/client/ISUI/PlayerStats/ISPlayerStatsUI');return _G['ISPlayerStatsUI']")()

--[lua/client/ISUI/PlayerStats/ISPlayerStatsUserlogUI.d.ts]
Exports.ISPlayerStatsUserlogUI = loadstring("require('lua/client/ISUI/PlayerStats/ISPlayerStatsUserlogUI');return _G['ISPlayerStatsUserlogUI']")()

--[lua/client/ISUI/PlayerStats/ISPlayerStatsWarningPointUI.d.ts]
Exports.ISPlayerStatsWarningPointUI = loadstring("require('lua/client/ISUI/PlayerStats/ISPlayerStatsWarningPointUI');return _G['ISPlayerStatsWarningPointUI']")()

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

--[lua/client/MetalDrum/CMetalDrumGlobalObject.d.ts]
Exports.CMetalDrumGlobalObject = loadstring("require('lua/client/MetalDrum/CMetalDrumGlobalObject');return _G['CMetalDrumGlobalObject']")()

--[lua/client/MetalDrum/CMetalDrumSystem.d.ts]
Exports.CMetalDrumSystem = loadstring("require('lua/client/MetalDrum/CMetalDrumSystem');return _G['CMetalDrumSystem']")()

--[lua/client/Moveables/ISMoveableDefinitions.d.ts]
Exports.ISMoveableDefinitions = loadstring("require('lua/client/Moveables/ISMoveableDefinitions');return _G['ISMoveableDefinitions']")()

--[lua/client/Moveables/ISMoveablesAction.d.ts]
Exports.ISMoveablesAction = loadstring("require('lua/client/Moveables/ISMoveablesAction');return _G['ISMoveablesAction']")()

--[lua/client/Moveables/ISMoveablesIconToolTip.d.ts]
Exports.ISMoveablesIconToolTip = loadstring("require('lua/client/Moveables/ISMoveablesIconToolTip');return _G['ISMoveablesIconToolTip']")()

--[lua/client/Moveables/ISMoveableSpriteProps.d.ts]
Exports.InfoPanelFlags = loadstring("require('lua/client/Moveables/ISMoveableSpriteProps');return _G['InfoPanelFlags']")()
Exports.ISMoveableSpriteProps = loadstring("require('lua/client/Moveables/ISMoveableSpriteProps');return _G['ISMoveableSpriteProps']")()
Exports.ISThumpableSpriteProps = loadstring("require('lua/client/Moveables/ISMoveableSpriteProps');return _G['ISThumpableSpriteProps']")()
Exports.SpriteGridCache = loadstring("require('lua/client/Moveables/ISMoveableSpriteProps');return _G['SpriteGridCache']")()

--[lua/client/Moveables/ISMoveableTools.d.ts]
Exports.ISMoveableTools = loadstring("require('lua/client/Moveables/ISMoveableTools');return _G['ISMoveableTools']")()

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

--[lua/client/OptionScreens/LoginScreen.d.ts]
Exports.LoginScreen = loadstring("require('lua/client/OptionScreens/LoginScreen');return _G['LoginScreen']")()

--[lua/client/OptionScreens/MainOptions.d.ts]
Exports.MainOptions = loadstring("require('lua/client/OptionScreens/MainOptions');return _G['MainOptions']")()

--[lua/client/OptionScreens/MainScreen.d.ts]
Exports.MainScreen = loadstring("require('lua/client/OptionScreens/MainScreen');return _G['MainScreen']")()

--[lua/client/OptionScreens/MapSpawnSelect.d.ts]
Exports.MapSpawnSelect = loadstring("require('lua/client/OptionScreens/MapSpawnSelect');return _G['MapSpawnSelect']")()
Exports.MapSpawnSelectInfoPanel = loadstring("require('lua/client/OptionScreens/MapSpawnSelect');return _G['MapSpawnSelectInfoPanel']")()
Exports.MapSpawnSelectListBox = loadstring("require('lua/client/OptionScreens/MapSpawnSelect');return _G['MapSpawnSelectListBox']")()

--[lua/client/OptionScreens/ModMoreInfo.d.ts]
Exports.ModMoreInfo = loadstring("require('lua/client/OptionScreens/ModMoreInfo');return _G['ModMoreInfo']")()

--[lua/client/OptionScreens/ModOrderUI.d.ts]
Exports.ModOrderUI = loadstring("require('lua/client/OptionScreens/ModOrderUI');return _G['ModOrderUI']")()

--[lua/client/OptionScreens/ModSelector.d.ts]
Exports.ModInfoPanel = loadstring("require('lua/client/OptionScreens/ModSelector');return _G['ModInfoPanel']")()
Exports.ModListBox = loadstring("require('lua/client/OptionScreens/ModSelector');return _G['ModListBox']")()
Exports.ModPosterPanel = loadstring("require('lua/client/OptionScreens/ModSelector');return _G['ModPosterPanel']")()
Exports.ModSelector = loadstring("require('lua/client/OptionScreens/ModSelector');return _G['ModSelector']")()
Exports.ModThumbnailPanel = loadstring("require('lua/client/OptionScreens/ModSelector');return _G['ModThumbnailPanel']")()

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
Exports.DefaultServerSettings = loadstring("require('lua/client/OptionScreens/ServerSettingsScreen');return _G['DefaultServerSettings']")()

--[lua/client/OptionScreens/ServerToolbox.d.ts]
Exports.ServerToolbox = loadstring("require('lua/client/OptionScreens/ServerToolbox');return _G['ServerToolbox']")()

--[lua/client/OptionScreens/ServerWorkshopItemScreen.d.ts]
Exports.ServerWorkshopItemScreen = loadstring("require('lua/client/OptionScreens/ServerWorkshopItemScreen');return _G['ServerWorkshopItemScreen']")()

--[lua/client/OptionScreens/WorkshopSubmitScreen.d.ts]
Exports.WorkshopSubmitScreen = loadstring("require('lua/client/OptionScreens/WorkshopSubmitScreen');return _G['WorkshopSubmitScreen']")()

--[lua/client/OptionScreens/WorldSelect.d.ts]
Exports.WorldSelect = loadstring("require('lua/client/OptionScreens/WorldSelect');return _G['WorldSelect']")()

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

--[lua/client/TimedActions/ISActivateCarBatteryChargerAction.d.ts]
Exports.ISActivateCarBatteryChargerAction = loadstring("require('lua/client/TimedActions/ISActivateCarBatteryChargerAction');return _G['ISActivateCarBatteryChargerAction']")()

--[lua/client/TimedActions/ISActivateGenerator.d.ts]
Exports.ISActivateGenerator = loadstring("require('lua/client/TimedActions/ISActivateGenerator');return _G['ISActivateGenerator']")()

--[lua/client/TimedActions/ISAddCompost.d.ts]
Exports.ISAddCompost = loadstring("require('lua/client/TimedActions/ISAddCompost');return _G['ISAddCompost']")()

--[lua/client/TimedActions/ISAddFuel.d.ts]
Exports.ISAddFuel = loadstring("require('lua/client/TimedActions/ISAddFuel');return _G['ISAddFuel']")()

--[lua/client/TimedActions/ISAddItemInRecipe.d.ts]
Exports.ISAddItemInRecipe = loadstring("require('lua/client/TimedActions/ISAddItemInRecipe');return _G['ISAddItemInRecipe']")()

--[lua/client/TimedActions/ISAddSheetAction.d.ts]
Exports.ISAddSheetAction = loadstring("require('lua/client/TimedActions/ISAddSheetAction');return _G['ISAddSheetAction']")()

--[lua/client/TimedActions/ISAddSheetRope.d.ts]
Exports.ISAddSheetRope = loadstring("require('lua/client/TimedActions/ISAddSheetRope');return _G['ISAddSheetRope']")()

--[lua/client/TimedActions/ISAddWaterFromItemAction.d.ts]
Exports.ISAddWaterFromItemAction = loadstring("require('lua/client/TimedActions/ISAddWaterFromItemAction');return _G['ISAddWaterFromItemAction']")()

--[lua/client/TimedActions/ISApplyBandage.d.ts]
Exports.ISApplyBandage = loadstring("require('lua/client/TimedActions/ISApplyBandage');return _G['ISApplyBandage']")()

--[lua/client/TimedActions/ISAttachItemHotbar.d.ts]
Exports.ISAttachItemHotbar = loadstring("require('lua/client/TimedActions/ISAttachItemHotbar');return _G['ISAttachItemHotbar']")()

--[lua/client/TimedActions/ISBarricadeAction.d.ts]
Exports.ISBarricadeAction = loadstring("require('lua/client/TimedActions/ISBarricadeAction');return _G['ISBarricadeAction']")()

--[lua/client/TimedActions/ISBBQAddFuel.d.ts]
Exports.ISBBQAddFuel = loadstring("require('lua/client/TimedActions/ISBBQAddFuel');return _G['ISBBQAddFuel']")()

--[lua/client/TimedActions/ISBBQExtinguish.d.ts]
Exports.ISBBQExtinguish = loadstring("require('lua/client/TimedActions/ISBBQExtinguish');return _G['ISBBQExtinguish']")()

--[lua/client/TimedActions/ISBBQInfoAction.d.ts]
Exports.ISBBQInfoAction = loadstring("require('lua/client/TimedActions/ISBBQInfoAction');return _G['ISBBQInfoAction']")()

--[lua/client/TimedActions/ISBBQInsertPropaneTank.d.ts]
Exports.ISBBQInsertPropaneTank = loadstring("require('lua/client/TimedActions/ISBBQInsertPropaneTank');return _G['ISBBQInsertPropaneTank']")()

--[lua/client/TimedActions/ISBBQLightFromKindle.d.ts]
Exports.ISBBQLightFromKindle = loadstring("require('lua/client/TimedActions/ISBBQLightFromKindle');return _G['ISBBQLightFromKindle']")()

--[lua/client/TimedActions/ISBBQLightFromLiterature.d.ts]
Exports.ISBBQLightFromLiterature = loadstring("require('lua/client/TimedActions/ISBBQLightFromLiterature');return _G['ISBBQLightFromLiterature']")()

--[lua/client/TimedActions/ISBBQLightFromPetrol.d.ts]
Exports.ISBBQLightFromPetrol = loadstring("require('lua/client/TimedActions/ISBBQLightFromPetrol');return _G['ISBBQLightFromPetrol']")()

--[lua/client/TimedActions/ISBBQRemovePropaneTank.d.ts]
Exports.ISBBQRemovePropaneTank = loadstring("require('lua/client/TimedActions/ISBBQRemovePropaneTank');return _G['ISBBQRemovePropaneTank']")()

--[lua/client/TimedActions/ISBBQToggle.d.ts]
Exports.ISBBQToggle = loadstring("require('lua/client/TimedActions/ISBBQToggle');return _G['ISBBQToggle']")()

--[lua/client/TimedActions/ISBurnCorpseAction.d.ts]
Exports.ISBurnCorpseAction = loadstring("require('lua/client/TimedActions/ISBurnCorpseAction');return _G['ISBurnCorpseAction']")()

--[lua/client/TimedActions/ISBuryCorpse.d.ts]
Exports.ISBuryCorpse = loadstring("require('lua/client/TimedActions/ISBuryCorpse');return _G['ISBuryCorpse']")()

--[lua/client/TimedActions/ISCampingInfoAction.d.ts]
Exports.ISCampingInfoAction = loadstring("require('lua/client/TimedActions/ISCampingInfoAction');return _G['ISCampingInfoAction']")()

--[lua/client/TimedActions/ISChopTreeAction.d.ts]
Exports.ISChopTreeAction = loadstring("require('lua/client/TimedActions/ISChopTreeAction');return _G['ISChopTreeAction']")()

--[lua/client/TimedActions/ISCleanBandage.d.ts]
Exports.ISCleanBandage = loadstring("require('lua/client/TimedActions/ISCleanBandage');return _G['ISCleanBandage']")()

--[lua/client/TimedActions/ISCleanBlood.d.ts]
Exports.ISCleanBlood = loadstring("require('lua/client/TimedActions/ISCleanBlood');return _G['ISCleanBlood']")()

--[lua/client/TimedActions/ISCleanBurn.d.ts]
Exports.ISCleanBurn = loadstring("require('lua/client/TimedActions/ISCleanBurn');return _G['ISCleanBurn']")()

--[lua/client/TimedActions/ISClearAshes.d.ts]
Exports.ISClearAshes = loadstring("require('lua/client/TimedActions/ISClearAshes');return _G['ISClearAshes']")()

--[lua/client/TimedActions/ISClimbOverFence.d.ts]
Exports.ISClimbOverFence = loadstring("require('lua/client/TimedActions/ISClimbOverFence');return _G['ISClimbOverFence']")()

--[lua/client/TimedActions/ISClimbSheetRopeAction.d.ts]
Exports.ISClimbSheetRopeAction = loadstring("require('lua/client/TimedActions/ISClimbSheetRopeAction');return _G['ISClimbSheetRopeAction']")()

--[lua/client/TimedActions/ISClimbThroughWindow.d.ts]
Exports.ISClimbThroughWindow = loadstring("require('lua/client/TimedActions/ISClimbThroughWindow');return _G['ISClimbThroughWindow']")()

--[lua/client/TimedActions/ISClothingExtraAction.d.ts]
Exports.ISClothingExtraAction = loadstring("require('lua/client/TimedActions/ISClothingExtraAction');return _G['ISClothingExtraAction']")()

--[lua/client/TimedActions/ISComfreyCataplasm.d.ts]
Exports.ISComfreyCataplasm = loadstring("require('lua/client/TimedActions/ISComfreyCataplasm');return _G['ISComfreyCataplasm']")()

--[lua/client/TimedActions/ISConnectCarBatteryToChargerAction.d.ts]
Exports.ISConnectCarBatteryToChargerAction = loadstring("require('lua/client/TimedActions/ISConnectCarBatteryToChargerAction');return _G['ISConnectCarBatteryToChargerAction']")()

--[lua/client/TimedActions/ISConsolidateDrainable.d.ts]
Exports.ISConsolidateDrainable = loadstring("require('lua/client/TimedActions/ISConsolidateDrainable');return _G['ISConsolidateDrainable']")()

--[lua/client/TimedActions/ISConsolidateDrainableAll.d.ts]
Exports.ISConsolidateDrainableAll = loadstring("require('lua/client/TimedActions/ISConsolidateDrainableAll');return _G['ISConsolidateDrainableAll']")()

--[lua/client/TimedActions/ISCraftAction.d.ts]
Exports.ISCraftAction = loadstring("require('lua/client/TimedActions/ISCraftAction');return _G['ISCraftAction']")()

--[lua/client/TimedActions/ISCutHair.d.ts]
Exports.ISCutHair = loadstring("require('lua/client/TimedActions/ISCutHair');return _G['ISCutHair']")()

--[lua/client/TimedActions/ISDestroyStuffAction.d.ts]
Exports.ISDestroyStuffAction = loadstring("require('lua/client/TimedActions/ISDestroyStuffAction');return _G['ISDestroyStuffAction']")()

--[lua/client/TimedActions/ISDetachItemHotbar.d.ts]
Exports.ISDetachItemHotbar = loadstring("require('lua/client/TimedActions/ISDetachItemHotbar');return _G['ISDetachItemHotbar']")()

--[lua/client/TimedActions/ISDisinfect.d.ts]
Exports.ISDisinfect = loadstring("require('lua/client/TimedActions/ISDisinfect');return _G['ISDisinfect']")()

--[lua/client/TimedActions/ISDismantleAction.d.ts]
Exports.ISDismantleAction = loadstring("require('lua/client/TimedActions/ISDismantleAction');return _G['ISDismantleAction']")()

--[lua/client/TimedActions/ISDrinkFromBottle.d.ts]
Exports.ISDrinkFromBottle = loadstring("require('lua/client/TimedActions/ISDrinkFromBottle');return _G['ISDrinkFromBottle']")()

--[lua/client/TimedActions/ISDropItemAction.d.ts]
Exports.ISDropItemAction = loadstring("require('lua/client/TimedActions/ISDropItemAction');return _G['ISDropItemAction']")()

--[lua/client/TimedActions/ISDropWorldItemAction.d.ts]
Exports.ISDropWorldItemAction = loadstring("require('lua/client/TimedActions/ISDropWorldItemAction');return _G['ISDropWorldItemAction']")()

--[lua/client/TimedActions/ISDryMyself.d.ts]
Exports.ISDryMyself = loadstring("require('lua/client/TimedActions/ISDryMyself');return _G['ISDryMyself']")()

--[lua/client/TimedActions/ISDumpContentsAction.d.ts]
Exports.ISDumpContentsAction = loadstring("require('lua/client/TimedActions/ISDumpContentsAction');return _G['ISDumpContentsAction']")()

--[lua/client/TimedActions/ISDumpWaterAction.d.ts]
Exports.ISDumpWaterAction = loadstring("require('lua/client/TimedActions/ISDumpWaterAction');return _G['ISDumpWaterAction']")()

--[lua/client/TimedActions/ISDyeHair.d.ts]
Exports.ISDyeHair = loadstring("require('lua/client/TimedActions/ISDyeHair');return _G['ISDyeHair']")()

--[lua/client/TimedActions/ISEatFoodAction.d.ts]
Exports.ISEatFoodAction = loadstring("require('lua/client/TimedActions/ISEatFoodAction');return _G['ISEatFoodAction']")()

--[lua/client/TimedActions/ISEjectMagazine.d.ts]
Exports.ISEjectMagazine = loadstring("require('lua/client/TimedActions/ISEjectMagazine');return _G['ISEjectMagazine']")()

--[lua/client/TimedActions/ISEmptyRainBarrelAction.d.ts]
Exports.ISEmptyRainBarrelAction = loadstring("require('lua/client/TimedActions/ISEmptyRainBarrelAction');return _G['ISEmptyRainBarrelAction']")()

--[lua/client/TimedActions/ISEquipHeavyItem.d.ts]
Exports.ISEquipHeavyItem = loadstring("require('lua/client/TimedActions/ISEquipHeavyItem');return _G['ISEquipHeavyItem']")()

--[lua/client/TimedActions/ISEquipWeaponAction.d.ts]
Exports.ISEquipWeaponAction = loadstring("require('lua/client/TimedActions/ISEquipWeaponAction');return _G['ISEquipWeaponAction']")()

--[lua/client/TimedActions/ISFillGrave.d.ts]
Exports.ISFillGrave = loadstring("require('lua/client/TimedActions/ISFillGrave');return _G['ISFillGrave']")()

--[lua/client/TimedActions/ISFinalizeDealAction.d.ts]
Exports.ISFinalizeDealAction = loadstring("require('lua/client/TimedActions/ISFinalizeDealAction');return _G['ISFinalizeDealAction']")()

--[lua/client/TimedActions/ISFireplaceAddFuel.d.ts]
Exports.ISFireplaceAddFuel = loadstring("require('lua/client/TimedActions/ISFireplaceAddFuel');return _G['ISFireplaceAddFuel']")()

--[lua/client/TimedActions/ISFireplaceExtinguish.d.ts]
Exports.ISFireplaceExtinguish = loadstring("require('lua/client/TimedActions/ISFireplaceExtinguish');return _G['ISFireplaceExtinguish']")()

--[lua/client/TimedActions/ISFireplaceInfoAction.d.ts]
Exports.ISFireplaceInfoAction = loadstring("require('lua/client/TimedActions/ISFireplaceInfoAction');return _G['ISFireplaceInfoAction']")()

--[lua/client/TimedActions/ISFireplaceLightFromKindle.d.ts]
Exports.ISFireplaceLightFromKindle = loadstring("require('lua/client/TimedActions/ISFireplaceLightFromKindle');return _G['ISFireplaceLightFromKindle']")()

--[lua/client/TimedActions/ISFireplaceLightFromLiterature.d.ts]
Exports.ISFireplaceLightFromLiterature = loadstring("require('lua/client/TimedActions/ISFireplaceLightFromLiterature');return _G['ISFireplaceLightFromLiterature']")()

--[lua/client/TimedActions/ISFireplaceLightFromPetrol.d.ts]
Exports.ISFireplaceLightFromPetrol = loadstring("require('lua/client/TimedActions/ISFireplaceLightFromPetrol');return _G['ISFireplaceLightFromPetrol']")()

--[lua/client/TimedActions/ISFitnessAction.d.ts]
Exports.ISFitnessAction = loadstring("require('lua/client/TimedActions/ISFitnessAction');return _G['ISFitnessAction']")()

--[lua/client/TimedActions/ISFixAction.d.ts]
Exports.ISFixAction = loadstring("require('lua/client/TimedActions/ISFixAction');return _G['ISFixAction']")()

--[lua/client/TimedActions/ISFixGenerator.d.ts]
Exports.ISFixGenerator = loadstring("require('lua/client/TimedActions/ISFixGenerator');return _G['ISFixGenerator']")()

--[lua/client/TimedActions/ISGarlicCataplasm.d.ts]
Exports.ISGarlicCataplasm = loadstring("require('lua/client/TimedActions/ISGarlicCataplasm');return _G['ISGarlicCataplasm']")()

--[lua/client/TimedActions/ISGeneratorInfoAction.d.ts]
Exports.ISGeneratorInfoAction = loadstring("require('lua/client/TimedActions/ISGeneratorInfoAction');return _G['ISGeneratorInfoAction']")()

--[lua/client/TimedActions/ISGetCompost.d.ts]
Exports.ISGetCompost = loadstring("require('lua/client/TimedActions/ISGetCompost');return _G['ISGetCompost']")()

--[lua/client/TimedActions/ISGrabCorpseAction.d.ts]
Exports.ISGrabCorpseAction = loadstring("require('lua/client/TimedActions/ISGrabCorpseAction');return _G['ISGrabCorpseAction']")()

--[lua/client/TimedActions/ISGrabItemAction.d.ts]
Exports.ISGrabItemAction = loadstring("require('lua/client/TimedActions/ISGrabItemAction');return _G['ISGrabItemAction']")()

--[lua/client/TimedActions/ISInsertMagazine.d.ts]
Exports.ISInsertMagazine = loadstring("require('lua/client/TimedActions/ISInsertMagazine');return _G['ISInsertMagazine']")()

--[lua/client/TimedActions/ISInventoryTransferAction.d.ts]
Exports.ISInventoryTransferAction = loadstring("require('lua/client/TimedActions/ISInventoryTransferAction');return _G['ISInventoryTransferAction']")()

--[lua/client/TimedActions/ISLightActions.d.ts]
Exports.ISLightActions = loadstring("require('lua/client/TimedActions/ISLightActions');return _G['ISLightActions']")()

--[lua/client/TimedActions/ISLoadBulletsInMagazine.d.ts]
Exports.ISLoadBulletsInMagazine = loadstring("require('lua/client/TimedActions/ISLoadBulletsInMagazine');return _G['ISLoadBulletsInMagazine']")()

--[lua/client/TimedActions/ISLockDoor.d.ts]
Exports.ISLockDoor = loadstring("require('lua/client/TimedActions/ISLockDoor');return _G['ISLockDoor']")()

--[lua/client/TimedActions/ISMedicalCheckAction.d.ts]
Exports.ISMedicalCheckAction = loadstring("require('lua/client/TimedActions/ISMedicalCheckAction');return _G['ISMedicalCheckAction']")()

--[lua/client/TimedActions/ISOpenCloseCurtain.d.ts]
Exports.ISOpenCloseCurtain = loadstring("require('lua/client/TimedActions/ISOpenCloseCurtain');return _G['ISOpenCloseCurtain']")()

--[lua/client/TimedActions/ISOpenCloseDoor.d.ts]
Exports.ISOpenCloseDoor = loadstring("require('lua/client/TimedActions/ISOpenCloseDoor');return _G['ISOpenCloseDoor']")()

--[lua/client/TimedActions/ISOpenCloseWindow.d.ts]
Exports.ISOpenCloseWindow = loadstring("require('lua/client/TimedActions/ISOpenCloseWindow');return _G['ISOpenCloseWindow']")()

--[lua/client/TimedActions/ISOpenContainerTimedAction.d.ts]
Exports.ISOpenContainerTimedAction = loadstring("require('lua/client/TimedActions/ISOpenContainerTimedAction');return _G['ISOpenContainerTimedAction']")()

--[lua/client/TimedActions/ISOvenUITimedAction.d.ts]
Exports.ISOvenUITimedAction = loadstring("require('lua/client/TimedActions/ISOvenUITimedAction');return _G['ISOvenUITimedAction']")()

--[lua/client/TimedActions/ISPadlockAction.d.ts]
Exports.ISPadlockAction = loadstring("require('lua/client/TimedActions/ISPadlockAction');return _G['ISPadlockAction']")()

--[lua/client/TimedActions/ISPickupBrokenGlass.d.ts]
Exports.ISPickupBrokenGlass = loadstring("require('lua/client/TimedActions/ISPickupBrokenGlass');return _G['ISPickupBrokenGlass']")()

--[lua/client/TimedActions/ISPlaceCarBatteryChargerAction.d.ts]
Exports.ISPlaceCarBatteryChargerAction = loadstring("require('lua/client/TimedActions/ISPlaceCarBatteryChargerAction');return _G['ISPlaceCarBatteryChargerAction']")()

--[lua/client/TimedActions/ISPlaceTrap.d.ts]
Exports.ISPlaceTrap = loadstring("require('lua/client/TimedActions/ISPlaceTrap');return _G['ISPlaceTrap']")()

--[lua/client/TimedActions/ISPlantainCataplasm.d.ts]
Exports.ISPlantainCataplasm = loadstring("require('lua/client/TimedActions/ISPlantainCataplasm');return _G['ISPlantainCataplasm']")()

--[lua/client/TimedActions/ISPlugGenerator.d.ts]
Exports.ISPlugGenerator = loadstring("require('lua/client/TimedActions/ISPlugGenerator');return _G['ISPlugGenerator']")()

--[lua/client/TimedActions/ISPlumbItem.d.ts]
Exports.ISPlumbItem = loadstring("require('lua/client/TimedActions/ISPlumbItem');return _G['ISPlumbItem']")()

--[lua/client/TimedActions/ISPutOutFire.d.ts]
Exports.ISPutOutFire = loadstring("require('lua/client/TimedActions/ISPutOutFire');return _G['ISPutOutFire']")()

--[lua/client/TimedActions/ISQueueActionsAction.d.ts]
Exports.ISQueueActionsAction = loadstring("require('lua/client/TimedActions/ISQueueActionsAction');return _G['ISQueueActionsAction']")()

--[lua/client/TimedActions/ISRackFirearm.d.ts]
Exports.ISRackFirearm = loadstring("require('lua/client/TimedActions/ISRackFirearm');return _G['ISRackFirearm']")()

--[lua/client/TimedActions/ISReadABook.d.ts]
Exports.ISReadABook = loadstring("require('lua/client/TimedActions/ISReadABook');return _G['ISReadABook']")()

--[lua/client/TimedActions/ISReadWorldMap.d.ts]
Exports.ISReadWorldMap = loadstring("require('lua/client/TimedActions/ISReadWorldMap');return _G['ISReadWorldMap']")()

--[lua/client/TimedActions/ISReloadWeaponAction.d.ts]
Exports.ISReloadWeaponAction = loadstring("require('lua/client/TimedActions/ISReloadWeaponAction');return _G['ISReloadWeaponAction']")()

--[lua/client/TimedActions/ISRemoveBrokenGlass.d.ts]
Exports.ISRemoveBrokenGlass = loadstring("require('lua/client/TimedActions/ISRemoveBrokenGlass');return _G['ISRemoveBrokenGlass']")()

--[lua/client/TimedActions/ISRemoveBullet.d.ts]
Exports.ISRemoveBullet = loadstring("require('lua/client/TimedActions/ISRemoveBullet');return _G['ISRemoveBullet']")()

--[lua/client/TimedActions/ISRemoveBush.d.ts]
Exports.ISRemoveBush = loadstring("require('lua/client/TimedActions/ISRemoveBush');return _G['ISRemoveBush']")()

--[lua/client/TimedActions/ISRemoveCarBatteryFromChargerAction.d.ts]
Exports.ISRemoveCarBatteryFromChargerAction = loadstring("require('lua/client/TimedActions/ISRemoveCarBatteryFromChargerAction');return _G['ISRemoveCarBatteryFromChargerAction']")()

--[lua/client/TimedActions/ISRemoveGlass.d.ts]
Exports.ISRemoveGlass = loadstring("require('lua/client/TimedActions/ISRemoveGlass');return _G['ISRemoveGlass']")()

--[lua/client/TimedActions/ISRemoveGrass.d.ts]
Exports.ISRemoveGrass = loadstring("require('lua/client/TimedActions/ISRemoveGrass');return _G['ISRemoveGrass']")()

--[lua/client/TimedActions/ISRemovePatch.d.ts]
Exports.ISRemovePatch = loadstring("require('lua/client/TimedActions/ISRemovePatch');return _G['ISRemovePatch']")()

--[lua/client/TimedActions/ISRemoveSheetAction.d.ts]
Exports.ISRemoveSheetAction = loadstring("require('lua/client/TimedActions/ISRemoveSheetAction');return _G['ISRemoveSheetAction']")()

--[lua/client/TimedActions/ISRemoveSheetRope.d.ts]
Exports.ISRemoveSheetRope = loadstring("require('lua/client/TimedActions/ISRemoveSheetRope');return _G['ISRemoveSheetRope']")()

--[lua/client/TimedActions/ISRemoveWeaponUpgrade.d.ts]
Exports.ISRemoveWeaponUpgrade = loadstring("require('lua/client/TimedActions/ISRemoveWeaponUpgrade');return _G['ISRemoveWeaponUpgrade']")()

--[lua/client/TimedActions/ISRepairClothing.d.ts]
Exports.ISRepairClothing = loadstring("require('lua/client/TimedActions/ISRepairClothing');return _G['ISRepairClothing']")()

--[lua/client/TimedActions/ISRestAction.d.ts]
Exports.ISRestAction = loadstring("require('lua/client/TimedActions/ISRestAction');return _G['ISRestAction']")()

--[lua/client/TimedActions/ISRipClothing.d.ts]
Exports.ISRipClothing = loadstring("require('lua/client/TimedActions/ISRipClothing');return _G['ISRipClothing']")()

--[lua/client/TimedActions/ISScavengeAction.d.ts]
Exports.ISScavengeAction = loadstring("require('lua/client/TimedActions/ISScavengeAction');return _G['ISScavengeAction']")()

--[lua/client/TimedActions/ISSetComboWasherDryerMode.d.ts]
Exports.ISSetComboWasherDryerMode = loadstring("require('lua/client/TimedActions/ISSetComboWasherDryerMode');return _G['ISSetComboWasherDryerMode']")()

--[lua/client/TimedActions/ISSitOnChairAction.d.ts]
Exports.ISSitOnChairAction = loadstring("require('lua/client/TimedActions/ISSitOnChairAction');return _G['ISSitOnChairAction']")()

--[lua/client/TimedActions/ISSmashWindow.d.ts]
Exports.ISSmashWindow = loadstring("require('lua/client/TimedActions/ISSmashWindow');return _G['ISSmashWindow']")()

--[lua/client/TimedActions/ISSplint.d.ts]
Exports.ISSplint = loadstring("require('lua/client/TimedActions/ISSplint');return _G['ISSplint']")()

--[lua/client/TimedActions/ISStitch.d.ts]
Exports.ISStitch = loadstring("require('lua/client/TimedActions/ISStitch');return _G['ISStitch']")()

--[lua/client/TimedActions/ISStopAlarmClockAction.d.ts]
Exports.ISStopAlarmClockAction = loadstring("require('lua/client/TimedActions/ISStopAlarmClockAction');return _G['ISStopAlarmClockAction']")()

--[lua/client/TimedActions/ISTakeCarBatteryChargerAction.d.ts]
Exports.ISTakeCarBatteryChargerAction = loadstring("require('lua/client/TimedActions/ISTakeCarBatteryChargerAction');return _G['ISTakeCarBatteryChargerAction']")()

--[lua/client/TimedActions/ISTakeFuel.d.ts]
Exports.ISTakeFuel = loadstring("require('lua/client/TimedActions/ISTakeFuel');return _G['ISTakeFuel']")()

--[lua/client/TimedActions/ISTakeGenerator.d.ts]
Exports.ISTakeGenerator = loadstring("require('lua/client/TimedActions/ISTakeGenerator');return _G['ISTakeGenerator']")()

--[lua/client/TimedActions/ISTakePillAction.d.ts]
Exports.ISTakePillAction = loadstring("require('lua/client/TimedActions/ISTakePillAction');return _G['ISTakePillAction']")()

--[lua/client/TimedActions/ISTakeTrap.d.ts]
Exports.ISTakeTrap = loadstring("require('lua/client/TimedActions/ISTakeTrap');return _G['ISTakeTrap']")()

--[lua/client/TimedActions/ISTakeWaterAction.d.ts]
Exports.ISTakeWaterAction = loadstring("require('lua/client/TimedActions/ISTakeWaterAction');return _G['ISTakeWaterAction']")()

--[lua/client/TimedActions/ISTimedActionQueue.d.ts]
Exports.ISTimedActionQueue = loadstring("require('lua/client/TimedActions/ISTimedActionQueue');return _G['ISTimedActionQueue']")()

--[lua/client/TimedActions/ISToggleClothingDryer.d.ts]
Exports.ISToggleClothingDryer = loadstring("require('lua/client/TimedActions/ISToggleClothingDryer');return _G['ISToggleClothingDryer']")()

--[lua/client/TimedActions/ISToggleClothingWasher.d.ts]
Exports.ISToggleClothingWasher = loadstring("require('lua/client/TimedActions/ISToggleClothingWasher');return _G['ISToggleClothingWasher']")()

--[lua/client/TimedActions/ISToggleComboWasherDryer.d.ts]
Exports.ISToggleComboWasherDryer = loadstring("require('lua/client/TimedActions/ISToggleComboWasherDryer');return _G['ISToggleComboWasherDryer']")()

--[lua/client/TimedActions/ISToggleLightAction.d.ts]
Exports.ISToggleLightAction = loadstring("require('lua/client/TimedActions/ISToggleLightAction');return _G['ISToggleLightAction']")()

--[lua/client/TimedActions/ISToggleSafetyAction.d.ts]
Exports.ISToggleSafetyAction = loadstring("require('lua/client/TimedActions/ISToggleSafetyAction');return _G['ISToggleSafetyAction']")()

--[lua/client/TimedActions/ISToggleStoveAction.d.ts]
Exports.ISToggleStoveAction = loadstring("require('lua/client/TimedActions/ISToggleStoveAction');return _G['ISToggleStoveAction']")()

--[lua/client/TimedActions/ISTransferWaterAction.d.ts]
Exports.ISTransferWaterAction = loadstring("require('lua/client/TimedActions/ISTransferWaterAction');return _G['ISTransferWaterAction']")()

--[lua/client/TimedActions/ISTrimBeard.d.ts]
Exports.ISTrimBeard = loadstring("require('lua/client/TimedActions/ISTrimBeard');return _G['ISTrimBeard']")()

--[lua/client/TimedActions/ISUnbarricadeAction.d.ts]
Exports.ISUnbarricadeAction = loadstring("require('lua/client/TimedActions/ISUnbarricadeAction');return _G['ISUnbarricadeAction']")()

--[lua/client/TimedActions/ISUnequipAction.d.ts]
Exports.ISUnequipAction = loadstring("require('lua/client/TimedActions/ISUnequipAction');return _G['ISUnequipAction']")()

--[lua/client/TimedActions/ISUnloadBulletsFromFirearm.d.ts]
Exports.ISUnloadBulletsFromFirearm = loadstring("require('lua/client/TimedActions/ISUnloadBulletsFromFirearm');return _G['ISUnloadBulletsFromFirearm']")()

--[lua/client/TimedActions/ISUnloadBulletsFromMagazine.d.ts]
Exports.ISUnloadBulletsFromMagazine = loadstring("require('lua/client/TimedActions/ISUnloadBulletsFromMagazine');return _G['ISUnloadBulletsFromMagazine']")()

--[lua/client/TimedActions/ISUpgradeWeapon.d.ts]
Exports.ISUpgradeWeapon = loadstring("require('lua/client/TimedActions/ISUpgradeWeapon');return _G['ISUpgradeWeapon']")()

--[lua/client/TimedActions/ISWakeOtherPlayer.d.ts]
Exports.ISWakeOtherPlayer = loadstring("require('lua/client/TimedActions/ISWakeOtherPlayer');return _G['ISWakeOtherPlayer']")()

--[lua/client/TimedActions/ISWashClothing.d.ts]
Exports.ISWashClothing = loadstring("require('lua/client/TimedActions/ISWashClothing');return _G['ISWashClothing']")()

--[lua/client/TimedActions/ISWashYourself.d.ts]
Exports.ISWashYourself = loadstring("require('lua/client/TimedActions/ISWashYourself');return _G['ISWashYourself']")()

--[lua/client/TimedActions/ISWearClothing.d.ts]
Exports.ISWearClothing = loadstring("require('lua/client/TimedActions/ISWearClothing');return _G['ISWearClothing']")()
Exports.WearClothingAnimations = loadstring("require('lua/client/TimedActions/ISWearClothing');return _G['WearClothingAnimations']")()

--[lua/client/TimedActions/WalkToTimedAction.d.ts]
Exports.ISWalkToTimedAction = loadstring("require('lua/client/TimedActions/WalkToTimedAction');return _G['ISWalkToTimedAction']")()

--[lua/client/Traps/CTrapGlobalObject.d.ts]
Exports.CTrapGlobalObject = loadstring("require('lua/client/Traps/CTrapGlobalObject');return _G['CTrapGlobalObject']")()

--[lua/client/Traps/CTrapSystem.d.ts]
Exports.CTrapSystem = loadstring("require('lua/client/Traps/CTrapSystem');return _G['CTrapSystem']")()

--[lua/client/Traps/TimedActions/ISAddBaitAction.d.ts]
Exports.ISAddBaitAction = loadstring("require('lua/client/Traps/TimedActions/ISAddBaitAction');return _G['ISAddBaitAction']")()

--[lua/client/Traps/TimedActions/ISCheckTrapAction.d.ts]
Exports.ISCheckTrapAction = loadstring("require('lua/client/Traps/TimedActions/ISCheckTrapAction');return _G['ISCheckTrapAction']")()

--[lua/client/Traps/TimedActions/ISRemoveBaitAction.d.ts]
Exports.ISRemoveBaitAction = loadstring("require('lua/client/Traps/TimedActions/ISRemoveBaitAction');return _G['ISRemoveBaitAction']")()

--[lua/client/Traps/TimedActions/ISRemoveTrapAction.d.ts]
Exports.ISRemoveTrapAction = loadstring("require('lua/client/Traps/TimedActions/ISRemoveTrapAction');return _G['ISRemoveTrapAction']")()

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
Exports.EditVehicleUI = loadstring("require('lua/client/Vehicles/ISUI/EditVehicleState');return _G['EditVehicleUI']")()
Exports.EditVehicleUI_EditArea = loadstring("require('lua/client/Vehicles/ISUI/EditVehicleState');return _G['EditVehicleUI_EditArea']")()
Exports.EditVehicleUI_EditAttachment = loadstring("require('lua/client/Vehicles/ISUI/EditVehicleState');return _G['EditVehicleUI_EditAttachment']")()
Exports.EditVehicleUI_EditChassis = loadstring("require('lua/client/Vehicles/ISUI/EditVehicleState');return _G['EditVehicleUI_EditChassis']")()
Exports.EditVehicleUI_EditPanel = loadstring("require('lua/client/Vehicles/ISUI/EditVehicleState');return _G['EditVehicleUI_EditPanel']")()
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

--[lua/client/Vehicles/TimedActions/ISAddGasolineToVehicle.d.ts]
Exports.ISAddGasolineToVehicle = loadstring("require('lua/client/Vehicles/TimedActions/ISAddGasolineToVehicle');return _G['ISAddGasolineToVehicle']")()

--[lua/client/Vehicles/TimedActions/ISAttachTrailerToVehicle.d.ts]
Exports.ISAttachTrailerToVehicle = loadstring("require('lua/client/Vehicles/TimedActions/ISAttachTrailerToVehicle');return _G['ISAttachTrailerToVehicle']")()

--[lua/client/Vehicles/TimedActions/ISCloseVehicleDoor.d.ts]
Exports.ISCloseVehicleDoor = loadstring("require('lua/client/Vehicles/TimedActions/ISCloseVehicleDoor');return _G['ISCloseVehicleDoor']")()

--[lua/client/Vehicles/TimedActions/ISConfigHeadlight.d.ts]
Exports.ISConfigHeadlight = loadstring("require('lua/client/Vehicles/TimedActions/ISConfigHeadlight');return _G['ISConfigHeadlight']")()

--[lua/client/Vehicles/TimedActions/ISDeflateTire.d.ts]
Exports.ISDeflateTire = loadstring("require('lua/client/Vehicles/TimedActions/ISDeflateTire');return _G['ISDeflateTire']")()

--[lua/client/Vehicles/TimedActions/ISDetachTrailerFromVehicle.d.ts]
Exports.ISDetachTrailerFromVehicle = loadstring("require('lua/client/Vehicles/TimedActions/ISDetachTrailerFromVehicle');return _G['ISDetachTrailerFromVehicle']")()

--[lua/client/Vehicles/TimedActions/ISEnterVehicle.d.ts]
Exports.ISEnterVehicle = loadstring("require('lua/client/Vehicles/TimedActions/ISEnterVehicle');return _G['ISEnterVehicle']")()

--[lua/client/Vehicles/TimedActions/ISExitVehicle.d.ts]
Exports.ISExitVehicle = loadstring("require('lua/client/Vehicles/TimedActions/ISExitVehicle');return _G['ISExitVehicle']")()

--[lua/client/Vehicles/TimedActions/ISHorn.d.ts]
Exports.ISHorn = loadstring("require('lua/client/Vehicles/TimedActions/ISHorn');return _G['ISHorn']")()

--[lua/client/Vehicles/TimedActions/ISHotwireVehicle.d.ts]
Exports.ISHotwireVehicle = loadstring("require('lua/client/Vehicles/TimedActions/ISHotwireVehicle');return _G['ISHotwireVehicle']")()

--[lua/client/Vehicles/TimedActions/ISInflateTire.d.ts]
Exports.ISInflateTire = loadstring("require('lua/client/Vehicles/TimedActions/ISInflateTire');return _G['ISInflateTire']")()

--[lua/client/Vehicles/TimedActions/ISInstallVehiclePart.d.ts]
Exports.ISInstallVehiclePart = loadstring("require('lua/client/Vehicles/TimedActions/ISInstallVehiclePart');return _G['ISInstallVehiclePart']")()

--[lua/client/Vehicles/TimedActions/ISLightbarUITimedAction.d.ts]
Exports.ISLightbarUITimedAction = loadstring("require('lua/client/Vehicles/TimedActions/ISLightbarUITimedAction');return _G['ISLightbarUITimedAction']")()

--[lua/client/Vehicles/TimedActions/ISLockDoors.d.ts]
Exports.ISLockDoors = loadstring("require('lua/client/Vehicles/TimedActions/ISLockDoors');return _G['ISLockDoors']")()

--[lua/client/Vehicles/TimedActions/ISLockVehicleDoor.d.ts]
Exports.ISLockVehicleDoor = loadstring("require('lua/client/Vehicles/TimedActions/ISLockVehicleDoor');return _G['ISLockVehicleDoor']")()

--[lua/client/Vehicles/TimedActions/ISOpenCloseVehicleWindow.d.ts]
Exports.ISOpenCloseVehicleWindow = loadstring("require('lua/client/Vehicles/TimedActions/ISOpenCloseVehicleWindow');return _G['ISOpenCloseVehicleWindow']")()

--[lua/client/Vehicles/TimedActions/ISOpenMechanicsUIAction.d.ts]
Exports.ISOpenMechanicsUIAction = loadstring("require('lua/client/Vehicles/TimedActions/ISOpenMechanicsUIAction');return _G['ISOpenMechanicsUIAction']")()

--[lua/client/Vehicles/TimedActions/ISOpenVehicleDoor.d.ts]
Exports.ISOpenVehicleDoor = loadstring("require('lua/client/Vehicles/TimedActions/ISOpenVehicleDoor');return _G['ISOpenVehicleDoor']")()

--[lua/client/Vehicles/TimedActions/ISPathFindAction.d.ts]
Exports.ISPathFindAction = loadstring("require('lua/client/Vehicles/TimedActions/ISPathFindAction');return _G['ISPathFindAction']")()

--[lua/client/Vehicles/TimedActions/ISRechargeCarBattery.d.ts]
Exports.ISRechargeCarBattery = loadstring("require('lua/client/Vehicles/TimedActions/ISRechargeCarBattery');return _G['ISRechargeCarBattery']")()

--[lua/client/Vehicles/TimedActions/ISRefuelFromGasPump.d.ts]
Exports.ISRefuelFromGasPump = loadstring("require('lua/client/Vehicles/TimedActions/ISRefuelFromGasPump');return _G['ISRefuelFromGasPump']")()

--[lua/client/Vehicles/TimedActions/ISRemoveBurntVehicle.d.ts]
Exports.ISRemoveBurntVehicle = loadstring("require('lua/client/Vehicles/TimedActions/ISRemoveBurntVehicle');return _G['ISRemoveBurntVehicle']")()

--[lua/client/Vehicles/TimedActions/ISRepairEngine.d.ts]
Exports.ISRepairEngine = loadstring("require('lua/client/Vehicles/TimedActions/ISRepairEngine');return _G['ISRepairEngine']")()

--[lua/client/Vehicles/TimedActions/ISShutOffVehicleEngine.d.ts]
Exports.ISShutOffVehicleEngine = loadstring("require('lua/client/Vehicles/TimedActions/ISShutOffVehicleEngine');return _G['ISShutOffVehicleEngine']")()

--[lua/client/Vehicles/TimedActions/ISSmashVehicleWindow.d.ts]
Exports.ISSmashVehicleWindow = loadstring("require('lua/client/Vehicles/TimedActions/ISSmashVehicleWindow');return _G['ISSmashVehicleWindow']")()

--[lua/client/Vehicles/TimedActions/ISStartVehicleEngine.d.ts]
Exports.ISStartVehicleEngine = loadstring("require('lua/client/Vehicles/TimedActions/ISStartVehicleEngine');return _G['ISStartVehicleEngine']")()

--[lua/client/Vehicles/TimedActions/ISStopVehicle.d.ts]
Exports.ISStopVehicle = loadstring("require('lua/client/Vehicles/TimedActions/ISStopVehicle');return _G['ISStopVehicle']")()

--[lua/client/Vehicles/TimedActions/ISSwitchVehicleSeat.d.ts]
Exports.ISSwitchVehicleSeat = loadstring("require('lua/client/Vehicles/TimedActions/ISSwitchVehicleSeat');return _G['ISSwitchVehicleSeat']")()

--[lua/client/Vehicles/TimedActions/ISTakeEngineParts.d.ts]
Exports.ISTakeEngineParts = loadstring("require('lua/client/Vehicles/TimedActions/ISTakeEngineParts');return _G['ISTakeEngineParts']")()

--[lua/client/Vehicles/TimedActions/ISTakeGasolineFromVehicle.d.ts]
Exports.ISTakeGasolineFromVehicle = loadstring("require('lua/client/Vehicles/TimedActions/ISTakeGasolineFromVehicle');return _G['ISTakeGasolineFromVehicle']")()

--[lua/client/Vehicles/TimedActions/ISUninstallVehiclePart.d.ts]
Exports.ISUninstallVehiclePart = loadstring("require('lua/client/Vehicles/TimedActions/ISUninstallVehiclePart');return _G['ISUninstallVehiclePart']")()

--[lua/client/Vehicles/TimedActions/ISUnlockVehicleDoor.d.ts]
Exports.ISUnlockVehicleDoor = loadstring("require('lua/client/Vehicles/TimedActions/ISUnlockVehicleDoor');return _G['ISUnlockVehicleDoor']")()

--[lua/client/Vehicles/TimedActions/ISWashVehicle.d.ts]
Exports.ISWashVehicle = loadstring("require('lua/client/Vehicles/TimedActions/ISWashVehicle');return _G['ISWashVehicle']")()

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
