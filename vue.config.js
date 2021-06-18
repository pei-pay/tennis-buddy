// github pages の為にdocsフォルダへデプロイ先を変更。
module.exports = {
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production' ? '/tennis-buddy/' : '/',
}
