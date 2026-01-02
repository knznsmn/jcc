---
title: main() Arguments
date: 2025-12-15
category: programming
tags:
  - c
excerpt: C main function arguments
---
```c
int main(int argc, char *argv[])
```

`argc` stands for “argument count.” It tells you how many strings were passed to the program on the command line, including the program name itself. So it’s always at least 1.

`argv` stands for “argument vector.” It’s an array of strings (`char*`) where each element is one argument from the command line. `argv[0]` is the program name, `argv[1]` is the first actual argument, and so on up to `argv[argc-1]`.

Everything else in `argv` is just pointers to strings stored in memory. They’re null-terminated like normal C strings.

In the function parameter list, `argv` has the type:

```c
char **argv //That is “pointer to pointer to char”
```

Each argument is a string → a string in C is `char *`.
`argv` is a sequence of those strings → a sequence of `char *`.

A sequence in memory is accessed via a pointer → `char **`

Arrays decay to pointers when passed to functions. Conceptually it represents an array, but mechanically it is a pointer.

## Where the strings live in memory

The strings in `argv` are created and owned by the operating system before `main` starts.

They exist in memory that is already set up when your program begins.

You must not assume they are on the stack or heap, and you must not free them.

## `argv[argc]`

`argv[argc]` is guaranteed to be NULL.

This is not an accident. It allows `argv` to be treated like a null-terminated list of pointers, similar to how strings are null-terminated lists of characters.

This means two valid ways to iterate over arguments exist:

- Using `argc`
- Using `argv[i] != NULL`

## Types of `argv`

`argv` has type `char **`

`argv[1]` therefore has type `char *`

`argv[1][0]` therefore has type `char`

Now the evaluation, step by step:

`argv` is a pointer to the first element of a sequence of `char` *.

`argv[1]` means: take `argv`, move one element forward (by `sizeof(char *)` bytes), and read what’s there.

The result is a `char *` pointing to the first character of the second argument string.

`argv[1][0]` means: take that char *, move zero characters forward, and read the char stored there.

So the final result of `argv[1][0]` is:

the first character of the second argument, as a `char` value.

If the program is run as:

```bash
./myprog hello world
```

Then `argv[1][0]` evaluates to the character `'h'`.

## `&argv[1][0]`

`argv[1][0]` has type char.
Applying `&` to it gives the address of that char.

So:

The type of `&argv[1][0]` is `char *`

The meaning is: a pointer to the first character of the second argument string.

Note what just happened conceptually. `argv[1]` already had type `char` *, and for a well-formed argument string this relationship holds:

```c
argv[1] == &argv[1][0]
```

They compare equal as pointer values, even though they arise from different expressions. That equivalence is not magic; it falls straight out of how arrays and pointers work in C.

`argv[1]` has type `char *`.
`argv[1] + 1` also has type `char *`.

Pointer arithmetic does not advance by the size of the pointer itself. It advances by the size of the thing the pointer points to.

`argv[1]` is a char *

It points to a `char`

`sizeof(char)` is defined to be exactly 1 byte

So:

`argv[1] + 1` means:

1. take the address stored in `argv[1]`
2. add 1 byte
3. interpret the result as a `char *`

It points to the second character of the second argument string.

```c
./myprog hello world
```

Memory-wise for "hello":

```c
'h' 'e' 'l' 'l' 'o' '\0'
 ^   ^
 |   |
argv[1]   argv[1] + 1
```

So:

- `*argv[1]` is 'h'
- `*(argv[1] + 1)` is 'e'
- `argv[1][1]` is also 'e'

**`p + n` advances by `n * sizeof(*p)` bytes, not `sizeof(p)`**

## `argv + 1`

- `argv` has type `char **`   
- Therefore `argv + 1` also has type `char **`

`argv` points to the first element of a contiguous sequence of `char *`. Each element in that sequence is one command-line argument pointer.

So:

`argv + 1` means:

- take the address stored in `argv`
- add `1 * sizeof(char *)` bytes
- interpret the result as a `char **`

It points to **the second element of the `argv` array**, i.e. the location that holds `argv[1]`.

Important distinction:

- `argv + 1` points to a **pointer**
- `argv[1]` is that **pointer’s value**
- `*(argv + 1)` is exactly the same as `argv[1]`
