Memory leaks

1 - references

    - global variables
    - multiple refs for one obj
    - singleton

2 - closures

- recursive closuers
- using require in code (for ex. in condition)
- func inside loops

3 - OS and Language obj

- setTimeout, setInterval

4 - event, subscription

    - EventEmiter
    - cb

5 - chache

need:

- remove old values
- limit size
- remove rarely used values

All memory in node:

- C++ code
- JS code
- Stack
- Heap
- External

можно ключами командной строки выключить автоматический сборщик мусора и вызывать его самому, по мере необходимости:

node --expose-gc program.js

Теперь в глобале появится функция gc(), которую нужно вызывать.

node --trace_gc file.js - look when node call gc

Запуск коду в режимі профілювання – node –inspect file.js
