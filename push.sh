#!/bin/sh

build_site() {
    bundle exec jekyll build
}

setup_git() {
    git config --global user.email "travis@travis-ci.org"
    git config --global user.name "Travis CI"
}

commit_site_files() {
    git worktree add -b "build-$TRAVIS_BUILD_NUMBER" _site origin/update
    bundle exec jekyll build
    cd _site
    git add .
    git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
}

upload_files() {
    git remote add origin-pages https://${GH_TOKEN}@github.com/squaresLab/squaresLab.github.io.git > /dev/null 2>&1
    git push --quiet --set-upstream origin-pages "build-$TRAVIS_BUILD_NUMBER"
}

setup_git
commit_site_files
upload_files
