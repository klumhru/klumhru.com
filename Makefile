provision:
	npm install
test:
	CI=1 npm test --ci
build-prod:
	npm build

all: provision test build-prod
