import { readFileSync, writeFileSync } from 'fs';
const extractPartial = (str: string) => {
  const startMarker = '[PARTIAL:START]';
  const endMarker = '[PARTIAL:STOP]';
  const start = str.indexOf(startMarker);
  let end = str.indexOf(endMarker);
  for (var i = end; i >= 0; i--) {
    if (str[i] === '\n') {
      end = i + 1;
      break;
    }
  }
  return str.slice(start + startMarker.length, end);
};
const sharedLuaAPI = readFileSync('./lua.shared.api.partial.d.ts');
const serverLuaAPI = readFileSync('./lua.server.api.partial.d.ts');
const clientLuaAPI = readFileSync('./lua.client.api.partial.d.ts');

const sharedLuaInterface = readFileSync('./lua.shared.interface.partial.lua');
const serverLuaInterface = readFileSync('./lua.server.interface.partial.lua');
const clientLuaInterface = readFileSync('./lua.client.interface.partial.lua');

const luaReference = readFileSync('./lua.reference.partial.d.ts');

const javaAPI = readFileSync('./java.api.partial.d.ts');
const javaInterface = readFileSync('./java.interface.partial.lua');
const javaReference = readFileSync('./java.reference.partial.d.ts');

// ======== start API ========

// include java apis and lua shared apis
let combinedAPI =
  `/**  @noSelfInFile */\n` +
  `/// <reference path="reference.d.ts" />\n` +
  `// for type hinting\n` +
  `/// <reference path="server.d.ts" />\n` +
  `/// <reference path="client.d.ts" />\n` +
  `declare module '@asledgehammer/pipewrench' {\n`;
combinedAPI += '// [JAVA-PARTIAL:START]\n';
combinedAPI += extractPartial(javaAPI.toString());
combinedAPI += '// [JAVA-PARTIAL:END]\n';
combinedAPI += '// [LUA-PARTIAL:START]\n';
combinedAPI += extractPartial(sharedLuaAPI.toString());
combinedAPI += '// [LUA-PARTIAL:END]\n';
combinedAPI += '\n}';
writeFileSync('PipeWrench.d.ts', combinedAPI);

// only server apis
let serverCombinedAPI =
  `/**  @noSelfInFile */\n` +
  `/// <reference path="reference.d.ts" />\n` +
  `declare module '@asledgehammer/pipewrench/server' {\n`;
serverCombinedAPI += '// [LUA-PARTIAL:START]\n';
serverCombinedAPI += extractPartial(serverLuaAPI.toString());
serverCombinedAPI += '// [LUA-PARTIAL:END]\n';
serverCombinedAPI += '\n}';
writeFileSync('server.d.ts', serverCombinedAPI);

// only client apis
let clientCombinedAPI =
  `/**  @noSelfInFile */\n` +
  `/// <reference path="reference.d.ts" />\n` +
  `declare module '@asledgehammer/pipewrench/client' {\n`;
clientCombinedAPI += '// [LUA-PARTIAL:START]\n';
clientCombinedAPI += extractPartial(clientLuaAPI.toString());
clientCombinedAPI += '// [LUA-PARTIAL:END]\n';
clientCombinedAPI += '\n}';
writeFileSync('client.d.ts', clientCombinedAPI);

// ======== end API ========

// ======== start Interface ========

// include java interfaces and lua shared interfaces
let sharedCombinedInterface = 'local Exports = {}\n';
sharedCombinedInterface += '-- [JAVA-PARTIAL:START]\n';
sharedCombinedInterface += extractPartial(javaInterface.toString());
sharedCombinedInterface += '-- [JAVA-PARTIAL:STOP]\n';
sharedCombinedInterface += '-- [LUA-PARTIAL:START]\n';
sharedCombinedInterface += extractPartial(sharedLuaInterface.toString());
sharedCombinedInterface += '-- [LUA-PARTIAL:STOP]\n';
sharedCombinedInterface += 'return Exports\n';
writeFileSync('PipeWrench.lua', sharedCombinedInterface);

// only server interfaces
let serverCombinedInterface = 'local Exports = {}\n';
serverCombinedInterface += '-- [LUA-PARTIAL:START]\n';
serverCombinedInterface += extractPartial(serverLuaInterface.toString());
serverCombinedInterface += '-- [LUA-PARTIAL:STOP]\n';
serverCombinedInterface += 'return Exports\n';
writeFileSync('server.lua', serverCombinedInterface);

// only client interfaces
let clientCombinedInterface = 'local Exports = {}\n';
clientCombinedInterface += '-- [LUA-PARTIAL:START]\n';
clientCombinedInterface += extractPartial(clientLuaInterface.toString());
clientCombinedInterface += '-- [LUA-PARTIAL:STOP]\n';
clientCombinedInterface += 'return Exports\n';
writeFileSync('client.lua', clientCombinedInterface);

// ======== end Interface ========

let combinedReference = '// [JAVA-PARTIAL:START]\n';
combinedReference += extractPartial(javaReference.toString());
combinedReference += '// [JAVA-PARTIAL:STOP]\n';
combinedReference += '// [LUA-PARTIAL:STOP]\n';
combinedReference += extractPartial(luaReference.toString());
combinedReference += '// [LUA-PARTIAL:STOP]\n';
writeFileSync('reference.d.ts', combinedReference);
