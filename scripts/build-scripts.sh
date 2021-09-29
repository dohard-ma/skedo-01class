#!/bin/bash
set -e
BASEDIR=$(dirname "$0")
cd BASEDIR/..
yarn global add ts-node 
yarn install
npm run install-dep -- --name @skedo/code-tools
npm run install-link -- --name @skedo/code-tools
npm run build-ts -- --name @skedo-/code-tools


