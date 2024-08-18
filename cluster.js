import cluster from 'cluster'
import os from 'os'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const cpus = os.cpus()

cluster.setupPrimary({
    exec: __dirname + '/index.js'
})

for(const cpu of cpus){ cluster.fork() }

cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker: ${worker.process.pid} has been killed, restarting...`)
    cluster.fork()
})
