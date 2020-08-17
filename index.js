const core = require("@actions/core");

const github = require("@actions/github");

const labels = core.getInput("labels", {required: true}).split(",");

core.setOutput("checkedLabels", labels);

let hasLabel = false;
labels.foreach(label => github.context.payload.pull_request.labels.some(
    item => { if (item.name === label) { hasLabel = true; }}
));
core.setOutput("hasLabel", hasLabel);

console.log(`Does 'pull_request' has at least one of the '${labels}'?: ${hasLabel}`);
console.log(`You can use this output as 'steps.<step id>.outputs.hasLabel' and 'steps.<step id>.outputs.checkedLabels' `);
