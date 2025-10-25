const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");

async function run() {
  // 1) Get inputs values from action
  const bucket = core.getInput("bucket", { required: true });
  const region = core.getInput("bucket-region", { required: true });
  const distFolder = core.getInput("dist-folder", { required: true });

  // 2) Upload files to S3 bucket
  const s3Uri = `s3://${bucket}`;
  exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${region}`);

  const websiteUrl = `http://${bucket}.s3-website-${region}.amazonaws.com`;
  core.setOutput("deployed-url", websiteUrl); // ::set-output

  core.notice(`Deploying from ${distFolder} to ${s3Uri} in region ${region}`);
  core.notice(`Site URL ${websiteUrl}`);
}

run();
