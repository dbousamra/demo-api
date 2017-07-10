#!/usr/bin/env python
# -*- coding: utf-8 -*-
import os
import getpass
import copy
import socket
import subprocess

PROMPT_DATA = [
    {'env': 'HOST_IP', 'default': socket.gethostbyname(socket.gethostname())},
    {'env': 'DB_HOST', 'default': 'demo-api-db'},
    {'env': 'DB_PORT', 'default': 5432},
    {'env': 'DB_USERNAME', 'default': 'postgres'},
    {'env': 'DB_PASSWORD', 'default': None, 'prompt_function': getpass.getpass},
    {'env': 'DB_NAME', 'default': 'demos'},
]


def prompt_user_input(prompt, environ):
    prompt_user = prompt.get('prompt_function', raw_input)
    prompt_message = '%s=? (default: %s): ' % (prompt['env'], prompt['default'])

    user_input = prompt_user(prompt_message)
    user_input = user_input or prompt['default']

    environ[prompt['env']] = str(user_input)
    return environ


if __name__ == '__main__':
    environ = copy.deepcopy(os.environ)
    for prompt in PROMPT_DATA:
        prompt_user_input(prompt, environ)
    subprocess.call(['bash', os.path.abspath('./scripts/migrate_db.sh')], env=environ)
