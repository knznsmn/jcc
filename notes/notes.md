---
title: Modular Files
date: 2025-12-15
category: programming
tags: [c]
excerpt: A minimal style of separation of files.
---

At a mental-model level, think in terms of translation units. Each .c file is compiled independently into an object file. The linker then combines all object files into a single executable. Header files (.h) exist only to share declarations, not to produce code.

You put definitions in .c files:

- `character.c`
- `monster.c`
- `item.c`
- `main.c`

You put declarations in matching .h files:

- `character.h`
- `monster.h`
- `item.h`

Example:

`character.h`

```c
#ifndef CHARACTER_H
#define CHARACTER_H

typedef struct {
    char *name;
    int hp;
} Character;

Character *character_create(const char *name, int hp);
void character_destroy(Character *c);

#endif

```

`character.c`

```c
#include <stdlib.h>
#include "character.h"

Character *character_create(const char *name, int hp)
{
    Character *c = malloc(sizeof(*c));
    if (!c)
        return NULL;

    c->hp = hp;
    /* allocate and copy name here */
    return c;
}

void character_destroy(Character *c)
{
    if (!c)
        return;
    /* free name here */
    free(c);
}
```

`main.c`

```c
#include "character.h"

int main(void)
{
    Character *c = character_create("Hero", 100);
    character_destroy(c);
    return 0;
}

```

## Compiling without `make`

This is the simplest:

### Option 1

```bash
gcc main.c character.c monster.c item.c -o game
```

GCC will:

1. Compile each .c file separately
2. Link them together

### Option 2: explicit compilation + linking

This makes the steps visible, which is good for learning:

```bash
gcc -c main.c
gcc -c character.c
gcc -c monster.c
gcc -c item.c

gcc main.o character.o monster.o item.o -o game

```

This is exactly what `make` automates.
