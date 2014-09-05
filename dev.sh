
PREFIX=$(cd "$(dirname "$0")"; pwd)

ps ux|grep "jitter"|grep -v grep |awk '{print $2}'|xargs kill -9
#jitter $PREFIX/coffee $PREFIX/source &
jitter coffee source &
supervisor source/app.js
