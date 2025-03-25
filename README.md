# prototype_1

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Git 

### After clone manual .
0. echo "# Magonote_App" >> README.md
 - README.mdファイルに「# Magonote_App」というテキストを追記（または新規作成）します。
（プロジェクトのタイトルを記述するための初期設定です。）

1. git init
 - 現在のディレクトリで新しいGitリポジトリを初期化します。
（これにより、バージョン管理が開始されます。）

2. git add README.md
 - README.mdファイルをステージングエリアに追加します。
（全ファイルを追加する場合は git add --all とします。）

3. git commit -m "first commit"
 - ステージングエリアにある変更を「first commit」というメッセージでコミットします。
（最初の変更履歴を記録します。）

4. git branch -M main
 - 現在のブランチの名前を強制的に「main」に変更します。
（ローカルリポジトリのデフォルトブランチを「main」に設定します。）

5. git remote add origin https://github.com/Ryu114-Sato/Magonote_App.git
 - GitHub上のリポジトリURLを「origin」という名前でリモートリポジトリとして登録します。
（ローカルリポジトリとリモートリポジトリを連携させるための設定です。）

6. git push -u origin main
 - ローカルの「main」ブランチをリモートの「origin」リポジトリにプッシュし、今後のプッシュ・プルの対象として追跡関係を設定します。
（これにより、リモートにも初回のコミット内容が反映されます。）
      
-  git branch feature_202504 
     - create brantch .

- git checkout feature_202504
     - change another brantch .




