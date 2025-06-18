import Crabshell from ".."
import { Engine } from "../enums"

const can = new Crabshell(`127.0.0.1:50051`)

const bot = await can.create({
    name: "Master Machine",
    engine: Engine.Node,
})

console.log(bot)
