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
const luaAPI = readFileSync('./lua.api.partial.d.ts');
const luaInterface = readFileSync('./lua.interface.partial.lua');
const luaReference = readFileSync('./lua.reference.partial.d.ts');

const javaAPI = readFileSync('./java.api.partial.d.ts');
const javaInterface = readFileSync('./java.interface.partial.lua');
const javaReference = readFileSync('./java.reference.partial.d.ts');

let combinedAPI = `/**  @noSelfInFile */\n/// <reference path="reference.d.ts" />\ndeclare module '@asledgehammer/pipewrench' {\n`;
combinedAPI += '// [JAVA-PARTIAL:START]';
combinedAPI += extractPartial(javaAPI.toString());
combinedAPI += '// [JAVA-PARTIAL:END]';
combinedAPI += '// [LUA-PARTIAL:START]';
combinedAPI += extractPartial(luaAPI.toString());
combinedAPI += '// [LUA-PARTIAL:END]';
combinedAPI += '\n}';
writeFileSync('PipeWrench.d.ts', combinedAPI);

let combinedInterface = 'local Exports = {}\n';
combinedInterface += '-- [LUA-PARTIAL:START]';
combinedInterface += extractPartial(javaInterface.toString());
combinedInterface += '-- [LUA-PARTIAL:STOP]';
combinedInterface += '-- [JAVA-PARTIAL:START]';
combinedInterface += extractPartial(luaInterface.toString());
combinedInterface += '-- [JAVA-PARTIAL:STOP]';
combinedInterface += 'return Exports\n';
writeFileSync('PipeWrench.lua', combinedInterface);

let combinedReference = '// [JAVA-PARTIAL:START]';
combinedReference += extractPartial(javaReference.toString());
combinedReference += '// [JAVA-PARTIAL:STOP]';
combinedReference += '// [LUA-PARTIAL:STOP]';
combinedReference += extractPartial(luaReference.toString());
combinedReference += '// [LUA-PARTIAL:STOP]';
writeFileSync('reference.d.ts', combinedReference);
