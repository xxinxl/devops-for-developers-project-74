ds-setup:
	docker-compose run --rm app make setup

ds-test:
	docker-compose -f docker-compose.yml up --abort-on-container-exit --exit-code-from app

ds-dev:
	docker-compose up

test:
	docker-compose -f docker-compose.yml up --abort-on-container-exit --exit-code-from app

ci:
	docker-compose -f docker-compose.yml up --abort-on-container-exit --exit-code-from app

setup:
	cp -n .env.example .env
	npm install
	npm run migrate