@echo off
echo Running build test...
yarn build > build-output.log 2>&1
type build-output.log
echo Build test completed.
