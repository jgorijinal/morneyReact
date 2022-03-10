#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'update' &&
git remote add origin git@github.com:jgorijinal/r-version-morney.git &&
git branch -M main &&
git push -u origin main -f
cd -