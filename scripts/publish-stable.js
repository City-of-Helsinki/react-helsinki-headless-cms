/* eslint-disable @typescript-eslint/no-var-requires */

const { execShellCommand, prepareToPublish } = require("./utils");

async function publish() {
  await prepareToPublish();

  try {
    const [stdout, stderr] = await execShellCommand(
      "npm publish --color always --registry=https://registry.npmjs.org/"
    );
    process.stdout.write(stdout);
    process.stderr.write(stderr);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    process.exit(1);
  }
}

publish();
