DESKTOP=/Users/Cody/Desktop
DEV_FOLDER=$DESKTOP/flaneur
PROD_FOLDER=$DESKTOP/flaneur-web
SHARE_LINK="http://codyromano.com:8081/flaneur-web/"

echo "Creating prod Webpack bundle. This could take a while."
webpack --optimize-minimize --define process.env.NODE_ENV="'production'"
rm -rf $PROD_FOLDER
cp -r $DEV_FOLDER $PROD_FOLDER
rm -rf $PROD_FOLDER/node_modules/
rm -rf $PROD_FOLDER/.git
scp -r $PROD_FOLDER root@codyromano.com:/home/public/

echo $SHARE_LINK | pbcopy
echo "Copied $SHARE_LINK to clipboard"
