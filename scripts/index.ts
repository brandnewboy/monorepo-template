import { exec } from 'child_process'


function run() {
  exec('pnpm run -C examples/vue3 dev', (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`)
      return
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`)
      return
    }
    console.log(`stdout: ${stdout}`)
  })
}

run()