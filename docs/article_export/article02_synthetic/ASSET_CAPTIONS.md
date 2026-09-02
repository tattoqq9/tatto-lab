# TATTO LAB 第二号記事 公開素材台帳

対象記事: 「AIの学習データが足りないので、自分のギターを5,000枚に増やした」

## 共通方針

- 公開用画像はすべて 1600×900 px。PNG と WebP を同内容で用意した。
- 元画像、GT、checkpoint、実験結果は変更していない。新しい学習・推論・指標計算も行っていない。
- `GuitarSynthetic_v1` の既存画像、`generation_config.json`、`synthetic_manifest.csv` と既存評価CSVを参照し、crop・注釈・組版だけを行った。
- 選定した画像には人物の顔が写っていないため、顔マスクは全素材で「なし」。人物が写る別素材へ差し替える場合は、公開用コピーだけ顔を黒矩形でマスクすること。
- `04_same_guitar_many_backgrounds` だけ Open Images V7 由来の CC BY 2.0 背景を含む。記事掲載時は下記の個別クレジット、元URL、ライセンスURL、合成・crop済みである旨を併記する。

## 01_green_screen_wrinkles.png / .webp

- 公開用filename: `01_green_screen_wrinkles.png`, `01_green_screen_wrinkles.webp`
- 元source path:
  - Google Drive: `MyDrive/GuitarSegmentationResearch/data/green_screen_guitar/raw_1/PXL_20260808_062037943.jpg`
  - Drive URL: https://drive.google.com/file/d/1E2DrpJupGZ7qLT1f_YxUEuP0B5r9c91W/view
- 何を示す画像か: 最初期の全面グリーンバック撮影と、布のしわ、影、照明ムラの拡大。
- 推奨caption: **最初は背景を全面グリーンにした。しかし布のしわや影、照明ムラまで、そのまま切り抜きの難しさになる。**
- license / attribution: 自前撮影。第三者表記不要。
- 顔マスク: なし（人物・顔なし）。
- 記事内の推奨配置: 「グリーンバックで自分のギターを撮影」の直後。

## 02_green_reflection_white_wall.png / .webp

- 公開用filename: `02_green_reflection_white_wall.png`, `02_green_reflection_white_wall.webp`
- 元source path:
  - Google Drive: `MyDrive/GuitarSegmentationResearch/data/green_screen_guitar/raw_3_/PXL_20260808_223950331.jpg`
  - Drive URL: https://drive.google.com/file/d/1V3b3mjqejV-f-yKtrn5zd0ExVcbOcyFD/view
  - Google Drive: `MyDrive/GuitarSegmentationResearch/data/green_screen_guitar/raw_2/PXL_20260808_214326949.jpg`
  - Drive URL: https://drive.google.com/file/d/1D6VYREc9UxHWWxD2SOVCekXJeyzAlm_i/view
- 何を示す画像か: 金属ペグに映った緑色の反射と、背景を白壁へ切り替えた撮影例。
- 推奨caption: **グリーンバックは万能ではなかった。金属パーツには緑が映り込むため、途中から白い壁も撮影背景として使った。**
- license / attribution: 自前撮影。第三者表記不要。
- 顔マスク: なし（人物・顔なし）。
- 記事内の推奨配置: グリーンバックの問題点を説明した後、「白壁も利用」へ移る箇所。

## 03_raw_cutout_composite.png / .webp

- 公開用filename: `03_raw_cutout_composite.png`, `03_raw_cutout_composite.webp`
- 元source path:
  - Google Drive raw: `MyDrive/GuitarSegmentationResearch/data/green_screen_guitar/raw_3_/PXL_20260808_223710801.jpg`
  - Drive URL: https://drive.google.com/file/d/1ACTgV3PrJKr1yFYh-fYuExqUJ4tDcRJH/view
  - Google Drive corrected RGBA: `MyDrive/GuitarSegmentationResearch/data/green_screen_guitar/corrected/rgba/PXL_20260808_223710801.png`
  - Drive URL: https://drive.google.com/file/d/1kDVen1RbgFZC-AfxytGNZ1tLArmRi5fk/view
  - WSL synthetic: `/home/tatto/datasets/GuitarSynthetic_v1/train/images/train_000172.jpg`
  - WSL manifest: `/home/tatto/datasets/GuitarSynthetic_v1/metadata/synthetic_manifest.csv`
- 何を示す画像か: 同じsource guitarを追跡した、元画像 → human-corrected cutout → 背景合成の3段階。
- 推奨caption: **撮影した1枚を人の目で補正したcutoutにし、別の背景へ合成する。これがSynthetic Dataの基本単位になった。**
- license / attribution: ギターと背景はいずれも自前素材（sample `train_000172`, `background_source_type=self_owned`）。第三者表記不要。
- 顔マスク: なし（人物・顔なし）。
- 記事内の推奨配置: 記事中盤の中心図。「切り抜き素材を作成」から「背景へ合成」へつなぐ位置。

## 04_same_guitar_many_backgrounds.png / .webp

- 公開用filename: `04_same_guitar_many_backgrounds.png`, `04_same_guitar_many_backgrounds.webp`
- 元source path:
  - `/home/tatto/datasets/GuitarSynthetic_v1/train/images/train_000172.jpg`
  - `/home/tatto/datasets/GuitarSynthetic_v1/train/images/train_000184.jpg`
  - `/home/tatto/datasets/GuitarSynthetic_v1/train/images/train_000325.jpg`
  - `/home/tatto/datasets/GuitarSynthetic_v1/train/images/train_000418.jpg`
  - `/home/tatto/datasets/GuitarSynthetic_v1/train/images/train_000456.jpg`
  - `/home/tatto/datasets/GuitarSynthetic_v1/train/images/train_000976.jpg`
  - `/home/tatto/datasets/GuitarSynthetic_v1/metadata/synthetic_manifest.csv`
  - `/home/tatto/datasets/GuitarSynthetic_v1/metadata/attribution_backgrounds.csv`
- 何を示す画像か: source guitarがすべて `PXL_20260808_223710801` のまま、背景・位置・回転・scaleを変えた6例。
- 推奨caption: **ギターは同じ1枚でも、背景、位置、大きさ、向きを変えると、別の学習画像として増やせる。**
- license / attribution: 1点は自前背景、5点は Open Images V7 経由の CC BY 2.0 背景。公開時は次表を図の近くまたは記事末尾のクレジット欄に掲載する。
- 顔マスク: なし（選定された全sampleに判別可能な人物・顔なし）。
- 記事内の推奨配置: 「様々な背景へ合成」の主図。

### 04で使用した第三者背景のクレジット

| sample | creator | original source | license | 加工 |
|---|---|---|---|---|
| `train_000184` | Michael Pedersen | https://www.flickr.com/photos/46289172@N04/4650990358 | CC BY 2.0 | crop、resize、ギター合成 |
| `train_000325` | Argonne National Laboratory | https://www.flickr.com/photos/argonne/8294405591 | CC BY 2.0 | crop、resize、ギター合成 |
| `train_000418` | Richard Corfield | https://www.flickr.com/photos/m0rjc/5360386389 | CC BY 2.0 | crop、resize、ギター合成 |
| `train_000456` | Anna | https://www.flickr.com/photos/bcmom/94322627 | CC BY 2.0 | crop、resize、ギター合成 |
| `train_000976` | J. Todd Poling | https://www.flickr.com/photos/bigdog3c/413751625 | CC BY 2.0 | crop、resize、ギター合成 |

ライセンスURL: https://creativecommons.org/licenses/by/2.0/

推奨クレジット表記例: `Background photos: Michael Pedersen; Argonne National Laboratory; Richard Corfield; Anna; J. Todd Poling / CC BY 2.0. Cropped, resized and composited with the guitar.`

## 05_augmentation_examples.png / .webp

- 公開用filename: `05_augmentation_examples.png`, `05_augmentation_examples.webp`
- 元source path:
  - `/home/tatto/datasets/GuitarSynthetic_v1/train/images/train_000241.jpg`
  - `/home/tatto/datasets/GuitarSynthetic_v1/train/images/train_002861.jpg`
  - `/home/tatto/datasets/GuitarSynthetic_v1/train/images/train_003350.jpg`
  - `/home/tatto/datasets/GuitarSynthetic_v1/train/images/train_001443.jpg`
  - `/home/tatto/datasets/GuitarSynthetic_v1/train/images/train_001120.jpg`
  - `/home/tatto/datasets/GuitarSynthetic_v1/val/images/val_000145.jpg`
  - `/home/tatto/datasets/GuitarSynthetic_v1/metadata/synthetic_manifest.csv`
  - `/home/tatto/datasets/GuitarSynthetic_v1/metadata/generation_config.json`
- 何を示す画像か: manifestでsample単位に確認できる rotation、scale、flip、brightness、saturation、shadow の既存例。
- 推奨caption: **合成時には位置だけでなく、回転、大きさ、左右反転、明るさ、色、影もrandomizeした。**
- license / attribution: 図に選んだ6点はすべて `background_source_type=self_owned`。第三者表記不要。
- 顔マスク: なし（人物・顔なし）。
- 記事内の推奨配置: randomize項目の説明と並べて掲載。
- 注意: blur、noise、JPEGも生成configには含まれるが、適用sample IDはmanifestに個別記録されていない。そのため本図では実例として断定せず、脚注でconfig項目としてのみ示した。

## 06_dataset_5000_structure.png / .webp

- 公開用filename: `06_dataset_5000_structure.png`, `06_dataset_5000_structure.webp`
- 元source path:
  - `/home/tatto/datasets/GuitarSynthetic_v1/metadata/generation_config.json`
  - `/home/tatto/datasets/GuitarSynthetic_v1/metadata/synthetic_manifest.csv`
  - `/home/tatto/datasets/GuitarSynthetic_v1/train/images/train_000172.jpg`
  - `/home/tatto/datasets/GuitarSynthetic_v1/train/alpha/train_000172.png`
  - `/home/tatto/datasets/GuitarSynthetic_v1/train/mask/train_000172.png`
- 何を示す画像か: GuitarSynthetic_v1の正式構成、Train 4,000 / Val 500 / Test 500と、各sampleに保存されたimage / soft alpha / binary mask。
- 推奨caption: **完成したGuitarSynthetic_v1は5,000 samples。Train 4,000、Val 500、Test 500に分け、画像・soft alpha・binary maskを保存した。**
- license / attribution: 構成図と表示sampleは自前素材。第三者表記不要。
- 顔マスク: なし（人物・顔なし）。
- 記事内の推奨配置: 「5,000枚に増やした」の到達点。記事タイトルを回収する位置。

## 07_synthetic_success_gallery.png / .webp

- 公開用filename: `07_synthetic_success_gallery.png`, `07_synthetic_success_gallery.webp`
- 元source path:
  - `/home/tatto/datasets/GuitarSynthetic_v1/train/images/train_000172.jpg`
  - `/home/tatto/datasets/GuitarSynthetic_v1/train/images/train_000337.jpg`
  - `/home/tatto/datasets/GuitarSynthetic_v1/train/images/train_000774.jpg`
  - `/home/tatto/datasets/GuitarSynthetic_v1/train/images/train_001016.jpg`
  - `/home/tatto/datasets/GuitarSynthetic_v1/train/images/train_001443.jpg`
  - `/home/tatto/datasets/GuitarSynthetic_v1/train/images/train_002938.jpg`
  - `/home/tatto/datasets/GuitarSynthetic_v1/metadata/synthetic_manifest.csv`
- 何を示す画像か: 輪郭、位置、大きさ、向きの異なる、学習sampleとして視認しやすい既存positive例。
- 推奨caption: **背景と配置を変えながら、ギターの輪郭を学習できるpositive sampleを大量に用意した。**
- license / attribution: 選定した6点はすべて `background_source_type=self_owned`。第三者表記不要。
- 顔マスク: なし（人物・顔なし）。
- 記事内の推奨配置: 5,000 samplesの構成図の直後、またはギャラリーとして補助掲載。

## 08_domain_gap_and_syn25.png / .webp

- 公開用filename: `08_domain_gap_and_syn25.png`, `08_domain_gap_and_syn25.webp`
- 元source path:
  - Synthetic test: `/home/tatto/projects/GuitarSegmentationResearch/runs/Guitar_Finetune/B_boundary_baseline_512/seed_42/final_comparison.csv`
  - Synthetic-trained checkpoint: `/home/tatto/projects/GuitarSegmentationResearch/runs/Guitar_Finetune/B_boundary_baseline_512/seed_42/best_balanced.pt`
  - Real validation: `/home/tatto/projects/GuitarSegmentationResearch/runs/Real_Ablation/BNFreeze_RealOnly/seed_42/initial_val_comparison.csv`
  - SYN25 selection: `/home/tatto/datasets/Real-Guitar-Train-v2plusv3-syn25-exp1/metadata/synthetic_selection.csv`
  - corrected180正式Final: `/home/tatto/projects/GuitarSegmentationResearch/runs/LPFT_PaperFaithful_Guitar_v1/FINAL_PLAYING_TEST_CORRECTED180/FINAL_ANALYSIS/summary.txt`
- 何を示す画像か: 同じSynthetic-trained checkpoint・threshold 0.60でも、Synthetic testからReal validationへ移ると性能が落ちる既存結果と、後にReal 1,868 + selected Synthetic 623 = SYN25 2,491として再利用した流れ。
- 推奨caption: **Synthetic内では良くても、実写へ移ると性能は落ちた。そこで後のSYN25では、Real Dataを主役にしつつ、選んだSynthetic 623枚を補助的に戻した。**
- license / attribution: 自前の実験結果を図式化。第三者表記不要。
- 顔マスク: なし（数値図、人物画像なし）。
- 記事内の推奨配置: 終盤。「Domain Gapが残った」から「後にSYN25で再利用」へつなぐ位置。
- 注意: 上段はhistorical validationで、Synthetic test `n=500` とReal validation `n=186` は異なる評価dataset。直接の同一dataset比較ではない。下段のFinal IoU 0.8322は `FINAL_PLAYING_TEST_CORRECTED180` の541 framesに対する正式値であり、上段のhistorical validationとは評価系が異なる。図中にもこの区別を記載した。

## 第二号記事で最優先して使う7素材

1. `03_raw_cutout_composite` — 記事の仕組みを一枚で説明する中心図。
2. `01_green_screen_wrinkles` — 出発点と、グリーンバックが簡単ではない理由。
3. `02_green_reflection_white_wall` — 緑反射という具体的失敗と白壁への改善。
4. `04_same_guitar_many_backgrounds` — 「1枚を増やす」を最も直感的に見せる図。
5. `05_augmentation_examples` — randomizeした内容を一般読者向けに可視化。
6. `06_dataset_5000_structure` — 5,000 samplesとsplit構成を確定する図。
7. `08_domain_gap_and_syn25` — Syntheticの限界と、その後のSYN25への橋渡し。

`07_synthetic_success_gallery` は、紙幅や記事のテンポに余裕がある場合の補助ギャラリーとする。
