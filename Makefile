start:
	npx babel-node 'src/bin/startGame.js'

install:
	npm install

publish:
	npm publish --dry-run

lint:
	npx eslint .