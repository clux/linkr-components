#!/usr/bin/env bash
set -ex

# NB: javascript and css already inlined here
# NB2: no need to vulcanize anything

# simply make a copy
cp linkr-list.html linkr-list.build.html

# ensure release file references external deps as if they were siblings
sed -i 's/\.\/bower_components/../g' linkr-list.build.html
