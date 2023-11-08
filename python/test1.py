#!/usr/bin/python3
import os
import cmd
class simpleshell(cmd.Cmd):
    prompt = "(hbnb) "
    def do_quit(self, *args):
        return True
    do_exit = do_quit
    def do_clear(self, *args):
        if os.name == "posix":
            os.system("clear")
    def do_EOF(self, *args):
        return True

simpleshell().cmdloop()
