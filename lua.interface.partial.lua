local Exports = {}
-- [PARTIAL:START]
_G.PIPEWRENCH_READY = false
triggerEvent('OnPipeWrenchBoot', false)
Events.OnGameBoot.Add(function()

--[lua/client/Blacksmith/ISUI/ISBlacksmithMenu.d.ts]
  Exports.ISBlacksmithMenu = loadstring("return _G['ISBlacksmithMenu']")()

--[lua/client/Blacksmith/ISUI/ISFurnaceInfoWindow.d.ts]
  Exports.ISFurnaceInfoWindow = loadstring("return _G['ISFurnaceInfoWindow']")()

--[lua/client/Blacksmith/TimedActions/ISAddCoalInFurnace.d.ts]
  Exports.ISAddCoalInFurnace = loadstring("return _G['ISAddCoalInFurnace']")()

--[lua/client/Blacksmith/TimedActions/ISAddLogsInDrum.d.ts]
  Exports.ISAddLogsInDrum = loadstring("return _G['ISAddLogsInDrum']")()

--[lua/client/Blacksmith/TimedActions/ISDrumLightFromKindle.d.ts]
  Exports.ISDrumLightFromKindle = loadstring("return _G['ISDrumLightFromKindle']")()

--[lua/client/Blacksmith/TimedActions/ISDrumLightFromLiterature.d.ts]
  Exports.ISDrumLightFromLiterature = loadstring("return _G['ISDrumLightFromLiterature']")()

--[lua/client/Blacksmith/TimedActions/ISDrumLightFromPetrol.d.ts]
  Exports.ISDrumLightFromPetrol = loadstring("return _G['ISDrumLightFromPetrol']")()

--[lua/client/Blacksmith/TimedActions/ISEmptyDrum.d.ts]
  Exports.ISEmptyDrum = loadstring("return _G['ISEmptyDrum']")()

--[lua/client/Blacksmith/TimedActions/ISFurnaceInfoAction.d.ts]
  Exports.ISFurnaceInfoAction = loadstring("return _G['ISFurnaceInfoAction']")()

--[lua/client/Blacksmith/TimedActions/ISFurnaceLightFromKindle.d.ts]
  Exports.ISFurnaceLightFromKindle = loadstring("return _G['ISFurnaceLightFromKindle']")()

--[lua/client/Blacksmith/TimedActions/ISFurnaceLightFromLiterature.d.ts]
  Exports.ISFurnaceLightFromLiterature = loadstring("return _G['ISFurnaceLightFromLiterature']")()

--[lua/client/Blacksmith/TimedActions/ISFurnaceLightFromPetrol.d.ts]
  Exports.ISFurnaceLightFromPetrol = loadstring("return _G['ISFurnaceLightFromPetrol']")()

--[lua/client/Blacksmith/TimedActions/ISPutOutFireDrum.d.ts]
  Exports.ISPutOutFireDrum = loadstring("return _G['ISPutOutFireDrum']")()

--[lua/client/Blacksmith/TimedActions/ISRemoveCharcoal.d.ts]
  Exports.ISRemoveCharcoal = loadstring("return _G['ISRemoveCharcoal']")()

--[lua/client/Blacksmith/TimedActions/ISRemoveDrum.d.ts]
  Exports.ISRemoveDrum = loadstring("return _G['ISRemoveDrum']")()

--[lua/client/Blacksmith/TimedActions/ISStopFurnaceFire.d.ts]
  Exports.ISStopFurnaceFire = loadstring("return _G['ISStopFurnaceFire']")()

--[lua/client/Blacksmith/TimedActions/ISUseBellows.d.ts]
  Exports.ISUseBellows = loadstring("return _G['ISUseBellows']")()

--[lua/client/BuildingObjects/ISUI/ISBuildMenu.d.ts]
  Exports.ISBuildMenu = loadstring("return _G['ISBuildMenu']")()

--[lua/client/BuildingObjects/ISUI/ISInventoryBuildMenu.d.ts]
  Exports.ISInventoryBuildMenu = loadstring("return _G['ISInventoryBuildMenu']")()

--[lua/client/BuildingObjects/ISUI/ISPaintMenu.d.ts]
  Exports.ISPaintMenu = loadstring("return _G['ISPaintMenu']")()

--[lua/client/BuildingObjects/TimedActions/ISBuildAction.d.ts]
  Exports.ISBuildAction = loadstring("return _G['ISBuildAction']")()

--[lua/client/BuildingObjects/TimedActions/ISInsertLightSourceFuelAction.d.ts]
  Exports.ISInsertLightSourceFuelAction = loadstring("return _G['ISInsertLightSourceFuelAction']")()

--[lua/client/BuildingObjects/TimedActions/ISMultiStageBuild.d.ts]
  Exports.ISMultiStageBuild = loadstring("return _G['ISMultiStageBuild']")()

--[lua/client/BuildingObjects/TimedActions/ISPaintAction.d.ts]
  Exports.ISPaintAction = loadstring("return _G['ISPaintAction']")()

--[lua/client/BuildingObjects/TimedActions/ISPaintSignAction.d.ts]
  Exports.ISPaintSignAction = loadstring("return _G['ISPaintSignAction']")()

--[lua/client/BuildingObjects/TimedActions/ISPlasterAction.d.ts]
  Exports.ISPlasterAction = loadstring("return _G['ISPlasterAction']")()

--[lua/client/BuildingObjects/TimedActions/ISRemoveLightSourceFuelAction.d.ts]
  Exports.ISRemoveLightSourceFuelAction = loadstring("return _G['ISRemoveLightSourceFuelAction']")()

--[lua/client/BuildingObjects/TimedActions/ISShovelGround.d.ts]
  Exports.ISShovelGround = loadstring("return _G['ISShovelGround']")()

--[lua/client/BuildingObjects/TimedActions/ISToggleLightSourceAction.d.ts]
  Exports.ISToggleLightSourceAction = loadstring("return _G['ISToggleLightSourceAction']")()

--[lua/client/Camping/CCampfireGlobalObject.d.ts]
  Exports.CCampfireGlobalObject = loadstring("return _G['CCampfireGlobalObject']")()

--[lua/client/Camping/CCampfireSystem.d.ts]
  Exports.CCampfireSystem = loadstring("return _G['CCampfireSystem']")()

--[lua/client/Camping/ISUI/ISCampingInfoWindow.d.ts]
  Exports.ISCampingInfoWindow = loadstring("return _G['ISCampingInfoWindow']")()

--[lua/client/Camping/ISUI/ISCampingMenu.d.ts]
  Exports.ISCampingMenu = loadstring("return _G['ISCampingMenu']")()

--[lua/client/Camping/TimedActions/ISAddFuelAction.d.ts]
  Exports.ISAddFuelAction = loadstring("return _G['ISAddFuelAction']")()

--[lua/client/Camping/TimedActions/ISAddTentAction.d.ts]
  Exports.ISAddTentAction = loadstring("return _G['ISAddTentAction']")()

--[lua/client/Camping/TimedActions/ISLightFromKindle.d.ts]
  Exports.ISLightFromKindle = loadstring("return _G['ISLightFromKindle']")()

--[lua/client/Camping/TimedActions/ISLightFromLiterature.d.ts]
  Exports.ISLightFromLiterature = loadstring("return _G['ISLightFromLiterature']")()

--[lua/client/Camping/TimedActions/ISLightFromPetrol.d.ts]
  Exports.ISLightFromPetrol = loadstring("return _G['ISLightFromPetrol']")()

--[lua/client/Camping/TimedActions/ISPlaceCampfireAction.d.ts]
  Exports.ISPlaceCampfireAction = loadstring("return _G['ISPlaceCampfireAction']")()

--[lua/client/Camping/TimedActions/ISPutOutCampfireAction.d.ts]
  Exports.ISPutOutCampfireAction = loadstring("return _G['ISPutOutCampfireAction']")()

--[lua/client/Camping/TimedActions/ISRemoveCampfireAction.d.ts]
  Exports.ISRemoveCampfireAction = loadstring("return _G['ISRemoveCampfireAction']")()

--[lua/client/Camping/TimedActions/ISRemoveTentAction.d.ts]
  Exports.ISRemoveTentAction = loadstring("return _G['ISRemoveTentAction']")()

--[lua/client/Camping/TimedActions/ISSleepInTentAction.d.ts]
  Exports.ISSleepInTentAction = loadstring("return _G['ISSleepInTentAction']")()

--[lua/client/Chat/ISChat.d.ts]
  Exports.ISChat = loadstring("return _G['ISChat']")()

--[lua/client/Context/ISContextManager.d.ts]
  Exports.ISContextManager = loadstring("return _G['ISContextManager']")()

--[lua/client/Context/ISMenuContext.d.ts]
  Exports.ISMenuContext = loadstring("return _G['ISMenuContext']")()

--[lua/client/Context/ISMenuContextBuild.d.ts]
  Exports.ISMenuContextBuild = loadstring("return _G['ISMenuContextBuild']")()

--[lua/client/Context/ISMenuContextInventory.d.ts]
  Exports.ISMenuContextInventory = loadstring("return _G['ISMenuContextInventory']")()

--[lua/client/Context/ISMenuContextWorld.d.ts]
  Exports.ISMenuContextWorld = loadstring("return _G['ISMenuContextWorld']")()

--[lua/client/Context/ISMenuElement.d.ts]
  Exports.ISMenuElement = loadstring("return _G['ISMenuElement']")()

--[lua/client/Context/World/TestMarkers.d.ts]
  Exports.TestMarkers = loadstring("return _G['TestMarkers']")()

--[lua/client/DebugUIs/AdminContextMenu.d.ts]
  Exports.AdminContextMenu = loadstring("return _G['AdminContextMenu']")()

--[lua/client/DebugUIs/AnimationClipViewer.d.ts]
  Exports.AnimationClipViewer = loadstring("return _G['AnimationClipViewer']")()
  Exports.AnimationClipViewer_ListBox = loadstring("return _G['AnimationClipViewer_ListBox']")()
  Exports.AnimationClipViewer_OptionsPanel = loadstring("return _G['AnimationClipViewer_OptionsPanel']")()
  Exports.AnimationClipViewer_Scene = loadstring("return _G['AnimationClipViewer_Scene']")()
  Exports.AnimationClipViewer_Timeline = loadstring("return _G['AnimationClipViewer_Timeline']")()

--[lua/client/DebugUIs/AttachmentEditorUI.d.ts]
  Exports.AttachmentEditorUI = loadstring("return _G['AttachmentEditorUI']")()
  Exports.AttachmentEditorUI_EditAttachment = loadstring("return _G['AttachmentEditorUI_EditAttachment']")()
  Exports.AttachmentEditorUI_EditPanel = loadstring("return _G['AttachmentEditorUI_EditPanel']")()
  Exports.AttachmentEditorUI_ListBox = loadstring("return _G['AttachmentEditorUI_ListBox']")()
  Exports.AttachmentEditorUI_Scene = loadstring("return _G['AttachmentEditorUI_Scene']")()
  Exports.AttachmentEditorUI_SwitchView = loadstring("return _G['AttachmentEditorUI_SwitchView']")()
  Exports.AttachmentEditorUI_WorldAttachmentPanel = loadstring("return _G['AttachmentEditorUI_WorldAttachmentPanel']")()

--[lua/client/DebugUIs/BrushTool/BrushToolChooseTileUI.d.ts]
  Exports.BrushToolChooseTileUI = loadstring("return _G['BrushToolChooseTileUI']")()
  Exports.BrushToolTilePickerList = loadstring("return _G['BrushToolTilePickerList']")()

--[lua/client/DebugUIs/BrushTool/BrushToolManager.d.ts]
  Exports.BrushToolManager = loadstring("return _G['BrushToolManager']")()

--[lua/client/DebugUIs/BrushTool/FireBrushUI.d.ts]
  Exports.FireBrushUI = loadstring("return _G['FireBrushUI']")()

--[lua/client/DebugUIs/DebugChunkState/DebugChunkState_ObjectPickerPanel.d.ts]
  Exports.DebugChunkState_ObjectPickerPanel = loadstring("return _G['DebugChunkState_ObjectPickerPanel']")()

--[lua/client/DebugUIs/DebugChunkState/DebugChunkState_ObjectProperties.d.ts]
  Exports.DebugChunkStateUI_ObjPropsHandler = loadstring("return _G['DebugChunkStateUI_ObjPropsHandler']")()
  Exports.DebugChunkStateUI_ObjPropsPanel = loadstring("return _G['DebugChunkStateUI_ObjPropsPanel']")()

--[lua/client/DebugUIs/DebugChunkState/DebugChunkState_SquarePanel.d.ts]
  Exports.DebugChunkStateUI_SquarePanel = loadstring("return _G['DebugChunkStateUI_SquarePanel']")()
  Exports.DebugChunkStateUI_SquarePropsHandler = loadstring("return _G['DebugChunkStateUI_SquarePropsHandler']")()

--[lua/client/DebugUIs/DebugChunkState/DebugChunkState_Tools.d.ts]
  Exports.DebugChunkStateUI_DragCameraTool = loadstring("return _G['DebugChunkStateUI_DragCameraTool']")()
  Exports.DebugChunkStateUI_Tool = loadstring("return _G['DebugChunkStateUI_Tool']")()

--[lua/client/DebugUIs/DebugChunkState/DebugChunkState_VehicleStoryPanel.d.ts]
  Exports.DebugChunkState_VehicleStoryPanel = loadstring("return _G['DebugChunkState_VehicleStoryPanel']")()

--[lua/client/DebugUIs/DebugChunkState/DebugChunkStateUI.d.ts]
  Exports.DebugChunkStateUI = loadstring("return _G['DebugChunkStateUI']")()
  Exports.DebugChunkStateUI_OptionsPanel = loadstring("return _G['DebugChunkStateUI_OptionsPanel']")()

--[lua/client/DebugUIs/DebugChunkState/ISSectionedPanel.d.ts]
  Exports.ISSectionedPanel = loadstring("return _G['ISSectionedPanel']")()
  Exports.ISSectionedPanel_Section = loadstring("return _G['ISSectionedPanel_Section']")()

--[lua/client/DebugUIs/DebugContextMenu.d.ts]
  Exports.DebugContextMenu = loadstring("return _G['DebugContextMenu']")()

--[lua/client/DebugUIs/DebugErrorsWindow.d.ts]
  Exports.DebugErrorsWindow = loadstring("return _G['DebugErrorsWindow']")()

--[lua/client/DebugUIs/DebuggerContextMenu.d.ts]
  Exports.DebuggerContextMenu = loadstring("return _G['DebuggerContextMenu']")()

--[lua/client/DebugUIs/DebugGlobalObjectState/DebugGlobalObjectState_PropertiesPanel.d.ts]
  Exports.DebugGlobalObjectState_BasePropertiesPanel = loadstring("return _G['DebugGlobalObjectState_BasePropertiesPanel']")()
  Exports.DebugGlobalObjectState_GlobalObjectPanel = loadstring("return _G['DebugGlobalObjectState_GlobalObjectPanel']")()
  Exports.DebugGlobalObjectState_IsoObjectPanel = loadstring("return _G['DebugGlobalObjectState_IsoObjectPanel']")()
  Exports.DebugGlobalObjectState_PropertiesPanel = loadstring("return _G['DebugGlobalObjectState_PropertiesPanel']")()
  Exports.DebugGlobalObjectState_SystemPanel = loadstring("return _G['DebugGlobalObjectState_SystemPanel']")()

--[lua/client/DebugUIs/DebugGlobalObjectState/DebugGlobalObjectState_Tools.d.ts]
  Exports.DebugGlobalObjectStateUI_DragCameraTool = loadstring("return _G['DebugGlobalObjectStateUI_DragCameraTool']")()
  Exports.DebugGlobalObjectStateUI_Tool = loadstring("return _G['DebugGlobalObjectStateUI_Tool']")()

--[lua/client/DebugUIs/DebugGlobalObjectState/DebugGlobalObjectStateUI.d.ts]
  Exports.DebugGlobalObjectStateUI = loadstring("return _G['DebugGlobalObjectStateUI']")()

--[lua/client/DebugUIs/DebugLogSettings.d.ts]
  Exports.DebugLogSettings = loadstring("return _G['DebugLogSettings']")()

--[lua/client/DebugUIs/DebugMenu/Anims/FloatArrayPlotter.d.ts]
  Exports.FloatArrayPlotter = loadstring("return _G['FloatArrayPlotter']")()

--[lua/client/DebugUIs/DebugMenu/Anims/ISAnimDebugMonitor.d.ts]
  Exports.ISAnimDebugMonitor = loadstring("return _G['ISAnimDebugMonitor']")()

--[lua/client/DebugUIs/DebugMenu/Anims/ISAnimLoggerOutput.d.ts]
  Exports.ISAnimLoggerOutput = loadstring("return _G['ISAnimLoggerOutput']")()

--[lua/client/DebugUIs/DebugMenu/Base/ISDebugPanelBase.d.ts]
  Exports.ISDebugPanelBase = loadstring("return _G['ISDebugPanelBase']")()

--[lua/client/DebugUIs/DebugMenu/Base/ISDebugSubPanelBase.d.ts]
  Exports.ISDebugSubPanelBase = loadstring("return _G['ISDebugSubPanelBase']")()

--[lua/client/DebugUIs/DebugMenu/Climate/ClimateColorsDebug.d.ts]
  Exports.ClimateColorsDebug = loadstring("return _G['ClimateColorsDebug']")()

--[lua/client/DebugUIs/DebugMenu/Climate/ClimateControlDebug.d.ts]
  Exports.ClimateControlDebug = loadstring("return _G['ClimateControlDebug']")()

--[lua/client/DebugUIs/DebugMenu/Climate/ClimateDebug.d.ts]
  Exports.ClimateDebug = loadstring("return _G['ClimateDebug']")()

--[lua/client/DebugUIs/DebugMenu/Climate/ClimateOptionsDebug.d.ts]
  Exports.ClimateOptionsDebug = loadstring("return _G['ClimateOptionsDebug']")()

--[lua/client/DebugUIs/DebugMenu/Climate/ClimDebuggersPanel.d.ts]
  Exports.ClimDebuggersPanel = loadstring("return _G['ClimDebuggersPanel']")()

--[lua/client/DebugUIs/DebugMenu/Climate/DailyValuesDebug.d.ts]
  Exports.DailyValuesDebug = loadstring("return _G['DailyValuesDebug']")()

--[lua/client/DebugUIs/DebugMenu/Climate/ForecasterDebug.d.ts]
  Exports.ForecasterDebug = loadstring("return _G['ForecasterDebug']")()

--[lua/client/DebugUIs/DebugMenu/Climate/NewFogDebug.d.ts]
  Exports.NewFogDebug = loadstring("return _G['NewFogDebug']")()

--[lua/client/DebugUIs/DebugMenu/Climate/PlayerClimateDebug.d.ts]
  Exports.PlayerClimateDebug = loadstring("return _G['PlayerClimateDebug']")()

--[lua/client/DebugUIs/DebugMenu/Climate/PopupColorEdit.d.ts]
  Exports.PopupColorEdit = loadstring("return _G['PopupColorEdit']")()

--[lua/client/DebugUIs/DebugMenu/Climate/ThermoDebug.d.ts]
  Exports.ThermoDebug = loadstring("return _G['ThermoDebug']")()
  Exports.ThermoDebug = loadstring("return _G['ThermoDebug']")()

--[lua/client/DebugUIs/DebugMenu/Climate/ThunderDebug.d.ts]
  Exports.ThunderDebug = loadstring("return _G['ThunderDebug']")()

--[lua/client/DebugUIs/DebugMenu/Climate/ValuePlotter.d.ts]
  Exports.ValuePlotter = loadstring("return _G['ValuePlotter']")()

--[lua/client/DebugUIs/DebugMenu/Climate/WeatherFXDebug.d.ts]
  Exports.WeatherFXDebug = loadstring("return _G['WeatherFXDebug']")()

--[lua/client/DebugUIs/DebugMenu/Climate/WeatherPeriodDebug.d.ts]
  Exports.WeatherPeriodDebug = loadstring("return _G['WeatherPeriodDebug']")()

--[lua/client/DebugUIs/DebugMenu/Climate/WindDebug.d.ts]
  Exports.WindDebug = loadstring("return _G['WindDebug']")()

--[lua/client/DebugUIs/DebugMenu/General/ISCheatPanelUI.d.ts]
  Exports.ISCheatPanelUI = loadstring("return _G['ISCheatPanelUI']")()

--[lua/client/DebugUIs/DebugMenu/General/ISDebugBlood.d.ts]
  Exports.ISDebugBlood = loadstring("return _G['ISDebugBlood']")()

--[lua/client/DebugUIs/DebugMenu/General/ISGameDebugPanel.d.ts]
  Exports.ISGameDebugPanel = loadstring("return _G['ISGameDebugPanel']")()

--[lua/client/DebugUIs/DebugMenu/General/ISGeneralCheats.d.ts]
  Exports.ISGeneralCheats = loadstring("return _G['ISGeneralCheats']")()

--[lua/client/DebugUIs/DebugMenu/General/ISGeneralDebug.d.ts]
  Exports.ISGeneralDebug = loadstring("return _G['ISGeneralDebug']")()

--[lua/client/DebugUIs/DebugMenu/General/ISSearchMode.d.ts]
  Exports.ISSearchMode = loadstring("return _G['ISSearchMode']")()

--[lua/client/DebugUIs/DebugMenu/General/ISStatsAndBody.d.ts]
  Exports.ISStatsAndBody = loadstring("return _G['ISStatsAndBody']")()

--[lua/client/DebugUIs/DebugMenu/GlobalModData/GlobalModData.d.ts]
  Exports.GlobalModDataDebug = loadstring("return _G['GlobalModDataDebug']")()

--[lua/client/DebugUIs/DebugMenu/GlobalModData/GlobalModDataTest.d.ts]

--[lua/client/DebugUIs/DebugMenu/ISDebugMenu.d.ts]
  Exports.ISDebugMenu = loadstring("return _G['ISDebugMenu']")()

--[lua/client/DebugUIs/DebugMenu/ISDebugUtils.d.ts]
  Exports.ISDebugUtils = loadstring("return _G['ISDebugUtils']")()

--[lua/client/DebugUIs/DebugMenu/IsoRegions/IsoRegionDebug.d.ts]
  Exports.IsoRegionDebug = loadstring("return _G['IsoRegionDebug']")()

--[lua/client/DebugUIs/DebugMenu/IsoRegions/IsoRegionDetails.d.ts]
  Exports.IsoRegionDetails = loadstring("return _G['IsoRegionDetails']")()

--[lua/client/DebugUIs/DebugMenu/IsoRegions/IsoRegionLogWindow.d.ts]
  Exports.IsoRegionLogWindow = loadstring("return _G['IsoRegionLogWindow']")()

--[lua/client/DebugUIs/DebugMenu/IsoRegions/IsoRegionsWindow.d.ts]
  Exports.IsoRegionsWindow = loadstring("return _G['IsoRegionsWindow']")()

--[lua/client/DebugUIs/DebugMenu/Puddles/PuddlesControl.d.ts]
  Exports.PuddlesControl = loadstring("return _G['PuddlesControl']")()

--[lua/client/DebugUIs/DebugMenu/Puddles/PuddlesPeriodDebug.d.ts]
  Exports.PuddlesPeriodDebug = loadstring("return _G['PuddlesPeriodDebug']")()

--[lua/client/DebugUIs/DebugMenu/radio/RadioScriptDebugger.d.ts]
  Exports.RadioScriptDebugger = loadstring("return _G['RadioScriptDebugger']")()

--[lua/client/DebugUIs/DebugMenu/radio/ZomboidRadioDebug.d.ts]
  Exports.ZomboidRadioDebug = loadstring("return _G['ZomboidRadioDebug']")()

--[lua/client/DebugUIs/DebugMenu/Statistic/ISGameStatisticPanel.d.ts]
  Exports.ISGameStatisticPanel = loadstring("return _G['ISGameStatisticPanel']")()

--[lua/client/DebugUIs/DebugMenu/Statistic/StatisticChart.d.ts]
  Exports.StatisticChart = loadstring("return _G['StatisticChart']")()

--[lua/client/DebugUIs/DebugMenu/Statistic/StatisticChartDiskOperations.d.ts]
  Exports.StatisticChartDiskOperations = loadstring("return _G['StatisticChartDiskOperations']")()

--[lua/client/DebugUIs/DebugMenu/Statistic/StatisticChartMemory.d.ts]
  Exports.StatisticChartMemory = loadstring("return _G['StatisticChartMemory']")()

--[lua/client/DebugUIs/DebugMenu/Statistic/StatisticChartPackets.d.ts]
  Exports.StatisticChartPackets = loadstring("return _G['StatisticChartPackets']")()

--[lua/client/DebugUIs/DebugMenu/Statistic/StatisticChartUpdatePeriod.d.ts]
  Exports.StatisticChartUpdatePeriod = loadstring("return _G['StatisticChartUpdatePeriod']")()

--[lua/client/DebugUIs/DebugMenu/WorldFlares/WorldFlaresDebug.d.ts]
  Exports.WorldFlaresDebug = loadstring("return _G['WorldFlaresDebug']")()

--[lua/client/DebugUIs/DebugOptionsWindow.d.ts]
  Exports.DebugOptionsWindow = loadstring("return _G['DebugOptionsWindow']")()

--[lua/client/DebugUIs/DebugScenarios.d.ts]
  Exports.DebugScenarios = loadstring("return _G['DebugScenarios']")()

--[lua/client/DebugUIs/DebugToolstrip.d.ts]
  Exports.DebugToolstrip = loadstring("return _G['DebugToolstrip']")()

--[lua/client/DebugUIs/DeviceInspector.d.ts]
  Exports.DeviceInspector = loadstring("return _G['DeviceInspector']")()

--[lua/client/DebugUIs/ISAttachedItemsUI.d.ts]
  Exports.ISAttachedItemsUI = loadstring("return _G['ISAttachedItemsUI']")()

--[lua/client/DebugUIs/ISExtAnimListDebugUI.d.ts]
  Exports.ISExtAnimListDebugUI = loadstring("return _G['ISExtAnimListDebugUI']")()

--[lua/client/DebugUIs/ISFastTeleportMove.d.ts]
  Exports.ISFastTeleportMove = loadstring("return _G['ISFastTeleportMove']")()

--[lua/client/DebugUIs/ISLootStressTestUI.d.ts]
  Exports.ISLootStreetTestUI = loadstring("return _G['ISLootStreetTestUI']")()

--[lua/client/DebugUIs/ISRemoveItemTool.d.ts]
  Exports.ISRemoveItemTool = loadstring("return _G['ISRemoveItemTool']")()

--[lua/client/DebugUIs/ISRunningDebugUI.d.ts]
  Exports.ISRunningDebugUI = loadstring("return _G['ISRunningDebugUI']")()

--[lua/client/DebugUIs/ISSpawnHordeUI.d.ts]
  Exports.ISSpawnHordeUI = loadstring("return _G['ISSpawnHordeUI']")()

--[lua/client/DebugUIs/ISSpawnPointsEditor.d.ts]
  Exports.ISSpawnPointsEditor = loadstring("return _G['ISSpawnPointsEditor']")()

--[lua/client/DebugUIs/ISSpawnVehicleUI.d.ts]
  Exports.ISSpawnVehicleUI = loadstring("return _G['ISSpawnVehicleUI']")()

--[lua/client/DebugUIs/ISTeleportDebugUI.d.ts]
  Exports.ISTeleportDebugUI = loadstring("return _G['ISTeleportDebugUI']")()

--[lua/client/DebugUIs/ISTilesPickerDebugUI.d.ts]
  Exports.ISTilesPickerDebugUI = loadstring("return _G['ISTilesPickerDebugUI']")()
  Exports.ISTilesPickerTilesList = loadstring("return _G['ISTilesPickerTilesList']")()

--[lua/client/DebugUIs/ISTriggerThunderUI.d.ts]
  Exports.ISTriggerThunderUI = loadstring("return _G['ISTriggerThunderUI']")()

--[lua/client/DebugUIs/LuaDebugger.d.ts]
  Exports.LuaDebugger = loadstring("return _G['LuaDebugger']")()

--[lua/client/DebugUIs/LuaDebugOutput.d.ts]
  Exports.LuaDebugOutput = loadstring("return _G['LuaDebugOutput']")()

--[lua/client/DebugUIs/LuaFileBrowser.d.ts]
  Exports.LuaFileBrowser = loadstring("return _G['LuaFileBrowser']")()
  Exports.LuaFileBrowserList = loadstring("return _G['LuaFileBrowserList']")()

--[lua/client/DebugUIs/LuaThreadWindow.d.ts]
  Exports.LuaThreadWindow = loadstring("return _G['LuaThreadWindow']")()

--[lua/client/DebugUIs/MPDebugger.d.ts]
  Exports.MPDebugger = loadstring("return _G['MPDebugger']")()

--[lua/client/DebugUIs/ObjectViewer.d.ts]
  Exports.ObjectViewer = loadstring("return _G['ObjectViewer']")()

--[lua/client/DebugUIs/SourceWindow.d.ts]
  Exports.SourceWindow = loadstring("return _G['SourceWindow']")()

--[lua/client/DebugUIs/StashDebug.d.ts]
  Exports.StashDebug = loadstring("return _G['StashDebug']")()

--[lua/client/DebugUIs/StreamMapWindow.d.ts]
  Exports.StreamMapWindow = loadstring("return _G['StreamMapWindow']")()

--[lua/client/DebugUIs/TextureViewer.d.ts]
  Exports.TextureWindow = loadstring("return _G['TextureWindow']")()

--[lua/client/DebugUIs/WatchWindow.d.ts]
  Exports.WatchWindow = loadstring("return _G['WatchWindow']")()

--[lua/client/erosion/debug/DebugDemoTime.d.ts]

--[lua/client/erosion/debug/Point2D.d.ts]
  Exports.Point2D = loadstring("return _G['Point2D']")()

--[lua/client/Farming/CFarmingSystem.d.ts]
  Exports.CFarmingSystem = loadstring("return _G['CFarmingSystem']")()

--[lua/client/Farming/CPlantGlobalObject.d.ts]
  Exports.CPlantGlobalObject = loadstring("return _G['CPlantGlobalObject']")()

--[lua/client/Farming/ISUI/ISFarmingInfo.d.ts]
  Exports.ISFarmingInfo = loadstring("return _G['ISFarmingInfo']")()
  Exports.disease = loadstring("return _G['disease']")()
  Exports.disease_rgb = loadstring("return _G['disease_rgb']")()
  Exports.fertilizer_rgb = loadstring("return _G['fertilizer_rgb']")()
  Exports.health_rgb = loadstring("return _G['health_rgb']")()
  Exports.nowateredsince_rgb = loadstring("return _G['nowateredsince_rgb']")()
  Exports.title_rgb = loadstring("return _G['title_rgb']")()
  Exports.water_rgb = loadstring("return _G['water_rgb']")()
  Exports.waterbar_rgb = loadstring("return _G['waterbar_rgb']")()

--[lua/client/Farming/ISUI/ISFarmingMenu.d.ts]
  Exports.ISFarmingMenu = loadstring("return _G['ISFarmingMenu']")()

--[lua/client/Farming/ISUI/ISFarmingWindow.d.ts]
  Exports.ISFarmingWindow = loadstring("return _G['ISFarmingWindow']")()

--[lua/client/Farming/TimedActions/ISCureFliesAction.d.ts]
  Exports.ISCureFliesAction = loadstring("return _G['ISCureFliesAction']")()

--[lua/client/Farming/TimedActions/ISCureMildewAction.d.ts]
  Exports.ISCureMildewAction = loadstring("return _G['ISCureMildewAction']")()

--[lua/client/Farming/TimedActions/ISFertilizeAction.d.ts]
  Exports.ISFertilizeAction = loadstring("return _G['ISFertilizeAction']")()

--[lua/client/Farming/TimedActions/ISHarvestPlantAction.d.ts]
  Exports.ISHarvestPlantAction = loadstring("return _G['ISHarvestPlantAction']")()

--[lua/client/Farming/TimedActions/ISPlantInfoAction.d.ts]
  Exports.ISPlantInfoAction = loadstring("return _G['ISPlantInfoAction']")()

--[lua/client/Farming/TimedActions/ISPlowAction.d.ts]
  Exports.ISPlowAction = loadstring("return _G['ISPlowAction']")()

--[lua/client/Farming/TimedActions/ISSeedAction.d.ts]
  Exports.ISSeedAction = loadstring("return _G['ISSeedAction']")()

--[lua/client/Farming/TimedActions/ISShovelAction.d.ts]
  Exports.ISShovelAction = loadstring("return _G['ISShovelAction']")()

--[lua/client/Farming/TimedActions/ISWaterPlantAction.d.ts]
  Exports.ISWaterPlantAction = loadstring("return _G['ISWaterPlantAction']")()

--[lua/client/Fishing/TimedActions/ISCheckFishingNetAction.d.ts]
  Exports.ISCheckFishingNetAction = loadstring("return _G['ISCheckFishingNetAction']")()

--[lua/client/Fishing/TimedActions/ISFishingAction.d.ts]
  Exports.ISFishingAction = loadstring("return _G['ISFishingAction']")()

--[lua/client/Foraging/forageClient.d.ts]
  Exports.forageClient = loadstring("return _G['forageClient']")()
  Exports.forageData = loadstring("return _G['forageData']")()

--[lua/client/Foraging/ISBaseIcon.d.ts]
  Exports.ISBaseIcon = loadstring("return _G['ISBaseIcon']")()

--[lua/client/Foraging/ISForageAction.d.ts]
  Exports.ISForageAction = loadstring("return _G['ISForageAction']")()

--[lua/client/Foraging/ISForageIcon.d.ts]
  Exports.ISForageIcon = loadstring("return _G['ISForageIcon']")()

--[lua/client/Foraging/ISSearchManager.d.ts]
  Exports.ISSearchManager = loadstring("return _G['ISSearchManager']")()

--[lua/client/Foraging/ISSearchWindow.d.ts]
  Exports.ISSearchWindow = loadstring("return _G['ISSearchWindow']")()

--[lua/client/Foraging/ISWorldItemIcon.d.ts]
  Exports.ISWorldItemIcon = loadstring("return _G['ISWorldItemIcon']")()

--[lua/client/Foraging/ISZoneDisplay.d.ts]
  Exports.ISZoneDisplay = loadstring("return _G['ISZoneDisplay']")()

--[lua/client/Hotbar/ISHotbar.d.ts]
  Exports.ISHotbar = loadstring("return _G['ISHotbar']")()

--[lua/client/ISUI/AdminPanel/ISAddNonPvpZoneUI.d.ts]
  Exports.ISAddNonPvpZoneUI = loadstring("return _G['ISAddNonPvpZoneUI']")()

--[lua/client/ISUI/AdminPanel/ISAddSafeZoneUI.d.ts]
  Exports.ISAddSafeZoneUI = loadstring("return _G['ISAddSafeZoneUI']")()

--[lua/client/ISUI/AdminPanel/ISAdminMessage.d.ts]
  Exports.ISAdminMessage = loadstring("return _G['ISAdminMessage']")()

--[lua/client/ISUI/AdminPanel/ISAdminPanelUI.d.ts]
  Exports.ISAdminPanelUI = loadstring("return _G['ISAdminPanelUI']")()

--[lua/client/ISUI/AdminPanel/ISAdminPowerUI.d.ts]
  Exports.ISAdminPowerUI = loadstring("return _G['ISAdminPowerUI']")()

--[lua/client/ISUI/AdminPanel/ISAdminTicketsUI.d.ts]
  Exports.ISAdminTicketsUI = loadstring("return _G['ISAdminTicketsUI']")()

--[lua/client/ISUI/AdminPanel/ISAdminWeather.d.ts]
  Exports.ISAdminWeather = loadstring("return _G['ISAdminWeather']")()

--[lua/client/ISUI/AdminPanel/ISAdmPanelClimate.d.ts]
  Exports.ISAdmPanelClimate = loadstring("return _G['ISAdmPanelClimate']")()

--[lua/client/ISUI/AdminPanel/ISAdmPanelWeather.d.ts]
  Exports.ISAdmPanelWeather = loadstring("return _G['ISAdmPanelWeather']")()

--[lua/client/ISUI/AdminPanel/ISFactionsList.d.ts]
  Exports.ISFactionsList = loadstring("return _G['ISFactionsList']")()

--[lua/client/ISUI/AdminPanel/ISItemEditorUI.d.ts]
  Exports.ISItemEditorUI = loadstring("return _G['ISItemEditorUI']")()

--[lua/client/ISUI/AdminPanel/ISItemsListTable.d.ts]
  Exports.ISItemsListTable = loadstring("return _G['ISItemsListTable']")()

--[lua/client/ISUI/AdminPanel/ISItemsListViewer.d.ts]
  Exports.ISItemsListViewer = loadstring("return _G['ISItemsListViewer']")()

--[lua/client/ISUI/AdminPanel/ISMiniScoreboardUI.d.ts]
  Exports.ISMiniScoreboardUI = loadstring("return _G['ISMiniScoreboardUI']")()

--[lua/client/ISUI/AdminPanel/ISPacketCounts.d.ts]
  Exports.ISPacketCounts = loadstring("return _G['ISPacketCounts']")()
  Exports.ISPacketCountsList = loadstring("return _G['ISPacketCountsList']")()

--[lua/client/ISUI/AdminPanel/ISPvpZonePanel.d.ts]
  Exports.ISPvpZonePanel = loadstring("return _G['ISPvpZonePanel']")()

--[lua/client/ISUI/AdminPanel/ISSafehousesList.d.ts]
  Exports.ISSafehousesList = loadstring("return _G['ISSafehousesList']")()

--[lua/client/ISUI/AdminPanel/ISServerOptions.d.ts]
  Exports.ISServerOptions = loadstring("return _G['ISServerOptions']")()

--[lua/client/ISUI/AdminPanel/ISServerOptionsChange.d.ts]
  Exports.ISServerOptionsChange = loadstring("return _G['ISServerOptionsChange']")()

--[lua/client/ISUI/AdminPanel/ISServerSandboxOptionsUI.d.ts]
  Exports.ISServerSandboxOptionsUI = loadstring("return _G['ISServerSandboxOptionsUI']")()

--[lua/client/ISUI/AdminPanel/ISStatisticsUI.d.ts]
  Exports.ISStatisticsUI = loadstring("return _G['ISStatisticsUI']")()

--[lua/client/ISUI/AdminPanel/ISWhitelistModifyRow.d.ts]
  Exports.ISWhitelistModifyRow = loadstring("return _G['ISWhitelistModifyRow']")()

--[lua/client/ISUI/AdminPanel/ISWhitelistTable.d.ts]
  Exports.ISWhitelistTable = loadstring("return _G['ISWhitelistTable']")()

--[lua/client/ISUI/AdminPanel/ISWhitelistViewer.d.ts]
  Exports.ISWhitelistViewer = loadstring("return _G['ISWhitelistViewer']")()

--[lua/client/ISUI/AdminPanel/LootZed/ISLootZed.d.ts]
  Exports.ISLootZed = loadstring("return _G['ISLootZed']")()

--[lua/client/ISUI/AdminPanel/LootZed/SpawnRateChecker.d.ts]
  Exports.LootZedTool = loadstring("return _G['LootZedTool']")()

--[lua/client/ISUI/BodyParts/ISBodyPartPanel.d.ts]
  Exports.ISBodyPartPanel = loadstring("return _G['ISBodyPartPanel']")()

--[lua/client/ISUI/Fireplace/ISKnob.d.ts]
  Exports.ISKnob = loadstring("return _G['ISKnob']")()

--[lua/client/ISUI/Fireplace/ISMicrowaveUI.d.ts]
  Exports.ISMicrowaveUI = loadstring("return _G['ISMicrowaveUI']")()

--[lua/client/ISUI/Fireplace/ISOvenUI.d.ts]
  Exports.ISOvenUI = loadstring("return _G['ISOvenUI']")()

--[lua/client/ISUI/FPS.d.ts]
  Exports.ISFPS = loadstring("return _G['ISFPS']")()

--[lua/client/ISUI/InterpolationPeriodDebug.d.ts]
  Exports.InterpolationPeriodDebug = loadstring("return _G['InterpolationPeriodDebug']")()

--[lua/client/ISUI/InterpolationPlayerPeriodDebug.d.ts]
  Exports.InterpolationPlayerPeriodDebug = loadstring("return _G['InterpolationPlayerPeriodDebug']")()

--[lua/client/ISUI/ISAlarmClockDialog.d.ts]
  Exports.ISAlarmClockDialog = loadstring("return _G['ISAlarmClockDialog']")()

--[lua/client/ISUI/ISBackButtonWheel.d.ts]
  Exports.ISBackButtonWheel = loadstring("return _G['ISBackButtonWheel']")()

--[lua/client/ISUI/ISBBQInfoWindow.d.ts]
  Exports.ISBBQInfoWindow = loadstring("return _G['ISBBQInfoWindow']")()

--[lua/client/ISUI/ISBBQMenu.d.ts]
  Exports.ISBBQMenu = loadstring("return _G['ISBBQMenu']")()

--[lua/client/ISUI/ISBombTimerDialog.d.ts]
  Exports.ISBombTimerDialog = loadstring("return _G['ISBombTimerDialog']")()

--[lua/client/ISUI/ISButton.d.ts]
  Exports.ISButton = loadstring("return _G['ISButton']")()

--[lua/client/ISUI/ISButtonPrompt.d.ts]
  Exports.ISButtonPrompt = loadstring("return _G['ISButtonPrompt']")()

--[lua/client/ISUI/ISCollapsableModalRichText.d.ts]
  Exports.ISCollapsableModalRichText = loadstring("return _G['ISCollapsableModalRichText']")()

--[lua/client/ISUI/ISCollapsableWindow.d.ts]
  Exports.ISCollapsableWindow = loadstring("return _G['ISCollapsableWindow']")()

--[lua/client/ISUI/ISCollapsableWindowJoypad.d.ts]
  Exports.ISCollapsableWindowJoypad = loadstring("return _G['ISCollapsableWindowJoypad']")()

--[lua/client/ISUI/ISColorPicker.d.ts]
  Exports.ISColorPicker = loadstring("return _G['ISColorPicker']")()

--[lua/client/ISUI/ISComboBox.d.ts]
  Exports.ISComboBox = loadstring("return _G['ISComboBox']")()
  Exports.ISComboBoxEditor = loadstring("return _G['ISComboBoxEditor']")()
  Exports.ISComboBoxPopup = loadstring("return _G['ISComboBoxPopup']")()

--[lua/client/ISUI/ISConfirmMonitorSettingsDialog.d.ts]
  Exports.ISConfirmMonitorSettingsDialog = loadstring("return _G['ISConfirmMonitorSettingsDialog']")()

--[lua/client/ISUI/ISContextMenu.d.ts]
  Exports.ISContextMenu = loadstring("return _G['ISContextMenu']")()

--[lua/client/ISUI/ISControllerTestPanel.d.ts]
  Exports.ISControllerTestPanel = loadstring("return _G['ISControllerTestPanel']")()

--[lua/client/ISUI/ISCraftingCategoryUI.d.ts]
  Exports.ISCraftingCategoryUI = loadstring("return _G['ISCraftingCategoryUI']")()

--[lua/client/ISUI/ISCraftingUI.d.ts]
  Exports.ISCraftingUI = loadstring("return _G['ISCraftingUI']")()

--[lua/client/ISUI/ISDemoPopup.d.ts]
  Exports.ISDemoPopup = loadstring("return _G['ISDemoPopup']")()

--[lua/client/ISUI/ISDigitalCode.d.ts]
  Exports.ISDigitalCode = loadstring("return _G['ISDigitalCode']")()

--[lua/client/ISUI/ISDPadWheels.d.ts]
  Exports.ISDPadWheels = loadstring("return _G['ISDPadWheels']")()

--[lua/client/ISUI/ISDuplicateKeybindDialog.d.ts]
  Exports.ISDuplicateKeybindDialog = loadstring("return _G['ISDuplicateKeybindDialog']")()

--[lua/client/ISUI/ISEmoteRadialMenu.d.ts]
  Exports.ISEmoteRadialMenu = loadstring("return _G['ISEmoteRadialMenu']")()

--[lua/client/ISUI/ISEquippedItem.d.ts]
  Exports.ISEquippedItem = loadstring("return _G['ISEquippedItem']")()
  Exports.ISMapPopup = loadstring("return _G['ISMapPopup']")()
  Exports.ISMoveablesIconPopup = loadstring("return _G['ISMoveablesIconPopup']")()

--[lua/client/ISUI/ISFirearmRadialMenu.d.ts]
  Exports.ISFirearmRadialMenu = loadstring("return _G['ISFirearmRadialMenu']")()

--[lua/client/ISUI/ISFireplaceInfoWindow.d.ts]
  Exports.ISFireplaceInfoWindow = loadstring("return _G['ISFireplaceInfoWindow']")()

--[lua/client/ISUI/ISFireplaceMenu.d.ts]
  Exports.ISFireplaceMenu = loadstring("return _G['ISFireplaceMenu']")()

--[lua/client/ISUI/ISFishingUI.d.ts]
  Exports.ISFishingUI = loadstring("return _G['ISFishingUI']")()

--[lua/client/ISUI/ISFitnessUI.d.ts]
  Exports.ISFitnessUI = loadstring("return _G['ISFitnessUI']")()

--[lua/client/ISUI/ISGameLoadingUI.d.ts]
  Exports.ISGameLoadingUI = loadstring("return _G['ISGameLoadingUI']")()

--[lua/client/ISUI/ISGameSoundVolumeControl.d.ts]
  Exports.ISGameSoundVolumeControl = loadstring("return _G['ISGameSoundVolumeControl']")()

--[lua/client/ISUI/ISGarmentUI.d.ts]
  Exports.ISGarmentUI = loadstring("return _G['ISGarmentUI']")()

--[lua/client/ISUI/ISGeneratorInfoWindow.d.ts]
  Exports.ISGeneratorInfoWindow = loadstring("return _G['ISGeneratorInfoWindow']")()

--[lua/client/ISUI/ISGradientBar.d.ts]
  Exports.ISGradientBar = loadstring("return _G['ISGradientBar']")()

--[lua/client/ISUI/ISImage.d.ts]
  Exports.ISImage = loadstring("return _G['ISImage']")()

--[lua/client/ISUI/ISInfoContainer.d.ts]
  Exports.ISInfoContainer = loadstring("return _G['ISInfoContainer']")()

--[lua/client/ISUI/ISInventoryPage.d.ts]
  Exports.ISInventoryPage = loadstring("return _G['ISInventoryPage']")()

--[lua/client/ISUI/ISInventoryPane.d.ts]
  Exports.ISInventoryPane = loadstring("return _G['ISInventoryPane']")()
  Exports.ISInventoryPaneDraggedItems = loadstring("return _G['ISInventoryPaneDraggedItems']")()

--[lua/client/ISUI/ISInventoryPaneContextMenu.d.ts]
  Exports.ISInventoryPaneContextMenu = loadstring("return _G['ISInventoryPaneContextMenu']")()

--[lua/client/ISUI/ISJoystickButtonRadialMenu.d.ts]
  Exports.ISJoystickButtonRadialMenu = loadstring("return _G['ISJoystickButtonRadialMenu']")()

--[lua/client/ISUI/ISLabel.d.ts]
  Exports.ISLabel = loadstring("return _G['ISLabel']")()

--[lua/client/ISUI/ISLayoutManager.d.ts]
  Exports.ISLayoutManager = loadstring("return _G['ISLayoutManager']")()

--[lua/client/ISUI/ISLcdBar.d.ts]
  Exports.ISLcdBar = loadstring("return _G['ISLcdBar']")()

--[lua/client/ISUI/ISLightSourceRadialMenu.d.ts]
  Exports.ISLightSourceRadialMenu = loadstring("return _G['ISLightSourceRadialMenu']")()

--[lua/client/ISUI/ISLiteratureUI.d.ts]
  Exports.ISLiteratureList = loadstring("return _G['ISLiteratureList']")()
  Exports.ISLiteratureMediaList = loadstring("return _G['ISLiteratureMediaList']")()
  Exports.ISLiteratureUI = loadstring("return _G['ISLiteratureUI']")()

--[lua/client/ISUI/ISMakeUpUI.d.ts]
  Exports.ISMakeUpUI = loadstring("return _G['ISMakeUpUI']")()

--[lua/client/ISUI/ISMegaVolumeControl.d.ts]
  Exports.ISMegaVolumeControl = loadstring("return _G['ISMegaVolumeControl']")()

--[lua/client/ISUI/ISModalDialog.d.ts]
  Exports.ISModalDialog = loadstring("return _G['ISModalDialog']")()

--[lua/client/ISUI/ISModalRichText.d.ts]
  Exports.ISModalRichText = loadstring("return _G['ISModalRichText']")()

--[lua/client/ISUI/ISMouseDrag.d.ts]
  Exports.ISMouseDrag = loadstring("return _G['ISMouseDrag']")()

--[lua/client/ISUI/ISMoveableInfoWindow.d.ts]
  Exports.ISMoveableInfoWindow = loadstring("return _G['ISMoveableInfoWindow']")()

--[lua/client/ISUI/ISNewsUpdate.d.ts]
  Exports.ISNewsUpdate = loadstring("return _G['ISNewsUpdate']")()

--[lua/client/ISUI/ISOnScreenKeyboard.d.ts]
  Exports.ISOnScreenKeyboard = loadstring("return _G['ISOnScreenKeyboard']")()
  Exports.OnScreenKeyboardEntry = loadstring("return _G['OnScreenKeyboardEntry']")()
  Exports.OnScreenKeyboardPanel = loadstring("return _G['OnScreenKeyboardPanel']")()
  Exports.OnScreenKeyboard = loadstring("return _G['OnScreenKeyboard']")()

--[lua/client/ISUI/ISOptionPanel.d.ts]
  Exports.ISOptionPanel = loadstring("return _G['ISOptionPanel']")()

--[lua/client/ISUI/ISPanel.d.ts]
  Exports.ISPanel = loadstring("return _G['ISPanel']")()

--[lua/client/ISUI/ISPanelJoypad.d.ts]
  Exports.ISPanelJoypad = loadstring("return _G['ISPanelJoypad']")()

--[lua/client/ISUI/ISPauseModListUI.d.ts]
  Exports.ISPauseModListUI = loadstring("return _G['ISPauseModListUI']")()
  Exports.PauseBuggedModList = loadstring("return _G['PauseBuggedModList']")()

--[lua/client/ISUI/ISPostDeathUI.d.ts]
  Exports.ISPostDeathUI = loadstring("return _G['ISPostDeathUI']")()

--[lua/client/ISUI/ISRadialMenu.d.ts]
  Exports.ISRadialMenu = loadstring("return _G['ISRadialMenu']")()

--[lua/client/ISUI/ISRadialProgressBar.d.ts]
  Exports.ISRadialProgressBar = loadstring("return _G['ISRadialProgressBar']")()

--[lua/client/ISUI/ISRadioButtons.d.ts]
  Exports.ISRadioButtons = loadstring("return _G['ISRadioButtons']")()

--[lua/client/ISUI/ISRadioOption.d.ts]
  Exports.ISRadioOption = loadstring("return _G['ISRadioOption']")()

--[lua/client/ISUI/ISRainPanel.d.ts]
  Exports.ISRainPanel = loadstring("return _G['ISRainPanel']")()

--[lua/client/ISUI/ISRect.d.ts]
  Exports.ISRect = loadstring("return _G['ISRect']")()

--[lua/client/ISUI/ISResizeableButton.d.ts]
  Exports.ISResizableButton = loadstring("return _G['ISResizableButton']")()

--[lua/client/ISUI/ISResizeWidget.d.ts]
  Exports.ISResizeWidget = loadstring("return _G['ISResizeWidget']")()

--[lua/client/ISUI/ISRichTextBox.d.ts]
  Exports.ISRichTextBox = loadstring("return _G['ISRichTextBox']")()

--[lua/client/ISUI/ISRichTextPanel.d.ts]
  Exports.ISRichTextPanel = loadstring("return _G['ISRichTextPanel']")()

--[lua/client/ISUI/ISSafetyUI.d.ts]
  Exports.ISSafetyUI = loadstring("return _G['ISSafetyUI']")()

--[lua/client/ISUI/ISScavengeUI.d.ts]
  Exports.ISScavengeUI = loadstring("return _G['ISScavengeUI']")()

--[lua/client/ISUI/ISScrollBar.d.ts]
  Exports.ISScrollBar = loadstring("return _G['ISScrollBar']")()

--[lua/client/ISUI/ISScrollingListBox.d.ts]
  Exports.ISScrollingListBox = loadstring("return _G['ISScrollingListBox']")()

--[lua/client/ISUI/ISServerDisconnectUI.d.ts]
  Exports.ISServerDisconnectUI = loadstring("return _G['ISServerDisconnectUI']")()

--[lua/client/ISUI/ISServerSavingMessage.d.ts]
  Exports.ISServerSavingMessage = loadstring("return _G['ISServerSavingMessage']")()

--[lua/client/ISUI/ISSetKeybindDialog.d.ts]
  Exports.ISSetKeybindDialog = loadstring("return _G['ISSetKeybindDialog']")()

--[lua/client/ISUI/ISSleepDialog.d.ts]
  Exports.ISSleepDialog = loadstring("return _G['ISSleepDialog']")()

--[lua/client/ISUI/ISSpinBox.d.ts]
  Exports.ISSpinBox = loadstring("return _G['ISSpinBox']")()

--[lua/client/ISUI/ISTabPanel.d.ts]
  Exports.ISTabPanel = loadstring("return _G['ISTabPanel']")()

--[lua/client/ISUI/ISTextBox.d.ts]
  Exports.ISTextBox = loadstring("return _G['ISTextBox']")()

--[lua/client/ISUI/ISTextEntryBox.d.ts]
  Exports.ISTextEntryBox = loadstring("return _G['ISTextEntryBox']")()

--[lua/client/ISUI/ISTickBox.d.ts]
  Exports.ISTickBox = loadstring("return _G['ISTickBox']")()

--[lua/client/ISUI/ISToolTip.d.ts]
  Exports.ISToolTip = loadstring("return _G['ISToolTip']")()

--[lua/client/ISUI/ISToolTipInv.d.ts]
  Exports.ISToolTipInv = loadstring("return _G['ISToolTipInv']")()

--[lua/client/ISUI/ISTradingUI.d.ts]
  Exports.ISTradingUI = loadstring("return _G['ISTradingUI']")()

--[lua/client/ISUI/ISTradingUIHistorial.d.ts]
  Exports.ISTradingUIHistorical = loadstring("return _G['ISTradingUIHistorical']")()

--[lua/client/ISUI/ISUI3DModel.d.ts]
  Exports.ISUI3DModel = loadstring("return _G['ISUI3DModel']")()

--[lua/client/ISUI/ISUIElement.d.ts]
  Exports.ISUIElement = loadstring("return _G['ISUIElement']")()

--[lua/client/ISUI/ISUIEmoteConfig.d.ts]
  Exports.ISUIEmoteConfig = loadstring("return _G['ISUIEmoteConfig']")()

--[lua/client/ISUI/ISUIHandler.d.ts]
  Exports.ISUIHandler = loadstring("return _G['ISUIHandler']")()

--[lua/client/ISUI/ISUIWriteJournal.d.ts]
  Exports.ISUIWriteJournal = loadstring("return _G['ISUIWriteJournal']")()

--[lua/client/ISUI/ISVehicleConfirmBox.d.ts]
  Exports.ISVehicleConfirmBox = loadstring("return _G['ISVehicleConfirmBox']")()
  Exports.ISVehiclePartListBox = loadstring("return _G['ISVehiclePartListBox']")()

--[lua/client/ISUI/ISVolumeControl.d.ts]
  Exports.ISVolumeControl = loadstring("return _G['ISVolumeControl']")()

--[lua/client/ISUI/ISVolumeIndicator.d.ts]
  Exports.ISVolumeIndicator = loadstring("return _G['ISVolumeIndicator']")()

--[lua/client/ISUI/ISWindow.d.ts]
  Exports.ISWindow = loadstring("return _G['ISWindow']")()

--[lua/client/ISUI/ISWorldObjectContextMenu.d.ts]
  Exports.ISWorldObjectContextMenu = loadstring("return _G['ISWorldObjectContextMenu']")()

--[lua/client/ISUI/Maps/Editor/WorldMapEditor.d.ts]
  Exports.WorldMapEditor = loadstring("return _G['WorldMapEditor']")()

--[lua/client/ISUI/Maps/Editor/WorldMapEditorListBox.d.ts]
  Exports.WorldMapEditorListBox = loadstring("return _G['WorldMapEditorListBox']")()

--[lua/client/ISUI/Maps/Editor/WorldMapEditorLocationControl.d.ts]
  Exports.WorldMapEditorLocationControl = loadstring("return _G['WorldMapEditorLocationControl']")()

--[lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Annotations.d.ts]
  Exports.WorldMapEditorMode_Annotations = loadstring("return _G['WorldMapEditorMode_Annotations']")()

--[lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Bounds.d.ts]
  Exports.WorldMapEditorMode_Bounds = loadstring("return _G['WorldMapEditorMode_Bounds']")()

--[lua/client/ISUI/Maps/Editor/WorldMapEditorMode_DataFiles.d.ts]
  Exports.WorldMapEditorMode_DataFiles = loadstring("return _G['WorldMapEditorMode_DataFiles']")()

--[lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Maps.d.ts]
  Exports.WorldMapEditorMode_Maps = loadstring("return _G['WorldMapEditorMode_Maps']")()

--[lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Stashes.d.ts]
  Exports.WorldMapEditorMode_Stashes = loadstring("return _G['WorldMapEditorMode_Stashes']")()

--[lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Style.d.ts]
  Exports.WorldMapEditorMode_Style = loadstring("return _G['WorldMapEditorMode_Style']")()
  Exports.WorldMapStyleEditor = loadstring("return _G['WorldMapStyleEditor']")()
  Exports.WorldMapStyleEditor_ColorStopsPanel = loadstring("return _G['WorldMapStyleEditor_ColorStopsPanel']")()
  Exports.WorldMapStyleEditor_FilterPanel = loadstring("return _G['WorldMapStyleEditor_FilterPanel']")()
  Exports.WorldMapStyleEditor_PolygonLayerPanel = loadstring("return _G['WorldMapStyleEditor_PolygonLayerPanel']")()
  Exports.WorldMapStyleEditor_TabPanel = loadstring("return _G['WorldMapStyleEditor_TabPanel']")()
  Exports.WorldMapStyleEditor_TextureLayerPanel = loadstring("return _G['WorldMapStyleEditor_TextureLayerPanel']")()
  Exports.WorldMapStyleEditor_TexturePanel = loadstring("return _G['WorldMapStyleEditor_TexturePanel']")()
  Exports.WorldMapStyleEditor_TextureStopsPanel = loadstring("return _G['WorldMapStyleEditor_TextureStopsPanel']")()

--[lua/client/ISUI/Maps/Editor/WorldMapEditorMode.d.ts]
  Exports.WorldMapEditorMode = loadstring("return _G['WorldMapEditorMode']")()

--[lua/client/ISUI/Maps/Editor/WorldMapEditorResizer.d.ts]
  Exports.WorldMapEditorResizer = loadstring("return _G['WorldMapEditorResizer']")()

--[lua/client/ISUI/Maps/ISMap.d.ts]
  Exports.ISMap = loadstring("return _G['ISMap']")()
  Exports.ISMapWrapper = loadstring("return _G['ISMapWrapper']")()

--[lua/client/ISUI/Maps/ISMapDefinitions.d.ts]
  Exports.LootMaps = loadstring("return _G['LootMaps']")()
  Exports.MapUtils = loadstring("return _G['MapUtils']")()

--[lua/client/ISUI/Maps/ISMiniMap.d.ts]
  Exports.ISMiniMapInner = loadstring("return _G['ISMiniMapInner']")()
  Exports.ISMiniMapOuter = loadstring("return _G['ISMiniMapOuter']")()
  Exports.ISMiniMapTitleBar = loadstring("return _G['ISMiniMapTitleBar']")()
  Exports.ISMiniMap = loadstring("return _G['ISMiniMap']")()

--[lua/client/ISUI/Maps/ISTextBoxMap.d.ts]
  Exports.ISTextBoxMap = loadstring("return _G['ISTextBoxMap']")()

--[lua/client/ISUI/Maps/ISWorldMap.d.ts]
  Exports.ISWorldMap = loadstring("return _G['ISWorldMap']")()
  Exports.ISWorldMapButtonPanel = loadstring("return _G['ISWorldMapButtonPanel']")()
  Exports.WorldMapOptions = loadstring("return _G['WorldMapOptions']")()

--[lua/client/ISUI/Maps/ISWorldMapSymbols.d.ts]
  Exports.ISWorldMapSymbols = loadstring("return _G['ISWorldMapSymbols']")()
  Exports.ISWorldMapSymbolTool = loadstring("return _G['ISWorldMapSymbolTool']")()
  Exports.ISWorldMapSymbolTool_AddNote = loadstring("return _G['ISWorldMapSymbolTool_AddNote']")()
  Exports.ISWorldMapSymbolTool_AddSymbol = loadstring("return _G['ISWorldMapSymbolTool_AddSymbol']")()
  Exports.ISWorldMapSymbolTool_EditNote = loadstring("return _G['ISWorldMapSymbolTool_EditNote']")()
  Exports.ISWorldMapSymbolTool_MoveAnnotation = loadstring("return _G['ISWorldMapSymbolTool_MoveAnnotation']")()
  Exports.ISWorldMapSymbolTool_RemoveAnnotation = loadstring("return _G['ISWorldMapSymbolTool_RemoveAnnotation']")()

--[lua/client/ISUI/PlayerData/ISPlayerData.d.ts]
  Exports.ISPlayerData = loadstring("return _G['ISPlayerData']")()

--[lua/client/ISUI/PlayerData/ISPlayerDataObject.d.ts]
  Exports.ISPlayerDataObject = loadstring("return _G['ISPlayerDataObject']")()

--[lua/client/ISUI/PlayerStats/ISPlayerStatsAddXPUI.d.ts]
  Exports.ISPlayerStatsAddXPUI = loadstring("return _G['ISPlayerStatsAddXPUI']")()

--[lua/client/ISUI/PlayerStats/ISPlayerStatsChooseAccessLevel.d.ts]
  Exports.ISPlayerStatsChooseAccessLevelUI = loadstring("return _G['ISPlayerStatsChooseAccessLevelUI']")()

--[lua/client/ISUI/PlayerStats/ISPlayerStatsChooseProfessionUI.d.ts]
  Exports.ISPlayerStatsChooseProfessionUI = loadstring("return _G['ISPlayerStatsChooseProfessionUI']")()

--[lua/client/ISUI/PlayerStats/ISPlayerStatsChooseTraitUI.d.ts]
  Exports.ISPlayerStatsChooseTraitUI = loadstring("return _G['ISPlayerStatsChooseTraitUI']")()

--[lua/client/ISUI/PlayerStats/ISPlayerStatsManageInvUI.d.ts]
  Exports.ISPlayerStatsManageInvUI = loadstring("return _G['ISPlayerStatsManageInvUI']")()

--[lua/client/ISUI/PlayerStats/ISPlayerStatsUI.d.ts]
  Exports.ISPlayerStatsUI = loadstring("return _G['ISPlayerStatsUI']")()

--[lua/client/ISUI/PlayerStats/ISPlayerStatsUserlogUI.d.ts]
  Exports.ISPlayerStatsUserlogUI = loadstring("return _G['ISPlayerStatsUserlogUI']")()

--[lua/client/ISUI/PlayerStats/ISPlayerStatsWarningPointUI.d.ts]
  Exports.ISPlayerStatsWarningPointUI = loadstring("return _G['ISPlayerStatsWarningPointUI']")()

--[lua/client/ISUI/RichTextLayout.d.ts]
  Exports.ISRichTextLayout = loadstring("return _G['ISRichTextLayout']")()

--[lua/client/ISUI/SpeedControlsHandler.d.ts]
  Exports.SpeedControlsHandler = loadstring("return _G['SpeedControlsHandler']")()

--[lua/client/ISUI/UserPanel/ISCreateFactionTagUI.d.ts]
  Exports.ISCreateFactionTagUI = loadstring("return _G['ISCreateFactionTagUI']")()

--[lua/client/ISUI/UserPanel/ISCreateFactionUI.d.ts]
  Exports.ISCreateFactionUI = loadstring("return _G['ISCreateFactionUI']")()

--[lua/client/ISUI/UserPanel/ISFactionAddPlayerUI.d.ts]
  Exports.ISFactionAddPlayerUI = loadstring("return _G['ISFactionAddPlayerUI']")()

--[lua/client/ISUI/UserPanel/ISFactionUI.d.ts]
  Exports.ISFactionUI = loadstring("return _G['ISFactionUI']")()

--[lua/client/ISUI/UserPanel/ISSafehouseAddPlayerUI.d.ts]
  Exports.ISSafehouseAddPlayerUI = loadstring("return _G['ISSafehouseAddPlayerUI']")()

--[lua/client/ISUI/UserPanel/ISSafehouseUI.d.ts]
  Exports.ISSafehouseUI = loadstring("return _G['ISSafehouseUI']")()

--[lua/client/ISUI/UserPanel/ISTicketsUI.d.ts]
  Exports.ISTicketsUI = loadstring("return _G['ISTicketsUI']")()

--[lua/client/ISUI/UserPanel/ISUserPanelUI.d.ts]
  Exports.ISUserPanelUI = loadstring("return _G['ISUserPanelUI']")()

--[lua/client/ISUI/ZombiePopulationWindow.d.ts]
  Exports.ZombiePopulationWindow = loadstring("return _G['ZombiePopulationWindow']")()

--[lua/client/JoyPad/ISJoypadDebugUI.d.ts]
  Exports.ISJoypadDebugUI = loadstring("return _G['ISJoypadDebugUI']")()

--[lua/client/JoyPad/ISJoypadDisconnectedUI.d.ts]
  Exports.ISJoypadDisconnectedUI = loadstring("return _G['ISJoypadDisconnectedUI']")()

--[lua/client/JoyPad/ISJoyPadListBox.d.ts]
  Exports.ISJoypadListBox = loadstring("return _G['ISJoypadListBox']")()

--[lua/client/LastStand/AReallyCDDAy.d.ts]
  Exports.CDDA = loadstring("return _G['CDDA']")()

--[lua/client/LastStand/AStormIsComing.d.ts]
  Exports.AStormIsComing = loadstring("return _G['AStormIsComing']")()

--[lua/client/LastStand/Challenge1.d.ts]
  Exports.Challenge1 = loadstring("return _G['Challenge1']")()

--[lua/client/LastStand/Challenge2.d.ts]
  Exports.Challenge2 = loadstring("return _G['Challenge2']")()

--[lua/client/LastStand/EightMonthsLater.d.ts]
  Exports.EightMonthsLater = loadstring("return _G['EightMonthsLater']")()

--[lua/client/LastStand/Insomnia.d.ts]
  Exports.InsomniaChallenge = loadstring("return _G['InsomniaChallenge']")()

--[lua/client/LastStand/ISUI/ISChallenge2PlayerUpWindow.d.ts]
  Exports.ISChallenge2PlayerUpWindow = loadstring("return _G['ISChallenge2PlayerUpWindow']")()

--[lua/client/LastStand/ISUI/ISChallenge2UpgradeTab.d.ts]
  Exports.ISChallenge2UpgradeTab = loadstring("return _G['ISChallenge2UpgradeTab']")()

--[lua/client/LastStand/ISUI/ISChallenge2VariousItemWindow.d.ts]
  Exports.ISChallenge2VariousItemWindow = loadstring("return _G['ISChallenge2VariousItemWindow']")()

--[lua/client/LastStand/ISUI/ISChallenge2WeaponRepairWindow.d.ts]
  Exports.ISChallenge2WeaponRepairWindow = loadstring("return _G['ISChallenge2WeaponRepairWindow']")()

--[lua/client/LastStand/ISUI/ISChallenge2WeaponUpWindow.d.ts]
  Exports.ISChallenge2WeaponUpWindow = loadstring("return _G['ISChallenge2WeaponUpWindow']")()

--[lua/client/LastStand/Kingsmouth.d.ts]
  Exports.Kingsmouth = loadstring("return _G['Kingsmouth']")()

--[lua/client/LastStand/LastStandPlayerFile.d.ts]
  Exports.LastStandPlayerFile = loadstring("return _G['LastStandPlayerFile']")()

--[lua/client/LastStand/LastStandSetup.d.ts]
  Exports.LastStandData = loadstring("return _G['LastStandData']")()

--[lua/client/LastStand/OpeningHours.d.ts]
  Exports.OpeningHours = loadstring("return _G['OpeningHours']")()

--[lua/client/LastStand/Studio.d.ts]
  Exports.Studio = loadstring("return _G['Studio']")()

--[lua/client/LastStand/TheDescendingFog.d.ts]
  Exports.TheDescendingFog = loadstring("return _G['TheDescendingFog']")()

--[lua/client/LastStand/WinterIsComing.d.ts]
  Exports.WinterIsComing = loadstring("return _G['WinterIsComing']")()

--[lua/client/LastStand/YouHaveOneDay.d.ts]
  Exports.YouHaveOneDay = loadstring("return _G['YouHaveOneDay']")()

--[lua/client/Map/CGlobalObject.d.ts]
  Exports.CGlobalObject = loadstring("return _G['CGlobalObject']")()

--[lua/client/Map/CGlobalObjectSystem.d.ts]
  Exports.CGlobalObjectSystem = loadstring("return _G['CGlobalObjectSystem']")()

--[lua/client/MetalDrum/CMetalDrumGlobalObject.d.ts]
  Exports.CMetalDrumGlobalObject = loadstring("return _G['CMetalDrumGlobalObject']")()

--[lua/client/MetalDrum/CMetalDrumSystem.d.ts]
  Exports.CMetalDrumSystem = loadstring("return _G['CMetalDrumSystem']")()

--[lua/client/Moveables/ISMoveableDefinitions.d.ts]
  Exports.ISMoveableDefinitions = loadstring("return _G['ISMoveableDefinitions']")()

--[lua/client/Moveables/ISMoveablesAction.d.ts]
  Exports.ISMoveablesAction = loadstring("return _G['ISMoveablesAction']")()

--[lua/client/Moveables/ISMoveablesIconToolTip.d.ts]
  Exports.ISMoveablesIconToolTip = loadstring("return _G['ISMoveablesIconToolTip']")()

--[lua/client/Moveables/ISMoveableSpriteProps.d.ts]
  Exports.InfoPanelFlags = loadstring("return _G['InfoPanelFlags']")()
  Exports.ISMoveableSpriteProps = loadstring("return _G['ISMoveableSpriteProps']")()
  Exports.ISThumpableSpriteProps = loadstring("return _G['ISThumpableSpriteProps']")()
  Exports.SpriteGridCache = loadstring("return _G['SpriteGridCache']")()

--[lua/client/Moveables/ISMoveableTools.d.ts]
  Exports.ISMoveableTools = loadstring("return _G['ISMoveableTools']")()

--[lua/client/Music/MusicChoices.d.ts]
  Exports.MusicChoices = loadstring("return _G['MusicChoices']")()

--[lua/client/NPCs/UI/CharacterInfoPage.d.ts]
  Exports.CharacterInfoPage = loadstring("return _G['CharacterInfoPage']")()

--[lua/client/NPCs/UI/TeamOverview.d.ts]
  Exports.TeamOverview = loadstring("return _G['TeamOverview']")()

--[lua/client/NPCs/UI/TeamPicker.d.ts]
  Exports.TeamPicker = loadstring("return _G['TeamPicker']")()

--[lua/client/OptionScreens/BootstrapConnectPopup.d.ts]
  Exports.BootstrapConnectPopup = loadstring("return _G['BootstrapConnectPopup']")()

--[lua/client/OptionScreens/CharacterCreationHeader.d.ts]
  Exports.CharacterCreationHeader = loadstring("return _G['CharacterCreationHeader']")()

--[lua/client/OptionScreens/CharacterCreationMain.d.ts]
  Exports.CharacterCreationMain = loadstring("return _G['CharacterCreationMain']")()
  Exports.CharacterCreationMainCharacterPanel = loadstring("return _G['CharacterCreationMainCharacterPanel']")()
  Exports.CharacterCreationMainPresetPanel = loadstring("return _G['CharacterCreationMainPresetPanel']")()

--[lua/client/OptionScreens/CharacterCreationProfession.d.ts]
  Exports.CharacterCreationProfession = loadstring("return _G['CharacterCreationProfession']")()
  Exports.BCRC = loadstring("return _G['BCRC']")()

--[lua/client/OptionScreens/ConnectToServer.d.ts]
  Exports.ConnectToServer = loadstring("return _G['ConnectToServer']")()

--[lua/client/OptionScreens/CoopCharacterCreation.d.ts]
  Exports.CoopCharacterCreation = loadstring("return _G['CoopCharacterCreation']")()

--[lua/client/OptionScreens/CoopCharacterCreationMain.d.ts]
  Exports.CoopCharacterCreationMain = loadstring("return _G['CoopCharacterCreationMain']")()

--[lua/client/OptionScreens/CoopCharacterCreationProfession.d.ts]
  Exports.CoopCharacterCreationProfession = loadstring("return _G['CoopCharacterCreationProfession']")()

--[lua/client/OptionScreens/CoopMapSpawnSelect.d.ts]
  Exports.CoopMapSpawnSelect = loadstring("return _G['CoopMapSpawnSelect']")()

--[lua/client/OptionScreens/CoopOptionsScreen.d.ts]
  Exports.CoopOptionsScreen = loadstring("return _G['CoopOptionsScreen']")()
  Exports.CoopOptionsScreenPanel = loadstring("return _G['CoopOptionsScreenPanel']")()
  Exports.CoopConnection = loadstring("return _G['CoopConnection']")()

--[lua/client/OptionScreens/CoopUserName.d.ts]
  Exports.CoopUserName = loadstring("return _G['CoopUserName']")()

--[lua/client/OptionScreens/InviteFriends.d.ts]
  Exports.InviteFriends = loadstring("return _G['InviteFriends']")()

--[lua/client/OptionScreens/ISGameSounds.d.ts]
  Exports.ISGameSounds = loadstring("return _G['ISGameSounds']")()

--[lua/client/OptionScreens/ISModsNagPanel.d.ts]
  Exports.ISModsNagPanel = loadstring("return _G['ISModsNagPanel']")()

--[lua/client/OptionScreens/ISScoreboard.d.ts]
  Exports.ISScoreboard = loadstring("return _G['ISScoreboard']")()

--[lua/client/OptionScreens/LastStandChallenge.d.ts]
  Exports.LastStandChallenge = loadstring("return _G['LastStandChallenge']")()

--[lua/client/OptionScreens/LastStandPlayerSelect.d.ts]
  Exports.LastStandPlayerSelect = loadstring("return _G['LastStandPlayerSelect']")()

--[lua/client/OptionScreens/LoadGameScreen.d.ts]
  Exports.LoadGameScreen = loadstring("return _G['LoadGameScreen']")()

--[lua/client/OptionScreens/LoginScreen.d.ts]
  Exports.LoginScreen = loadstring("return _G['LoginScreen']")()

--[lua/client/OptionScreens/MainOptions.d.ts]
  Exports.MainOptions = loadstring("return _G['MainOptions']")()

--[lua/client/OptionScreens/MainScreen.d.ts]
  Exports.MainScreen = loadstring("return _G['MainScreen']")()

--[lua/client/OptionScreens/MapSpawnSelect.d.ts]
  Exports.MapSpawnSelect = loadstring("return _G['MapSpawnSelect']")()
  Exports.MapSpawnSelectInfoPanel = loadstring("return _G['MapSpawnSelectInfoPanel']")()
  Exports.MapSpawnSelectListBox = loadstring("return _G['MapSpawnSelectListBox']")()

--[lua/client/OptionScreens/ModMoreInfo.d.ts]
  Exports.ModMoreInfo = loadstring("return _G['ModMoreInfo']")()

--[lua/client/OptionScreens/ModOrderUI.d.ts]
  Exports.ModOrderUI = loadstring("return _G['ModOrderUI']")()

--[lua/client/OptionScreens/ModSelector.d.ts]
  Exports.ModInfoPanel = loadstring("return _G['ModInfoPanel']")()
  Exports.ModListBox = loadstring("return _G['ModListBox']")()
  Exports.ModPosterPanel = loadstring("return _G['ModPosterPanel']")()
  Exports.ModSelector = loadstring("return _G['ModSelector']")()
  Exports.ModThumbnailPanel = loadstring("return _G['ModThumbnailPanel']")()

--[lua/client/OptionScreens/NewGameScreen.d.ts]
  Exports.NewGameScreen = loadstring("return _G['NewGameScreen']")()

--[lua/client/OptionScreens/PublicServerList.d.ts]
  Exports.PublicServerList = loadstring("return _G['PublicServerList']")()

--[lua/client/OptionScreens/SandboxOptions.d.ts]
  Exports.SandboxOptionsScreen = loadstring("return _G['SandboxOptionsScreen']")()

--[lua/client/OptionScreens/ServerConnectPopup.d.ts]
  Exports.ServerConnectPopup = loadstring("return _G['ServerConnectPopup']")()

--[lua/client/OptionScreens/ServerList.d.ts]
  Exports.ServerList = loadstring("return _G['ServerList']")()

--[lua/client/OptionScreens/ServerSettingsScreen.d.ts]
  Exports.BaseServerSettingsPanel = loadstring("return _G['BaseServerSettingsPanel']")()
  Exports.ServerSettingsScreen = loadstring("return _G['ServerSettingsScreen']")()
  Exports.SpawnRegionsNameFilePanel = loadstring("return _G['SpawnRegionsNameFilePanel']")()
  Exports.DefaultServerSettings = loadstring("return _G['DefaultServerSettings']")()

--[lua/client/OptionScreens/ServerToolbox.d.ts]
  Exports.ServerToolbox = loadstring("return _G['ServerToolbox']")()

--[lua/client/OptionScreens/ServerWorkshopItemScreen.d.ts]
  Exports.ServerWorkshopItemScreen = loadstring("return _G['ServerWorkshopItemScreen']")()

--[lua/client/OptionScreens/WorkshopSubmitScreen.d.ts]
  Exports.WorkshopSubmitScreen = loadstring("return _G['WorkshopSubmitScreen']")()

--[lua/client/OptionScreens/WorldSelect.d.ts]
  Exports.WorldSelect = loadstring("return _G['WorldSelect']")()

--[lua/client/RadioCom/ISRadioAction.d.ts]
  Exports.ISRadioAction = loadstring("return _G['ISRadioAction']")()

--[lua/client/RadioCom/ISRadioInteractions.d.ts]
  Exports.ISRadioInteractions = loadstring("return _G['ISRadioInteractions']")()

--[lua/client/RadioCom/ISRadioWindow.d.ts]
  Exports.ISRadioWindow = loadstring("return _G['ISRadioWindow']")()

--[lua/client/RadioCom/ISUIRadio/ISBatteryStatusDisplay.d.ts]
  Exports.ISBatteryStatusDisplay = loadstring("return _G['ISBatteryStatusDisplay']")()

--[lua/client/RadioCom/ISUIRadio/ISItemDropBox.d.ts]
  Exports.ISItemDropBox = loadstring("return _G['ISItemDropBox']")()

--[lua/client/RadioCom/ISUIRadio/ISLedLight.d.ts]
  Exports.ISLedLight = loadstring("return _G['ISLedLight']")()

--[lua/client/RadioCom/ISUIRadio/ISSineWaveDisplay.d.ts]
  Exports.ISSineWaveDisplay = loadstring("return _G['ISSineWaveDisplay']")()

--[lua/client/RadioCom/ISUIRadio/ISSliderPanel.d.ts]
  Exports.ISSliderPanel = loadstring("return _G['ISSliderPanel']")()

--[lua/client/RadioCom/ISUIRadio/ISSpeakerButton.d.ts]
  Exports.ISSpeakerButton = loadstring("return _G['ISSpeakerButton']")()

--[lua/client/RadioCom/ISUIRadio/ISVolumeBar.d.ts]
  Exports.ISVolumeBar = loadstring("return _G['ISVolumeBar']")()

--[lua/client/RadioCom/RadioWindowModules/RWM.d.ts]
  Exports.RWM = loadstring("return _G['RWM']")()

--[lua/client/RadioCom/RadioWindowModules/RWMChannel.d.ts]
  Exports.RWMChannel = loadstring("return _G['RWMChannel']")()

--[lua/client/RadioCom/RadioWindowModules/RWMChannelTV.d.ts]
  Exports.RWMChannelTV = loadstring("return _G['RWMChannelTV']")()

--[lua/client/RadioCom/RadioWindowModules/RWMElement.d.ts]
  Exports.RWMElement = loadstring("return _G['RWMElement']")()

--[lua/client/RadioCom/RadioWindowModules/RWMGeneral.d.ts]
  Exports.RWMGeneral = loadstring("return _G['RWMGeneral']")()

--[lua/client/RadioCom/RadioWindowModules/RWMGridPower.d.ts]
  Exports.RWMGridPower = loadstring("return _G['RWMGridPower']")()

--[lua/client/RadioCom/RadioWindowModules/RWMMedia.d.ts]
  Exports.RWMMedia = loadstring("return _G['RWMMedia']")()

--[lua/client/RadioCom/RadioWindowModules/RWMMicrophone.d.ts]
  Exports.RWMMicrophone = loadstring("return _G['RWMMicrophone']")()

--[lua/client/RadioCom/RadioWindowModules/RWMPanel.d.ts]
  Exports.RWMPanel = loadstring("return _G['RWMPanel']")()

--[lua/client/RadioCom/RadioWindowModules/RWMPower.d.ts]
  Exports.RWMPower = loadstring("return _G['RWMPower']")()

--[lua/client/RadioCom/RadioWindowModules/RWMSignal.d.ts]
  Exports.RWMSignal = loadstring("return _G['RWMSignal']")()

--[lua/client/RadioCom/RadioWindowModules/RWMSubEditPreset.d.ts]
  Exports.RWMSubEditPreset = loadstring("return _G['RWMSubEditPreset']")()

--[lua/client/RadioCom/RadioWindowModules/RWMTestPane.d.ts]
  Exports.RWMTestPane = loadstring("return _G['RWMTestPane']")()

--[lua/client/RadioCom/RadioWindowModules/RWMVolume.d.ts]
  Exports.RWMVolume = loadstring("return _G['RWMVolume']")()

--[lua/client/RadioCom/StoryLineSounds/ISSLEvent.d.ts]
  Exports.ISSLEvent = loadstring("return _G['ISSLEvent']")()

--[lua/client/RadioCom/StoryLineSounds/ISSLFrame.d.ts]
  Exports.ISSLFrame = loadstring("return _G['ISSLFrame']")()

--[lua/client/RadioCom/StoryLineSounds/ISSLManager.d.ts]
  Exports.ISSLManager = loadstring("return _G['ISSLManager']")()

--[lua/client/RadioCom/StoryLineSounds/ISSLSounds.d.ts]
  Exports.ISSLSounds = loadstring("return _G['ISSLSounds']")()

--[lua/client/RadioCom/StoryLineSounds/StorySoundDebug.d.ts]
  Exports.ISStorySoundsDebug = loadstring("return _G['ISStorySoundsDebug']")()

--[lua/client/RainBarrel/CRainBarrelGlobalObject.d.ts]
  Exports.CRainBarrelGlobalObject = loadstring("return _G['CRainBarrelGlobalObject']")()

--[lua/client/RainBarrel/CRainBarrelSystem.d.ts]
  Exports.CRainBarrelSystem = loadstring("return _G['CRainBarrelSystem']")()

--[lua/client/RecordedMedia/ISMediaInfo.d.ts]
  Exports.ISMediaInfo = loadstring("return _G['ISMediaInfo']")()

--[lua/client/Seasons/ISUI/ISWeather.d.ts]
  Exports.ISWeather = loadstring("return _G['ISWeather']")()

--[lua/client/SurvivalGuide/ISTutorialPageInfo.d.ts]
  Exports.ISTutorialPageInfo = loadstring("return _G['ISTutorialPageInfo']")()
  Exports.ISTutorialSetInfo = loadstring("return _G['ISTutorialSetInfo']")()

--[lua/client/SurvivalGuide/ISTutorialPanel.d.ts]
  Exports.ISSurvivalGuideListBox = loadstring("return _G['ISSurvivalGuideListBox']")()
  Exports.ISSurvivalGuideRichText = loadstring("return _G['ISSurvivalGuideRichText']")()
  Exports.ISSurvivalGuideRightPanel = loadstring("return _G['ISSurvivalGuideRightPanel']")()
  Exports.ISTutorialPanel = loadstring("return _G['ISTutorialPanel']")()

--[lua/client/SurvivalGuide/SurvivalGuideEntries.d.ts]
  Exports.SurvivalGuideEntries = loadstring("return _G['SurvivalGuideEntries']")()

--[lua/client/SurvivalGuide/SurvivalGuideManager.d.ts]
  Exports.SurvivalGuideManager = loadstring("return _G['SurvivalGuideManager']")()

--[lua/client/Tests/MapObjectTests.d.ts]

--[lua/client/Tests/RecipeTests.d.ts]

--[lua/client/Tests/RecipeUtils.d.ts]
  Exports.RecipeUtils = loadstring("return _G['RecipeUtils']")()

--[lua/client/Tests/TimedActionsTests.d.ts]
  Exports.TimedActionTests = loadstring("return _G['TimedActionTests']")()

--[lua/client/TimedActions/ISActivateCarBatteryChargerAction.d.ts]
  Exports.ISActivateCarBatteryChargerAction = loadstring("return _G['ISActivateCarBatteryChargerAction']")()

--[lua/client/TimedActions/ISActivateGenerator.d.ts]
  Exports.ISActivateGenerator = loadstring("return _G['ISActivateGenerator']")()

--[lua/client/TimedActions/ISAddCompost.d.ts]
  Exports.ISAddCompost = loadstring("return _G['ISAddCompost']")()

--[lua/client/TimedActions/ISAddFuel.d.ts]
  Exports.ISAddFuel = loadstring("return _G['ISAddFuel']")()

--[lua/client/TimedActions/ISAddItemInRecipe.d.ts]
  Exports.ISAddItemInRecipe = loadstring("return _G['ISAddItemInRecipe']")()

--[lua/client/TimedActions/ISAddSheetAction.d.ts]
  Exports.ISAddSheetAction = loadstring("return _G['ISAddSheetAction']")()

--[lua/client/TimedActions/ISAddSheetRope.d.ts]
  Exports.ISAddSheetRope = loadstring("return _G['ISAddSheetRope']")()

--[lua/client/TimedActions/ISAddWaterFromItemAction.d.ts]
  Exports.ISAddWaterFromItemAction = loadstring("return _G['ISAddWaterFromItemAction']")()

--[lua/client/TimedActions/ISApplyBandage.d.ts]
  Exports.ISApplyBandage = loadstring("return _G['ISApplyBandage']")()

--[lua/client/TimedActions/ISAttachItemHotbar.d.ts]
  Exports.ISAttachItemHotbar = loadstring("return _G['ISAttachItemHotbar']")()

--[lua/client/TimedActions/ISBarricadeAction.d.ts]
  Exports.ISBarricadeAction = loadstring("return _G['ISBarricadeAction']")()

--[lua/client/TimedActions/ISBBQAddFuel.d.ts]
  Exports.ISBBQAddFuel = loadstring("return _G['ISBBQAddFuel']")()

--[lua/client/TimedActions/ISBBQExtinguish.d.ts]
  Exports.ISBBQExtinguish = loadstring("return _G['ISBBQExtinguish']")()

--[lua/client/TimedActions/ISBBQInfoAction.d.ts]
  Exports.ISBBQInfoAction = loadstring("return _G['ISBBQInfoAction']")()

--[lua/client/TimedActions/ISBBQInsertPropaneTank.d.ts]
  Exports.ISBBQInsertPropaneTank = loadstring("return _G['ISBBQInsertPropaneTank']")()

--[lua/client/TimedActions/ISBBQLightFromKindle.d.ts]
  Exports.ISBBQLightFromKindle = loadstring("return _G['ISBBQLightFromKindle']")()

--[lua/client/TimedActions/ISBBQLightFromLiterature.d.ts]
  Exports.ISBBQLightFromLiterature = loadstring("return _G['ISBBQLightFromLiterature']")()

--[lua/client/TimedActions/ISBBQLightFromPetrol.d.ts]
  Exports.ISBBQLightFromPetrol = loadstring("return _G['ISBBQLightFromPetrol']")()

--[lua/client/TimedActions/ISBBQRemovePropaneTank.d.ts]
  Exports.ISBBQRemovePropaneTank = loadstring("return _G['ISBBQRemovePropaneTank']")()

--[lua/client/TimedActions/ISBBQToggle.d.ts]
  Exports.ISBBQToggle = loadstring("return _G['ISBBQToggle']")()

--[lua/client/TimedActions/ISBurnCorpseAction.d.ts]
  Exports.ISBurnCorpseAction = loadstring("return _G['ISBurnCorpseAction']")()

--[lua/client/TimedActions/ISBuryCorpse.d.ts]
  Exports.ISBuryCorpse = loadstring("return _G['ISBuryCorpse']")()

--[lua/client/TimedActions/ISCampingInfoAction.d.ts]
  Exports.ISCampingInfoAction = loadstring("return _G['ISCampingInfoAction']")()

--[lua/client/TimedActions/ISChopTreeAction.d.ts]
  Exports.ISChopTreeAction = loadstring("return _G['ISChopTreeAction']")()

--[lua/client/TimedActions/ISCleanBandage.d.ts]
  Exports.ISCleanBandage = loadstring("return _G['ISCleanBandage']")()

--[lua/client/TimedActions/ISCleanBlood.d.ts]
  Exports.ISCleanBlood = loadstring("return _G['ISCleanBlood']")()

--[lua/client/TimedActions/ISCleanBurn.d.ts]
  Exports.ISCleanBurn = loadstring("return _G['ISCleanBurn']")()

--[lua/client/TimedActions/ISClearAshes.d.ts]
  Exports.ISClearAshes = loadstring("return _G['ISClearAshes']")()

--[lua/client/TimedActions/ISClimbOverFence.d.ts]
  Exports.ISClimbOverFence = loadstring("return _G['ISClimbOverFence']")()

--[lua/client/TimedActions/ISClimbSheetRopeAction.d.ts]
  Exports.ISClimbSheetRopeAction = loadstring("return _G['ISClimbSheetRopeAction']")()

--[lua/client/TimedActions/ISClimbThroughWindow.d.ts]
  Exports.ISClimbThroughWindow = loadstring("return _G['ISClimbThroughWindow']")()

--[lua/client/TimedActions/ISClothingExtraAction.d.ts]
  Exports.ISClothingExtraAction = loadstring("return _G['ISClothingExtraAction']")()

--[lua/client/TimedActions/ISComfreyCataplasm.d.ts]
  Exports.ISComfreyCataplasm = loadstring("return _G['ISComfreyCataplasm']")()

--[lua/client/TimedActions/ISConnectCarBatteryToChargerAction.d.ts]
  Exports.ISConnectCarBatteryToChargerAction = loadstring("return _G['ISConnectCarBatteryToChargerAction']")()

--[lua/client/TimedActions/ISConsolidateDrainable.d.ts]
  Exports.ISConsolidateDrainable = loadstring("return _G['ISConsolidateDrainable']")()

--[lua/client/TimedActions/ISConsolidateDrainableAll.d.ts]
  Exports.ISConsolidateDrainableAll = loadstring("return _G['ISConsolidateDrainableAll']")()

--[lua/client/TimedActions/ISCraftAction.d.ts]
  Exports.ISCraftAction = loadstring("return _G['ISCraftAction']")()

--[lua/client/TimedActions/ISCutHair.d.ts]
  Exports.ISCutHair = loadstring("return _G['ISCutHair']")()

--[lua/client/TimedActions/ISDestroyStuffAction.d.ts]
  Exports.ISDestroyStuffAction = loadstring("return _G['ISDestroyStuffAction']")()

--[lua/client/TimedActions/ISDetachItemHotbar.d.ts]
  Exports.ISDetachItemHotbar = loadstring("return _G['ISDetachItemHotbar']")()

--[lua/client/TimedActions/ISDisinfect.d.ts]
  Exports.ISDisinfect = loadstring("return _G['ISDisinfect']")()

--[lua/client/TimedActions/ISDismantleAction.d.ts]
  Exports.ISDismantleAction = loadstring("return _G['ISDismantleAction']")()

--[lua/client/TimedActions/ISDrinkFromBottle.d.ts]
  Exports.ISDrinkFromBottle = loadstring("return _G['ISDrinkFromBottle']")()

--[lua/client/TimedActions/ISDropItemAction.d.ts]
  Exports.ISDropItemAction = loadstring("return _G['ISDropItemAction']")()

--[lua/client/TimedActions/ISDropWorldItemAction.d.ts]
  Exports.ISDropWorldItemAction = loadstring("return _G['ISDropWorldItemAction']")()

--[lua/client/TimedActions/ISDryMyself.d.ts]
  Exports.ISDryMyself = loadstring("return _G['ISDryMyself']")()

--[lua/client/TimedActions/ISDumpContentsAction.d.ts]
  Exports.ISDumpContentsAction = loadstring("return _G['ISDumpContentsAction']")()

--[lua/client/TimedActions/ISDumpWaterAction.d.ts]
  Exports.ISDumpWaterAction = loadstring("return _G['ISDumpWaterAction']")()

--[lua/client/TimedActions/ISDyeHair.d.ts]
  Exports.ISDyeHair = loadstring("return _G['ISDyeHair']")()

--[lua/client/TimedActions/ISEatFoodAction.d.ts]
  Exports.ISEatFoodAction = loadstring("return _G['ISEatFoodAction']")()

--[lua/client/TimedActions/ISEjectMagazine.d.ts]
  Exports.ISEjectMagazine = loadstring("return _G['ISEjectMagazine']")()

--[lua/client/TimedActions/ISEmptyRainBarrelAction.d.ts]
  Exports.ISEmptyRainBarrelAction = loadstring("return _G['ISEmptyRainBarrelAction']")()

--[lua/client/TimedActions/ISEquipHeavyItem.d.ts]
  Exports.ISEquipHeavyItem = loadstring("return _G['ISEquipHeavyItem']")()

--[lua/client/TimedActions/ISEquipWeaponAction.d.ts]
  Exports.ISEquipWeaponAction = loadstring("return _G['ISEquipWeaponAction']")()

--[lua/client/TimedActions/ISFillGrave.d.ts]
  Exports.ISFillGrave = loadstring("return _G['ISFillGrave']")()

--[lua/client/TimedActions/ISFinalizeDealAction.d.ts]
  Exports.ISFinalizeDealAction = loadstring("return _G['ISFinalizeDealAction']")()

--[lua/client/TimedActions/ISFireplaceAddFuel.d.ts]
  Exports.ISFireplaceAddFuel = loadstring("return _G['ISFireplaceAddFuel']")()

--[lua/client/TimedActions/ISFireplaceExtinguish.d.ts]
  Exports.ISFireplaceExtinguish = loadstring("return _G['ISFireplaceExtinguish']")()

--[lua/client/TimedActions/ISFireplaceInfoAction.d.ts]
  Exports.ISFireplaceInfoAction = loadstring("return _G['ISFireplaceInfoAction']")()

--[lua/client/TimedActions/ISFireplaceLightFromKindle.d.ts]
  Exports.ISFireplaceLightFromKindle = loadstring("return _G['ISFireplaceLightFromKindle']")()

--[lua/client/TimedActions/ISFireplaceLightFromLiterature.d.ts]
  Exports.ISFireplaceLightFromLiterature = loadstring("return _G['ISFireplaceLightFromLiterature']")()

--[lua/client/TimedActions/ISFireplaceLightFromPetrol.d.ts]
  Exports.ISFireplaceLightFromPetrol = loadstring("return _G['ISFireplaceLightFromPetrol']")()

--[lua/client/TimedActions/ISFitnessAction.d.ts]
  Exports.ISFitnessAction = loadstring("return _G['ISFitnessAction']")()

--[lua/client/TimedActions/ISFixAction.d.ts]
  Exports.ISFixAction = loadstring("return _G['ISFixAction']")()

--[lua/client/TimedActions/ISFixGenerator.d.ts]
  Exports.ISFixGenerator = loadstring("return _G['ISFixGenerator']")()

--[lua/client/TimedActions/ISGarlicCataplasm.d.ts]
  Exports.ISGarlicCataplasm = loadstring("return _G['ISGarlicCataplasm']")()

--[lua/client/TimedActions/ISGeneratorInfoAction.d.ts]
  Exports.ISGeneratorInfoAction = loadstring("return _G['ISGeneratorInfoAction']")()

--[lua/client/TimedActions/ISGetCompost.d.ts]
  Exports.ISGetCompost = loadstring("return _G['ISGetCompost']")()

--[lua/client/TimedActions/ISGrabCorpseAction.d.ts]
  Exports.ISGrabCorpseAction = loadstring("return _G['ISGrabCorpseAction']")()

--[lua/client/TimedActions/ISGrabItemAction.d.ts]
  Exports.ISGrabItemAction = loadstring("return _G['ISGrabItemAction']")()

--[lua/client/TimedActions/ISInsertMagazine.d.ts]
  Exports.ISInsertMagazine = loadstring("return _G['ISInsertMagazine']")()

--[lua/client/TimedActions/ISInventoryTransferAction.d.ts]
  Exports.ISInventoryTransferAction = loadstring("return _G['ISInventoryTransferAction']")()

--[lua/client/TimedActions/ISLightActions.d.ts]
  Exports.ISLightActions = loadstring("return _G['ISLightActions']")()

--[lua/client/TimedActions/ISLoadBulletsInMagazine.d.ts]
  Exports.ISLoadBulletsInMagazine = loadstring("return _G['ISLoadBulletsInMagazine']")()

--[lua/client/TimedActions/ISLockDoor.d.ts]
  Exports.ISLockDoor = loadstring("return _G['ISLockDoor']")()

--[lua/client/TimedActions/ISMedicalCheckAction.d.ts]
  Exports.ISMedicalCheckAction = loadstring("return _G['ISMedicalCheckAction']")()

--[lua/client/TimedActions/ISOpenCloseCurtain.d.ts]
  Exports.ISOpenCloseCurtain = loadstring("return _G['ISOpenCloseCurtain']")()

--[lua/client/TimedActions/ISOpenCloseDoor.d.ts]
  Exports.ISOpenCloseDoor = loadstring("return _G['ISOpenCloseDoor']")()

--[lua/client/TimedActions/ISOpenCloseWindow.d.ts]
  Exports.ISOpenCloseWindow = loadstring("return _G['ISOpenCloseWindow']")()

--[lua/client/TimedActions/ISOpenContainerTimedAction.d.ts]
  Exports.ISOpenContainerTimedAction = loadstring("return _G['ISOpenContainerTimedAction']")()

--[lua/client/TimedActions/ISOvenUITimedAction.d.ts]
  Exports.ISOvenUITimedAction = loadstring("return _G['ISOvenUITimedAction']")()

--[lua/client/TimedActions/ISPadlockAction.d.ts]
  Exports.ISPadlockAction = loadstring("return _G['ISPadlockAction']")()

--[lua/client/TimedActions/ISPickupBrokenGlass.d.ts]
  Exports.ISPickupBrokenGlass = loadstring("return _G['ISPickupBrokenGlass']")()

--[lua/client/TimedActions/ISPlaceCarBatteryChargerAction.d.ts]
  Exports.ISPlaceCarBatteryChargerAction = loadstring("return _G['ISPlaceCarBatteryChargerAction']")()

--[lua/client/TimedActions/ISPlaceTrap.d.ts]
  Exports.ISPlaceTrap = loadstring("return _G['ISPlaceTrap']")()

--[lua/client/TimedActions/ISPlantainCataplasm.d.ts]
  Exports.ISPlantainCataplasm = loadstring("return _G['ISPlantainCataplasm']")()

--[lua/client/TimedActions/ISPlugGenerator.d.ts]
  Exports.ISPlugGenerator = loadstring("return _G['ISPlugGenerator']")()

--[lua/client/TimedActions/ISPlumbItem.d.ts]
  Exports.ISPlumbItem = loadstring("return _G['ISPlumbItem']")()

--[lua/client/TimedActions/ISPutOutFire.d.ts]
  Exports.ISPutOutFire = loadstring("return _G['ISPutOutFire']")()

--[lua/client/TimedActions/ISQueueActionsAction.d.ts]
  Exports.ISQueueActionsAction = loadstring("return _G['ISQueueActionsAction']")()

--[lua/client/TimedActions/ISRackFirearm.d.ts]
  Exports.ISRackFirearm = loadstring("return _G['ISRackFirearm']")()

--[lua/client/TimedActions/ISReadABook.d.ts]
  Exports.ISReadABook = loadstring("return _G['ISReadABook']")()

--[lua/client/TimedActions/ISReadWorldMap.d.ts]
  Exports.ISReadWorldMap = loadstring("return _G['ISReadWorldMap']")()

--[lua/client/TimedActions/ISReloadWeaponAction.d.ts]
  Exports.ISReloadWeaponAction = loadstring("return _G['ISReloadWeaponAction']")()

--[lua/client/TimedActions/ISRemoveBrokenGlass.d.ts]
  Exports.ISRemoveBrokenGlass = loadstring("return _G['ISRemoveBrokenGlass']")()

--[lua/client/TimedActions/ISRemoveBullet.d.ts]
  Exports.ISRemoveBullet = loadstring("return _G['ISRemoveBullet']")()

--[lua/client/TimedActions/ISRemoveBush.d.ts]
  Exports.ISRemoveBush = loadstring("return _G['ISRemoveBush']")()

--[lua/client/TimedActions/ISRemoveCarBatteryFromChargerAction.d.ts]
  Exports.ISRemoveCarBatteryFromChargerAction = loadstring("return _G['ISRemoveCarBatteryFromChargerAction']")()

--[lua/client/TimedActions/ISRemoveGlass.d.ts]
  Exports.ISRemoveGlass = loadstring("return _G['ISRemoveGlass']")()

--[lua/client/TimedActions/ISRemoveGrass.d.ts]
  Exports.ISRemoveGrass = loadstring("return _G['ISRemoveGrass']")()

--[lua/client/TimedActions/ISRemovePatch.d.ts]
  Exports.ISRemovePatch = loadstring("return _G['ISRemovePatch']")()

--[lua/client/TimedActions/ISRemoveSheetAction.d.ts]
  Exports.ISRemoveSheetAction = loadstring("return _G['ISRemoveSheetAction']")()

--[lua/client/TimedActions/ISRemoveSheetRope.d.ts]
  Exports.ISRemoveSheetRope = loadstring("return _G['ISRemoveSheetRope']")()

--[lua/client/TimedActions/ISRemoveWeaponUpgrade.d.ts]
  Exports.ISRemoveWeaponUpgrade = loadstring("return _G['ISRemoveWeaponUpgrade']")()

--[lua/client/TimedActions/ISRepairClothing.d.ts]
  Exports.ISRepairClothing = loadstring("return _G['ISRepairClothing']")()

--[lua/client/TimedActions/ISRestAction.d.ts]
  Exports.ISRestAction = loadstring("return _G['ISRestAction']")()

--[lua/client/TimedActions/ISRipClothing.d.ts]
  Exports.ISRipClothing = loadstring("return _G['ISRipClothing']")()

--[lua/client/TimedActions/ISScavengeAction.d.ts]
  Exports.ISScavengeAction = loadstring("return _G['ISScavengeAction']")()

--[lua/client/TimedActions/ISSetComboWasherDryerMode.d.ts]
  Exports.ISSetComboWasherDryerMode = loadstring("return _G['ISSetComboWasherDryerMode']")()

--[lua/client/TimedActions/ISSitOnChairAction.d.ts]
  Exports.ISSitOnChairAction = loadstring("return _G['ISSitOnChairAction']")()

--[lua/client/TimedActions/ISSmashWindow.d.ts]
  Exports.ISSmashWindow = loadstring("return _G['ISSmashWindow']")()

--[lua/client/TimedActions/ISSplint.d.ts]
  Exports.ISSplint = loadstring("return _G['ISSplint']")()

--[lua/client/TimedActions/ISStitch.d.ts]
  Exports.ISStitch = loadstring("return _G['ISStitch']")()

--[lua/client/TimedActions/ISStopAlarmClockAction.d.ts]
  Exports.ISStopAlarmClockAction = loadstring("return _G['ISStopAlarmClockAction']")()

--[lua/client/TimedActions/ISTakeCarBatteryChargerAction.d.ts]
  Exports.ISTakeCarBatteryChargerAction = loadstring("return _G['ISTakeCarBatteryChargerAction']")()

--[lua/client/TimedActions/ISTakeFuel.d.ts]
  Exports.ISTakeFuel = loadstring("return _G['ISTakeFuel']")()

--[lua/client/TimedActions/ISTakeGenerator.d.ts]
  Exports.ISTakeGenerator = loadstring("return _G['ISTakeGenerator']")()

--[lua/client/TimedActions/ISTakePillAction.d.ts]
  Exports.ISTakePillAction = loadstring("return _G['ISTakePillAction']")()

--[lua/client/TimedActions/ISTakeTrap.d.ts]
  Exports.ISTakeTrap = loadstring("return _G['ISTakeTrap']")()

--[lua/client/TimedActions/ISTakeWaterAction.d.ts]
  Exports.ISTakeWaterAction = loadstring("return _G['ISTakeWaterAction']")()

--[lua/client/TimedActions/ISTimedActionQueue.d.ts]
  Exports.ISTimedActionQueue = loadstring("return _G['ISTimedActionQueue']")()

--[lua/client/TimedActions/ISToggleClothingDryer.d.ts]
  Exports.ISToggleClothingDryer = loadstring("return _G['ISToggleClothingDryer']")()

--[lua/client/TimedActions/ISToggleClothingWasher.d.ts]
  Exports.ISToggleClothingWasher = loadstring("return _G['ISToggleClothingWasher']")()

--[lua/client/TimedActions/ISToggleComboWasherDryer.d.ts]
  Exports.ISToggleComboWasherDryer = loadstring("return _G['ISToggleComboWasherDryer']")()

--[lua/client/TimedActions/ISToggleLightAction.d.ts]
  Exports.ISToggleLightAction = loadstring("return _G['ISToggleLightAction']")()

--[lua/client/TimedActions/ISToggleSafetyAction.d.ts]
  Exports.ISToggleSafetyAction = loadstring("return _G['ISToggleSafetyAction']")()

--[lua/client/TimedActions/ISToggleStoveAction.d.ts]
  Exports.ISToggleStoveAction = loadstring("return _G['ISToggleStoveAction']")()

--[lua/client/TimedActions/ISTransferWaterAction.d.ts]
  Exports.ISTransferWaterAction = loadstring("return _G['ISTransferWaterAction']")()

--[lua/client/TimedActions/ISTrimBeard.d.ts]
  Exports.ISTrimBeard = loadstring("return _G['ISTrimBeard']")()

--[lua/client/TimedActions/ISUnbarricadeAction.d.ts]
  Exports.ISUnbarricadeAction = loadstring("return _G['ISUnbarricadeAction']")()

--[lua/client/TimedActions/ISUnequipAction.d.ts]
  Exports.ISUnequipAction = loadstring("return _G['ISUnequipAction']")()

--[lua/client/TimedActions/ISUnloadBulletsFromFirearm.d.ts]
  Exports.ISUnloadBulletsFromFirearm = loadstring("return _G['ISUnloadBulletsFromFirearm']")()

--[lua/client/TimedActions/ISUnloadBulletsFromMagazine.d.ts]
  Exports.ISUnloadBulletsFromMagazine = loadstring("return _G['ISUnloadBulletsFromMagazine']")()

--[lua/client/TimedActions/ISUpgradeWeapon.d.ts]
  Exports.ISUpgradeWeapon = loadstring("return _G['ISUpgradeWeapon']")()

--[lua/client/TimedActions/ISWakeOtherPlayer.d.ts]
  Exports.ISWakeOtherPlayer = loadstring("return _G['ISWakeOtherPlayer']")()

--[lua/client/TimedActions/ISWashClothing.d.ts]
  Exports.ISWashClothing = loadstring("return _G['ISWashClothing']")()

--[lua/client/TimedActions/ISWashYourself.d.ts]
  Exports.ISWashYourself = loadstring("return _G['ISWashYourself']")()

--[lua/client/TimedActions/ISWearClothing.d.ts]
  Exports.ISWearClothing = loadstring("return _G['ISWearClothing']")()
  Exports.WearClothingAnimations = loadstring("return _G['WearClothingAnimations']")()

--[lua/client/TimedActions/WalkToTimedAction.d.ts]
  Exports.ISWalkToTimedAction = loadstring("return _G['ISWalkToTimedAction']")()

--[lua/client/Traps/CTrapGlobalObject.d.ts]
  Exports.CTrapGlobalObject = loadstring("return _G['CTrapGlobalObject']")()

--[lua/client/Traps/CTrapSystem.d.ts]
  Exports.CTrapSystem = loadstring("return _G['CTrapSystem']")()

--[lua/client/Traps/TimedActions/ISAddBaitAction.d.ts]
  Exports.ISAddBaitAction = loadstring("return _G['ISAddBaitAction']")()

--[lua/client/Traps/TimedActions/ISCheckTrapAction.d.ts]
  Exports.ISCheckTrapAction = loadstring("return _G['ISCheckTrapAction']")()

--[lua/client/Traps/TimedActions/ISRemoveBaitAction.d.ts]
  Exports.ISRemoveBaitAction = loadstring("return _G['ISRemoveBaitAction']")()

--[lua/client/Traps/TimedActions/ISRemoveTrapAction.d.ts]
  Exports.ISRemoveTrapAction = loadstring("return _G['ISRemoveTrapAction']")()

--[lua/client/Tutorial/ISUI/TutorialFocus.d.ts]
  Exports.TutorialFocus = loadstring("return _G['TutorialFocus']")()

--[lua/client/Tutorial/ISUI/TutorialMessage.d.ts]
  Exports.TutorialMessage = loadstring("return _G['TutorialMessage']")()

--[lua/client/Tutorial/Steps.d.ts]
  Exports.BandageStep = loadstring("return _G['BandageStep']")()
  Exports.FightStep = loadstring("return _G['FightStep']")()
  Exports.InventoryLootingStep = loadstring("return _G['InventoryLootingStep']")()
  Exports.InventoryUseStep = loadstring("return _G['InventoryUseStep']")()
  Exports.ShotgunStep = loadstring("return _G['ShotgunStep']")()
  Exports.SneakStep = loadstring("return _G['SneakStep']")()
  Exports.WalkToAdjacent = loadstring("return _G['WalkToAdjacent']")()
  Exports.WelcomeStep = loadstring("return _G['WelcomeStep']")()
  Exports.TutorialTests = loadstring("return _G['TutorialTests']")()

--[lua/client/Tutorial/Tutorial1.d.ts]
  Exports.Tutorial1 = loadstring("return _G['Tutorial1']")()

--[lua/client/Tutorial/TutorialSetup.d.ts]
  Exports.TutorialData = loadstring("return _G['TutorialData']")()

--[lua/client/Tutorial/TutorialStep.d.ts]
  Exports.TutorialStep = loadstring("return _G['TutorialStep']")()

--[lua/client/Vehicles/ISUI/EditVehicleState.d.ts]
  Exports.EditVehicleUI = loadstring("return _G['EditVehicleUI']")()
  Exports.EditVehicleUI_EditArea = loadstring("return _G['EditVehicleUI_EditArea']")()
  Exports.EditVehicleUI_EditAttachment = loadstring("return _G['EditVehicleUI_EditAttachment']")()
  Exports.EditVehicleUI_EditChassis = loadstring("return _G['EditVehicleUI_EditChassis']")()
  Exports.EditVehicleUI_EditPanel = loadstring("return _G['EditVehicleUI_EditPanel']")()
  Exports.EditVehicleUI_EditPassenger = loadstring("return _G['EditVehicleUI_EditPassenger']")()
  Exports.EditVehicleUI_EditPhysics = loadstring("return _G['EditVehicleUI_EditPhysics']")()
  Exports.EditVehicleUI_EditWheel = loadstring("return _G['EditVehicleUI_EditWheel']")()
  Exports.EditVehicleUI_ListBox = loadstring("return _G['EditVehicleUI_ListBox']")()
  Exports.EditVehicleUI_Scene = loadstring("return _G['EditVehicleUI_Scene']")()
  Exports.EditVehicleUI_SwitchView = loadstring("return _G['EditVehicleUI_SwitchView']")()

--[lua/client/Vehicles/ISUI/ISCarMechanicsOverlay.d.ts]
  Exports.ISCarMechanicsOverlay = loadstring("return _G['ISCarMechanicsOverlay']")()

--[lua/client/Vehicles/ISUI/ISLightbarUI.d.ts]
  Exports.ISLightbarUI = loadstring("return _G['ISLightbarUI']")()

--[lua/client/Vehicles/ISUI/ISUI3DScene.d.ts]
  Exports.ISUI3DScene = loadstring("return _G['ISUI3DScene']")()

--[lua/client/Vehicles/ISUI/ISUIVehicleModel.d.ts]
  Exports.ISUIVehicleModel = loadstring("return _G['ISUIVehicleModel']")()

--[lua/client/Vehicles/ISUI/ISVehicleACUI.d.ts]
  Exports.ISVehicleACUI = loadstring("return _G['ISVehicleACUI']")()

--[lua/client/Vehicles/ISUI/ISVehicleAngles.d.ts]
  Exports.ISVehicleAngles = loadstring("return _G['ISVehicleAngles']")()

--[lua/client/Vehicles/ISUI/ISVehicleBloodUI.d.ts]
  Exports.ISVehicleBloodUI = loadstring("return _G['ISVehicleBloodUI']")()

--[lua/client/Vehicles/ISUI/ISVehicleColor.d.ts]
  Exports.ISVehicleHSV = loadstring("return _G['ISVehicleHSV']")()

--[lua/client/Vehicles/ISUI/ISVehicleDashboard.d.ts]
  Exports.ISVehicleDashboard = loadstring("return _G['ISVehicleDashboard']")()

--[lua/client/Vehicles/ISUI/ISVehicleGauge.d.ts]
  Exports.ISVehicleGauge = loadstring("return _G['ISVehicleGauge']")()

--[lua/client/Vehicles/ISUI/ISVehicleMechanics.d.ts]
  Exports.ISVehicleMechanics = loadstring("return _G['ISVehicleMechanics']")()

--[lua/client/Vehicles/ISUI/ISVehicleMenu.d.ts]
  Exports.ISVehicleMenu = loadstring("return _G['ISVehicleMenu']")()

--[lua/client/Vehicles/ISUI/ISVehiclePartMenu.d.ts]
  Exports.ISVehiclePartMenu = loadstring("return _G['ISVehiclePartMenu']")()

--[lua/client/Vehicles/ISUI/ISVehicleRegulator.d.ts]
  Exports.ISVehicleRegulator = loadstring("return _G['ISVehicleRegulator']")()

--[lua/client/Vehicles/ISUI/ISVehicleRoadtripDebug.d.ts]
  Exports.ISVehicleRoadtripDebug = loadstring("return _G['ISVehicleRoadtripDebug']")()

--[lua/client/Vehicles/ISUI/ISVehicleSeatUI.d.ts]
  Exports.ISVehicleSeatUI = loadstring("return _G['ISVehicleSeatUI']")()

--[lua/client/Vehicles/ISVehicleTrailerUtils.d.ts]
  Exports.ISVehicleTrailerUtils = loadstring("return _G['ISVehicleTrailerUtils']")()

--[lua/client/Vehicles/TimedActions/ISAddGasolineToVehicle.d.ts]
  Exports.ISAddGasolineToVehicle = loadstring("return _G['ISAddGasolineToVehicle']")()

--[lua/client/Vehicles/TimedActions/ISAttachTrailerToVehicle.d.ts]
  Exports.ISAttachTrailerToVehicle = loadstring("return _G['ISAttachTrailerToVehicle']")()

--[lua/client/Vehicles/TimedActions/ISCloseVehicleDoor.d.ts]
  Exports.ISCloseVehicleDoor = loadstring("return _G['ISCloseVehicleDoor']")()

--[lua/client/Vehicles/TimedActions/ISConfigHeadlight.d.ts]
  Exports.ISConfigHeadlight = loadstring("return _G['ISConfigHeadlight']")()

--[lua/client/Vehicles/TimedActions/ISDeflateTire.d.ts]
  Exports.ISDeflateTire = loadstring("return _G['ISDeflateTire']")()

--[lua/client/Vehicles/TimedActions/ISDetachTrailerFromVehicle.d.ts]
  Exports.ISDetachTrailerFromVehicle = loadstring("return _G['ISDetachTrailerFromVehicle']")()

--[lua/client/Vehicles/TimedActions/ISEnterVehicle.d.ts]
  Exports.ISEnterVehicle = loadstring("return _G['ISEnterVehicle']")()

--[lua/client/Vehicles/TimedActions/ISExitVehicle.d.ts]
  Exports.ISExitVehicle = loadstring("return _G['ISExitVehicle']")()

--[lua/client/Vehicles/TimedActions/ISHorn.d.ts]
  Exports.ISHorn = loadstring("return _G['ISHorn']")()

--[lua/client/Vehicles/TimedActions/ISHotwireVehicle.d.ts]
  Exports.ISHotwireVehicle = loadstring("return _G['ISHotwireVehicle']")()

--[lua/client/Vehicles/TimedActions/ISInflateTire.d.ts]
  Exports.ISInflateTire = loadstring("return _G['ISInflateTire']")()

--[lua/client/Vehicles/TimedActions/ISInstallVehiclePart.d.ts]
  Exports.ISInstallVehiclePart = loadstring("return _G['ISInstallVehiclePart']")()

--[lua/client/Vehicles/TimedActions/ISLightbarUITimedAction.d.ts]
  Exports.ISLightbarUITimedAction = loadstring("return _G['ISLightbarUITimedAction']")()

--[lua/client/Vehicles/TimedActions/ISLockDoors.d.ts]
  Exports.ISLockDoors = loadstring("return _G['ISLockDoors']")()

--[lua/client/Vehicles/TimedActions/ISLockVehicleDoor.d.ts]
  Exports.ISLockVehicleDoor = loadstring("return _G['ISLockVehicleDoor']")()

--[lua/client/Vehicles/TimedActions/ISOpenCloseVehicleWindow.d.ts]
  Exports.ISOpenCloseVehicleWindow = loadstring("return _G['ISOpenCloseVehicleWindow']")()

--[lua/client/Vehicles/TimedActions/ISOpenMechanicsUIAction.d.ts]
  Exports.ISOpenMechanicsUIAction = loadstring("return _G['ISOpenMechanicsUIAction']")()

--[lua/client/Vehicles/TimedActions/ISOpenVehicleDoor.d.ts]
  Exports.ISOpenVehicleDoor = loadstring("return _G['ISOpenVehicleDoor']")()

--[lua/client/Vehicles/TimedActions/ISPathFindAction.d.ts]
  Exports.ISPathFindAction = loadstring("return _G['ISPathFindAction']")()

--[lua/client/Vehicles/TimedActions/ISRechargeCarBattery.d.ts]
  Exports.ISRechargeCarBattery = loadstring("return _G['ISRechargeCarBattery']")()

--[lua/client/Vehicles/TimedActions/ISRefuelFromGasPump.d.ts]
  Exports.ISRefuelFromGasPump = loadstring("return _G['ISRefuelFromGasPump']")()

--[lua/client/Vehicles/TimedActions/ISRemoveBurntVehicle.d.ts]
  Exports.ISRemoveBurntVehicle = loadstring("return _G['ISRemoveBurntVehicle']")()

--[lua/client/Vehicles/TimedActions/ISRepairEngine.d.ts]
  Exports.ISRepairEngine = loadstring("return _G['ISRepairEngine']")()

--[lua/client/Vehicles/TimedActions/ISShutOffVehicleEngine.d.ts]
  Exports.ISShutOffVehicleEngine = loadstring("return _G['ISShutOffVehicleEngine']")()

--[lua/client/Vehicles/TimedActions/ISSmashVehicleWindow.d.ts]
  Exports.ISSmashVehicleWindow = loadstring("return _G['ISSmashVehicleWindow']")()

--[lua/client/Vehicles/TimedActions/ISStartVehicleEngine.d.ts]
  Exports.ISStartVehicleEngine = loadstring("return _G['ISStartVehicleEngine']")()

--[lua/client/Vehicles/TimedActions/ISStopVehicle.d.ts]
  Exports.ISStopVehicle = loadstring("return _G['ISStopVehicle']")()

--[lua/client/Vehicles/TimedActions/ISSwitchVehicleSeat.d.ts]
  Exports.ISSwitchVehicleSeat = loadstring("return _G['ISSwitchVehicleSeat']")()

--[lua/client/Vehicles/TimedActions/ISTakeEngineParts.d.ts]
  Exports.ISTakeEngineParts = loadstring("return _G['ISTakeEngineParts']")()

--[lua/client/Vehicles/TimedActions/ISTakeGasolineFromVehicle.d.ts]
  Exports.ISTakeGasolineFromVehicle = loadstring("return _G['ISTakeGasolineFromVehicle']")()

--[lua/client/Vehicles/TimedActions/ISUninstallVehiclePart.d.ts]
  Exports.ISUninstallVehiclePart = loadstring("return _G['ISUninstallVehiclePart']")()

--[lua/client/Vehicles/TimedActions/ISUnlockVehicleDoor.d.ts]
  Exports.ISUnlockVehicleDoor = loadstring("return _G['ISUnlockVehicleDoor']")()

--[lua/client/Vehicles/TimedActions/ISWashVehicle.d.ts]
  Exports.ISWashVehicle = loadstring("return _G['ISWashVehicle']")()

--[lua/client/XpSystem/ISUI/ISCharacterInfo.d.ts]
  Exports.ISCharacterInfo = loadstring("return _G['ISCharacterInfo']")()

--[lua/client/XpSystem/ISUI/ISCharacterInfoWindow.d.ts]
  Exports.ISCharacterInfoWindow = loadstring("return _G['ISCharacterInfoWindow']")()

--[lua/client/XpSystem/ISUI/ISCharacterProtection.d.ts]
  Exports.ISCharacterProtection = loadstring("return _G['ISCharacterProtection']")()

--[lua/client/XpSystem/ISUI/ISCharacterScreen.d.ts]
  Exports.ISCharacterScreen = loadstring("return _G['ISCharacterScreen']")()
  Exports.ISCharacterScreenAvatar = loadstring("return _G['ISCharacterScreenAvatar']")()

--[lua/client/XpSystem/ISUI/ISClothingInsPanel.d.ts]
  Exports.ISClothingInsPanel = loadstring("return _G['ISClothingInsPanel']")()

--[lua/client/XpSystem/ISUI/ISHealthPanel.d.ts]
  Exports.HealthPanelAction = loadstring("return _G['HealthPanelAction']")()
  Exports.ISHealthBodyPartListBox = loadstring("return _G['ISHealthBodyPartListBox']")()
  Exports.ISHealthBodyPartPanel = loadstring("return _G['ISHealthBodyPartPanel']")()
  Exports.ISHealthPanel = loadstring("return _G['ISHealthPanel']")()
  Exports.ISNewHealthPanel = loadstring("return _G['ISNewHealthPanel']")()

--[lua/client/XpSystem/ISUI/ISSkillProgressBar.d.ts]
  Exports.ISSkillProgressBar = loadstring("return _G['ISSkillProgressBar']")()

--[lua/server/BuildingObjects/ISAnvil.d.ts]
  Exports.ISAnvil = loadstring("return _G['ISAnvil']")()

--[lua/server/BuildingObjects/ISBarbedWire.d.ts]
  Exports.ISBarbedWire = loadstring("return _G['ISBarbedWire']")()

--[lua/server/BuildingObjects/ISBrushToolTileCursor.d.ts]
  Exports.ISBrushToolTileCursor = loadstring("return _G['ISBrushToolTileCursor']")()

--[lua/server/BuildingObjects/ISBSFurnace.d.ts]
  Exports.ISBSFurnace = loadstring("return _G['ISBSFurnace']")()

--[lua/server/BuildingObjects/ISBuildCursorMouse.d.ts]
  Exports.ISBuildCursorMouse = loadstring("return _G['ISBuildCursorMouse']")()

--[lua/server/BuildingObjects/ISBuildingObject.d.ts]
  Exports.ISBuildingObject = loadstring("return _G['ISBuildingObject']")()

--[lua/server/BuildingObjects/ISBuildUtil.d.ts]
  Exports.buildUtil = loadstring("return _G['buildUtil']")()

--[lua/server/BuildingObjects/ISChopTreeCursor.d.ts]
  Exports.ISChopTreeCursor = loadstring("return _G['ISChopTreeCursor']")()

--[lua/server/BuildingObjects/ISCleanBloodCursor.d.ts]
  Exports.ISCleanBloodCursor = loadstring("return _G['ISCleanBloodCursor']")()

--[lua/server/BuildingObjects/ISCompost.d.ts]
  Exports.ISCompost = loadstring("return _G['ISCompost']")()

--[lua/server/BuildingObjects/ISDestroyCursor.d.ts]
  Exports.ISDestroyCursor = loadstring("return _G['ISDestroyCursor']")()

--[lua/server/BuildingObjects/ISDoubleDoor.d.ts]
  Exports.ISDoubleDoor = loadstring("return _G['ISDoubleDoor']")()

--[lua/server/BuildingObjects/ISDoubleTileFurniture.d.ts]
  Exports.ISDoubleTileFurniture = loadstring("return _G['ISDoubleTileFurniture']")()

--[lua/server/BuildingObjects/ISEmptyGraves.d.ts]
  Exports.ISEmptyGraves = loadstring("return _G['ISEmptyGraves']")()

--[lua/server/BuildingObjects/ISLightSource.d.ts]
  Exports.ISLightSource = loadstring("return _G['ISLightSource']")()

--[lua/server/BuildingObjects/ISMoveableCursor.d.ts]
  Exports.ISMoveableCursor = loadstring("return _G['ISMoveableCursor']")()

--[lua/server/BuildingObjects/ISNaturalFloor.d.ts]
  Exports.ISNaturalFloor = loadstring("return _G['ISNaturalFloor']")()

--[lua/server/BuildingObjects/ISPaintCursor.d.ts]
  Exports.ISPaintCursor = loadstring("return _G['ISPaintCursor']")()

--[lua/server/BuildingObjects/ISPlace3DItemCursor.d.ts]
  Exports.ISPlace3DItemCursor = loadstring("return _G['ISPlace3DItemCursor']")()

--[lua/server/BuildingObjects/ISRemovePlantCursor.d.ts]
  Exports.ISRemovePlantCursor = loadstring("return _G['ISRemovePlantCursor']")()

--[lua/server/BuildingObjects/ISSelectCursor.d.ts]
  Exports.ISSelectCursor = loadstring("return _G['ISSelectCursor']")()

--[lua/server/BuildingObjects/ISShovelGroundCursor.d.ts]
  Exports.ISShovelGroundCursor = loadstring("return _G['ISShovelGroundCursor']")()

--[lua/server/BuildingObjects/ISSimpleFurniture.d.ts]
  Exports.ISSimpleFurniture = loadstring("return _G['ISSimpleFurniture']")()

--[lua/server/BuildingObjects/ISWalkToCursor.d.ts]
  Exports.ISWalkToCursor = loadstring("return _G['ISWalkToCursor']")()

--[lua/server/BuildingObjects/ISWoodenContainer.d.ts]
  Exports.ISWoodenContainer = loadstring("return _G['ISWoodenContainer']")()

--[lua/server/BuildingObjects/ISWoodenDoor.d.ts]
  Exports.ISWoodenDoor = loadstring("return _G['ISWoodenDoor']")()

--[lua/server/BuildingObjects/ISWoodenDoorFrame.d.ts]
  Exports.ISWoodenDoorFrame = loadstring("return _G['ISWoodenDoorFrame']")()

--[lua/server/BuildingObjects/ISWoodenFloor.d.ts]
  Exports.ISWoodenFloor = loadstring("return _G['ISWoodenFloor']")()

--[lua/server/BuildingObjects/ISWoodenStairs.d.ts]
  Exports.ISWoodenStairs = loadstring("return _G['ISWoodenStairs']")()

--[lua/server/BuildingObjects/ISWoodenWall.d.ts]
  Exports.ISWoodenWall = loadstring("return _G['ISWoodenWall']")()

--[lua/server/BuildingObjects/PaintingReference.d.ts]
  Exports.OtherPainting = loadstring("return _G['OtherPainting']")()
  Exports.Painting = loadstring("return _G['Painting']")()

--[lua/server/Camping/BuildingObjects/campingCampfire.d.ts]
  Exports.campingCampfire = loadstring("return _G['campingCampfire']")()

--[lua/server/Camping/BuildingObjects/campingTent.d.ts]
  Exports.campingTent = loadstring("return _G['campingTent']")()

--[lua/server/Camping/camping_fuel.d.ts]
  Exports.campingFuelCategory = loadstring("return _G['campingFuelCategory']")()
  Exports.campingFuelType = loadstring("return _G['campingFuelType']")()
  Exports.campingLightFireCategory = loadstring("return _G['campingLightFireCategory']")()
  Exports.campingLightFireType = loadstring("return _G['campingLightFireType']")()

--[lua/server/Camping/camping_tent.d.ts]
  Exports.camping = loadstring("return _G['camping']")()

--[lua/server/Camping/camping_text.d.ts]
  Exports.campingText = loadstring("return _G['campingText']")()

--[lua/server/Camping/SCampfireGlobalObject.d.ts]
  Exports.SCampfireGlobalObject = loadstring("return _G['SCampfireGlobalObject']")()

--[lua/server/Camping/SCampfireSystem.d.ts]
  Exports.SCampfireSystem = loadstring("return _G['SCampfireSystem']")()

--[lua/server/Climate/ClimateMain.d.ts]
  Exports.ClimateMain = loadstring("return _G['ClimateMain']")()

--[lua/server/Farming/BuildingObjects/farmingPlot.d.ts]
  Exports.farmingPlot = loadstring("return _G['farmingPlot']")()

--[lua/server/Farming/BuildingObjects/ISFarmingCursor.d.ts]
  Exports.ISFarmingCursor = loadstring("return _G['ISFarmingCursor']")()

--[lua/server/Farming/BuildingObjects/ISFarmingCursorMouse.d.ts]
  Exports.ISFarmingCursorMouse = loadstring("return _G['ISFarmingCursorMouse']")()

--[lua/server/Farming/farming_vegetableconf.d.ts]
  Exports.farming_vegetableconf = loadstring("return _G['farming_vegetableconf']")()

--[lua/server/Farming/ScavengeDefinition.d.ts]
  Exports.scavenges = loadstring("return _G['scavenges']")()

--[lua/server/Farming/SFarmingSystem.d.ts]
  Exports.SFarmingSystem = loadstring("return _G['SFarmingSystem']")()

--[lua/server/Farming/SPlantGlobalObject.d.ts]
  Exports.SPlantGlobalObject = loadstring("return _G['SPlantGlobalObject']")()

--[lua/server/FireFighting/FireFighting.d.ts]
  Exports.FireFighting = loadstring("return _G['FireFighting']")()

--[lua/server/FireFighting/ISExtinguishCursor.d.ts]
  Exports.ISExtinguishCursor = loadstring("return _G['ISExtinguishCursor']")()

--[lua/server/Fishing/BuildingObjects/FishingNet.d.ts]
  Exports.fishingNet = loadstring("return _G['fishingNet']")()

--[lua/server/HealthSystem/HealthUpdate.d.ts]
  Exports.healthUpdate = loadstring("return _G['healthUpdate']")()

--[lua/server/ISBuildingBlueprintManager.d.ts]
  Exports.ISBuildingBlueprintManager = loadstring("return _G['ISBuildingBlueprintManager']")()

--[lua/server/ISCoordConversion.d.ts]
  Exports.ISCoordConversion = loadstring("return _G['ISCoordConversion']")()

--[lua/server/ISObjectClickHandler.d.ts]
  Exports.ISObjectClickHandler = loadstring("return _G['ISObjectClickHandler']")()

--[lua/server/Items/AcceptItemFunction.d.ts]
  Exports.AcceptItemFunction = loadstring("return _G['AcceptItemFunction']")()

--[lua/server/Items/BrokenFences.d.ts]
  Exports.debris = loadstring("return _G['debris']")()

--[lua/server/Items/ItemBindingHandler.d.ts]
  Exports.ItemBindingHandler = loadstring("return _G['ItemBindingHandler']")()

--[lua/server/Items/ProceduralDistributions.d.ts]
  Exports.ProceduralDistributions = loadstring("return _G['ProceduralDistributions']")()

--[lua/server/Items/ScriptItemInterface.d.ts]
  Exports.ScriptItemInterface = loadstring("return _G['ScriptItemInterface']")()

--[lua/server/Items/SuburbsDistributions.d.ts]
  Exports.NoContainerFillRooms = loadstring("return _G['NoContainerFillRooms']")()
  Exports.WeaponUpgrades = loadstring("return _G['WeaponUpgrades']")()

--[lua/server/Map/MapObjects/MOFarming.d.ts]

--[lua/server/Map/MetaEnum.d.ts]
  Exports.MetaObjectEnum = loadstring("return _G['MetaObjectEnum']")()

--[lua/server/Map/SGlobalObject.d.ts]
  Exports.SGlobalObject = loadstring("return _G['SGlobalObject']")()

--[lua/server/Map/SGlobalObjectSystem.d.ts]
  Exports.SGlobalObjectSystem = loadstring("return _G['SGlobalObjectSystem']")()

--[lua/server/MetalDrum/BuildingObjects/ISMetalDrum.d.ts]
  Exports.ISMetalDrum = loadstring("return _G['ISMetalDrum']")()

--[lua/server/MetalDrum/SMetalDrumGlobalObject.d.ts]
  Exports.SMetalDrumGlobalObject = loadstring("return _G['SMetalDrumGlobalObject']")()

--[lua/server/MetalDrum/SMetalDrumSystem.d.ts]
  Exports.SMetalDrumSystem = loadstring("return _G['SMetalDrumSystem']")()

--[lua/server/metazones/metazoneHandler.d.ts]

--[lua/server/Movers/ISBaseMover.d.ts]
  Exports.ISBaseMover = loadstring("return _G['ISBaseMover']")()

--[lua/server/Movers/MoverStateMachine.d.ts]
  Exports.ISMoverStateMachine = loadstring("return _G['ISMoverStateMachine']")()

--[lua/server/Movers/MoverStates/ISBaseState.d.ts]
  Exports.ISBaseState = loadstring("return _G['ISBaseState']")()

--[lua/server/Movers/MoverStates/MoveToState.d.ts]
  Exports.MoveToState = loadstring("return _G['MoveToState']")()

--[lua/server/Movers/Rabbit.d.ts]
  Exports.Rabbit = loadstring("return _G['Rabbit']")()

--[lua/server/NewSelectionSystem/GridSquareSelector.d.ts]
  Exports.GridSquareSelector = loadstring("return _G['GridSquareSelector']")()

--[lua/server/NPCs/SadisticAIDirector/SadisticMusicDirector.d.ts]
  Exports.SadisticMusicDirector = loadstring("return _G['SadisticMusicDirector']")()

--[lua/server/Professions/Professions.d.ts]
  Exports.Professions = loadstring("return _G['Professions']")()

--[lua/server/radio/ISDynamicRadio.d.ts]
  Exports.DynamicRadio = loadstring("return _G['DynamicRadio']")()

--[lua/server/radio/ISWeatherChannel.d.ts]
  Exports.WeatherChannel = loadstring("return _G['WeatherChannel']")()

--[lua/server/RainBarrel/BuildingObjects/RainCollectorBarrel.d.ts]
  Exports.RainCollectorBarrel = loadstring("return _G['RainCollectorBarrel']")()

--[lua/server/RainBarrel/SRainBarrelGlobalObject.d.ts]
  Exports.SRainBarrelGlobalObject = loadstring("return _G['SRainBarrelGlobalObject']")()

--[lua/server/RainBarrel/SRainBarrelSystem.d.ts]
  Exports.SRainBarrelSystem = loadstring("return _G['SRainBarrelSystem']")()

--[lua/server/recipecode.d.ts]
  Exports.Recipe = loadstring("return _G['Recipe']")()

--[lua/server/Seasons/season.d.ts]
  Exports.season = loadstring("return _G['season']")()

--[lua/server/Seasons/seasonProps.d.ts]
  Exports.seasonProps = loadstring("return _G['seasonProps']")()

--[lua/server/TemplateReplacers.d.ts]
  Exports.TemplateReplacers = loadstring("return _G['TemplateReplacers']")()

--[lua/server/Traps/BuildingObjects/TrapBO.d.ts]
  Exports.TrapBO = loadstring("return _G['TrapBO']")()

--[lua/server/Traps/ISUI/ISTrapMenu.d.ts]
  Exports.ISTrapMenu = loadstring("return _G['ISTrapMenu']")()

--[lua/server/Traps/STrapGlobalObject.d.ts]
  Exports.STrapGlobalObject = loadstring("return _G['STrapGlobalObject']")()

--[lua/server/Traps/STrapSystem.d.ts]
  Exports.STrapSystem = loadstring("return _G['STrapSystem']")()

--[lua/server/Traps/TrapDefinition.d.ts]
  Exports.Animals = loadstring("return _G['Animals']")()
  Exports.Traps = loadstring("return _G['Traps']")()

--[lua/server/TurnBased/TurnBasedMain.d.ts]
  Exports.TurnbasedDummyChr = loadstring("return _G['TurnbasedDummyChr']")()

--[lua/server/TutorialHelperFunctions.d.ts]
  Exports.TutorialHelperFunctions = loadstring("return _G['TutorialHelperFunctions']")()

--[lua/server/Vehicles/Vehicles.d.ts]
  Exports.Vehicles = loadstring("return _G['Vehicles']")()
  Exports.VehicleUtils = loadstring("return _G['VehicleUtils']")()

--[lua/server/XpSystem/XPSystem_SkillBook.d.ts]
  Exports.SkillBook = loadstring("return _G['SkillBook']")()

--[lua/server/XpSystem/XpSystem_text.d.ts]
  Exports.xpSystemText = loadstring("return _G['xpSystemText']")()

--[lua/server/XpSystem/XpUpdate.d.ts]
  Exports.xpUpdate = loadstring("return _G['xpUpdate']")()

--[lua/shared/defines.d.ts]
  Exports.ZomboidGlobals = loadstring("return _G['ZomboidGlobals']")()

--[lua/shared/Definitions/ClothingRecipesDefinitions.d.ts]
  Exports.ClothingRecipesDefinitions = loadstring("return _G['ClothingRecipesDefinitions']")()

--[lua/shared/Definitions/DefaultClothing.d.ts]
  Exports.DefaultClothing = loadstring("return _G['DefaultClothing']")()

--[lua/shared/Definitions/FitnessExercises.d.ts]
  Exports.FitnessExercises = loadstring("return _G['FitnessExercises']")()

--[lua/shared/Foraging/forageDefinitions.d.ts]
  Exports.forageCategories = loadstring("return _G['forageCategories']")()
  Exports.forageDefaultDefs = loadstring("return _G['forageDefaultDefs']")()
  Exports.forageDefs = loadstring("return _G['forageDefs']")()
  Exports.forageSkills = loadstring("return _G['forageSkills']")()
  Exports.forageZones = loadstring("return _G['forageZones']")()
  Exports.scavenges = loadstring("return _G['scavenges']")()

--[lua/shared/Foraging/forageSystem.d.ts]
  Exports.forageSystem = loadstring("return _G['forageSystem']")()

--[lua/shared/ISBaseObject.d.ts]
  Exports.ISBaseObject = loadstring("return _G['ISBaseObject']")()

--[lua/shared/iwbumstempmodelcompat.d.ts]

--[lua/shared/JoyPad/JoyPadSetup.d.ts]
  Exports.JoypadControllerData = loadstring("return _G['JoypadControllerData']")()
  Exports.JoypadData = loadstring("return _G['JoypadData']")()
  Exports.joypad = loadstring("return _G['joypad']")()
  Exports.Joypad = loadstring("return _G['Joypad']")()
  Exports.JoypadState = loadstring("return _G['JoypadState']")()

--[lua/shared/keyBinding.d.ts]
  Exports.keyBinding = loadstring("return _G['keyBinding']")()

--[lua/shared/Logs/ISLogSystem.d.ts]
  Exports.ISLogSystem = loadstring("return _G['ISLogSystem']")()

--[lua/shared/Logs/ISPerkLog.d.ts]
  Exports.ISPerkLog = loadstring("return _G['ISPerkLog']")()

--[lua/shared/luautils.d.ts]
  Exports.luautils = loadstring("return _G['luautils']")()

--[lua/shared/NPCs/MainCreationMethods.d.ts]
  Exports.BaseGameCharacterDetails = loadstring("return _G['BaseGameCharacterDetails']")()

--[lua/shared/RecordedMedia/ISRecordeMedia.d.ts]
  Exports.ISRecordedMedia = loadstring("return _G['ISRecordedMedia']")()

--[lua/shared/Reloading/ISRackAction.d.ts]
  Exports.ISRackAction = loadstring("return _G['ISRackAction']")()

--[lua/shared/Reloading/ISReloadable.d.ts]
  Exports.ISReloadable = loadstring("return _G['ISReloadable']")()

--[lua/shared/Reloading/ISReloadableMagazine.d.ts]
  Exports.ISReloadableMagazine = loadstring("return _G['ISReloadableMagazine']")()

--[lua/shared/Reloading/ISReloadableWeapon.d.ts]
  Exports.ISReloadableWeapon = loadstring("return _G['ISReloadableWeapon']")()

--[lua/shared/Reloading/ISReloadAction.d.ts]
  Exports.ISReloadAction = loadstring("return _G['ISReloadAction']")()

--[lua/shared/Reloading/ISReloadManager.d.ts]
  Exports.ISReloadManager = loadstring("return _G['ISReloadManager']")()
  Exports.aaa = loadstring("return _G['aaa']")()

--[lua/shared/Reloading/ISReloadUtil.d.ts]
  Exports.ISReloadUtil = loadstring("return _G['ISReloadUtil']")()

--[lua/shared/Reloading/ISRevolverWeapon.d.ts]
  Exports.ISRevolverWeapon = loadstring("return _G['ISRevolverWeapon']")()

--[lua/shared/Reloading/ISSemiAutoWeapon.d.ts]
  Exports.ISSemiAutoWeapon = loadstring("return _G['ISSemiAutoWeapon']")()

--[lua/shared/Reloading/ISShotgunWeapon.d.ts]
  Exports.ISShotgunWeapon = loadstring("return _G['ISShotgunWeapon']")()

--[lua/shared/Reloading/stormysReload.d.ts]
  Exports.ReloadManager = loadstring("return _G['ReloadManager']")()

--[lua/shared/SoundBanks/SoundBanks.d.ts]
  Exports.ambientSoundTable = loadstring("return _G['ambientSoundTable']")()
  Exports.baseSoundTable = loadstring("return _G['baseSoundTable']")()
  Exports.footStepTable = loadstring("return _G['footStepTable']")()
  Exports.globalSoundTable = loadstring("return _G['globalSoundTable']")()
  Exports.voiceTable = loadstring("return _G['voiceTable']")()

--[lua/shared/SpawnRegions.d.ts]
  Exports.SpawnRegionMgr = loadstring("return _G['SpawnRegionMgr']")()

--[lua/shared/StashDescriptions/StashUtil.d.ts]
  Exports.StashUtil = loadstring("return _G['StashUtil']")()

--[lua/shared/TimedActions/ISBaseTimedAction.d.ts]
  Exports.ISBaseTimedAction = loadstring("return _G['ISBaseTimedAction']")()

--[lua/shared/Util/AdjacentFreeTileFinder.d.ts]
  Exports.AdjacentFreeTileFinder = loadstring("return _G['AdjacentFreeTileFinder']")()

--[lua/shared/Util/BuildingHelper.d.ts]
  Exports.BuildingHelper = loadstring("return _G['BuildingHelper']")()

--[lua/shared/Util/ISPriorityTable.d.ts]
  Exports.ISPriorityTable = loadstring("return _G['ISPriorityTable']")()

--[lua/shared/Util/LuaList.d.ts]
  Exports.LuaList = loadstring("return _G['LuaList']")()

--[lua/shared/Util/LuaNet.d.ts]
  Exports.LuaNet = loadstring("return _G['LuaNet']")()

--[lua/shared/Util/StringReplacer.d.ts]
  Exports.StringReplacer = loadstring("return _G['StringReplacer']")()

  _G.PIPEWRENCH_READY = true
  -- Trigger reimport blocks for all compiled PipeWrench TypeScript file(s).
  triggerEvent('OnPipeWrenchBoot', true)
end)
-- [PARTIAL:STOP]

return Exports
