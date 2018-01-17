#!/usr/bin/env node

const readline = require('readline')
const sourceranks = require('.')

if (process.stdin.isTTY) {
  // Read from arguments
  const names = process.argv.slice(2)
  if (!names.length) return usage()
  names.forEach(render)
} else {
  // Read from newline-delimited STDIN
  readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  }).on('line', render)
}

function render (name) {
  console.log(name, sourceranks[name])
}

function usage () {
  console.log(
`To use sourceranks, specify one or many package names.
Examples:

sourceranks express
sourceranks choo chai chalk`)

    // exit gracefully to avoid dumping a bunch of npm info
    process.exit()
}