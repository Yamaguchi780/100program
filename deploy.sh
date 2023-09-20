#!/bin/bash

# エラーが発生した場合にスクリプトを終了
set -e

# ビルドの実行
npm run build

# gh-pages ブランチに移動 (存在しなければ新しく作成)
git checkout -B gh-pages

# ビルドの結果をコピー
cp -r build/* .

# 変更をコミット
git add -A
git commit -m "Deploy to gh-pages"

# GitHubにプッシュ
git push origin gh-pages

# 元のブランチに戻る
git checkout yamaguchi
