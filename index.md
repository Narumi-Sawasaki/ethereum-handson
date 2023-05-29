# リポジトリをcloneする
* `git clone https://github.com/Narumi-Sawasaki/ethereum-handson.git`

# 準備方法
* `npm install`
* `cp .env.sample .env`

# MetaMaskのセットアップ
* [MetaMask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)を入れる
* [秘密鍵の取得](https://coincheck.com/ja/article/472#:~:text=%E7%B4%B9%E4%BB%8B%E3%81%97%E3%81%BE%E3%81%99%E3%80%82-,%E7%A7%98%E5%AF%86%E9%8D%B5%E3%82%92%E3%82%A8%E3%82%AF%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%88%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95,%E3%80%8C%E7%A2%BA%E8%AA%8D%E3%80%8D%E3%82%92%E6%8A%BC%E3%81%97%E3%81%BE%E3%81%99%E3%80%82)

# Alchemyのセットアップ
* [Alchemy](https://auth.alchemy.com/)に登録する

# テスト方法
* `npx hardhat test`

# Sepolia faucetを取得
* [Sepolia faucet](https://sepoliafaucet.com/)からfaucetを取得

# deploy
* `npx hardhat run scripts/deploy.js --network sepolia`

# contract実行
* `node scripts/get_oath.js`
* `node scripts/set_oath.js <oath>`
