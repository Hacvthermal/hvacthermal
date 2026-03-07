# Run this script from the project root (hvacthermal) after installing Git.
# Usage: .\scripts\git-init-and-commit.ps1

Set-Location $PSScriptRoot\..

if (Test-Path .git) {
    Write-Host "Git repo already exists. Skipping init."
} else {
    git init
    Write-Host "Git repository initialized."
}

git add .
Write-Host "Staged all files."
git status

$commitMsg = "Initial commit: HVACThermal calculator site"
git commit -m $commitMsg
if ($LASTEXITCODE -eq 0) {
    Write-Host "Initial commit created. Next: create a repo on GitHub, then run:"
    Write-Host "  git remote add origin https://github.com/YOUR_USERNAME/hvacthermal.git"
    Write-Host "  git branch -M main"
    Write-Host "  git push -u origin main"
} else {
    Write-Host "Commit failed or nothing to commit. Check git status above."
}
