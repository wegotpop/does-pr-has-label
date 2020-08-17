# Does PR has at least one of the labels?

Do you want to know if a PR has one of a particular set of labels? You can use this action to easily chech that, and use the output as you need:

Example:

```yaml
name: CI
on: 
  pull_request:
    types: [opened, labeled, unlabeled, synchronize]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: wegotpop/pr-has-label-action@master
      id: checkLabel
      with:
        labels: ["PROVISION:FEATURE_BRANCH"]
    - name: Does 'pull_request' has at least one of the ${{ steps.checkLabel.outputs.checkedLabels }} labels? 
      run: echo "${{ steps.checkLabel.outputs.hasLabel }}" 
```
