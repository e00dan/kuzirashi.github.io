if ember build -e production; then #  --environment=production
  printf 'Build successful.\n'
  if rm -rf ../kuzi-hub/*; then
    if cp -Rf dist/* ../kuzi-hub; then
      cd ../kuzi-hub
      git add .
      git commit -m 'Changes'
      if git push origin master; then
        printf 'Finished!\n'
      fi
    fi
  else
    printf 'Cant remove directory.\n'
  fi
else
  printf 'Build failed.\n'
fi