# TATTO LAB Umami Analytics patch

This patch adds Umami Cloud tracking to `src/layouts/BaseLayout.astro`.

Tracking is limited to the production domain:

- `tatto-lab.pages.dev`

Therefore local development at `localhost:4321` is not counted.

## Install (WSL)

```bash
cd ~/projects/tatto-lab
rm -rf /tmp/tatto-umami
unzip -q /mnt/c/Users/uchig/Downloads/tatto-lab-umami-patch.zip -d /tmp/tatto-umami
cp -a /tmp/tatto-umami/tatto-lab-umami-patch/. ~/projects/tatto-lab/
```

Then verify:

```bash
npm run build
git diff --check
git diff -- src/layouts/BaseLayout.astro
```

If correct:

```bash
git add src/layouts/BaseLayout.astro
git commit -m "Add Umami analytics"
git push
```
