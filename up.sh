if ember build -e production; then
  printf 'Build successful.\n'
  if rm -rf ../kuzi-hub/*; then
    # rm -rf ../kuzi-hub/.git
    if cp -Rf dist/* ../kuzi-hub; then
      cp .travis.yml ../kuzi-hub/
      cd ../kuzi-hub
      # git init
      # git checkout -b master
      git add .
      # git remote add origin git@github.com:Kuzirashi/kuzirashi.github.io.git
      git commit -m 'Changes'
      if git push origin master -u; then
        printf 'Finished!\n'
      fi
    fi
  else
    printf 'Cant remove directory.\n'
  fi
else
  printf 'Build failed.\n'
fi
