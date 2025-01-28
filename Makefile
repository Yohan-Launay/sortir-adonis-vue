ADONIS = node ace
DOCKER = docker compose
Arguments := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))

# docker
up:
	$(DOCKER) up -d && npm run dev

down:
	$(DOCKER) down

# run 
nrd:
	npm run dev

# install
install:
	npm install

# list
list:
	$(ADONIS) list 

routes:
	$(ADONIS) list:routes

# migration
fresh:
	$(ADONIS) migration:fresh

refresh:
	$(ADONIS) migration:refresh

reset:
	$(ADONIS) migration:reset

roll:
	$(ADONIS) migration:rollback
	
run:
	$(ADONIS) migration:run

status:	
	$(ADONIS) migration:status

# db
seed:
	$(ADONIS) db:seed

truncate:
	$(ADONIS) db:truncate

wipe:
	$(ADONIS) db:wipe

# make
controller:
	$(ADONIS) make:controller $(Arguments)

command:
	$(ADONIS) make:command $(Arguments)

event:
	$(ADONIS) make:event $(Arguments)

exception:
	$(ADONIS) make:exception $(Arguments)

factory:
	$(ADONIS) make:factory $(Arguments)

listener:
	$(ADONIS) make:listener $(Arguments)

middleware:
	$(ADONIS) make:middleware $(Arguments)

migration:
	$(ADONIS) make:migration $(Arguments)

model:
	$(ADONIS) make:model $(Arguments)

preload:
	$(ADONIS) make:preload $(Arguments)

provider:
	$(ADONIS) make:provider $(Arguments)

seeder:
	$(ADONIS) make:seeder $(Arguments)

service:
	$(ADONIS) make:service $(Arguments)

test:
	$(ADONIS) make:test $(Arguments)

validator:
	$(ADONIS) make:validator $(Arguments)

view:
	$(ADONIS) make:view $(Arguments)
