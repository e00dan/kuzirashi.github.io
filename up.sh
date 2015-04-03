if ember build -e production; then #  --environment=production
  printf 'Build successful.\n'
  if rm -rf ../kuzi-hub/*; then
    if cp -Rf dist/* ../kuzi-hub; then
      cd ../kuzi-hub
      git add -A
      git commit -m 'Changes'
      if git push; then
        printf 'Finished!\n'
      fi
    fi
  fi
else
  printf 'Build failed.\n'
fi