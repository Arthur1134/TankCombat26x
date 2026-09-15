# Deploy Tank Combat 26x to RUN.world

## One-time setup
1. Install Node.js 20+ (https://nodejs.org)
2. In PowerShell: `irm https://github.com/series-ai/rundot-cli-releases/releases/latest/download/install.ps1 | iex`
3. Restart PowerShell, then: `rundot --help`
4. From this folder: `npm install @series-inc/rundot-game-sdk@latest`
5. `rundot login` (Google account in the browser)
6. `rundot init` — name it **Tank Combat 26x**, build folder `./dist`

## Every release
```powershell
npm run build
rundot deploy
```
Unlisted play link by default. When ready for catalog Explore:
```powershell
rundot deploy --public
```

Optional metadata:
```powershell
rundot game set-name "Tank Combat 26x"
rundot game set-description "Bounce-shot tank campaign: hold zones, smash buildings for weapons, beat the giant boss."
rundot game set-keywords "tank,action,co-op,arcade,boss,campaign"
```
