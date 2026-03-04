setup:
	cp -n .env.example .env
	docker-compose run --rm app make setup

start:
	docker-compose up

test:
	docker-compose run --rm app make test