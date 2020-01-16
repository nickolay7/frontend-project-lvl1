start:
	npx babel-node 'src/index.js'

install:
	npm install

publish:
	npm publish --dry-run

lint:
	npx eslint .