set -e

ANSYN_ROOT=~/Desktop/Development/Columbus/ansyn/build/buildBundle
cd $ANSYN_ROOT

# build!

gulp createCdn

# copy!

cd ~/Desktop/Development/Columbus/ansyn-angular1
cp $ANSYN_ROOT/deployNoZone/ansynNoZone.js ./app/scripts/
cp $ANSYN_ROOT/dist/fontawesome* ./app
cp $ANSYN_ROOT/dist/roboto* ./app
rm -rf ./app/assets
cp -r $ANSYN_ROOT/dist/assets ./app/assets
