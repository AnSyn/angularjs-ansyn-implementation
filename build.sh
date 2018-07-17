# you can pass your projects dir path as a parameter (e.g. /c/projects)
# the default is the parent dir of the current dir

PROJECTS_DIR=$1
if [ -z "$PROJECTS_DIR" ]
then
	PROJECTS_DIR="${PWD}/.."
fi

ANSYN_ROOT="$PROJECTS_DIR/Ansyn/build/buildBundle"
cd $ANSYN_ROOT

# build!

gulp createCdn

# copy!

cd "$PROJECTS_DIR/ansyn-angular1"
cp $ANSYN_ROOT/deployNoZone/ansynNoZone.js ./app/scripts/
cp $ANSYN_ROOT/dist/fontawesome* ./app
cp $ANSYN_ROOT/dist/roboto* ./app
rm -rf ./app/assets
cp -r $ANSYN_ROOT/dist/assets ./app/assets
node scripts/edit-config
