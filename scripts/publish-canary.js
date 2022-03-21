const { exec } = require("child_process");

const editJsonFile = require("edit-json-file");
const currentGitCommit = require("git-rev-sync");

function execShellCommand(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve([stdout, stderr]);
      }
    });
  });
}

async function publishCanary() {
  const file = editJsonFile(`${__dirname}/../package.json`, {
    autosave: true,
  });
  const originalVersion = file.get("version");
  const canaryVersion = `${originalVersion}-canary-${currentGitCommit.short()}`;

  file.set("version", canaryVersion);

  try {
    const [stdout, stderr] = await execShellCommand(
      "npm publish --tag canary --color always --registry=https://registry.npmjs.org/"
    );

    process.stdout.write(stdout);
    process.stderr.write(stderr);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  } finally {
    file.set("version", originalVersion);
  }
}

publishCanary();
