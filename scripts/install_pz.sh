set -e
# mkdir -p steamcmd
# curl -sqL "https://steamcdn-a.akamaihd.net/client/installer/steamcmd_osx.tar.gz" | tar zxvf - --directory steamcmd
# cd steamcmd
steamcmd +force_install_dir $PWD/pzserver/ +login anonymous +app_update 380870 -beta ${1:-stable} validate +quit
