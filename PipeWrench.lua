local Exports = {}

--------------------------------------------
-- [PARTIAL] : java.interface.partial.lua --
--------------------------------------------

function Exports.tonumber(arg) return tonumber(arg) end
function Exports.tostring(arg) return tostring(arg) end
function Exports.global(id) return _G[id] end
function Exports.loadstring(lua) return loadstring(lua) end
function Exports.execute(lua) return loadstring(lua)() end
function Exports.addEventListener(id, func) Events[id].Add(func) end
function Exports.removeEventListener(id, func) Events[id].Add(func) end
function Exports.AddNoiseToken(arg1,arg2) return AddNoiseToken(arg1,arg2) end
function Exports.AddWorldSound(arg1,arg2,arg3) return AddWorldSound(arg1,arg2,arg3) end
function Exports.InvMngGetItem(arg1,arg2,arg3,arg4) return InvMngGetItem(arg1,arg2,arg3,arg4) end
function Exports.InvMngRemoveItem(arg1,arg2,arg3) return InvMngRemoveItem(arg1,arg2,arg3) end
function Exports.proceedFactionMessage(arg1) return proceedFactionMessage(arg1) end
function Exports.processAdminChatMessage(arg1) return processAdminChatMessage(arg1) end
function Exports.processSafehouseMessage(arg1) return processSafehouseMessage(arg1) end
function Exports.SendCommandToServer(arg1) return SendCommandToServer(arg1) end
function Exports.ZombRand(arg1,arg2) return ZombRand(arg1,arg2) end
function Exports.ZombRandBetween(arg1,arg2) return ZombRandBetween(arg1,arg2) end
function Exports.ZombRandFloat(arg1,arg2) return ZombRandFloat(arg1,arg2) end
function Exports.acceptFactionInvite(arg1,arg2) return acceptFactionInvite(arg1,arg2) end
function Exports.acceptSafehouseInvite(arg1,arg2,arg3) return acceptSafehouseInvite(arg1,arg2,arg3) end
function Exports.acceptTrading(arg1,arg2,arg3) return acceptTrading(arg1,arg2,arg3) end
function Exports.activateJoypadOnSteamDeck() return activateJoypadOnSteamDeck() end
function Exports.activateSteamOverlayToWebPage(arg1) return activateSteamOverlayToWebPage(arg1) end
function Exports.activateSteamOverlayToWorkshop() return activateSteamOverlayToWorkshop() end
function Exports.activateSteamOverlayToWorkshopItem(arg1) return activateSteamOverlayToWorkshopItem(arg1) end
function Exports.activateSteamOverlayToWorkshopUser() return activateSteamOverlayToWorkshopUser() end
function Exports.addAllBurntVehicles() return addAllBurntVehicles() end
function Exports.addAllSmashedVehicles() return addAllSmashedVehicles() end
function Exports.addAllVehicles(arg1) return addAllVehicles(arg1) end
function Exports.addAnimal(arg1,arg2,arg3,arg4,arg5,arg6,arg7) return addAnimal(arg1,arg2,arg3,arg4,arg5,arg6,arg7) end
function Exports.addAreaHighlight(arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9) return addAreaHighlight(arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9) end
function Exports.addCarCrash() return addCarCrash() end
function Exports.addPhysicsObject() return addPhysicsObject() end
function Exports.addRole(arg1) return addRole(arg1) end
function Exports.addTicket(arg1,arg2,arg3) return addTicket(arg1,arg2,arg3) end
function Exports.addUserlog(arg1,arg2,arg3) return addUserlog(arg1,arg2,arg3) end
function Exports.addVariableToSyncList(arg1) return addVariableToSyncList(arg1) end
function Exports.addVehicle(arg1,arg2,arg3,arg4) return addVehicle(arg1,arg2,arg3,arg4) end
function Exports.addVehicleDebug(arg1,arg2,arg3,arg4) return addVehicleDebug(arg1,arg2,arg3,arg4) end
function Exports.addVirtualZombie(arg1,arg2) return addVirtualZombie(arg1,arg2) end
function Exports.addWarningPoint(arg1,arg2,arg3) return addWarningPoint(arg1,arg2,arg3) end
function Exports.addZombiesInOutfit(arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13) return addZombiesInOutfit(arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13) end
function Exports.assaultPlayer() return assaultPlayer() end
function Exports.attachTrailerToPlayerVehicle(arg1) return attachTrailerToPlayerVehicle(arg1) end
function Exports.backToSinglePlayer() return backToSinglePlayer() end
function Exports.breakpoint() return breakpoint() end
function Exports.cacheFileExists(arg1) return cacheFileExists(arg1) end
function Exports.callLua(arg1,arg2) return callLua(arg1,arg2) end
function Exports.callLuaBool(arg1,arg2) return callLuaBool(arg1,arg2) end
function Exports.callLuaReturn(arg1,arg2) return callLuaReturn(arg1,arg2) end
function Exports.canConnect() return canConnect() end
function Exports.canInviteFriends() return canInviteFriends() end
function Exports.canModifyPlayerScoreboard() return canModifyPlayerScoreboard() end
function Exports.canSeePlayerStats() return canSeePlayerStats() end
function Exports.changeItemTypeTransaction(arg1,arg2,arg3) return changeItemTypeTransaction(arg1,arg2,arg3) end
function Exports.checkModsNeedUpdate(arg1) return checkModsNeedUpdate(arg1) end
function Exports.checkPermissions(arg1,arg2) return checkPermissions(arg1,arg2) end
function Exports.checkPlayerCanUseChat(arg1) return checkPlayerCanUseChat(arg1) end
function Exports.checkPlayerExistsInDatabase(arg1,arg2,arg3) return checkPlayerExistsInDatabase(arg1,arg2,arg3) end
function Exports.checkSaveFileExists(arg1) return checkSaveFileExists(arg1) end
function Exports.checkSaveFolderExists(arg1) return checkSaveFolderExists(arg1) end
function Exports.checkSavePlayerExists() return checkSavePlayerExists() end
function Exports.checkStringPattern(arg1) return checkStringPattern(arg1) end
function Exports.clearPVPEvents() return clearPVPEvents() end
function Exports.cloneItemType(arg1,arg2) return cloneItemType(arg1,arg2) end
function Exports.configureLighting(arg1) return configureLighting(arg1) end
function Exports.connectToServerStateCallback(arg1) return connectToServerStateCallback(arg1) end
function Exports.connectionManagerLog(arg1,arg2) return connectionManagerLog(arg1,arg2) end
function Exports.convertToPZNetTable(arg1) return convertToPZNetTable(arg1) end
function Exports.copyTable(arg1,arg2) return copyTable(arg1,arg2) end
function Exports.createBuildAction(arg1,arg2,arg3,arg4,arg5,arg6,arg7) return createBuildAction(arg1,arg2,arg3,arg4,arg5,arg6,arg7) end
function Exports.createHordeFromTo(arg1,arg2,arg3,arg4,arg5) return createHordeFromTo(arg1,arg2,arg3,arg4,arg5) end
function Exports.createHordeInAreaTo(arg1,arg2,arg3,arg4,arg5,arg6,arg7) return createHordeInAreaTo(arg1,arg2,arg3,arg4,arg5,arg6,arg7) end
function Exports.createItemTransaction(arg1,arg2,arg3,arg4) return createItemTransaction(arg1,arg2,arg3,arg4) end
function Exports.createItemTransactionWithPosData(arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8) return createItemTransactionWithPosData(arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8) end
function Exports.createNewScriptItem(arg1,arg2,arg3,arg4,arg5) return createNewScriptItem(arg1,arg2,arg3,arg4,arg5) end
function Exports.createQRCodeTex(arg1,arg2) return createQRCodeTex(arg1,arg2) end
function Exports.createRandomDeadBody(arg1,arg2) return createRandomDeadBody(arg1,arg2) end
function Exports.createRegionFile() return createRegionFile() end
function Exports.createStory(arg1) return createStory(arg1) end
function Exports.createTile(arg1,arg2) return createTile(arg1,arg2) end
function Exports.createWorld(arg1) return createWorld(arg1) end
function Exports.createZombie(arg1,arg2,arg3,arg4,arg5,arg6) return createZombie(arg1,arg2,arg3,arg4,arg5,arg6) end
function Exports.debugFullyStreamedIn(arg1,arg2) return debugFullyStreamedIn(arg1,arg2) end
function Exports.debugLuaTable(arg1,arg2) return debugLuaTable(arg1,arg2) end
function Exports.debugSetRoomType(arg1) return debugSetRoomType(arg1) end
function Exports.deleteAllGameModeSaves(arg1) return deleteAllGameModeSaves(arg1) end
function Exports.deletePlayerFromDatabase(arg1,arg2,arg3) return deletePlayerFromDatabase(arg1,arg2,arg3) end
function Exports.deletePlayerSave(arg1) return deletePlayerSave(arg1) end
function Exports.deleteRole(arg1) return deleteRole(arg1) end
function Exports.deleteSandboxPreset(arg1) return deleteSandboxPreset(arg1) end
function Exports.deleteSave(arg1) return deleteSave(arg1) end
function Exports.disconnect() return disconnect() end
function Exports.doChallenge(arg1) return doChallenge(arg1) end
function Exports.doKeyPress(arg1) return doKeyPress(arg1) end
function Exports.doLuaDebuggerAction(arg1) return doLuaDebuggerAction(arg1) end
function Exports.doTutorial(arg1) return doTutorial(arg1) end
function Exports.drawOverheadMap(arg1,arg2,arg3,arg4,arg5) return drawOverheadMap(arg1,arg2,arg3,arg4,arg5) end
function Exports.emulateAnimEvent(arg1,arg2,arg3,arg4) return emulateAnimEvent(arg1,arg2,arg3,arg4) end
function Exports.emulateAnimEventOnce(arg1,arg2,arg3,arg4) return emulateAnimEventOnce(arg1,arg2,arg3,arg4) end
function Exports.endFileInput() return endFileInput() end
function Exports.endFileOutput() return endFileOutput() end
function Exports.endHelicopter() return endHelicopter() end
function Exports.endTextFileInput() return endTextFileInput() end
function Exports.executeQuery(arg1,arg2) return executeQuery(arg1,arg2) end
function Exports.fastfloor(arg1) return fastfloor(arg1) end
function Exports.fileExists(arg1) return fileExists(arg1) end
function Exports.focusOnTab(arg1) return focusOnTab(arg1) end
function Exports.forceChangeState(arg1) return forceChangeState(arg1) end
function Exports.forceDisconnect() return forceDisconnect() end
function Exports.forceSnowCheck() return forceSnowCheck() end
function Exports.generateSecretKey(arg1) return generateSecretKey(arg1) end
function Exports.getAbsoluteSaveFolderName(arg1) return getAbsoluteSaveFolderName(arg1) end
function Exports.getAccessLevel() return getAccessLevel() end
function Exports.getActionDuration(arg1) return getActionDuration(arg1) end
function Exports.getActivatedMods() return getActivatedMods() end
function Exports.getAllAnimalsDefinitions() return getAllAnimalsDefinitions() end
function Exports.getAllBeardStyles() return getAllBeardStyles() end
function Exports.getAllDecalNamesForItem(arg1) return getAllDecalNamesForItem(arg1) end
function Exports.getAllHairStyles(arg1) return getAllHairStyles(arg1) end
function Exports.getAllItems() return getAllItems() end
function Exports.getAllItemsForBodyLocation(arg1) return getAllItemsForBodyLocation(arg1) end
function Exports.getAllOutfits(arg1) return getAllOutfits(arg1) end
function Exports.getAllRecipes() return getAllRecipes() end
function Exports.getAllSavedPlayers() return getAllSavedPlayers() end
function Exports.getAllVehicles() return getAllVehicles() end
function Exports.getAllVoiceStyles() return getAllVoiceStyles() end
function Exports.getAmbientStreamManager() return getAmbientStreamManager() end
function Exports.getAndFindNearestTracks(arg1) return getAndFindNearestTracks(arg1) end
function Exports.getAnimal(arg1) return getAnimal(arg1) end
function Exports.getAnimalChunk(arg1,arg2) return getAnimalChunk(arg1,arg2) end
function Exports.getAnimationViewerState() return getAnimationViewerState() end
function Exports.getAttachmentEditorState() return getAttachmentEditorState() end
function Exports.getBaseSoundBank() return getBaseSoundBank() end
function Exports.getBeardStylesInstance() return getBeardStylesInstance() end
function Exports.getBehaviourDebugPlayer() return getBehaviourDebugPlayer() end
function Exports.getBreakModGameVersion() return getBreakModGameVersion() end
function Exports.getButtonCount(arg1) return getButtonCount(arg1) end
function Exports.getCallframeTop(arg1) return getCallframeTop(arg1) end
function Exports.getCameraOffX() return getCameraOffX() end
function Exports.getCameraOffY() return getCameraOffY() end
function Exports.getCapabilities() return getCapabilities() end
function Exports.getCell() return getCell() end
function Exports.getCellMaxX() return getCellMaxX() end
function Exports.getCellMaxY() return getCellMaxY() end
function Exports.getCellMinX() return getCellMinX() end
function Exports.getCellMinY() return getCellMinY() end
function Exports.getCellSizeInChunks() return getCellSizeInChunks() end
function Exports.getCellSizeInSquares() return getCellSizeInSquares() end
function Exports.getChunkSizeInSquares() return getChunkSizeInSquares() end
function Exports.getClassField(arg1,arg2) return getClassField(arg1,arg2) end
function Exports.getClassFieldVal(arg1,arg2) return getClassFieldVal(arg1,arg2) end
function Exports.getClassFunction(arg1,arg2) return getClassFunction(arg1,arg2) end
function Exports.getClientLoadingScreen(arg1) return getClientLoadingScreen(arg1) end
function Exports.getClientUsername() return getClientUsername() end
function Exports.getClimateManager() return getClimateManager() end
function Exports.getClimateMoon() return getClimateMoon() end
function Exports.getConnectedPlayers() return getConnectedPlayers() end
function Exports.getControllerAxisCount(arg1) return getControllerAxisCount(arg1) end
function Exports.getControllerAxisValue(arg1,arg2) return getControllerAxisValue(arg1,arg2) end
function Exports.getControllerButtonCount(arg1) return getControllerButtonCount(arg1) end
function Exports.getControllerCount() return getControllerCount() end
function Exports.getControllerDeadZone(arg1,arg2) return getControllerDeadZone(arg1,arg2) end
function Exports.getControllerGUID(arg1) return getControllerGUID(arg1) end
function Exports.getControllerName(arg1) return getControllerName(arg1) end
function Exports.getControllerPovX(arg1) return getControllerPovX(arg1) end
function Exports.getControllerPovY(arg1) return getControllerPovY(arg1) end
function Exports.getCore() return getCore() end
function Exports.getCoroutineCallframeStack(arg1,arg2) return getCoroutineCallframeStack(arg1,arg2) end
function Exports.getCoroutineObjStack(arg1,arg2) return getCoroutineObjStack(arg1,arg2) end
function Exports.getCoroutineObjStackWithBase(arg1,arg2) return getCoroutineObjStackWithBase(arg1,arg2) end
function Exports.getCoroutineTop(arg1) return getCoroutineTop(arg1) end
function Exports.getCurrentCoroutine() return getCurrentCoroutine() end
function Exports.getCurrentSaveName() return getCurrentSaveName() end
function Exports.getCurrentUserProfileName() return getCurrentUserProfileName() end
function Exports.getCurrentUserSteamID() return getCurrentUserSteamID() end
function Exports.getCustomizationData(arg1,arg2,arg3,arg4,arg5,arg6,arg7) return getCustomizationData(arg1,arg2,arg3,arg4,arg5,arg6,arg7) end
function Exports.getDBSchema() return getDBSchema() end
function Exports.getDebug() return getDebug() end
function Exports.getDebugOptions() return getDebugOptions() end
function Exports.getDirectionTo(arg1,arg2) return getDirectionTo(arg1,arg2) end
function Exports.getEditVehicleState() return getEditVehicleState() end
function Exports.getErosion() return getErosion() end
function Exports.getEvolvedRecipes() return getEvolvedRecipes() end
function Exports.getFMODEventPathList() return getFMODEventPathList() end
function Exports.getFMODSoundBank() return getFMODSoundBank() end
function Exports.getFakeAttacker() return getFakeAttacker() end
function Exports.getFileInput(arg1) return getFileInput(arg1) end
function Exports.getFileOutput(arg1) return getFileOutput(arg1) end
function Exports.getFileReader(arg1,arg2) return getFileReader(arg1,arg2) end
function Exports.getFileSeparator() return getFileSeparator() end
function Exports.getFileWriter(arg1,arg2,arg3) return getFileWriter(arg1,arg2,arg3) end
function Exports.getFilenameOfCallframe(arg1) return getFilenameOfCallframe(arg1) end
function Exports.getFilenameOfClosure(arg1) return getFilenameOfClosure(arg1) end
function Exports.getFirstLineOfClosure(arg1) return getFirstLineOfClosure(arg1) end
function Exports.getFriendsList() return getFriendsList() end
function Exports.getFullSaveDirectoryTable() return getFullSaveDirectoryTable() end
function Exports.getGameClient() return getGameClient() end
function Exports.getGameFilesInput(arg1) return getGameFilesInput(arg1) end
function Exports.getGameFilesTextInput(arg1) return getGameFilesTextInput(arg1) end
function Exports.getGameSpeed() return getGameSpeed() end
function Exports.getGameTime() return getGameTime() end
function Exports.getGameVersion() return getGameVersion() end
function Exports.getGametimeTimestamp() return getGametimeTimestamp() end
function Exports.getHairStylesInstance() return getHairStylesInstance() end
function Exports.getHourMinute() return getHourMinute() end
function Exports.getHutch(arg1,arg2,arg3) return getHutch(arg1,arg2,arg3) end
function Exports.getIsoEntitiesDebug() return getIsoEntitiesDebug() end
function Exports.getIsoMarkers() return getIsoMarkers() end
function Exports.getItem(arg1) return getItem(arg1) end
function Exports.getItemActualWeight(arg1) return getItemActualWeight(arg1) end
function Exports.getItemConditionMax(arg1) return getItemConditionMax(arg1) end
function Exports.getItemCount(arg1) return getItemCount(arg1) end
function Exports.getItemDisplayName(arg1) return getItemDisplayName(arg1) end
function Exports.getItemEvolvedRecipeName(arg1) return getItemEvolvedRecipeName(arg1) end
function Exports.getItemFoodType(arg1) return getItemFoodType(arg1) end
function Exports.getItemName(arg1) return getItemName(arg1) end
function Exports.getItemNameFromFullType(arg1) return getItemNameFromFullType(arg1) end
function Exports.getItemStaticModel(arg1) return getItemStaticModel(arg1) end
function Exports.getItemTex(arg1) return getItemTex(arg1) end
function Exports.getItemText(arg1) return getItemText(arg1) end
function Exports.getItemTextureName(arg1) return getItemTextureName(arg1) end
function Exports.getItemTransactionDuration(arg1) return getItemTransactionDuration(arg1) end
function Exports.getItemWeight(arg1) return getItemWeight(arg1) end
function Exports.getJoypadAButton(arg1) return getJoypadAButton(arg1) end
function Exports.getJoypadAimingAxisX(arg1) return getJoypadAimingAxisX(arg1) end
function Exports.getJoypadAimingAxisY(arg1) return getJoypadAimingAxisY(arg1) end
function Exports.getJoypadBButton(arg1) return getJoypadBButton(arg1) end
function Exports.getJoypadBackButton(arg1) return getJoypadBackButton(arg1) end
function Exports.getJoypadLBumper(arg1) return getJoypadLBumper(arg1) end
function Exports.getJoypadLeftStickButton(arg1) return getJoypadLeftStickButton(arg1) end
function Exports.getJoypadMovementAxisX(arg1) return getJoypadMovementAxisX(arg1) end
function Exports.getJoypadMovementAxisY(arg1) return getJoypadMovementAxisY(arg1) end
function Exports.getJoypadRBumper(arg1) return getJoypadRBumper(arg1) end
function Exports.getJoypadRightStickButton(arg1) return getJoypadRightStickButton(arg1) end
function Exports.getJoypadStartButton(arg1) return getJoypadStartButton(arg1) end
function Exports.getJoypadXButton(arg1) return getJoypadXButton(arg1) end
function Exports.getJoypadYButton(arg1) return getJoypadYButton(arg1) end
function Exports.getKeyCode(arg1) return getKeyCode(arg1) end
function Exports.getKeyName(arg1) return getKeyName(arg1) end
function Exports.getLastPlayedDate(arg1) return getLastPlayedDate(arg1) end
function Exports.getLastStandPlayerFileNames() return getLastStandPlayerFileNames() end
function Exports.getLastStandPlayersDirectory() return getLastStandPlayersDirectory() end
function Exports.getLatestSave() return getLatestSave() end
function Exports.getLineNumber(arg1) return getLineNumber(arg1) end
function Exports.getLoadedLua(arg1) return getLoadedLua(arg1) end
function Exports.getLoadedLuaCount() return getLoadedLuaCount() end
function Exports.getLocalVarCount(arg1) return getLocalVarCount(arg1) end
function Exports.getLocalVarName(arg1,arg2) return getLocalVarName(arg1,arg2) end
function Exports.getLocalVarStack(arg1,arg2) return getLocalVarStack(arg1,arg2) end
function Exports.getLocalVarStackIndex(arg1,arg2) return getLocalVarStackIndex(arg1,arg2) end
function Exports.getLotDirectories() return getLotDirectories() end
function Exports.getLuaDebuggerErrorCount() return getLuaDebuggerErrorCount() end
function Exports.getLuaDebuggerErrors() return getLuaDebuggerErrors() end
function Exports.getLuaStackTrace() return getLuaStackTrace() end
function Exports.getMPStatus() return getMPStatus() end
function Exports.getMapDirectoryTable() return getMapDirectoryTable() end
function Exports.getMapFoldersForMod(arg1) return getMapFoldersForMod(arg1) end
function Exports.getMapInfo(arg1) return getMapInfo(arg1) end
function Exports.getMaxActivePlayers() return getMaxActivePlayers() end
function Exports.getMaxPlayers() return getMaxPlayers() end
function Exports.getMaximumWorldLevel() return getMaximumWorldLevel() end
function Exports.getMethodParameter(arg1,arg2) return getMethodParameter(arg1,arg2) end
function Exports.getMethodParameterCount(arg1) return getMethodParameterCount(arg1) end
function Exports.getMinimumWorldLevel() return getMinimumWorldLevel() end
function Exports.getModDirectoryTable() return getModDirectoryTable() end
function Exports.getModFileReader(arg1,arg2,arg3) return getModFileReader(arg1,arg2,arg3) end
function Exports.getModFileWriter(arg1,arg2,arg3,arg4) return getModFileWriter(arg1,arg2,arg3,arg4) end
function Exports.getModInfo(arg1) return getModInfo(arg1) end
function Exports.getModInfoByID(arg1) return getModInfoByID(arg1) end
function Exports.getMods() return getMods() end
function Exports.getMouseX() return getMouseX() end
function Exports.getMouseXScaled() return getMouseXScaled() end
function Exports.getMouseY() return getMouseY() end
function Exports.getMouseYScaled() return getMouseYScaled() end
function Exports.getMyDocumentFolder() return getMyDocumentFolder() end
function Exports.getNumActivePlayers() return getNumActivePlayers() end
function Exports.getNumClassFields(arg1) return getNumClassFields(arg1) end
function Exports.getNumClassFunctions(arg1) return getNumClassFunctions(arg1) end
function Exports.getOnlinePlayers() return getOnlinePlayers() end
function Exports.getOnlineUsername() return getOnlineUsername() end
function Exports.getPacketCounts(arg1) return getPacketCounts(arg1) end
function Exports.getPerformance() return getPerformance() end
function Exports.getPlayer() return getPlayer() end
function Exports.getPlayerByOnlineID(arg1) return getPlayerByOnlineID(arg1) end
function Exports.getPlayerFromUsername(arg1) return getPlayerFromUsername(arg1) end
function Exports.getPlayerInfo(arg1) return getPlayerInfo(arg1) end
function Exports.getPlayerScreenHeight(arg1) return getPlayerScreenHeight(arg1) end
function Exports.getPlayerScreenLeft(arg1) return getPlayerScreenLeft(arg1) end
function Exports.getPlayerScreenTop(arg1) return getPlayerScreenTop(arg1) end
function Exports.getPlayerScreenWidth(arg1) return getPlayerScreenWidth(arg1) end
function Exports.getPublicServersList() return getPublicServersList() end
function Exports.getPuddlesManager() return getPuddlesManager() end
function Exports.getRadioAPI() return getRadioAPI() end
function Exports.getRadioText(arg1) return getRadioText(arg1) end
function Exports.getRadioTranslators(arg1) return getRadioTranslators(arg1) end
function Exports.getRagdollSettingsManager() return getRagdollSettingsManager() end
function Exports.getRandomUUID() return getRandomUUID() end
function Exports.getRecipeDisplayName(arg1) return getRecipeDisplayName(arg1) end
function Exports.getReconnectCountdownTimer() return getReconnectCountdownTimer() end
function Exports.getRemotePlayModeActive() return getRemotePlayModeActive() end
function Exports.getRenderer() return getRenderer() end
function Exports.getRoles() return getRoles() end
function Exports.getSLSoundManager() return getSLSoundManager() end
function Exports.getSandboxFileWriter(arg1,arg2,arg3) return getSandboxFileWriter(arg1,arg2,arg3) end
function Exports.getSandboxOptions() return getSandboxOptions() end
function Exports.getSandboxPresets() return getSandboxPresets() end
function Exports.getSaveDirectory(arg1) return getSaveDirectory(arg1) end
function Exports.getSaveDirectoryTable() return getSaveDirectoryTable() end
function Exports.getSaveInfo(arg1) return getSaveInfo(arg1) end
function Exports.getSaveName(arg1) return getSaveName(arg1) end
function Exports.getScriptManager() return getScriptManager() end
function Exports.getSeamEditorState() return getSeamEditorState() end
function Exports.getSearchMode() return getSearchMode() end
function Exports.getServerAddressFromArgs() return getServerAddressFromArgs() end
function Exports.getServerIP() return getServerIP() end
function Exports.getServerList() return getServerList() end
function Exports.getServerListFile() return getServerListFile() end
function Exports.getServerModData() return getServerModData() end
function Exports.getServerName() return getServerName() end
function Exports.getServerOptions() return getServerOptions() end
function Exports.getServerPasswordFromArgs() return getServerPasswordFromArgs() end
function Exports.getServerPort() return getServerPort() end
function Exports.getServerSavedWorldVersion(arg1) return getServerSavedWorldVersion(arg1) end
function Exports.getServerSettingsManager() return getServerSettingsManager() end
function Exports.getServerSpawnRegions() return getServerSpawnRegions() end
function Exports.getServerStatistic() return getServerStatistic() end
function Exports.getServerStatisticEnable() return getServerStatisticEnable() end
function Exports.getShortenedFilename(arg1) return getShortenedFilename(arg1) end
function Exports.getSleepingEvent() return getSleepingEvent() end
function Exports.getSoundManager() return getSoundManager() end
function Exports.getSpecificPlayer(arg1) return getSpecificPlayer(arg1) end
function Exports.getSprite(arg1) return getSprite(arg1) end
function Exports.getSpriteManager(arg1) return getSpriteManager(arg1) end
function Exports.getSpriteModelEditorState() return getSpriteModelEditorState() end
function Exports.getSquare(arg1,arg2,arg3) return getSquare(arg1,arg2,arg3) end
function Exports.getMPStatistics() return getMPStatistics() end
function Exports.getSteamAvatarFromSteamID(arg1) return getSteamAvatarFromSteamID(arg1) end
function Exports.getSteamAvatarFromUsername(arg1) return getSteamAvatarFromUsername(arg1) end
function Exports.getSteamIDFromUsername(arg1) return getSteamIDFromUsername(arg1) end
function Exports.getSteamModeActive() return getSteamModeActive() end
function Exports.getSteamProfileNameFromSteamID(arg1) return getSteamProfileNameFromSteamID(arg1) end
function Exports.getSteamProfileNameFromUsername(arg1) return getSteamProfileNameFromUsername(arg1) end
function Exports.getSteamScoreboard() return getSteamScoreboard() end
function Exports.getSteamWorkshopItemIDs() return getSteamWorkshopItemIDs() end
function Exports.getSteamWorkshopItemMods(arg1) return getSteamWorkshopItemMods(arg1) end
function Exports.getSteamWorkshopStagedItems() return getSteamWorkshopStagedItems() end
function Exports.getStreamModeActive() return getStreamModeActive() end
function Exports.getTableResult(arg1,arg2) return getTableResult(arg1,arg2) end
function Exports.getText(arg1,arg2,arg3,arg4,arg5) return getText(arg1,arg2,arg3,arg4,arg5) end
function Exports.getTextManager() return getTextManager() end
function Exports.getTextMediaEN(arg1) return getTextMediaEN(arg1) end
function Exports.getTextOrNull(arg1,arg2,arg3,arg4,arg5) return getTextOrNull(arg1,arg2,arg3,arg4,arg5) end
function Exports.getTexture(arg1) return getTexture(arg1) end
function Exports.getTextureFromSaveDir(arg1,arg2) return getTextureFromSaveDir(arg1,arg2) end
function Exports.getTickets(arg1) return getTickets(arg1) end
function Exports.getTileGeometryState() return getTileGeometryState() end
function Exports.getTimeInMillis() return getTimeInMillis() end
function Exports.getTimestamp() return getTimestamp() end
function Exports.getTimestampMs() return getTimestampMs() end
function Exports.getTranslatorCredits(arg1) return getTranslatorCredits(arg1) end
function Exports.getUsers() return getUsers() end
function Exports.getVehicleById(arg1) return getVehicleById(arg1) end
function Exports.getVehicleInfo(arg1) return getVehicleInfo(arg1) end
function Exports.getVehicleZoneAt(arg1,arg2,arg3) return getVehicleZoneAt(arg1,arg2,arg3) end
function Exports.getVideo(arg1,arg2,arg3) return getVideo(arg1,arg2,arg3) end
function Exports.getVoiceStylesInstance() return getVoiceStylesInstance() end
function Exports.getWarNearest() return getWarNearest() end
function Exports.getWars() return getWars() end
function Exports.getWorld() return getWorld() end
function Exports.getWorldMarkers() return getWorldMarkers() end
function Exports.getWorldSoundManager() return getWorldSoundManager() end
function Exports.getZombieInfo(arg1) return getZombieInfo(arg1) end
function Exports.getZomboidRadio() return getZomboidRadio() end
function Exports.getZone(arg1,arg2,arg3) return getZone(arg1,arg2,arg3) end
function Exports.getZones(arg1,arg2,arg3) return getZones(arg1,arg2,arg3) end
function Exports.hasBreakpoint(arg1,arg2) return hasBreakpoint(arg1,arg2) end
function Exports.hasDataBreakpoint(arg1,arg2) return hasDataBreakpoint(arg1,arg2) end
function Exports.hasDataReadBreakpoint(arg1,arg2) return hasDataReadBreakpoint(arg1,arg2) end
function Exports.hasItemTag(arg1,arg2) return hasItemTag(arg1,arg2) end
function Exports.haveAccess(arg1) return haveAccess(arg1) end
function Exports.initUISystem() return initUISystem() end
function Exports.instanceItem(arg1,arg2) return instanceItem(arg1,arg2) end
function Exports._instanceof_(arg1,arg2) return instanceof(arg1,arg2) end
function Exports.invalidateLighting() return invalidateLighting() end
function Exports.inviteFriend(arg1) return inviteFriend(arg1) end
function Exports.is64bit() return is64bit() end
function Exports.isAccessLevel(arg1) return isAccessLevel(arg1) end
function Exports.isActionDone(arg1) return isActionDone(arg1) end
function Exports.isActionRejected(arg1) return isActionRejected(arg1) end
function Exports.isAdmin() return isAdmin() end
function Exports.isAltKeyDown() return isAltKeyDown() end
function Exports.isClient() return isClient() end
function Exports.isControllerConnected(arg1) return isControllerConnected(arg1) end
function Exports.isCoopHost() return isCoopHost() end
function Exports.isCtrlKeyDown() return isCtrlKeyDown() end
function Exports.isCurrentExecutionPoint(arg1,arg2) return isCurrentExecutionPoint(arg1,arg2) end
function Exports.isDebugEnabled() return isDebugEnabled() end
function Exports.isDemo() return isDemo() end
function Exports.isDesktopOpenSupported() return isDesktopOpenSupported() end
function Exports.isFloatingGamepadTextInputVisible() return isFloatingGamepadTextInputVisible() end
function Exports.isGamePaused() return isGamePaused() end
function Exports.isIngameState() return isIngameState() end
function Exports.isItemFood(arg1) return isItemFood(arg1) end
function Exports.isItemFresh(arg1,arg2) return isItemFresh(arg1,arg2) end
function Exports.isItemTransactionConsistent(arg1,arg2,arg3,arg4) return isItemTransactionConsistent(arg1,arg2,arg3,arg4) end
function Exports.isItemTransactionDone(arg1) return isItemTransactionDone(arg1) end
function Exports.isItemTransactionRejected(arg1) return isItemTransactionRejected(arg1) end
function Exports.isJoypadConnected(arg1) return isJoypadConnected(arg1) end
function Exports.isJoypadDown(arg1) return isJoypadDown(arg1) end
function Exports.isJoypadLBPressed(arg1) return isJoypadLBPressed(arg1) end
function Exports.isJoypadLTPressed(arg1) return isJoypadLTPressed(arg1) end
function Exports.isJoypadLeft(arg1) return isJoypadLeft(arg1) end
function Exports.isJoypadLeftStickButtonPressed(arg1) return isJoypadLeftStickButtonPressed(arg1) end
function Exports.isJoypadPressed(arg1,arg2) return isJoypadPressed(arg1,arg2) end
function Exports.isJoypadRBPressed(arg1) return isJoypadRBPressed(arg1) end
function Exports.isJoypadRTPressed(arg1) return isJoypadRTPressed(arg1) end
function Exports.isJoypadRight(arg1) return isJoypadRight(arg1) end
function Exports.isJoypadRightStickButtonPressed(arg1) return isJoypadRightStickButtonPressed(arg1) end
function Exports.isJoypadUp(arg1) return isJoypadUp(arg1) end
function Exports.isKeyDown(arg1) return isKeyDown(arg1) end
function Exports.isKeyPressed(arg1) return isKeyPressed(arg1) end
function Exports.isModActive(arg1) return isModActive(arg1) end
function Exports.isMouseButtonDown(arg1) return isMouseButtonDown(arg1) end
function Exports.isMouseButtonPressed(arg1) return isMouseButtonPressed(arg1) end
function Exports.isMultiplayer() return isMultiplayer() end
function Exports.isPlaystationController(arg1) return isPlaystationController(arg1) end
function Exports.isPublicServerListAllowed() return isPublicServerListAllowed() end
function Exports.isQuitCooldown() return isQuitCooldown() end
function Exports.isServer() return isServer() end
function Exports.isServerSoftReset() return isServerSoftReset() end
function Exports.isShiftKeyDown() return isShiftKeyDown() end
function Exports.isShowConnectionInfo() return isShowConnectionInfo() end
function Exports.isShowServerInfo() return isShowServerInfo() end
function Exports.isSoundPlaying(arg1) return isSoundPlaying(arg1) end
function Exports.isSteamOverlayEnabled() return isSteamOverlayEnabled() end
function Exports.isSteamRunningOnSteamDeck() return isSteamRunningOnSteamDeck() end
function Exports.isSystemLinux() return isSystemLinux() end
function Exports.isSystemMacOS() return isSystemMacOS() end
function Exports.isSystemWindows() return isSystemWindows() end
function Exports.istype(arg1,arg2) return istype(arg1,arg2) end
function Exports.isValidSteamID(arg1) return isValidSteamID(arg1) end
function Exports.isValidUserName(arg1) return isValidUserName(arg1) end
function Exports.isXBOXController() return isXBOXController() end
function Exports.isoRegionsRenderer() return isoRegionsRenderer() end
function Exports.isoToScreenX(arg1,arg2,arg3,arg4) return isoToScreenX(arg1,arg2,arg3,arg4) end
function Exports.isoToScreenY(arg1,arg2,arg3,arg4) return isoToScreenY(arg1,arg2,arg3,arg4) end
function Exports.javaListRemoveAt(arg1,arg2) return javaListRemoveAt(arg1,arg2) end
function Exports.loadSkinnedZomboidModel(arg1,arg2,arg3) return loadSkinnedZomboidModel(arg1,arg2,arg3) end
function Exports.loadStaticZomboidModel(arg1,arg2,arg3) return loadStaticZomboidModel(arg1,arg2,arg3) end
function Exports.loadVehicleModel(arg1,arg2,arg3) return loadVehicleModel(arg1,arg2,arg3) end
function Exports.loadZomboidModel(arg1,arg2,arg3,arg4,arg5) return loadZomboidModel(arg1,arg2,arg3,arg4,arg5) end
function Exports.localVarName(arg1,arg2) return localVarName(arg1,arg2) end
function Exports.log(arg1,arg2) return log(arg1,arg2) end
function Exports.luaDebug() return luaDebug() end
function Exports.manipulateSavefile(arg1,arg2) return manipulateSavefile(arg1,arg2) end
function Exports.moduleDotType(arg1,arg2) return moduleDotType(arg1,arg2) end
function Exports.networkUserAction(arg1,arg2,arg3) return networkUserAction(arg1,arg2,arg3) end
function Exports.openUrl(arg1) return openUrl(arg1) end
function Exports.pauseSoundAndMusic() return pauseSoundAndMusic() end
function Exports.ping(arg1,arg2,arg3,arg4,arg5) return ping(arg1,arg2,arg3,arg4,arg5) end
function Exports.playServerSound(arg1,arg2) return playServerSound(arg1,arg2) end
function Exports.proceedPM(arg1) return proceedPM(arg1) end
function Exports.processGeneralMessage(arg1) return processGeneralMessage(arg1) end
function Exports.processSayMessage(arg1) return processSayMessage(arg1) end
function Exports.processShoutMessage(arg1) return processShoutMessage(arg1) end
function Exports.querySteamWorkshopItemDetails(arg1,arg2,arg3) return querySteamWorkshopItemDetails(arg1,arg2,arg3) end
function Exports.queueCharEvent(arg1) return queueCharEvent(arg1) end
function Exports.queueKeyEvent(arg1) return queueKeyEvent(arg1) end
function Exports.rainConfig(arg1,arg2) return rainConfig(arg1,arg2) end
function Exports.reactivateJoypadAfterResetLua() return reactivateJoypadAfterResetLua() end
function Exports.refreshAnimSets(arg1) return refreshAnimSets(arg1) end
function Exports.reloadActionGroups() return reloadActionGroups() end
function Exports.reloadControllerConfigFiles() return reloadControllerConfigFiles() end
function Exports.reloadEngineRPM() return reloadEngineRPM() end
function Exports.reloadEntitiesDebug() return reloadEntitiesDebug() end
function Exports.reloadEntityDebug(arg1) return reloadEntityDebug(arg1) end
function Exports.reloadEntityFromScriptDebug(arg1) return reloadEntityFromScriptDebug(arg1) end
function Exports.reloadEntityScripts() return reloadEntityScripts() end
function Exports.reloadLuaFile(arg1) return reloadLuaFile(arg1) end
function Exports.reloadModelsMatching(arg1) return reloadModelsMatching(arg1) end
function Exports.reloadScripts(arg1) return reloadScripts(arg1) end
function Exports.reloadServerLuaFile(arg1) return reloadServerLuaFile(arg1) end
function Exports.reloadSoundFiles() return reloadSoundFiles() end
function Exports.reloadVehicleTextures(arg1) return reloadVehicleTextures(arg1) end
function Exports.reloadVehicles() return reloadVehicles() end
function Exports.reloadXui() return reloadXui() end
function Exports.removeAction(arg1,arg2) return removeAction(arg1,arg2) end
function Exports.removeAnimal(arg1) return removeAnimal(arg1) end
function Exports.removeItemTransaction(arg1,arg2) return removeItemTransaction(arg1,arg2) end
function Exports.removeTicket(arg1) return removeTicket(arg1) end
function Exports.removeUserlog(arg1,arg2,arg3) return removeUserlog(arg1,arg2,arg3) end
function Exports.renameSavefile(arg1,arg2,arg3) return renameSavefile(arg1,arg2,arg3) end
function Exports.renderIsoCircle(arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9) return renderIsoCircle(arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9) end
function Exports.renderIsoRect(arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9) return renderIsoRect(arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9) end
function Exports.renderLine(arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10) return renderLine(arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10) end
function Exports.replaceItemInContainer(arg1,arg2,arg3) return replaceItemInContainer(arg1,arg2,arg3) end
function Exports.replaceWith(arg1,arg2,arg3) return replaceWith(arg1,arg2,arg3) end
function Exports.requestPVPEvents() return requestPVPEvents() end
function Exports.requestPacketCounts() return requestPacketCounts() end
function Exports.requestRoles() return requestRoles() end
function Exports.requestTrading(arg1,arg2) return requestTrading(arg1,arg2) end
function Exports.requestUserlog(arg1) return requestUserlog(arg1) end
function Exports.requestUsers() return requestUsers() end
function Exports.require(arg1) return require(arg1) end
function Exports.resetRegionFile() return resetRegionFile() end
function Exports.resumeSoundAndMusic() return resumeSoundAndMusic() end
function Exports.revertToKeyboardAndMouse() return revertToKeyboardAndMouse() end
function Exports.sanitizeWorldName(arg1) return sanitizeWorldName(arg1) end
function Exports.save(arg1) return save(arg1) end
function Exports.saveControllerSettings(arg1) return saveControllerSettings(arg1) end
function Exports.saveGame() return saveGame() end
function Exports.saveModsFile() return saveModsFile() end
function Exports.scoreboardUpdate() return scoreboardUpdate() end
function Exports.screenToIsoX(arg1,arg2,arg3,arg4) return screenToIsoX(arg1,arg2,arg3,arg4) end
function Exports.screenToIsoY(arg1,arg2,arg3,arg4) return screenToIsoY(arg1,arg2,arg3,arg4) end
function Exports.sendAddAnimalFromHandsInTrailer(arg1,arg2,arg3) return sendAddAnimalFromHandsInTrailer(arg1,arg2,arg3) end
function Exports.sendAddAnimalInTrailer(arg1,arg2,arg3) return sendAddAnimalInTrailer(arg1,arg2,arg3) end
function Exports.sendAddItemToContainer(arg1,arg2) return sendAddItemToContainer(arg1,arg2) end
function Exports.sendAddItemsToContainer(arg1,arg2) return sendAddItemsToContainer(arg1,arg2) end
function Exports.sendAnimalGenome(arg1) return sendAnimalGenome(arg1) end
function Exports.sendAttachAnimalToPlayer(arg1,arg2,arg3,arg4) return sendAttachAnimalToPlayer(arg1,arg2,arg3,arg4) end
function Exports.sendAttachAnimalToTree(arg1,arg2,arg3,arg4) return sendAttachAnimalToTree(arg1,arg2,arg3,arg4) end
function Exports.sendButcherAnimal(arg1,arg2) return sendButcherAnimal(arg1,arg2) end
function Exports.sendClientCommand(arg1,arg2,arg3,arg4) return sendClientCommand(arg1,arg2,arg3,arg4) end
function Exports.sendClothing(arg1,arg2,arg3) return sendClothing(arg1,arg2,arg3) end
function Exports.sendDamage(arg1) return sendDamage(arg1) end
function Exports.sendDebugStory(arg1,arg2,arg3) return sendDebugStory(arg1,arg2,arg3) end
function Exports.sendEquip(arg1) return sendEquip(arg1) end
function Exports.sendEvent(arg1,arg2) return sendEvent(arg1,arg2) end
function Exports.sendFactionInvite(arg1,arg2,arg3) return sendFactionInvite(arg1,arg2,arg3) end
function Exports.sendFeedAnimalFromHand(arg1,arg2,arg3) return sendFeedAnimalFromHand(arg1,arg2,arg3) end
function Exports.sendGoogleAuth(arg1,arg2) return sendGoogleAuth(arg1,arg2) end
function Exports.sendHitPlayer(arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8) return sendHitPlayer(arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8) end
function Exports.sendHitVehicle(arg1,arg2,arg3,arg4,arg5,arg6) return sendHitVehicle(arg1,arg2,arg3,arg4,arg5,arg6) end
function Exports.sendHumanVisual(arg1) return sendHumanVisual(arg1) end
function Exports.sendHutchGrabAnimal(arg1,arg2,arg3,arg4) return sendHutchGrabAnimal(arg1,arg2,arg3,arg4) end
function Exports.sendHutchGrabCorpseAction(arg1,arg2,arg3,arg4) return sendHutchGrabCorpseAction(arg1,arg2,arg3,arg4) end
function Exports.sendHutchRemoveAnimalAction(arg1,arg2,arg3) return sendHutchRemoveAnimalAction(arg1,arg2,arg3) end
function Exports.sendItemListNet(arg1,arg2,arg3,arg4,arg5) return sendItemListNet(arg1,arg2,arg3,arg4,arg5) end
function Exports.sendItemStats(arg1) return sendItemStats(arg1) end
function Exports.sendItemsInContainer(arg1,arg2) return sendItemsInContainer(arg1,arg2) end
function Exports.sendPersonalColor(arg1) return sendPersonalColor(arg1) end
function Exports.sendPickupAnimal(arg1,arg2,arg3) return sendPickupAnimal(arg1,arg2,arg3) end
function Exports.sendPing() return sendPing() end
function Exports.sendPlayerEffects(arg1) return sendPlayerEffects(arg1) end
function Exports.sendPlayerExtraInfo(arg1) return sendPlayerExtraInfo(arg1) end
function Exports.sendPlayerStatsChange(arg1) return sendPlayerStatsChange(arg1) end
function Exports.sendRemoveAndGrabAnimalFromTrailer(arg1,arg2,arg3,arg4) return sendRemoveAndGrabAnimalFromTrailer(arg1,arg2,arg3,arg4) end
function Exports.sendRemoveAnimalFromTrailer(arg1,arg2,arg3) return sendRemoveAnimalFromTrailer(arg1,arg2,arg3) end
function Exports.sendRemoveItemFromContainer(arg1,arg2) return sendRemoveItemFromContainer(arg1,arg2) end
function Exports.sendRemoveItemsFromContainer(arg1,arg2) return sendRemoveItemsFromContainer(arg1,arg2) end
function Exports.sendReplaceItemInContainer(arg1,arg2,arg3) return sendReplaceItemInContainer(arg1,arg2,arg3) end
function Exports.sendRequestInventory(arg1,arg2) return sendRequestInventory(arg1,arg2) end
function Exports.sendSafehouseChangeMember(arg1,arg2) return sendSafehouseChangeMember(arg1,arg2) end
function Exports.sendSafehouseChangeOwner(arg1,arg2) return sendSafehouseChangeOwner(arg1,arg2) end
function Exports.sendSafehouseChangeRespawn(arg1,arg2,arg3) return sendSafehouseChangeRespawn(arg1,arg2,arg3) end
function Exports.sendSafehouseChangeTitle(arg1,arg2) return sendSafehouseChangeTitle(arg1,arg2) end
function Exports.sendSafehouseClaim(arg1,arg2,arg3) return sendSafehouseClaim(arg1,arg2,arg3) end
function Exports.sendSafehouseInvite(arg1,arg2,arg3) return sendSafehouseInvite(arg1,arg2,arg3) end
function Exports.sendSafehouseRelease(arg1) return sendSafehouseRelease(arg1) end
function Exports.sendSafezoneClaim(arg1,arg2,arg3,arg4,arg5,arg6) return sendSafezoneClaim(arg1,arg2,arg3,arg4,arg5,arg6) end
function Exports.sendSecretKey(arg1,arg2,arg3,arg4,arg5,arg6,arg7) return sendSecretKey(arg1,arg2,arg3,arg4,arg5,arg6,arg7) end
function Exports.sendServerCommand(arg1,arg2,arg3,arg4) return sendServerCommand(arg1,arg2,arg3,arg4) end
function Exports.sendSwitchSeat(arg1,arg2,arg3,arg4) return sendSwitchSeat(arg1,arg2,arg3,arg4) end
function Exports.sendSyncPlayerFields(arg1,arg2) return sendSyncPlayerFields(arg1,arg2) end
function Exports.sendVisual(arg1) return sendVisual(arg1) end
function Exports.sendWarManagerUpdate(arg1,arg2,arg3) return sendWarManagerUpdate(arg1,arg2,arg3) end
function Exports.serverConnect(arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11) return serverConnect(arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11) end
function Exports.serverConnectCoop(arg1) return serverConnectCoop(arg1) end
function Exports.serverFileExists(arg1) return serverFileExists(arg1) end
function Exports.setActivePlayer(arg1) return setActivePlayer(arg1) end
function Exports.setAdmin() return setAdmin() end
function Exports.setAggroTarget(arg1,arg2,arg3) return setAggroTarget(arg1,arg2,arg3) end
function Exports.setBehaviorStep(arg1) return setBehaviorStep(arg1) end
function Exports.setControllerDeadZone(arg1,arg2,arg3) return setControllerDeadZone(arg1,arg2,arg3) end
function Exports.setDebugToggleControllerPluggedIn(arg1) return setDebugToggleControllerPluggedIn(arg1) end
function Exports.setDefaultRoleFor(arg1,arg2) return setDefaultRoleFor(arg1,arg2) end
function Exports.setGameSpeed(arg1) return setGameSpeed(arg1) end
function Exports.setModelMetaData(arg1,arg2,arg3,arg4,arg5) return setModelMetaData(arg1,arg2,arg3,arg4,arg5) end
function Exports.setMouseXY(arg1,arg2) return setMouseXY(arg1,arg2) end
function Exports.setPlayerJoypad(arg1,arg2,arg3,arg4) return setPlayerJoypad(arg1,arg2,arg3,arg4) end
function Exports.setPlayerMouse(arg1) return setPlayerMouse(arg1) end
function Exports.setPlayerMovementActive(arg1,arg2) return setPlayerMovementActive(arg1,arg2) end
function Exports.setProgressBarValue(arg1,arg2) return setProgressBarValue(arg1,arg2) end
function Exports.setPuddles(arg1) return setPuddles(arg1) end
function Exports.setSavefilePlayer1(arg1,arg2,arg3) return setSavefilePlayer1(arg1,arg2,arg3) end
function Exports.setServerStatisticEnable(arg1) return setServerStatisticEnable(arg1) end
function Exports.setShowConnectionInfo(arg1) return setShowConnectionInfo(arg1) end
function Exports.setShowPausedMessage(arg1) return setShowPausedMessage(arg1) end
function Exports.setShowServerInfo(arg1) return setShowServerInfo(arg1) end
function Exports.setSpawnRegion(arg1) return setSpawnRegion(arg1) end
function Exports.setZoomLevels(arg1) return setZoomLevels(arg1) end
function Exports.setupRole(arg1,arg2,arg3,arg4) return setupRole(arg1,arg2,arg3,arg4) end
function Exports.showAnimationViewer() return showAnimationViewer() end
function Exports.showAttachmentEditor() return showAttachmentEditor() end
function Exports.showChunkDebugger() return showChunkDebugger() end
function Exports.showDebugInfoInChat(arg1) return showDebugInfoInChat(arg1) end
function Exports.showFolderInDesktop(arg1) return showFolderInDesktop(arg1) end
function Exports.showGlobalObjectDebugger() return showGlobalObjectDebugger() end
function Exports.showSeamEditor() return showSeamEditor() end
function Exports.showSpriteModelEditor() return showSpriteModelEditor() end
function Exports.showSteamFloatingGamepadTextInput(arg1,arg2,arg3,arg4,arg5) return showSteamFloatingGamepadTextInput(arg1,arg2,arg3,arg4,arg5) end
function Exports.showSteamGamepadTextInput(arg1,arg2,arg3,arg4,arg5) return showSteamGamepadTextInput(arg1,arg2,arg3,arg4,arg5) end
function Exports.showVehicleEditor(arg1) return showVehicleEditor(arg1) end
function Exports.showWorldMapEditor(arg1) return showWorldMapEditor(arg1) end
function Exports.showWrongChatTabMessage(arg1,arg2,arg3) return showWrongChatTabMessage(arg1,arg2,arg3) end
function Exports.sledgeDestroy(arg1) return sledgeDestroy(arg1) end
function Exports.spawnHorde(arg1,arg2,arg3,arg4,arg5,arg6) return spawnHorde(arg1,arg2,arg3,arg4,arg5,arg6) end
function Exports.spawnpointsExistsForMod(arg1,arg2) return spawnpointsExistsForMod(arg1,arg2) end
function Exports.startFishingAction(arg1,arg2,arg3,arg4) return startFishingAction(arg1,arg2,arg3,arg4) end
function Exports.steamGetInternetServerDetails(arg1) return steamGetInternetServerDetails(arg1) end
function Exports.steamReleaseInternetServersRequest() return steamReleaseInternetServersRequest() end
function Exports.steamGetInternetServersCount() return steamGetInternetServersCount() end
function Exports.steamRequestInternetServersList() return steamRequestInternetServersList() end
function Exports.steamRequestServerDetails(arg1,arg2) return steamRequestServerDetails(arg1,arg2) end
function Exports.steamRequestServerRules(arg1,arg2) return steamRequestServerRules(arg1,arg2) end
function Exports.stepForward() return stepForward() end
function Exports.stopFire(arg1) return stopFire(arg1) end
function Exports.stopPing() return stopPing() end
function Exports.stopSendSecretKey() return stopSendSecretKey() end
function Exports.stopSound(arg1) return stopSound(arg1) end
function Exports.syncVisuals(arg1) return syncVisuals(arg1) end
function Exports.tabToX(arg1,arg2) return tabToX(arg1,arg2) end
function Exports.takeScreenshot(arg1) return takeScreenshot(arg1) end
function Exports.testHelicopter() return testHelicopter() end
function Exports.testSound() return testSound() end
function Exports.timSort(arg1,arg2) return timSort(arg1,arg2) end
function Exports.toInt(arg1) return toInt(arg1) end
function Exports.toggleBreakOnChange(arg1,arg2) return toggleBreakOnChange(arg1,arg2) end
function Exports.toggleBreakOnRead(arg1,arg2) return toggleBreakOnRead(arg1,arg2) end
function Exports.toggleBreakpoint(arg1,arg2) return toggleBreakpoint(arg1,arg2) end
function Exports.toggleModActive(arg1,arg2) return toggleModActive(arg1,arg2) end
function Exports.toggleVehicleRenderToTexture() return toggleVehicleRenderToTexture() end
function Exports.tradingUISendAddItem(arg1,arg2,arg3) return tradingUISendAddItem(arg1,arg2,arg3) end
function Exports.tradingUISendRemoveItem(arg1,arg2,arg3) return tradingUISendRemoveItem(arg1,arg2,arg3) end
function Exports.tradingUISendUpdateState(arg1,arg2,arg3) return tradingUISendUpdateState(arg1,arg2,arg3) end
function Exports.transformIntoKahluaTable(arg1) return transformIntoKahluaTable(arg1) end
function Exports.translatePointXInOverheadMapToWindow(arg1,arg2,arg3,arg4) return translatePointXInOverheadMapToWindow(arg1,arg2,arg3,arg4) end
function Exports.translatePointXInOverheadMapToWorld(arg1,arg2,arg3,arg4) return translatePointXInOverheadMapToWorld(arg1,arg2,arg3,arg4) end
function Exports.translatePointYInOverheadMapToWindow(arg1,arg2,arg3,arg4) return translatePointYInOverheadMapToWindow(arg1,arg2,arg3,arg4) end
function Exports.translatePointYInOverheadMapToWorld(arg1,arg2,arg3,arg4) return translatePointYInOverheadMapToWorld(arg1,arg2,arg3,arg4) end
function Exports.transmitBigWaterSplash(arg1,arg2,arg3,arg4) return transmitBigWaterSplash(arg1,arg2,arg3,arg4) end
function Exports.triggerEvent(arg1,arg2,arg3,arg4,arg5) return triggerEvent(arg1,arg2,arg3,arg4,arg5) end
function Exports.tryGetTexture(arg1) return tryGetTexture(arg1) end
function Exports.updateChatSettings(arg1,arg2,arg3) return updateChatSettings(arg1,arg2,arg3) end
function Exports.updateFire() return updateFire() end
function Exports.useStaticErosionRand(arg1) return useStaticErosionRand(arg1) end
function Exports.useTextureFiltering(arg1) return useTextureFiltering(arg1) end
function Exports.wasKeyDown(arg1) return wasKeyDown(arg1) end
function Exports.wasMouseActiveMoreRecentlyThanJoypad() return wasMouseActiveMoreRecentlyThanJoypad() end
function Exports.writeLog(arg1,arg2) return writeLog(arg1,arg2) end
function Exports.zpopClearZombies(arg1,arg2) return zpopClearZombies(arg1,arg2) end
function Exports.zpopNewRenderer() return zpopNewRenderer() end
function Exports.zpopSpawnNow(arg1,arg2) return zpopSpawnNow(arg1,arg2) end
function Exports.zpopSpawnTimeToZero(arg1,arg2) return zpopSpawnTimeToZero(arg1,arg2) end
Exports.APNGFrame = loadstring("return _G['APNGFrame']")()
Exports.AStarPathFinderResult = loadstring("return _G['AStarPathFinderResult']")()
Exports.AbstractAntiCheat = loadstring("return _G['AbstractAntiCheat']")()
Exports.AbstractStyle = loadstring("return _G['AbstractStyle']")()
Exports.ActionContext = loadstring("return _G['ActionContext']")()
Exports.ActionGroup = loadstring("return _G['ActionGroup']")()
Exports.ActionProgressBar = loadstring("return _G['ActionProgressBar']")()
Exports.ActionState = loadstring("return _G['ActionState']")()
Exports.ActionStateSnapshot = loadstring("return _G['ActionStateSnapshot']")()
Exports.ActiveMods = loadstring("return _G['ActiveMods']")()
Exports.Add = loadstring("return _G['Add']")()
Exports.AdvancedAnimator = loadstring("return _G['AdvancedAnimator']")()
Exports.AirFront = loadstring("return _G['AirFront']")()
Exports.AlarmClock = loadstring("return _G['AlarmClock']")()
Exports.AlarmClockClothing = loadstring("return _G['AlarmClockClothing']")()
Exports.Alias = loadstring("return _G['Alias']")()
Exports.Allocator = loadstring("return _G['Allocator']")()
Exports.AlphaOp = loadstring("return _G['AlphaOp']")()
Exports.Alternate = loadstring("return _G['Alternate']")()
Exports.Ambient = loadstring("return _G['Ambient']")()
Exports.AmbientLoop = loadstring("return _G['AmbientLoop']")()
Exports.AmbientSoundEffect = loadstring("return _G['AmbientSoundEffect']")()
Exports.AmbientSoundLogic = loadstring("return _G['AmbientSoundLogic']")()
Exports.AmbientStreamManager = loadstring("return _G['AmbientStreamManager']")()
Exports.AngelCodeFont = loadstring("return _G['AngelCodeFont']")()
Exports.Anim = loadstring("return _G['Anim']")()
Exports.AnimBoneWeight = loadstring("return _G['AnimBoneWeight']")()
Exports.AnimEvent = loadstring("return _G['AnimEvent']")()
Exports.AnimEventBroadcaster = loadstring("return _G['AnimEventBroadcaster']")()
Exports.AnimEventTime = loadstring("return _G['AnimEventTime']")()
Exports.AnimLayer = loadstring("return _G['AnimLayer']")()
Exports.AnimNode = loadstring("return _G['AnimNode']")()
Exports.AnimState = loadstring("return _G['AnimState']")()
Exports.AnimTimer = loadstring("return _G['AnimTimer']")()
Exports.AnimTrackSampler = loadstring("return _G['AnimTrackSampler']")()
Exports.AnimTransition = loadstring("return _G['AnimTransition']")()
Exports.AnimalAllele = loadstring("return _G['AnimalAllele']")()
Exports.AnimalBreed = loadstring("return _G['AnimalBreed']")()
Exports.AnimalChunk = loadstring("return _G['AnimalChunk']")()
Exports.AnimalData = loadstring("return _G['AnimalData']")()
Exports.AnimalDefinitions = loadstring("return _G['AnimalDefinitions']")()
Exports.AnimalGene = loadstring("return _G['AnimalGene']")()
Exports.AnimalGenomeDefinitions = loadstring("return _G['AnimalGenomeDefinitions']")()
Exports.AnimalGrowStage = loadstring("return _G['AnimalGrowStage']")()
Exports.AnimalInventoryItem = loadstring("return _G['AnimalInventoryItem']")()
Exports.AnimalPacket = loadstring("return _G['AnimalPacket']")()
Exports.AnimalPart = loadstring("return _G['AnimalPart']")()
Exports.AnimalPartsDefinitions = loadstring("return _G['AnimalPartsDefinitions']")()
Exports.AnimalSoundState = loadstring("return _G['AnimalSoundState']")()
Exports.AnimalTracks = loadstring("return _G['AnimalTracks']")()
Exports.AnimalTracksDefinitions = loadstring("return _G['AnimalTracksDefinitions']")()
Exports.AnimalTracksType = loadstring("return _G['AnimalTracksType']")()
Exports.AnimalVisual = loadstring("return _G['AnimalVisual']")()
Exports.AnimalZone = loadstring("return _G['AnimalZone']")()
Exports.AnimalZoneJunction = loadstring("return _G['AnimalZoneJunction']")()
Exports.AnimatedModel = loadstring("return _G['AnimatedModel']")()
Exports.AnimatedModelInstanceRenderData = loadstring("return _G['AnimatedModelInstanceRenderData']")()
Exports.AnimationAsset = loadstring("return _G['AnimationAsset']")()
Exports.AnimationAssetParams = loadstring("return _G['AnimationAssetParams']")()
Exports.AnimationBoneBinding = loadstring("return _G['AnimationBoneBinding']")()
Exports.AnimationClip = loadstring("return _G['AnimationClip']")()
Exports.AnimationMultiTrack = loadstring("return _G['AnimationMultiTrack']")()
Exports.AnimationPlayer = loadstring("return _G['AnimationPlayer']")()
Exports.AnimationPlayerRecorder = loadstring("return _G['AnimationPlayerRecorder']")()
Exports.AnimationSet = loadstring("return _G['AnimationSet']")()
Exports.AnimationTrack = loadstring("return _G['AnimationTrack']")()
Exports.AnimationVariableHandle = loadstring("return _G['AnimationVariableHandle']")()
Exports.AnimationVariableReference = loadstring("return _G['AnimationVariableReference']")()
Exports.AnimationVariableSlotCallbackBool = loadstring("return _G['AnimationVariableSlotCallbackBool']")()
Exports.AnimationVariableSlotCallbackFloat = loadstring("return _G['AnimationVariableSlotCallbackFloat']")()
Exports.AnimationVariableSlotCallbackInt = loadstring("return _G['AnimationVariableSlotCallbackInt']")()
Exports.AnimationVariableSlotCallbackString = loadstring("return _G['AnimationVariableSlotCallbackString']")()
Exports.AnimationVariableSlotGenerator = loadstring("return _G['AnimationVariableSlotGenerator']")()
Exports.AnimationVariableSource = loadstring("return _G['AnimationVariableSource']")()
Exports.AnimationVariableType = loadstring("return _G['AnimationVariableType']")()
Exports.AnimationViewerState = loadstring("return _G['AnimationViewerState']")()
Exports.AnimationsMesh = loadstring("return _G['AnimationsMesh']")()
Exports.AnimatorDebugMonitor = loadstring("return _G['AnimatorDebugMonitor']")()
Exports.AnimatorsBoneTransform = loadstring("return _G['AnimatorsBoneTransform']")()
Exports.AntiCheat = loadstring("return _G['AntiCheat']")()
Exports.Area = loadstring("return _G['Area']")()
Exports.Array = loadstring("return _G['Array']")()
Exports.ArrayIterable = loadstring("return _G['ArrayIterable']")()
Exports.ArrayIterator = loadstring("return _G['ArrayIterator']")()
Exports.ArrayList = loadstring("return _G['ArrayList']")()
Exports.Asset = loadstring("return _G['Asset']")()
Exports.AssetManager = loadstring("return _G['AssetManager']")()
Exports.AssetManagerTable = loadstring("return _G['AssetManagerTable']")()
Exports.AssetManagers = loadstring("return _G['AssetManagers']")()
Exports.AssetParams = loadstring("return _G['AssetParams']")()
Exports.AssetPath = loadstring("return _G['AssetPath']")()
Exports.AssetStateObserver = loadstring("return _G['AssetStateObserver']")()
Exports.AssetTable = loadstring("return _G['AssetTable']")()
Exports.AssetType = loadstring("return _G['AssetType']")()
Exports.AssocArray = loadstring("return _G['AssocArray']")()
Exports.AssocEnumArray = loadstring("return _G['AssocEnumArray']")()
Exports.AtomUI = loadstring("return _G['AtomUI']")()
Exports.AtomUIMap = loadstring("return _G['AtomUIMap']")()
Exports.AtomUIText = loadstring("return _G['AtomUIText']")()
Exports.AtomUITextEntry = loadstring("return _G['AtomUITextEntry']")()
Exports.AtomUITexture = loadstring("return _G['AtomUITexture']")()
Exports.AttachedItem = loadstring("return _G['AttachedItem']")()
Exports.AttachedItems = loadstring("return _G['AttachedItems']")()
Exports.AttachedLocation = loadstring("return _G['AttachedLocation']")()
Exports.AttachedLocationGroup = loadstring("return _G['AttachedLocationGroup']")()
Exports.AttachedLocations = loadstring("return _G['AttachedLocations']")()
Exports.AttachedModelName = loadstring("return _G['AttachedModelName']")()
Exports.AttachedModelNames = loadstring("return _G['AttachedModelNames']")()
Exports.AttachmentEditorState = loadstring("return _G['AttachmentEditorState']")()
Exports.AttachmentsHandler = loadstring("return _G['AttachmentsHandler']")()
Exports.AttackFlags = loadstring("return _G['AttackFlags']")()
Exports.AttackState = loadstring("return _G['AttackState']")()
Exports.AttackVars = loadstring("return _G['AttackVars']")()
Exports.Attribute = loadstring("return _G['Attribute']")()
Exports.AttributeContainer = loadstring("return _G['AttributeContainer']")()
Exports.AttributeInstance = loadstring("return _G['AttributeInstance']")()
Exports.AttributeType = loadstring("return _G['AttributeType']")()
Exports.AttributeUtil = loadstring("return _G['AttributeUtil']")()
Exports.AttributeValueType = loadstring("return _G['AttributeValueType']")()
Exports.AttributesScript = loadstring("return _G['AttributesScript']")()
Exports.AuthType = loadstring("return _G['AuthType']")()
Exports.Authorization = loadstring("return _G['Authorization']")()
Exports.BallisticsController = loadstring("return _G['BallisticsController']")()
Exports.BallisticsTarget = loadstring("return _G['BallisticsTarget']")()
Exports.BarricadeAble = loadstring("return _G['BarricadeAble']")()
Exports.BaseAction = loadstring("return _G['BaseAction']")()
Exports.BaseAmbientStreamManager = loadstring("return _G['BaseAmbientStreamManager']")()
Exports.BaseAnimalBehavior = loadstring("return _G['BaseAnimalBehavior']")()
Exports.BaseCharacterSoundEmitter = loadstring("return _G['BaseCharacterSoundEmitter']")()
Exports.BaseCraftingLogic = loadstring("return _G['BaseCraftingLogic']")()
Exports.BaseGrappleable = loadstring("return _G['BaseGrappleable']")()
Exports.BaseScriptObject = loadstring("return _G['BaseScriptObject']")()
Exports.BaseSoundBank = loadstring("return _G['BaseSoundBank']")()
Exports.BaseSoundEmitter = loadstring("return _G['BaseSoundEmitter']")()
Exports.BaseSoundManager = loadstring("return _G['BaseSoundManager']")()
Exports.BaseTest = loadstring("return _G['BaseTest']")()
Exports.BaseVehicle = loadstring("return _G['BaseVehicle']")()
Exports.BaseVisual = loadstring("return _G['BaseVisual']")()
Exports.Basement = loadstring("return _G['Basement']")()
Exports.BasementSpawnLocation = loadstring("return _G['BasementSpawnLocation']")()
Exports.Basements = loadstring("return _G['Basements']")()
Exports.BasementsPerMap = loadstring("return _G['BasementsPerMap']")()
Exports.BasementsV1 = loadstring("return _G['BasementsV1']")()
Exports.BeardStyle = loadstring("return _G['BeardStyle']")()
Exports.BeardStyles = loadstring("return _G['BeardStyles']")()
Exports.BeginMode = loadstring("return _G['BeginMode']")()
Exports.BehaviorResult = loadstring("return _G['BehaviorResult']")()
Exports.BentFences = loadstring("return _G['BentFences']")()
Exports.BiomeMap = loadstring("return _G['BiomeMap']")()
Exports.BiomeMapEntry = loadstring("return _G['BiomeMapEntry']")()
Exports.BitSet = loadstring("return _G['BitSet']")()
Exports.BlendDirection = loadstring("return _G['BlendDirection']")()
Exports.Blending = loadstring("return _G['Blending']")()
Exports.Block = loadstring("return _G['Block']")()
Exports.BlockElement = loadstring("return _G['BlockElement']")()
Exports.BloodBodyPartType = loadstring("return _G['BloodBodyPartType']")()
Exports.BloodClothingType = loadstring("return _G['BloodClothingType']")()
Exports.BodyDamage = loadstring("return _G['BodyDamage']")()
Exports.BodyDamageSync = loadstring("return _G['BodyDamageSync']")()
Exports.BodyLocation = loadstring("return _G['BodyLocation']")()
Exports.BodyLocation = loadstring("return _G['BodyLocation']")()
Exports.BodyLocationGroup = loadstring("return _G['BodyLocationGroup']")()
Exports.BodyLocations = loadstring("return _G['BodyLocations']")()
Exports.BodyPart = loadstring("return _G['BodyPart']")()
Exports.BodyPartLast = loadstring("return _G['BodyPartLast']")()
Exports.BodyPartSyncPacket = loadstring("return _G['BodyPartSyncPacket']")()
Exports.BodyPartType = loadstring("return _G['BodyPartType']")()
Exports.BoneAxis = loadstring("return _G['BoneAxis']")()
Exports.BoneTransform = loadstring("return _G['BoneTransform']")()
Exports.Bool = loadstring("return _G['Bool']")()
Exports.Bool = loadstring("return _G['Bool']")()
Exports.Boolean = loadstring("return _G['Boolean']")()
Exports.Boolean = loadstring("return _G['Boolean']")()
Exports.Boolean = loadstring("return _G['Boolean']")()
Exports.BooleanConfigOption = loadstring("return _G['BooleanConfigOption']")()
Exports.BooleanDebugOption = loadstring("return _G['BooleanDebugOption']")()
Exports.BooleanDebugOption = loadstring("return _G['BooleanDebugOption']")()
Exports.BooleanDebugOption = loadstring("return _G['BooleanDebugOption']")()
Exports.BooleanDebugOption = loadstring("return _G['BooleanDebugOption']")()
Exports.BooleanDebugOption = loadstring("return _G['BooleanDebugOption']")()
Exports.BooleanDebugOption = loadstring("return _G['BooleanDebugOption']")()
Exports.BooleanDebugOption = loadstring("return _G['BooleanDebugOption']")()
Exports.BooleanDebugOption = loadstring("return _G['BooleanDebugOption']")()
Exports.BooleanGrid = loadstring("return _G['BooleanGrid']")()
Exports.BooleanSandboxOption = loadstring("return _G['BooleanSandboxOption']")()
Exports.BooleanServerOption = loadstring("return _G['BooleanServerOption']")()
Exports.Box = loadstring("return _G['Box']")()
Exports.BrokenFences = loadstring("return _G['BrokenFences']")()
Exports.BufferedRandomAccessFile = loadstring("return _G['BufferedRandomAccessFile']")()
Exports.BufferedReader = loadstring("return _G['BufferedReader']")()
Exports.BufferedWriter = loadstring("return _G['BufferedWriter']")()
Exports.Buffers = loadstring("return _G['Buffers']")()
Exports.BuildLogic = loadstring("return _G['BuildLogic']")()
Exports.Builder = loadstring("return _G['Builder']")()
Exports.BuildingDef = loadstring("return _G['BuildingDef']")()
Exports.BuildingScore = loadstring("return _G['BuildingScore']")()
Exports.BuildingSearchCriteria = loadstring("return _G['BuildingSearchCriteria']")()
Exports.BulletVariables = loadstring("return _G['BulletVariables']")()
Exports.BurntToDeath = loadstring("return _G['BurntToDeath']")()
Exports.Bush = loadstring("return _G['Bush']")()
Exports.Byte = loadstring("return _G['Byte']")()
Exports.Byte = loadstring("return _G['Byte']")()
Exports.ByteBufferWriter = loadstring("return _G['ByteBufferWriter']")()
Exports.CGlobalObject = loadstring("return _G['CGlobalObject']")()
Exports.CGlobalObjectSystem = loadstring("return _G['CGlobalObjectSystem']")()
Exports.CGlobalObjects = loadstring("return _G['CGlobalObjects']")()
Exports.CacheData = loadstring("return _G['CacheData']")()
Exports.CachedRecipeComparator = loadstring("return _G['CachedRecipeComparator']")()
Exports.CachedRecipeInfo = loadstring("return _G['CachedRecipeInfo']")()
Exports.CachedRecipeInfo = loadstring("return _G['CachedRecipeInfo']")()
Exports.CallbackGetStrongTyped = loadstring("return _G['CallbackGetStrongTyped']")()
Exports.CallbackGetStrongTyped = loadstring("return _G['CallbackGetStrongTyped']")()
Exports.CallbackGetStrongTyped = loadstring("return _G['CallbackGetStrongTyped']")()
Exports.CallbackGetStrongTyped = loadstring("return _G['CallbackGetStrongTyped']")()
Exports.CallbackSetStrongTyped = loadstring("return _G['CallbackSetStrongTyped']")()
Exports.CallbackSetStrongTyped = loadstring("return _G['CallbackSetStrongTyped']")()
Exports.CallbackSetStrongTyped = loadstring("return _G['CallbackSetStrongTyped']")()
Exports.CallbackSetStrongTyped = loadstring("return _G['CallbackSetStrongTyped']")()
Exports.CallbackStackItem = loadstring("return _G['CallbackStackItem']")()
Exports.CallbackStackItem = loadstring("return _G['CallbackStackItem']")()
Exports.CallbackStackItem = loadstring("return _G['CallbackStackItem']")()
Exports.CallbackStackItem = loadstring("return _G['CallbackStackItem']")()
Exports.CallbackStackItem = loadstring("return _G['CallbackStackItem']")()
Exports.Caller = loadstring("return _G['Caller']")()
Exports.Capability = loadstring("return _G['Capability']")()
Exports.CarController = loadstring("return _G['CarController']")()
Exports.CellGetSquare = loadstring("return _G['CellGetSquare']")()
Exports.ChannelCategory = loadstring("return _G['ChannelCategory']")()
Exports.CharDef = loadstring("return _G['CharDef']")()
Exports.CharDefTexture = loadstring("return _G['CharDefTexture']")()
Exports.CharacterActionAnims = loadstring("return _G['CharacterActionAnims']")()
Exports.CharacterMask = loadstring("return _G['CharacterMask']")()
Exports.CharacterSoundEmitter = loadstring("return _G['CharacterSoundEmitter']")()
Exports.CharacterTraits = loadstring("return _G['CharacterTraits']")()
Exports.ChatBase = loadstring("return _G['ChatBase']")()
Exports.ChatElement = loadstring("return _G['ChatElement']")()
Exports.ChatElementOwner = loadstring("return _G['ChatElementOwner']")()
Exports.ChatMessage = loadstring("return _G['ChatMessage']")()
Exports.ChatMode = loadstring("return _G['ChatMode']")()
Exports.ChatSettings = loadstring("return _G['ChatSettings']")()
Exports.ChatTab = loadstring("return _G['ChatTab']")()
Exports.ChatType = loadstring("return _G['ChatType']")()
Exports.Checks = loadstring("return _G['Checks']")()
Exports.ChecksumState = loadstring("return _G['ChecksumState']")()
Exports.ChooseGameInfo = loadstring("return _G['ChooseGameInfo']")()
Exports.ChumData = loadstring("return _G['ChumData']")()
Exports.Chunk = loadstring("return _G['Chunk']")()
Exports.Chunk = loadstring("return _G['Chunk']")()
Exports.ChunkCoord = loadstring("return _G['ChunkCoord']")()
Exports.ChunkData = loadstring("return _G['ChunkData']")()
Exports.ChunkData = loadstring("return _G['ChunkData']")()
Exports.ChunkGenerationStatus = loadstring("return _G['ChunkGenerationStatus']")()
Exports.ChunkLevelData = loadstring("return _G['ChunkLevelData']")()
Exports.ChunkLevelData = loadstring("return _G['ChunkLevelData']")()
Exports.ChunkLevelsData = loadstring("return _G['ChunkLevelsData']")()
Exports.CircleIsoMarker = loadstring("return _G['CircleIsoMarker']")()
Exports.CircleStencilShader = loadstring("return _G['CircleStencilShader']")()
Exports.ClickObject = loadstring("return _G['ClickObject']")()
Exports.ClientChunkRequest = loadstring("return _G['ClientChunkRequest']")()
Exports.ClientControls = loadstring("return _G['ClientControls']")()
Exports.ClientServerMap = loadstring("return _G['ClientServerMap']")()
Exports.ClimateBool = loadstring("return _G['ClimateBool']")()
Exports.ClimateColor = loadstring("return _G['ClimateColor']")()
Exports.ClimateColorInfo = loadstring("return _G['ClimateColorInfo']")()
Exports.ClimateFloat = loadstring("return _G['ClimateFloat']")()
Exports.ClimateForecaster = loadstring("return _G['ClimateForecaster']")()
Exports.ClimateHistory = loadstring("return _G['ClimateHistory']")()
Exports.ClimateManager = loadstring("return _G['ClimateManager']")()
Exports.ClimateMoon = loadstring("return _G['ClimateMoon']")()
Exports.ClimateNetAuth = loadstring("return _G['ClimateNetAuth']")()
Exports.ClimateValues = loadstring("return _G['ClimateValues']")()
Exports.ClimbDownSheetRopeState = loadstring("return _G['ClimbDownSheetRopeState']")()
Exports.ClimbOverFenceState = loadstring("return _G['ClimbOverFenceState']")()
Exports.ClimbOverWallState = loadstring("return _G['ClimbOverWallState']")()
Exports.ClimbSheetRopeState = loadstring("return _G['ClimbSheetRopeState']")()
Exports.ClimbThroughWindowPositioningParams = loadstring("return _G['ClimbThroughWindowPositioningParams']")()
Exports.ClimbThroughWindowState = loadstring("return _G['ClimbThroughWindowState']")()
Exports.Clipboard = loadstring("return _G['Clipboard']")()
Exports.Clipper = loadstring("return _G['Clipper']")()
Exports.ClipperOffset = loadstring("return _G['ClipperOffset']")()
Exports.Clock = loadstring("return _G['Clock']")()
Exports.CloseWindowState = loadstring("return _G['CloseWindowState']")()
Exports.Clothing = loadstring("return _G['Clothing']")()
Exports.ClothingItem = loadstring("return _G['ClothingItem']")()
Exports.ClothingItemReference = loadstring("return _G['ClothingItemReference']")()
Exports.ClothingPatch = loadstring("return _G['ClothingPatch']")()
Exports.ClothingPatchFabricType = loadstring("return _G['ClothingPatchFabricType']")()
Exports.ClothingWetness = loadstring("return _G['ClothingWetness']")()
Exports.ColNfo = loadstring("return _G['ColNfo']")()
Exports.Color = loadstring("return _G['Color']")()
Exports.ColorInfo = loadstring("return _G['ColorInfo']")()
Exports.ColorRGB = loadstring("return _G['ColorRGB']")()
Exports.ColorSet = loadstring("return _G['ColorSet']")()
Exports.ColorStop = loadstring("return _G['ColorStop']")()
Exports.Colors = loadstring("return _G['Colors']")()
Exports.CombatDamageData = loadstring("return _G['CombatDamageData']")()
Exports.ComboItem = loadstring("return _G['ComboItem']")()
Exports.Component = loadstring("return _G['Component']")()
Exports.ComponentEvent = loadstring("return _G['ComponentEvent']")()
Exports.ComponentEventType = loadstring("return _G['ComponentEventType']")()
Exports.ComponentScript = loadstring("return _G['ComponentScript']")()
Exports.ComponentType = loadstring("return _G['ComponentType']")()
Exports.ComponentUiScript = loadstring("return _G['ComponentUiScript']")()
Exports.ComponentUiStyle = loadstring("return _G['ComponentUiStyle']")()
Exports.ConfigOption = loadstring("return _G['ConfigOption']")()
Exports.ConnectToServerState = loadstring("return _G['ConnectToServerState']")()
Exports.ConnectionType = loadstring("return _G['ConnectionType']")()
Exports.Container = loadstring("return _G['Container']")()
Exports.ContainerID = loadstring("return _G['ContainerID']")()
Exports.ContainerOverlays = loadstring("return _G['ContainerOverlays']")()
Exports.ContainerType = loadstring("return _G['ContainerType']")()
Exports.Core = loadstring("return _G['Core']")()
Exports.CraftBench = loadstring("return _G['CraftBench']")()
Exports.CraftBenchScript = loadstring("return _G['CraftBenchScript']")()
Exports.CraftLogic = loadstring("return _G['CraftLogic']")()
Exports.CraftLogicScript = loadstring("return _G['CraftLogicScript']")()
Exports.CraftMode = loadstring("return _G['CraftMode']")()
Exports.CraftRecipe = loadstring("return _G['CraftRecipe']")()
Exports.CraftRecipeComponent = loadstring("return _G['CraftRecipeComponent']")()
Exports.CraftRecipeComponentScript = loadstring("return _G['CraftRecipeComponentScript']")()
Exports.CraftRecipeData = loadstring("return _G['CraftRecipeData']")()
Exports.CraftRecipeManager = loadstring("return _G['CraftRecipeManager']")()
Exports.CraftRecipeMonitor = loadstring("return _G['CraftRecipeMonitor']")()
Exports.CraftRecipeSort = loadstring("return _G['CraftRecipeSort']")()
Exports.CraftUtil = loadstring("return _G['CraftUtil']")()
Exports.CrawlingZombieTurnState = loadstring("return _G['CrawlingZombieTurnState']")()
Exports.Credit = loadstring("return _G['Credit']")()
Exports.CustomSandboxOption = loadstring("return _G['CustomSandboxOption']")()
Exports.CutawayNoDepthShader = loadstring("return _G['CutawayNoDepthShader']")()
Exports.CutawayWall = loadstring("return _G['CutawayWall']")()
Exports.Cylinder = loadstring("return _G['Cylinder']")()
Exports.DBResult = loadstring("return _G['DBResult']")()
Exports.DBTicket = loadstring("return _G['DBTicket']")()
Exports.DataCell = loadstring("return _G['DataCell']")()
Exports.DataChunk = loadstring("return _G['DataChunk']")()
Exports.DataInputStream = loadstring("return _G['DataInputStream']")()
Exports.DataOutputStream = loadstring("return _G['DataOutputStream']")()
Exports.DataPoint = loadstring("return _G['DataPoint']")()
Exports.DayForecast = loadstring("return _G['DayForecast']")()
Exports.DayInfo = loadstring("return _G['DayInfo']")()
Exports.DeadCharacterPacket = loadstring("return _G['DeadCharacterPacket']")()
Exports.Debug = loadstring("return _G['Debug']")()
Exports.DebugChunkState = loadstring("return _G['DebugChunkState']")()
Exports.DebugDrawSettings = loadstring("return _G['DebugDrawSettings']")()
Exports.DebugFlagsOG = loadstring("return _G['DebugFlagsOG']")()
Exports.DebugGlobalObjectState = loadstring("return _G['DebugGlobalObjectState']")()
Exports.DebugLog = loadstring("return _G['DebugLog']")()
Exports.DebugLogStream = loadstring("return _G['DebugLogStream']")()
Exports.DebugOG = loadstring("return _G['DebugOG']")()
Exports.DebugOptions = loadstring("return _G['DebugOptions']")()
Exports.DebugType = loadstring("return _G['DebugType']")()
Exports.DeferedTextDraw = loadstring("return _G['DeferedTextDraw']")()
Exports.Descriptor = loadstring("return _G['Descriptor']")()
Exports.Descriptor = loadstring("return _G['Descriptor']")()
Exports.DesignationZone = loadstring("return _G['DesignationZone']")()
Exports.DesignationZoneAnimal = loadstring("return _G['DesignationZoneAnimal']")()
Exports.DeviceData = loadstring("return _G['DeviceData']")()
Exports.DeviceList = loadstring("return _G['DeviceList']")()
Exports.DevicePresets = loadstring("return _G['DevicePresets']")()
Exports.Direction = loadstring("return _G['Direction']")()
Exports.DirectionArrow = loadstring("return _G['DirectionArrow']")()
Exports.Display = loadstring("return _G['Display']")()
Exports.DisplayAsBar = loadstring("return _G['DisplayAsBar']")()
Exports.Door = loadstring("return _G['Door']")()
Exports.DoorLogic = loadstring("return _G['DoorLogic']")()
Exports.DoorType = loadstring("return _G['DoorType']")()
Exports.Double = loadstring("return _G['Double']")()
Exports.Double = loadstring("return _G['Double']")()
Exports.DoubleConfigOption = loadstring("return _G['DoubleConfigOption']")()
Exports.DoubleConfigOption1 = loadstring("return _G['DoubleConfigOption1']")()
Exports.DoubleDebugOption = loadstring("return _G['DoubleDebugOption']")()
Exports.DoubleSandboxOption = loadstring("return _G['DoubleSandboxOption']")()
Exports.DoubleServerOption = loadstring("return _G['DoubleServerOption']")()
Exports.Drainable = loadstring("return _G['Drainable']")()
Exports.DrainableComboItem = loadstring("return _G['DrainableComboItem']")()
Exports.Drawer = loadstring("return _G['Drawer']")()
Exports.DryingLogic = loadstring("return _G['DryingLogic']")()
Exports.DryingSlot = loadstring("return _G['DryingSlot']")()
Exports.DummyCharacterSoundEmitter = loadstring("return _G['DummyCharacterSoundEmitter']")()
Exports.DummySoundBank = loadstring("return _G['DummySoundBank']")()
Exports.DummySoundEmitter = loadstring("return _G['DummySoundEmitter']")()
Exports.DummySoundManager = loadstring("return _G['DummySoundManager']")()
Exports.DynamicRadioChannel = loadstring("return _G['DynamicRadioChannel']")()
Exports.EditVehicleState = loadstring("return _G['EditVehicleState']")()
Exports.EffectLight = loadstring("return _G['EffectLight']")()
Exports.Element = loadstring("return _G['Element']")()
Exports.EmitterType = loadstring("return _G['EmitterType']")()
Exports.EndType = loadstring("return _G['EndType']")()
Exports.Energy = loadstring("return _G['Energy']")()
Exports.EnergyDefinitionScript = loadstring("return _G['EnergyDefinitionScript']")()
Exports.EnergyType = loadstring("return _G['EnergyType']")()
Exports.EntityBucket = loadstring("return _G['EntityBucket']")()
Exports.EntityDebugTest = loadstring("return _G['EntityDebugTest']")()
Exports.EntityDebugTestType = loadstring("return _G['EntityDebugTestType']")()
Exports.EntityEvent = loadstring("return _G['EntityEvent']")()
Exports.EntityEventType = loadstring("return _G['EntityEventType']")()
Exports.EntityPacketData = loadstring("return _G['EntityPacketData']")()
Exports.EntityPacketType = loadstring("return _G['EntityPacketType']")()
Exports.EntityScriptInfo = loadstring("return _G['EntityScriptInfo']")()
Exports.EntityUiScript = loadstring("return _G['EntityUiScript']")()
Exports.EntityUiStyle = loadstring("return _G['EntityUiStyle']")()
Exports.EntityValidator = loadstring("return _G['EntityValidator']")()
Exports.Enum = loadstring("return _G['Enum']")()
Exports.Enum = loadstring("return _G['Enum']")()
Exports.EnumBitStore = loadstring("return _G['EnumBitStore']")()
Exports.EnumConfigOption = loadstring("return _G['EnumConfigOption']")()
Exports.EnumMap = loadstring("return _G['EnumMap']")()
Exports.EnumSandboxOption = loadstring("return _G['EnumSandboxOption']")()
Exports.EnumServerOption = loadstring("return _G['EnumServerOption']")()
Exports.EnumSet = loadstring("return _G['EnumSet']")()
Exports.EnumSet = loadstring("return _G['EnumSet']")()
Exports.EnumStringObj = loadstring("return _G['EnumStringObj']")()
Exports.EnumStringSet = loadstring("return _G['EnumStringSet']")()
Exports.EnumStringSet = loadstring("return _G['EnumStringSet']")()
Exports.ErosionConfig = loadstring("return _G['ErosionConfig']")()
Exports.ErosionData = loadstring("return _G['ErosionData']")()
Exports.ErosionMain = loadstring("return _G['ErosionMain']")()
Exports.ErosionSeason = loadstring("return _G['ErosionSeason']")()
Exports.Event = loadstring("return _G['Event']")()
Exports.EventSound = loadstring("return _G['EventSound']")()
Exports.EvolvedRecipe = loadstring("return _G['EvolvedRecipe']")()
Exports.Existences = loadstring("return _G['Existences']")()
Exports.ExitOption = loadstring("return _G['ExitOption']")()
Exports.ExpandStyle = loadstring("return _G['ExpandStyle']")()
Exports.ExplosionMode = loadstring("return _G['ExplosionMode']")()
Exports.Exposer = loadstring("return _G['Exposer']")()
Exports.FBORenderChunk = loadstring("return _G['FBORenderChunk']")()
Exports.FBORenderCutaways = loadstring("return _G['FBORenderCutaways']")()
Exports.FBORenderLevels = loadstring("return _G['FBORenderLevels']")()
Exports.FBORenderTracerEffects = loadstring("return _G['FBORenderTracerEffects']")()
Exports.FMODAudio = loadstring("return _G['FMODAudio']")()
Exports.FMODDebugEventPlayer = loadstring("return _G['FMODDebugEventPlayer']")()
Exports.FMODParameter = loadstring("return _G['FMODParameter']")()
Exports.FMODParameterList = loadstring("return _G['FMODParameterList']")()
Exports.FMODSoundBank = loadstring("return _G['FMODSoundBank']")()
Exports.FMODSoundEmitter = loadstring("return _G['FMODSoundEmitter']")()
Exports.FaceInfo = loadstring("return _G['FaceInfo']")()
Exports.FaceScript = loadstring("return _G['FaceScript']")()
Exports.Faction = loadstring("return _G['Faction']")()
Exports.FakeDeadAttackState = loadstring("return _G['FakeDeadAttackState']")()
Exports.FakeDeadZombieState = loadstring("return _G['FakeDeadZombieState']")()
Exports.Family = loadstring("return _G['Family']")()
Exports.Feature = loadstring("return _G['Feature']")()
Exports.FeatureType = loadstring("return _G['FeatureType']")()
Exports.FileSeekMode = loadstring("return _G['FileSeekMode']")()
Exports.FileSystem = loadstring("return _G['FileSystem']")()
Exports.FileTask = loadstring("return _G['FileTask']")()
Exports.FilterArgs = loadstring("return _G['FilterArgs']")()
Exports.FilterMode = loadstring("return _G['FilterMode']")()
Exports.FilterType = loadstring("return _G['FilterType']")()
Exports.FishSchoolManager = loadstring("return _G['FishSchoolManager']")()
Exports.FishingStage = loadstring("return _G['FishingStage']")()
Exports.FishingState = loadstring("return _G['FishingState']")()
Exports.Fitness = loadstring("return _G['Fitness']")()
Exports.FitnessExercise = loadstring("return _G['FitnessExercise']")()
Exports.FitnessState = loadstring("return _G['FitnessState']")()
Exports.Fixer = loadstring("return _G['Fixer']")()
Exports.FixerSkill = loadstring("return _G['FixerSkill']")()
Exports.Fixing = loadstring("return _G['Fixing']")()
Exports.FixingManager = loadstring("return _G['FixingManager']")()
Exports.Flags = loadstring("return _G['Flags']")()
Exports.Flare = loadstring("return _G['Flare']")()
Exports.Float = loadstring("return _G['Float']")()
Exports.Float = loadstring("return _G['Float']")()
Exports.FloatGet = loadstring("return _G['FloatGet']")()
Exports.FloatList = loadstring("return _G['FloatList']")()
Exports.FloatSet = loadstring("return _G['FloatSet']")()
Exports.FloatStop = loadstring("return _G['FloatStop']")()
Exports.Fluid = loadstring("return _G['Fluid']")()
Exports.FluidCategory = loadstring("return _G['FluidCategory']")()
Exports.FluidConsume = loadstring("return _G['FluidConsume']")()
Exports.FluidContainer = loadstring("return _G['FluidContainer']")()
Exports.FluidContainerScript = loadstring("return _G['FluidContainerScript']")()
Exports.FluidDefinitionScript = loadstring("return _G['FluidDefinitionScript']")()
Exports.FluidFilter = loadstring("return _G['FluidFilter']")()
Exports.FluidFilterScript = loadstring("return _G['FluidFilterScript']")()
Exports.FluidInstance = loadstring("return _G['FluidInstance']")()
Exports.FluidMatchMode = loadstring("return _G['FluidMatchMode']")()
Exports.FluidProperties = loadstring("return _G['FluidProperties']")()
Exports.FluidSample = loadstring("return _G['FluidSample']")()
Exports.FluidScript = loadstring("return _G['FluidScript']")()
Exports.FluidType = loadstring("return _G['FluidType']")()
Exports.FluidUtil = loadstring("return _G['FluidUtil']")()
Exports.FontSize = loadstring("return _G['FontSize']")()
Exports.Food = loadstring("return _G['Food']")()
Exports.ForceHitReactionLocation = loadstring("return _G['ForceHitReactionLocation']")()
Exports.ForcedGenes = loadstring("return _G['ForcedGenes']")()
Exports.ForecastValue = loadstring("return _G['ForecastValue']")()
Exports.Frame = loadstring("return _G['Frame']")()
Exports.FrameLightBlendStatus = loadstring("return _G['FrameLightBlendStatus']")()
Exports.FrameLightInfo = loadstring("return _G['FrameLightInfo']")()
Exports.FrameState = loadstring("return _G['FrameState']")()
Exports.FridgeHumLogic = loadstring("return _G['FridgeHumLogic']")()
Exports.FurnaceLogic = loadstring("return _G['FurnaceLogic']")()
Exports.FurnaceLogicScript = loadstring("return _G['FurnaceLogicScript']")()
Exports.FurnaceSlot = loadstring("return _G['FurnaceSlot']")()
Exports.GameCharacterAIBrain = loadstring("return _G['GameCharacterAIBrain']")()
Exports.GameClient = loadstring("return _G['GameClient']")()
Exports.GameEntity = loadstring("return _G['GameEntity']")()
Exports.GameEntityFactory = loadstring("return _G['GameEntityFactory']")()
Exports.GameEntityScript = loadstring("return _G['GameEntityScript']")()
Exports.GameEntityTemplate = loadstring("return _G['GameEntityTemplate']")()
Exports.GameEntityType = loadstring("return _G['GameEntityType']")()
Exports.GameEntityUtil = loadstring("return _G['GameEntityUtil']")()
Exports.GameKeyboard = loadstring("return _G['GameKeyboard']")()
Exports.GameLoadingState = loadstring("return _G['GameLoadingState']")()
Exports.GameMode = loadstring("return _G['GameMode']")()
Exports.GameSound = loadstring("return _G['GameSound']")()
Exports.GameSoundClip = loadstring("return _G['GameSoundClip']")()
Exports.GameSoundScript = loadstring("return _G['GameSoundScript']")()
Exports.GameSounds = loadstring("return _G['GameSounds']")()
Exports.GameState = loadstring("return _G['GameState']")()
Exports.GameStateMachine = loadstring("return _G['GameStateMachine']")()
Exports.GameTime = loadstring("return _G['GameTime']")()
Exports.GameVersion = loadstring("return _G['GameVersion']")()
Exports.GameWindow = loadstring("return _G['GameWindow']")()
Exports.GearInfo = loadstring("return _G['GearInfo']")()
Exports.GenericDrawer = loadstring("return _G['GenericDrawer']")()
Exports.GenericSpriteRenderState = loadstring("return _G['GenericSpriteRenderState']")()
Exports.Geometry = loadstring("return _G['Geometry']")()
Exports.GeometryData = loadstring("return _G['GeometryData']")()
Exports.GetSquare = loadstring("return _G['GetSquare']")()
Exports.GibletType = loadstring("return _G['GibletType']")()
Exports.GlobalObject = loadstring("return _G['GlobalObject']")()
Exports.GlobalObject = loadstring("return _G['GlobalObject']")()
Exports.GlobalObjectSystem = loadstring("return _G['GlobalObjectSystem']")()
Exports.GrappleOffsetBehaviour = loadstring("return _G['GrappleOffsetBehaviour']")()
Exports.Grass = loadstring("return _G['Grass']")()
Exports.GridPlane = loadstring("return _G['GridPlane']")()
Exports.GridSquareMarker = loadstring("return _G['GridSquareMarker']")()
Exports.HairStyle = loadstring("return _G['HairStyle']")()
Exports.HairStyles = loadstring("return _G['HairStyles']")()
Exports.HaloTextHelper = loadstring("return _G['HaloTextHelper']")()
Exports.HandWeapon = loadstring("return _G['HandWeapon']")()
Exports.HandcraftLogic = loadstring("return _G['HandcraftLogic']")()
Exports.HashMap = loadstring("return _G['HashMap']")()
Exports.HitInfo = loadstring("return _G['HitInfo']")()
Exports.HitReactionNetworkAI = loadstring("return _G['HitReactionNetworkAI']")()
Exports.HitReactionSetting = loadstring("return _G['HitReactionSetting']")()
Exports.HitVars = loadstring("return _G['HitVars']")()
Exports.HumanCorpse = loadstring("return _G['HumanCorpse']")()
Exports.HumanVisual = loadstring("return _G['HumanVisual']")()
Exports.Hygrometry = loadstring("return _G['Hygrometry']")()
Exports.IAnimEventListener = loadstring("return _G['IAnimEventListener']")()
Exports.IAnimEventListenerBoolean = loadstring("return _G['IAnimEventListenerBoolean']")()
Exports.IAnimEventListenerFloat = loadstring("return _G['IAnimEventListenerFloat']")()
Exports.IAnimEventListenerNoParam = loadstring("return _G['IAnimEventListenerNoParam']")()
Exports.IAnimEventListenerSetVariableString = loadstring("return _G['IAnimEventListenerSetVariableString']")()
Exports.IAnimEventListenerString = loadstring("return _G['IAnimEventListenerString']")()
Exports.IAnimListener = loadstring("return _G['IAnimListener']")()
Exports.IAnimalVisual = loadstring("return _G['IAnimalVisual']")()
Exports.IAnimatable = loadstring("return _G['IAnimatable']")()
Exports.IAnimationVariableCallbackMap = loadstring("return _G['IAnimationVariableCallbackMap']")()
Exports.IAnimationVariableSlot = loadstring("return _G['IAnimationVariableSlot']")()
Exports.IAnimationVariableSource = loadstring("return _G['IAnimationVariableSource']")()
Exports.IBiome = loadstring("return _G['IBiome']")()
Exports.IBucketListener = loadstring("return _G['IBucketListener']")()
Exports.ICallback = loadstring("return _G['ICallback']")()
Exports.ICallback = loadstring("return _G['ICallback']")()
Exports.ICallback = loadstring("return _G['ICallback']")()
Exports.ICallback = loadstring("return _G['ICallback']")()
Exports.ICallback = loadstring("return _G['ICallback']")()
Exports.ICallback = loadstring("return _G['ICallback']")()
Exports.ICallback = loadstring("return _G['ICallback']")()
Exports.ICallback = loadstring("return _G['ICallback']")()
Exports.ICallback = loadstring("return _G['ICallback']")()
Exports.IChunkRegion = loadstring("return _G['IChunkRegion']")()
Exports.IDebugLogFormatter = loadstring("return _G['IDebugLogFormatter']")()
Exports.IDebugOption = loadstring("return _G['IDebugOption']")()
Exports.IDebugOptionGroup = loadstring("return _G['IDebugOptionGroup']")()
Exports.IDs = loadstring("return _G['IDs']")()
Exports.IElementSpawner = loadstring("return _G['IElementSpawner']")()
Exports.IFile = loadstring("return _G['IFile']")()
Exports.IFileDevice = loadstring("return _G['IFileDevice']")()
Exports.IFileTask2Callback = loadstring("return _G['IFileTask2Callback']")()
Exports.IFileTaskCallback = loadstring("return _G['IFileTaskCallback']")()
Exports.IGLBufferObject = loadstring("return _G['IGLBufferObject']")()
Exports.IGLFramebufferObject = loadstring("return _G['IGLFramebufferObject']")()
Exports.IGrappleable = loadstring("return _G['IGrappleable']")()
Exports.IHumanVisual = loadstring("return _G['IHumanVisual']")()
Exports.IIdentifiable = loadstring("return _G['IIdentifiable']")()
Exports.ILighting = loadstring("return _G['ILighting']")()
Exports.IModelAttachmentOwner = loadstring("return _G['IModelAttachmentOwner']")()
Exports.IModelCamera = loadstring("return _G['IModelCamera']")()
Exports.IMovable = loadstring("return _G['IMovable']")()
Exports.INetworkPacket = loadstring("return _G['INetworkPacket']")()
Exports.IOScript = loadstring("return _G['IOScript']")()
Exports.IPooledObject = loadstring("return _G['IPooledObject']")()
Exports.IReplace = loadstring("return _G['IReplace']")()
Exports.IReplaceProvider = loadstring("return _G['IReplaceProvider']")()
Exports.IShaderProgramListener = loadstring("return _G['IShaderProgramListener']")()
Exports.IStatePermissions = loadstring("return _G['IStatePermissions']")()
Exports.ITemplateBuilder = loadstring("return _G['ITemplateBuilder']")()
Exports.ITexture = loadstring("return _G['ITexture']")()
Exports.IVersionHash = loadstring("return _G['IVersionHash']")()
Exports.IWorldMapStyleFilter = loadstring("return _G['IWorldMapStyleFilter']")()
Exports.IWorldMapSymbolListener = loadstring("return _G['IWorldMapSymbolListener']")()
Exports.IWorldRegion = loadstring("return _G['IWorldRegion']")()
Exports.IdleState = loadstring("return _G['IdleState']")()
Exports.ImageData = loadstring("return _G['ImageData']")()
Exports.ImageDataFrame = loadstring("return _G['ImageDataFrame']")()
Exports.ImagePyramid = loadstring("return _G['ImagePyramid']")()
Exports.ImmutableArray = loadstring("return _G['ImmutableArray']")()
Exports.ImmutableColor = loadstring("return _G['ImmutableColor']")()
Exports.Imposter = loadstring("return _G['Imposter']")()
Exports.ImprovedFog = loadstring("return _G['ImprovedFog']")()
Exports.ImprovedFogDrawer = loadstring("return _G['ImprovedFogDrawer']")()
Exports.Input = loadstring("return _G['Input']")()
Exports.InputFlag = loadstring("return _G['InputFlag']")()
Exports.InputItemNode = loadstring("return _G['InputItemNode']")()
Exports.InputScript = loadstring("return _G['InputScript']")()
Exports.InputScriptData = loadstring("return _G['InputScriptData']")()
Exports.InstancedBuffer = loadstring("return _G['InstancedBuffer']")()
Exports.Int = loadstring("return _G['Int']")()
Exports.Int = loadstring("return _G['Int']")()
Exports.IntegerConfigOption = loadstring("return _G['IntegerConfigOption']")()
Exports.IntegerDebugOption = loadstring("return _G['IntegerDebugOption']")()
Exports.IntegerSandboxOption = loadstring("return _G['IntegerSandboxOption']")()
Exports.IntegerServerOption = loadstring("return _G['IntegerServerOption']")()
Exports.InventoryContainer = loadstring("return _G['InventoryContainer']")()
Exports.InventoryItem = loadstring("return _G['InventoryItem']")()
Exports.Invokers = loadstring("return _G['Invokers']")()
Exports.IsoAnim = loadstring("return _G['IsoAnim']")()
Exports.IsoAnimal = loadstring("return _G['IsoAnimal']")()
Exports.IsoAnimalTrack = loadstring("return _G['IsoAnimalTrack']")()
Exports.IsoBarbecue = loadstring("return _G['IsoBarbecue']")()
Exports.IsoBarricade = loadstring("return _G['IsoBarricade']")()
Exports.IsoBrokenGlass = loadstring("return _G['IsoBrokenGlass']")()
Exports.IsoBuilding = loadstring("return _G['IsoBuilding']")()
Exports.IsoButcherHook = loadstring("return _G['IsoButcherHook']")()
Exports.IsoCamera = loadstring("return _G['IsoCamera']")()
Exports.IsoCarBatteryCharger = loadstring("return _G['IsoCarBatteryCharger']")()
Exports.IsoCell = loadstring("return _G['IsoCell']")()
Exports.IsoChunk = loadstring("return _G['IsoChunk']")()
Exports.IsoChunkLevel = loadstring("return _G['IsoChunkLevel']")()
Exports.IsoChunkMap = loadstring("return _G['IsoChunkMap']")()
Exports.IsoChunkRegion = loadstring("return _G['IsoChunkRegion']")()
Exports.IsoClothingDryer = loadstring("return _G['IsoClothingDryer']")()
Exports.IsoClothingWasher = loadstring("return _G['IsoClothingWasher']")()
Exports.IsoCombinationWasherDryer = loadstring("return _G['IsoCombinationWasherDryer']")()
Exports.IsoCompost = loadstring("return _G['IsoCompost']")()
Exports.IsoCurtain = loadstring("return _G['IsoCurtain']")()
Exports.IsoDeadBody = loadstring("return _G['IsoDeadBody']")()
Exports.IsoDeadBodyOG = loadstring("return _G['IsoDeadBodyOG']")()
Exports.IsoDirectionFrame = loadstring("return _G['IsoDirectionFrame']")()
Exports.IsoDirectionSet = loadstring("return _G['IsoDirectionSet']")()
Exports.IsoDirections = loadstring("return _G['IsoDirections']")()
Exports.IsoDoor = loadstring("return _G['IsoDoor']")()
Exports.IsoDummyCameraCharacter = loadstring("return _G['IsoDummyCameraCharacter']")()
Exports.IsoFeedingTrough = loadstring("return _G['IsoFeedingTrough']")()
Exports.IsoFire = loadstring("return _G['IsoFire']")()
Exports.IsoFireManager = loadstring("return _G['IsoFireManager']")()
Exports.IsoFireplace = loadstring("return _G['IsoFireplace']")()
Exports.IsoFlagType = loadstring("return _G['IsoFlagType']")()
Exports.IsoGameCharacter = loadstring("return _G['IsoGameCharacter']")()
Exports.IsoGameCharacterOG = loadstring("return _G['IsoGameCharacterOG']")()
Exports.IsoGenerator = loadstring("return _G['IsoGenerator']")()
Exports.IsoGridOcclusionData = loadstring("return _G['IsoGridOcclusionData']")()
Exports.IsoGridSquare = loadstring("return _G['IsoGridSquare']")()
Exports.IsoGridSquareCollisionData = loadstring("return _G['IsoGridSquareCollisionData']")()
Exports.IsoHeatSource = loadstring("return _G['IsoHeatSource']")()
Exports.IsoHutch = loadstring("return _G['IsoHutch']")()
Exports.IsoJukebox = loadstring("return _G['IsoJukebox']")()
Exports.IsoLightSource = loadstring("return _G['IsoLightSource']")()
Exports.IsoLightSwitch = loadstring("return _G['IsoLightSwitch']")()
Exports.IsoLivingCharacter = loadstring("return _G['IsoLivingCharacter']")()
Exports.IsoLot = loadstring("return _G['IsoLot']")()
Exports.IsoLuaMover = loadstring("return _G['IsoLuaMover']")()
Exports.IsoMannequin = loadstring("return _G['IsoMannequin']")()
Exports.IsoMarker = loadstring("return _G['IsoMarker']")()
Exports.IsoMarkers = loadstring("return _G['IsoMarkers']")()
Exports.IsoMetaCell = loadstring("return _G['IsoMetaCell']")()
Exports.IsoMetaChunk = loadstring("return _G['IsoMetaChunk']")()
Exports.IsoMetaGrid = loadstring("return _G['IsoMetaGrid']")()
Exports.IsoMolotovCocktail = loadstring("return _G['IsoMolotovCocktail']")()
Exports.IsoMovingObject = loadstring("return _G['IsoMovingObject']")()
Exports.IsoObject = loadstring("return _G['IsoObject']")()
Exports.IsoObjectFactory = loadstring("return _G['IsoObjectFactory']")()
Exports.IsoObjectPicker = loadstring("return _G['IsoObjectPicker']")()
Exports.IsoObjectType = loadstring("return _G['IsoObjectType']")()
Exports.IsoPlayer = loadstring("return _G['IsoPlayer']")()
Exports.IsoPuddles = loadstring("return _G['IsoPuddles']")()
Exports.IsoPuddlesGeometry = loadstring("return _G['IsoPuddlesGeometry']")()
Exports.IsoPushableObject = loadstring("return _G['IsoPushableObject']")()
Exports.IsoRadio = loadstring("return _G['IsoRadio']")()
Exports.IsoRainSplash = loadstring("return _G['IsoRainSplash']")()
Exports.IsoRaindrop = loadstring("return _G['IsoRaindrop']")()
Exports.IsoRegionLog = loadstring("return _G['IsoRegionLog']")()
Exports.IsoRegionLogType = loadstring("return _G['IsoRegionLogType']")()
Exports.IsoRegions = loadstring("return _G['IsoRegions']")()
Exports.IsoRegionsLogger = loadstring("return _G['IsoRegionsLogger']")()
Exports.IsoRegionsRenderer = loadstring("return _G['IsoRegionsRenderer']")()
Exports.IsoRoom = loadstring("return _G['IsoRoom']")()
Exports.IsoRoomLight = loadstring("return _G['IsoRoomLight']")()
Exports.IsoSprite = loadstring("return _G['IsoSprite']")()
Exports.IsoSpriteGrid = loadstring("return _G['IsoSpriteGrid']")()
Exports.IsoSpriteInstance = loadstring("return _G['IsoSpriteInstance']")()
Exports.IsoSpriteManager = loadstring("return _G['IsoSpriteManager']")()
Exports.IsoStackedWasherDryer = loadstring("return _G['IsoStackedWasherDryer']")()
Exports.IsoStove = loadstring("return _G['IsoStove']")()
Exports.IsoSurvivor = loadstring("return _G['IsoSurvivor']")()
Exports.IsoTelevision = loadstring("return _G['IsoTelevision']")()
Exports.IsoThumpable = loadstring("return _G['IsoThumpable']")()
Exports.IsoTrap = loadstring("return _G['IsoTrap']")()
Exports.IsoTree = loadstring("return _G['IsoTree']")()
Exports.IsoUtils = loadstring("return _G['IsoUtils']")()
Exports.IsoWaterGeometry = loadstring("return _G['IsoWaterGeometry']")()
Exports.IsoWaveSignal = loadstring("return _G['IsoWaveSignal']")()
Exports.IsoWeatherFX = loadstring("return _G['IsoWeatherFX']")()
Exports.IsoWheelieBin = loadstring("return _G['IsoWheelieBin']")()
Exports.IsoWindow = loadstring("return _G['IsoWindow']")()
Exports.IsoWindowFrame = loadstring("return _G['IsoWindowFrame']")()
Exports.IsoWorld = loadstring("return _G['IsoWorld']")()
Exports.IsoWorldInventoryObject = loadstring("return _G['IsoWorldInventoryObject']")()
Exports.IsoWorldRegion = loadstring("return _G['IsoWorldRegion']")()
Exports.IsoZombie = loadstring("return _G['IsoZombie']")()
Exports.IsoZombieGiblets = loadstring("return _G['IsoZombieGiblets']")()
Exports.Item = loadstring("return _G['Item']")()
Exports.ItemApplyMode = loadstring("return _G['ItemApplyMode']")()
Exports.ItemConfig = loadstring("return _G['ItemConfig']")()
Exports.ItemConfigException = loadstring("return _G['ItemConfigException']")()
Exports.ItemContainer = loadstring("return _G['ItemContainer']")()
Exports.ItemDataList = loadstring("return _G['ItemDataList']")()
Exports.ItemFilter = loadstring("return _G['ItemFilter']")()
Exports.ItemFilterScript = loadstring("return _G['ItemFilterScript']")()
Exports.ItemPickInfo = loadstring("return _G['ItemPickInfo']")()
Exports.ItemPickerContainer = loadstring("return _G['ItemPickerContainer']")()
Exports.ItemPickerItem = loadstring("return _G['ItemPickerItem']")()
Exports.ItemPickerJava = loadstring("return _G['ItemPickerJava']")()
Exports.ItemPickerRoom = loadstring("return _G['ItemPickerRoom']")()
Exports.ItemPickerUpgradeWeapons = loadstring("return _G['ItemPickerUpgradeWeapons']")()
Exports.ItemRecipe = loadstring("return _G['ItemRecipe']")()
Exports.ItemReplacement = loadstring("return _G['ItemReplacement']")()
Exports.ItemSpawner = loadstring("return _G['ItemSpawner']")()
Exports.ItemState = loadstring("return _G['ItemState']")()
Exports.ItemType = loadstring("return _G['ItemType']")()
Exports.ItemVisual = loadstring("return _G['ItemVisual']")()
Exports.ItemVisuals = loadstring("return _G['ItemVisuals']")()
Exports.Iterator = loadstring("return _G['Iterator']")()
Exports.JobType = loadstring("return _G['JobType']")()
Exports.JoinType = loadstring("return _G['JoinType']")()
Exports.Joypad = loadstring("return _G['Joypad']")()
Exports.JoypadManager = loadstring("return _G['JoypadManager']")()
Exports.KahluaUtil = loadstring("return _G['KahluaUtil']")()
Exports.Key = loadstring("return _G['Key']")()
Exports.KeyNamer = loadstring("return _G['KeyNamer']")()
Exports.KeyRing = loadstring("return _G['KeyRing']")()
Exports.Keyboard = loadstring("return _G['Keyboard']")()
Exports.Keyframe = loadstring("return _G['Keyframe']")()
Exports.KnownBlockedEdges = loadstring("return _G['KnownBlockedEdges']")()
Exports.Landscape = loadstring("return _G['Landscape']")()
Exports.Language = loadstring("return _G['Language']")()
Exports.Layout = loadstring("return _G['Layout']")()
Exports.LayoutItem = loadstring("return _G['LayoutItem']")()
Exports.LightBar = loadstring("return _G['LightBar']")()
Exports.LightInfo = loadstring("return _G['LightInfo']")()
Exports.Lighting = loadstring("return _G['Lighting']")()
Exports.Line = loadstring("return _G['Line']")()
Exports.LinkedHashMap = loadstring("return _G['LinkedHashMap']")()
Exports.LinkedList = loadstring("return _G['LinkedList']")()
Exports.Literature = loadstring("return _G['Literature']")()
Exports.LiveAnimNode = loadstring("return _G['LiveAnimNode']")()
Exports.LoadingQueueState = loadstring("return _G['LoadingQueueState']")()
Exports.Location = loadstring("return _G['Location']")()
Exports.LogSeverity = loadstring("return _G['LogSeverity']")()
Exports.Long = loadstring("return _G['Long']")()
Exports.Long = loadstring("return _G['Long']")()
Exports.LosUtil = loadstring("return _G['LosUtil']")()
Exports.LotHeader = loadstring("return _G['LotHeader']")()
Exports.LuaCall = loadstring("return _G['LuaCall']")()
Exports.LuaCall = loadstring("return _G['LuaCall']")()
Exports.LuaCall = loadstring("return _G['LuaCall']")()
Exports.LuaComponent = loadstring("return _G['LuaComponent']")()
Exports.LuaComponentScript = loadstring("return _G['LuaComponentScript']")()
Exports.LuaEnvironment = loadstring("return _G['LuaEnvironment']")()
Exports.LuaEventManager = loadstring("return _G['LuaEventManager']")()
Exports.LuaFileWriter = loadstring("return _G['LuaFileWriter']")()
Exports.LuaManager = loadstring("return _G['LuaManager']")()
Exports.LuaTimedAction = loadstring("return _G['LuaTimedAction']")()
Exports.LuaTimedActionNew = loadstring("return _G['LuaTimedActionNew']")()
Exports.LungeState = loadstring("return _G['LungeState']")()
Exports.MPClientStatistic = loadstring("return _G['MPClientStatistic']")()
Exports.MainScreenState = loadstring("return _G['MainScreenState']")()
Exports.MannequinScript = loadstring("return _G['MannequinScript']")()
Exports.MannequinZone = loadstring("return _G['MannequinZone']")()
Exports.Map = loadstring("return _G['Map']")()
Exports.Map = loadstring("return _G['Map']")()
Exports.MapFiles = loadstring("return _G['MapFiles']")()
Exports.MapGroups = loadstring("return _G['MapGroups']")()
Exports.MapItem = loadstring("return _G['MapItem']")()
Exports.MapKnowledge = loadstring("return _G['MapKnowledge']")()
Exports.MapObjects = loadstring("return _G['MapObjects']")()
Exports.MashingLogic = loadstring("return _G['MashingLogic']")()
Exports.MashingLogicScript = loadstring("return _G['MashingLogicScript']")()
Exports.Mask = loadstring("return _G['Mask']")()
Exports.MasterVolume = loadstring("return _G['MasterVolume']")()
Exports.Material = loadstring("return _G['Material']")()
Exports.MaterialType = loadstring("return _G['MaterialType']")()
Exports.Math = loadstring("return _G['Math']")()
Exports.Matrix4fObjectPool = loadstring("return _G['Matrix4fObjectPool']")()
Exports.MediaData = loadstring("return _G['MediaData']")()
Exports.MediaLineData = loadstring("return _G['MediaLineData']")()
Exports.MediaNameSorter = loadstring("return _G['MediaNameSorter']")()
Exports.MeshAssetParams = loadstring("return _G['MeshAssetParams']")()
Exports.MetaCell = loadstring("return _G['MetaCell']")()
Exports.MetaCellPresence = loadstring("return _G['MetaCellPresence']")()
Exports.MetaEntity = loadstring("return _G['MetaEntity']")()
Exports.MetaObject = loadstring("return _G['MetaObject']")()
Exports.MetaTagComponent = loadstring("return _G['MetaTagComponent']")()
Exports.Metabolics = loadstring("return _G['Metabolics']")()
Exports.MinMaxPosition = loadstring("return _G['MinMaxPosition']")()
Exports.MipMapLevel = loadstring("return _G['MipMapLevel']")()
Exports.Mod = loadstring("return _G['Mod']")()
Exports.ModAnimations = loadstring("return _G['ModAnimations']")()
Exports.ModData = loadstring("return _G['ModData']")()
Exports.ModalDialog = loadstring("return _G['ModalDialog']")()
Exports.Model = loadstring("return _G['Model']")()
Exports.Model = loadstring("return _G['Model']")()
Exports.ModelAssetParams = loadstring("return _G['ModelAssetParams']")()
Exports.ModelAttachment = loadstring("return _G['ModelAttachment']")()
Exports.ModelInfo = loadstring("return _G['ModelInfo']")()
Exports.ModelInstance = loadstring("return _G['ModelInstance']")()
Exports.ModelInstanceRenderData = loadstring("return _G['ModelInstanceRenderData']")()
Exports.ModelInstanceRenderDataList = loadstring("return _G['ModelInstanceRenderDataList']")()
Exports.ModelInstanceTextureCreator = loadstring("return _G['ModelInstanceTextureCreator']")()
Exports.ModelInstanceTextureInitializer = loadstring("return _G['ModelInstanceTextureInitializer']")()
Exports.ModelManager = loadstring("return _G['ModelManager']")()
Exports.ModelMesh = loadstring("return _G['ModelMesh']")()
Exports.ModelScript = loadstring("return _G['ModelScript']")()
Exports.ModelSlot = loadstring("return _G['ModelSlot']")()
Exports.ModelSlotRenderData = loadstring("return _G['ModelSlotRenderData']")()
Exports.ModelWeaponPart = loadstring("return _G['ModelWeaponPart']")()
Exports.Moodle = loadstring("return _G['Moodle']")()
Exports.MoodleType = loadstring("return _G['MoodleType']")()
Exports.Moodles = loadstring("return _G['Moodles']")()
Exports.MoodlesUI = loadstring("return _G['MoodlesUI']")()
Exports.MostTested = loadstring("return _G['MostTested']")()
Exports.Mouse = loadstring("return _G['Mouse']")()
Exports.MovableRecipe = loadstring("return _G['MovableRecipe']")()
Exports.MoveDeltaModifiers = loadstring("return _G['MoveDeltaModifiers']")()
Exports.Moveable = loadstring("return _G['Moveable']")()
Exports.MovementType = loadstring("return _G['MovementType']")()
Exports.Mover = loadstring("return _G['Mover']")()
Exports.MultiStageBuilding = loadstring("return _G['MultiStageBuilding']")()
Exports.Multiplayer = loadstring("return _G['Multiplayer']")()
Exports.MultiplierConfig = loadstring("return _G['MultiplierConfig']")()
Exports.MusicIntensityConfig = loadstring("return _G['MusicIntensityConfig']")()
Exports.MusicIntensityEvent = loadstring("return _G['MusicIntensityEvent']")()
Exports.MusicIntensityEvents = loadstring("return _G['MusicIntensityEvents']")()
Exports.MusicThreatConfig = loadstring("return _G['MusicThreatConfig']")()
Exports.MusicThreatStatus = loadstring("return _G['MusicThreatStatus']")()
Exports.MusicThreatStatuses = loadstring("return _G['MusicThreatStatuses']")()
Exports.NPCData = loadstring("return _G['NPCData']")()
Exports.NestBox = loadstring("return _G['NestBox']")()
Exports.NetTimedAction = loadstring("return _G['NetTimedAction']")()
Exports.NetTimedActionPacket = loadstring("return _G['NetTimedActionPacket']")()
Exports.NetworkAIParams = loadstring("return _G['NetworkAIParams']")()
Exports.NetworkCharacterAI = loadstring("return _G['NetworkCharacterAI']")()
Exports.NetworkTeleport = loadstring("return _G['NetworkTeleport']")()
Exports.NetworkTeleportDebug = loadstring("return _G['NetworkTeleportDebug']")()
Exports.NetworkUser = loadstring("return _G['NetworkUser']")()
Exports.NewHealthPanel = loadstring("return _G['NewHealthPanel']")()
Exports.NineGridTexture = loadstring("return _G['NineGridTexture']")()
Exports.NoCircleStencilShader = loadstring("return _G['NoCircleStencilShader']")()
Exports.NodeLayerPair = loadstring("return _G['NodeLayerPair']")()
Exports.NonBlockingHashMap = loadstring("return _G['NonBlockingHashMap']")()
Exports.NonPvpZone = loadstring("return _G['NonPvpZone']")()
Exports.Numeric = loadstring("return _G['Numeric']")()
Exports.Numeric = loadstring("return _G['Numeric']")()
Exports.Nutrition = loadstring("return _G['Nutrition']")()
Exports.OSValidator = loadstring("return _G['OSValidator']")()
Exports.ObjectAmbientEmitters = loadstring("return _G['ObjectAmbientEmitters']")()
Exports.ObjectDebuggerLua = loadstring("return _G['ObjectDebuggerLua']")()
Exports.ObjectID = loadstring("return _G['ObjectID']")()
Exports.ObjectInfo = loadstring("return _G['ObjectInfo']")()
Exports.ObjectPool = loadstring("return _G['ObjectPool']")()
Exports.ObjectRenderEffects = loadstring("return _G['ObjectRenderEffects']")()
Exports.ObjectRenderInfo = loadstring("return _G['ObjectRenderInfo']")()
Exports.ObjectTooltip = loadstring("return _G['ObjectTooltip']")()
Exports.Observation = loadstring("return _G['Observation']")()
Exports.ObservationFactory = loadstring("return _G['ObservationFactory']")()
Exports.ObserverCallback = loadstring("return _G['ObserverCallback']")()
Exports.OccluderType = loadstring("return _G['OccluderType']")()
Exports.OcclusionFilter = loadstring("return _G['OcclusionFilter']")()
Exports.OnceEvery = loadstring("return _G['OnceEvery']")()
Exports.OpenWindowState = loadstring("return _G['OpenWindowState']")()
Exports.OreLevel = loadstring("return _G['OreLevel']")()
Exports.OrphanStructures = loadstring("return _G['OrphanStructures']")()
Exports.Outfit = loadstring("return _G['Outfit']")()
Exports.OutlineShader = loadstring("return _G['OutlineShader']")()
Exports.OutputEntree = loadstring("return _G['OutputEntree']")()
Exports.OutputFlag = loadstring("return _G['OutputFlag']")()
Exports.OutputMapper = loadstring("return _G['OutputMapper']")()
Exports.OutputScript = loadstring("return _G['OutputScript']")()
Exports.OutputScriptData = loadstring("return _G['OutputScriptData']")()
Exports.Ownership = loadstring("return _G['Ownership']")()
Exports.PVPEvent = loadstring("return _G['PVPEvent']")()
Exports.PVPLogTool = loadstring("return _G['PVPLogTool']")()
Exports.PZArrayList = loadstring("return _G['PZArrayList']")()
Exports.PZCalendar = loadstring("return _G['PZCalendar']")()
Exports.PZFileformat = loadstring("return _G['PZFileformat']")()
Exports.PZMath = loadstring("return _G['PZMath']")()
Exports.PZUnmodifiableList = loadstring("return _G['PZUnmodifiableList']")()
Exports.PackFile = loadstring("return _G['PackFile']")()
Exports.PacketGroup = loadstring("return _G['PacketGroup']")()
Exports.PacketType = loadstring("return _G['PacketType']")()
Exports.ParameterCharacterMovementSpeed = loadstring("return _G['ParameterCharacterMovementSpeed']")()
Exports.ParameterTypes = loadstring("return _G['ParameterTypes']")()
Exports.Params0 = loadstring("return _G['Params0']")()
Exports.Params1 = loadstring("return _G['Params1']")()
Exports.Params2 = loadstring("return _G['Params2']")()
Exports.Params3 = loadstring("return _G['Params3']")()
Exports.Params4 = loadstring("return _G['Params4']")()
Exports.Params5 = loadstring("return _G['Params5']")()
Exports.Part = loadstring("return _G['Part']")()
Exports.Part = loadstring("return _G['Part']")()
Exports.Parts = loadstring("return _G['Parts']")()
Exports.PartsScript = loadstring("return _G['PartsScript']")()
Exports.Passenger = loadstring("return _G['Passenger']")()
Exports.Passenger = loadstring("return _G['Passenger']")()
Exports.Path = loadstring("return _G['Path']")()
Exports.Path = loadstring("return _G['Path']")()
Exports.PathFindBehavior2 = loadstring("return _G['PathFindBehavior2']")()
Exports.PathFindState = loadstring("return _G['PathFindState']")()
Exports.PathFindState2 = loadstring("return _G['PathFindState2']")()
Exports.PathNode = loadstring("return _G['PathNode']")()
Exports.PerObjectLogic = loadstring("return _G['PerObjectLogic']")()
Exports.PerPlayerRender = loadstring("return _G['PerPlayerRender']")()
Exports.PerformanceProfileProbe = loadstring("return _G['PerformanceProfileProbe']")()
Exports.PerformanceSettings = loadstring("return _G['PerformanceSettings']")()
Exports.Perk = loadstring("return _G['Perk']")()
Exports.PerkFactory = loadstring("return _G['PerkFactory']")()
Exports.PerkInfo = loadstring("return _G['PerkInfo']")()
Exports.Perks = loadstring("return _G['Perks']")()
Exports.PhysicsMesh = loadstring("return _G['PhysicsMesh']")()
Exports.PhysicsShape = loadstring("return _G['PhysicsShape']")()
Exports.PhysicsShapeScript = loadstring("return _G['PhysicsShapeScript']")()
Exports.Plane = loadstring("return _G['Plane']")()
Exports.Plane = loadstring("return _G['Plane']")()
Exports.PlaneObjectPool = loadstring("return _G['PlaneObjectPool']")()
Exports.Plant = loadstring("return _G['Plant']")()
Exports.PlayerActionsState = loadstring("return _G['PlayerActionsState']")()
Exports.PlayerAimState = loadstring("return _G['PlayerAimState']")()
Exports.PlayerCamera = loadstring("return _G['PlayerCamera']")()
Exports.PlayerData = loadstring("return _G['PlayerData']")()
Exports.PlayerEmoteState = loadstring("return _G['PlayerEmoteState']")()
Exports.PlayerExtState = loadstring("return _G['PlayerExtState']")()
Exports.PlayerFallDownState = loadstring("return _G['PlayerFallDownState']")()
Exports.PlayerFallingState = loadstring("return _G['PlayerFallingState']")()
Exports.PlayerGetUpState = loadstring("return _G['PlayerGetUpState']")()
Exports.PlayerHitReactionPVPState = loadstring("return _G['PlayerHitReactionPVPState']")()
Exports.PlayerHitReactionState = loadstring("return _G['PlayerHitReactionState']")()
Exports.PlayerHomingPoint = loadstring("return _G['PlayerHomingPoint']")()
Exports.PlayerKnockedDown = loadstring("return _G['PlayerKnockedDown']")()
Exports.PlayerOnGroundState = loadstring("return _G['PlayerOnGroundState']")()
Exports.PlayerPacket = loadstring("return _G['PlayerPacket']")()
Exports.PlayerRenderSettings = loadstring("return _G['PlayerRenderSettings']")()
Exports.PlayerSearchMode = loadstring("return _G['PlayerSearchMode']")()
Exports.PlayerSitOnFurnitureState = loadstring("return _G['PlayerSitOnFurnitureState']")()
Exports.PlayerSitOnGroundState = loadstring("return _G['PlayerSitOnGroundState']")()
Exports.PlayerStrafeState = loadstring("return _G['PlayerStrafeState']")()
Exports.Point = loadstring("return _G['Point']")()
Exports.PointOfInterest = loadstring("return _G['PointOfInterest']")()
Exports.PointOnPath = loadstring("return _G['PointOnPath']")()
Exports.PoisonEffect = loadstring("return _G['PoisonEffect']")()
Exports.PoisonInfo = loadstring("return _G['PoisonInfo']")()
Exports.Polygon = loadstring("return _G['Polygon']")()
Exports.PolygonEditor = loadstring("return _G['PolygonEditor']")()
Exports.Pool = loadstring("return _G['Pool']")()
Exports.PoolReference = loadstring("return _G['PoolReference']")()
Exports.PoolStacks = loadstring("return _G['PoolStacks']")()
Exports.Position = loadstring("return _G['Position']")()
Exports.Position3D = loadstring("return _G['Position3D']")()
Exports.Predicate = loadstring("return _G['Predicate']")()
Exports.PredicateIterable = loadstring("return _G['PredicateIterable']")()
Exports.PredicateIterator = loadstring("return _G['PredicateIterator']")()
Exports.PredictionTypes = loadstring("return _G['PredictionTypes']")()
Exports.PresetEntry = loadstring("return _G['PresetEntry']")()
Exports.ProceduralItem = loadstring("return _G['ProceduralItem']")()
Exports.Profession = loadstring("return _G['Profession']")()
Exports.ProfessionFactory = loadstring("return _G['ProfessionFactory']")()
Exports.PropertyContainer = loadstring("return _G['PropertyContainer']")()
Exports.PuddlesDirection = loadstring("return _G['PuddlesDirection']")()
Exports.PuddlesFloat = loadstring("return _G['PuddlesFloat']")()
Exports.PyramidTexture = loadstring("return _G['PyramidTexture']")()
Exports.QuadConsumer = loadstring("return _G['QuadConsumer']")()
Exports.QuaternionfObjectPool = loadstring("return _G['QuaternionfObjectPool']")()
Exports.QueuedEvent = loadstring("return _G['QueuedEvent']")()
Exports.RBBar = loadstring("return _G['RBBar']")()
Exports.RBBarn = loadstring("return _G['RBBarn']")()
Exports.RBBasic = loadstring("return _G['RBBasic']")()
Exports.RBBurnt = loadstring("return _G['RBBurnt']")()
Exports.RBBurntCorpse = loadstring("return _G['RBBurntCorpse']")()
Exports.RBBurntFireman = loadstring("return _G['RBBurntFireman']")()
Exports.RBCafe = loadstring("return _G['RBCafe']")()
Exports.RBClinic = loadstring("return _G['RBClinic']")()
Exports.RBDorm = loadstring("return _G['RBDorm']")()
Exports.RBGunstoreSiege = loadstring("return _G['RBGunstoreSiege']")()
Exports.RBHairSalon = loadstring("return _G['RBHairSalon']")()
Exports.RBHeatBreakAfternoon = loadstring("return _G['RBHeatBreakAfternoon']")()
Exports.RBJackieJaye = loadstring("return _G['RBJackieJaye']")()
Exports.RBJoanHartford = loadstring("return _G['RBJoanHartford']")()
Exports.RBJudge = loadstring("return _G['RBJudge']")()
Exports.RBKateAndBaldspot = loadstring("return _G['RBKateAndBaldspot']")()
Exports.RBLooted = loadstring("return _G['RBLooted']")()
Exports.RBMayorWestPoint = loadstring("return _G['RBMayorWestPoint']")()
Exports.RBNolans = loadstring("return _G['RBNolans']")()
Exports.RBOffice = loadstring("return _G['RBOffice']")()
Exports.RBOther = loadstring("return _G['RBOther']")()
Exports.RBPileOCrepe = loadstring("return _G['RBPileOCrepe']")()
Exports.RBPizzaWhirled = loadstring("return _G['RBPizzaWhirled']")()
Exports.RBPoliceSiege = loadstring("return _G['RBPoliceSiege']")()
Exports.RBReverend = loadstring("return _G['RBReverend']")()
Exports.RBSafehouse = loadstring("return _G['RBSafehouse']")()
Exports.RBSchool = loadstring("return _G['RBSchool']")()
Exports.RBShopLooted = loadstring("return _G['RBShopLooted']")()
Exports.RBSpiffo = loadstring("return _G['RBSpiffo']")()
Exports.RBStripclub = loadstring("return _G['RBStripclub']")()
Exports.RBTrashed = loadstring("return _G['RBTrashed']")()
Exports.RBTwiggy = loadstring("return _G['RBTwiggy']")()
Exports.RBWoodcraft = loadstring("return _G['RBWoodcraft']")()
Exports.RDSBandPractice = loadstring("return _G['RDSBandPractice']")()
Exports.RDSBanditRaid = loadstring("return _G['RDSBanditRaid']")()
Exports.RDSBathroomZed = loadstring("return _G['RDSBathroomZed']")()
Exports.RDSBedroomZed = loadstring("return _G['RDSBedroomZed']")()
Exports.RDSBleach = loadstring("return _G['RDSBleach']")()
Exports.RDSCorpsePsycho = loadstring("return _G['RDSCorpsePsycho']")()
Exports.RDSDeadDrunk = loadstring("return _G['RDSDeadDrunk']")()
Exports.RDSDevouredByRats = loadstring("return _G['RDSDevouredByRats']")()
Exports.RDSFootballNight = loadstring("return _G['RDSFootballNight']")()
Exports.RDSGrouchos = loadstring("return _G['RDSGrouchos']")()
Exports.RDSGunmanInBathroom = loadstring("return _G['RDSGunmanInBathroom']")()
Exports.RDSGunslinger = loadstring("return _G['RDSGunslinger']")()
Exports.RDSHenDo = loadstring("return _G['RDSHenDo']")()
Exports.RDSHockeyPsycho = loadstring("return _G['RDSHockeyPsycho']")()
Exports.RDSHouseParty = loadstring("return _G['RDSHouseParty']")()
Exports.RDSPokerNight = loadstring("return _G['RDSPokerNight']")()
Exports.RDSPoliceAtHouse = loadstring("return _G['RDSPoliceAtHouse']")()
Exports.RDSPrisonEscape = loadstring("return _G['RDSPrisonEscape']")()
Exports.RDSPrisonEscapeWithPolice = loadstring("return _G['RDSPrisonEscapeWithPolice']")()
Exports.RDSRPGNight = loadstring("return _G['RDSRPGNight']")()
Exports.RDSRatInfested = loadstring("return _G['RDSRatInfested']")()
Exports.RDSRatKing = loadstring("return _G['RDSRatKing']")()
Exports.RDSRatWar = loadstring("return _G['RDSRatWar']")()
Exports.RDSResourceGarage = loadstring("return _G['RDSResourceGarage']")()
Exports.RDSSkeletonPsycho = loadstring("return _G['RDSSkeletonPsycho']")()
Exports.RDSSpecificProfession = loadstring("return _G['RDSSpecificProfession']")()
Exports.RDSStagDo = loadstring("return _G['RDSStagDo']")()
Exports.RDSStudentNight = loadstring("return _G['RDSStudentNight']")()
Exports.RDSSuicidePact = loadstring("return _G['RDSSuicidePact']")()
Exports.RDSTinFoilHat = loadstring("return _G['RDSTinFoilHat']")()
Exports.RDSZombieLockedBathroom = loadstring("return _G['RDSZombieLockedBathroom']")()
Exports.RDSZombiesEating = loadstring("return _G['RDSZombiesEating']")()
Exports.RGBAf = loadstring("return _G['RGBAf']")()
Exports.RVSAmbulanceCrash = loadstring("return _G['RVSAmbulanceCrash']")()
Exports.RVSAnimalOnRoad = loadstring("return _G['RVSAnimalOnRoad']")()
Exports.RVSAnimalTrailerOnRoad = loadstring("return _G['RVSAnimalTrailerOnRoad']")()
Exports.RVSBanditRoad = loadstring("return _G['RVSBanditRoad']")()
Exports.RVSBurntCar = loadstring("return _G['RVSBurntCar']")()
Exports.RVSCarCrash = loadstring("return _G['RVSCarCrash']")()
Exports.RVSCarCrashCorpse = loadstring("return _G['RVSCarCrashCorpse']")()
Exports.RVSCarCrashDeer = loadstring("return _G['RVSCarCrashDeer']")()
Exports.RVSChangingTire = loadstring("return _G['RVSChangingTire']")()
Exports.RVSConstructionSite = loadstring("return _G['RVSConstructionSite']")()
Exports.RVSCrashHorde = loadstring("return _G['RVSCrashHorde']")()
Exports.RVSDeadEnd = loadstring("return _G['RVSDeadEnd']")()
Exports.RVSFlippedCrash = loadstring("return _G['RVSFlippedCrash']")()
Exports.RVSHerdOnRoad = loadstring("return _G['RVSHerdOnRoad']")()
Exports.RVSPlonkies = loadstring("return _G['RVSPlonkies']")()
Exports.RVSPoliceBlockade = loadstring("return _G['RVSPoliceBlockade']")()
Exports.RVSPoliceBlockadeShooting = loadstring("return _G['RVSPoliceBlockadeShooting']")()
Exports.RVSRegionalProfessionVehicle = loadstring("return _G['RVSRegionalProfessionVehicle']")()
Exports.RVSRichJerk = loadstring("return _G['RVSRichJerk']")()
Exports.RVSRoadKill = loadstring("return _G['RVSRoadKill']")()
Exports.RVSRoadKillSmall = loadstring("return _G['RVSRoadKillSmall']")()
Exports.RVSTrailerCrash = loadstring("return _G['RVSTrailerCrash']")()
Exports.RVSUtilityVehicle = loadstring("return _G['RVSUtilityVehicle']")()
Exports.RZJackieJaye = loadstring("return _G['RZJackieJaye']")()
Exports.RZSAttachedAnimal = loadstring("return _G['RZSAttachedAnimal']")()
Exports.RZSBBQParty = loadstring("return _G['RZSBBQParty']")()
Exports.RZSBaseball = loadstring("return _G['RZSBaseball']")()
Exports.RZSBeachParty = loadstring("return _G['RZSBeachParty']")()
Exports.RZSBurntWreck = loadstring("return _G['RZSBurntWreck']")()
Exports.RZSBuryingCamp = loadstring("return _G['RZSBuryingCamp']")()
Exports.RZSCampsite = loadstring("return _G['RZSCampsite']")()
Exports.RZSCharcoalBurner = loadstring("return _G['RZSCharcoalBurner']")()
Exports.RZSDean = loadstring("return _G['RZSDean']")()
Exports.RZSDuke = loadstring("return _G['RZSDuke']")()
Exports.RZSEscapedAnimal = loadstring("return _G['RZSEscapedAnimal']")()
Exports.RZSEscapedHerd = loadstring("return _G['RZSEscapedHerd']")()
Exports.RZSFishingTrip = loadstring("return _G['RZSFishingTrip']")()
Exports.RZSForestCamp = loadstring("return _G['RZSForestCamp']")()
Exports.RZSForestCampEaten = loadstring("return _G['RZSForestCampEaten']")()
Exports.RZSFrankHemingway = loadstring("return _G['RZSFrankHemingway']")()
Exports.RZSHermitCamp = loadstring("return _G['RZSHermitCamp']")()
Exports.RZSHillbillyHoedown = loadstring("return _G['RZSHillbillyHoedown']")()
Exports.RZSHogWild = loadstring("return _G['RZSHogWild']")()
Exports.RZSHunterCamp = loadstring("return _G['RZSHunterCamp']")()
Exports.RZSKirstyKormick = loadstring("return _G['RZSKirstyKormick']")()
Exports.RZSMurderScene = loadstring("return _G['RZSMurderScene']")()
Exports.RZSMusicFest = loadstring("return _G['RZSMusicFest']")()
Exports.RZSMusicFestStage = loadstring("return _G['RZSMusicFestStage']")()
Exports.RZSNastyMattress = loadstring("return _G['RZSNastyMattress']")()
Exports.RZSOccultActivity = loadstring("return _G['RZSOccultActivity']")()
Exports.RZSOldFirepit = loadstring("return _G['RZSOldFirepit']")()
Exports.RZSOldShelter = loadstring("return _G['RZSOldShelter']")()
Exports.RZSOrphanedFawn = loadstring("return _G['RZSOrphanedFawn']")()
Exports.RZSRangerSmith = loadstring("return _G['RZSRangerSmith']")()
Exports.RZSRockerParty = loadstring("return _G['RZSRockerParty']")()
Exports.RZSSadCamp = loadstring("return _G['RZSSadCamp']")()
Exports.RZSSexyTime = loadstring("return _G['RZSSexyTime']")()
Exports.RZSSirTwiggy = loadstring("return _G['RZSSirTwiggy']")()
Exports.RZSSurvivalistCamp = loadstring("return _G['RZSSurvivalistCamp']")()
Exports.RZSTragicPicnic = loadstring("return _G['RZSTragicPicnic']")()
Exports.RZSTrapperCamp = loadstring("return _G['RZSTrapperCamp']")()
Exports.RZSVanCamp = loadstring("return _G['RZSVanCamp']")()
Exports.RZSWasteDump = loadstring("return _G['RZSWasteDump']")()
Exports.RZSWaterPump = loadstring("return _G['RZSWaterPump']")()
Exports.RadarPanel = loadstring("return _G['RadarPanel']")()
Exports.RadialMenu = loadstring("return _G['RadialMenu']")()
Exports.RadialProgressBar = loadstring("return _G['RadialProgressBar']")()
Exports.Radio = loadstring("return _G['Radio']")()
Exports.RadioAPI = loadstring("return _G['RadioAPI']")()
Exports.RadioBroadCast = loadstring("return _G['RadioBroadCast']")()
Exports.RadioChannel = loadstring("return _G['RadioChannel']")()
Exports.RadioData = loadstring("return _G['RadioData']")()
Exports.RadioLine = loadstring("return _G['RadioLine']")()
Exports.RadioScript = loadstring("return _G['RadioScript']")()
Exports.RadioScriptManager = loadstring("return _G['RadioScriptManager']")()
Exports.RagdollAnchor = loadstring("return _G['RagdollAnchor']")()
Exports.RagdollBodyPart = loadstring("return _G['RagdollBodyPart']")()
Exports.RagdollConstraint = loadstring("return _G['RagdollConstraint']")()
Exports.RagdollController = loadstring("return _G['RagdollController']")()
Exports.RagdollControllerDebugRenderer = loadstring("return _G['RagdollControllerDebugRenderer']")()
Exports.RagdollScript = loadstring("return _G['RagdollScript']")()
Exports.RagdollSetting = loadstring("return _G['RagdollSetting']")()
Exports.RagdollSettingsManager = loadstring("return _G['RagdollSettingsManager']")()
Exports.RagdollStateData = loadstring("return _G['RagdollStateData']")()
Exports.RainManager = loadstring("return _G['RainManager']")()
Exports.RakNetPeerInterface = loadstring("return _G['RakNetPeerInterface']")()
Exports.RandomData = loadstring("return _G['RandomData']")()
Exports.RandomData = loadstring("return _G['RandomData']")()
Exports.RandomGenerator = loadstring("return _G['RandomGenerator']")()
Exports.RandomizedBuildingBase = loadstring("return _G['RandomizedBuildingBase']")()
Exports.RandomizedDeadSurvivorBase = loadstring("return _G['RandomizedDeadSurvivorBase']")()
Exports.RandomizedVehicleStoryBase = loadstring("return _G['RandomizedVehicleStoryBase']")()
Exports.RandomizedWorldBase = loadstring("return _G['RandomizedWorldBase']")()
Exports.RandomizedZoneStoryBase = loadstring("return _G['RandomizedZoneStoryBase']")()
Exports.Randomizer = loadstring("return _G['Randomizer']")()
Exports.Ray = loadstring("return _G['Ray']")()
Exports.RayObjectPool = loadstring("return _G['RayObjectPool']")()
Exports.Recipe = loadstring("return _G['Recipe']")()
Exports.RecipeManager = loadstring("return _G['RecipeManager']")()
Exports.RecipeMonitor = loadstring("return _G['RecipeMonitor']")()
Exports.RecordedMedia = loadstring("return _G['RecordedMedia']")()
Exports.Remove = loadstring("return _G['Remove']")()
Exports.RenderArgs = loadstring("return _G['RenderArgs']")()
Exports.RenderData = loadstring("return _G['RenderData']")()
Exports.RenderEffectType = loadstring("return _G['RenderEffectType']")()
Exports.RenderSettings = loadstring("return _G['RenderSettings']")()
Exports.RenderTarget = loadstring("return _G['RenderTarget']")()
Exports.RenderTexture = loadstring("return _G['RenderTexture']")()
Exports.ReplaceProviderCharacter = loadstring("return _G['ReplaceProviderCharacter']")()
Exports.RequestState = loadstring("return _G['RequestState']")()
Exports.RequiredSkill = loadstring("return _G['RequiredSkill']")()
Exports.RequiredSkill = loadstring("return _G['RequiredSkill']")()
Exports.Resource = loadstring("return _G['Resource']")()
Exports.ResourceBlueprint = loadstring("return _G['ResourceBlueprint']")()
Exports.ResourceChannel = loadstring("return _G['ResourceChannel']")()
Exports.ResourceEnergy = loadstring("return _G['ResourceEnergy']")()
Exports.ResourceFlag = loadstring("return _G['ResourceFlag']")()
Exports.ResourceFluid = loadstring("return _G['ResourceFluid']")()
Exports.ResourceGroup = loadstring("return _G['ResourceGroup']")()
Exports.ResourceIO = loadstring("return _G['ResourceIO']")()
Exports.ResourceItem = loadstring("return _G['ResourceItem']")()
Exports.ResourceType = loadstring("return _G['ResourceType']")()
Exports.Resources = loadstring("return _G['Resources']")()
Exports.Result = loadstring("return _G['Result']")()
Exports.ResultBiggestSound = loadstring("return _G['ResultBiggestSound']")()
Exports.ResultLight = loadstring("return _G['ResultLight']")()
Exports.RingBuffer = loadstring("return _G['RingBuffer']")()
Exports.Road = loadstring("return _G['Road']")()
Exports.RoadConfig = loadstring("return _G['RoadConfig']")()
Exports.RoadDirection = loadstring("return _G['RoadDirection']")()
Exports.RoadEdge = loadstring("return _G['RoadEdge']")()
Exports.RoadGenerator = loadstring("return _G['RoadGenerator']")()
Exports.RoadNexus = loadstring("return _G['RoadNexus']")()
Exports.Role = loadstring("return _G['Role']")()
Exports.RoofProperties = loadstring("return _G['RoofProperties']")()
Exports.RoomDef = loadstring("return _G['RoomDef']")()
Exports.RoomRect = loadstring("return _G['RoomRect']")()
Exports.Rule = loadstring("return _G['Rule']")()
Exports.Rules = loadstring("return _G['Rules']")()
Exports.RuntimeAnimationScript = loadstring("return _G['RuntimeAnimationScript']")()
Exports.SCButton = loadstring("return _G['SCButton']")()
Exports.SDFShader = loadstring("return _G['SDFShader']")()
Exports.SGlobalObject = loadstring("return _G['SGlobalObject']")()
Exports.SGlobalObjectSystem = loadstring("return _G['SGlobalObjectSystem']")()
Exports.SGlobalObjects = loadstring("return _G['SGlobalObjects']")()
Exports.SLSoundManager = loadstring("return _G['SLSoundManager']")()
Exports.SafeHouse = loadstring("return _G['SafeHouse']")()
Exports.Safety = loadstring("return _G['Safety']")()
Exports.SandboxOption = loadstring("return _G['SandboxOption']")()
Exports.SandboxOptions = loadstring("return _G['SandboxOptions']")()
Exports.ScreenElement = loadstring("return _G['ScreenElement']")()
Exports.ScriptLoadMode = loadstring("return _G['ScriptLoadMode']")()
Exports.ScriptManager = loadstring("return _G['ScriptManager']")()
Exports.ScriptModule = loadstring("return _G['ScriptModule']")()
Exports.ScriptParser = loadstring("return _G['ScriptParser']")()
Exports.ScriptType = loadstring("return _G['ScriptType']")()
Exports.SealedFluidProperties = loadstring("return _G['SealedFluidProperties']")()
Exports.SeamEditorState = loadstring("return _G['SeamEditorState']")()
Exports.SeamFile = loadstring("return _G['SeamFile']")()
Exports.SeamManager = loadstring("return _G['SeamManager']")()
Exports.SearchMode = loadstring("return _G['SearchMode']")()
Exports.SearchModeFloat = loadstring("return _G['SearchModeFloat']")()
Exports.Season = loadstring("return _G['Season']")()
Exports.SeatingFile = loadstring("return _G['SeatingFile']")()
Exports.SeatingManager = loadstring("return _G['SeatingManager']")()
Exports.Seeds = loadstring("return _G['Seeds']")()
Exports.SelectorBucket = loadstring("return _G['SelectorBucket']")()
Exports.SelectorBucketScript = loadstring("return _G['SelectorBucketScript']")()
Exports.SelectorType = loadstring("return _G['SelectorType']")()
Exports.Server = loadstring("return _G['Server']")()
Exports.ServerChatMessage = loadstring("return _G['ServerChatMessage']")()
Exports.ServerOption = loadstring("return _G['ServerOption']")()
Exports.ServerOptions = loadstring("return _G['ServerOptions']")()
Exports.ServerSettings = loadstring("return _G['ServerSettings']")()
Exports.ServerSettingsManager = loadstring("return _G['ServerSettingsManager']")()
Exports.ServerVehicleState = loadstring("return _G['ServerVehicleState']")()
Exports.Shader = loadstring("return _G['Shader']")()
Exports.Shader = loadstring("return _G['Shader']")()
Exports.ShaderBufferData = loadstring("return _G['ShaderBufferData']")()
Exports.ShaderParameter = loadstring("return _G['ShaderParameter']")()
Exports.ShaderProgram = loadstring("return _G['ShaderProgram']")()
Exports.ShaderPropertyBlock = loadstring("return _G['ShaderPropertyBlock']")()
Exports.ShaderUnit = loadstring("return _G['ShaderUnit']")()
Exports.ShadowParams = loadstring("return _G['ShadowParams']")()
Exports.SharedDescriptors = loadstring("return _G['SharedDescriptors']")()
Exports.SharedSkeleAnimationRepository = loadstring("return _G['SharedSkeleAnimationRepository']")()
Exports.SharedSkeleAnimationTrack = loadstring("return _G['SharedSkeleAnimationTrack']")()
Exports.SharedStrings = loadstring("return _G['SharedStrings']")()
Exports.SharedVertexBufferObjects = loadstring("return _G['SharedVertexBufferObjects']")()
Exports.Short = loadstring("return _G['Short']")()
Exports.Short = loadstring("return _G['Short']")()
Exports.ShortList = loadstring("return _G['ShortList']")()
Exports.SideOfLine = loadstring("return _G['SideOfLine']")()
Exports.Signals = loadstring("return _G['Signals']")()
Exports.SignalsScript = loadstring("return _G['SignalsScript']")()
Exports.SimpleDateFormat = loadstring("return _G['SimpleDateFormat']")()
Exports.SimulationState = loadstring("return _G['SimulationState']")()
Exports.SituatedType = loadstring("return _G['SituatedType']")()
Exports.SkeletonBone = loadstring("return _G['SkeletonBone']")()
Exports.Skin = loadstring("return _G['Skin']")()
Exports.Skinning = loadstring("return _G['Skinning']")()
Exports.SkinningBone = loadstring("return _G['SkinningBone']")()
Exports.SkinningBoneHierarchy = loadstring("return _G['SkinningBoneHierarchy']")()
Exports.SkinningData = loadstring("return _G['SkinningData']")()
Exports.SleepingEvent = loadstring("return _G['SleepingEvent']")()
Exports.SleepingEventData = loadstring("return _G['SleepingEventData']")()
Exports.SliceY = loadstring("return _G['SliceY']")()
Exports.SlopedSurface = loadstring("return _G['SlopedSurface']")()
Exports.SmashWindowState = loadstring("return _G['SmashWindowState']")()
Exports.Sound = loadstring("return _G['Sound']")()
Exports.Sound = loadstring("return _G['Sound']")()
Exports.SoundManager = loadstring("return _G['SoundManager']")()
Exports.SoundTimelineScript = loadstring("return _G['SoundTimelineScript']")()
Exports.Sounds = loadstring("return _G['Sounds']")()
Exports.Source = loadstring("return _G['Source']")()
Exports.SpawnOrigin = loadstring("return _G['SpawnOrigin']")()
Exports.SpeedChecker = loadstring("return _G['SpeedChecker']")()
Exports.SpeedControls = loadstring("return _G['SpeedControls']")()
Exports.SpriteConfig = loadstring("return _G['SpriteConfig']")()
Exports.SpriteConfigManager = loadstring("return _G['SpriteConfigManager']")()
Exports.SpriteConfigScript = loadstring("return _G['SpriteConfigScript']")()
Exports.SpriteModel = loadstring("return _G['SpriteModel']")()
Exports.SpriteModelEditorState = loadstring("return _G['SpriteModelEditorState']")()
Exports.SpriteModelManager = loadstring("return _G['SpriteModelManager']")()
Exports.SpriteModelsFile = loadstring("return _G['SpriteModelsFile']")()
Exports.SpriteRenderState = loadstring("return _G['SpriteRenderState']")()
Exports.SpriteRenderer = loadstring("return _G['SpriteRenderer']")()
Exports.Square = loadstring("return _G['Square']")()
Exports.SquareCoord = loadstring("return _G['SquareCoord']")()
Exports.Stack = loadstring("return _G['Stack']")()
Exports.StackTraceContainer = loadstring("return _G['StackTraceContainer']")()
Exports.Stage = loadstring("return _G['Stage']")()
Exports.StaggerBackState = loadstring("return _G['StaggerBackState']")()
Exports.StartAnimTrackParameters = loadstring("return _G['StartAnimTrackParameters']")()
Exports.StartMode = loadstring("return _G['StartMode']")()
Exports.Stash = loadstring("return _G['Stash']")()
Exports.StashBuilding = loadstring("return _G['StashBuilding']")()
Exports.StashSystem = loadstring("return _G['StashSystem']")()
Exports.State = loadstring("return _G['State']")()
Exports.State = loadstring("return _G['State']")()
Exports.State = loadstring("return _G['State']")()
Exports.StateAction = loadstring("return _G['StateAction']")()
Exports.StateEat = loadstring("return _G['StateEat']")()
Exports.StateFollow = loadstring("return _G['StateFollow']")()
Exports.StateInfo = loadstring("return _G['StateInfo']")()
Exports.StateMachine = loadstring("return _G['StateMachine']")()
Exports.StateMoveFromEat = loadstring("return _G['StateMoveFromEat']")()
Exports.StateMoveFromSleep = loadstring("return _G['StateMoveFromSleep']")()
Exports.StateMoveToEat = loadstring("return _G['StateMoveToEat']")()
Exports.StateMoveToSleep = loadstring("return _G['StateMoveToSleep']")()
Exports.StateSleep = loadstring("return _G['StateSleep']")()
Exports.Stats = loadstring("return _G['Stats']")()
Exports.SteamFriend = loadstring("return _G['SteamFriend']")()
Exports.SteamUGCDetails = loadstring("return _G['SteamUGCDetails']")()
Exports.SteamWorkshopItem = loadstring("return _G['SteamWorkshopItem']")()
Exports.Step = loadstring("return _G['Step']")()
Exports.Stop = loadstring("return _G['Stop']")()
Exports.StoryEmitter = loadstring("return _G['StoryEmitter']")()
Exports.StorySound = loadstring("return _G['StorySound']")()
Exports.StorySoundEvent = loadstring("return _G['StorySoundEvent']")()
Exports.StrLerpVal = loadstring("return _G['StrLerpVal']")()
Exports.String = loadstring("return _G['String']")()
Exports.String = loadstring("return _G['String']")()
Exports.StringConfigOption = loadstring("return _G['StringConfigOption']")()
Exports.StringDebugOption = loadstring("return _G['StringDebugOption']")()
Exports.StringDrawer = loadstring("return _G['StringDrawer']")()
Exports.StringListScript = loadstring("return _G['StringListScript']")()
Exports.StringSandboxOption = loadstring("return _G['StringSandboxOption']")()
Exports.StringServerOption = loadstring("return _G['StringServerOption']")()
Exports.StyleInfoScript = loadstring("return _G['StyleInfoScript']")()
Exports.SubLayerSlot = loadstring("return _G['SubLayerSlot']")()
Exports.SubTexture = loadstring("return _G['SubTexture']")()
Exports.SubTextureInfo = loadstring("return _G['SubTextureInfo']")()
Exports.SubstateSlot = loadstring("return _G['SubstateSlot']")()
Exports.SurroundVehicle = loadstring("return _G['SurroundVehicle']")()
Exports.SurvivorDesc = loadstring("return _G['SurvivorDesc']")()
Exports.SurvivorFactory = loadstring("return _G['SurvivorFactory']")()
Exports.SurvivorGroup = loadstring("return _G['SurvivorGroup']")()
Exports.SurvivorType = loadstring("return _G['SurvivorType']")()
Exports.SwipeStatePlayer = loadstring("return _G['SwipeStatePlayer']")()
Exports.SwitchSeat = loadstring("return _G['SwitchSeat']")()
Exports.SyncPlayerStatsPacket = loadstring("return _G['SyncPlayerStatsPacket']")()
Exports.SystemDisabler = loadstring("return _G['SystemDisabler']")()
Exports.Temperature = loadstring("return _G['Temperature']")()
Exports.Temperature = loadstring("return _G['Temperature']")()
Exports.TemplateText = loadstring("return _G['TemplateText']")()
Exports.TentAmbianceLogic = loadstring("return _G['TentAmbianceLogic']")()
Exports.TermsOfServiceState = loadstring("return _G['TermsOfServiceState']")()
Exports.TestComponent = loadstring("return _G['TestComponent']")()
Exports.TestComponentScript = loadstring("return _G['TestComponentScript']")()
Exports.TestEnum = loadstring("return _G['TestEnum']")()
Exports.TestResults = loadstring("return _G['TestResults']")()
Exports.TextAlign = loadstring("return _G['TextAlign']")()
Exports.TextDrawHorizontal = loadstring("return _G['TextDrawHorizontal']")()
Exports.TextDrawObject = loadstring("return _G['TextDrawObject']")()
Exports.TextManager = loadstring("return _G['TextManager']")()
Exports.TextServerOption = loadstring("return _G['TextServerOption']")()
Exports.Texture = loadstring("return _G['Texture']")()
Exports.TextureAssetParams = loadstring("return _G['TextureAssetParams']")()
Exports.TextureDraw = loadstring("return _G['TextureDraw']")()
Exports.TextureFBO = loadstring("return _G['TextureFBO']")()
Exports.TextureID = loadstring("return _G['TextureID']")()
Exports.TextureIDAssetParams = loadstring("return _G['TextureIDAssetParams']")()
Exports.TexturePack = loadstring("return _G['TexturePack']")()
Exports.TexturePackPage = loadstring("return _G['TexturePackPage']")()
Exports.TexturePackTextures = loadstring("return _G['TexturePackTextures']")()
Exports.TextureScaling = loadstring("return _G['TextureScaling']")()
Exports.TextureStop = loadstring("return _G['TextureStop']")()
Exports.ThermalNode = loadstring("return _G['ThermalNode']")()
Exports.Thermoregulator = loadstring("return _G['Thermoregulator']")()
Exports.ThumpState = loadstring("return _G['ThumpState']")()
Exports.Thumpable = loadstring("return _G['Thumpable']")()
Exports.ThunderCloud = loadstring("return _G['ThunderCloud']")()
Exports.ThunderStorm = loadstring("return _G['ThunderStorm']")()
Exports.Tile = loadstring("return _G['Tile']")()
Exports.Tile = loadstring("return _G['Tile']")()
Exports.Tile = loadstring("return _G['Tile']")()
Exports.Tile = loadstring("return _G['Tile']")()
Exports.TileDef = loadstring("return _G['TileDef']")()
Exports.TileDepthTexture = loadstring("return _G['TileDepthTexture']")()
Exports.TileDepthTextureAssignmentManager = loadstring("return _G['TileDepthTextureAssignmentManager']")()
Exports.TileDepthTextureManager = loadstring("return _G['TileDepthTextureManager']")()
Exports.TileDepthTextures = loadstring("return _G['TileDepthTextures']")()
Exports.TileGeometryFile = loadstring("return _G['TileGeometryFile']")()
Exports.TileGeometryManager = loadstring("return _G['TileGeometryManager']")()
Exports.TileGeometryState = loadstring("return _G['TileGeometryState']")()
Exports.TileGroup = loadstring("return _G['TileGroup']")()
Exports.TileInfo = loadstring("return _G['TileInfo']")()
Exports.TileOverlays = loadstring("return _G['TileOverlays']")()
Exports.TileScript = loadstring("return _G['TileScript']")()
Exports.Tiles = loadstring("return _G['Tiles']")()
Exports.Tileset = loadstring("return _G['Tileset']")()
Exports.Tileset = loadstring("return _G['Tileset']")()
Exports.TilesetDepthTexture = loadstring("return _G['TilesetDepthTexture']")()
Exports.Time = loadstring("return _G['Time']")()
Exports.TimeMode = loadstring("return _G['TimeMode']")()
Exports.TimedActionScript = loadstring("return _G['TimedActionScript']")()
Exports.TorchInfo = loadstring("return _G['TorchInfo']")()
Exports.Trait = loadstring("return _G['Trait']")()
Exports.TraitCollection = loadstring("return _G['TraitCollection']")()
Exports.TraitFactory = loadstring("return _G['TraitFactory']")()
Exports.TraitSlot = loadstring("return _G['TraitSlot']")()
Exports.TransactionState = loadstring("return _G['TransactionState']")()
Exports.Transform = loadstring("return _G['Transform']")()
Exports.TransformPool = loadstring("return _G['TransformPool']")()
Exports.TransitionNodeProxy = loadstring("return _G['TransitionNodeProxy']")()
Exports.TransitionNodeProxyData = loadstring("return _G['TransitionNodeProxyData']")()
Exports.Translator = loadstring("return _G['Translator']")()
Exports.TransmissionNumber = loadstring("return _G['TransmissionNumber']")()
Exports.TreeAmbianceLogic = loadstring("return _G['TreeAmbianceLogic']")()
Exports.TreeShader = loadstring("return _G['TreeShader']")()
Exports.TreeSoundManager = loadstring("return _G['TreeSoundManager']")()
Exports.Trigger = loadstring("return _G['Trigger']")()
Exports.TwistableBoneTransform = loadstring("return _G['TwistableBoneTransform']")()
Exports.Type = loadstring("return _G['Type']")()
Exports.Type = loadstring("return _G['Type']")()
Exports.Type = loadstring("return _G['Type']")()
Exports.Type = loadstring("return _G['Type']")()
Exports.UI = loadstring("return _G['UI']")()
Exports.UI3DModel = loadstring("return _G['UI3DModel']")()
Exports.UI3DScene = loadstring("return _G['UI3DScene']")()
Exports.UIDebugConsole = loadstring("return _G['UIDebugConsole']")()
Exports.UIElement = loadstring("return _G['UIElement']")()
Exports.UIElementInterface = loadstring("return _G['UIElementInterface']")()
Exports.UIFont = loadstring("return _G['UIFont']")()
Exports.UIManager = loadstring("return _G['UIManager']")()
Exports.UINineGrid = loadstring("return _G['UINineGrid']")()
Exports.UITextBox2 = loadstring("return _G['UITextBox2']")()
Exports.UITextEntryInterface = loadstring("return _G['UITextEntryInterface']")()
Exports.UITransition = loadstring("return _G['UITransition']")()
Exports.UIWorldMap = loadstring("return _G['UIWorldMap']")()
Exports.UIWorldMapV1 = loadstring("return _G['UIWorldMapV1']")()
Exports.UIWorldMapV2 = loadstring("return _G['UIWorldMapV2']")()
Exports.UInt4 = loadstring("return _G['UInt4']")()
Exports.UdpConnection = loadstring("return _G['UdpConnection']")()
Exports.UdpConnection = loadstring("return _G['UdpConnection']")()
Exports.UdpEngine = loadstring("return _G['UdpEngine']")()
Exports.UdpEngine = loadstring("return _G['UdpEngine']")()
Exports.UiConfig = loadstring("return _G['UiConfig']")()
Exports.UiConfigScript = loadstring("return _G['UiConfigScript']")()
Exports.Uniform = loadstring("return _G['Uniform']")()
Exports.UniqueRecipe = loadstring("return _G['UniqueRecipe']")()
Exports.Updater = loadstring("return _G['Updater']")()
Exports.Userlog = loadstring("return _G['Userlog']")()
Exports.UserlogType = loadstring("return _G['UserlogType']")()
Exports.ValidCanPerformRecipeComparator = loadstring("return _G['ValidCanPerformRecipeComparator']")()
Exports.ValidRecipeComparator = loadstring("return _G['ValidRecipeComparator']")()
Exports.Value = loadstring("return _G['Value']")()
Exports.Vbo = loadstring("return _G['Vbo']")()
Exports.Vector = loadstring("return _G['Vector']")()
Exports.Vector2 = loadstring("return _G['Vector2']")()
Exports.Vector2ObjectPool = loadstring("return _G['Vector2ObjectPool']")()
Exports.Vector2f = loadstring("return _G['Vector2f']")()
Exports.Vector2fObjectPool = loadstring("return _G['Vector2fObjectPool']")()
Exports.Vector3 = loadstring("return _G['Vector3']")()
Exports.Vector3 = loadstring("return _G['Vector3']")()
Exports.Vector3 = loadstring("return _G['Vector3']")()
Exports.Vector3f = loadstring("return _G['Vector3f']")()
Exports.Vector3fObjectPool = loadstring("return _G['Vector3fObjectPool']")()
Exports.Vector4 = loadstring("return _G['Vector4']")()
Exports.Vector4fObjectPool = loadstring("return _G['Vector4fObjectPool']")()
Exports.VectorPosAlign = loadstring("return _G['VectorPosAlign']")()
Exports.VehicleDistribution = loadstring("return _G['VehicleDistribution']")()
Exports.VehicleDoor = loadstring("return _G['VehicleDoor']")()
Exports.VehicleEngineRPM = loadstring("return _G['VehicleEngineRPM']")()
Exports.VehicleGauge = loadstring("return _G['VehicleGauge']")()
Exports.VehicleHit = loadstring("return _G['VehicleHit']")()
Exports.VehicleLight = loadstring("return _G['VehicleLight']")()
Exports.VehiclePart = loadstring("return _G['VehiclePart']")()
Exports.VehiclePartModel = loadstring("return _G['VehiclePartModel']")()
Exports.VehiclePoly = loadstring("return _G['VehiclePoly']")()
Exports.VehicleScript = loadstring("return _G['VehicleScript']")()
Exports.VehicleStorySpawnData = loadstring("return _G['VehicleStorySpawnData']")()
Exports.VehicleStorySpawner = loadstring("return _G['VehicleStorySpawner']")()
Exports.VehicleTemplate = loadstring("return _G['VehicleTemplate']")()
Exports.VehicleType = loadstring("return _G['VehicleType']")()
Exports.VehicleTypeDefinition = loadstring("return _G['VehicleTypeDefinition']")()
Exports.VehicleWindow = loadstring("return _G['VehicleWindow']")()
Exports.VehicleZone = loadstring("return _G['VehicleZone']")()
Exports.VertexArray = loadstring("return _G['VertexArray']")()
Exports.VertexBufferObject = loadstring("return _G['VertexBufferObject']")()
Exports.VertexElement = loadstring("return _G['VertexElement']")()
Exports.VertexFormat = loadstring("return _G['VertexFormat']")()
Exports.VertexPositionNormalTangentTexture = loadstring("return _G['VertexPositionNormalTangentTexture']")()
Exports.VertexPositionNormalTangentTextureSkin = loadstring("return _G['VertexPositionNormalTangentTextureSkin']")()
Exports.VertexType = loadstring("return _G['VertexType']")()
Exports.VideoTexture = loadstring("return _G['VideoTexture']")()
Exports.VirtualAnimal = loadstring("return _G['VirtualAnimal']")()
Exports.VirtualAnimalState = loadstring("return _G['VirtualAnimalState']")()
Exports.VirtualZombieManager = loadstring("return _G['VirtualZombieManager']")()
Exports.VisibilityPolygon2 = loadstring("return _G['VisibilityPolygon2']")()
Exports.VisibilityWall = loadstring("return _G['VisibilityWall']")()
Exports.VisionResult = loadstring("return _G['VisionResult']")()
Exports.VoiceStyle = loadstring("return _G['VoiceStyle']")()
Exports.VoiceStyles = loadstring("return _G['VoiceStyles']")()
Exports.WGChunk = loadstring("return _G['WGChunk']")()
Exports.WGParams = loadstring("return _G['WGParams']")()
Exports.WGUtils = loadstring("return _G['WGUtils']")()
Exports.WalkTowardState = loadstring("return _G['WalkTowardState']")()
Exports.WallShaderTexRender = loadstring("return _G['WallShaderTexRender']")()
Exports.WallShaper = loadstring("return _G['WallShaper']")()
Exports.War = loadstring("return _G['War']")()
Exports.WarManager = loadstring("return _G['WarManager']")()
Exports.WaterDripLogic = loadstring("return _G['WaterDripLogic']")()
Exports.WaveSignalDevice = loadstring("return _G['WaveSignalDevice']")()
Exports.WeaponPart = loadstring("return _G['WeaponPart']")()
Exports.WeaponType = loadstring("return _G['WeaponType']")()
Exports.WeatherParticleDrawer = loadstring("return _G['WeatherParticleDrawer']")()
Exports.WeatherPeriod = loadstring("return _G['WeatherPeriod']")()
Exports.WeatherStage = loadstring("return _G['WeatherStage']")()
Exports.Wheel = loadstring("return _G['Wheel']")()
Exports.WheelInfo = loadstring("return _G['WheelInfo']")()
Exports.Window = loadstring("return _G['Window']")()
Exports.WindowLogic = loadstring("return _G['WindowLogic']")()
Exports.WindowType = loadstring("return _G['WindowType']")()
Exports.WorldFlares = loadstring("return _G['WorldFlares']")()
Exports.WorldMap = loadstring("return _G['WorldMap']")()
Exports.WorldMapBaseSymbol = loadstring("return _G['WorldMapBaseSymbol']")()
Exports.WorldMapBaseSymbolV1 = loadstring("return _G['WorldMapBaseSymbolV1']")()
Exports.WorldMapBaseSymbolV2 = loadstring("return _G['WorldMapBaseSymbolV2']")()
Exports.WorldMapBooleanOption = loadstring("return _G['WorldMapBooleanOption']")()
Exports.WorldMapCell = loadstring("return _G['WorldMapCell']")()
Exports.WorldMapData = loadstring("return _G['WorldMapData']")()
Exports.WorldMapDoubleOption = loadstring("return _G['WorldMapDoubleOption']")()
Exports.WorldMapFeature = loadstring("return _G['WorldMapFeature']")()
Exports.WorldMapGridSquareMarker = loadstring("return _G['WorldMapGridSquareMarker']")()
Exports.WorldMapGridSquareMarkerV1 = loadstring("return _G['WorldMapGridSquareMarkerV1']")()
Exports.WorldMapImages = loadstring("return _G['WorldMapImages']")()
Exports.WorldMapLineStyleLayerV1 = loadstring("return _G['WorldMapLineStyleLayerV1']")()
Exports.WorldMapMarker = loadstring("return _G['WorldMapMarker']")()
Exports.WorldMapMarkerV1 = loadstring("return _G['WorldMapMarkerV1']")()
Exports.WorldMapMarkers = loadstring("return _G['WorldMapMarkers']")()
Exports.WorldMapMarkersV1 = loadstring("return _G['WorldMapMarkersV1']")()
Exports.WorldMapPolygonStyleLayerV1 = loadstring("return _G['WorldMapPolygonStyleLayerV1']")()
Exports.WorldMapRenderer = loadstring("return _G['WorldMapRenderer']")()
Exports.WorldMapStyle = loadstring("return _G['WorldMapStyle']")()
Exports.WorldMapStyleLayer = loadstring("return _G['WorldMapStyleLayer']")()
Exports.WorldMapStyleLayerV1 = loadstring("return _G['WorldMapStyleLayerV1']")()
Exports.WorldMapStyleV1 = loadstring("return _G['WorldMapStyleV1']")()
Exports.WorldMapSymbolCollisions = loadstring("return _G['WorldMapSymbolCollisions']")()
Exports.WorldMapSymbolNetworkInfo = loadstring("return _G['WorldMapSymbolNetworkInfo']")()
Exports.WorldMapSymbolType = loadstring("return _G['WorldMapSymbolType']")()
Exports.WorldMapSymbols = loadstring("return _G['WorldMapSymbols']")()
Exports.WorldMapSymbolsV1 = loadstring("return _G['WorldMapSymbolsV1']")()
Exports.WorldMapSymbolsV2 = loadstring("return _G['WorldMapSymbolsV2']")()
Exports.WorldMapTextSymbol = loadstring("return _G['WorldMapTextSymbol']")()
Exports.WorldMapTextSymbolV1 = loadstring("return _G['WorldMapTextSymbolV1']")()
Exports.WorldMapTextSymbolV2 = loadstring("return _G['WorldMapTextSymbolV2']")()
Exports.WorldMapTextureStyleLayerV1 = loadstring("return _G['WorldMapTextureStyleLayerV1']")()
Exports.WorldMapTextureSymbol = loadstring("return _G['WorldMapTextureSymbol']")()
Exports.WorldMapTextureSymbolV1 = loadstring("return _G['WorldMapTextureSymbolV1']")()
Exports.WorldMapTextureSymbolV2 = loadstring("return _G['WorldMapTextureSymbolV2']")()
Exports.WorldMapVisited = loadstring("return _G['WorldMapVisited']")()
Exports.WorldMarkers = loadstring("return _G['WorldMarkers']")()
Exports.WorldSound = loadstring("return _G['WorldSound']")()
Exports.WorldSoundEmitter = loadstring("return _G['WorldSoundEmitter']")()
Exports.WorldSoundManager = loadstring("return _G['WorldSoundManager']")()
Exports.WornItem = loadstring("return _G['WornItem']")()
Exports.WornItems = loadstring("return _G['WornItems']")()
Exports.WrappedBuffer = loadstring("return _G['WrappedBuffer']")()
Exports.XP = loadstring("return _G['XP']")()
Exports.XPMultiplier = loadstring("return _G['XPMultiplier']")()
Exports.XRow = loadstring("return _G['XRow']")()
Exports.XuiAutoApply = loadstring("return _G['XuiAutoApply']")()
Exports.XuiBoolean = loadstring("return _G['XuiBoolean']")()
Exports.XuiBoolean = loadstring("return _G['XuiBoolean']")()
Exports.XuiColor = loadstring("return _G['XuiColor']")()
Exports.XuiColor = loadstring("return _G['XuiColor']")()
Exports.XuiColorsScript = loadstring("return _G['XuiColorsScript']")()
Exports.XuiConfigScript = loadstring("return _G['XuiConfigScript']")()
Exports.XuiDouble = loadstring("return _G['XuiDouble']")()
Exports.XuiDouble = loadstring("return _G['XuiDouble']")()
Exports.XuiFloat = loadstring("return _G['XuiFloat']")()
Exports.XuiFontType = loadstring("return _G['XuiFontType']")()
Exports.XuiFontType = loadstring("return _G['XuiFontType']")()
Exports.XuiFunction = loadstring("return _G['XuiFunction']")()
Exports.XuiInteger = loadstring("return _G['XuiInteger']")()
Exports.XuiLayoutScript = loadstring("return _G['XuiLayoutScript']")()
Exports.XuiLuaStyle = loadstring("return _G['XuiLuaStyle']")()
Exports.XuiManager = loadstring("return _G['XuiManager']")()
Exports.XuiReference = loadstring("return _G['XuiReference']")()
Exports.XuiScript = loadstring("return _G['XuiScript']")()
Exports.XuiScriptType = loadstring("return _G['XuiScriptType']")()
Exports.XuiSkin = loadstring("return _G['XuiSkin']")()
Exports.XuiSkinScript = loadstring("return _G['XuiSkinScript']")()
Exports.XuiSpacing = loadstring("return _G['XuiSpacing']")()
Exports.XuiString = loadstring("return _G['XuiString']")()
Exports.XuiString = loadstring("return _G['XuiString']")()
Exports.XuiStringList = loadstring("return _G['XuiStringList']")()
Exports.XuiStringList = loadstring("return _G['XuiStringList']")()
Exports.XuiTableCellScript = loadstring("return _G['XuiTableCellScript']")()
Exports.XuiTableColumnScript = loadstring("return _G['XuiTableColumnScript']")()
Exports.XuiTableRowScript = loadstring("return _G['XuiTableRowScript']")()
Exports.XuiTableScript = loadstring("return _G['XuiTableScript']")()
Exports.XuiTextAlign = loadstring("return _G['XuiTextAlign']")()
Exports.XuiTexture = loadstring("return _G['XuiTexture']")()
Exports.XuiTexture = loadstring("return _G['XuiTexture']")()
Exports.XuiTranslateString = loadstring("return _G['XuiTranslateString']")()
Exports.XuiTranslateString = loadstring("return _G['XuiTranslateString']")()
Exports.XuiUnit = loadstring("return _G['XuiUnit']")()
Exports.XuiVar = loadstring("return _G['XuiVar']")()
Exports.XuiVar = loadstring("return _G['XuiVar']")()
Exports.XuiVarType = loadstring("return _G['XuiVarType']")()
Exports.XuiVector = loadstring("return _G['XuiVector']")()
Exports.XuiVectorPosAlign = loadstring("return _G['XuiVectorPosAlign']")()
Exports.ZLayer = loadstring("return _G['ZLayer']")()
Exports.ZLogger = loadstring("return _G['ZLogger']")()
Exports.ZNetStatistics = loadstring("return _G['ZNetStatistics']")()
Exports.ZombieConfig = loadstring("return _G['ZombieConfig']")()
Exports.ZombieFallDownState = loadstring("return _G['ZombieFallDownState']")()
Exports.ZombieGetDownState = loadstring("return _G['ZombieGetDownState']")()
Exports.ZombieGetUpState = loadstring("return _G['ZombieGetUpState']")()
Exports.ZombieIdleState = loadstring("return _G['ZombieIdleState']")()
Exports.ZombieLore = loadstring("return _G['ZombieLore']")()
Exports.ZombieOnGroundState = loadstring("return _G['ZombieOnGroundState']")()
Exports.ZombiePopulationRenderer = loadstring("return _G['ZombiePopulationRenderer']")()
Exports.ZombieReanimateState = loadstring("return _G['ZombieReanimateState']")()
Exports.ZombieSittingState = loadstring("return _G['ZombieSittingState']")()
Exports.ZombieSound = loadstring("return _G['ZombieSound']")()
Exports.ZomboidBitFlag = loadstring("return _G['ZomboidBitFlag']")()
Exports.ZomboidRadio = loadstring("return _G['ZomboidRadio']")()
Exports.Zone = loadstring("return _G['Zone']")()
Exports.ZoneData = loadstring("return _G['ZoneData']")()
Exports.ZoneGenerator = loadstring("return _G['ZoneGenerator']")()
Exports.ZoneGeometryType = loadstring("return _G['ZoneGeometryType']")()
Exports.ZoneType = loadstring("return _G['ZoneType']")()
Exports.engineStateTypes = loadstring("return _G['engineStateTypes']")()
Exports.renderTiles = loadstring("return _G['renderTiles']")()
Exports.s_performance = loadstring("return _G['s_performance']")()
Exports.vector2 = loadstring("return _G['vector2']")()
Exports.xp_Award = loadstring("return _G['xp_Award']")()

--------------------------------------------------
-- [PARTIAL] : lua.client.interface.partial.lua --
--------------------------------------------------

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
Exports.undefined = loadstring("require('lua/client/Fishing/TensionUI');return _G['undefined']")()

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
Exports.undefined = loadstring("require('lua/client/OptionScreens/ModSelector/MapOrderListBox');return _G['undefined']")()

--[lua/client/OptionScreens/ModSelector/MapOrderUI.d.ts]
Exports.undefined = loadstring("require('lua/client/OptionScreens/ModSelector/MapOrderUI');return _G['undefined']")()

--[lua/client/OptionScreens/ModSelector/MissedModsPanel.d.ts]
Exports.undefined = loadstring("require('lua/client/OptionScreens/ModSelector/MissedModsPanel');return _G['undefined']")()

--[lua/client/OptionScreens/ModSelector/ModInfoPanel.d.ts]
Exports.ModInfoPanel = loadstring("require('lua/client/OptionScreens/ModSelector/ModInfoPanel');return _G['ModInfoPanel']")()

--[lua/client/OptionScreens/ModSelector/ModInfoPanelDesc.d.ts]
Exports.undefined = loadstring("require('lua/client/OptionScreens/ModSelector/ModInfoPanelDesc');return _G['undefined']")()

--[lua/client/OptionScreens/ModSelector/ModInfoPanelInteractionParam.d.ts]
Exports.undefined = loadstring("require('lua/client/OptionScreens/ModSelector/ModInfoPanelInteractionParam');return _G['undefined']")()

--[lua/client/OptionScreens/ModSelector/ModInfoPanelParam.d.ts]
Exports.undefined = loadstring("require('lua/client/OptionScreens/ModSelector/ModInfoPanelParam');return _G['undefined']")()

--[lua/client/OptionScreens/ModSelector/ModInfoPanelThumbnail.d.ts]
Exports.undefined = loadstring("require('lua/client/OptionScreens/ModSelector/ModInfoPanelThumbnail');return _G['undefined']")()

--[lua/client/OptionScreens/ModSelector/ModInfoPanelTitle.d.ts]
Exports.undefined = loadstring("require('lua/client/OptionScreens/ModSelector/ModInfoPanelTitle');return _G['undefined']")()

--[lua/client/OptionScreens/ModSelector/ModListBox.d.ts]
Exports.undefined = loadstring("require('lua/client/OptionScreens/ModSelector/ModListBox');return _G['undefined']")()

--[lua/client/OptionScreens/ModSelector/ModListPanel.d.ts]
Exports.undefined = loadstring("require('lua/client/OptionScreens/ModSelector/ModListPanel');return _G['undefined']")()

--[lua/client/OptionScreens/ModSelector/ModListPresets.d.ts]
Exports.ModListPresets = loadstring("require('lua/client/OptionScreens/ModSelector/ModListPresets');return _G['ModListPresets']")()

--[lua/client/OptionScreens/ModSelector/ModLoadOrderPanel.d.ts]
Exports.undefined = loadstring("require('lua/client/OptionScreens/ModSelector/ModLoadOrderPanel');return _G['undefined']")()

--[lua/client/OptionScreens/ModSelector/ModOrderListBox.d.ts]
Exports.undefined = loadstring("require('lua/client/OptionScreens/ModSelector/ModOrderListBox');return _G['undefined']")()

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
Exports.undefined = loadstring("require('lua/client/OptionScreens/ServerSettingsScreen');return _G['undefined']")()
Exports.DefaultServerSettings = loadstring("require('lua/client/OptionScreens/ServerSettingsScreen');return _G['DefaultServerSettings']")()

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


--------------------------------------------------
-- [PARTIAL] : lua.server.interface.partial.lua --
--------------------------------------------------

--[lua/server/Animal/ISPickDungCursor.d.ts]
Exports.ISPickDungCursor = loadstring("require('lua/server/Animal/ISPickDungCursor');return _G['ISPickDungCursor']")()

--[lua/server/Animal/ISScytheGrassCursor.d.ts]
Exports.ISScytheGrassCursor = loadstring("require('lua/server/Animal/ISScytheGrassCursor');return _G['ISScytheGrassCursor']")()

--[lua/server/BuildingObjects/ISAnimalPickMateCursor.d.ts]
Exports.ISAnimalPickMateCursor = loadstring("require('lua/server/BuildingObjects/ISAnimalPickMateCursor');return _G['ISAnimalPickMateCursor']")()

--[lua/server/BuildingObjects/ISBarbedWire.d.ts]
Exports.ISBarbedWire = loadstring("require('lua/server/BuildingObjects/ISBarbedWire');return _G['ISBarbedWire']")()

--[lua/server/BuildingObjects/ISBrushToolTileCursor.d.ts]
Exports.ISBrushToolTileCursor = loadstring("require('lua/server/BuildingObjects/ISBrushToolTileCursor');return _G['ISBrushToolTileCursor']")()

--[lua/server/BuildingObjects/ISBuildCursorMouse.d.ts]
Exports.ISBuildCursorMouse = loadstring("require('lua/server/BuildingObjects/ISBuildCursorMouse');return _G['ISBuildCursorMouse']")()

--[lua/server/BuildingObjects/ISBuildingObject.d.ts]
Exports.ISBuildingObject = loadstring("require('lua/server/BuildingObjects/ISBuildingObject');return _G['ISBuildingObject']")()

--[lua/server/BuildingObjects/ISBuildIsoEntity.d.ts]
Exports.ISBuildIsoEntity = loadstring("require('lua/server/BuildingObjects/ISBuildIsoEntity');return _G['ISBuildIsoEntity']")()

--[lua/server/BuildingObjects/ISBuildRampCursor.d.ts]
Exports.ISBuildRampCursor = loadstring("require('lua/server/BuildingObjects/ISBuildRampCursor');return _G['ISBuildRampCursor']")()

--[lua/server/BuildingObjects/ISBuildUtil.d.ts]
Exports.buildUtil = loadstring("require('lua/server/BuildingObjects/ISBuildUtil');return _G['buildUtil']")()

--[lua/server/BuildingObjects/ISButcheringHook.d.ts]
Exports.ISButcheringHook = loadstring("require('lua/server/BuildingObjects/ISButcheringHook');return _G['ISButcheringHook']")()

--[lua/server/BuildingObjects/ISChopTreeCursor.d.ts]
Exports.ISChopTreeCursor = loadstring("require('lua/server/BuildingObjects/ISChopTreeCursor');return _G['ISChopTreeCursor']")()

--[lua/server/BuildingObjects/ISCleanBloodCursor.d.ts]
Exports.ISCleanBloodCursor = loadstring("require('lua/server/BuildingObjects/ISCleanBloodCursor');return _G['ISCleanBloodCursor']")()

--[lua/server/BuildingObjects/ISCleanGraffitiCursor.d.ts]
Exports.ISCleanGraffitiCursor = loadstring("require('lua/server/BuildingObjects/ISCleanGraffitiCursor');return _G['ISCleanGraffitiCursor']")()

--[lua/server/BuildingObjects/ISCompost.d.ts]
Exports.ISCompost = loadstring("require('lua/server/BuildingObjects/ISCompost');return _G['ISCompost']")()

--[lua/server/BuildingObjects/ISDestroyCursor.d.ts]
Exports.ISDestroyCursor = loadstring("require('lua/server/BuildingObjects/ISDestroyCursor');return _G['ISDestroyCursor']")()

--[lua/server/BuildingObjects/ISDoubleDoor.d.ts]
Exports.ISDoubleDoor = loadstring("require('lua/server/BuildingObjects/ISDoubleDoor');return _G['ISDoubleDoor']")()

--[lua/server/BuildingObjects/ISDoubleTileFurniture.d.ts]
Exports.ISDoubleTileFurniture = loadstring("require('lua/server/BuildingObjects/ISDoubleTileFurniture');return _G['ISDoubleTileFurniture']")()

--[lua/server/BuildingObjects/ISEmptyGraves.d.ts]
Exports.ISEmptyGraves = loadstring("require('lua/server/BuildingObjects/ISEmptyGraves');return _G['ISEmptyGraves']")()

--[lua/server/BuildingObjects/ISHutch.d.ts]
Exports.ISHutch = loadstring("require('lua/server/BuildingObjects/ISHutch');return _G['ISHutch']")()

--[lua/server/BuildingObjects/ISLightSource.d.ts]
Exports.ISLightSource = loadstring("require('lua/server/BuildingObjects/ISLightSource');return _G['ISLightSource']")()

--[lua/server/BuildingObjects/ISMoveableCursor.d.ts]
Exports.ISMoveableCursor = loadstring("require('lua/server/BuildingObjects/ISMoveableCursor');return _G['ISMoveableCursor']")()

--[lua/server/BuildingObjects/ISNaturalFloor.d.ts]
Exports.ISNaturalFloor = loadstring("require('lua/server/BuildingObjects/ISNaturalFloor');return _G['ISNaturalFloor']")()

--[lua/server/BuildingObjects/ISPaintCursor.d.ts]
Exports.ISPaintCursor = loadstring("require('lua/server/BuildingObjects/ISPaintCursor');return _G['ISPaintCursor']")()

--[lua/server/BuildingObjects/ISPaperCursor.d.ts]
Exports.ISPaperCursor = loadstring("require('lua/server/BuildingObjects/ISPaperCursor');return _G['ISPaperCursor']")()

--[lua/server/BuildingObjects/ISPickCharacterCursor.d.ts]
Exports.ISPickCharacterCursor = loadstring("require('lua/server/BuildingObjects/ISPickCharacterCursor');return _G['ISPickCharacterCursor']")()

--[lua/server/BuildingObjects/ISPlace3DItemCursor.d.ts]
Exports.ISPlace3DItemCursor = loadstring("require('lua/server/BuildingObjects/ISPlace3DItemCursor');return _G['ISPlace3DItemCursor']")()

--[lua/server/BuildingObjects/ISRemovePlantCursor.d.ts]
Exports.ISRemovePlantCursor = loadstring("require('lua/server/BuildingObjects/ISRemovePlantCursor');return _G['ISRemovePlantCursor']")()

--[lua/server/BuildingObjects/ISSelectCursor.d.ts]
Exports.ISSelectCursor = loadstring("require('lua/server/BuildingObjects/ISSelectCursor');return _G['ISSelectCursor']")()

--[lua/server/BuildingObjects/ISShovelGroundCursor.d.ts]
Exports.ISShovelGroundCursor = loadstring("require('lua/server/BuildingObjects/ISShovelGroundCursor');return _G['ISShovelGroundCursor']")()

--[lua/server/BuildingObjects/ISSimpleFurniture.d.ts]
Exports.ISSimpleFurniture = loadstring("require('lua/server/BuildingObjects/ISSimpleFurniture');return _G['ISSimpleFurniture']")()

--[lua/server/BuildingObjects/ISWalkToCursor.d.ts]
Exports.ISWalkToCursor = loadstring("require('lua/server/BuildingObjects/ISWalkToCursor');return _G['ISWalkToCursor']")()

--[lua/server/BuildingObjects/ISWoodenContainer.d.ts]
Exports.ISWoodenContainer = loadstring("require('lua/server/BuildingObjects/ISWoodenContainer');return _G['ISWoodenContainer']")()

--[lua/server/BuildingObjects/ISWoodenDoor.d.ts]
Exports.ISWoodenDoor = loadstring("require('lua/server/BuildingObjects/ISWoodenDoor');return _G['ISWoodenDoor']")()

--[lua/server/BuildingObjects/ISWoodenDoorFrame.d.ts]
Exports.ISWoodenDoorFrame = loadstring("require('lua/server/BuildingObjects/ISWoodenDoorFrame');return _G['ISWoodenDoorFrame']")()

--[lua/server/BuildingObjects/ISWoodenFloor.d.ts]
Exports.ISWoodenFloor = loadstring("require('lua/server/BuildingObjects/ISWoodenFloor');return _G['ISWoodenFloor']")()

--[lua/server/BuildingObjects/ISWoodenStairs.d.ts]
Exports.ISWoodenStairs = loadstring("require('lua/server/BuildingObjects/ISWoodenStairs');return _G['ISWoodenStairs']")()

--[lua/server/BuildingObjects/ISWoodenWall.d.ts]
Exports.ISWoodenWall = loadstring("require('lua/server/BuildingObjects/ISWoodenWall');return _G['ISWoodenWall']")()

--[lua/server/BuildingObjects/PaintingReference.d.ts]
Exports.OtherPainting = loadstring("require('lua/server/BuildingObjects/PaintingReference');return _G['OtherPainting']")()
Exports.Painting = loadstring("require('lua/server/BuildingObjects/PaintingReference');return _G['Painting']")()
Exports.WallPaper = loadstring("require('lua/server/BuildingObjects/PaintingReference');return _G['WallPaper']")()

--[lua/server/Camping/BuildingObjects/campingCampfire.d.ts]
Exports.campingCampfire = loadstring("require('lua/server/Camping/BuildingObjects/campingCampfire');return _G['campingCampfire']")()

--[lua/server/Camping/camping_fuel.d.ts]
Exports.campingFuelCategory = loadstring("require('lua/server/Camping/camping_fuel');return _G['campingFuelCategory']")()
Exports.campingFuelType = loadstring("require('lua/server/Camping/camping_fuel');return _G['campingFuelType']")()
Exports.campingLightFireCategory = loadstring("require('lua/server/Camping/camping_fuel');return _G['campingLightFireCategory']")()
Exports.campingLightFireType = loadstring("require('lua/server/Camping/camping_fuel');return _G['campingLightFireType']")()

--[lua/server/Camping/camping_tent.d.ts]
Exports.camping = loadstring("require('lua/server/Camping/camping_tent');return _G['camping']")()

--[lua/server/Camping/camping_text.d.ts]
Exports.campingText = loadstring("require('lua/server/Camping/camping_text');return _G['campingText']")()

--[lua/server/Camping/SCampfireGlobalObject.d.ts]
Exports.SCampfireGlobalObject = loadstring("require('lua/server/Camping/SCampfireGlobalObject');return _G['SCampfireGlobalObject']")()

--[lua/server/Camping/SCampfireSystem.d.ts]
Exports.SCampfireSystem = loadstring("require('lua/server/Camping/SCampfireSystem');return _G['SCampfireSystem']")()

--[lua/server/Climate/ClimateMain.d.ts]
Exports.ClimateMain = loadstring("require('lua/server/Climate/ClimateMain');return _G['ClimateMain']")()

--[lua/server/Farming/BuildingObjects/farmingPlot.d.ts]
Exports.farmingPlot = loadstring("require('lua/server/Farming/BuildingObjects/farmingPlot');return _G['farmingPlot']")()

--[lua/server/Farming/BuildingObjects/ISFarmingCursor.d.ts]
Exports.ISFarmingCursor = loadstring("require('lua/server/Farming/BuildingObjects/ISFarmingCursor');return _G['ISFarmingCursor']")()

--[lua/server/Farming/BuildingObjects/ISFarmingCursorMouse.d.ts]
Exports.ISFarmingCursorMouse = loadstring("require('lua/server/Farming/BuildingObjects/ISFarmingCursorMouse');return _G['ISFarmingCursorMouse']")()

--[lua/server/Farming/farming_vegetableconf.d.ts]
Exports.farming_vegetableconf = loadstring("require('lua/server/Farming/farming_vegetableconf');return _G['farming_vegetableconf']")()

--[lua/server/Farming/ScavengeDefinition.d.ts]
Exports.scavenges = loadstring("require('lua/server/Farming/ScavengeDefinition');return _G['scavenges']")()

--[lua/server/Farming/SFarmingSystem.d.ts]
Exports.SFarmingSystem = loadstring("require('lua/server/Farming/SFarmingSystem');return _G['SFarmingSystem']")()

--[lua/server/Farming/SPlantGlobalObject.d.ts]
Exports.SPlantGlobalObject = loadstring("require('lua/server/Farming/SPlantGlobalObject');return _G['SPlantGlobalObject']")()

--[lua/server/FeedingTrough/BuildingObjects/ISFeedingTrough.d.ts]
Exports.ISFeedingTrough = loadstring("require('lua/server/FeedingTrough/BuildingObjects/ISFeedingTrough');return _G['ISFeedingTrough']")()

--[lua/server/FeedingTrough/SFeedingTroughGlobalObject.d.ts]
Exports.SFeedingTroughGlobalObject = loadstring("require('lua/server/FeedingTrough/SFeedingTroughGlobalObject');return _G['SFeedingTroughGlobalObject']")()

--[lua/server/FeedingTrough/SFeedingTroughSystem.d.ts]
Exports.SFeedingTroughSystem = loadstring("require('lua/server/FeedingTrough/SFeedingTroughSystem');return _G['SFeedingTroughSystem']")()

--[lua/server/FireFighting/FireFighting.d.ts]
Exports.FireFighting = loadstring("require('lua/server/FireFighting/FireFighting');return _G['FireFighting']")()

--[lua/server/FireFighting/ISExtinguishCursor.d.ts]
Exports.ISExtinguishCursor = loadstring("require('lua/server/FireFighting/ISExtinguishCursor');return _G['ISExtinguishCursor']")()

--[lua/server/Fishing/BuildingObjects/FishingNet.d.ts]
Exports.fishingNet = loadstring("require('lua/server/Fishing/BuildingObjects/FishingNet');return _G['fishingNet']")()

--[lua/server/Foraging/forageServer.d.ts]
Exports.forageServer = loadstring("require('lua/server/Foraging/forageServer');return _G['forageServer']")()

--[lua/server/HealthSystem/HealthUpdate.d.ts]
Exports.healthUpdate = loadstring("require('lua/server/HealthSystem/HealthUpdate');return _G['healthUpdate']")()

--[lua/server/ISBuildingBlueprintManager.d.ts]
Exports.ISBuildingBlueprintManager = loadstring("require('lua/server/ISBuildingBlueprintManager');return _G['ISBuildingBlueprintManager']")()

--[lua/server/ISCoordConversion.d.ts]
Exports.ISCoordConversion = loadstring("require('lua/server/ISCoordConversion');return _G['ISCoordConversion']")()

--[lua/server/ISObjectClickHandler.d.ts]
Exports.ISObjectClickHandler = loadstring("require('lua/server/ISObjectClickHandler');return _G['ISObjectClickHandler']")()

--[lua/server/Items/AcceptItemFunction.d.ts]
Exports.AcceptItemFunction = loadstring("require('lua/server/Items/AcceptItemFunction');return _G['AcceptItemFunction']")()

--[lua/server/Items/BrokenFences.d.ts]
Exports.debris = loadstring("require('lua/server/Items/BrokenFences');return _G['debris']")()

--[lua/server/Items/ItemBindingHandler.d.ts]
Exports.ItemBindingHandler = loadstring("require('lua/server/Items/ItemBindingHandler');return _G['ItemBindingHandler']")()

--[lua/server/Items/ProceduralDistributions.d.ts]
Exports.ProceduralDistributions = loadstring("require('lua/server/Items/ProceduralDistributions');return _G['ProceduralDistributions']")()

--[lua/server/Items/ScriptItemInterface.d.ts]
Exports.ScriptItemInterface = loadstring("require('lua/server/Items/ScriptItemInterface');return _G['ScriptItemInterface']")()

--[lua/server/Items/SuburbsDistributions.d.ts]
Exports.NoContainerFillRooms = loadstring("require('lua/server/Items/SuburbsDistributions');return _G['NoContainerFillRooms']")()
Exports.WeaponUpgrades = loadstring("require('lua/server/Items/SuburbsDistributions');return _G['WeaponUpgrades']")()

--[lua/server/Map/MapObjects/MOFarming.d.ts]

--[lua/server/Map/MapObjects/MOFeedingTrough.d.ts]
Exports.MOFeedingTrough = loadstring("require('lua/server/Map/MapObjects/MOFeedingTrough');return _G['MOFeedingTrough']")()

--[lua/server/Map/MapObjects/MOHutch.d.ts]
Exports.MOHutch = loadstring("require('lua/server/Map/MapObjects/MOHutch');return _G['MOHutch']")()

--[lua/server/Map/MetaEnum.d.ts]
Exports.MetaObjectEnum = loadstring("require('lua/server/Map/MetaEnum');return _G['MetaObjectEnum']")()

--[lua/server/Map/SGlobalObject.d.ts]
Exports.SGlobalObject = loadstring("require('lua/server/Map/SGlobalObject');return _G['SGlobalObject']")()

--[lua/server/Map/SGlobalObjectSystem.d.ts]
Exports.SGlobalObjectSystem = loadstring("require('lua/server/Map/SGlobalObjectSystem');return _G['SGlobalObjectSystem']")()

--[lua/server/metazones/AnimalsPathConfig.d.ts]
Exports.animals_path_config = loadstring("require('lua/server/metazones/AnimalsPathConfig');return _G['animals_path_config']")()

--[lua/server/metazones/BiomeMapConfig.d.ts]
Exports.biome_map_config = loadstring("require('lua/server/metazones/BiomeMapConfig');return _G['biome_map_config']")()

--[lua/server/metazones/metazoneHandler.d.ts]

--[lua/server/Movers/ISBaseMover.d.ts]
Exports.ISBaseMover = loadstring("require('lua/server/Movers/ISBaseMover');return _G['ISBaseMover']")()

--[lua/server/Movers/MoverStateMachine.d.ts]
Exports.ISMoverStateMachine = loadstring("require('lua/server/Movers/MoverStateMachine');return _G['ISMoverStateMachine']")()

--[lua/server/Movers/MoverStates/ISBaseState.d.ts]
Exports.ISBaseState = loadstring("require('lua/server/Movers/MoverStates/ISBaseState');return _G['ISBaseState']")()

--[lua/server/Movers/MoverStates/MoveToState.d.ts]
Exports.MoveToState = loadstring("require('lua/server/Movers/MoverStates/MoveToState');return _G['MoveToState']")()

--[lua/server/Movers/Rabbit.d.ts]
Exports.Rabbit = loadstring("require('lua/server/Movers/Rabbit');return _G['Rabbit']")()

--[lua/server/NewSelectionSystem/GridSquareSelector.d.ts]
Exports.GridSquareSelector = loadstring("require('lua/server/NewSelectionSystem/GridSquareSelector');return _G['GridSquareSelector']")()

--[lua/server/NPCs/SadisticAIDirector/SadisticMusicDirector.d.ts]
Exports.SadisticMusicDirector = loadstring("require('lua/server/NPCs/SadisticAIDirector/SadisticMusicDirector');return _G['SadisticMusicDirector']")()

--[lua/server/Professions/Professions.d.ts]
Exports.Professions = loadstring("require('lua/server/Professions/Professions');return _G['Professions']")()

--[lua/server/radio/ISDynamicRadio.d.ts]
Exports.DynamicRadio = loadstring("require('lua/server/radio/ISDynamicRadio');return _G['DynamicRadio']")()

--[lua/server/radio/ISWeatherChannel.d.ts]
Exports.WeatherChannel = loadstring("require('lua/server/radio/ISWeatherChannel');return _G['WeatherChannel']")()

--[lua/server/RainBarrel/BuildingObjects/RainCollectorBarrel.d.ts]
Exports.RainCollectorBarrel = loadstring("require('lua/server/RainBarrel/BuildingObjects/RainCollectorBarrel');return _G['RainCollectorBarrel']")()

--[lua/server/RainBarrel/SRainBarrelGlobalObject.d.ts]
Exports.SRainBarrelGlobalObject = loadstring("require('lua/server/RainBarrel/SRainBarrelGlobalObject');return _G['SRainBarrelGlobalObject']")()

--[lua/server/RainBarrel/SRainBarrelSystem.d.ts]
Exports.SRainBarrelSystem = loadstring("require('lua/server/RainBarrel/SRainBarrelSystem');return _G['SRainBarrelSystem']")()

--[lua/server/RandomizedWorldContent/StoryClutter/StoryClutter_Definitions.d.ts]
Exports.StoryClutter = loadstring("require('lua/server/RandomizedWorldContent/StoryClutter/StoryClutter_Definitions');return _G['StoryClutter']")()

--[lua/server/recipecode.d.ts]
Exports.Recipe = loadstring("require('lua/server/recipecode');return _G['Recipe']")()

--[lua/server/Seasons/season.d.ts]
Exports.season = loadstring("require('lua/server/Seasons/season');return _G['season']")()

--[lua/server/Seasons/seasonProps.d.ts]
Exports.seasonProps = loadstring("require('lua/server/Seasons/seasonProps');return _G['seasonProps']")()

--[lua/server/TemplateReplacers.d.ts]
Exports.TemplateReplacers = loadstring("require('lua/server/TemplateReplacers');return _G['TemplateReplacers']")()

--[lua/server/Traps/BuildingObjects/TrapBO.d.ts]
Exports.TrapBO = loadstring("require('lua/server/Traps/BuildingObjects/TrapBO');return _G['TrapBO']")()

--[lua/server/Traps/ISUI/ISTrapMenu.d.ts]
Exports.ISTrapMenu = loadstring("require('lua/server/Traps/ISUI/ISTrapMenu');return _G['ISTrapMenu']")()

--[lua/server/Traps/STrapGlobalObject.d.ts]
Exports.STrapGlobalObject = loadstring("require('lua/server/Traps/STrapGlobalObject');return _G['STrapGlobalObject']")()

--[lua/server/Traps/STrapSystem.d.ts]
Exports.STrapSystem = loadstring("require('lua/server/Traps/STrapSystem');return _G['STrapSystem']")()

--[lua/server/Traps/TrapDefinition.d.ts]
Exports.Traps = loadstring("require('lua/server/Traps/TrapDefinition');return _G['Traps']")()

--[lua/server/TurnBased/TurnBasedMain.d.ts]
Exports.TurnbasedDummyChr = loadstring("require('lua/server/TurnBased/TurnBasedMain');return _G['TurnbasedDummyChr']")()

--[lua/server/TutorialHelperFunctions.d.ts]
Exports.TutorialHelperFunctions = loadstring("require('lua/server/TutorialHelperFunctions');return _G['TutorialHelperFunctions']")()

--[lua/server/Vehicles/ProfessionVehicles.d.ts]
Exports.ProfessionVehicles = loadstring("require('lua/server/Vehicles/ProfessionVehicles');return _G['ProfessionVehicles']")()

--[lua/server/Vehicles/Vehicles.d.ts]
Exports.Vehicles = loadstring("require('lua/server/Vehicles/Vehicles');return _G['Vehicles']")()
Exports.VehicleUtils = loadstring("require('lua/server/Vehicles/Vehicles');return _G['VehicleUtils']")()

--[lua/server/WorldGen/WorldGen.d.ts]
Exports.worldgen = loadstring("require('lua/server/WorldGen/WorldGen');return _G['worldgen']")()

--[lua/server/XpSystem/XPSystem_SkillBook.d.ts]
Exports.SkillBook = loadstring("require('lua/server/XpSystem/XPSystem_SkillBook');return _G['SkillBook']")()

--[lua/server/XpSystem/XpSystem_text.d.ts]
Exports.xpSystemText = loadstring("require('lua/server/XpSystem/XpSystem_text');return _G['xpSystemText']")()

--[lua/server/XpSystem/XpUpdate.d.ts]
Exports.xpUpdate = loadstring("require('lua/server/XpSystem/XpUpdate');return _G['xpUpdate']")()


--------------------------------------------------
-- [PARTIAL] : lua.shared.interface.partial.lua --
--------------------------------------------------

--[lua/shared/ActionManager.d.ts]
Exports.Actions = loadstring("require('lua/shared/ActionManager');return _G['Actions']")()

--[lua/shared/BuildingObjects/TimedActions/ISInsertLightSourceFuelAction.d.ts]
Exports.ISInsertLightSourceFuelAction = loadstring("require('lua/shared/BuildingObjects/TimedActions/ISInsertLightSourceFuelAction');return _G['ISInsertLightSourceFuelAction']")()

--[lua/shared/BuildingObjects/TimedActions/ISMultiStageBuild.d.ts]
Exports.ISMultiStageBuild = loadstring("require('lua/shared/BuildingObjects/TimedActions/ISMultiStageBuild');return _G['ISMultiStageBuild']")()

--[lua/shared/BuildingObjects/TimedActions/ISPaintAction.d.ts]
Exports.ISPaintAction = loadstring("require('lua/shared/BuildingObjects/TimedActions/ISPaintAction');return _G['ISPaintAction']")()

--[lua/shared/BuildingObjects/TimedActions/ISPaintSignAction.d.ts]
Exports.ISPaintSignAction = loadstring("require('lua/shared/BuildingObjects/TimedActions/ISPaintSignAction');return _G['ISPaintSignAction']")()

--[lua/shared/BuildingObjects/TimedActions/ISPlasterAction.d.ts]
Exports.ISPlasterAction = loadstring("require('lua/shared/BuildingObjects/TimedActions/ISPlasterAction');return _G['ISPlasterAction']")()

--[lua/shared/BuildingObjects/TimedActions/ISRemoveLightSourceFuelAction.d.ts]
Exports.ISRemoveLightSourceFuelAction = loadstring("require('lua/shared/BuildingObjects/TimedActions/ISRemoveLightSourceFuelAction');return _G['ISRemoveLightSourceFuelAction']")()

--[lua/shared/BuildingObjects/TimedActions/ISShovelGround.d.ts]
Exports.ISShovelGround = loadstring("require('lua/shared/BuildingObjects/TimedActions/ISShovelGround');return _G['ISShovelGround']")()

--[lua/shared/BuildingObjects/TimedActions/ISToggleLightSourceAction.d.ts]
Exports.ISToggleLightSourceAction = loadstring("require('lua/shared/BuildingObjects/TimedActions/ISToggleLightSourceAction');return _G['ISToggleLightSourceAction']")()

--[lua/shared/BuildingObjects/TimedActions/ISWallpaperAction.d.ts]
Exports.ISWallpaperAction = loadstring("require('lua/shared/BuildingObjects/TimedActions/ISWallpaperAction');return _G['ISWallpaperAction']")()

--[lua/shared/Camping/TimedActions/ISAddFuelAction.d.ts]
Exports.ISAddFuelAction = loadstring("require('lua/shared/Camping/TimedActions/ISAddFuelAction');return _G['ISAddFuelAction']")()

--[lua/shared/Camping/TimedActions/ISLightFromKindle.d.ts]
Exports.ISLightFromKindle = loadstring("require('lua/shared/Camping/TimedActions/ISLightFromKindle');return _G['ISLightFromKindle']")()

--[lua/shared/Camping/TimedActions/ISLightFromLiterature.d.ts]
Exports.ISLightFromLiterature = loadstring("require('lua/shared/Camping/TimedActions/ISLightFromLiterature');return _G['ISLightFromLiterature']")()

--[lua/shared/Camping/TimedActions/ISLightFromPetrol.d.ts]
Exports.ISLightFromPetrol = loadstring("require('lua/shared/Camping/TimedActions/ISLightFromPetrol');return _G['ISLightFromPetrol']")()

--[lua/shared/Camping/TimedActions/ISPutOutCampfireAction.d.ts]
Exports.ISPutOutCampfireAction = loadstring("require('lua/shared/Camping/TimedActions/ISPutOutCampfireAction');return _G['ISPutOutCampfireAction']")()

--[lua/shared/Camping/TimedActions/ISRemoveCampfireAction.d.ts]
Exports.ISRemoveCampfireAction = loadstring("require('lua/shared/Camping/TimedActions/ISRemoveCampfireAction');return _G['ISRemoveCampfireAction']")()

--[lua/shared/defines.d.ts]
Exports.ZombiePopulationMultiplier = loadstring("require('lua/shared/defines');return _G['ZombiePopulationMultiplier']")()
Exports.ZombiePopulationMultiplierTable = loadstring("require('lua/shared/defines');return _G['ZombiePopulationMultiplierTable']")()
Exports.ZombiePopulationPeakMultiplier = loadstring("require('lua/shared/defines');return _G['ZombiePopulationPeakMultiplier']")()
Exports.ZombiePopulationStartMultiplier = loadstring("require('lua/shared/defines');return _G['ZombiePopulationStartMultiplier']")()
Exports.ZomboidGlobals = loadstring("require('lua/shared/defines');return _G['ZomboidGlobals']")()

--[lua/shared/Definitions/animal/AnimalAvatarDefinition.d.ts]
Exports.AnimalAvatarDefinition = loadstring("require('lua/shared/Definitions/animal/AnimalAvatarDefinition');return _G['AnimalAvatarDefinition']")()

--[lua/shared/Definitions/animal/ButcheringUtil.d.ts]
Exports.ButcheringUtil = loadstring("require('lua/shared/Definitions/animal/ButcheringUtil');return _G['ButcheringUtil']")()

--[lua/shared/Definitions/ClothingRecipesDefinitions.d.ts]
Exports.ClothingRecipesDefinitions = loadstring("require('lua/shared/Definitions/ClothingRecipesDefinitions');return _G['ClothingRecipesDefinitions']")()

--[lua/shared/Definitions/DefaultClothing.d.ts]
Exports.DefaultClothing = loadstring("require('lua/shared/Definitions/DefaultClothing');return _G['DefaultClothing']")()

--[lua/shared/Definitions/FitnessExercises.d.ts]
Exports.FitnessExercises = loadstring("require('lua/shared/Definitions/FitnessExercises');return _G['FitnessExercises']")()

--[lua/shared/Definitions/RandomTintDefinitions.d.ts]
Exports.RandomTint = loadstring("require('lua/shared/Definitions/RandomTintDefinitions');return _G['RandomTint']")()

--[lua/shared/Entity/TimedActions/ISCraftAnimAction.d.ts]
Exports.ISCraftAnimAction = loadstring("require('lua/shared/Entity/TimedActions/ISCraftAnimAction');return _G['ISCraftAnimAction']")()

--[lua/shared/Entity/TimedActions/ISGenericCraftStart.d.ts]
Exports.ISGenericCraftStart = loadstring("require('lua/shared/Entity/TimedActions/ISGenericCraftStart');return _G['ISGenericCraftStart']")()

--[lua/shared/Entity/TimedActions/ISHandcraftAction.d.ts]
Exports.ISHandcraftAction = loadstring("require('lua/shared/Entity/TimedActions/ISHandcraftAction');return _G['ISHandcraftAction']")()

--[lua/shared/Entity/TimedActions/ISItemSlotAddAction.d.ts]
Exports.ISItemSlotAddAction = loadstring("require('lua/shared/Entity/TimedActions/ISItemSlotAddAction');return _G['ISItemSlotAddAction']")()

--[lua/shared/Entity/TimedActions/ISItemSlotRemoveAction.d.ts]
Exports.ISItemSlotRemoveAction = loadstring("require('lua/shared/Entity/TimedActions/ISItemSlotRemoveAction');return _G['ISItemSlotRemoveAction']")()

--[lua/shared/Entity/TimedActions/ISStartCraftProcessorAction.d.ts]
Exports.ISStartCraftProcessorAction = loadstring("require('lua/shared/Entity/TimedActions/ISStartCraftProcessorAction');return _G['ISStartCraftProcessorAction']")()

--[lua/shared/Farming/TimedActions/ISCurePlantAction.d.ts]
Exports.ISCurePlantAction = loadstring("require('lua/shared/Farming/TimedActions/ISCurePlantAction');return _G['ISCurePlantAction']")()

--[lua/shared/Farming/TimedActions/ISFertilizeAction.d.ts]
Exports.ISFertilizeAction = loadstring("require('lua/shared/Farming/TimedActions/ISFertilizeAction');return _G['ISFertilizeAction']")()

--[lua/shared/Farming/TimedActions/ISHarvestPlantAction.d.ts]
Exports.ISHarvestPlantAction = loadstring("require('lua/shared/Farming/TimedActions/ISHarvestPlantAction');return _G['ISHarvestPlantAction']")()

--[lua/shared/Farming/TimedActions/ISPlowAction.d.ts]
Exports.ISPlowAction = loadstring("require('lua/shared/Farming/TimedActions/ISPlowAction');return _G['ISPlowAction']")()

--[lua/shared/Farming/TimedActions/ISSeedActionNew.d.ts]
Exports.ISSeedActionNew = loadstring("require('lua/shared/Farming/TimedActions/ISSeedActionNew');return _G['ISSeedActionNew']")()

--[lua/shared/Farming/TimedActions/ISShovelAction.d.ts]
Exports.ISShovelAction = loadstring("require('lua/shared/Farming/TimedActions/ISShovelAction');return _G['ISShovelAction']")()

--[lua/shared/Farming/TimedActions/ISWaterPlantAction.d.ts]
Exports.ISWaterPlantAction = loadstring("require('lua/shared/Farming/TimedActions/ISWaterPlantAction');return _G['ISWaterPlantAction']")()

--[lua/shared/FeedingTrough/TimedActions/ISAddWaterToTrough.d.ts]
Exports.ISAddWaterToTrough = loadstring("require('lua/shared/FeedingTrough/TimedActions/ISAddWaterToTrough');return _G['ISAddWaterToTrough']")()

--[lua/shared/FeedingTrough/TimedActions/ISEmptyWaterInTrough.d.ts]
Exports.ISEmptyWaterInTrough = loadstring("require('lua/shared/FeedingTrough/TimedActions/ISEmptyWaterInTrough');return _G['ISEmptyWaterInTrough']")()

--[lua/shared/Fishing/fishing_properties.d.ts]

--[lua/shared/Fishing/FishingUtils.d.ts]

--[lua/shared/Fluids/ISFluidContainer.d.ts]
Exports.ISFluidContainer = loadstring("require('lua/shared/Fluids/ISFluidContainer');return _G['ISFluidContainer']")()

--[lua/shared/Fluids/ISFluidEmptyAction.d.ts]
Exports.ISFluidEmptyAction = loadstring("require('lua/shared/Fluids/ISFluidEmptyAction');return _G['ISFluidEmptyAction']")()

--[lua/shared/Fluids/ISFluidTransferAction.d.ts]
Exports.ISFluidTransferAction = loadstring("require('lua/shared/Fluids/ISFluidTransferAction');return _G['ISFluidTransferAction']")()

--[lua/shared/Fluids/ISFluidUtil.d.ts]
Exports.ISFluidUtil = loadstring("require('lua/shared/Fluids/ISFluidUtil');return _G['ISFluidUtil']")()

--[lua/shared/Foraging/Categories/Ammo.d.ts]

--[lua/shared/Foraging/Categories/Animals.d.ts]

--[lua/shared/Foraging/Categories/Berries.d.ts]

--[lua/shared/Foraging/Categories/Clothing.d.ts]

--[lua/shared/Foraging/Categories/DeadAnimals.d.ts]

--[lua/shared/Foraging/Categories/ForestGoods.d.ts]

--[lua/shared/Foraging/Categories/ForestRarities.d.ts]

--[lua/shared/Foraging/Categories/Fruits.d.ts]

--[lua/shared/Foraging/Categories/Herbs.d.ts]

--[lua/shared/Foraging/Categories/Insects.d.ts]

--[lua/shared/Foraging/Categories/Junk.d.ts]

--[lua/shared/Foraging/Categories/Medical.d.ts]

--[lua/shared/Foraging/Categories/MedicinalPlants.d.ts]

--[lua/shared/Foraging/Categories/Mushrooms.d.ts]

--[lua/shared/Foraging/Categories/Stones.d.ts]

--[lua/shared/Foraging/Categories/Vegetables.d.ts]

--[lua/shared/Foraging/Categories/WildPlants.d.ts]

--[lua/shared/Foraging/forageCategories.d.ts]
Exports.forageCategories = loadstring("require('lua/shared/Foraging/forageCategories');return _G['forageCategories']")()

--[lua/shared/Foraging/forageDefinitions.d.ts]
Exports.forageDefaultDefs = loadstring("require('lua/shared/Foraging/forageDefinitions');return _G['forageDefaultDefs']")()
Exports.forageDefs = loadstring("require('lua/shared/Foraging/forageDefinitions');return _G['forageDefs']")()

--[lua/shared/Foraging/forageSkills.d.ts]
Exports.forageSkills = loadstring("require('lua/shared/Foraging/forageSkills');return _G['forageSkills']")()
Exports.forageZones = loadstring("require('lua/shared/Foraging/forageSkills');return _G['forageZones']")()

--[lua/shared/Foraging/forageSystem.d.ts]
Exports.forageSystem = loadstring("require('lua/shared/Foraging/forageSystem');return _G['forageSystem']")()

--[lua/shared/Foraging/forageZones.d.ts]
Exports.forageZones = loadstring("require('lua/shared/Foraging/forageZones');return _G['forageZones']")()

--[lua/shared/Foraging/ISForageAction.d.ts]
Exports.ISForageAction = loadstring("require('lua/shared/Foraging/ISForageAction');return _G['ISForageAction']")()

--[lua/shared/Foraging/scavenges.d.ts]
Exports.scavenges = loadstring("require('lua/shared/Foraging/scavenges');return _G['scavenges']")()

--[lua/shared/ISBaseObject.d.ts]
Exports.ISBaseObject = loadstring("require('lua/shared/ISBaseObject');return _G['ISBaseObject']")()

--[lua/shared/iwbumstempmodelcompat.d.ts]

--[lua/shared/JoyPad/JoyPadSetup.d.ts]
Exports.JoypadControllerData = loadstring("require('lua/shared/JoyPad/JoyPadSetup');return _G['JoypadControllerData']")()
Exports.JoypadData = loadstring("require('lua/shared/JoyPad/JoyPadSetup');return _G['JoypadData']")()
Exports.joypad = loadstring("require('lua/shared/JoyPad/JoyPadSetup');return _G['joypad']")()
Exports.Joypad = loadstring("require('lua/shared/JoyPad/JoyPadSetup');return _G['Joypad']")()
Exports.JoypadState = loadstring("require('lua/shared/JoyPad/JoyPadSetup');return _G['JoypadState']")()

--[lua/shared/keyBinding.d.ts]
Exports.keyBinding = loadstring("require('lua/shared/keyBinding');return _G['keyBinding']")()

--[lua/shared/Logs/ISLogSystem.d.ts]
Exports.ISLogSystem = loadstring("require('lua/shared/Logs/ISLogSystem');return _G['ISLogSystem']")()

--[lua/shared/Logs/ISPerkLog.d.ts]
Exports.ISPerkLog = loadstring("require('lua/shared/Logs/ISPerkLog');return _G['ISPerkLog']")()

--[lua/shared/luautils.d.ts]
Exports.luautils = loadstring("require('lua/shared/luautils');return _G['luautils']")()

--[lua/shared/Moveables/ISMoveableDefinitions.d.ts]
Exports.ISMoveableDefinitions = loadstring("require('lua/shared/Moveables/ISMoveableDefinitions');return _G['ISMoveableDefinitions']")()

--[lua/shared/Moveables/ISMoveablesAction.d.ts]
Exports.ISMoveablesAction = loadstring("require('lua/shared/Moveables/ISMoveablesAction');return _G['ISMoveablesAction']")()

--[lua/shared/Moveables/ISMoveableSpriteProps.d.ts]
Exports.InfoPanelFlags = loadstring("require('lua/shared/Moveables/ISMoveableSpriteProps');return _G['InfoPanelFlags']")()
Exports.ISMoveableSpriteProps = loadstring("require('lua/shared/Moveables/ISMoveableSpriteProps');return _G['ISMoveableSpriteProps']")()
Exports.ISThumpableSpriteProps = loadstring("require('lua/shared/Moveables/ISMoveableSpriteProps');return _G['ISThumpableSpriteProps']")()
Exports.SpriteGridCache = loadstring("require('lua/shared/Moveables/ISMoveableSpriteProps');return _G['SpriteGridCache']")()

--[lua/shared/Moveables/ISMoveableTools.d.ts]
Exports.ISMoveableTools = loadstring("require('lua/shared/Moveables/ISMoveableTools');return _G['ISMoveableTools']")()

--[lua/shared/NPCs/MainCreationMethods.d.ts]
Exports.BaseGameCharacterDetails = loadstring("require('lua/shared/NPCs/MainCreationMethods');return _G['BaseGameCharacterDetails']")()

--[lua/shared/PrintMedia/PrintMediaDefinitions.d.ts]
Exports.PrintMediaDefinitions = loadstring("require('lua/shared/PrintMedia/PrintMediaDefinitions');return _G['PrintMediaDefinitions']")()

--[lua/shared/ProceduralBasements/basements.d.ts]

--[lua/shared/RecordedMedia/ISRecordedMedia.d.ts]
Exports.ISRecordedMedia = loadstring("require('lua/shared/RecordedMedia/ISRecordedMedia');return _G['ISRecordedMedia']")()

--[lua/shared/SoundBanks/SoundBanks.d.ts]
Exports.ambientSoundTable = loadstring("require('lua/shared/SoundBanks/SoundBanks');return _G['ambientSoundTable']")()
Exports.baseSoundTable = loadstring("require('lua/shared/SoundBanks/SoundBanks');return _G['baseSoundTable']")()
Exports.footStepTable = loadstring("require('lua/shared/SoundBanks/SoundBanks');return _G['footStepTable']")()
Exports.globalSoundTable = loadstring("require('lua/shared/SoundBanks/SoundBanks');return _G['globalSoundTable']")()
Exports.voiceTable = loadstring("require('lua/shared/SoundBanks/SoundBanks');return _G['voiceTable']")()

--[lua/shared/SpawnRegions.d.ts]
Exports.SpawnRegionMgr = loadstring("require('lua/shared/SpawnRegions');return _G['SpawnRegionMgr']")()

--[lua/shared/StashDescriptions/StashUtil.d.ts]
Exports.StashUtil = loadstring("require('lua/shared/StashDescriptions/StashUtil');return _G['StashUtil']")()

--[lua/shared/TimedActions/Animals/ISAddAnimalInTrailer.d.ts]
Exports.ISAddAnimalInTrailer = loadstring("require('lua/shared/TimedActions/Animals/ISAddAnimalInTrailer');return _G['ISAddAnimalInTrailer']")()

--[lua/shared/TimedActions/Animals/ISAttachAnimalToPlayer.d.ts]
Exports.ISAttachAnimalToPlayer = loadstring("require('lua/shared/TimedActions/Animals/ISAttachAnimalToPlayer');return _G['ISAttachAnimalToPlayer']")()

--[lua/shared/TimedActions/Animals/ISAttachAnimalToTree.d.ts]
Exports.ISAttachAnimalToTree = loadstring("require('lua/shared/TimedActions/Animals/ISAttachAnimalToTree');return _G['ISAttachAnimalToTree']")()

--[lua/shared/TimedActions/Animals/ISButcherAnimal.d.ts]
Exports.ISButcherAnimal = loadstring("require('lua/shared/TimedActions/Animals/ISButcherAnimal');return _G['ISButcherAnimal']")()

--[lua/shared/TimedActions/Animals/ISCutAnimalOnHook.d.ts]
Exports.ISCutAnimalOnHook = loadstring("require('lua/shared/TimedActions/Animals/ISCutAnimalOnHook');return _G['ISCutAnimalOnHook']")()

--[lua/shared/TimedActions/Animals/ISFeedAnimalFromHand.d.ts]
Exports.ISFeedAnimalFromHand = loadstring("require('lua/shared/TimedActions/Animals/ISFeedAnimalFromHand');return _G['ISFeedAnimalFromHand']")()

--[lua/shared/TimedActions/Animals/ISGatherBloodFromAnimal.d.ts]
Exports.ISGatherBloodFromAnimal = loadstring("require('lua/shared/TimedActions/Animals/ISGatherBloodFromAnimal');return _G['ISGatherBloodFromAnimal']")()

--[lua/shared/TimedActions/Animals/ISGetAnimalBones.d.ts]
Exports.ISGetAnimalBones = loadstring("require('lua/shared/TimedActions/Animals/ISGetAnimalBones');return _G['ISGetAnimalBones']")()

--[lua/shared/TimedActions/Animals/ISGiveWaterToAnimal.d.ts]
Exports.ISGiveWaterToAnimal = loadstring("require('lua/shared/TimedActions/Animals/ISGiveWaterToAnimal');return _G['ISGiveWaterToAnimal']")()

--[lua/shared/TimedActions/Animals/ISHutchCleanFloor.d.ts]
Exports.ISHutchCleanFloor = loadstring("require('lua/shared/TimedActions/Animals/ISHutchCleanFloor');return _G['ISHutchCleanFloor']")()

--[lua/shared/TimedActions/Animals/ISHutchCleanNest.d.ts]
Exports.ISHutchCleanNest = loadstring("require('lua/shared/TimedActions/Animals/ISHutchCleanNest');return _G['ISHutchCleanNest']")()

--[lua/shared/TimedActions/Animals/ISHutchGrabAnimal.d.ts]
Exports.ISHutchGrabAnimal = loadstring("require('lua/shared/TimedActions/Animals/ISHutchGrabAnimal');return _G['ISHutchGrabAnimal']")()

--[lua/shared/TimedActions/Animals/ISHutchGrabCorpseAction.d.ts]
Exports.ISHutchGrabCorpseAction = loadstring("require('lua/shared/TimedActions/Animals/ISHutchGrabCorpseAction');return _G['ISHutchGrabCorpseAction']")()

--[lua/shared/TimedActions/Animals/ISHutchGrabEgg.d.ts]
Exports.ISHutchGrabEgg = loadstring("require('lua/shared/TimedActions/Animals/ISHutchGrabEgg');return _G['ISHutchGrabEgg']")()

--[lua/shared/TimedActions/Animals/ISKillAnimal.d.ts]
Exports.ISKillAnimal = loadstring("require('lua/shared/TimedActions/Animals/ISKillAnimal');return _G['ISKillAnimal']")()

--[lua/shared/TimedActions/Animals/ISLureAnimal.d.ts]
Exports.ISLureAnimal = loadstring("require('lua/shared/TimedActions/Animals/ISLureAnimal');return _G['ISLureAnimal']")()

--[lua/shared/TimedActions/Animals/ISMilkAnimal.d.ts]
Exports.ISMilkAnimal = loadstring("require('lua/shared/TimedActions/Animals/ISMilkAnimal');return _G['ISMilkAnimal']")()

--[lua/shared/TimedActions/Animals/ISOpenAnimalInfo.d.ts]
Exports.ISOpenAnimalInfo = loadstring("require('lua/shared/TimedActions/Animals/ISOpenAnimalInfo');return _G['ISOpenAnimalInfo']")()

--[lua/shared/TimedActions/Animals/ISOpenButcherHookUI.d.ts]
Exports.ISOpenButcherHookUI = loadstring("require('lua/shared/TimedActions/Animals/ISOpenButcherHookUI');return _G['ISOpenButcherHookUI']")()

--[lua/shared/TimedActions/Animals/ISPetAnimal.d.ts]
Exports.ISPetAnimal = loadstring("require('lua/shared/TimedActions/Animals/ISPetAnimal');return _G['ISPetAnimal']")()

--[lua/shared/TimedActions/Animals/ISPickupAnimal.d.ts]
Exports.ISPickupAnimal = loadstring("require('lua/shared/TimedActions/Animals/ISPickupAnimal');return _G['ISPickupAnimal']")()

--[lua/shared/TimedActions/Animals/ISPutAnimalInHutch.d.ts]
Exports.ISPutAnimalInHutch = loadstring("require('lua/shared/TimedActions/Animals/ISPutAnimalInHutch');return _G['ISPutAnimalInHutch']")()

--[lua/shared/TimedActions/Animals/ISPutAnimalOnHook.d.ts]
Exports.ISPutAnimalOnHook = loadstring("require('lua/shared/TimedActions/Animals/ISPutAnimalOnHook');return _G['ISPutAnimalOnHook']")()

--[lua/shared/TimedActions/Animals/ISRemoveAnimalFromHook.d.ts]
Exports.ISRemoveAnimalFromHook = loadstring("require('lua/shared/TimedActions/Animals/ISRemoveAnimalFromHook');return _G['ISRemoveAnimalFromHook']")()

--[lua/shared/TimedActions/Animals/ISRemoveAnimalFromTrailer.d.ts]
Exports.ISRemoveAnimalFromTrailer = loadstring("require('lua/shared/TimedActions/Animals/ISRemoveAnimalFromTrailer');return _G['ISRemoveAnimalFromTrailer']")()

--[lua/shared/TimedActions/Animals/ISRemoveHeadFromAnimal.d.ts]
Exports.ISRemoveHeadFromAnimal = loadstring("require('lua/shared/TimedActions/Animals/ISRemoveHeadFromAnimal');return _G['ISRemoveHeadFromAnimal']")()

--[lua/shared/TimedActions/Animals/ISRemoveLeatherFromAnimal.d.ts]
Exports.ISRemoveLeatherFromAnimal = loadstring("require('lua/shared/TimedActions/Animals/ISRemoveLeatherFromAnimal');return _G['ISRemoveLeatherFromAnimal']")()

--[lua/shared/TimedActions/Animals/ISRemoveMeatFromAnimal.d.ts]
Exports.ISRemoveMeatFromAnimal = loadstring("require('lua/shared/TimedActions/Animals/ISRemoveMeatFromAnimal');return _G['ISRemoveMeatFromAnimal']")()

--[lua/shared/TimedActions/Animals/ISShearAnimal.d.ts]
Exports.ISShearAnimal = loadstring("require('lua/shared/TimedActions/Animals/ISShearAnimal');return _G['ISShearAnimal']")()

--[lua/shared/TimedActions/Animals/ISToggleHutchDoor.d.ts]
Exports.ISToggleHutchDoor = loadstring("require('lua/shared/TimedActions/Animals/ISToggleHutchDoor');return _G['ISToggleHutchDoor']")()

--[lua/shared/TimedActions/Animals/ISToggleHutchEggHatchDoor.d.ts]
Exports.ISToggleHutchEggHatchDoor = loadstring("require('lua/shared/TimedActions/Animals/ISToggleHutchEggHatchDoor');return _G['ISToggleHutchEggHatchDoor']")()

--[lua/shared/TimedActions/Fishing/TimedActions/AddChumToWaterAction.d.ts]
Exports.AddChumToWaterAction = loadstring("require('lua/shared/TimedActions/Fishing/TimedActions/AddChumToWaterAction');return _G['AddChumToWaterAction']")()

--[lua/shared/TimedActions/Fishing/TimedActions/AIAttachLureAction.d.ts]
Exports.AIAttachLureAction = loadstring("require('lua/shared/TimedActions/Fishing/TimedActions/AIAttachLureAction');return _G['AIAttachLureAction']")()

--[lua/shared/TimedActions/Fishing/TimedActions/AIRemoveLureAction.d.ts]
Exports.AIRemoveLureAction = loadstring("require('lua/shared/TimedActions/Fishing/TimedActions/AIRemoveLureAction');return _G['AIRemoveLureAction']")()

--[lua/shared/TimedActions/Fishing/TimedActions/CreateChumFromGroundSandAction.d.ts]
Exports.CreateChumFromGroundSandAction = loadstring("require('lua/shared/TimedActions/Fishing/TimedActions/CreateChumFromGroundSandAction');return _G['CreateChumFromGroundSandAction']")()

--[lua/shared/TimedActions/Fishing/TimedActions/ISAddBaitToFishNetAction.d.ts]
Exports.ISAddBaitToFishNetAction = loadstring("require('lua/shared/TimedActions/Fishing/TimedActions/ISAddBaitToFishNetAction');return _G['ISAddBaitToFishNetAction']")()

--[lua/shared/TimedActions/Fishing/TimedActions/ISChangeFishingRodEquip.d.ts]
Exports.ISChangeFishingRodEquip = loadstring("require('lua/shared/TimedActions/Fishing/TimedActions/ISChangeFishingRodEquip');return _G['ISChangeFishingRodEquip']")()

--[lua/shared/TimedActions/Fishing/TimedActions/ISCheckFishingNetAction.d.ts]
Exports.ISCheckFishingNetAction = loadstring("require('lua/shared/TimedActions/Fishing/TimedActions/ISCheckFishingNetAction');return _G['ISCheckFishingNetAction']")()

--[lua/shared/TimedActions/Fishing/TimedActions/ISPickupFishAction.d.ts]
Exports.ISPickupFishAction = loadstring("require('lua/shared/TimedActions/Fishing/TimedActions/ISPickupFishAction');return _G['ISPickupFishAction']")()

--[lua/shared/TimedActions/ISActivateCarBatteryChargerAction.d.ts]
Exports.ISActivateCarBatteryChargerAction = loadstring("require('lua/shared/TimedActions/ISActivateCarBatteryChargerAction');return _G['ISActivateCarBatteryChargerAction']")()

--[lua/shared/TimedActions/ISActivateGenerator.d.ts]
Exports.ISActivateGenerator = loadstring("require('lua/shared/TimedActions/ISActivateGenerator');return _G['ISActivateGenerator']")()

--[lua/shared/TimedActions/ISAddCompost.d.ts]
Exports.ISAddCompost = loadstring("require('lua/shared/TimedActions/ISAddCompost');return _G['ISAddCompost']")()

--[lua/shared/TimedActions/ISAddFuel.d.ts]
Exports.ISAddFuel = loadstring("require('lua/shared/TimedActions/ISAddFuel');return _G['ISAddFuel']")()

--[lua/shared/TimedActions/ISAddItemInRecipe.d.ts]
Exports.ISAddItemInRecipe = loadstring("require('lua/shared/TimedActions/ISAddItemInRecipe');return _G['ISAddItemInRecipe']")()

--[lua/shared/TimedActions/ISAddSheetAction.d.ts]
Exports.ISAddSheetAction = loadstring("require('lua/shared/TimedActions/ISAddSheetAction');return _G['ISAddSheetAction']")()

--[lua/shared/TimedActions/ISAddSheetRope.d.ts]
Exports.ISAddSheetRope = loadstring("require('lua/shared/TimedActions/ISAddSheetRope');return _G['ISAddSheetRope']")()

--[lua/shared/TimedActions/ISAddTakeDispenserBottle.d.ts]
Exports.ISAddTakeDispenserBottle = loadstring("require('lua/shared/TimedActions/ISAddTakeDispenserBottle');return _G['ISAddTakeDispenserBottle']")()

--[lua/shared/TimedActions/ISAddWaterFromItemAction.d.ts]
Exports.ISAddWaterFromItemAction = loadstring("require('lua/shared/TimedActions/ISAddWaterFromItemAction');return _G['ISAddWaterFromItemAction']")()

--[lua/shared/TimedActions/ISApplyBandage.d.ts]
Exports.ISApplyBandage = loadstring("require('lua/shared/TimedActions/ISApplyBandage');return _G['ISApplyBandage']")()

--[lua/shared/TimedActions/ISApplyMakeUp.d.ts]
Exports.ISApplyMakeUp = loadstring("require('lua/shared/TimedActions/ISApplyMakeUp');return _G['ISApplyMakeUp']")()

--[lua/shared/TimedActions/ISAttachItemHotbar.d.ts]
Exports.ISAttachItemHotbar = loadstring("require('lua/shared/TimedActions/ISAttachItemHotbar');return _G['ISAttachItemHotbar']")()

--[lua/shared/TimedActions/ISBarricadeAction.d.ts]
Exports.ISBarricadeAction = loadstring("require('lua/shared/TimedActions/ISBarricadeAction');return _G['ISBarricadeAction']")()

--[lua/shared/TimedActions/ISBaseTimedAction.d.ts]
Exports.ISBaseTimedAction = loadstring("require('lua/shared/TimedActions/ISBaseTimedAction');return _G['ISBaseTimedAction']")()

--[lua/shared/TimedActions/ISBBQAddFuel.d.ts]
Exports.ISBBQAddFuel = loadstring("require('lua/shared/TimedActions/ISBBQAddFuel');return _G['ISBBQAddFuel']")()

--[lua/shared/TimedActions/ISBBQExtinguish.d.ts]
Exports.ISBBQExtinguish = loadstring("require('lua/shared/TimedActions/ISBBQExtinguish');return _G['ISBBQExtinguish']")()

--[lua/shared/TimedActions/ISBBQInsertPropaneTank.d.ts]
Exports.ISBBQInsertPropaneTank = loadstring("require('lua/shared/TimedActions/ISBBQInsertPropaneTank');return _G['ISBBQInsertPropaneTank']")()

--[lua/shared/TimedActions/ISBBQLightFromKindle.d.ts]
Exports.ISBBQLightFromKindle = loadstring("require('lua/shared/TimedActions/ISBBQLightFromKindle');return _G['ISBBQLightFromKindle']")()

--[lua/shared/TimedActions/ISBBQLightFromLiterature.d.ts]
Exports.ISBBQLightFromLiterature = loadstring("require('lua/shared/TimedActions/ISBBQLightFromLiterature');return _G['ISBBQLightFromLiterature']")()

--[lua/shared/TimedActions/ISBBQLightFromPetrol.d.ts]
Exports.ISBBQLightFromPetrol = loadstring("require('lua/shared/TimedActions/ISBBQLightFromPetrol');return _G['ISBBQLightFromPetrol']")()

--[lua/shared/TimedActions/ISBBQRemovePropaneTank.d.ts]
Exports.ISBBQRemovePropaneTank = loadstring("require('lua/shared/TimedActions/ISBBQRemovePropaneTank');return _G['ISBBQRemovePropaneTank']")()

--[lua/shared/TimedActions/ISBBQToggle.d.ts]
Exports.ISBBQToggle = loadstring("require('lua/shared/TimedActions/ISBBQToggle');return _G['ISBBQToggle']")()

--[lua/shared/TimedActions/ISBurnCorpseAction.d.ts]
Exports.ISBurnCorpseAction = loadstring("require('lua/shared/TimedActions/ISBurnCorpseAction');return _G['ISBurnCorpseAction']")()

--[lua/shared/TimedActions/ISBuryCorpse.d.ts]
Exports.ISBuryCorpse = loadstring("require('lua/shared/TimedActions/ISBuryCorpse');return _G['ISBuryCorpse']")()

--[lua/shared/TimedActions/ISChopTreeAction.d.ts]
Exports.ISChopTreeAction = loadstring("require('lua/shared/TimedActions/ISChopTreeAction');return _G['ISChopTreeAction']")()

--[lua/shared/TimedActions/ISCleanBandage.d.ts]
Exports.ISCleanBandage = loadstring("require('lua/shared/TimedActions/ISCleanBandage');return _G['ISCleanBandage']")()

--[lua/shared/TimedActions/ISCleanBlood.d.ts]
Exports.ISCleanBlood = loadstring("require('lua/shared/TimedActions/ISCleanBlood');return _G['ISCleanBlood']")()

--[lua/shared/TimedActions/ISCleanBurn.d.ts]
Exports.ISCleanBurn = loadstring("require('lua/shared/TimedActions/ISCleanBurn');return _G['ISCleanBurn']")()

--[lua/shared/TimedActions/ISCleanGraffiti.d.ts]
Exports.ISCleanGraffiti = loadstring("require('lua/shared/TimedActions/ISCleanGraffiti');return _G['ISCleanGraffiti']")()

--[lua/shared/TimedActions/ISClearAshes.d.ts]
Exports.ISClearAshes = loadstring("require('lua/shared/TimedActions/ISClearAshes');return _G['ISClearAshes']")()

--[lua/shared/TimedActions/ISComfreyCataplasm.d.ts]
Exports.ISComfreyCataplasm = loadstring("require('lua/shared/TimedActions/ISComfreyCataplasm');return _G['ISComfreyCataplasm']")()

--[lua/shared/TimedActions/ISConnectCarBatteryToChargerAction.d.ts]
Exports.ISConnectCarBatteryToChargerAction = loadstring("require('lua/shared/TimedActions/ISConnectCarBatteryToChargerAction');return _G['ISConnectCarBatteryToChargerAction']")()

--[lua/shared/TimedActions/ISConsolidateDrainable.d.ts]
Exports.ISConsolidateDrainable = loadstring("require('lua/shared/TimedActions/ISConsolidateDrainable');return _G['ISConsolidateDrainable']")()

--[lua/shared/TimedActions/ISCraftAction.d.ts]
Exports.ISCraftAction = loadstring("require('lua/shared/TimedActions/ISCraftAction');return _G['ISCraftAction']")()

--[lua/shared/TimedActions/ISCutHair.d.ts]
Exports.ISCutHair = loadstring("require('lua/shared/TimedActions/ISCutHair');return _G['ISCutHair']")()

--[lua/shared/TimedActions/ISDestroyStuffAction.d.ts]
Exports.ISDestroyStuffAction = loadstring("require('lua/shared/TimedActions/ISDestroyStuffAction');return _G['ISDestroyStuffAction']")()

--[lua/shared/TimedActions/ISDisinfect.d.ts]
Exports.ISDisinfect = loadstring("require('lua/shared/TimedActions/ISDisinfect');return _G['ISDisinfect']")()

--[lua/shared/TimedActions/ISDismantleAction.d.ts]
Exports.ISDismantleAction = loadstring("require('lua/shared/TimedActions/ISDismantleAction');return _G['ISDismantleAction']")()

--[lua/shared/TimedActions/ISDrinkFluidAction.d.ts]
Exports.ISDrinkFluidAction = loadstring("require('lua/shared/TimedActions/ISDrinkFluidAction');return _G['ISDrinkFluidAction']")()

--[lua/shared/TimedActions/ISDrinkFromBottle.d.ts]
Exports.ISDrinkFromBottle = loadstring("require('lua/shared/TimedActions/ISDrinkFromBottle');return _G['ISDrinkFromBottle']")()

--[lua/shared/TimedActions/ISDropCorpseAction.d.ts]
Exports.ISDropCorpseAction = loadstring("require('lua/shared/TimedActions/ISDropCorpseAction');return _G['ISDropCorpseAction']")()

--[lua/shared/TimedActions/ISDropWorldItemAction.d.ts]
Exports.ISDropWorldItemAction = loadstring("require('lua/shared/TimedActions/ISDropWorldItemAction');return _G['ISDropWorldItemAction']")()

--[lua/shared/TimedActions/ISDryMyself.d.ts]
Exports.ISDryMyself = loadstring("require('lua/shared/TimedActions/ISDryMyself');return _G['ISDryMyself']")()

--[lua/shared/TimedActions/ISDumpContentsAction.d.ts]
Exports.ISDumpContentsAction = loadstring("require('lua/shared/TimedActions/ISDumpContentsAction');return _G['ISDumpContentsAction']")()

--[lua/shared/TimedActions/ISDumpWaterAction.d.ts]
Exports.ISDumpWaterAction = loadstring("require('lua/shared/TimedActions/ISDumpWaterAction');return _G['ISDumpWaterAction']")()

--[lua/shared/TimedActions/ISDyeHair.d.ts]
Exports.ISDyeHair = loadstring("require('lua/shared/TimedActions/ISDyeHair');return _G['ISDyeHair']")()

--[lua/shared/TimedActions/ISEatFoodAction.d.ts]
Exports.ISEatFoodAction = loadstring("require('lua/shared/TimedActions/ISEatFoodAction');return _G['ISEatFoodAction']")()

--[lua/shared/TimedActions/ISEjectMagazine.d.ts]
Exports.ISEjectMagazine = loadstring("require('lua/shared/TimedActions/ISEjectMagazine');return _G['ISEjectMagazine']")()

--[lua/shared/TimedActions/ISEmptyRainBarrelAction.d.ts]
Exports.ISEmptyRainBarrelAction = loadstring("require('lua/shared/TimedActions/ISEmptyRainBarrelAction');return _G['ISEmptyRainBarrelAction']")()

--[lua/shared/TimedActions/ISEquipHeavyItem.d.ts]
Exports.ISEquipHeavyItem = loadstring("require('lua/shared/TimedActions/ISEquipHeavyItem');return _G['ISEquipHeavyItem']")()

--[lua/shared/TimedActions/ISEquipWeaponAction.d.ts]
Exports.ISEquipWeaponAction = loadstring("require('lua/shared/TimedActions/ISEquipWeaponAction');return _G['ISEquipWeaponAction']")()

--[lua/shared/TimedActions/ISFillGrave.d.ts]
Exports.ISFillGrave = loadstring("require('lua/shared/TimedActions/ISFillGrave');return _G['ISFillGrave']")()

--[lua/shared/TimedActions/ISFireplaceAddFuel.d.ts]
Exports.ISFireplaceAddFuel = loadstring("require('lua/shared/TimedActions/ISFireplaceAddFuel');return _G['ISFireplaceAddFuel']")()

--[lua/shared/TimedActions/ISFireplaceExtinguish.d.ts]
Exports.ISFireplaceExtinguish = loadstring("require('lua/shared/TimedActions/ISFireplaceExtinguish');return _G['ISFireplaceExtinguish']")()

--[lua/shared/TimedActions/ISFireplaceLightFromKindle.d.ts]
Exports.ISFireplaceLightFromKindle = loadstring("require('lua/shared/TimedActions/ISFireplaceLightFromKindle');return _G['ISFireplaceLightFromKindle']")()

--[lua/shared/TimedActions/ISFireplaceLightFromLiterature.d.ts]
Exports.ISFireplaceLightFromLiterature = loadstring("require('lua/shared/TimedActions/ISFireplaceLightFromLiterature');return _G['ISFireplaceLightFromLiterature']")()

--[lua/shared/TimedActions/ISFireplaceLightFromPetrol.d.ts]
Exports.ISFireplaceLightFromPetrol = loadstring("require('lua/shared/TimedActions/ISFireplaceLightFromPetrol');return _G['ISFireplaceLightFromPetrol']")()

--[lua/shared/TimedActions/ISFitnessAction.d.ts]
Exports.ISFitnessAction = loadstring("require('lua/shared/TimedActions/ISFitnessAction');return _G['ISFitnessAction']")()

--[lua/shared/TimedActions/ISFixAction.d.ts]
Exports.ISFixAction = loadstring("require('lua/shared/TimedActions/ISFixAction');return _G['ISFixAction']")()

--[lua/shared/TimedActions/ISFixGenerator.d.ts]
Exports.ISFixGenerator = loadstring("require('lua/shared/TimedActions/ISFixGenerator');return _G['ISFixGenerator']")()

--[lua/shared/TimedActions/ISFixVehiclePartAction.d.ts]
Exports.ISFixVehiclePartAction = loadstring("require('lua/shared/TimedActions/ISFixVehiclePartAction');return _G['ISFixVehiclePartAction']")()

--[lua/shared/TimedActions/ISGarlicCataplasm.d.ts]
Exports.ISGarlicCataplasm = loadstring("require('lua/shared/TimedActions/ISGarlicCataplasm');return _G['ISGarlicCataplasm']")()

--[lua/shared/TimedActions/ISGetCompost.d.ts]
Exports.ISGetCompost = loadstring("require('lua/shared/TimedActions/ISGetCompost');return _G['ISGetCompost']")()

--[lua/shared/TimedActions/ISGetOnBedAction.d.ts]
Exports.ISGetOnBedAction = loadstring("require('lua/shared/TimedActions/ISGetOnBedAction');return _G['ISGetOnBedAction']")()

--[lua/shared/TimedActions/ISGrabCorpseAction.d.ts]
Exports.ISGrabCorpseAction = loadstring("require('lua/shared/TimedActions/ISGrabCorpseAction');return _G['ISGrabCorpseAction']")()

--[lua/shared/TimedActions/ISHurricaneLanternExtinguish.d.ts]
Exports.ISHurricaneLanternExtinguish = loadstring("require('lua/shared/TimedActions/ISHurricaneLanternExtinguish');return _G['ISHurricaneLanternExtinguish']")()

--[lua/shared/TimedActions/ISInsertMagazine.d.ts]
Exports.ISInsertMagazine = loadstring("require('lua/shared/TimedActions/ISInsertMagazine');return _G['ISInsertMagazine']")()

--[lua/shared/TimedActions/ISLightActions.d.ts]
Exports.ISLightActions = loadstring("require('lua/shared/TimedActions/ISLightActions');return _G['ISLightActions']")()

--[lua/shared/TimedActions/ISLitCandleExtinguish.d.ts]
Exports.ISLitCandleExtinguish = loadstring("require('lua/shared/TimedActions/ISLitCandleExtinguish');return _G['ISLitCandleExtinguish']")()

--[lua/shared/TimedActions/ISLoadBulletsInMagazine.d.ts]
Exports.ISLoadBulletsInMagazine = loadstring("require('lua/shared/TimedActions/ISLoadBulletsInMagazine');return _G['ISLoadBulletsInMagazine']")()

--[lua/shared/TimedActions/ISLockDoor.d.ts]
Exports.ISLockDoor = loadstring("require('lua/shared/TimedActions/ISLockDoor');return _G['ISLockDoor']")()

--[lua/shared/TimedActions/ISOpenCloseCurtain.d.ts]
Exports.ISOpenCloseCurtain = loadstring("require('lua/shared/TimedActions/ISOpenCloseCurtain');return _G['ISOpenCloseCurtain']")()

--[lua/shared/TimedActions/ISOpenCloseDoor.d.ts]
Exports.ISOpenCloseDoor = loadstring("require('lua/shared/TimedActions/ISOpenCloseDoor');return _G['ISOpenCloseDoor']")()

--[lua/shared/TimedActions/ISOpenCloseWindow.d.ts]
Exports.ISOpenCloseWindow = loadstring("require('lua/shared/TimedActions/ISOpenCloseWindow');return _G['ISOpenCloseWindow']")()

--[lua/shared/TimedActions/ISPadlockAction.d.ts]
Exports.ISPadlockAction = loadstring("require('lua/shared/TimedActions/ISPadlockAction');return _G['ISPadlockAction']")()

--[lua/shared/TimedActions/ISPadlockByCodeAction.d.ts]
Exports.ISPadlockByCodeAction = loadstring("require('lua/shared/TimedActions/ISPadlockByCodeAction');return _G['ISPadlockByCodeAction']")()

--[lua/shared/TimedActions/ISPickupBrokenGlass.d.ts]
Exports.ISPickupBrokenGlass = loadstring("require('lua/shared/TimedActions/ISPickupBrokenGlass');return _G['ISPickupBrokenGlass']")()

--[lua/shared/TimedActions/ISPickupDung.d.ts]
Exports.ISPickupDung = loadstring("require('lua/shared/TimedActions/ISPickupDung');return _G['ISPickupDung']")()

--[lua/shared/TimedActions/ISPickUpGroundCoverItem.d.ts]
Exports.ISPickUpGroundCoverItem = loadstring("require('lua/shared/TimedActions/ISPickUpGroundCoverItem');return _G['ISPickUpGroundCoverItem']")()
Exports.GroundCoverItems = loadstring("require('lua/shared/TimedActions/ISPickUpGroundCoverItem');return _G['GroundCoverItems']")()

--[lua/shared/TimedActions/ISPlaceCarBatteryChargerAction.d.ts]
Exports.ISPlaceCarBatteryChargerAction = loadstring("require('lua/shared/TimedActions/ISPlaceCarBatteryChargerAction');return _G['ISPlaceCarBatteryChargerAction']")()

--[lua/shared/TimedActions/ISPlaceTrap.d.ts]
Exports.ISPlaceTrap = loadstring("require('lua/shared/TimedActions/ISPlaceTrap');return _G['ISPlaceTrap']")()

--[lua/shared/TimedActions/ISPlantainCataplasm.d.ts]
Exports.ISPlantainCataplasm = loadstring("require('lua/shared/TimedActions/ISPlantainCataplasm');return _G['ISPlantainCataplasm']")()

--[lua/shared/TimedActions/ISPlugGenerator.d.ts]
Exports.ISPlugGenerator = loadstring("require('lua/shared/TimedActions/ISPlugGenerator');return _G['ISPlugGenerator']")()

--[lua/shared/TimedActions/ISPlumbItem.d.ts]
Exports.ISPlumbItem = loadstring("require('lua/shared/TimedActions/ISPlumbItem');return _G['ISPlumbItem']")()

--[lua/shared/TimedActions/ISPutOutFire.d.ts]
Exports.ISPutOutFire = loadstring("require('lua/shared/TimedActions/ISPutOutFire');return _G['ISPutOutFire']")()

--[lua/shared/TimedActions/ISRackFirearm.d.ts]
Exports.ISRackFirearm = loadstring("require('lua/shared/TimedActions/ISRackFirearm');return _G['ISRackFirearm']")()

--[lua/shared/TimedActions/ISReadABook.d.ts]
Exports.ISReadABook = loadstring("require('lua/shared/TimedActions/ISReadABook');return _G['ISReadABook']")()

--[lua/shared/TimedActions/ISReloadWeaponAction.d.ts]
Exports.ISReloadWeaponAction = loadstring("require('lua/shared/TimedActions/ISReloadWeaponAction');return _G['ISReloadWeaponAction']")()

--[lua/shared/TimedActions/ISRemoveBrokenGlass.d.ts]
Exports.ISRemoveBrokenGlass = loadstring("require('lua/shared/TimedActions/ISRemoveBrokenGlass');return _G['ISRemoveBrokenGlass']")()

--[lua/shared/TimedActions/ISRemoveBullet.d.ts]
Exports.ISRemoveBullet = loadstring("require('lua/shared/TimedActions/ISRemoveBullet');return _G['ISRemoveBullet']")()

--[lua/shared/TimedActions/ISRemoveBush.d.ts]
Exports.ISRemoveBush = loadstring("require('lua/shared/TimedActions/ISRemoveBush');return _G['ISRemoveBush']")()

--[lua/shared/TimedActions/ISRemoveCarBatteryFromChargerAction.d.ts]
Exports.ISRemoveCarBatteryFromChargerAction = loadstring("require('lua/shared/TimedActions/ISRemoveCarBatteryFromChargerAction');return _G['ISRemoveCarBatteryFromChargerAction']")()

--[lua/shared/TimedActions/ISRemoveGlass.d.ts]
Exports.ISRemoveGlass = loadstring("require('lua/shared/TimedActions/ISRemoveGlass');return _G['ISRemoveGlass']")()

--[lua/shared/TimedActions/ISRemoveGrass.d.ts]
Exports.ISRemoveGrass = loadstring("require('lua/shared/TimedActions/ISRemoveGrass');return _G['ISRemoveGrass']")()

--[lua/shared/TimedActions/ISRemovePatch.d.ts]
Exports.ISRemovePatch = loadstring("require('lua/shared/TimedActions/ISRemovePatch');return _G['ISRemovePatch']")()

--[lua/shared/TimedActions/ISRemoveSheetAction.d.ts]
Exports.ISRemoveSheetAction = loadstring("require('lua/shared/TimedActions/ISRemoveSheetAction');return _G['ISRemoveSheetAction']")()

--[lua/shared/TimedActions/ISRemoveSheetRope.d.ts]
Exports.ISRemoveSheetRope = loadstring("require('lua/shared/TimedActions/ISRemoveSheetRope');return _G['ISRemoveSheetRope']")()

--[lua/shared/TimedActions/ISRemoveWeaponUpgrade.d.ts]
Exports.ISRemoveWeaponUpgrade = loadstring("require('lua/shared/TimedActions/ISRemoveWeaponUpgrade');return _G['ISRemoveWeaponUpgrade']")()

--[lua/shared/TimedActions/ISRepairClothing.d.ts]
Exports.ISRepairClothing = loadstring("require('lua/shared/TimedActions/ISRepairClothing');return _G['ISRepairClothing']")()

--[lua/shared/TimedActions/ISRestAction.d.ts]
Exports.ISRestAction = loadstring("require('lua/shared/TimedActions/ISRestAction');return _G['ISRestAction']")()

--[lua/shared/TimedActions/ISScything.d.ts]
Exports.ISScything = loadstring("require('lua/shared/TimedActions/ISScything');return _G['ISScything']")()

--[lua/shared/TimedActions/ISSetComboWasherDryerMode.d.ts]
Exports.ISSetComboWasherDryerMode = loadstring("require('lua/shared/TimedActions/ISSetComboWasherDryerMode');return _G['ISSetComboWasherDryerMode']")()

--[lua/shared/TimedActions/ISSitOnChairAction.d.ts]
Exports.ISSitOnChairAction = loadstring("require('lua/shared/TimedActions/ISSitOnChairAction');return _G['ISSitOnChairAction']")()

--[lua/shared/TimedActions/ISSitOnGround.d.ts]
Exports.ISSitOnGround = loadstring("require('lua/shared/TimedActions/ISSitOnGround');return _G['ISSitOnGround']")()

--[lua/shared/TimedActions/ISSmashWindow.d.ts]
Exports.ISSmashWindow = loadstring("require('lua/shared/TimedActions/ISSmashWindow');return _G['ISSmashWindow']")()

--[lua/shared/TimedActions/ISSplint.d.ts]
Exports.ISSplint = loadstring("require('lua/shared/TimedActions/ISSplint');return _G['ISSplint']")()

--[lua/shared/TimedActions/ISStitch.d.ts]
Exports.ISStitch = loadstring("require('lua/shared/TimedActions/ISStitch');return _G['ISStitch']")()

--[lua/shared/TimedActions/ISStopAlarmClockAction.d.ts]
Exports.ISStopAlarmClockAction = loadstring("require('lua/shared/TimedActions/ISStopAlarmClockAction');return _G['ISStopAlarmClockAction']")()

--[lua/shared/TimedActions/ISTakeCarBatteryChargerAction.d.ts]
Exports.ISTakeCarBatteryChargerAction = loadstring("require('lua/shared/TimedActions/ISTakeCarBatteryChargerAction');return _G['ISTakeCarBatteryChargerAction']")()

--[lua/shared/TimedActions/ISTakeFuel.d.ts]
Exports.ISTakeFuel = loadstring("require('lua/shared/TimedActions/ISTakeFuel');return _G['ISTakeFuel']")()

--[lua/shared/TimedActions/ISTakeGenerator.d.ts]
Exports.ISTakeGenerator = loadstring("require('lua/shared/TimedActions/ISTakeGenerator');return _G['ISTakeGenerator']")()

--[lua/shared/TimedActions/ISTakePillAction.d.ts]
Exports.ISTakePillAction = loadstring("require('lua/shared/TimedActions/ISTakePillAction');return _G['ISTakePillAction']")()

--[lua/shared/TimedActions/ISTakeTrap.d.ts]
Exports.ISTakeTrap = loadstring("require('lua/shared/TimedActions/ISTakeTrap');return _G['ISTakeTrap']")()

--[lua/shared/TimedActions/ISTakeWaterAction.d.ts]
Exports.ISTakeWaterAction = loadstring("require('lua/shared/TimedActions/ISTakeWaterAction');return _G['ISTakeWaterAction']")()

--[lua/shared/TimedActions/ISToggleClothingDryer.d.ts]
Exports.ISToggleClothingDryer = loadstring("require('lua/shared/TimedActions/ISToggleClothingDryer');return _G['ISToggleClothingDryer']")()

--[lua/shared/TimedActions/ISToggleClothingWasher.d.ts]
Exports.ISToggleClothingWasher = loadstring("require('lua/shared/TimedActions/ISToggleClothingWasher');return _G['ISToggleClothingWasher']")()

--[lua/shared/TimedActions/ISToggleComboWasherDryer.d.ts]
Exports.ISToggleComboWasherDryer = loadstring("require('lua/shared/TimedActions/ISToggleComboWasherDryer');return _G['ISToggleComboWasherDryer']")()

--[lua/shared/TimedActions/ISToggleLightAction.d.ts]
Exports.ISToggleLightAction = loadstring("require('lua/shared/TimedActions/ISToggleLightAction');return _G['ISToggleLightAction']")()

--[lua/shared/TimedActions/ISToggleStoveAction.d.ts]
Exports.ISToggleStoveAction = loadstring("require('lua/shared/TimedActions/ISToggleStoveAction');return _G['ISToggleStoveAction']")()

--[lua/shared/TimedActions/ISTransferAction.d.ts]
Exports.ISTransferAction = loadstring("require('lua/shared/TimedActions/ISTransferAction');return _G['ISTransferAction']")()

--[lua/shared/TimedActions/ISTransferWaterAction.d.ts]
Exports.ISTransferWaterAction = loadstring("require('lua/shared/TimedActions/ISTransferWaterAction');return _G['ISTransferWaterAction']")()

--[lua/shared/TimedActions/ISTrimBeard.d.ts]
Exports.ISTrimBeard = loadstring("require('lua/shared/TimedActions/ISTrimBeard');return _G['ISTrimBeard']")()

--[lua/shared/TimedActions/ISUnbarricadeAction.d.ts]
Exports.ISUnbarricadeAction = loadstring("require('lua/shared/TimedActions/ISUnbarricadeAction');return _G['ISUnbarricadeAction']")()

--[lua/shared/TimedActions/ISUnequipAction.d.ts]
Exports.ISUnequipAction = loadstring("require('lua/shared/TimedActions/ISUnequipAction');return _G['ISUnequipAction']")()

--[lua/shared/TimedActions/ISUnloadBulletsFromFirearm.d.ts]
Exports.ISUnloadBulletsFromFirearm = loadstring("require('lua/shared/TimedActions/ISUnloadBulletsFromFirearm');return _G['ISUnloadBulletsFromFirearm']")()

--[lua/shared/TimedActions/ISUnloadBulletsFromMagazine.d.ts]
Exports.ISUnloadBulletsFromMagazine = loadstring("require('lua/shared/TimedActions/ISUnloadBulletsFromMagazine');return _G['ISUnloadBulletsFromMagazine']")()

--[lua/shared/TimedActions/ISUpgradeWeapon.d.ts]
Exports.ISUpgradeWeapon = loadstring("require('lua/shared/TimedActions/ISUpgradeWeapon');return _G['ISUpgradeWeapon']")()

--[lua/shared/TimedActions/ISWaitWhileGettingUp.d.ts]
Exports.ISWaitWhileGettingUp = loadstring("require('lua/shared/TimedActions/ISWaitWhileGettingUp');return _G['ISWaitWhileGettingUp']")()

--[lua/shared/TimedActions/ISWakeOtherPlayer.d.ts]
Exports.ISWakeOtherPlayer = loadstring("require('lua/shared/TimedActions/ISWakeOtherPlayer');return _G['ISWakeOtherPlayer']")()

--[lua/shared/TimedActions/ISWashClothing.d.ts]
Exports.ISWashClothing = loadstring("require('lua/shared/TimedActions/ISWashClothing');return _G['ISWashClothing']")()

--[lua/shared/TimedActions/ISWashYourself.d.ts]
Exports.ISWashYourself = loadstring("require('lua/shared/TimedActions/ISWashYourself');return _G['ISWashYourself']")()

--[lua/shared/TimedActions/ISWearClothing.d.ts]
Exports.ISWearClothing = loadstring("require('lua/shared/TimedActions/ISWearClothing');return _G['ISWearClothing']")()
Exports.WearClothingAnimations = loadstring("require('lua/shared/TimedActions/ISWearClothing');return _G['WearClothingAnimations']")()

--[lua/shared/TimedActions/ISWringClothing.d.ts]
Exports.ISWringClothing = loadstring("require('lua/shared/TimedActions/ISWringClothing');return _G['ISWringClothing']")()

--[lua/shared/TimedActions/ISWriteSomething.d.ts]
Exports.ISWriteSomething = loadstring("require('lua/shared/TimedActions/ISWriteSomething');return _G['ISWriteSomething']")()

--[lua/shared/Traps/TimedActions/ISAddBaitAction.d.ts]
Exports.ISAddBaitAction = loadstring("require('lua/shared/Traps/TimedActions/ISAddBaitAction');return _G['ISAddBaitAction']")()

--[lua/shared/Traps/TimedActions/ISCheckTrapAction.d.ts]
Exports.ISCheckTrapAction = loadstring("require('lua/shared/Traps/TimedActions/ISCheckTrapAction');return _G['ISCheckTrapAction']")()

--[lua/shared/Traps/TimedActions/ISRemoveBaitAction.d.ts]
Exports.ISRemoveBaitAction = loadstring("require('lua/shared/Traps/TimedActions/ISRemoveBaitAction');return _G['ISRemoveBaitAction']")()

--[lua/shared/Traps/TimedActions/ISRemoveTrapAction.d.ts]
Exports.ISRemoveTrapAction = loadstring("require('lua/shared/Traps/TimedActions/ISRemoveTrapAction');return _G['ISRemoveTrapAction']")()

--[lua/shared/Traps/TrapSystem.d.ts]
Exports.TrapSystem = loadstring("require('lua/shared/Traps/TrapSystem');return _G['TrapSystem']")()

--[lua/shared/Util/AdjacentFreeTileFinder.d.ts]
Exports.AdjacentFreeTileFinder = loadstring("require('lua/shared/Util/AdjacentFreeTileFinder');return _G['AdjacentFreeTileFinder']")()

--[lua/shared/Util/BuildingHelper.d.ts]
Exports.BuildingHelper = loadstring("require('lua/shared/Util/BuildingHelper');return _G['BuildingHelper']")()

--[lua/shared/Util/ISPriorityTable.d.ts]
Exports.ISPriorityTable = loadstring("require('lua/shared/Util/ISPriorityTable');return _G['ISPriorityTable']")()

--[lua/shared/Util/LuaList.d.ts]
Exports.LuaList = loadstring("require('lua/shared/Util/LuaList');return _G['LuaList']")()

--[lua/shared/Util/LuaNet.d.ts]
Exports.LuaNet = loadstring("require('lua/shared/Util/LuaNet');return _G['LuaNet']")()

--[lua/shared/Util/StringReplacer.d.ts]
Exports.StringReplacer = loadstring("require('lua/shared/Util/StringReplacer');return _G['StringReplacer']")()

--[lua/shared/Vehicles/TimedActions/ISAddGasolineToVehicle.d.ts]
Exports.ISAddGasolineToVehicle = loadstring("require('lua/shared/Vehicles/TimedActions/ISAddGasolineToVehicle');return _G['ISAddGasolineToVehicle']")()

--[lua/shared/Vehicles/TimedActions/ISCloseVehicleDoor.d.ts]
Exports.ISCloseVehicleDoor = loadstring("require('lua/shared/Vehicles/TimedActions/ISCloseVehicleDoor');return _G['ISCloseVehicleDoor']")()

--[lua/shared/Vehicles/TimedActions/ISDeflateTire.d.ts]
Exports.ISDeflateTire = loadstring("require('lua/shared/Vehicles/TimedActions/ISDeflateTire');return _G['ISDeflateTire']")()

--[lua/shared/Vehicles/TimedActions/ISHotwireVehicle.d.ts]
Exports.ISHotwireVehicle = loadstring("require('lua/shared/Vehicles/TimedActions/ISHotwireVehicle');return _G['ISHotwireVehicle']")()

--[lua/shared/Vehicles/TimedActions/ISInflateTire.d.ts]
Exports.ISInflateTire = loadstring("require('lua/shared/Vehicles/TimedActions/ISInflateTire');return _G['ISInflateTire']")()

--[lua/shared/Vehicles/TimedActions/ISInstallVehiclePart.d.ts]
Exports.ISInstallVehiclePart = loadstring("require('lua/shared/Vehicles/TimedActions/ISInstallVehiclePart');return _G['ISInstallVehiclePart']")()

--[lua/shared/Vehicles/TimedActions/ISLockDoors.d.ts]
Exports.ISLockDoors = loadstring("require('lua/shared/Vehicles/TimedActions/ISLockDoors');return _G['ISLockDoors']")()

--[lua/shared/Vehicles/TimedActions/ISLockVehicleDoor.d.ts]
Exports.ISLockVehicleDoor = loadstring("require('lua/shared/Vehicles/TimedActions/ISLockVehicleDoor');return _G['ISLockVehicleDoor']")()

--[lua/shared/Vehicles/TimedActions/ISOpenCloseVehicleWindow.d.ts]
Exports.ISOpenCloseVehicleWindow = loadstring("require('lua/shared/Vehicles/TimedActions/ISOpenCloseVehicleWindow');return _G['ISOpenCloseVehicleWindow']")()

--[lua/shared/Vehicles/TimedActions/ISOpenVehicleDoor.d.ts]
Exports.ISOpenVehicleDoor = loadstring("require('lua/shared/Vehicles/TimedActions/ISOpenVehicleDoor');return _G['ISOpenVehicleDoor']")()

--[lua/shared/Vehicles/TimedActions/ISRefuelFromGasPump.d.ts]
Exports.ISRefuelFromGasPump = loadstring("require('lua/shared/Vehicles/TimedActions/ISRefuelFromGasPump');return _G['ISRefuelFromGasPump']")()

--[lua/shared/Vehicles/TimedActions/ISRemoveBurntVehicle.d.ts]
Exports.ISRemoveBurntVehicle = loadstring("require('lua/shared/Vehicles/TimedActions/ISRemoveBurntVehicle');return _G['ISRemoveBurntVehicle']")()

--[lua/shared/Vehicles/TimedActions/ISRepairEngine.d.ts]
Exports.ISRepairEngine = loadstring("require('lua/shared/Vehicles/TimedActions/ISRepairEngine');return _G['ISRepairEngine']")()

--[lua/shared/Vehicles/TimedActions/ISRepairLightbar.d.ts]
Exports.ISRepairLightbar = loadstring("require('lua/shared/Vehicles/TimedActions/ISRepairLightbar');return _G['ISRepairLightbar']")()

--[lua/shared/Vehicles/TimedActions/ISShutOffVehicleEngine.d.ts]
Exports.ISShutOffVehicleEngine = loadstring("require('lua/shared/Vehicles/TimedActions/ISShutOffVehicleEngine');return _G['ISShutOffVehicleEngine']")()

--[lua/shared/Vehicles/TimedActions/ISSmashVehicleWindow.d.ts]
Exports.ISSmashVehicleWindow = loadstring("require('lua/shared/Vehicles/TimedActions/ISSmashVehicleWindow');return _G['ISSmashVehicleWindow']")()

--[lua/shared/Vehicles/TimedActions/ISStartVehicleEngine.d.ts]
Exports.ISStartVehicleEngine = loadstring("require('lua/shared/Vehicles/TimedActions/ISStartVehicleEngine');return _G['ISStartVehicleEngine']")()

--[lua/shared/Vehicles/TimedActions/ISTakeEngineParts.d.ts]
Exports.ISTakeEngineParts = loadstring("require('lua/shared/Vehicles/TimedActions/ISTakeEngineParts');return _G['ISTakeEngineParts']")()

--[lua/shared/Vehicles/TimedActions/ISTakeGasolineFromVehicle.d.ts]
Exports.ISTakeGasolineFromVehicle = loadstring("require('lua/shared/Vehicles/TimedActions/ISTakeGasolineFromVehicle');return _G['ISTakeGasolineFromVehicle']")()

--[lua/shared/Vehicles/TimedActions/ISUninstallVehiclePart.d.ts]
Exports.ISUninstallVehiclePart = loadstring("require('lua/shared/Vehicles/TimedActions/ISUninstallVehiclePart');return _G['ISUninstallVehiclePart']")()

--[lua/shared/Vehicles/TimedActions/ISUnlockVehicleDoor.d.ts]
Exports.ISUnlockVehicleDoor = loadstring("require('lua/shared/Vehicles/TimedActions/ISUnlockVehicleDoor');return _G['ISUnlockVehicleDoor']")()

--[lua/shared/Vehicles/TimedActions/ISWashVehicle.d.ts]
Exports.ISWashVehicle = loadstring("require('lua/shared/Vehicles/TimedActions/ISWashVehicle');return _G['ISWashVehicle']")()

return Exports