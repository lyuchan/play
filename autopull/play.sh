PRO_DIR="~/play/"
echo "start--------------------"
cd $PRO_DIR
echo "pull git code"
git pull
echo "restart game"
pm2 restart game
echo "finished-----------------"

