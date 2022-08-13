const fs = require("fs")
const path = require("path")

function patch_fmod_fmod() {
    console.log("Patching java/fmod_fmod.d.ts ...")
    try {
        const file = path.join(__dirname, "java/fmod_fmod.d.ts")
        let content = fs.readFileSync(file, 'utf-8')
        content = content.replaceAll(": fmod.fmod", ": fmod")
        fs.writeFileSync(file, content)
    }
    catch(error) {
        console.error(error)
    }
}

function patch_pipewrench() {
    console.log("Patching PipeWrench.d.ts ...")
    try {
        const file = path.join(__dirname, "PipeWrench.d.ts")
        let content = fs.readFileSync(file, 'utf-8')

        content = content.replace(`// [server/recipecode.d.ts]`, ``)
        content = content.replace(`export abstract class Recipe extends lua.server.Recipe {}`, ``)
        content = content.replace(`export abstract class scavenges extends lua.shared.Foraging.scavenges {}`, ``)
        content = content.replace(`export abstract class ThermoDebug extends lua.client.DebugUIs.DebugMenu.Climate.ThermoDebug {}`, ``)
        content = content.replace(`lua.shared.ISBaseObject.ISBaseObject`, `lua.shared.ISBaseObject`)
        content = content.replace(`export abstract class Joypad extends lua.shared.JoyPad.Joypad {}`, ``)
        
        content = content.replace(`/** @customConstructor CGlobalObject.new */`, ``)
        content = content.replace(`export class CGlobalObject extends zombie.globalObjects.CGlobalObject {}`, ``)
        content = content.replace(`/** @customConstructor CGlobalObjectSystem.new */`, ``)
        content = content.replace(`export class CGlobalObjectSystem extends zombie.globalObjects.CGlobalObjectSystem {}`, ``)

        content = content.replace(`/** @customConstructor SGlobalObject.new */`, ``)
        content = content.replace(`export class SGlobalObject extends zombie.globalObjects.SGlobalObject {}`, ``)
        content = content.replace(`/** @customConstructor SGlobalObjectSystem.new */`, ``)
        content = content.replace(`export class SGlobalObjectSystem extends zombie.globalObjects.SGlobalObjectSystem {}`, ``)

        fs.writeFileSync(file, content)
    }
    catch(error) {
        console.error(error)
    }
}

function patch_ThermoDebug() {
    console.log("Patching ThermoDebug.d.ts ...")
    try {
        const file = path.join(__dirname, "lua/client/DebugUIs/DebugMenu/Climate/ThermoDebug.d.ts")
        let content = fs.readFileSync(file, 'utf-8')
        let remove = `    export abstract class ThermoDebug {\n`
           remove += `      static [id: string]: any;\n`
           remove += `    }`
        content = content.replace(remove, ``)

        fs.writeFileSync(file, content)
    }
    catch(error) {
        console.error(error)
    }
}

function getAllFiles(dirPath, arrayOfFiles) {
    files = fs.readdirSync(dirPath)

    arrayOfFiles = arrayOfFiles || []

    files.forEach(function(file) {
        const fullPath = path.join(dirPath, "/", file)
        if (fs.statSync(fullPath).isDirectory()) {
            arrayOfFiles = getAllFiles(fullPath, arrayOfFiles)
        } else {
            arrayOfFiles.push(fullPath)
        }
    })

    return arrayOfFiles
}

function patch_ISBaseObject() {
    console.log("Patching ISBaseObject ...")
    try {
        const dir = path.join(__dirname, 'lua')
        const files = getAllFiles(dir)

        files.forEach(file => {
            try {
                let content = fs.readFileSync(file, 'utf-8')

                if (content.includes('lua.shared.ISBaseObject.ISBaseObject')) {
                    console.log(`> Patching ${file} ...`)
                    content = content.replaceAll(`lua.shared.ISBaseObject.ISBaseObject`, `lua.shared.ISBaseObject`)
                    fs.writeFileSync(file, content)
                }
            }
            catch(error) {
                console.error(error)
            }
        })
    }
    catch(error) {
        console.error(error)
    }
}

// Run
patch_fmod_fmod()
patch_pipewrench()
patch_ThermoDebug()
patch_ISBaseObject()
